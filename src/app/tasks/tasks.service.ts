import { Injectable } from "@angular/core";
import { InewTaskData } from "./task/task.model";
import { DUMMY_TASKS } from "../dummy-tasks";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;
  constructor(){
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  
  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId)
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  addTask(taskData : InewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}