import React from 'react'
import Navbar from './Navbar'
import { Grid } from '@material-ui/core'

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Grid container style={{ paddingTop: '70px' }}>
        {children}
      </Grid>
    </React.Fragment>
  )
}
