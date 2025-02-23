import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare const bootstrap: any;

@Component({
  selector: 'app-upsert-user-modal',
  templateUrl: './upsert-user-modal.component.html',
  imports: [FormsModule, CommonModule],
})
export class UpsertUserModalComponent implements OnInit {
  @Input() user!: User | null;
  @Output() save = new EventEmitter<User>();
  @Output() close = new EventEmitter<void>();

  ngOnInit() {
    const modalElement = document.getElementById('staticBackdrop');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  onSave() {
    this.save.emit(this.user!);
  }

  onClose(form: NgForm) {
    form.reset();
    this.close.emit();
  }
}
