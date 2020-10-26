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
  @Output() selectedPoints = new EventEmitter<IPathPoint[]>();
  @Output() cleanData = new EventEmitter<boolean>();

  startPoint: IPathPoint;
  endPoint: IPathPoint;
  directionForm: FormGroup;
  modes = Modes;

  @Input() pointSubj: Subject<{ from: IPathPoint; to: IPathPoint }>;
  @Input() clearFormSubj: Subject<boolean>;
  pointSubscripton: Subscription;
  clearFormSubscription:Subscription;

  constructor() {}
  ngOnDestroy(): void {
    this.pointSubscripton.unsubscribe();
    this.clearFormSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.clearFormSubscription = this.clearFormSubj.subscribe((val) => {
      if (val && this.directionForm) {
        this.directionForm.setValue({
          startPointControl: '',
          endPointControl: '',
        });
        this.directionForm.markAsUntouched();

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
  }

  onSubmit(): void {
    this.selectedPoints.emit([
      { id: this.startPoint.id, name: this.startPoint.name },
      { id: this.endPoint.id, name: this.endPoint.name },
    ]);
  }

  onOptionSelected(point: string, type: string): void {
    if (type == 'start') {
      this.startPoint = {
        name: point,
        id: this.startPointAutoComplete.filter((item) => item.name == point)[0]
          .id,
      };
    } else {
      this.endPoint = {
        name: point,
        id: this.endPointAutoComplete.filter((item) => item.name == point)[0]
          .id,
      };
    }
  }

  cleanForm(): void {
    this.cleanData.emit(true);
  }

  onFocusOut(event: any): void {
    if (
      event.target.attributes.formControlName.value === 'startPointControl' &&
      !this.startPoint
    ) {
      this.startPoint = this.startPointAutoComplete[0];

      this.directionForm.patchValue({
        startPointControl: this.startPoint.name,
      });
    } else if (
      event.target.attributes.formControlName.value === 'endPointControl' &&
      !this.endPoint
    ) {
      this.endPoint = this.endPointAutoComplete[0];
      this.directionForm.patchValue({
        endPointControl: this.endPoint.name,
      });
    }
  }
}
