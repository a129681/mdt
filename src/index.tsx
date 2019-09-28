import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import './index.scss'
interface IAppProps {}
interface IAppState {}
//@ts-ignore
var componentPath = COMPONENTPATH
//@ts-ignore
var Wdgit = require("Root/"+componentPath)

class Index extends PureComponent < IAppProps, IAppState > {
    public render() {
        return (
            <div>
              <Wdgit/>
      </div>
        )
    }
}

render(<Index />, document.getElementById('rootDom'))