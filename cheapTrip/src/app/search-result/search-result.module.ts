import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SearchResultComponent } from './search-result.component';
import { PathDetailsComponent } from './path-details/path-details.component';
import { SearchResultRoutingModule } from './search-result-routing.module';

@NgModule({
  declarations: [SearchResultComponent, PathDetailsComponent],
  imports: [CommonModule, MaterialModule, SearchResultRoutingModule],
})
export class SearchResultModule {}
