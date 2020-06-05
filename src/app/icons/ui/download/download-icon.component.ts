import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "download-icon",
    templateUrl: "./download-icon.component.html",
    styleUrls: ["./download-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
