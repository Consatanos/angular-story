import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "update-icon",
    templateUrl: "./update-icon.component.html",
    styleUrls: ["./update-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
