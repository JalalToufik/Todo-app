import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatIconModule } from '@angular/material/icon';
import { TodoItem } from '../todo-item';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatListModule, RouterModule, MatIconModule],
  template: `
    <article>
      <h2 class="title-list">Todo List</h2>
      <div class="a-container">
        <ol>
          @for (item of dataService.items2(); track item.id){
            <div class="list-item">
              <a [routerLink]="['/details', item.id]" matListItemTitle>
                <li>
                  <div>
                    <p>{{ item.title }}</p>
                    <p matListItemLine>{{ item.status }}</p>
                  </div>
                </li>
              </a>
              <button mat-icon-button (click)="deleteItem(item)">
                <mat-icon>delete</mat-icon>
              </button>
            </div>
          }
        </ol>
      </div>
    </article>
  `,
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() { }
  deleteItem(item: TodoItem) {
    const itemId = item?.id; // Use optional chaining to get the id
    if (itemId !== undefined) { // Check if the id is not undefined
      this.dataService.deleteItem(itemId);
      this.router.navigate(['/']);
    }
  }
}
