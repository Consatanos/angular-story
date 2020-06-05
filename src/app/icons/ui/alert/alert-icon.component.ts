import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "alert-icon",
    templateUrl: "./alert-icon.component.html",
    styleUrls: ["./alert-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
