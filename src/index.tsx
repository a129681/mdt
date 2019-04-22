import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import App from './app'
interface IAppProps {}
interface IAppState {}

class Index extends PureComponent < IAppProps, IAppState > {
    public render(): JSX.Element {
        return (
            <div>
       	<App/>
      </div>
        )
    }
}

render(<Index />, document.getElementById('reactDom'))