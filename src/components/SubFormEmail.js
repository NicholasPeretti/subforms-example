import React from "react";
import * as yup from "yup";
import FormikInputText from "./FormikInputText";
import { ERROR_INVALID_EMAIL, ERROR_REQUIRED } from "../constants";

export const validationSchema = isRequired =>
  isRequired
    ? yup
        .string()
        .required(ERROR_REQUIRED)
        .email(ERROR_INVALID_EMAIL)
    : yup.string().email(ERROR_INVALID_EMAIL);

export const defaultValues = "";

export default function SubFormEmail({ namespace, ...props }) {
  return <FormikInputText label="Email" {...props} name={namespace} />;
}
