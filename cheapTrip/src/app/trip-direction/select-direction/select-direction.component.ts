import { trigger, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import {map, startWith} from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import * as TripDirectionActions from '../store/trip-direction.actions';
import {Observable, of, Subject, Subscription} from 'rxjs';
import { ILocation, IPathPoint, IPoint, Modes} from '../trip-direction.model';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorInterceptor } from '../../error-interceptor';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';
import {GlobalService} from '../../global/global.service';
import locations from '../../../assets/json_data/locations.json'













@Component({
  selector: 'app-select-direction',
  templateUrl: './select-direction.component.html',
  styleUrls: ['./select-direction.component.scss'],
  animations: [
    trigger('insertRemoveTrigger1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('insertRemoveTrigger2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 1300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})



export class SelectDirectionComponent implements OnInit {


  @ViewChild('startPointInput', {static: false})
  startPointInputEl: ElementRef;
  @ViewChild('endPointInput', {static: false})
  endPointInputEl: ElementRef;


  mode: Modes;
  modes = Modes;
  stateSubscription: Subscription;
  startPointLocation: ILocation = {
    id: 0,
    name: '',
    country_name: '',
    latitude: 0,
    longitude: 0,
  };
  endPointLocation: ILocation = {
    id: 0,
    name: '',
    country_name: '',
    latitude: 0,
    longitude: 0,
  };
  searchEverywhereOption: ILocation = {
    id: 0,
    latitude: 0,
    longitude: 0,
    name: 'Everywhere',
    country_name: 'Everywhere'
  };
  locations: ILocation[] = Object.values(locations);
  startFilteredLocations: Observable<ILocation[]>;
  endFilteredLocations: Observable<ILocation[]>;
  endPointAutoComplete: ILocation;
  startPointAutoComplete: ILocation;




  @ViewChild('nameText', {static: false})
  nameParagraph: ElementRef;


  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private errorInterceptor: ErrorInterceptor
  ) {}

  ngOnInit() {
    this.mode = Modes.SEARCH;
    this.setForm();
    this.endPointAutoComplete = {
      id: 0,
      name: '',
      country_name: '',
      latitude: 0,
      longitude: 0,
    };
    this.startPointAutoComplete = {
      id: 0,
      name: '',
      country_name: '',
      latitude: 0,
      longitude: 0,
    };
    // this.defineRouterParams();
    this.stateSubscription = this.store
      .select('directions')
      .subscribe((state) => {
        this.endPointAutoComplete = state.endPointAutoComplete;
        this.startPointAutoComplete = state.startPointAutoComplete;
        this.mode = state.mode;
      });
  }

  directionForm = new FormGroup({
    startPointControl: new FormControl('', [
      Validators.required,
      this.patternValid({
        pattern: /[a-zA-Zа-яА-Я0-9\-\s]/,
        msg: $localize`:@@onlyRusEng:Sorry,
          For now, we support only English and Russian input.`,
      }),
    ]),
    endPointControl: new FormControl('', [
      Validators.required,
      this.patternValid({
        pattern: /[a-zA-Zа-яА-Я0-9\-\s]/,
        msg: $localize`:@@onlyRusEng:Sorry,
          For now, we support only English and Russian input.`,
      }),
    ])
  });

  setForm() {
    this.startFilteredLocations = this.directionForm.controls.startPointControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      map(value => this.startControlFilter(value))
    );

    this.endFilteredLocations = this.directionForm.controls.endPointControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      map(value => this.endControlFilter(value))
    );
  }

  onStartSelectOption(value: ILocation) {
    this.startPointLocation = {...value};
    this.store.dispatch(new TripDirectionActions.SetStartPoint(this.startPointLocation));
    this.store.dispatch(new TripDirectionActions.SetStartPointAutocomplete(this.startPointLocation));
    console.log(this.store);
  }

  onEndSelectOption(value: ILocation) {
    this.endPointLocation = {...value};
    this.store.dispatch(new TripDirectionActions.SetEndPoint(this.endPointLocation));
    this.store.dispatch(new TripDirectionActions.SetEndPointAutocomplete(this.endPointLocation));
    console.log(this.store);
  }

  private startControlFilter(location: string) {
    return this.locations.filter(value => value.name.toLowerCase().includes(location.toLowerCase()));
  }

  private endControlFilter(location: string) {
    return this.locations.filter(value => value.name.toLowerCase().includes(location.toLowerCase()));
  }

  clearForm() {
    this.directionForm.controls.endPointControl.reset(' '.trimStart());
    this.directionForm.controls.startPointControl.reset(' '.trimStart());
  }

  clearStartPointControl() {
    this.directionForm.controls.startPointControl.reset(' '.trimStart());
  }

  clearEndPointControl() {
    this.directionForm.controls.endPointControl.reset(' '.trimStart());
  }

  public patternValid(config: any): ValidatorFn {
    return (control: FormControl) => {
      let urlRegEx: RegExp = config.pattern;
      if (control.value) {
      }

      if (control.value && !control.value.match(urlRegEx)) {
        this.errorInterceptor.showError ($localize`:@@oops:Oops`,$localize`:@@onlyRusEng:Sorry, only Latin and Russian characteres are allowed now.`);
        return {
          invalidMsg: config.msg,
        };
      } else {
        return null;
      }
    };
  }

  onSubmit(): void {
    console.log("SUBMITTED!");
    this.store.dispatch(new TripDirectionActions.GetRouts());
  }

  // private defineRouterParams() {
  //   this.route.queryParams.subscribe(
  //     (queryParams: {
  //       from: string;
  //       fromID: number;
  //       to: string;
  //       toID: number;
  //       latitude: number;
  //       longitude: number;
  //     }) => {
  //       if (
  //         Object.keys(queryParams).length === 0 &&
  //         queryParams.constructor === Object &&
  //         this.directionForm
  //       ) {
  //         this.clearForm();
  //       } else {
  //         this.startPointLocation = {
  //           id: queryParams.fromID,
  //           name: queryParams.from,
  //           latitude: queryParams.latitude,
  //           longitude: queryParams.longitude
  //         };
  //         this.store.dispatch(
  //           new TripDirectionActions.SetStartPoint({ ...this.startPointLocation })
  //         );
  //         this.endPointLocation = {
  //           id: queryParams.toID,
  //           name: queryParams.to,
  //           latitude: queryParams.latitude,
  //           longitude: queryParams.longitude
  //         };
  //         this.store.dispatch(
  //           new TripDirectionActions.SetEndPoint({ ...this.endPointLocation })
  //         );
  //
  //         this.setForm();
  //         this.directionForm.setValue({
  //           startPointControl: this.startPointLocation.name,
  //           endPointControl: this.endPointLocation.name,
  //         });
  //         // this.store.dispatch(new TripDirectionActions.GetRouts());
  //       }
  //     }
  //   );
  // }



}
