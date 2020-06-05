import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "check-icon",
    templateUrl: "./check-icon.component.html",
    styleUrls: ["./check-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
