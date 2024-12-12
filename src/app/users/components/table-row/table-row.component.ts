import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'tr[app-table-row]',
  imports: [],
  templateUrl: './table-row.component.html',
})
export class TableRowComponent {
  @Input() user!: User;
  @Output() edit = new EventEmitter<User>();
  @Output() delete = new EventEmitter<number>();

  editUser(): void {
    this.edit.emit(this.user);
  }

  deleteUser(): void {
    this.delete.emit(this.user.id!);
  }
}
