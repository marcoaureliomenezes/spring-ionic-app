import { EstadoService } from './../../services/domain/estado.service';
import { EstadoDTO } from './../../models/estado.dto';
import { CidadeService } from './../../services/domain/cidade.service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    CidadeService,
    EstadoService
  ]
})
export class SignupPageModule {}
