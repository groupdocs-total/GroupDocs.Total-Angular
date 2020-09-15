import { Injectable } from '@angular/core';
import { IndexProperties } from './search-models';

@Injectable()
export class IndexPropertiesService {

  properties: IndexProperties = new IndexProperties();

  constructor() {}
}
