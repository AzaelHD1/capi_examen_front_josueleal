import { NgModule } from '@angular/core';
import { UsuariosRoutingModule} from './usuarios-routing.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

@NgModule({
  declarations: [TablaUsuariosComponent],
  imports: [
    NzTypographyModule,
    NzTableModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
