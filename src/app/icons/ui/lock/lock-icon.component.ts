import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "lock-icon",
    templateUrl: "./lock-icon.component.html",
    styleUrls: ["./lock-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LockIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
