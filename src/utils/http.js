/*
 * @Author: yuyongxing
 * @Date: 2022-06-16 11:31:19
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-06-21 13:56:08
 * @Description: 
 */

const baseUrl = process.env.VUE_APP_BASE_API

const http = (url = '',type = 'get', data = {},  isShowLoading) => {
	return new Promise((resolve, reject) => {
		if (isShowLoading) {
			uni.showLoading({
				title: "请稍后",
				mask: true
			})
		}
		let api = options => {
			uni.request(options)
		}
		let token = uni.getStorageSync('token')
		let options = {
			method: type,
			url: baseUrl+url,
			data: data,
			header: { 
                'content-type': 'application/json;charset=UTF-8', 
                "responseType": 'json', 
                'Authorization': token 
            },
			dataType: 'json',
			success: res => {
				console.log(data, "入参")
				console.log(url, "地址")
				console.log(res, "出参")
				console.log(" ")
                if(res.statusCode === 200){

                }
				switch (res.data.code) {
					case 200:
						if (isShowLoading) {
							let reqTimer = setTimeout(function () {
								uni.hideLoading();
								clearTimeout(reqTimer)
							}, 200);
						}
						break
					
					default:
						uni.hideLoading();
							uni.showToast({
								title: String((res.data.msg || res.data.error) || "网络开小差了"),
								icon: 'none',
								duration: 3000
							})
						
				}
				resolve(res.data);
			},
			fail: err => {
				console.log(err, "err")
				uni.hideLoading();
                uni.showToast({
                    title: err.errMsg|| "网络开小差了",
                    icon: 'error',
                    duration: 3000
                })
				reject(err)
			}
		}
		if (url == "/upload") {
			api = options => {
				options.filePath = options.data.filePath
				options.name = 'file',
					uni.uploadFile(options)
			}
		}
		api(options)
	});
}
export default http
