import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Input,Skeleton } from 'antd';
import styles from './index.css';
import { listInit } from './listRedux';

const Search = Input.Search;

const mapStateToProps = (state) => {
    // const { init } = state.list;
    //console.log(state.list.init)
    return { 
        init: state.list.init,
        foodlist: state.list.foodlist
    }
}

const mapActionToProps = (dispatch) => {
    return {
        listInit: bindActionCreators(listInit, dispatch)
    }
}

@connect(
    mapStateToProps,
    mapActionToProps
)
export default class List extends Component {
    componentDidMount(){
        //需要从路由中获取数据
        const { search } = this.props.location;
        const params = queryString.parse(search);
        this.props.listInit(params);
    }

    handleClick(id){
        const { history, location } = this.props;
        history.push({
            pathname: '/detail',
            search:`?id=${id}`,
        })
    }

    render(){
        const { init, foodlist } = this.props;
        return (
            <div className={styles.root}>
                <Search
                        placeholder="搜索美食"
                        onSearch={value => console.log(value)}
                        enterButton="搜索"
                        className={styles.search}
                />
                {
                    init?(<div className={styles.wrap}>
                            {
                                foodlist.map((value,index) => {
                                    return (
                                            <div className={styles.item} key={index} onClick={()=>this.handleClick(value.id)}>
                                                <img src={value.albums} className={styles.itemimg}></img>
                                                <div className={styles.iteminfo}>
                                                    <span>{value.title}</span>
                                                    <span>上传者：yosang</span>
                                                    <span>评分：10.0</span>
                                                </div>
                                            </div>
                                            )
                                } )
                            }
                           
                        </div>):<Skeleton></Skeleton>
                }
                
            </div>
            
        )
    }
}
