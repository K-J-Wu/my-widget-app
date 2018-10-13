import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "sortBy"
})

export class SortPipe implements PipeTransform {
  transform(array: any[], key: string, flag: boolean): any[] {
    if (flag) {
      array.sort((a: any, b: any) => {
        if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return -1;
        } else if (a[key].toLowerCase() < b[key].toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
    else {
      array.sort((a: any, b: any) => {
        if (a[key].toLowerCase() < b[key].toLowerCase()) {
          return -1;
        } else if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
  }
}
