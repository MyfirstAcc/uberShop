import axios from 'axios'
import {
    CATALOG_LIST_REQUEST,
    CATALOG_LIST_SUCCESS,
    CATALOG_LIST_FAIL,

} from '../constants/catalogConstants'



export const listCatalog = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: CATALOG_LIST_REQUEST })

        const { data } = await axios.get(`/api/catalog${keyword}`)

        dispatch({
            type: CATALOG_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATALOG_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}