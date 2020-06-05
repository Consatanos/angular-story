import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "waiting-icon",
    templateUrl: "./waiting-icon.component.html",
    styleUrls: ["./waiting-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
