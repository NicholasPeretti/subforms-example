import React from 'react'
import { useFormikContext } from 'formik'

export default function FormikValues() {
  const { values } = useFormikContext()
  return <pre>{JSON.stringify(values, null, 2)}</pre>
}
