import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productTypeSheet, fetchCatalog } from '../actions/catalogActions';
import ProductCarousel from '../components/ProductCarousel'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import FilterBar from '../components/FilterBar'; // Импортируйте компонент фильтра
import { useHistory } from 'react-router-dom';

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

    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        minRating: '',
    });

    useEffect(() => {
        dispatch(productTypeSheet(match.params.type, filters))
    }, [dispatch, match, keyword, filters])


    // Функция для применения фильтра
    const applyFilter = (newFilters) => {
        // Фильтруем пустые значения из newFilters
        const filteredFilters = Object.keys(newFilters).reduce((result, key) => {
            if (newFilters[key]) {
                result[key] = newFilters[key];
            }
            return result;
        }, {});

        setFilters(filteredFilters);
        dispatch(productTypeSheet(match.params.type, filteredFilters));
    };


    return (
        <div>
            <Link to="/catalog" className="btn btn-light my-3">
                Назад
            </Link>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {loading ? (
                            <Loader />
                        ) : error ? (
                            <Message variant="danger">{error}</Message>
                        ) : (
                            <Row>
                                {catalogsList.map((catalog) => (
                                    <Col
                                        key={catalog._id} sm={12} md={6} lg={4} xl={3} className="mb-3"
                                    >
                                        <Product product={catalog} />
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </div>
                    <div className="col-md-3">
                        <FilterBar onFilterChange={applyFilter} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeCatalogScreen
