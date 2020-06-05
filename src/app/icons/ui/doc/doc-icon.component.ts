import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "doc-icon",
    templateUrl: "./doc-icon.component.html",
    styleUrls: ["./doc-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
