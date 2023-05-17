import { Pipe, PipeTransform } from '@angular/core';
import locations from '../../../../assets/json_data/locations.json';
import {ILocation} from "../../../trip-direction/trip-direction.model";

@Pipe({
  name: 'destinationNameTransform'
})
export class DestinationNameTransformPipe implements PipeTransform {

  transform(value: number): string {
    const location = Object.values(locations as ILocation[]).find(location =>
      location.id === value
    );
    return location.name + ', ' + location.country_name;
  }

}
