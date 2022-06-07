import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';
import { CommonModule } from '@angular/common';
/*agregamos la ruta importamos el modulo de usuarios */
const routes: Routes = [
  {
     path: 'usuarios',
     loadChildren: ()=> import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
    },
    {
      path: '**',
      redirectTo: 'usuarios'
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
