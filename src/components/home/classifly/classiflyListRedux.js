const initialState = {
    list : []
}

function getClassifly(){
    return (dispatch,getState) => {
        fetch(url,params)
        .then(
            result => {
                dispatch({
                    type: 'GET-CLASSIFLY-SUCCESS',
                    payload: result
                })
            }
        )
        .catch(err => {
            dispatch({
                type: 'GET-CLASSIFLY-ERROR',
                error: err
            })
        })
    }
}
