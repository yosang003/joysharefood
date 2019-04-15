import { getList } from '../../api/index';

const initialState = {
    init:false,
    foodlist:[]
}

const UPDATE = 'List_UPDATE';
//reducer
export const list = (state = initialState, action) => {
    switch (action.type){
        case UPDATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }

}

//diapatch action以后，怎么找到对应的reducer呢，直接根据type吗
const listUpdate = (params) => {
    return {
        type: UPDATE,
        payload: params
    }
}

//actionCreator
export const listInit = (params) => {
    return async (dispatch, getState) => {
        const { cid } = params;
        try{
            const res = await getList({key:'40b389914a5f58770569671e66a24b7c',cid});
            dispatch(listUpdate({
                init: true,
                foodlist: res.data.data 
            }));
        }catch(err){
            console.log(err)
        }
        
    }
}