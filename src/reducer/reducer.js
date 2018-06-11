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
      // 若 search input 空字串，顯示完整列表；有輸入值則顯示篩選後結果
      return ({
        ...state,
        isLoading: false,
        dramas: action.payload.data.data.filter( item => (
          item.name.includes( action.meta.value )
        ))
      })
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

