import { getEntry } from '../../api/index';



const initialState = {
    init: false,
    banner: [],
    entry: []
}

const UPDATE = 'HOME_UPDATE'

//reducer
export const home = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

const homeupdate = (params) => {
    return {
        type: UPDATE,
        payload: params
    }
}

//异步的actionCreator
export const homeInit = () => {
    //使用redux-thunk允许action是一个函数
    return async (dispatch, getState) => {
        //先判断是否已经初始化
        const { init } = getState().home;
        if (init) return
        try {
            const res = await getEntry({key:'40b389914a5f58770569671e66a24b7c', parentid:10001})
            console.log(res.data[0].list)
            dispatch(homeupdate({
                entry: res.data[0].list,
                init: true
            }))
        }catch (err){
            console.log(err);
        }
    }
}