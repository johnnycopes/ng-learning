import { Component, Input, ElementRef, HostListener, ViewChild } from "@angular/core";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "[app-help-context]",
  templateUrl: "./help-context.component.html",
  styleUrls: ["./help-context.component.scss"],
})
export class HelpContextComponent {
  @Input("app-help-context") message: string = "";

  @ViewChild("container") containerRef: ElementRef | undefined;

  public icon = faQuestionCircle;
  public showHelp: boolean = false;

  @HostListener("document:click", ["$event"])
  documentClicked({ target }: MouseEvent) {
    console.log(target);
    if (!this.containerRef?.nativeElement.contains(target)) {
      this.showHelp = false;
    }
  }

  @HostListener("window:keydown.Escape")
  escapedClicked(): void {
    this.showHelp = false;
  }
}
