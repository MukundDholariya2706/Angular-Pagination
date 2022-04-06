import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter',
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(data: any[], searchText: string): any[] {
    if (!data || !searchText) {
      return data;
    }

    return data.filter(
      (data) => !data.gender.toLowerCase().indexOf(searchText.toLowerCase())
    );
  }
}
