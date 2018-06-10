import React from 'react'
import { hot } from 'react-hot-loader';
import List from './containers/ListContainer'
import SearchBar from './containers/SearchBarContainer'




const App = () => (
    <div>
      <SearchBar />
      <List />
    </div>
)

export default hot(module)(App)

