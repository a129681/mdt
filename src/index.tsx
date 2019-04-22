import * as React from 'react';
import { Component } from 'React';
import { render } from 'React-dom';

class HelloMessage extends Component {
  render() {
    return <div> Hello </div>;
  }
}

var HelloDom = document.getElementById('rootDom');

render(<HelloMessage/>,HelloDom);