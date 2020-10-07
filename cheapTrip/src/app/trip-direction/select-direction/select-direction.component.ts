import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import {
  IPathPoint,
  IPoint,
  IPoints,
  Modes,
} from '../trip-direction.model';

@Component({
  selector: 'app-select-direction',
  templateUrl: './select-direction.component.html',
  styleUrls: ['./select-direction.component.scss'],
})
export class SelectDirectionComponent implements OnInit {
  @Input() points: [IPathPoint, IPathPoint];
  @Input() startPointAutoComplete: IPathPoint[];
  @Input() endPointAutoComplete: IPathPoint[];
  @Input() mode: Modes = Modes.SEARCH;

  @Output() changePoint = new EventEmitter<IPoint>();
  @Output() selectedPoints = new EventEmitter<[number, number]>();

  startPoint: IPathPoint;
  endPoint: IPathPoint;
  directionForm: FormGroup;
  modes = Modes;

  constructor() {}

  ngOnInit(): void {
    [this.startPoint, this.endPoint] = [...this.points];
    this.directionForm = new FormGroup({
      startPointControl: new FormControl(this.startPoint.name, Validators.required),
      endPointControl: new FormControl(this.endPoint.name, Validators.required),
    });
  }

  onChangePoint(str: string, type: any) {
    const point: IPoint = { name: str, type: type };
    this.changePoint.emit(point);
  }

  changeDirection() {
    console.log("on change",this.endPoint );
    [this.startPoint, this.endPoint] = [this.endPoint, this.startPoint];
    this.directionForm.controls['endPointControl'].setValue(this.endPoint.name);
    this.directionForm.controls['startPointControl'].setValue(this.startPoint.name);
  }

  onSubmit() {
    this.selectedPoints.emit([this.startPoint.id, this.endPoint.id]);
 //   const queryParams = { from: this.startPoint.name, to: this.endPoint.name };
  // this.router.navigate(['path', queryParams], { relativeTo: this.route });
  }

  selectPoint(point: string, type: string) {
   if (type == 'start') {
      this.startPoint = {name: point, id: this.startPointAutoComplete.filter(item => item.name == point)[0].id};
    } else {
      this.endPoint = {name: point, id: this.endPointAutoComplete.filter(item => item.name == point)[0].id};;
    } 
  }
}
