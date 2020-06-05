import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "chevron-left-icon",
    templateUrl: "./chevron-left-icon.component.html",
    styleUrls: ["./chevron-left-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChevronLeftIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
