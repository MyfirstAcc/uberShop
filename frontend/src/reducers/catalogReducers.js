import {
    CATALOG_LIST_REQUEST,
    CATALOG_LIST_SUCCESS,
    CATALOG_LIST_FAIL,
    CATALOG_DETAILS_REQUEST,
    CATALOG_DETAILS_SUCCESS,
    CATALOG_DETAILS_FAIL


} from '../constants/catalogConstants'


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