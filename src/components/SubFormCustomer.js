import React from "react";
import Grid from "@material-ui/core/Grid";
import SubFormEmail, * as SubFormEmailMeta from "./SubFormEmail";
import SubFormCustomerAnagraphic, * as SubFormCustomerAnagraphicMeta from "./SubFormCustomerAnagraphic";
import addNamespace from "../helpers/addNamespace";

export const EMAIL = "EMAIL";

export const defaultValues = {
  ...SubFormCustomerAnagraphicMeta.defaultValues,
  [EMAIL]: SubFormEmailMeta.defaultValues
};

export const validationSchema = {
  ...SubFormCustomerAnagraphicMeta.validationSchema(true),
  [EMAIL]: SubFormEmailMeta.validationSchema(true)
};

window.validationSchema = validationSchema;

export default function SubFormCustomer({ namespace }) {
  const withNamespace = addNamespace(namespace);

  return (
    <React.Fragment>
      <SubFormCustomerAnagraphic namespace={namespace} />
      <Grid item xs={12}>
        <SubFormEmail label="Email" namespace={withNamespace(EMAIL)} />
      </Grid>
    </React.Fragment>
  );
}
