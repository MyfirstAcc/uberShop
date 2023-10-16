import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import Catalog from '../components/Catalogs'


function CatalogScreen({ history }) {
    const dispatch = useDispatch()
    const catalogList = useSelector(state => state.catalogList)
    const { error, loading, catalog, page, pages } =  catalogList

    let keyword = history.location.search

    useEffect(() => {

        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            <h1>
                Каталог
            </h1>
            {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        :
                        <div>
                            <Row>
                                {catalog.map(catalog => (
                                    <Col key={catalog._id} sm={12} md={6} lg={4} xl={3}>
                                        <Catalog catalog={catalog} />
                                    </Col>
                                ))}
                            </Row>
                            <Paginate page={page} pages={pages} keyword={keyword} />
                        </div>
            }
        </div>
    )
}

export default CatalogScreen
