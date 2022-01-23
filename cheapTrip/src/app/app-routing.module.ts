import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './links/links.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search/myPath/logo', pathMatch: 'full' },
  {
    path: 'search',
    //   canActivate: [SearchResultGuard],
    loadChildren: () =>
      import('./trip-direction/trip-direction.module').then(
        (m) => m.TripDirectionModule
      ),
  },
 
  {
    path: 'links',component: LinksComponent
   
  },
  /*  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'search',
        //   canActivate: [SearchResultGuard],
        loadChildren: () =>
          import('./trip-direction/trip-direction.module').then(
            (m) => m.TripDirectionModule
          ),
      },
    ],
  }, */

  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
