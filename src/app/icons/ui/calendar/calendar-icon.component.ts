import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "calendar-icon",
    templateUrl: "./calendar-icon.component.html",
    styleUrls: ["./calendar-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
