import React, { Component } from 'react';
import WithTabBar from '../../components/foot';
import styles from './index.css';

@WithTabBar
export default class Profile extends Component {
    render(){
        return(
            <div>
                我的
            </div>
        )
    }
}