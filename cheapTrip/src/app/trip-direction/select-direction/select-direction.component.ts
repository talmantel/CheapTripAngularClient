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
        Validators.pattern('^[a-zA-Z0-9- ]*$'),
        Validators.maxLength(30),
      ]),
      endPointControl: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9- ]*$'),
      ]),
    });
  }
  // autocomplete is invoked
  onInput(str: string, type: 'from' | 'to'): void {
    const point: IPoint = { name: str, type: type };
    this.changePoint.emit(point);
  }

  changeDirection(): void {
    [this.startPoint, this.endPoint] = [this.endPoint, this.startPoint];
    this.directionForm.controls.endPointControl.setValue(this.endPoint.name);
    this.directionForm.controls.startPointControl.setValue(
      this.startPoint.name
    );
    this.startPointSelected.emit(this.startPoint);
    this.endPointSelected.emit(this.endPoint);
  }

  onSubmit(): void {
    console.log([
      { id: this.startPoint.id, name: this.startPoint.name },
      { id: this.endPoint.id, name: this.endPoint.name },
    ]);
    this.selectedPoints.emit([
      { id: this.startPoint.id, name: this.startPoint.name },
      { id: this.endPoint.id, name: this.endPoint.name },
    ]);
  }

  private onOptionSelected(point: any, type: string): void {
    if (type == 'start') {
      this.isSelectedStartPoint = true;
      this.startPointSelected.emit(point);
    } else {
      this.endPointSelected.emit(point);
    }
  }

  optionSelected(point: any, type: string) {
    if (type == 'start') {
      this.startPoint = this.startPointAutoComplete.filter((p) => {
        return p.name == point;
      })[0];
      this.isSelectedStartPoint = true;
      this.startPointSelected.emit({ ...this.startPoint });
    } else {
      this.endPoint = this.endPointAutoComplete.filter((p) => {
        return p.name == point;
      })[0];
      this.endPointSelected.emit({ ...this.endPoint });
      this.isSelectedEndPoint = true;
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
