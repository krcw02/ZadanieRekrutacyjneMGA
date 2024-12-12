import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowComponent } from '../table-row/table-row.component';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-table',
  imports: [CommonModule, TableRowComponent, FormsModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() users: User[] = [];

  @Output() editUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<number>();

  editUserEvent(user: User) {
    this.editUser.emit(user);
  }

  deleteUserEvent(id: number) {
    this.deleteUser.emit(id);
  }
}
