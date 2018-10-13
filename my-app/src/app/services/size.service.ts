import {Observable, of} from "rxjs/index";
import {catchError} from "rxjs/operators";
import {Size} from "../models/size";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SizeService {

  constructor(private http: HttpClient) {
  }

  sizeDataUrl = 'https://walles-widgets.herokuapp.com/sizes';

  /** GET Size */
  getSizes(): Observable<Size[]> {
    const url = `${this.sizeDataUrl}.json`;
    return this.http.get<Size[]>(url)
      .pipe(
        catchError(this.handleError('getSizes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
