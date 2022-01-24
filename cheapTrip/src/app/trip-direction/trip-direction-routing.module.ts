import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageComponent } from '../no-page/no-page.component';
import { TripDirectionComponent } from './trip-direction.component';

const routes: Routes = [
  {
    path: '',
    component: TripDirectionComponent,
    children: [
      {
        path: 'myPath',

        loadChildren: () =>
          import('../search-result/search-result.module').then(
            (m) => m.SearchResultModule
          ),
      },
      { path: 'noPage', component: NoPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TripDirectionRoutingModule {}
