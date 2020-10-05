import { SafeHtml } from '@angular/platform-browser';

export interface IPoints {
  startPoint: string;
  endPoint: string;
}

enum PointType {
  START = 'startPoint',
  END = 'endPoint',
}

export interface IPoint {
  name: string;
  type: 'startPoint' | 'endPoint';
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
}

export interface IPath {
  pathType: { type: string; icon: SafeHtml[] };
  details: IDetails;
}
