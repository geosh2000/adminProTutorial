import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef

  @Input() leyenda: string = '';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  onChanges( valor ){

    this.progreso = valor >= 100 ? 100 : valor <= 0 ? 0 : valor

    this.txtProgress.nativeElement.value = this.progreso
    this.cambioValor.emit( this.progreso )

    console.log(this.txtProgress)
  }

  cambiarValor( valor ){

    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }

    this.progreso += valor;

    this.cambioValor.emit( this.progreso )
    this.txtProgress.nativeElement.focus()
  }


}
