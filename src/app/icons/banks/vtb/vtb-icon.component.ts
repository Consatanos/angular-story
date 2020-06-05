import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "vtb-icon",
    templateUrl: "./vtb-icon.component.html",
    styleUrls: ["./vtb-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VtbIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
