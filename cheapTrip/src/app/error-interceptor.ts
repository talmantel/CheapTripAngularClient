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
import { AlertMessage } from './error/alertMessage.model';

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
          console.log('alert');
          if (evt.body.length == 0) {
            const alertMessage = new AlertMessage('warning', 'Oh no!', 'Sorry, the data we have accumulated is not enough to build a route between the indicated cities. Try changing your request.', ['Back']);
            this.dialog.open(ErrorComponent, {
              data: alertMessage,
            });
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorData: AlertMessage;
        switch (true) {
          case error.status >= 400:
            errorData = new AlertMessage('warning', 'Oh no!', 'Sorry, the data we have accumulated is not enough to build a route between the indicated cities. Try changing your request.', ['Back']);
            break;
          case error.status >= 500:
            errorData = new AlertMessage(
              'error',
              'Oops!',
              'Pss! Our server is sleeping now. Please come back later.',
              ['Close']
            );
            break;
        }
        this.store.dispatch(
          new TripDirectionActions.AutocompleteFail('errorMessage')
        );

        this.dialog.open(ErrorComponent, { data: errorData });
        return throwError(error);
      })
    );
  }
}
