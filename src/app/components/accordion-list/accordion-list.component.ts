import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  Renderer,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "accordion-list",
  templateUrl: "./accordion-list.component.html",
  styleUrls: ["./accordion-list.component.scss"]
})
export class AccordionListComponent implements AfterViewInit {
  @Input() headerColor: string = "#F53D3D";
  @Input() textColor: string = "#FFF";
  @Input() contentColor: string = "#F9F9F9";
  @Input() title: string;
  @Input() hasMargin: boolean = true;
  @Input() expanded: boolean;

  @ViewChild("accordionContent", { static: false }) elementView: ElementRef;

  viewHeight: number;

  constructor(public renderer: Renderer) {}

  ngAfterViewInit() {
    this.viewHeight = this.elementView.nativeElement.offsetHeight;

    if (!this.expanded) {
      this.renderer.setElementStyle(
        this.elementView.nativeElement,
        "display",
        "none"
      );
    }
  }

  toggleAccordion() {
    this.expanded = !this.expanded;
    const display = this.expanded ? "initial" : "none";
    this.renderer.setElementStyle(
      this.elementView.nativeElement,
      "display",
      display
    );
  }
}
