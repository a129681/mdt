import React, { Component } from 'react'
import './style.scss'
export interface IProps {
  /** change 回调 */
  onChange?: Function
  /** 下拉选框内容 */
  overlay?: React.ReactNode
  /** 显示下拉框 */
  visible?: boolean
  /** 是否显示尖角 */
  arrow?: boolean
}
export interface IState {
  collapse: boolean
}
export default class Select extends Component<IProps> {
  state = {
    collapse: false,
    visible: false
  }

  static defaultProps = {
    arrow: false
  }

  _container: any
  _panelRef: any
  closePanel = () => {
    this.setState({
      collapse: false
    })
  }

  openPanel = () => {
    this.setState({
      collapse: true
    })
  }

  togglePanel = () => {
    const { collapse } = this.state
    const { onChange } = this.props
    this.setState(
      {
        collapse: !collapse
      },
      () => {
        onChange && onChange(this.state.collapse)
      }
    )
  }

  clickHandler = (event:any) => {
    const { onChange } = this.props
    if (this._container.contains(event.target)) {
      return
    }
    this.closePanel()
    onChange && onChange(false)
  }

  componentDidUpdate (){
    this.panelAlignCenter()
  }

  componentDidMount () {
    document.addEventListener(
      'click',
      this.clickHandler
    )
  }

  componentWillUnmount () {
    document.removeEventListener(
      'click',
      this.clickHandler
    )
  }

  panelAlignCenter = () => {
    const panelDom = this._panelRef
    const containerDom = this._container
    if (panelDom) {
      const panelWidth = panelDom.offsetWidth
      const containerWidth = containerDom.offsetWidth
      const leftValue = containerWidth - panelWidth
      panelDom.style.transform = 'translateX(' + (leftValue/2)+'px)'
      // panelDom.style.background='red'
      console.log(leftValue)
    }
  }

  renderPanel = () => {
    const { overlay, arrow } = this.props
    return (
      <div
        className={`mdt-dropdown-panel ${
          arrow ? 'mdt-dropdown-arrow' : ''
        }`}
        ref={(ref)=>{this._panelRef = ref}}
      >
        {overlay}
      </div>
    )
  }
  render () {
    const { collapse } = this.state
    const { visible } = this.props
    const show = collapse || visible
    return (
      <div
        className="mdt-dropdown"
        ref={ref => (this._container = ref)}
      >
        <div
          className="mdt-dropdown-target"
          onClick={this.togglePanel}
        >
          {this.props.children}
        </div>
        {show ? this.renderPanel() : null}
      </div>
    )
  }
}
