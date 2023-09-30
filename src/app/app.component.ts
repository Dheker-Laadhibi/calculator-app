import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
result = '';

  getAction(item:any){
 this.result+=item;

  }
  equal(){
   this.result=eval(this.result).toFixed(1); 
  }
  reset(){
    this.result='';
  }

  
}
