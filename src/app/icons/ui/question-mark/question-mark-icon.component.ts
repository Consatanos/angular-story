import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "question-mark-icon",
    templateUrl: "./question-mark-icon.component.html",
    styleUrls: ["./question-mark-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionMarkIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
