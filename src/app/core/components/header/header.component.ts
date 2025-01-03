import { Component, inject } from '@angular/core';
// Signals
import { SignalsService } from '../../../shared/services/signals.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public _signals = inject(SignalsService)

}
