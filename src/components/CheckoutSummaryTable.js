import React from 'react'
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell
} from '@material-ui/core'

export default function CheckoutSummaryTable({ items }) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Description</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Price</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items && items.length ? (
            <React.Fragment>
              {items.map(({ description, price }, index) => (
                <TableRow>
                  <TableCell>{description}</TableCell>
                  <TableCell align="right">{price.toFixed(2)} €</TableCell>
                </TableRow>
              ))}
              <TableRow style={{ background: '#FFF3E0' }}>
                <TableCell>
                  <strong>Total</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>
                    {items
                      .reduce((sum, item) => sum + item.price, 0)
                      .toFixed(2)}{' '}
                    €
                  </strong>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ) : (
            <TableRow>
              <TableCell colSpan={2} align="center">
                No items
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  )
}
