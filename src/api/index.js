import HttpUtils from './http';

//接口
export const getEntry = (params) =>  { return HttpUtils.get('/api/category',params)}
export const getList = (params) =>  { return HttpUtils.get('/api/index',params)}
export const getDetail = (params) =>  { return HttpUtils.get('/api/queryid',params)}


