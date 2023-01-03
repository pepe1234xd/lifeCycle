import { Component, DoCheck, OnChanges, OnInit, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy{

  segundos:number=0;
  timerSubscription!:Subscription;

  /**
   *
   */
  constructor() {
    console.log('contructor');    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');  
  }
  ngDoCheck(): void {
    console.log('Do Check');  
  }
  ngAfterContentInit(): void {
    console.log('After Content init');  
  }
  ngAfterViewInit(): void {
    console.log('After view init');  
  }
  ngAfterViewChecked(): void {
    console.log('after view checked');  
  }
  ngOnDestroy(): void {
    console.log('on Destroy');
    this.timerSubscription.unsubscribe();
    console.log('timer Limpiado');
  }
  ngOnInit(): void {
    console.log('on Init');
  
    this.timerSubscription=interval(1000).subscribe(i=>{
      this.segundos=i;
    })

  }

  guardar(){
    
  }

}
