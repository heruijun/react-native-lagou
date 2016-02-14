'use strict';

import React, {
	AppRegistry,
	AlertIOS,
	Component,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
	Image,
	Text,
	View
} from 'react-native';

const TYPE_MESSAGE_STATUS1 = 1;
const TYPE_MESSAGE_STATUS2 = 2;
const TYPE_MESSAGE_STATUS3 = 3;

class Message extends Component {
	_itemPress() {
		AlertIOS.alert(
	    '等待添加',
	    null,
	    [
	      {text: 'OK', onPress: (text) => console.log('确定'), type: 'default'}
	    ]
	  )
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<TouchableHighlight underlayColor='#E8E8E8' onPress={this._itemPress.bind(this)}>
		        <View>
		          <View style={{padding:10, flexDirection:'row'}}>
								<Image style={styles.thumb} source={require('image!icon_user_info_name')}/>
								<View style={{flex:2, paddingLeft: 10}}>
			            <Text style={{fontSize:16, marginBottom: 15}}>谁看过我</Text>
									<Text style={{fontSize:16, color: '#999'}}>暂无新消息</Text>
								</View>
		          </View>
							<View style={styles.separator} />
		        </View>
		      </TouchableHighlight>
					<TouchableHighlight underlayColor='#E8E8E8' onPress={this._itemPress.bind(this)}>
						<View>
							<View style={{padding:10, flexDirection:'row'}}>
								<Image style={styles.thumb} source={require('image!icon_user_info_mail')}/>
								<View style={{flex:2, paddingLeft: 10}}>
									<Text style={{fontSize:16, marginBottom: 15}}>简历状态通知</Text>
									<Text style={{fontSize:16, color: '#999'}}>暂无新消息</Text>
								</View>
							</View>
							<View style={styles.separator} />
						</View>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='#E8E8E8' onPress={this._itemPress.bind(this)}>
						<View>
							<View style={{padding:10, flexDirection:'row'}}>
								<Image style={styles.thumb} source={require('image!icon_user_info_work')}/>
								<View style={{flex:2, paddingLeft: 10}}>
									<Text style={{fontSize:16, marginBottom: 15}}>职位邀请通知</Text>
									<Text style={{fontSize:16, color: '#999'}}>暂无新消息</Text>
								</View>
							</View>
							<View style={styles.separator} />
						</View>
					</TouchableHighlight>
				</ScrollView>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	thumb: {
    width: 50,
    height: 50,
  },
	separator: {
		height: 1,
		backgroundColor: '#E8E8E8',
	},
});

export default Message;
