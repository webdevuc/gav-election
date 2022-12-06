import { SharedModule } from 'app/shared/shared.module';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


const votersRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: ListComponent
      },
      {
        path: 'add-voter',
        component: AddComponent
      },
      {
        path: 'edit-voter/:id',
        component: AddComponent
      },
      {
        path: 'view-voter/:id',
        component: AddComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
  imports: [
    RouterModule.forChild(votersRoutes),
    SharedModule

  ]
})
export class VotersModule { }
