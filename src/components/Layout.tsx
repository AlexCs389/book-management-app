import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

import Menu from './Menu'

function Layout() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Aplicación para administrar libros</h1>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Menu />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
