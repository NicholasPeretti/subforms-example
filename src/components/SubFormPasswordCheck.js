import React from "react";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import FormikInputText from "./FormikInputText";
import addNamespace from "../helpers/addNamespace";
import {
  ERROR_REQUIRED,
  ERROR_UNMATCHING_PASSWORDS,
  ERROR_PASSWORD_TOO_SHORT
} from "../constants";

export const PASSWORD = "PASSWORD";
export const PASSWORD_CHECK = "PASSWORD_CHECK";

export const defaultValues = {
  [PASSWORD]: "",
  [PASSWORD_CHECK]: ""
};

export const validationSchema = ({ values }) => {
  return yup.object({
    [PASSWORD]: yup
      .string()
      .required(ERROR_REQUIRED)
      .min(8, ERROR_PASSWORD_TOO_SHORT),
    [PASSWORD_CHECK]: yup
      .string()
      .required(ERROR_REQUIRED)
      .test(
        "should have the same value of password",
        ERROR_UNMATCHING_PASSWORDS,
        value => value === values[PASSWORD]
      )
  });
};

export default function SubFormPasswordCheck({ namespace }) {
  const withNamespace = addNamespace(namespace);

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <FormikInputText
          label="Password"
          name={withNamespace(PASSWORD)}
          type="password"
        />
      </Grid>
      <Grid item xs={12}>
        <FormikInputText
          label="Repeat password"
          name={withNamespace(PASSWORD_CHECK)}
          type="password"
        />
      </Grid>
    </React.Fragment>
  );
}
