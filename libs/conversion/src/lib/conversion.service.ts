import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  Api, ConfigService, FileCredentials, SaveFile
} from "@groupdocs.examples.angular/common-components"

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor(private _http: HttpClient, private _config: ConfigService) {
  }

}
