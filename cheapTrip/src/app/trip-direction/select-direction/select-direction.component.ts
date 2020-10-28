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
  @Output() startPointSelected = new EventEmitter<IPathPoint>();
  @Output() endPointSelected = new EventEmitter<IPathPoint>();
  @Output() selectedPoints = new EventEmitter<IPathPoint[]>();
  @Output() cleanData = new EventEmitter<boolean>();

  startPoint: IPathPoint;
  endPoint: IPathPoint;
  directionForm: FormGroup;
  modes = Modes;

  @Input() pointSubj: Subject<{ from: IPathPoint; to: IPathPoint }>;
  //@Input() toHome: Subject<boolean>;
  pointSubscripton: Subscription;
  // toHomeSubscription: Subscription;

  constructor() {}
  ngOnDestroy(): void {
    this.pointSubscripton.unsubscribe();
    // this.toHomeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.pointSubscripton = this.pointSubj.subscribe((points) => {
      if (
       ( this.directionForm &&
        this.directionForm.get('startPointControl').value === '' &&
        this.directionForm.get('endPointControl').value === '') || (points.from.id == null)
      ) {
        this.directionForm.setValue({
          startPointControl: points.from.name,
          endPointControl: points.to.name,
        });
         if(points.from.id == null){
            this.directionForm.markAsUntouched();
            this.directionForm.markAsPristine();
         }

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

  private onOptionSelected(point: any, type: string): void {
    if (type == 'start') {
      this.startPointSelected.emit(point);
    } else {
      this.endPointSelected.emit(point);
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
  }

  onFocusOut(event: any): void {
    if (event.target.attributes.formControlName.value === 'startPointControl') {
      this.startPoint = this.startPointAutoComplete[0];
      this.directionForm.patchValue({
        startPointControl: this.startPoint.name,
      });
      this.onOptionSelected({ ...this.startPoint }, 'start');
    } else if (
      event.target.attributes.formControlName.value === 'endPointControl'
    ) {
      this.endPoint = this.endPointAutoComplete[0];
      this.directionForm.patchValue({
        endPointControl: this.endPoint.name,
      });
      this.onOptionSelected({ ...this.endPoint }, 'end');
    }
  }
}
