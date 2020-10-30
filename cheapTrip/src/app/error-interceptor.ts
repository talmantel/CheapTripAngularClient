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

import { ErrorComponent } from './error/error.component';
import { MatDialog } from '@angular/material/dialog';

//import { ErrorComponent } from "./error/error.component";
//ngimport { ErrorService } from "./error/error.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
       if (evt.body.length == 0) {
            this.dialog.open(ErrorComponent, {
              data: { message: 'No result for this search!' },
            });
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';
        if (error.statusText == 'Unknown Error') {
          errorMessage = 'Server is sleeping';
        }
        this.dialog.open(ErrorComponent, { data: { message: errorMessage } });

        return throwError(error);
      })
    );
  }
}
