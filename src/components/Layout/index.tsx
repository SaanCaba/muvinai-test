import { Box } from '@mui/material'
import React from 'react'

interface Props{
    children : React.ReactNode
}

function Layout({children}:Props) {
  return (
    <Box sx={{
        padding:"90px"
    }} component="main">
      {children}
    </Box>
  )
}

export default Layout
