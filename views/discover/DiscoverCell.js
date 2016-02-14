'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var DiscoverCell = React.createClass({
  render: function() {
    var discoverData = this.props.discoverData;
    var cellView;
    if(this.props.discoverData.fullScreen){
      cellView =
      <View style={{padding:10}}>
        <View style={{flex:1}}>
          <View style={{flexDirection:'row'}}>
           <Text style={{flex:1,fontSize:12,color: '#999'}}>{discoverData.title}</Text>
           <Text style={{fontSize:12,color: '#999', textAlign:'right'}}>{discoverData.date}</Text>
          </View>
          <View style={{height:150,marginTop:8}}>
            <Image style={styles.fullScreenImage} source={{uri: discoverData.logo}}/>
          </View>
          <Text style={{marginTop:7,marginBottom:12,lineHeight:18}}>{discoverData.infoTitle}</Text>
          <Text style={{fontSize:12,color: '#999'}}>{discoverData.info}</Text>
        </View>
      </View>
    } else {
      cellView =
      <View style={{padding:10, flexDirection:'row'}}>
        <Image style={styles.thumb} source={{uri: discoverData.logo}}/>
        <View style={{paddingLeft: 10,flex:1}}>
          <View style={{flexDirection:'row'}}>
           <Text style={{flex:1,fontSize:12,color: '#999'}}>{discoverData.title}</Text>
           <Text style={{fontSize:12,color: '#999', textAlign:'right'}}>{discoverData.date}</Text>
          </View>
          <Text style={{marginTop:7,marginBottom:8,height:38,lineHeight:18}}>{discoverData.infoTitle}</Text>
          <Text style={{fontSize:12,color: '#999'}}>{discoverData.info}</Text>
        </View>
      </View>
    }

    return (
      <TouchableHighlight
        onPress={this.props.onSelect}
        underlayColor='#F5FCFF'>
        <View>
          {cellView}
					<View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  thumb: {
    width: 120,
    height: 80,
  },
  separator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  fullScreenImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'transparent',
    resizeMode: 'cover',
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

module.exports = DiscoverCell;
