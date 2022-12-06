import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'app/shared/shared.module';

const subUserRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: ListComponent
      },
      {
        path: 'add-user',
        pathMatch: 'full',
        component: AddComponent
      },
      {
        path: 'edit-user/:id',
        component: AddComponent
      },
      {
        path: 'view-user/:id',
        component: AddComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
  ],
  imports: [
    RouterModule.forChild(subUserRoutes),
    SharedModule
  ]
})
export class SubUserModule { }
