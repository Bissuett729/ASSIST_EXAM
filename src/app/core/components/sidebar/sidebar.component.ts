import { Component, inject } from '@angular/core';
// Signals
import { SignalsService } from '../../../shared/services/signals.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public _signals = inject(SignalsService)
}
