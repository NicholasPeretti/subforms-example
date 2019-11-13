import React from "react";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Formik, Form } from "formik";
import SubFormCustomer, * as SubFormCustomerMeta from "./SubFormCustomer";
import SubFormPasswordCheck, * as SubFormPasswordCheckMeta from "./SubFormPasswordCheck";
import SubFormAddress, * as SubFormAddressMeta from "./SubFormAddress";

const CUSTOMER = "CUSTOMER";
const PASSWORD = "PASSWORD";
const ADDRESS = "ADDRESS";

const defaultValues = {
  [CUSTOMER]: SubFormCustomerMeta.defaultValues,
  [PASSWORD]: SubFormPasswordCheckMeta.defaultValues,
  [ADDRESS]: SubFormAddressMeta.defaultValues
};

const validationSchema = yup.object({
  [CUSTOMER]: yup.object(SubFormCustomerMeta.validationSchema),
  [PASSWORD]: SubFormPasswordCheckMeta.validationSchema,
  [ADDRESS]: yup.object(SubFormAddressMeta.validationSchema)
});

export default function RouteSignUp() {
  return (
    <div>
      <h1>Sign up</h1>
      <Formik initialValues={defaultValues} validationSchema={validationSchema}>
        <Form>
          <Grid container spacing={2}>
            <SubFormCustomer namespace={CUSTOMER} />
            <SubFormAddress namespace={ADDRESS} />
            <SubFormPasswordCheck namespace={PASSWORD} />
            <Grid item xs={12} style={{ marginTop: 15 }}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
              >
                Sign up!
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
