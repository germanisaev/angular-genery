import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

/* export class FilterPipe implements PipeTransform {
    transform(list: any[], filterText: string): any {
        return list ? list.filter(item => item.Name.search(new RegExp(filterText, 'i')) > -1 || item.description.search(new RegExp(filterText, 'i')) > -1) : [];
    }
} */

export class FilterPipe implements PipeTransform {

    transform(value: any[], filterBy: string): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: any) =>
            product.Name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}