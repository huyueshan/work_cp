

import {Injectable}    from '@angular/core';  
import {Http, Response, Headers }   from '@angular/http'; 
import 'rxjs/add/operator/toPromise';  
  
@Injectable()  
export class HttpInterceptorService {  
  
  constructor(private http: Http) {  
  }  
  /** 
   * 统一发送请求 
   * @param params 
   * @returns {Promise<{success: boolean, msg: string}>|Promise<R>} 
   */  
  public request(params: any): any {  
    // POST请求（参数、返回值类型都是任意类型）  
    if (params['method'] == 'post' || params['method'] == 'POST') {  
      return this.post(params['url'], params['data']);  
    } else { // 其他请求  
      return this.get(params['url'], params['data']);  
    }  
  }  
  
  /** 
   * get请求 
   * @param url 接口地址 
   * @param params 参数 
   * @returns {Promise<R>|Promise<U>} 
   */  
  public get(url: string, params: any): any {  
    return this.http.get(url, {search: params})  
      .toPromise()  
      .then(this.handleSuccess)  
      .catch(res => this.handleError(res));  
  } 
  
  /** 
   * post请求 
   * @param url 接口地址 
   * @param params 参数 
   * @returns {Promise<R>|Promise<U>} 
   */  
  public post(url: string, params: any): any {  

    const myHeaders: Headers = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(url, params, { headers: myHeaders })  
      .toPromise()  
      .then(this.handleSuccess)  
      .catch(res => this.handleError(res));  
  }  
  
  /** 
   * 处理请求成功 
   * @param res 
   * @returns {{data: (string|null|((node:any)=>any) )}}
 */  
  private handleSuccess(res: Response) {  
    let body = res["_body"];  
    console.log("接口返回body：" , res)  
    console.log("接口返回的成功信息：" , res.json())  
    if (body) { // 有数据返回  
      return {  
        data: res.json()|| {}, // 返回内容  
        statusText: res.statusText,  
        status: res.status,  
        success: true  
      }  
    } else { // 无数据返回  
      return {  
        data: res.json()|| {}, // 返回内容  
        statusText: res.statusText,  
        status: res.status,  
        success: true  
      }  
    }  
  }  
  
  /** 
   * 处理请求错误 
   * @param error 
   * @returns {void|Promise<string>|Promise<T>|any} 
   */  
  private handleError(error) {  
    let msg = '请求失败';  
    if (error['status'] == 0) {  
		msg = '请求参数正确';  
    }  
    if (error['status'] == 400) {  
		msg = '请求参数正确';  
    }  
    if (error['status'] == 404) {  
		msg = '请检查路径是否正确';	  
    }  
    if (error['status'] == 500) {  
		msg = '请求的服务器错误';	
    }  
    return {success: false, msg: msg};  
  }  
}  