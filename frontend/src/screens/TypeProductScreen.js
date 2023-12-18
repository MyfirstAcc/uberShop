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
                      {console.log(catalogs)}
                    </div>}
        </div>
    )
}

export default TypeCatalogScreen
