import React from "react";
import { Field } from "formik";
import InputText from "./InputText";

export default function FormikInputText({ name, ...props }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <InputText {...props} {...field} error={meta.touched && meta.error} />
      )}
    </Field>
  );
}
