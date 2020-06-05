import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "cross-icon",
    templateUrl: "./cross-icon.component.html",
    styleUrls: ["./cross-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrossIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
