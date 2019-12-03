import React from "react";
import { Field } from "formik";
import InputSelect from "./InputSelect";

export default function FormikInputSelect({ name, ...props }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <InputSelect {...props} {...field} error={meta.touched && meta.error} />
      )}
    </Field>
  );
}
