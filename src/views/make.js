import React from 'react';
import { View, Text } from 'react-native'
class MakeScreen extends React.Component {
	// static navigationOptions = {
	// 	title: '我的'
	// }
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Make Screen</Text>
			</View>
		)
	}
}

export default MakeScreen
