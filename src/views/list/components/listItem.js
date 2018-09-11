import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Dimensions from 'Dimensions'
const { width } = Dimensions.get('window')

const styles = {
	item: {
		width,
		marginBottom: 10
	},
	title: {
		padding: 10,
		fontSize: 18,
		color: '#333'
	},
	thumb: {
		position: 'relative',
		width,
		height: width * 0.56
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		background: '#eee'
	},
	handleBox: {
		padding: 10,
		flexDirection: 'row',
		width: width / 2 - 0.5,
		justifyContent: 'center',
		background: '#fff'
	},
	playWrap: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	play: {
		backgroundColor: 'transparent',
		borderColor: '#fff',
		borderRadius: 23,
		color: '#ed7b66',
		fontSize: 40
	},
	handleText: {
		paddingLeft: 12,
		fontSize: 18,
		color: '#333'
	},
	icon: {
		fontSize: 22,
		color: '#333'
	}
}

const Item = props => {
	const { item } = props
	return (
		<TouchableHighlight>
			<View style={styles.item}>
				<Text style={styles.title}>{item.title}</Text>
				<View>
					<Image style={styles.thumb} source={{ uri: item.thumb }} />
					<View style={styles.playWrap}>
						<Icon style={styles.play} name="ios-play-circle" />
					</View>
				</View>
				<View style={styles.footer}>
					<View style={styles.handleBox}>
						<Icon name="ios-heart" style={styles.icon} />
						<Text style={styles.handleText}>喜欢</Text>
					</View>
					<View style={styles.handleBox}>
						<Icon name="ios-chatboxes" style={styles.icon} />
						<Text style={styles.handleText}>评论</Text>
					</View>
				</View>
			</View>
		</TouchableHighlight>
	)
}

export default Item
