import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UsuariosService) { }

  ngOnInit(): void {
    this.userService.GetUsuarios().subscribe(
      (rest: any) => {
        if (rest.status == "OK") {
          this.users = rest.data;
        }else if(rest.status == "ERROR"){
          console.log(rest.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
