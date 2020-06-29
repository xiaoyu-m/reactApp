## React 

### #前期知识准备：

```
1.JavaScript
2.HTML+CSS
3.构建工具Webpack
4.安装node
5.npm或cnpm命令
6.官方文档 https://react.docschina.org/docs/getting-started.html
```

### 一 创建React项目

```
1.npm install -g create-react-app //安装配置react环境的脚手架
2.create-react-app react-app // 使用脚手架安装 名为react-app的react项目
2.cd react-app // 在cmd切换到 react-app项目文件夹
3.npm start // 运行项目
```

### 二 环境介绍

```
1.node_modules：非常大
2.public：入口文件
3.src：源码文件
```

### 三 愉快的开始

```
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>你好呀</h1>
      <p>今天又是充满希望的一天...</p>
    </div>
  );
}
export default App;

注： react中使用{}包裹变量以插入数据，vue是以{{}}包裹数据
```

### 四 React基础知识

#### 1. JSX语法介绍		 

```
1.JSX语法：javascript+XML语法(html)
2.解读jsx语法：遇到<>按html解析、{}按javascript解析
```

#### 2.元素渲染

#### 3.组件

```
1.组件后缀可以为js或者jsx(有jsx语法提示)
2.新建组件
import React, { Component } from "react";
class Hello extends Component {
  render() 
    return (
    <div>组件</div>
    );
  }
}
export default Hello; // 导出组件

3.引入组件并使用
import Hello form './Hello';
<Hello />

#一个react项目中，使用上千万个组件构成
```

#### 4.props属性

定义：传入子组件的变量或方法

```
props例子： 
父组件发送    <Hello username='xiaoyu' signup={this.signup}>
Hello组件接收 let {username} = this.props
```

#### 5.state属性 

```
1.组件中的状态：state
2.以前是直接操作页面的元素变化，直接修改和操作DOM
3.React可以直接修改state进行元素的变化
```

#### 6.生命周期函数

随着我们对React的理解和使用越来越多，生命周期的参考价值越来越高

![](C:\Users\16970\Desktop\16775500-102dbe772034e8fa.png)

```
1.挂载卸载过程
  constructor()
  componentWillMount() 组件渲染之前执行
  render()
  componentDidMount() 组件渲染之后执行
  componentWillUnmount () 卸载组件前执行
2.更新过程
  componentWillReceiveProps (nextProps)
  shouldComponentUpdate(nextProps,nextState) 返回true和false，tue代表运行改变，false代表不允许改变
  componentWillUpdate (nextProps,nextState) 组件渲染之前执行
  componentDidUpdate(prevProps,prevState) 组件渲染之后执行
  render()
3.React新增的生命周期
  getDerivedStateFromProps(nextProps, prevState) props发生改变执行
  getSnapshotBeforeUpdate(prevProps, prevState)
参考链接 https://www.jianshu.com/p/b331d0e4b398
```

#### 7.setState

```
1.setState会引起视图的重绘
2.在可控情况下是异步，在非可控的情况下是同步
  1)使用Promise将setState变为同步执行
  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  };
  addNumber = async () => {
    await this.setStateAsync({ number: this.state.number + 1 }); 
    console.log(this.state.number);
  };
```

#### 8.条件渲染 

根据判断不同状态(state)来渲染不同的页面内容，比如登录切换、权限显示

使用需求：对视图条件进行切换；做缺省值

```
1.&&运算符  true&&<component/> 
2.if \ else if \ else
3.三目运算符 a?<b/>:<c/>
```

#### 9.列表渲染

```
列表渲染中只有发生变化的数据才会进行重绘，使用key来区分是否发生变化，可以减少资源消耗
```

#### 10.表单 推荐学习formik

受控组件和非受控组件

```
1.受控组件(推荐)：通过更改state获取表单数据
  优点：值被state所管理，不会再其他地方被操作改变
  缺点：每个表单都要写一个处理函数，并通过组件state赋值
2.非受控组件：直接操作dom获取表单数据
  e.prenventDefault() 阻止表单默认提交事件
  e.target.value获取表单的值
```

#### 11.refs

```
1.管理焦点：文本选择或媒体播放
2.触发强制动画
3.继承第三方 DOM库
```

#### 12.状态提升

```

```

#### 13.组合&继承

```
在子组件中添加props children以使用组合组件
子组件Compose
<div className="child">
  <h1>我是</h1>
  {this.props.children}
</div>

组合组件：
<Compose>
  组合组件
</Compose>

```

#### 14.React哲学

### 五  react网络请求

#### 1.fetch

#### 2.axios

### 六  react-router

#### 1.安装 npm i react-router-dom --save

#### 2.作用 react是单页面应用(SPA)，切换不同的显示视图

```
HashRotuer 锚点链接(#) 
BrowwserRotuer h5新特性/history.push 如果上线后，需要后台做重定向处理404bug
```



### 七 

### 八 

### 九 

### 十 

### 十一

### 十二 

### 十三

### 十四

### 十五 

###  十六 虚拟DOM和DOM diff算法

######  基本原理：

```
1.初始化显示界面： 
  创建虚拟DOM树 --> 更新真实DOM树 --> 绘制界面显示
2.更新页面
  setState更新状态 --> 重新构建虚拟DOM树 --> 新/旧树差异变化 --> 更新差异对应真实DOM --> 重新绘制界面显示
```

### 十七 评论练习

##### 组件：Comment-add  元素：添加单条数据

##### 组件：Comment-list  元素：查看所有数据 遍历 Comment-item组件

##### 组件：Comment-item 元素：单条留言数据，可删除

npm i --save prop-types

```
props 使用
1.引用props  import PropTypes from 'prop-types';
2.使用props  propTypes = {
	propsName: PropTypes.Object
}
```

### 十八 axios封装

- axios 封装了XmlHttpRequest对象
- promise风格 
- 可以用在浏览器和nNODEJS端
- 也可使用Fetch 不支持老版浏览器，支持ie8+

```

```



### 注： 

```
1.如果存在标签结构，并且标签结构要换行，要用()包起来
2.静态属性和动态属性 分开两边放置 
3.判断渲染节点
  1）&&运算符  true&&<component/> 
  2) if \ else if \ else
  3) 三目运算符 a?<b/>:<c/>
4.通过import()进行代码分割
  import('./math').then(math=>{console.log(addValue(1,2))}))
```

