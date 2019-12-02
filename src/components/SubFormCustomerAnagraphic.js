import React from "react";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import FormikInputText from "./FormikInputText";
import addNamespace from "../helpers/addNamespace";
import { ERROR_REQUIRED } from "../constants";

export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "LAST_NAME";

export const defaultValues = {
  [FIRST_NAME]: "",
  [LAST_NAME]: ""
};

export const validationSchema = ({ isRequired }) =>
  isRequired
    ? {
        [FIRST_NAME]: yup.string().required(ERROR_REQUIRED),
        [LAST_NAME]: yup.string().required(ERROR_REQUIRED)
      }
    : {
        [FIRST_NAME]: yup.string(),
        [LAST_NAME]: yup.string()
      };

export default function SubFormCustomer({ namespace }) {
  const withNamespace = addNamespace(namespace);

  return (
    <React.Fragment>
      <Grid item xs={6}>
        <FormikInputText label="First name" name={withNamespace(FIRST_NAME)} />
      </Grid>
      <Grid item xs={6}>
        <FormikInputText label="Last name" name={withNamespace(LAST_NAME)} />
      </Grid>
    </React.Fragment>
  );
}
