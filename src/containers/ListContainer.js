import { connect } from 'react-redux'
import List from '../components/List'
import { listFilter } from '../actions/actions'




const mapStateToProps = (state) => {
  return {
    isLoading: state.searchApp.isLoading,
    dramas: state.searchApp.dramas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialList: () => {
      dispatch(listFilter())
    }
  }
}


const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer