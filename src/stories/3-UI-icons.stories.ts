import { IconsBankPreviewComponent } from "./../app/icons/icons-bank-preview/icons-bank-preview.component";
import { PlusIconComponent } from "src/app/icons/ui/plus/plus-icon.component";
import { IconsPreviewComponent } from "src/app/icons/icons-preview/icons-preview.component";
import { ChevronLeftIconComponent } from "src/app/icons/ui/chevron-left/chevron-left-icon.component";
import { ChevronRightIconComponent } from "src/app/icons/ui/chevron-right/chevron-right-icon.component";
import { ArrowDownIconComponent } from "src/app/icons/ui/arrow-down/arrow-down-icon.component";
import { ArrowUpIconComponent } from "src/app/icons/ui/arrow-up/arrow-up-icon.component";
import { QuestionMarkIconComponent } from "src/app/icons/ui/question-mark/question-mark-icon.component";
import { CrossIconComponent } from "src/app/icons/ui/cross/cross-icon.component";
import { CheckIconComponent } from "src/app/icons/ui/check/check-icon.component";
import { AttentionIconComponent } from "src/app/icons/ui/attention/attention-icon.component";
import { InfoLetterIconComponent } from "src/app/icons/ui/info-letter/info-letter-icon.component";
import { FavoriteIconComponent } from "src/app/icons/ui/favorite/favorite-icon.component";
import { NotificationIconComponent } from "src/app/icons/ui/notification/notification-icon.component";
import { CopyIconComponent } from "src/app/icons/ui/copy/copy-icon.component";
import { CalendarIconComponent } from "src/app/icons/ui/calendar/calendar-icon.component";
import { AlertIconComponent } from "src/app/icons/ui/alert/alert-icon.component";
import { SuccessIconComponent } from "src/app/icons/ui/success/success-icon.component";
import { WaitingIconComponent } from "src/app/icons/ui/waiting/waiting-icon.component";
import { ErrorIconComponent } from "src/app/icons/ui/error/error-icon.component";
import { LockIconComponent } from "src/app/icons/ui/lock/lock-icon.component";
import { DocIconComponent } from "src/app/icons/ui/doc/doc-icon.component";
import { UploadIconComponent } from "src/app/icons/ui/upload/upload-icon.component";
import { DownloadIconComponent } from "src/app/icons/ui/download/download-icon.component";
import { ViewIconComponent } from "src/app/icons/ui/view/view-icon.component";
import { questionIconComponent } from "src/app/icons/ui/question/question-icon.component";
import { UpdateIconComponent } from "src/app/icons/ui/update/update-icon.component";
import { SberbankIconComponent } from "src/app/icons/banks/sberbank/sberbank-icon.component";
import { AlfabankIconComponent } from "src/app/icons/banks/alfabank/alfabank-icon.component";
import { VtbIconComponent } from "src/app/icons/banks/vtb/vtb-icon.component";
import { OtkritieIconComponent } from "src/app/icons/banks/otkritie/otkritie-icon.component";

export default {
    title: "UI icons",
    component: IconsPreviewComponent
};

export const UIIcons = () => ({
    moduleMetadata: {
        declarations: [
            ChevronLeftIconComponent,
            ChevronRightIconComponent,
            ArrowDownIconComponent,
            ArrowUpIconComponent,
            PlusIconComponent,
            QuestionMarkIconComponent,
            CrossIconComponent,
            CheckIconComponent,
            AttentionIconComponent,
            InfoLetterIconComponent,
            FavoriteIconComponent,
            NotificationIconComponent,
            CopyIconComponent,
            CalendarIconComponent,
            LockIconComponent,
            DocIconComponent,
            UploadIconComponent,
            DownloadIconComponent,
            ViewIconComponent,
            UpdateIconComponent,
            AlertIconComponent,
            SuccessIconComponent,
            WaitingIconComponent,
            ErrorIconComponent,
            questionIconComponent
        ]
    },
    component: IconsPreviewComponent
});

export const BankIcons = () => ({
    moduleMetadata: {
        declarations: [
            SberbankIconComponent,
            AlfabankIconComponent,
            VtbIconComponent,
            OtkritieIconComponent
        ]
    },
    component: IconsBankPreviewComponent
});
