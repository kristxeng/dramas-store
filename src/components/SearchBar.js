import React from 'react'


class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState ({
      inputValue: e.target.value
    })

    this.props.listFilter(e.target.value)
  }

  render() {
    return (
      <div className="search-bar">
        <div className="container">
          <input type="text" className="search-bar__input" placeholder="請輸入欲搜尋劇名"
                value={this.state.inputValue} onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

export default SearchBar