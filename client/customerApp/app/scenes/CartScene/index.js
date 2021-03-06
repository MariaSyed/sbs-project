import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CartOverviewContainer from '../../containers/CartOverviewContainer';

const ModalStack = StackNavigator({
  Cart: {
    screen: CartOverviewContainer,
  },
});

export default class extends Component {
  static navigationOptions = {
    tabBarLabel: 'Cart',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name="shopping-cart" size={27} color={tintColor} />
    ),
  };
  render() {
    return <ModalStack />;
  }
}
