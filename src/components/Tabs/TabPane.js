import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import styles from  './index.css';

class TabPane extends Component {
    //这里为什么要设置成静态的？
    

    render(){
        const { children,isActive } = this.props;
        return (
            <div 
            className={isActive?styles['pane-active'] :styles['pane-item']}
            >
                {children}
            </div>
        )
    }
} 

TabPane.propTypes = {
    isActive: PropTypes.bool,
    tab: PropTypes.string,
    order: PropTypes.string
}

export default TabPane