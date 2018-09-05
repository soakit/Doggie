import React from 'react';
import { View, Text } from 'react-native'

class ListScreen extends React.Component {
	// static navigationOptions = ({ navigation, navigationOptions }) => {
	// 	return {
	// 		title: '列表',
	// 		headerStyle: {
	// 			backgroundColor: navigationOptions.headerTintColor
	// 		},
	// 		headerTintColor: navigationOptions.headerStyle.backgroundColor
	// 	}
	// }
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>List Screen</Text>
			</View>
		)
	}
}

export default ListScreen
