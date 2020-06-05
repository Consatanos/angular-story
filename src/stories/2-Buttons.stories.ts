import { PlusIconComponent } from "src/app/icons/ui/plus/plus-icon.component";
import { ButtonsPrimaryComponent } from "src/app/buttons/buttons-primary/buttons-primary.component";
import { ButtonsPrimaryBorderComponent } from "src/app/buttons/buttons-primary-border/buttons-primary-border.component";
import { ButtonsSecondaryComponent } from "src/app/buttons/buttons-secondary/buttons-secondary.component";
import { ButtonsSecondaryBorderComponent } from "src/app/buttons/buttons-secondary-border/buttons-secondary-border.component";
import { ButtonsTertiaryComponent } from "src/app/buttons/buttons-tertiary/buttons-tertiary.component";
import { ButtonsSuccessComponent } from "src/app/buttons/buttons-success/buttons-success.component";
import { ButtonsAlertComponent } from "src/app/buttons/buttons-alert/buttons-alert.component";
import { ButtonsMutedComponent } from "src/app/buttons/buttons-muted/buttons-muted.component";

export default {
    title: "Buttons",
    component: ButtonsPrimaryComponent
};

export const ButtonsPrimary = () => ({
    moduleMetadata: {
        declarations: [PlusIconComponent]
    },
    component: ButtonsPrimaryComponent
});

export const ButtonsPrimaryBorder = () => ({
    moduleMetadata: {
        declarations: [PlusIconComponent]
    },
    component: ButtonsPrimaryBorderComponent
});

export const ButtonsSecondary = () => ({
    moduleMetadata: {
        declarations: [PlusIconComponent]
    },
    component: ButtonsSecondaryComponent
});

export const ButtonsSecondaryBorder = () => ({
    moduleMetadata: {
        declarations: [PlusIconComponent]
    },
    component: ButtonsSecondaryBorderComponent
});

export const ButtonsTertiary = () => ({
    moduleMetadata: {
        declarations: [PlusIconComponent]
    },
    component: ButtonsTertiaryComponent
});

export const ButtonsSuccess = () => ({
    moduleMetadata: {
        declarations: [PlusIconComponent]
    },
    component: ButtonsSuccessComponent
});

export const ButtonsAlert = () => ({
    moduleMetadata: {
        declarations: [PlusIconComponent]
    },
    component: ButtonsAlertComponent
});

export const ButtonsMuted = () => ({
    moduleMetadata: {
        declarations: [PlusIconComponent]
    },
    component: ButtonsMutedComponent
});
