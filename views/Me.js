'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	TouchableHighlight,
	ScrollView,
	Navigator,
	Image,
	Text,
	View
} from 'react-native';

import Resume from './me/Resume';

class Me extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

	_pressButton(title: String) {
		const { navigator } = this.props;
		//或者写成 const navigator = this.props.navigator;
		//为什么这里可以取得 props.navigator?请看上文:
		//<Component {...route.params} navigator={navigator} />
		//这里传递了navigator作为props
		if(navigator) {
			navigator.push({
				name: 'Resume',
				component: Resume,
				// 传递参数到跳转的界面
				params: {
          title: title
        }
			})
		}
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={{height:150}}>
					<Image source={require('../images/user_photo_bg.png')} style={styles.backgroundImage}>
						<Image source={require('../images/user.jpeg')} style={styles.user}/>
						<Text style={{fontSize:18, marginTop: 6, color: '#FFF'}}>Kimi He</Text>
					</Image>
				</View>
				<TouchableHighlight underlayColor='#E8E8E8' onPress={this._pressButton.bind(this, '我的简历')}>
					<View>
						<View style={{padding:10, flexDirection:'row'}}>
							<Image style={styles.thumb} source={require('image!icon_user_resume')}/>
							<View style={{flex:2, paddingLeft: 10}}>
								<Text style={{fontSize:16, marginTop: 6}}>简历</Text>
							</View>
						</View>
						<View style={styles.separator} />
					</View>
				</TouchableHighlight>
				<TouchableHighlight underlayColor='#E8E8E8'>
					<View>
						<View style={{padding:10, flexDirection:'row'}}>
							<Image style={styles.thumb} source={require('image!icon_forget_password')}/>
							<View style={{flex:2, paddingLeft: 10, flexDirection:'row'}}>
								<Text style={{fontSize:16, marginTop: 6, flex: 1}}>PLUS</Text>
								<Text style={{fontSize:16, marginTop: 6, textAlign: 'right', color: '#999'}}>已开启</Text>
							</View>
						</View>
						<View style={styles.separator} />
					</View>
				</TouchableHighlight>
				<TouchableHighlight underlayColor='#E8E8E8' onPress={this._pressButton.bind(this, '我的收藏')}>
					<View>
						<View style={{padding:10, flexDirection:'row'}}>
							<Image style={styles.thumb} source={require('image!icon_user_collect')}/>
							<View style={{flex:2, paddingLeft: 10}}>
								<Text style={{fontSize:16, marginTop: 6}}>收藏</Text>
							</View>
						</View>
						<View style={styles.separator} />
					</View>
				</TouchableHighlight>
				<TouchableHighlight underlayColor='#E8E8E8' onPress={this._pressButton.bind(this, '意见反馈')}>
					<View>
						<View style={{padding:10, flexDirection:'row'}}>
							<Image style={styles.thumb} source={require('image!icon_user_feedback')}/>
							<View style={{flex:2, paddingLeft: 10}}>
								<Text style={{fontSize:16, marginTop: 6}}>意见反馈</Text>
							</View>
						</View>
						<View style={styles.separator} />
					</View>
				</TouchableHighlight>
				<TouchableHighlight underlayColor='#E8E8E8' onPress={this._pressButton.bind(this, '设置')}>
					<View>
						<View style={{padding:10, flexDirection:'row'}}>
							<Image style={styles.thumb} source={require('image!icon_user_setting')}/>
							<View style={{flex:2, paddingLeft: 10}}>
								<Text style={{fontSize:16, marginTop: 6}}>更多设置</Text>
							</View>
						</View>
						<View style={styles.separator} />
					</View>
				</TouchableHighlight>
			</ScrollView>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
		height: null,
		backgroundColor: 'transparent',
		resizeMode: 'stretch',
	},
	user: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	thumb: {
    width: 30,
    height: 30,
  },
	separator: {
		height: 1,
		backgroundColor: '#E8E8E8',
	},
});

module.exports = Me;
