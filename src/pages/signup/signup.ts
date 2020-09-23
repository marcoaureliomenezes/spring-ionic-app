import { EstadoService } from './../../services/domain/estado.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoDTO } from '../../models/estado.dto';
import { CidadeDTO } from '../../models/cidade.dto';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService) {

      this.formGroup = this.formBuilder.group({
        nome: ['Rosemberg Faria',
          [Validators.required,
            Validators.minLength(5), 
            Validators.maxLength(120)]
        ],

        email: ['zeppelim@gmail.com', 
          [Validators.required, 
            Validators.email]
          ],
        tipo : ['1', 
          [Validators.required]
        ],
        cpfOuCnpj : ['06134596280', 
          [Validators.required,
            Validators.minLength(11),
            Validators.maxLength(14)]
        ],
        senha : ['123', [Validators.required]],
        logradouro : ['Rua Paraná', [Validators.required]],
        numero : ['54', [Validators.required]],
        complemento : ['', []],
        bairro : ['Centro', []],
        cep : ['35400000', [Validators.required]],
        telefone1 : ['977261827', [Validators.required]],
        telefone2 : ['', []],
        telefone3 : ['', []],
        estadoId : ["", [Validators.required]],
        cidadeId : ["", [Validators.required]]  
      })
  }

  ionViewDidLoad() {
    this.estadoService.findAll()
    .subscribe(response => {
      this.estados = response;
      this.formGroup.controls.estadoId.setValue(this.estados[0].id);
      this.updateCidades();
    },
    error => {})
  }
  updateCidades() {
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id)
      .subscribe(response => {
        this.cidades = response;
        this.formGroup.controls.cidadeId.setValue(null);
      });
  }
 
  
  signupUser() {
    console.log("enviou o form")
  }
}
