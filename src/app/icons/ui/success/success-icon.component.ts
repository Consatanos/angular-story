import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "success-icon",
    templateUrl: "./success-icon.component.html",
    styleUrls: ["./success-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
