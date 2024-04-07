import { Component, output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputString = ""
  outputString = ""
  arithmeticOperators = ['%','/','X','+','-','=']
  recentPressedValue=""
  pastValue=""
  constructor() {}
  onButtonPress(value:any,type?:any){
    console.log(value,type)
    // resets the calculator
    if(type == 'highlight'){
      if(value == "C"){
        return
      }
      if(this.arithmeticOperators.includes(value)){
        this.calculateBlock(value)
        return
      }
      if(value=="()"){
        //
        return
      }
      console.log("HELLO")
    }else{
      if(value=="+/-"){
        //
        return
      }
    }
  }
  calculateBlock(data:any){
    if(data == "=") return this.calculate()

  }
  reset(){
    this.inputString = ""
    this.outputString =""
    this.recentPressedValue =""
    this.pastValue =""
  }
  calculate(){
    //
    return
  }
}
