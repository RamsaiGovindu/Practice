import { LightningElement } from 'lwc';

export default class ShowLightningComponent extends LightningElement {

    Firstname="rohit";
    ChangeName(event){
        this.Firstname=event.target.value;
    }

}