import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "attention-icon",
    templateUrl: "./attention-icon.component.html",
    styleUrls: ["./attention-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttentionIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
