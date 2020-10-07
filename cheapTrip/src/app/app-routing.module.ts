import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageComponent } from './no-page/no-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: () =>
      import('./trip-direction/trip-direction.module').then(
        (m) => m.TripDirectionModule
      )
  },
  { path:  "**", component: NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
