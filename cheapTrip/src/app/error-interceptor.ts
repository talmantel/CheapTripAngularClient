import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ErrorComponent } from './error/error.component';
import * as fromApp from './store/app.reducer';
import * as TripDirectionActions from './trip-direction/store/trip-direction.actions';
import { Store } from '@ngrx/store';

//import { ErrorComponent } from "./error/error.component";
//ngimport { ErrorService } from "./error/error.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private dialog: MatDialog,
    private store: Store<fromApp.AppState>
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          //console.log('response interceptor', evt);
           if (evt.body.length == 0) {
            this.dialog.open(ErrorComponent, {
              data: { message: 'No result for this search!' },
            });
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage =
          'Server out of humor today! Let try with another one';
          console.log('interceptor');
        if (error.status == 500) {
          this.store.dispatch(new TripDirectionActions.AutocompleteFail('error 500'));
         // this.dialog.open(ErrorComponent, { data: { message: errorMessage } });
        }

        return throwError(error);
      })
    );
  }
}
