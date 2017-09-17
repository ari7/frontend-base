import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from './routes/router'

const render = Root => {
  return ReactDOM.render(<Root />, document.getElementById('root'))
}

render(BrowserRouter)

if (module.hot) {
  console.log('with invisbile reload')

  module.hot.accept('./routes/router', () => {
    console.log('re-render')

    let root = document.getElementById('root')
    while (root.hasChildNodes()) {
      root.removeChild(root.firstChild)
    }

    render(BrowserRouter)
  })
}
