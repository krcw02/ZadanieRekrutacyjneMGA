import { Component, OnInit } from '@angular/core';
import { TableComponent } from './../../components/table/table.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { UpsertUserModalComponent } from '../../components/upsert-user-modal/upsert-user-modal.component';

@Component({
  selector: 'app-list-page',
  imports: [
    TableComponent,
    FormsModule,
    CommonModule,
    UpsertUserModalComponent,
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent implements OnInit {
  constructor(private UserService: UserService) {}
  users: User[] = [];
  selectedUser: User | null = null;
  isModalOpen = false;

  ngOnInit(): void {
    this.UserService.getUsers().subscribe((data) => {
      this.users = data;
    }),
      (error: any) => {
        console.error('Błąd podczas pobierania użytkowników', error);
      };
  }
  openModal(user: User | null): void {
    this.selectedUser = user
      ? { ...user }
      : { id: null, first_name: '', last_name: '', email: '', avatar: '' };
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedUser = null;
  }

  deleteUser(id: number): void {
    this.UserService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter((u) => u.id !== id);
      },
      error: (error: any) => {
        console.error('Błąd podczas usuwania użytkownika', error);
      },
    });
  }

  saveData(user: User): void {
    if (user.id !== null) {
      this.UserService.updateUser(user).subscribe({
        next: (data: User) => {
          const index = this.users.findIndex((u) => u.id === user.id);
          this.users[index] = data;
          this.closeModal();
        },
        error: (error: any) => {
          console.error('Błąd podczas aktualizacji użytkownika', error);
        },
      });
    } else {
      this.UserService.createUser(user).subscribe({
        next: (data: User) => {
          this.users.push(data);
          this.closeModal();
        },
        error: (error: any) => {
          console.error('Błąd podczas tworzenia użytkownika', error);
        },
      });
    }
  }
}
