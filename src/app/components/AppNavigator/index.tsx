import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import InstrumentsScreen from '../../screens/Instruments';
import PortfolioScreen from '../../screens/Portfolio';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '../../../constants/routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={Routes.Instruments} component={InstrumentsScreen} />
        <Tab.Screen name={Routes.Portfolio} component={PortfolioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
