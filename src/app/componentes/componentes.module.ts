import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
 import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,//Contiene directivas ngif - ngfor...etc
    IonicModule//Contiene los elementos de ionic
  ]
})
export class ComponentesModule { }




























 









