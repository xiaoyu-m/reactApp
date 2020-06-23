import React from "react";
import ReactDOM from "react-dom";
import App from "@/pages/app";
ReactDOM.render(<App />, document.getElementById("app"));

/**
 * 1. 第一次初始化渲染显示ReactDom.render()
 *    constructor()  创建对象 初始化state
 *    componentWillMount() 将要插入回调
 *    render() 插入虚拟DOM回调
 *    componentDidMount() 已经插入回调
 * 2. 每次更新state： this.setState()
 *    componentWillUpdate() 将要更新回调
 *    render() 更新虚拟DOM回调
 *    componentDidUpdate() 已经更新回调
 * 3. 移除组件ReactDom.unmountComponentAtNode(containerDom)
 *    componentWillunmount() 将要移除回调
 *
 */
