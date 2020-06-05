import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "otkritie-icon",
    templateUrl: "./otkritie-icon.component.html",
    styleUrls: ["./otkritie-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtkritieIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
