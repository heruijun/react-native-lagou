'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Navigator,
	Text,
	View
} from 'react-native';

import Home from './views/Home';

export default class RouteHome extends Component {
	render() {
		var defaultName = 'Home';
    var defaultComponent = Home;
    return (
    <Navigator
      initialRoute={{ name: defaultName, component: defaultComponent }}
      configureScene={(route) => {
        return Navigator.SceneConfigs.HorizontalSwipeJump;
      }}
      renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }} />
    );
	}
}
