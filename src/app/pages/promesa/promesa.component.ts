import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: [

  ]
})
export class PromesaComponent implements OnInit {


  ngOnInit(): void {

    this.getUsuarios();

     /*
    const promesa = new Promise( (resolve, reject) => {

      if ( false ) {
        resolve('Hola Mundo');

      }else{
        reject('Algo salio mal');
      }

    });

    promesa.then( (mensaje) =>  {
      console.log( mensaje );
    } )
    .catch( error => console.log('Error en mi promesa', error) );

    console.log('Fin del Init')


  } */
  }

  getUsuarios(){
    fetch('https://reqres.in/api/users').then( resp => {
      resp.json().then( body => console.log(body))
    } );
  }
}


