import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
@Component({
    selector: "favorite-icon",
    templateUrl: "./favorite-icon.component.html",
    styleUrls: ["./favorite-icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteIconComponent {
    @Input() public size: "small" | "medium" | "large";
}
