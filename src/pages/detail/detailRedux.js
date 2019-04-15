import { getDetail } from '../../api/index';

const initialState = {
    init: false,
    foodinfo: {}
}

const UPDATE='DETAIL_UPDATE';

//reducer
export const detail = (state = initialState, action) => {
    switch (action.type){
        case UPDATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//actioncreateor
const detailupdate = (params)=>{
    return {
        type: UPDATE,
        payload: params
    }
}

export const detailInit = (params) => {
    const { id } = params;
    return async (dispatch, getState)=>{
        try{
            const res = await getDetail({
                id: id,
                key: '40b389914a5f58770569671e66a24b7c'
            })
            dispatch(detailupdate({
                init:true,
                foodinfo:res.data.data[0]
            }))
        }catch(err){
            throw err
        }
        
    }
}