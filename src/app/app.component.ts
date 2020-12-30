import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface Contact{
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  formData : any[] = [
    {"label": "First Name"},
    {"label":"Last Name"},
    {"label":"Contact#"},
    {"label":"Email"}
  ];

  address: boolean = true;

  ContactForm: FormGroup;
  
  constructor(){}


  setSettings(formData, address?: boolean){
    let form ={};

    //if user locates from a specific location
    if(this.address){
      formData.push({"label":"Address"});
    }


    //for all users
    for(let i=0; i<formData.length; i++){
      form[formData[i].label] = new FormControl('');
    }
    this.ContactForm = new FormGroup(form);
  }

  ngOnInit(){
    this.setSettings(this.formData);
  }

  onSubmit(){
    console.log(this.ContactForm.value);
    
  }
}
