import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel,faUser,faKey} from '@fortawesome/free-solid-svg-icons'
import Bg from './Bg';

library.add(faStroopwafel,faUser,faKey);


class App extends Component {
  render() {
    return (
      <Bg/>
    )
  }
}

export default App