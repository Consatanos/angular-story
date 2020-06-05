import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "notification-icon",
    templateUrl: "./notification-icon.component.html",
    styleUrls: ["./notification-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
