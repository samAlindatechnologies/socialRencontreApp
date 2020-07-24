import * as React from 'react';
import AppContainer from './Component/Root'
import {Provider} from 'react-redux'
import Store from "./Store/configureStore"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>       
        <AppContainer />
      </Provider>
    )
  }
}
