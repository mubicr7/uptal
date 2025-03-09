import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardCandicateComponent } from './board-candicate/board-candicate.component';


const routes: Routes = [
  { path: '', component: BoardCandicateComponent }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
