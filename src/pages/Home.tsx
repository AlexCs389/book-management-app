import { Col, Row } from 'react-bootstrap'
import BooksList from '../components/BooksList'

function Home() {
  return (
    <Row>
      <Col>
        <BooksList />
      </Col>
    </Row>
  )
}

export default Home
