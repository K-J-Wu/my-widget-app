import {Observable, of} from "rxjs/index";
import {catchError} from "rxjs/operators";
import {Machine} from "../models/machine";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MachineService {

  constructor(private http: HttpClient) {
  }

  machineDataUrl = 'https://walles-widgets.herokuapp.com/machines';

  /** GET Machine */
  getMachines(): Observable<Machine[]> {
    const url = `${this.machineDataUrl}.json`;
    return this.http.get<Machine[]>(url)
      .pipe(
        catchError(this.handleError('getMachine', []))
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
