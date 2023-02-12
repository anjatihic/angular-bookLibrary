import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string, length: number = 30): string {
    let output: string = value;
    console.log(output);
    if(value.length > length){
      output = value.substring(0, length);
      output += '...';
    }

    return output;

  }

}
