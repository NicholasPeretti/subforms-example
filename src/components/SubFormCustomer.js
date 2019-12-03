import React from "react";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import FormikInputText from "./FormikInputText";
import FormikInputSelect from "./FormikInputSelect";
import SubFormEmail, * as SubFormEmailMeta from "./SubFormEmail";
import SubFormCustomerAnagraphic, * as SubFormCustomerAnagraphicMeta from "./SubFormCustomerAnagraphic";
import addNamespace from "../helpers/addNamespace";
import { ERROR_REQUIRED } from "../constants";

export const EMAIL = "EMAIL";
export const CUSTOMER_TYPE = "CUSTOMER_TYPE";
export const COMPANY_NAME = "COMPANY_NAME";

export const CUSTOMER_TYPE_COMPANY = "COMPANY";
export const CUSTOMER_TYPE_PRIVATE = "PRIVATE";
export const CUSTOMER_TYPE_OPTIONS = [
  { label: "Company", value: CUSTOMER_TYPE_COMPANY },
  { label: "Private", value: CUSTOMER_TYPE_PRIVATE }
];

export const defaultValues = {
  ...SubFormCustomerAnagraphicMeta.defaultValues,
  [EMAIL]: SubFormEmailMeta.defaultValues,
  [CUSTOMER_TYPE]: CUSTOMER_TYPE_OPTIONS[1].value,
  [COMPANY_NAME]: ""
};

export const validationSchema = ({ values }) => ({
  ...SubFormCustomerAnagraphicMeta.validationSchema({ isRequired: true }),
  [EMAIL]: SubFormEmailMeta.validationSchema({ isRequired: true }),
  [CUSTOMER_TYPE]: yup
    .string()
    .required(ERROR_REQUIRED)
    .oneOf(CUSTOMER_TYPE_OPTIONS.map(({ value }) => value)),
  [COMPANY_NAME]:
    values[CUSTOMER_TYPE] === CUSTOMER_TYPE_COMPANY
      ? yup.string().required(ERROR_REQUIRED)
      : yup.string()
});

window.validationSchema = validationSchema;

export default function SubFormCustomer({ namespace }) {
  const withNamespace = addNamespace(namespace);

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <FormikInputSelect
          name={withNamespace(CUSTOMER_TYPE)}
          label="Type"
          options={CUSTOMER_TYPE_OPTIONS}
        />
      </Grid>
      <Grid item xs={12}>
        <FormikInputText
          label="Company name"
          name={withNamespace(COMPANY_NAME)}
        />
      </Grid>
      <SubFormCustomerAnagraphic namespace={namespace} />
      <Grid item xs={12}>
        <SubFormEmail label="Email" namespace={withNamespace(EMAIL)} />
      </Grid>
    </React.Fragment>
  );
}
