import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import { Subject, Subscription } from 'rxjs';
import { IPathPoint, IPoint, Modes } from '../trip-direction.model';

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
export class SelectDirectionComponent implements OnInit, OnDestroy {
  myList = ['1', '2'];
  // @Input() points: [IPathPoint, IPathPoint];
  @Input() startPointAutoComplete: IPathPoint[];
  @Input() endPointAutoComplete: IPathPoint[];
  @Input() mode: Modes = Modes.SEARCH;

  @Output() changePoint = new EventEmitter<IPoint>();
  @Output() startPointSelected = new EventEmitter<IPathPoint>();
  @Output() endPointSelected = new EventEmitter<IPathPoint>();
  @Output() selectedPoints = new EventEmitter<IPathPoint[]>();
  @Output() cleanData = new EventEmitter<boolean>();

  startPoint: IPathPoint;
  endPoint: IPathPoint;
  isSelectedStartPoint: boolean;
  isSelectedEndPoint: boolean;

  directionForm: FormGroup;
  modes = Modes;

  @Input() pointSubj: Subject<{ from: IPathPoint; to: IPathPoint }>;
  @Input() toHomeSubj: Subject<boolean>;
  pointSubscripton: Subscription;
  resetSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}
  ngOnDestroy(): void {
    this.pointSubscripton.unsubscribe();
    this.resetSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isSelectedStartPoint = false;
    this.isSelectedEndPoint = false;
    this.resetSubscription = this.store
      .select('directions')
      .subscribe((state) => {
        if (this.directionForm && state.reset) {
          this.directionForm.setValue({
            startPointControl: '',
            endPointControl: '',
          });
          this.directionForm.markAsUntouched();
          this.directionForm.markAsPristine();
        }
      });
    //for reload purpose
    this.pointSubscripton = this.pointSubj.subscribe((points) => {
      if (
        this.directionForm &&
        this.directionForm.get('startPointControl').value === '' &&
        this.directionForm.get('endPointControl').value === ''
      ) {
        this.directionForm.setValue({
          startPointControl: points.from.name,
          endPointControl: points.to.name,
        });
        this.directionForm.controls.endPointControl.valid;
        this.directionForm.controls.startPointControl.valid;
      }
    });

    this.directionForm = new FormGroup({
      startPointControl: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        this.notInStartListValidator.bind(this),
      ]),
      endPointControl: new FormControl('', [
        Validators.required,
        this.notInEndListValidator.bind(this),
        Validators.maxLength(30),
      ]),
    });
  }
  // autocomplete is invoked
  onInput(str: string, type: 'from' | 'to'): void {
    const point: IPoint = { name: str, type: type };
    if(point.name.length >0 ){
         this.changePoint.emit(point);
    }

  }

  changeDirection(): void {
    [this.startPoint, this.endPoint] = [this.endPoint, this.startPoint];
    this.changePoint.emit({ name: this.startPoint.name, type: 'from' }); //invoke autocomplete
    this.changePoint.emit({ name: this.endPoint.name, type: 'to' }); //invoke autocomplete
    //populate the form
    this.directionForm.setValue({
      startPointControl: this.startPoint.name,
      endPointControl: this.endPoint.name,
    });
    //select points
    this.optionSelected(this.startPoint.name, 'from');
    this.optionSelected(this.endPoint.name, 'to');
  }

  onSubmit(): void {
    this.selectedPoints.emit([
      { id: this.startPoint.id, name: this.startPoint.name },
      { id: this.endPoint.id, name: this.endPoint.name },
    ]);
  }

  optionSelected(point: any, type: string) {
    if (type == 'start') {
      if (this.startPointAutoComplete.length > 0) {
        this.startPoint = this.startPointAutoComplete.filter((p) => {
          return p.name == point;
        })[0];
        this.isSelectedStartPoint = true;
        this.startPointSelected.emit({ ...this.startPoint });
      }
    } else {
      if (this.endPointAutoComplete.length > 0) {
        this.endPoint = this.endPointAutoComplete.filter((p) => {
          return p.name == point;
        })[0];
        this.endPointSelected.emit({ ...this.endPoint });
        this.isSelectedEndPoint = true;
      }
    }
  }

  cleanForm(): void {
    this.cleanData.emit(true);
    this.directionForm.setValue({
      startPointControl: '',
      endPointControl: '',
    });
    this.directionForm.markAsPristine();
    this.directionForm.markAsUntouched();
    this.isSelectedEndPoint = false;
    this.isSelectedStartPoint = false;
  }

  notInStartListValidator(control: FormControl): { [s: string]: boolean } {
    if (this.startPointAutoComplete.length > 0) {
      const arr = this.startPointAutoComplete.map((point) =>
        point.name.toLocaleLowerCase()
      );
      if (arr.indexOf(control.value.toLowerCase()) == -1) {
        return { notInList: true };
      }
    }

    return null;
  }

  notInEndListValidator(control: FormControl): { [s: string]: boolean } {
    if (this.endPointAutoComplete.length > 0) {
    const arr = this.endPointAutoComplete.map((point) =>
      point.name.toLocaleLowerCase()
    );
    if (arr.indexOf(control.value.toLowerCase()) == -1) {
      return { notInList: true };
    }}
    return null;
  }

  onFocusOut(event: any): void {
    if (event.target.attributes.formControlName.value === 'startPointControl') {
      if (this.isSelectedStartPoint) return;
      const startPoint = this.directionForm.controls.startPointControl.value;
      const points = this.startPointAutoComplete.filter(
        (point) => point.name.toLowerCase() == startPoint.toLowerCase()
      );
      if (
        this.startPointAutoComplete.filter(
          (point) => point.name.toLowerCase() == startPoint.toLowerCase()
        ).length > 0
      ) {
        this.startPoint = points[0];
        this.startPointSelected.emit(this.startPoint);
        this.directionForm.patchValue({
          startPointControl: this.startPoint.name,
        });
      }
    } else if (
      event.target.attributes.formControlName.value === 'endPointControl'
    ) {
      if (this.isSelectedEndPoint) return;
      const startPoint = this.directionForm.controls.endPointControl.value;
      const points = this.endPointAutoComplete.filter(
        (point) => point.name.toLowerCase() == startPoint.toLowerCase()
      );
      if (
        this.endPointAutoComplete.filter(
          (point) => point.name.toLowerCase() == startPoint.toLowerCase()
        ).length > 0
      ) {
        this.endPoint = points[0];
        this.endPointSelected.emit(this.endPoint);
        this.directionForm.patchValue({
          endPointControl: this.endPoint.name,
        });
      }
    }
  }
}
