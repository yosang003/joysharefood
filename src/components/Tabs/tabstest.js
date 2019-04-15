import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs from './index';
import TabPane from './tabpane';

ReactDOM.render(
    <Tabs activeIndex={0}>
        <TabPane tab="tab1" order="0">显示tab1</TabPane>
        <TabPane tab="tab2" order="1">显示tab2</TabPane>
        <TabPane tab="tab3" order="2">显示tab3</TabPane>
    </Tabs>
    ,document.getElementById('root'))

