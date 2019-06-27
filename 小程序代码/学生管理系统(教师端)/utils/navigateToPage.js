/**
 * 封装导航方法
 * 
 */
//基础url

class NavigateToPage {
     constructor (baseUrl) {
        this.baseUrl = baseUrl;
     }

     gotoPage (url) {
        return new Promise( (res, rej) => {
            wx.navigateTo({
                url: this.baseUrl + url,
                success: (result) => {
                    res(result);
                },
                fail: (err) => {
                    rej(err);
                }
            })
        });
         
     }
 }


 export {NavigateToPage};