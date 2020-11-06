import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';

function Navbar() {
  return (
    <Container maxWidth="xs">
      <Link to="/">홈</Link>
    </Container>
  )
}

export default Navbar
