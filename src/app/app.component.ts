
import { Component } from '@angular/core';
import { StorageService } from './core/guard/storage.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Consulta-ruc';

  constructor(private storageService:StorageService,
    public overlayContainer:OverlayContainer) {
  
  }

  ngOnInit(): void {
  }

  
}
