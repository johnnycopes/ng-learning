import { Component, Input, ElementRef, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "[app-help-context]",
  templateUrl: "./help-context.component.html",
  styleUrls: ["./help-context.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpContextComponent {
  @Input("app-help-context") message: string = "";

  @ViewChild("container") container: ElementRef | undefined;

  public icon = faQuestionCircle;
  public showHelp: boolean = false;

  /*
  BAD IDEA: using host listener in these cases. Click listeners will get registered for every
  instance of the component, even when the dialog isn't opened.

  GOOD IDEAS: removing the HostListeners and instead executing these events on the dialog itself (done in the code).
  Additionally, the methods can be extracted to a separate directive and used on the dialog element rather than the component
  */
  // @HostListener("document:click", ["$event"])
  // public onDocumentClick({ target }: MouseEvent) {
  //   if (!this.container?.nativeElement.contains(target)) {
  //     this.showHelp = false;
  //   }
  // }

  // @HostListener("window:keydown.Escape")
  // public onEscapeClick(): void {
  //   this.showHelp = false;
  // }
}
