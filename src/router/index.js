import React from 'react'
import { Text } from 'react-native'
// The StackNavigator function name is deprecated, please use createStackNavigator instead
import { createBottomTabNavigator } from 'react-navigation'
// https://github.com/oblador/react-native-vector-icons#installation
// ionicons.com选图标
import Ionicons from 'react-native-vector-icons/Ionicons'

import List from '../views/list'
import Make from '../views/make'
import More from '../views/more'

const data = {
	List: { icon: 'videocam', label: '狗狗' },
	Make: { icon: 'recording', label: '配音' },
	More: { icon: 'more', label: '更多' }
}

const StacksInTabs = createBottomTabNavigator(
	{
		List: {
			screen: List,
			path: '/list'
		},
		Make: {
			screen: Make,
			path: '/make'
		},
		More: {
			screen: More,
			path: '/more'
		}
	},
	{
		tabBarOptions: {
			showLabel: true
		},
		// 初始路由
		initialRouteName: 'List',
		// 路由的其他配置(meta)
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state

				return (
					<Ionicons
						name={`ios-${data[routeName].icon}`}
						size={25}
						color={tintColor}
					/>
				)
			},
			tabBarLabel: ({ tintColor }) => {
				const { routeName } = navigation.state
				return (
					<Text style={{ textAlign: 'center', color: tintColor, marginBottom: 6 }}>
						{data[routeName].label}
					</Text>
				)
			},
			headerStyle: {
				backgroundColor: '#f4511e'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
				textAlign: 'center'
			}
		}),
		tabBarPosition: 'bottom',
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		},
		animationEnabled: false,
		swipeEnabled: false
	}
)

export default StacksInTabs
