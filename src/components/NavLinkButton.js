import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinkButton({ ...props }) {
  return (
    <NavLink
      style={{ color: 'white', textDecoration: 'none', margin: 'auto 10px' }}
      activeStyle={{
        fontWeight: 'bold',
        textDecoration: 'underline'
      }}
      {...props}
    />
  )
}
