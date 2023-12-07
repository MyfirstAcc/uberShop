import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listCatalogs } from '../actions/catalogActions';
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'

function TypeCatalogScreen() {
    const dispatch = useDispatch();
    const catalogList = useSelector((state) => state.catalogList);
    const { error, loading, catalogs, page, pages } = catalogList;
    useEffect(() => {
        dispatch(listCatalogs());
    }, [dispatch]);

    return (
        <div>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {console.log(catalogs)}

                            {catalogs.map(catalog => (
                                <Col key={catalog._id} sm={12} md={6} lg={4} xl={3}>
                                    <Card className="my-3 p-3 rounded">
                                        <Link to={`/catalog/${catalog.name}`}>
                                            <Card.Img src={catalog.image} />
                                        </Link>

                                        <Card.Body>
                                            <Link to={`/catalog/${catalog._id}`}>
                                                <Card.Title as="div">
                                                    <strong>{catalog._name}</strong>
                                                </Card.Title>
                                            </Link>


                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>


                    </div>}
        </div>
    )
}

export default TypeCatalogScreen
