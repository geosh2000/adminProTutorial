import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingService } from '../../services/service.index';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
                @Inject(DOCUMENT) private _document,
                public _ajustes: SettingService
               ) { }

  ngOnInit() {
    this.applyCheck()
  }

  changeColor( color: string, link: any ){
    this.checkOpt( link )
    this._ajustes.aplicarTema( color )
  }

  checkOpt( link: any ){
    let selectors = this._document.getElementsByClassName('selector')

    for (let ref of selectors){
      ref.classList.remove('working')
    }

    link.classList.add('working')
  }

  applyCheck(){
    let selectors = this._document.getElementsByClassName('selector')
    let tema = this._ajustes.ajustes.tema

    for (let ref of selectors){
      if ( ref.getAttribute('data-theme') === tema ){
        ref.classList.add('working')
        break
      }
    }
  }

}
