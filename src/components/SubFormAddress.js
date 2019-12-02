import React from "react";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import FormikInputText from "./FormikInputText";
import addNamespace from "../helpers/addNamespace";
import { ERROR_REQUIRED } from "../constants";

export const ADDRESS = "ADDRESS";
export const NUMBER = "NUMBER";
export const CITY = "CITY";
export const ZIP = "ZIP";
export const COUNTRY = "COUNTRY";

export const defaultValues = {
  [ADDRESS]: "",
  [NUMBER]: "",
  [CITY]: "",
  [ZIP]: "",
  [COUNTRY]: ""
};

export const validationSchema = () => ({
  [ADDRESS]: yup.string().required(ERROR_REQUIRED),
  [NUMBER]: yup.string().required(ERROR_REQUIRED),
  [CITY]: yup.string().required(ERROR_REQUIRED),
  [ZIP]: yup.string().required(ERROR_REQUIRED),
  [COUNTRY]: yup.string().required(ERROR_REQUIRED)
});

export default function SubFormAddress({ namespace }) {
  const withNamespace = addNamespace(namespace);

  return (
    <React.Fragment>
      <Grid item xs={9}>
        <FormikInputText label="Address" name={withNamespace(ADDRESS)} />
      </Grid>
      <Grid item xs={3}>
        <FormikInputText label="Number" name={withNamespace(NUMBER)} />
      </Grid>
      <Grid item xs={5}>
        <FormikInputText label="City" name={withNamespace(CITY)} />
      </Grid>
      <Grid item xs={3}>
        <FormikInputText label="Zip" name={withNamespace(ZIP)} />
      </Grid>
      <Grid item xs={4}>
        <FormikInputText label="Country" name={withNamespace(COUNTRY)} />
      </Grid>
    </React.Fragment>
  );
}
