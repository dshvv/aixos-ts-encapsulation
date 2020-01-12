import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios';
axios.defaults.baseURL = "http://dshvv.com:7001";
axios.defaults.headers = {'Access-Control-Allow-Origin': '*'};


abstract class Http {
    get(url: string, data?:any, headers?:any) {
        return this.request('get', url, data, headers);
    }

    post(url: string, data?:any, headers?:any) {
        return this.request('post', url, data, headers);
    }

    put(url: string, data?:any, headers?:any) {
        return this.request('put', url, data, headers);
    }

    delete(url: string, data?:any, headers?:any) {
        return this.request('delete', url, data, headers);
    }

    request(method: Method, url: string, data:any, headers:any): AxiosPromise<any> {
        //公共头设置
        let aixosCtx: AxiosRequestConfig = { method, url };
        data && (aixosCtx.data = data);
        headers && (aixosCtx.headers = headers);
        let result = axios(aixosCtx);
        return result;
    }
}

export default Http;