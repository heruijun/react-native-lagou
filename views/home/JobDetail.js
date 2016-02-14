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

export default class JobDetail extends Component {
	constructor(props){
		super(props);
		this.state = {job: null};
	}

	_pressButton(){
		const { navigator } = this.props;
		if(navigator) {
			navigator.pop();
		}
	}

	render() {
    const { job } = this.props;

		return (
			<View style={{flex: 1}}>
				<View style={{padding: 10,marginTop:20,justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
					<TouchableOpacity onPress={this._pressButton.bind(this)}>
						<Image source={require('../../images/icon_back.png')} style={{width:30,height:30}}/>
					</TouchableOpacity>
					<Text style={{fontSize:17,flex:1,textAlign:'center',marginRight:30}}>职位详情</Text>
				</View>
				<View style={{padding:15, flexDirection:'row'}}>
					<Text style={{flex:1}}>{job.title}</Text>
          <Text style={{color:'red'}}>{job.salary}</Text>
				</View>
        <View style={{padding: 15}}>
          <Text style={{marginTop:8,marginBottom:8}}>{job.company}</Text>
          <Text style={{color: '#999'}}>{job.info}</Text>
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
