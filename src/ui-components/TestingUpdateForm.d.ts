/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Testing } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestingUpdateFormInputValues = {
    name?: string;
};
export declare type TestingUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestingUpdateFormOverridesProps = {
    TestingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestingUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testing?: Testing;
    onSubmit?: (fields: TestingUpdateFormInputValues) => TestingUpdateFormInputValues;
    onSuccess?: (fields: TestingUpdateFormInputValues) => void;
    onError?: (fields: TestingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestingUpdateFormInputValues) => TestingUpdateFormInputValues;
    onValidate?: TestingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestingUpdateForm(props: TestingUpdateFormProps): React.ReactElement;
