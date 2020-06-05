import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "alfabank-icon",
    templateUrl: "./alfabank-icon.component.html",
    styleUrls: ["./alfabank-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlfabankIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
