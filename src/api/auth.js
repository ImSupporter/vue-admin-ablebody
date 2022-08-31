import {apiInstance} from '@/api/index'
function login(userData){
    return apiInstance.post('/login', userData)
}


export{ login }

