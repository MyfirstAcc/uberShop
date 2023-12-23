import {
    CATALOG_LIST_REQUEST,
    CATALOG_LIST_SUCCESS,
    CATALOG_LIST_FAIL,
    CATALOG_DETAILS_REQUEST,
    CATALOG_DETAILS_SUCCESS,
    CATALOG_DETAILS_FAIL,

    FETCH_CATALOG_REQUEST,
    FETCH_CATALOG_SUCCESS,
    FETCH_CATALOG_FAILURE


} from '../constants/catalogConstants'

const initialState = {
    catalogsList: [],
    loading: false,
    error: null,
}


export const catalogReducer = (state = { catalogs: [] }, action) => {
    switch (action.type) {
        case CATALOG_LIST_REQUEST:
            return { loading: true, catalogs: [] }

        case CATALOG_LIST_SUCCESS:
            return {
                loading: false,
                catalogs: action.payload.catalogs,
                page: action.payload.page,
                pages: action.payload.pages
            }

        case CATALOG_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const catalogDetailsReducer = (state = { catalogsList: [] }, action) => {
    switch (action.type) {
        case CATALOG_DETAILS_REQUEST:
            return { loading: true, ...state }

        case CATALOG_DETAILS_SUCCESS:
            return { loading: false, catalogsList: action.payload }

        case CATALOG_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const catalogFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATALOG_REQUEST:
            return { ...state, loading: true, error: null }
        case FETCH_CATALOG_SUCCESS:
            return { ...state, catalogsList: action.payload, loading: false }
        case FETCH_CATALOG_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}