import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "question-icon",
    templateUrl: "./question-icon.component.html",
    styleUrls: ["./question-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class questionIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
