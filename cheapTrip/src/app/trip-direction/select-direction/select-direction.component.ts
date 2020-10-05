import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPoint, IPoints } from '../trip-direction.model';

enum PointType {
  From = 'from',
  To = 'to',
}


@Component({
  selector: 'app-select-direction',
  templateUrl: './select-direction.component.html',
  styleUrls: ['./select-direction.component.scss'],
})
export class SelectDirectionComponent implements OnInit {
  @Input() points: [string, string];
  @Input() startPointAutoComplete: string[];
  @Input() endPointAutoComplete: string[];

  @Output() changePoint = new EventEmitter<IPoint>();
  @Output() selectedPoints = new EventEmitter<IPoints>();

  startPoint: string;
  endPoint: string;
  directionForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    [this.startPoint, this.endPoint] = [...this.points];
    this.directionForm = new FormGroup({
      startPointControl: new FormControl(this.startPoint, Validators.required),
      endPointControl: new FormControl(this.endPoint, Validators.required),
    });
  }

  onChangePoint(str: string, type: any) {
    const point: IPoint = {name:str, type: type}
    this.changePoint.emit(point);
  }

  changeDirection() {
    [this.startPoint, this.endPoint] = [this.endPoint, this.startPoint];
    this.directionForm.controls['endPointControl'].setValue(this.endPoint);
    this.directionForm.controls['startPointControl'].setValue(this.startPoint);
  }

  onSubmit() {
    const points: IPoints = { startPoint: this.startPoint,  endPoint: this.endPoint};
    this.selectedPoints.emit(points);
    //  const queryParams = { from: this.startPoint, to: this.endPoint };
    // this.router.navigate(['path', queryParams], { relativeTo: this.route });
  }

  selectPoint(point: string, type: string) {
    if (type == 'start') {
      this.startPoint = point;
    } else {
      this.endPoint = point;
    }
  }
}
