import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Product[],term:string): Product[] {
    return value.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase())); 
  }

}
