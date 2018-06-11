## 使用 react /redux 的戲劇列表查詢系統

進站會先顯示所有的戲劇列表，並於使用者在上方搜尋列中輸入搜尋關鍵字時，將搜尋結果顯示於下方列表頁面中。  
- 前端網頁運行網址： [http://thinkr.tw/dramas/](http://thinkr.tw/dramas/)  
- 後端API： [http://thinkr.tw:3002/api/dramas/](http://thinkr.tw:3002/api/dramas/)  
- 後端API GitHub： [https://github.com/kristxeng/dramas-api/](https://github.com/kristxeng/dramas-api/)  

**Install**  
`npm install`  
或  
`yarn install`    

**執行 webpack dev server**  
`npm run dev`  
並可於 [http://localhost:8080](http://localhost:8080/) 顯示網頁。


**使用 React / Redux架構**  
- 頁面分上方 SearchBar 跟下方 List 兩大 Component，上方 SearchBar 輸入關鍵字會即時篩選結果顯示在下方 List。  
- 初進站時，ListContainer 會以無關鍵字的方式 dispatch listFilter action，即顯示全部戲劇列表。  
- 當 SearchBar 輸入值改變時， SearchBarContainer 會連同『搜尋關鍵字』與 listFilter action 一起 dispatch 至 reducer。  
- SearchBar 輸入更新使用自身的 state 處理。  
  
**其他工具**  
- axios 套件操作 AJAX，並用 Redux middleware for promises 套件，在 redux middleware 中發出 AJAX request。  
- Logger for Redux 可以在 chrome dev tool 中顯示 redux 發出 action 所影響的各項數值，以利 debug。  
- webpack dev server & react hot loader 建立簡易的靜態 server，並即時顯示修改內容，加速開發效率。  
- babel-plugin-transform-object-rest-spread 套件讓 babel 支援 Spread Operator(...state)。  

**雲端部署**  
- AWS + ubuntu 16.04
- 前端網頁伺服器使用 Apache HTTP Server 
- 後端 NodeJS + Express 架構的 API 用 PM2 背景常駐。
