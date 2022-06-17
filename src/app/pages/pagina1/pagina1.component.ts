import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
            AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Dandaly';
  segundos: number = 0;  
  timerSubscription!: Subscription;          

  constructor() {
    console.log('constructor');
   }
   
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('Timer limpiado')
  }
  ngOnInit() {
    console.log('ngOnInit')
    this.timerSubscription = interval(1000).subscribe( i => {
      this.segundos = i;
    })
  }

  guardar(){

  }

  

}
