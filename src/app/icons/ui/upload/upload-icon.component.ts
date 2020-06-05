import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "upload-icon",
    templateUrl: "./upload-icon.component.html",
    styleUrls: ["./upload-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
