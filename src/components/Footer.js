import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="m-auto text-white">
          Website by <a href="https://ethanr.co.uk" className="text-white">Ethan R</a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Footer
