import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand className="m-auto">Mario Kart Tournament Scheduler</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
