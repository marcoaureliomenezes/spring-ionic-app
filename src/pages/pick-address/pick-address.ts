import { EnderecoDTO } from './../../models/endereco.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua Tiradentes",
        numero: "248",
        complemento: "",
        bairro: "Centro",
        cep: "35763000",
        cidade: {
          id: "2",
          nome: "Inhaúma",
          estado: {
            id: "1",
            nome: "Minas Gerais"
          }
        }
      },
      {
        id: "2",
        logradouro: "Rua Renato Azeredo",
        numero: "54",
        complemento: "",
        bairro: "Manga",
        cep: "35763000",
        cidade: {
          id: "2",
          nome: "Inhaúma",
          estado: {
            id: "1",
            nome: "Minas Gerais"
          }
        }
      }
    ]
  }

}
