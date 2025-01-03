import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  public themeDark$ = signal(false)
  public openSidebarLeft$ = signal(true)
  public openSidebarRight$ = signal(false)

  public setThemeDark(state: boolean) {
    this.themeDark$.set(state)
    localStorage.setItem('isThemeDark', state ? 'yes' : 'no')
    if(state) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      window.matchMedia('(prefers-color-scheme: dark)')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      window.matchMedia('(prefers-color-scheme: light)')
    }
  }

  public setSidebarLeft(state: boolean) {
    this.openSidebarLeft$.set(state)
    this.openSidebarRight$.set(false)
  }

  public setSidebarRight(state: boolean) {
    this.openSidebarRight$.set(state)
    this.openSidebarLeft$.set(false)
  }
}
