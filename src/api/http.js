import axios from 'axios';

const instance = axios.create({
})

export default class HttpUtils  {
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.get(url,{ params }).then(({data}) => {
                if(data.resultcode == 200){
                    const { result } = data
                    resolve({data: result})
                }else{
                    const { reason } = data
                    reject({err: reason})
                }
            }).catch((err) => {
                reject({err: JSON.stringify(err)})
            })
        })  
    }

    static post(url, params){
        return new Promise((resolve, reject) => {
            instance.post(url,{ data: params }).then(({data}) => {
                if(data.resultcode == 200){
                    const { result } = data
                    resolve({data: result})
                }else{
                    const { reason } = data
                    reject({err: reason})
                }
            }).catch((err) => {
                reject({err: JSON.stringify(err)})
            })
        })
    }
}