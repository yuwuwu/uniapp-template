<!--
 * @Author: yuyongxing
 * @Date: 2022-06-15 14:45:36
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-06-17 13:57:38
 * @Description: 
-->
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			console.log(process.env)
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
