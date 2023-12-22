import { LightningElement } from 'lwc';

export default class LWCGreatestOfThreeNumbers extends LightningElement {
    fnumber;
    snumber;
    tnumber;
    HandleFirstNumber(event){
        this.fnumber = event.target.value;
    }
    HandleSecondNumber(event){
        this.snumber = event.target.value;
    }
    HandleThirdNumber(event){
        this.tnumber = event.target.value;
    }
    HandleCalculate(event){
        const a= parseInt(this.fnumber);
        const b= parseInt(this.snumber);
        const c= parseInt(this.tnumber);
        
        if(a>=b && a>c)
        {
            alert('greater number is '+a);
        }
        else if(b>=c && b>a)
        {
            alert('Greater number is '+b);
        }
        else if(c>=a && c>b)
        {
            alert('Greater Numer is '+c);
        }
        else if(a==c && a==b)
        {
            alert('all are same '+a);
        }
       else{
        alert('check input once');
       }
    }
    HandleClear(event){
        this.fnumber="";
        this.snumber="";
        this.tnumber="";
    }
}