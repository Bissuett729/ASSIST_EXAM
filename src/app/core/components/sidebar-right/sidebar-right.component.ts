import { Component, inject } from '@angular/core';
// Signals
import { SignalsService } from '../../../shared/services/signals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-right',
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar-right.component.html',
  styleUrl: './sidebar-right.component.scss'
})
export class SidebarRightComponent {

  public _signals = inject(SignalsService)

}
