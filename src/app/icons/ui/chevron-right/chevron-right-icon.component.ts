import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "chevron-right-icon",
    templateUrl: "./chevron-right-icon.component.html",
    styleUrls: ["./chevron-right-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChevronRightIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
