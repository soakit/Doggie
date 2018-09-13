/**
 * Created by Yooz on 2017/3/31.
 */

'use strict'

module.exports = {
	header: {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	},

	base:'http://10.17.80.59:3000',
	list: '/api/creations',

	//-------------user-------------//
	login: '/api/u/verify', // 验证(登录)
	getVerityCode: '/api/u/signup', // 登录(获取验证码)
	signature: '/api/signature', // 生成签名
	update: '/api/u/update', // 用户资料更新
	video: '/api/u/video', // 上传视频信息到服务器

	cloudinary: {
		cloud_name: 'deq99znbe',
		api_key: '132214329484465',
		api_secret: 'Lz3pLZyJ0ahd-C-5s7fbob8NGS0',
		base: 'http://res.cloudinary.com/deq99znbe',
		image: 'https://api.cloudinary.com/v1_1/deq99znbe/image/upload',
		video: 'https://api.cloudinary.com/v1_1/deq99znbe/video/upload',
		audio: 'https://api.cloudinary.com/v1_1/deq99znbe/audio/upload'
	},
	qiniu: {
		upload: 'http://upload.qiniu.com/',
    	picOrigin: 'http://orbgcblbo.bkt.clouddn.com'
	}
}
