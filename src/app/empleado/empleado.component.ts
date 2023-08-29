import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>aqui va un empleado!</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]

})
export class EmpleadoComponent implements OnInit{

  nombre="juan";
  apellido="diaz";
  //private edad=18;
  edad=18;
  //empresa="seti";

  /*getEdad(){
    return this.edad;
  }*/

  /*llamaEmpresa(value:String){

  }*/

  habilitacionCuadro=true;

  usuarioRegistrado=false;

  GetRegistroUsuario(){
    this.usuarioRegistrado=false;
  }

  constructor(){}

  ngOnInit(): void {
    
  }
}
