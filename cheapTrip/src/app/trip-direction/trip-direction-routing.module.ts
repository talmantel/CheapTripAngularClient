import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectDirectionComponent } from './select-direction/select-direction.component';
import { TripDirectionComponent } from './trip-direction.component';

const routes: Routes = [
  {
    path: '',
    component: TripDirectionComponent,
  },
  {
    path: 'path',
    loadChildren: () =>
      import('../search-result/search-result.module').then(
        (m) => m.SearchResultModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripDirectionRoutingModule {}
