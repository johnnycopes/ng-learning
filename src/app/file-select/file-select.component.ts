import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FileSelectDefDirective } from "./file-select-def.directive";

@Component({
  selector: 'app-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileSelectComponent {
  @Input() accept: string = "";
  @Input() multiple: boolean = false;
  @Output() fileSelect = new EventEmitter<FileList | null>();

  @ViewChild("fileInput")
  public fileInput: ElementRef<HTMLInputElement> | undefined;

  @ContentChild(FileSelectDefDirective)
  public fileSelectDef: FileSelectDefDirective | undefined;

  public fileSelectDefContext = {
    $implicit: () => this.openFileSelectDialog()
  };

  public openFileSelectDialog() {
    this.fileInput?.nativeElement.click();
  }

  public onFileSelectChange(event: Event): void {
    const selectedFiles = (event.target as HTMLInputElement).files;
    this.fileSelect.next(selectedFiles);
  }
}
