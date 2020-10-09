import { SafeHtml } from '@angular/platform-browser';

export interface IPoints {
  startPoint: string;
  endPoint: string;
}

enum PointType {
  START = 'startPoint',
  END = 'endPoint',
}

export enum Modes {
  SEARCH,
  DELIVERY,
}

export interface IPoint {
  name: string;
  type: '1' | '2';
}

export interface IRout {
  euro_price: string;
  duration_minutes: string;
  transportation_type: string;
  from: string;
  to: string;
}

export interface IDetails {
  euro_price: string;
  duration_minutes: string;
  direct_paths: IRout[];
  points: Set<string>
}

export interface IPath {
  pathType: { type: string; icon: SafeHtml[] };
  details: IDetails;
}

export interface IPathPoint {
  id: number;
  name: string;
}
