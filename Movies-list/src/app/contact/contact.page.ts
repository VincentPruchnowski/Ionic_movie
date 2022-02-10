import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  unAttribut: string = "Formulaire de contact";
  formulaire = { nom: "", description: "" };
  nbCaractere = 0;
  constructor() {
  }

  compte() {
    this.nbCaractere = this.formulaire.description.length;
  }

  logForm() {
    alert(this.formulaire.nom)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  ngOnInit() {
  }

}
