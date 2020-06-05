import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "view-icon",
    templateUrl: "./view-icon.component.html",
    styleUrls: ["./view-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
