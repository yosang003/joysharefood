import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import styles from './index.css';


export default (Current) => {
    return class Footer extends Component {
        render(){
            const selectedStyle = {
                backgroundColor: '#ff9900',
                color:'#fff'
            }
            return(
                <div>
                    <Current {...this.props}></Current>
                    <div className={styles.footer}>
                        <div className={styles.content}>
                            <NavLink exact activeClassName='selected' activeStyle={selectedStyle} className={styles.item} to='/'>首页</NavLink>
                            <NavLink activeClassName='selected' activeStyle={selectedStyle} to='/record' className={styles.item}>记录</NavLink>
                            <NavLink activeClassName='selected' activeStyle={selectedStyle} to='/profile' className={styles.item}>我的</NavLink>
                        </div>
                    </div>
                </div>
                
            )
        }
    }
}
