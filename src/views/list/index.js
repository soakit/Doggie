import React from 'react'
import {
	View,
	Text,
	FlatList,
	ActivityIndicator,
	RefreshControl
} from 'react-native'

import Header from '../../components/header'
import ListItem from './components/listItem'

import api from '../../utils/api'
import Mock from 'mockjs'

// 缓存的数据
const cacheResult = {
	nextPage: 1,
	items: [],
	total: 0
}

class ListScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataSource: [],
			isMoreLoading: false, // 是否正在加载更多数据
			isRefreshing: false // 是否正在刷新
		}
	}

	componentDidMount() {
		this.fetchData(1)
	}

	fetchData = page => {
		if (page !== 0) {
			// 如果page不等于0，说明不是下拉刷新，只设置加载更多就行了
			this.setState({
				isMoreLoading: true
			})
		} else {
			// 如果page等于0，说明是下拉刷新，设置下拉刷新就行了
			this.setState({
				isRefreshing: true
			})
		}

		fetch(
			api.base +
				api.list +
				'?accessToken=b006094b-fd1c-4ccb-9700-3471272352dd&page=' +
				page
		)
			.then(response => {
				const json = response.json()
				return json
			})
			.then(response => {
				// TODO:TEST
				response = {
					total: 100,
					success: true,
					'data|10': [
						{
							video: 'http://video.iblack7.com/video_hcwijdwneqantgb4yqgx.mp4',
							_id: '@ID',
							thumb: '@IMG(1280x720,@color())',
							title: '@cparagraph(1, 3)',
							author: {
								avatar: '@IMG(640x640,@color())',
								nickname: '@name()'
							}
						}
					]
				}
				var data = Mock.mock(response)
				var item = cacheResult.items.slice() // 把缓存中的item数组放到一个新的数组里面
				if (page !== 0) {
					item = item.concat(data.data) // item里面追加新加载的数据。
					cacheResult.nextPage += 1
				} else {
					item = data.data.concat(item)
				}
				cacheResult.items = item // cacheResult里面放着所有加载的数据
				cacheResult.total = data.total
				if (page !== 0) {
					this.setState({
						isMoreLoading: false,
						dataSource: cacheResult.items
					})
				} else {
					this.setState({
						isRefreshing: false,
						dataSource: cacheResult.items
					})
				}
			})
			.catch(error => {
				if (page !== 0) {
					this.setState({
						isMoreLoading: false
					})
				} else {
					this.setState({
						isRefreshing: false
					})
				}
				console.error(error)
			})
	}

	_keyExtractor = item => item._id

	_onItemPress = () => {
		// TODO:
		console.log(1)
	}

	hasMore() {
		return (
			cacheResult.total !== 0 && cacheResult.items.length !== cacheResult.total
		)
	}

	_fetchMoreData = () => {
		if (!this.hasMore() || this.state.isMoreLoading) {
			return
		}
		this.fetchData(cacheResult.nextPage)
	}

	_onRefresh = () => {
		if (this.state.isRefreshing) {
			return
		}
		// TODO: 下拉刷新时传page: 0，同时要有标志
		this.fetchData(0)
	}

	_renderFooter = () => {
		if (!this.hasMore() && cacheResult.items.length) {
			return (
				<View style={styles.loadingMore}>
					<Text style={styles.loadingText}>没有更多了</Text>
				</View>
			)
		}

		return <ActivityIndicator style={styles.loadingMore} />
	}

	render() {
		return (
			<View>
				<Header title="狗狗说" />
				<FlatList
					style={styles.listWrap}
					data={this.state.dataSource}
					keyExtractor={this._keyExtractor} // key, 唯一性字段
					onEndReached={this._fetchMoreData} // 到达底部
					onEndReachedThreshold={20} // 离底部20时
					ListFooterComponent={this._renderFooter} // 底部控件
					showsVerticalScrollIndicator={false} // 不显示竖向滚动条
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={this._onRefresh}
							tintColor="#ff6600"
							title="拼命加载中..."
						/>
					}
					renderItem={({ item }) => (
						<ListItem item={item} onItemPress={this._onItemPress} onE />
					)}
				/>
			</View>
		)
	}
}

const styles = {
	listWrap: {
		marginBottom: 44
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	},
	loadingMore: {
		marginVertical: 20
	},
	loadingText: {
		color: '#777',
		textAlign: 'center'
	}
}

export default ListScreen
