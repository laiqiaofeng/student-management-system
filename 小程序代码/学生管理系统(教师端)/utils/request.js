/**
 * 封装请求方法
 * 
 */
 class Request  {
    constructor (baseUrl) {
        this.baseUrl = baseUrl;
    }

    request (method, url, data) {
        console.log(this.baseUrl + url);
        return new Promise( (res, rej) => {
            wx.request({
                method,
                data,
                url: this.baseUrl + url,
                success: (result) => {
                    res(result);
                },
                fail: (err) => {
                    rej(err);
                }
            })
        })
        
    }
 }

 export {Request};