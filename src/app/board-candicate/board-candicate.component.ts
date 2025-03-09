import { Component } from '@angular/core';
import { BoardList, CandidateDetail } from './resources/candidate.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-candicate',
  standalone: false,
  templateUrl: './board-candicate.component.html',
  styleUrl: './board-candicate.component.scss',
})
export class BoardCandicateComponent {
  lists: BoardList[] = [
    {
      name: 'Applied',
      candidates: [
        {
          name: 'Mubarak Ahmad',
          city: 'Islamabad',
          phone: '1234',
        },
        {
          name: 'Ahmad',
          city: 'New york',
          phone: '1234',
        },
        {
          name: 'Justin',
          city: 'Paris',
          phone: '1234',
        },
      ],
    },
    {
      name: 'Shortlisted',
      candidates: [],
    },
    {
      name: 'Interviewed',
      candidates: [],
    },
  ];
  
  connectedLists = ['list-0', 'list-1', 'list-2'];

  drop(event: CdkDragDrop<CandidateDetail[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getCandidateList(name: string) {
    return this.lists.find(list => list.name === name);
  }
}
