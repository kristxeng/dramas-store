import { combineReducers } from 'redux'
import { LIST_FILTER } from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  dramas: ''
}

const searchApp = ( state = initialState , action ) => {
  switch (action.type) {

    // 列表隨 search inpuit 篩選
    case `${LIST_FILTER}_PENDING`: 
      return ({
        ...state,
        isLoading: true
      })

    case `${LIST_FILTER}_FULFILLED`: {
      // 如果 search input 空字串，則顯示完整列表
      if(action.meta.value === '') {
        return ({
          ...state,
          isLoading: false,
          dramas: action.payload.data.data
        })
      } else {
        return ({
          ...state,
          isLoading: false,
          dramas: action.payload.data.data.filter( item => (
            item.name.includes( action.meta.value )
          ))
        })
      }
    }


    default:
      return state
  }
}

const rootReducer = combineReducers({
  // listApp,
  searchApp
})


export default rootReducer

