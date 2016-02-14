'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Navigator,
	TouchableOpacity,
	Image,
	Text,
	View
} from 'react-native';

export default class Resume extends Component {
	constructor(props){
		super(props);
		this.state = {title: null};
	}

	// componentDidMount() {
  //   //这里获取从前一个界面传递来的参数
  //   this.setState({
  //     title: this.props.title
  //   });
  // }

	_pressButton(){
		const { navigator } = this.props;
		if(navigator) {
			navigator.pop();
		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{padding: 10,marginTop:20,justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
					<TouchableOpacity onPress={this._pressButton.bind(this)}>
						<Image source={require('../../images/icon_back.png')} style={{width:30,height:30}}/>
					</TouchableOpacity>
					<Text style={{fontSize:17,flex:1,textAlign:'center',marginRight:30}}>{this.props.title}</Text>
				</View>
				<View style={{padding:15}}>
					<Text>等待添加</Text>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
