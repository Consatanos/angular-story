import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "error-icon",
    templateUrl: "./error-icon.component.html",
    styleUrls: ["./error-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
