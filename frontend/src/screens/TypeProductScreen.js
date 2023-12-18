import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productTypeSheet } from '../actions/catalogActions';
import ProductCarousel from '../components/ProductCarousel'
import Product from '../components/Product'
import Paginate from '../components/Paginate'

import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'

function TypeCatalogScreen({ match, history }) {
    const dispatch = useDispatch();
    const catDetails = useSelector(state => state.productType);
    const { error, loading, catalogsList, page, pages } = catDetails;
    let keyword = history.location.search

    useEffect(() => {
        dispatch(productTypeSheet(match.params.type))
    }, [dispatch, match, keyword]);

    return (
        <div>
             <Link to='/catalog' className='btn btn-light my-3'>Назад</Link>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {catalogsList.map(catalog => (
                                <Col key={catalog._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={catalog} />
                                </Col>
                            ))}
                        </Row>
                    </div>

            }
        </div>
    )
}

export default TypeCatalogScreen
