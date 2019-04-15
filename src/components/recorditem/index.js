import React, { Component } from 'react';
import { Button } from 'antd';
import styles from './index.css';

class Recorditem extends Component {
    render(){
        return(
            <div>
                <div className={styles.header}>
                    <div className={styles.userinfo}>
                        <img className={styles.userimg} src="https://i1.douguo.com/upload/photo/1/c/3/70_u7643715946114908151031.jpg"/>
                        <div className={styles.info}>
                            <span>yosang</span>
                            <span>10分钟前</span>
                        </div>
                        <Button>关注</Button>
                    </div>
                    <span className={styles.share}><svg className={styles.icon} viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M832.567581 639.735449c-62.841403 0-118.635522 30.176732-153.689314 76.824644l-301.942439-151.484068c4.77324-16.755122 7.328724-34.442127 7.328724-52.727038 0-20.032347-3.068333-39.342953-8.755943-57.494023L676.309022 303.93628c34.862412 48.631758 91.853594 80.323268 156.258558 80.323268 106.112022 0 192.131657-86.015882 192.131657-192.127904S938.679603-1.3e-05 832.567581-1.3e-05 640.434673 86.019622 640.434673 192.131644c0 7.339982 0.430292 14.581147 1.225832 21.709735L324.410176 373.011914C289.961795 340.294708 243.392687 320.21733 192.132895 320.21733 86.020873 320.21733-1.3e-05 406.236965-1.3e-05 512.348987s86.020885 192.127904 192.132907 192.127904c53.121055 0 101.211196-21.562135 135.989801-56.415791l314.100691 157.588211c-1.173296 8.57457-1.788714 17.320506-1.788714 26.219046 0 106.112022 86.015882 192.131657 192.127904 192.131657 106.112022 0 192.131657-86.019635 192.131657-192.131657S938.679603 639.735449 832.567581 639.735449L832.567581 639.735449zM832.567581 639.735449" /></svg></span>
                </div>
                <div>

                </div>
                <div className={styles.operation}>
                    <div>点赞</div>
                    <div>评论</div>
                    <div>转发</div>
                </div>
            </div>
        )
    }
}

export default Recorditem;