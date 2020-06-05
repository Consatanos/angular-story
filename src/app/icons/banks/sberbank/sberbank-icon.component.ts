import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "sberbank-icon",
    templateUrl: "./sberbank-icon.component.html",
    styleUrls: ["./sberbank-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SberbankIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
