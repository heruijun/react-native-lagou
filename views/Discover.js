var Swiper = require('react-native-swiper');
var React = require('react-native');
var DiscoverCell = require('./discover/DiscoverCell');
var DiscoverList = require('./discover/DiscoverList');
var DiscoverContent = require('./discover/DiscoverContent');

var {
  AppRegistry,
  StyleSheet,
	ScrollView,
  ListView,
  Platform,
	Image,
  Text,
  View,
} = React;

var renderPagination = function (index, total, context) {
  return (
    <View style={{position: 'absolute', bottom: 20,right: 10}}>
      <Text style={styles.count}>
        <Text>{Math.floor(index + 1)}</Text>/{total}
      </Text>
    </View>
  )
}

var Discover = React.createClass({
  componentDidMount() {

  },
  componentWillUnmount() {

  },

  selectDiscover: function(discover: Object) {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: discover.title,
        component: DiscoverContent,
        passProps: {discover},
      });
    } else {
      // Android
    }
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

	_renderRow: function(discoverData: Object, sectionID: number, rowID: number) {
		return (
			<DiscoverCell
        onSelect={() => this.selectDiscover(discoverData)}
        discoverData={discoverData}/>
		);
	},

	_genRows: function(): Array<string> {
		return DiscoverList;
	},

  render: function() {
    var resultList =
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        style={{marginTop:20, backgroundColor:'#FFF', paddingBottom: 64}}
      />;

    return (
			<ScrollView style={{backgroundColor:'#EEE'}}>
	      <Swiper
					style={styles.wrapper}
					showsButtons={false}
					height={180}
					autoplayTimeout={3}
					autoplay={true}
          scrollsToTop={true}
          index={0}
					renderPagination={renderPagination}>
	        <View style={styles.slide}>
						<Image source={require('../images/job1.jpg')} style={styles.backgroundImage}>
							<Text style={styles.swipeText}>2016，只愿带你发现更多</Text>
						</Image>
	        </View>
	        <View style={styles.slide}>
						<Image source={require('../images/job2.jpg')} style={styles.backgroundImage}>
							<Text style={styles.swipeText}>12张图掌握2016互联网职场薪资</Text>
						</Image>
	        </View>
	        <View style={styles.slide}>
						<Image source={require('../images/job3.jpg')} style={styles.backgroundImage}>
							<Text style={styles.swipeText}>年轻人不能错过这5家“小而美”的公司</Text>
						</Image>
	        </View>
					<View style={styles.slide}>
						<Image source={require('../images/job4.jpeg')} style={styles.backgroundImage}>
							<Text style={styles.swipeText}>智能硬件行业的5个雇主 最值得你抱大腿</Text>
						</Image>
					</View>
	      </Swiper>
        {resultList}
			</ScrollView>
    )
  }
});

var styles = StyleSheet.create({
  wrapper: {

  },
  slide: {
		flex: 1,
		backgroundColor: 'transparent',
  },
  swipeText: {
    color: '#fff',
    fontSize: 18,
		marginTop: 120,
		marginLeft: 10,
		width: 250,
		lineHeight: 24,
		fontWeight: 'bold',
  },
	backgroundImage: {
		flex: 1,
		width: null,
		height: null,
		backgroundColor: 'transparent',
		resizeMode: 'cover',
	},
	user: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	count: {
		width: 30,
		height: 30,
		borderRadius: 15,
		textAlign:'center',
		lineHeight: 23,
		backgroundColor: '#FFF',
		opacity: 0.9,
	},
});

module.exports = Discover;
