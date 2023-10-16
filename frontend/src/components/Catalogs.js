import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Catalog({ catalog }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/catalog/${catalog._id}`}>
                <Card.Img src={catalog.image} />
            </Link>

            <Card.Body>
                <Link to={`/catalog/${catalog._id}`}>
                    <Card.Title as="div">
                        <strong>{catalog.name}</strong>
                    </Card.Title>
                </Link>

            </Card.Body>
        </Card>
    )
}

export default Catalog
