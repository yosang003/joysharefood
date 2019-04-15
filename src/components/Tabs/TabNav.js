import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from  './index.css';
 
class TabNav extends Component {


    constructor(props){
        super(props);
    }

    //根据传进来的children渲染
    getTabNav(){
        const { panels, onTabClick, activeIndex } = this.props;
        return React.Children.map(panels,(child)=>{
            const order = parseInt(child.props.order, 10);

            return <li 
                    onClick={() => onTabClick(order)}
                    className={activeIndex===order?styles['nav-active']:styles['nav-item']}
                    key={order}
                    >{child.props.tab}</li>
        })

    }

    render(){
        return(
            <div>
                <ul className={styles.tabnav}>
                {this.getTabNav()}
                </ul>
            </div>
        )
    }
}

TabNav.propTypes = {
        activeIndex: PropTypes.number,
        panels: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        onTabClick: PropTypes.func
    }

export default TabNav