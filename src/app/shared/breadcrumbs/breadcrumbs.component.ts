import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { every, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',

})
export class BreadcrumbsComponent {

  constructor( private router: Router ) {

    /* this.router.events
    .pipe(
      filter(  (e: Event) => e instanceof ActivationEnd && e.snapshot.data['title'] ),
      map( (e: Event) => {
        const event = e as ActivationEnd;
        return event.snapshot.data;
      } )

    )
    .subscribe( console.log )
 */
  }



}
