import { Component } from '@angular/core';
import { Observable, range } from '../../node_modules/rxjs';
import { map, filter} from '../../node_modules/rxjs/operators'
import { mapToExpression } from '../../node_modules/@angular/compiler/src/render3/view/util';
import { filterQueryId } from '../../node_modules/@angular/core/src/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectTest';
  ngOnInit(){
    const source$:Observable<number>=range(0,10);
    source$.pipe(map(x=>x*3),filter(x=>x%2==0)).subscribe(x=>console.log(x))
  }
}


