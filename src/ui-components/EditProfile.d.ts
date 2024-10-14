/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditProfileOverridesProps = {
    EditProfile?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Add Pet Profile"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField29766922?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766923?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766924?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3877810?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3877818?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3877850?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    AddPet?: React.ReactNode;
} & {
    overrides?: EditProfileOverridesProps | undefined | null;
}>;
export default function EditProfile(props: EditProfileProps): React.ReactElement;
