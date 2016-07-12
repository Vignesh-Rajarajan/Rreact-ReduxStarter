import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  //console.log('@@@@@@@@'+authors);
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  //console.log('3##############');
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors =>{
      //console.log('@@@@@@@@'+authors);
      dispatch(loadAuthorsSuccess(authors)).catch(error =>{
        throw(error);
      });
    })
  }
}
