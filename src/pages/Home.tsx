import { Container, Row, Col } from 'react-bootstrap'
import BooksList from '../components/BooksList'

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Aplicación para administrar libros </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <BooksList />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
