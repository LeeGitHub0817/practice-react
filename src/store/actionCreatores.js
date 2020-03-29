import axios from 'axios';
import '../mock/mock';

import { CHANGE_INPUT, ADD_NEW_ITEM, DELETE_ITEM, GET_LIST, GET_SAGA_LIST } from './actionTypes';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addNewItemAction = () => ({
  type: ADD_NEW_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getSagaListAction = () => ({
  type: GET_SAGA_LIST
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://api.test.com/v1/list').then((res) => {
      console.log(res.data);
      const action = getListAction(res.data);
      dispatch(action);
    });
  }
}