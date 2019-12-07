import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CheckoutSummaryTable from "./CheckoutSummaryTable";
import SubFormCustomerAnagraphic, * as SubFormCustomerAnagraphicMeta from "./SubFormCustomerAnagraphic";
import SubFormEmail, * as SubFormEmailMeta from "./SubFormEmail";
import SubFormAddress, * as SubFormAddressMeta from "./SubFormAddress";
import { MOCK_CART_ITEMS } from "../constants";
import { EMAIL } from "./SubFormCustomer";

const CUSTOMER = "CUSTOMER";
const ADDRESS = "ADDRESS";

const defaultValues = {
  ...SubFormCustomerAnagraphicMeta.defaultValues,
  [EMAIL]: SubFormEmailMeta.defaultValues,
  [ADDRESS]: SubFormAddressMeta.defaultValues
};

const validationSchema = yup.object({
  ...SubFormCustomerAnagraphicMeta.validationSchema({ isRequired: true }),
  [EMAIL]: SubFormEmailMeta.validationSchema({ isRequired: true }),
  [ADDRESS]: yup.object(SubFormAddressMeta.validationSchema)
});

export default function RouteAnonymousCheckout() {
  return (
    <div style={{ marginBottom: 30 }}>
      <h1>Checkout</h1>
      <p>Here's a summary of what's in your cart:</p>
      <CheckoutSummaryTable items={MOCK_CART_ITEMS} />
      <p>
        In order to deliver your items we need you to fill the following form
        with the required information
      </p>
      <Paper style={{ padding: "15px 30px 30px 30px" }}>
        <Grid container>
          <Formik
            initialValues={defaultValues}
            validationSchema={validationSchema}
          >
            <Form>
              <Grid container spacing={2}>
                <h3>Who should receive the package?</h3>
                <SubFormCustomerAnagraphic />
                <h3>Where should we send updates about the shipping?</h3>
                <Grid item xs={12}>
                  <SubFormEmail namespace={EMAIL} />
                </Grid>
                <h3>Where should we ship your items to?</h3>
                <SubFormAddress namespace={ADDRESS} />
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  fullWidth
                  style={{ marginTop: 15 }}
                >
                  Ship it!
                </Button>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Paper>
    </div>
  );
}
