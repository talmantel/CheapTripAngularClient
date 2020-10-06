import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageComponent } from './no-page/no-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'test', component: NoPageComponent},
  {
    path: 'search',
    loadChildren: () =>
      import('./trip-direction/trip-direction.module').then(
        (m) => m.TripDirectionModule
      )
  }, /* { path: 'path',
        loadChildren: () =>
        import('./search-result/search-result.module').then(
          (m) => m.SearchResultModule
        ),
      } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
