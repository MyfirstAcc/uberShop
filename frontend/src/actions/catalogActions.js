import axios from 'axios';
import {
  CATALOG_LIST_REQUEST,
  CATALOG_LIST_SUCCESS,
  CATALOG_LIST_FAIL,

  CATALOG_DETAILS_REQUEST,
  CATALOG_DETAILS_SUCCESS,
  CATALOG_DETAILS_FAIL,

} from '../constants/catalogConstants';

export const listCatalogs = () => async (dispatch) => {
  try {
    dispatch({ type: CATALOG_LIST_REQUEST });

    const { data } = await axios.get(`/api/catalog`);
    dispatch({
      type: CATALOG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATALOG_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const productTypeSheet = (type) => async (dispatch) => {
  try {
    dispatch({ type: CATALOG_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/catalog/${type}`)
    console.log(data)

    dispatch({
      type: CATALOG_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CATALOG_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}