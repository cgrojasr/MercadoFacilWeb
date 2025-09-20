import { Injectable } from '@angular/core';
import { DemoModel, DemoResponseModel } from '../../models/demo-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  submitData(demoModel: DemoModel): Observable<DemoResponseModel> {
    // console.log('Data submitted:', data);
    const response: DemoResponseModel = {
      code: 1,
      message: 'Success'
    };
    
    return of(response);
  }
}
