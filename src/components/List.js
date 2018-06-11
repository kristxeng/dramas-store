import React from 'react'

class List extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.getInitialList();
  }

  render() {
    const {dramas, isLoading} = this.props
    return (
      <div className="container">
        <h1 className="title">節目列表</h1>

        { isLoading ? (
            <h2 className="title">Loading...</h2>
          ) : (

            dramas.length ? (
              dramas.map( item => {
                console.log(item)
                return <Item key={item.name} item={item} /> })
            ) : (
                <h2 className="title">沒有您搜尋的影片唷</h2>
            )
          )
        }
      </div>
    )
  }
}




const Item = ({item}) => (
  <div className="item">
    <div className="item__img">
      <img src={item.vertical_poster} />
    </div>
    <div className="item__name">{item.name}</div>
    <div className="item__year">出品年份：{item.year}</div>
    <div className="item__total_eps">總集數：{item.total_eps}</div>
    <div className="item__total_views">總點閱率：{item.total_views}</div>
  </div>
)

export default List