import React, {Component} from 'react';
import { Rate } from 'antd';
import { Input, Carousel, Skeleton} from 'antd';
import styles from './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { homeInit } from './homeRedux';
import { Link } from 'react-router-dom';
import WithTabBar from '../../components/foot';

const Search = Input.Search;
const mapStateToProps = (state) => {
    return {
        init: state.home.init,
        entry: state.home.entry
    }
}

//这里的homeInit是一个actionCreator,默认返回的应该是一个对象，什么使它可以返回一个函数了
const mapActionToProps = (dispath) => {
    return {
        homeInit: bindActionCreators(homeInit, dispath)
    }
}

@connect(
    mapStateToProps,
    mapActionToProps
)
@WithTabBar
export default class Home extends Component {
    componentDidMount(){
        this.props.homeInit();
    }
    onClickClassifly(value){
        const { id } = value;
        const { history, location } = this.props;
        history.push({
            pathname: '/list',
            search:`?cid=${id}`,
        })
    }
    render(){
        const { init, entry } = this.props;
        return(
            <div className={styles.root}>
                <Search
                    placeholder="搜索美食"
                    onSearch={value => console.log(value)}
                    enterButton="搜索"
                />
                <div>
                    <h2 className={styles['home-title']}>精品推荐</h2>
                    <Carousel autoplay>
                        <div>
                            <img className={styles.siderimg} src="https://cp1.douguo.com/upload/caiku/c/4/a/650x366_c4a031fbad6e53690cfd753b020994ba.jpg"></img>
                        </div>
                        <div>
                            <img className={styles.siderimg} src="https://cp1.douguo.com/upload/caiku/9/6/5/650x366_96e18b047503ea539bd868c9f9440005.jpg"></img>
                        </div>
                        <div>
                            <img className={styles.siderimg} src="https://cp1.douguo.com/upload/caiku/8/9/8/650x366_89c81c38a29c4aa9f6e9020ad1fa7988.jpg"></img>
                        </div>
                        <div> 
                            <img className={styles.siderimg} src="https://cp1.douguo.com/upload/caiku/e/f/7/650x366_efc15af157be63b71cfe5bfb0f2da447.jpg"></img>
                        </div>
                    </Carousel>
                </div>
                {
                    init? (<div>
                                <h2 className={styles['home-title']}>分类</h2>
                                <div className={styles.classify}>
                                    {
                                        entry.map((value,index) => (
                                            <div
                                                onClick = { () => this.onClickClassifly(value) }
                                                className={styles['classify-item']}
                                                key={index}
                                            >
                                                    <img className={styles.classifyimg} src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"></img>
                                                    <span className={styles.title}>{value.name}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ):<Skeleton />
                }
            </div>
        )
    }
}

// export default connect(mapStateToProps,mapActionToProps)(Home);