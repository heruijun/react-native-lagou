'use strict';

import React, {
  Component,
  Navigator,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class JobCell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { jobData } = this.props;

    return (
      <TouchableHighlight
        onPress={this.props.onSelect}
        underlayColor='#F5FCFF'>
        <View style={{backgroundColor:'#FFF'}}>
          <View style={{padding:10, flexDirection:'row'}}>
            <Image style={styles.thumb} source={{uri: jobData.logo}}/>
            <View style={{flex:2, paddingLeft: 10}}>
              <Text style={{fontSize:16}}>{jobData.title}</Text>
              <Text style={{marginTop:8,marginBottom:8}}>{jobData.company}</Text>
              <Text style={{color: '#999'}}>{jobData.info}</Text>
            </View>
            <View style={{flex:1, paddingLeft: 10}}>
              <Text style={{color: '#999', textAlign: 'right'}}>{jobData.date}</Text>
              <Text style={{marginTop:8,color:'red', textAlign: 'right'}}>{jobData.salary}</Text>
            </View>
          </View>
          <View style={{padding:10, flexDirection:'row'}}>
            <Text style={styles.companyTag}>{jobData.companyPosition}</Text>
            <Text style={styles.companyTag}>{jobData.companyPerson}</Text>
            <Text style={styles.companyTag}>{jobData.companyService}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
		);
	}
}

var styles = StyleSheet.create({
  thumb: {
    width: 64,
    height: 64,
  },
  separator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  companyTag: {
    color:'#999',
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
    height: 20,
    paddingTop: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#E8E8E8',
  },
});

module.exports = JobCell;
