import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "copy-icon",
    templateUrl: "./copy-icon.component.html",
    styleUrls: ["./copy-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
