import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
  
  public counter : number = 0;
  

  Incrementar () :void {
    this.counter += 1  }

  Decrecer () :void{
    this.counter -= 1  
  }


Resetear_Contador (){
  this.counter = 0
  
  }




}
