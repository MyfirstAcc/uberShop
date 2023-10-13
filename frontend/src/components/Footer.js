import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; ubsershop</Col>
                </Row>

                <Row>
                   <Col className="text-center py-3"> <a href="mailto:s.strt2011@yandex.ru"> Моя почта </a> </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
