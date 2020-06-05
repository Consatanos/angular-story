import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "arrow-up-icon",
    templateUrl: "./arrow-up-icon.component.html",
    styleUrls: ["./arrow-up-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowUpIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
