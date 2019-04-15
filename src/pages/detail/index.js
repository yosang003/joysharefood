import React,{ Component } from 'react';
import { Tabs, TabPane } from '../../components/Tabs/index';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { detailInit } from './detailRedux';
import { bindActionCreators } from 'redux';
import { Skeleton } from 'antd';
import styles from './index.css';

const mapStateToProps = (state) => {
    const { init, foodinfo } = state.detail;
    return {
        init,
        foodinfo
    }
}

const mapActionToProps = (dispatch) => {
    return {
        detailInit: bindActionCreators(detailInit,dispatch)
    }
}

@connect(mapStateToProps, mapActionToProps)
export default class Detail extends Component {

    componentDidMount(){
        const { search, init } = this.props.location;
        const params = queryString.parse(search);
        console.log(params)
        if(init){
            return;
        }else{
            this.props.detailInit(params)
        }
        console.log(this.props.foodinfo)
    }

    tabCallback (){

    }
    render(){
        
        const { init,foodinfo } = this.props;
        let inburlist
        
        if(init){
         
            const ingredients = foodinfo.ingredients.split(';');
            const burden = foodinfo.burden.split(';');
            const ingreburden = ingredients.concat(burden);
            inburlist = ingreburden.map((value)=>{
                return value.split(',')
            })
        }

        
        return (
            <div>
                {
                    init?(
                        <div>
                            <img className={styles.albums} src={foodinfo.albums}></img>
                            <div>
                                <div className={styles.infowrap}>
                                    <span className={styles.title}>{foodinfo.title}</span>
                                    <div className={styles.action}>
                                        <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M736.4465 150.3898c49.3548 0 95.7624 19.1918 130.6491 54.0396 34.8877 34.7914 54.0795 81.0414 54.0795 130.2395 0 49.2175-19.1918 95.4675-54.5874 130.7853L512.1659 832.1382 157.2526 464.9277c-34.8672-34.7904-54.059-81.0414-54.059-130.2589 0-49.1981 19.1918-95.4481 54.059-130.2579 34.8877-34.8293 81.2954-54.0211 130.6501-54.0211 48.7485 0 94.59 18.7218 129.321 52.7319l64.1331 77.6827c7.595 9.1945 18.8989 14.5244 30.8275 14.5244l0 0c11.9286 0 23.252-5.3299 30.847-14.5244l64.0942-77.6827C641.8575 169.1126 687.7174 150.3898 736.4465 150.3898M736.4465 110.4077c-57.4945 0-114.9911 21.9044-158.8787 65.7142l-65.3834 79.2259-65.4029-79.2259c-43.8682-43.8098-101.3832-65.7142-158.8787-65.7142-57.516 0-115.0116 21.9044-158.8992 65.7142-87.7373 87.5612-87.7373 229.5542 0 317.1154l359.1475 371.6035c6.9315 7.2428 14.7005 9.7423 24.0333 9.7423 9.1945 0 17.6097-3.0853 23.7015-9.4505l359.4609-371.8953c87.7558-87.5612 87.7558-229.5542 0-317.1154C851.4775 132.3121 793.9615 110.4077 736.4465 110.4077L736.4465 110.4077z" /></svg>
                                        <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M421.546667 473.173333a149.546667 149.546667 0 0 1 0 77.674667l225.984 169.472a149.333333 149.333333 0 1 1-45.098667 72.853333l-225.962667-169.493333a149.333333 149.333333 0 1 1 0-223.36l225.962667-169.472a149.333333 149.333333 0 1 1 45.098667 72.853333l-225.962667 169.450667zM746.666667 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m0 640a64 64 0 1 0 0-128 64 64 0 0 0 0 128zM277.333333 576a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"  /></svg>
                                        <svg className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M899.818723 555.092447 382.719588 555.092447c-23.796986 0-43.091424-19.294438-43.091424-43.091424 0-23.799032 19.294438-43.091424 43.091424-43.091424l517.099135 0c23.799032 0 43.091424 19.292392 43.091424 43.091424C942.910147 535.798009 923.617755 555.092447 899.818723 555.092447zM185.058786 512.001023l335.979054 335.979054c16.827247 16.827247 16.827247 44.110637 0 60.939931-16.827247 16.829294-44.110637 16.829294-60.939931 0L93.700055 542.522154c-8.428973-8.426927-12.623505-19.47761-12.611226-30.524201-0.013303-11.044544 4.182252-22.095227 12.611226-30.522154L460.096886 115.079992c16.829294-16.829294 44.112684-16.829294 60.939931 0 16.827247 16.827247 16.827247 44.112684 0 60.939931L185.058786 512.001023z" /></svg>
                                    </div>
                                </div>
                                <div className={styles.other}>
                                    <span>10.0分</span>
                                    <span>30分钟</span>
                                    <span>yosang的美食作品</span>
                                </div>
                                <Tabs activeIndex={0} onChange={() => this.tabCallback() }>
                                    <TabPane tab="食材调料" order="0">
                                    {
                                       inburlist.map((value,index)=>{
                                            return(
                                                <div className={styles.inburlist} key={index}>
                                                    <span className={styles.inburitem}>{value[0]}</span>
                                                    <span className={styles.inburitem}>{value[1]}</span>
                                                </div>
                                            )
                                       }) 
                                    }
                                        
                                    </TabPane>
                                    <TabPane tab="做法" order="1">
                                        {
                                            
                                            foodinfo.steps.map((value,index)=>{
                                                return(
                                                    <div key={index} className={styles.stepitem}>
                                                        <div>步骤{index+1}:</div>
                                                        <div>
                                                            <img src={value.img}></img>
                                                        </div>
                                                        <span>{value.step}</span>
                                                    </div>
                                                ) 
                                            })
                                        }
                                    
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    ):<Skeleton></Skeleton>
                }
                
            </div>
        )
    }
}