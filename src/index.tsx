import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import App from './app'
import './index.scss'
interface IAppProps {}
interface IAppState {}

class Index extends PureComponent < IAppProps, IAppState > {
    public render() {
        return (
            <div>
       	<App/>
      </div>
        )
    }
}

render(<Index />, document.getElementById('rootDom'))