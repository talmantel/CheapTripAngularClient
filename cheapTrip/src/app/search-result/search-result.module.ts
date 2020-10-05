import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SearchResultComponent } from './search-result.component';
import { PathDetailsComponent } from './path-details/path-details.component';

@NgModule({
  declarations: [SearchResultComponent, PathDetailsComponent],
  imports: [CommonModule, MaterialModule],
})
export class SearchResultModule {}
