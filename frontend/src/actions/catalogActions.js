import axios from 'axios';
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


// export const productTypeSheet = (type, filters) => async (dispatch) => {
//   try {
//     dispatch({ type: CATALOG_DETAILS_REQUEST })
//     console.log("filters:", type)
//     const { data } = await axios.get(`/api/catalog/${type}`, { params: filters })
//     console.log(data)

//     dispatch({
//       type: CATALOG_DETAILS_SUCCESS,
//       payload: data
//     })

//   } catch (error) {
//     dispatch({
//       type: CATALOG_DETAILS_FAIL,
//       payload: error.response && error.response.data.detail
//         ? error.response.data.detail
//         : error.message,
//     })
//   }
// }



export const productTypeSheet = (type, filters) => async (dispatch) => {
  dispatch({ type: CATALOG_DETAILS_REQUEST });

  try {
    // Исключаем пустые значения из фильтров
    const filteredFilters = {};
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        filteredFilters[key] = filters[key];
      }
    });

    console.log(filteredFilters);
    const response = await axios.get(`/api/catalog/${type}`, { params: filteredFilters });
    dispatch({ type: CATALOG_DETAILS_SUCCESS, payload: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: CATALOG_DETAILS_FAIL, payload: error.message });
  }
};