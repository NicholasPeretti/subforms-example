import React, { useState } from "react";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import { Formik, Form } from "formik";
import SubFormAddress, * as SubFormAddressMeta from "./SubFormAddress";
import CheckoutSummaryTable from "./CheckoutSummaryTable";
import { MOCK_CART_ITEMS } from "../constants";

const ADDRESS = "ADDRESS";

const defaultValues = {
  [ADDRESS]: SubFormAddressMeta.defaultValues
};

const validationSchema = yup.object({
  [ADDRESS]: yup.object(SubFormAddressMeta.validationSchema)
});

export default function RouteCheckout() {
  const [isCustomAddressFormVisible, setIsCustomAddressFormVisible] = useState(
    false
  );
  const toggleCustomAddressFormVisibility = () => {
    setIsCustomAddressFormVisible(!isCustomAddressFormVisible);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <h1>Checkout</h1>
          <p>
            Hi, Mario. <br />
            Here's the summary of what's in your cart:
          </p>
          <CheckoutSummaryTable items={MOCK_CART_ITEMS} />
          <h2>Shipping address</h2>
          <p>Choose where you want to receive your items!</p>
        </Grid>
        <Collapse in={!isCustomAddressFormVisible}>
          <Grid container>
            <Grid item xs={12}>
              <Button fullWidth color="primary" variant="contained">
                Ship to your default address
              </Button>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center", margin: 15 }}>
              or
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                onClick={toggleCustomAddressFormVisibility}
              >
                Ship to a different address
              </Button>
            </Grid>
          </Grid>
        </Collapse>
        <Collapse in={isCustomAddressFormVisible}>
          <div>
            <Formik
              initialValues={defaultValues}
              validationSchema={validationSchema}
            >
              <Form>
                <Grid container spacing={2}>
                  <SubFormAddress namespace={ADDRESS} />
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="flex-end"
                    style={{ marginTop: 5 }}
                  >
                    <Grid item>
                      <Button
                        color="primary"
                        onClick={toggleCustomAddressFormVisibility}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button color="primary" type="submit" variant="contained">
                        Ship to this address
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Collapse>
      </Grid>
    </div>
  );
}
