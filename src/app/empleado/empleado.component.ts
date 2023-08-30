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
  empresa="google";

  cambioEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }

  /*getEdad(){
    return this.edad;
  }*/

  /*llamaEmpresa(value:String){

  }*/

  habilitacionCuadro=false;

  usuarioRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  GetRegistroUsuario(){
    this.usuarioRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //alert ("el usuario se ha registrado");
    //this.textoDeRegistro="El usuario ya se registro";

    if((<HTMLInputElement>event.target).value=="si"){

      this.textoDeRegistro="El usuario se acaba de registrar";

    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  constructor(){}

  ngOnInit(): void {
    
  }
}
