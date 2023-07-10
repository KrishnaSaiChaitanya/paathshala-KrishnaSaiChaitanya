/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestingCreateFormInputValues = {
    name?: string;
};
export declare type TestingCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestingCreateFormOverridesProps = {
    TestingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestingCreateFormProps = React.PropsWithChildren<{
    overrides?: TestingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestingCreateFormInputValues) => TestingCreateFormInputValues;
    onSuccess?: (fields: TestingCreateFormInputValues) => void;
    onError?: (fields: TestingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestingCreateFormInputValues) => TestingCreateFormInputValues;
    onValidate?: TestingCreateFormValidationValues;
} & React.CSSProperties>;
export default function TestingCreateForm(props: TestingCreateFormProps): React.ReactElement;
