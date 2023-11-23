import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCatalog } from '../actions/catalogActions'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import Catalog from '../components/Catalogs'


function CatalogScreen({ history }) {
    

    return (
        <div>
            <h1>
                Каталог
            </h1>
           
        </div>
    )
}

export default CatalogScreen
