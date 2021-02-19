import { Component } from '@angular/core';

@Component({
  selector: 'app-headless-components',
  templateUrl: './headless-components.component.html',
  styleUrls: ['./headless-components.component.scss']
})
export class HeadlessComponentsComponent {
  public bool: boolean = true;

  public onFileSelect(files: FileList | null): void {
    console.log("incoming:", files);
  }
}
