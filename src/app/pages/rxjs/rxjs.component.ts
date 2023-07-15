import { Component } from '@angular/core';
import { Observable, interval, retry, take, map, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: [

  ]
})
export class RxjsComponent {

  constructor(){



    /* this.retornaObservable().pipe(
      retry()
    ).subscribe({
      next: (v) => console.log('sub', v),
      error: (e) => console.log(e),
      complete: () => console.info('obs completado')
    }
    ); */
    this.retornaIntervalo()
    .subscribe( console.log )
  }

  retornaIntervalo(){
    const interval$ = interval(1000).pipe(
      take(4),
      map( valor => {
        return 'Hola Mundo' + valor;
      } )
    )

    return interval$;

  }

  retornaObservable(): Observable<number>{

    let i = -1;
    const obs$ = new Observable<number>( observer => {


      const intervalo =  setInterval( ()=> {
        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i ==2) {
          observer.error('i llego al valor de 2');
        }

      }, 1000)
    } );
    return obs$;

  }

}
