import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from  './index.css';
 
class TabContent extends Component {


    getTabContent(){
        const { panels, activeIndex } = this.props;
        return React.Children.map(panels, (child)=>{
            const order = parseInt(child.props.order, 10);
            return React.cloneElement(child,{
                isActive: activeIndex === order,
                children: child.props.children
            })
        })
    }

    render(){
        return(
            <div className="tabcontent">
                {this.getTabContent()}
            </div>
        )
    }
}

TabContent.propTypes = {
    activeIndex: PropTypes.number,
    panels: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default TabContent
