import React, { Component } from 'react';
import TabNav from './TabNav';
import TabContent from './TabContent';
import styles from  './index.css';
import PropTypes from 'prop-types';


//
class Tabs extends Component {

    

    static defaultProps = {
        onChange: () => {}
    }

    constructor(props){
        super(props)

        this.state = {
            activeIndex:this.props.activeIndex,
            preIndex:this.props.activeIndex
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(index){
        if(index == this.activeIndex){
            return;
        }else{
            this.setState({
                activeIndex: index,
                preIndex: this.activeIndex
            })
        }
        this.props.onChange()
    }

    //通过Tabs生成TabNav和TabContent组件
    renderTabNav(){
        const { children } = this.props;
        return <TabNav
                activeIndex={this.state.activeIndex}
                panels={children}
                onTabClick={this.handleClick}
                ></TabNav>
    }

    renderTabContent(){
        const { children } = this.props;
        return <TabContent
                activeIndex={this.state.activeIndex}
                panels={children}
                ></TabContent>
    }

    render(){
        return (
            <div className={styles.tabs}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        )
    }
}

Tabs.propTypes = {
    activeIndex: PropTypes.number,
    onChange: PropTypes.func
}

export default Tabs