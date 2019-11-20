import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private _http: HttpClient) {}

  getImage(selectedimg): Promise<File> {
    console.log(selectedimg);
    return this._http.get<any>('https://memeg.herokuapp.com/getFile/' + selectedimg, { responseType: 'blob' as 'json' }).toPromise();
  }
}
