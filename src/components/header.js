import React from 'react'
import { View, Text } from 'react-native'

const styles = {
	header: {
		height: 48,
		backgroundColor: '#ee735c',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerTitle: {
		fontSize: 16,
		color: '#fff',
		fontWeight: 'bold'
	}
}

const Header = props => (
	<View style={styles.header}>
		<Text style={styles.headerTitle}>{props.title}</Text>
	</View>
)

export default Header
