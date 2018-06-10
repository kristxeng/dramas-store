import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { listFilter } from '../actions/actions'


const mapDispatchToProps = (dispatch) => {
  return {
    listFilter: (value) => {
      dispatch(listFilter(value))
    }
  }
}

const SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer