'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
  ListView,
	Image,
	Text,
	View
} from 'react-native';

import JobCell from './home/JobCell';
import JobDetail from './home/JobDetail';
import JobList from './home/JobList';

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <Text style={{color:'#FFFFFF', fontSize:20}}>
          拉勾
        </Text>
				<View style={styles.searchInput}>
					<Image source={require('../images/icon_search.png')} style={{width:15,height:15,marginRight:8}}/>
					<Text style={{color:'#14ba91',fontSize:13}}>
						输入职位名或公司名
					</Text>
				</View>
      </View>
    );
  }
}

var renderHeader = function (index, total, context) {
	return (
		<View style={styles.headerBody}>
			<Image source={require('../images/icon_find_ok.png')} style={{width:52,height:50}}/>
			<View style={{paddingLeft:20}}>
				<Text style={{fontSize:18}}>可<Text style={{color:'#11a984'}}>直接沟通</Text>的职位推荐</Text>
				<Text style={{marginTop:15,fontSize:13,color:'#999'}}>来和老板直接聊offer吧</Text>
			</View>
		</View>
	)
}

export default class Home extends Component {
	constructor() {
		super();
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(this._genRows({}))
		}
		// 必须绑定，否则onPress报错
		this._renderRow = this._renderRow.bind(this);
	}

	selectJob(job: Object){
		const { navigator } = this.props;
		if(navigator) {
			navigator.push({
				name: 'JobDeail',
				component: JobDetail,
				params: {
					job: job
				}
			})
		}
	}

  _renderRow(jobData: Object, sectionID: number, rowID: number) {

    return (
			<JobCell onSelect={() => this.selectJob(jobData)} jobData={jobData}/>
    );
  }

  _genRows(): Array<string> {
    return JobList;
  }

	render() {
    var resultList =
      <ListView
				automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
				renderHeader={renderHeader}
      />;

		return (
			<View style={styles.container}>
        <SearchBar />
        {resultList}
			</View>
		);
	}
}

var styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#11a984',
    flexDirection: 'row',
    padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
  },
	headerBody: {
		padding: 20,
		backgroundColor: '#FFF',
		marginBottom: 15,
		flexDirection: 'row',
	},
	searchInput: {
		borderRadius: 15,
		backgroundColor: '#0f9574',
		paddingTop: 7,
		paddingBottom: 7,
		marginLeft: 10,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flex: 1,
	},
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#EEE',
		paddingBottom: 48,
	},
});
