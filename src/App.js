import React from 'react'
// 状态管理
import { Provider } from 'react-redux'
import store from './store/index'
// 重置默认样式
import { GlobalStyle } from './style'
// 字体图标样式
import { IconStyle } from './assets/iconfont/iconfont'
// 引入路由文件
import { renderRoutes } from 'react-router-config'
import routes from './routes/index'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={ store }>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
