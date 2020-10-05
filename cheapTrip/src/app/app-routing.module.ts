import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
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
