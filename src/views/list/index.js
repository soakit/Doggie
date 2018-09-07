import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import Header from '../../components/header'
import ListItem from './components/listItem'

class ListScreen extends React.Component {
	render() {
		return (
			<View>
				<Header title="狗狗说" />
				<FlatList style={styles.listWrap}
					data={[
						{ key: 'Devin' },
						{ key: 'Jackson' },
						{ key: 'James' },
						{ key: 'Joel' },
						{ key: 'John' },
						{ key: 'Jillian' },
						{ key: 'Jimmy' },
						{ key: 'Julie' },
						{ key: 'Devin' },
						{ key: 'Jackson' },
						{ key: 'James' },
						{ key: 'Joel' },
						{ key: 'John' },
						{ key: 'Jillian' },
						{ key: 'Jimmy' },
						{ key: 'Julie' },
						{ key: 'Devin' },
						{ key: 'Jackson' },
						{ key: 'James' },
						{ key: 'Joel' },
						{ key: 'John' },
						{ key: 'Jillian' },
						{ key: 'Jimmy' },
						{ key: 'Julie' },
						{ key: 'Devin' },
						{ key: 'Jackson' },
						{ key: 'James' },
						{ key: 'Joel' },
						{ key: 'John' },
						{ key: 'Jillian' },
						{ key: 'Jimmy' },
						{ key: 'Julie' }
					]}
					renderItem={({ item }) => 
						<ListItem />
					}
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
	}
}

export default ListScreen
