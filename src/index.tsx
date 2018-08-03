import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

// const render = Component: any => {
const root = document.createElement('div')
document.body.appendChild(root)

if (process.env.NODE_ENV === 'production') {
  render(<App />, root);
} else { // removed in production, hot-reload config
  // tslint:disable-next-line:no-var-requires
  render((
    <AppContainer>
      <App />
    </AppContainer>
  ), root);

  if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextRootContainer = require('./components/App').default;
      render(NextRootContainer, root);
    });
  }
}
//
//
//
// if (process.env.NODE_ENV === 'production') {
//   render(
//     <App />,
//     root
//   );
// } else {
//   module.hot.accept('./components/App', () => {
//     const NextRootContainer = require('./components/App').default;
//     render(NextRootContainer, root);
//   });
// }
