import { Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

export class ErrorHandler {
  static handleError(error: Response | any) {
    let errorMesage: string;
    if (error instanceof Response) {
      errorMesage = `Error ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      errorMesage = error.toString();
    }
    console.log(errorMesage);
    return Observable.throw(errorMesage);
  }
}
