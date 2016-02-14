'use strict';

import React, {
  StyleSheet,
  TabBarIOS,
  Navigator,
  NavigatorIOS,
  Component,
  Text,
  View,
} from 'react-native';

import RouteHome from './RouteHome';
import Message from './views/Message';
import Discover from './views/Discover';
import RouteMe from './RouteMe';

const HOME_TAB = 'homeTab';
const MESSAGE_TAB = 'messageTab';
const DISCOVER_TAB = 'discoverTab';
const ME_TAB = 'meTab';

export default class TabBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: HOME_TAB,
      notifCount: 0,
      presses: 0,
    };
  }
  setTab(tabId){
    this.setState({selectedTab: tabId})
  }

  _addNavigator(component, title){
    var data = null;
    if(title === '首页'){
      data = this.state.data;
    }
    return <NavigatorIOS
      style={{flex:1}}
      barTintColor='#FFF'
      titleTextColor="#666"
      tintColor="#666"
      translucent={false}
      initialRoute={{
          component: component,
          title: title,
          passProps:{
            data: data
          }
        }}
      />;
  }

  _renderContent(pageName: string, num?: number) {
    var renderView;
    if(pageName == HOME_TAB){
      renderView = <RouteHome />;
    } else if(pageName == MESSAGE_TAB){
      renderView = <Message />
    } else if(pageName == DISCOVER_TAB){
      renderView = <Discover />
    } else if(pageName == ME_TAB){
      renderView = <RouteMe />
    }

    return (
      <View style={styles.pageView}>
        {renderView}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS
          tintColor="#11a984"
          barTintColor="#FFFFFF">
          <TabBarIOS.Item
            title="首页"
            icon={require('./images/icon_home_nor.png')}
            selected={this.state.selectedTab === HOME_TAB}
            onPress={() => this.setTab(HOME_TAB)}>
            {this._renderContent(HOME_TAB)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="消息"
            icon={require('./images/icon_message_nor.png')}
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === MESSAGE_TAB}
            onPress={() => this.setTab(MESSAGE_TAB)}>
            {this._addNavigator(Message, '消息列表')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="发现"
            icon={require('./images/icon_find_nor.png')}
            selected={this.state.selectedTab === DISCOVER_TAB}
            onPress={() => this.setTab(DISCOVER_TAB)}>
            {this._addNavigator(Discover, '发现')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="我"
            icon={require('./images/icon_user_nor.png')}
            selected={this.state.selectedTab === ME_TAB}
            onPress={() => this.setTab(ME_TAB)}>
            {this._renderContent(ME_TAB)}
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageView: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    margin: 50,
  }
});
