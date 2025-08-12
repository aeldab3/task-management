import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() create = new EventEmitter<string>()
  @Output() cancel = new EventEmitter<void>();
  createNewTask(title: string) {
    this.create.emit(title);
  }

  onCancel() {
    this.cancel.emit();
  }
}
