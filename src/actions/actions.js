import { LIST_FILTER } from './actionTypes'
import axios from 'axios'

export const listFilter = ( value = '' ) => {
  return {
    type: LIST_FILTER,
    payload: axios.get('http://thinkr.tw:3002/api/dramas/'),
    meta: {
      value
    }
  }
}

