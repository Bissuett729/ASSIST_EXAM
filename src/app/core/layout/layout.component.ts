import { Component, inject } from '@angular/core';
// Core components
import { HeaderComponent } from '../components/header/header.component';
import { SidebarRightComponent } from '../components/sidebar-right/sidebar-right.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
// Signals
import { SignalsService } from '../../shared/services/signals.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  public _signals = inject(SignalsService)

}
