import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { Color } from './src/constants/theme';
import { store } from './src/state/store';
import Header from './src/components/Base/Header';
import MoodDataEntry from './src/components/MoodDataEntry';
import MoodChart from './src/components/MoodChart';

// Since it's a single screen app, the components are composed directly here instead of a screens section
const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Color.Neutral} barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Header title="Mood Tracker" />
          <MoodDataEntry />
          <MoodChart />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
