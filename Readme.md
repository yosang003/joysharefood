## 关于babel的版本，以及配置问题

import Home from './pages/home/index';
import Profile from './pages/profile/index';
import Footer from './components/foot';
import Record from './pages/record/index';
import style from './app.css';

class App extends Component {
    render(){
        return(
            <div className={style.App}>
                <Record/>
                <Footer/>
            </div>
        )
    }
}

## 开发中遇到的跨域问题

## redux-devtools-extension 只有在redux-dev存在的时候才不会报错

## 使用es的修饰器语法时，babel要引入babel-plugin-transform-decorators-legacy，否则编译会出错
Error: The ‘decorators’ plugin requires a ‘decoratorsBeforeExport’ option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the ‘decorators-legacy’ plugin instead of ‘decorators’.
解决办法：

cnpm install babel-plugin-transform-decorators-legacy  --save-dev
cnpm install  @babel/plugin-proposal-decorators --save-dev

cnpm install  @babel/plugin-proposal-class-properties --save-dev

修改babel部分，添加代码

 "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose" : true }]
    ]