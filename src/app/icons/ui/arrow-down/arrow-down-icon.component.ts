import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "arrow-down-icon",
    templateUrl: "./arrow-down-icon.component.html",
    styleUrls: ["./arrow-down-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowDownIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
