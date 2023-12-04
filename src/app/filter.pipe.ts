import {OnInit, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
    transform(items: any, searchText: string):any[] {
        console.log(items)
        console.log(searchText);
        
        if(!items) return [];
        if(!searchText) return items;

        searchText = searchText.toLowerCase();

        return items.filter((item:any) => {
            console.log(item)
            console.log(Object.keys(item).some)
            return Object.keys(item).some(key =>{
                console.log(item[key])
                return String(item[key]).toLowerCase().includes(searchText.toLowerCase())
            })
        })
    }
}