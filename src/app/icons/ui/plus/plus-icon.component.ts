import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "plus-icon",
    templateUrl: "./plus-icon.component.html",
    styleUrls: ["./plus-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlusIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
