import { Component } from '@angular/core';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
class Item{
  name4: string;
  num: number;
  dirq: string;
  constructor(name4: string, num: number, dirq: string){

        this.name4 = name4;
        this.num = num;
        this.dirq = dirq;
  }
}
// class but{
//   anun1: number;
//   constructor(anun1:number){
//     this.anun1 = anun1;
//   }

// }




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items1: Item[] =
   [
    {name4: "Messi", num:10,dirq:"Հարձակվող"}
  ];
  items2: Item[] =
  [
   {name4: "Marcelo", num:12,dirq:"Պաշտպան"}
 ];
 items3: Item[] =
  [
   {name4: "Cristiano Ronaldo", num:7,dirq:"հարձակվող"}
 ];

 addItem(name4: string, num: number, dirq: string, anun1:string): void{
   if(name4==null || name4.trim()=="" || num == null || dirq == null )
   return;
   if( anun1 == "Barcelona"){
    this.items1.push(new Item(name4,num,dirq));
   }else if(anun1 == "Real Madrid"){
    this.items2.push(new Item(name4,num,dirq));
   }else if(anun1== "Juventus"){
    this.items3.push(new Item(name4,num,dirq));

   }

 }




}
