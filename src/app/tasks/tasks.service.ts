import { Injectable } from "@angular/core";
import { InewTaskData } from "./task/task.model";
import { DUMMY_TASKS } from "../dummy-tasks";

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = DUMMY_TASKS;
    
      getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId)
      }
    
      deleteTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      }
    
      addTask(taskData : InewTaskData, userId: string) {
        this.tasks.unshift({
          id: new Date().getTime().toString(),
          userId: userId,
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.date
        });
      }
}