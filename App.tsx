import React, { ReactElement, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/store';

const App = (): ReactElement => {
  console.warn(store.getState());
  const isDarkMode = useColorScheme() === 'dark';

  const handlePress = useCallback(() => {
    console.warn('first');
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>{"Hi, you'r a great man!"}</Text>
          </View>
          <Button onPress={handlePress} title={'Button'} />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
