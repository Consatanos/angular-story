import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "info-letter-icon",
    templateUrl: "./info-letter-icon.component.html",
    styleUrls: ["./info-letter-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoLetterIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
