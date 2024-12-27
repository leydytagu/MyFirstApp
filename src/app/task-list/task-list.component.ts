import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  tasks: string[] = [];
  loading: boolean = true;
  previousTaskCount: number = 0;
  newTask: string = '';

  @ViewChild('buttonRef') buttonRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit: El componente ha sido inicializado.');
    setTimeout(() => {
      this.tasks = ['Task 1', 'Task 2', 'Task 3'];
      this.loading = false;
    }, 2000);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: La vista del componente se ha inicializado');
    this.buttonRef.nativeElement.style.backgroundColor = 'blue';
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: La lista de tareas se ha actualizado');
    this.previousTaskCount = this.tasks.length;
  }

  addTask(): void {
    // Cambié el tipo a void
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }
}
