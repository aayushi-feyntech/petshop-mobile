import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import PincodeScreen from './src/screens/onboarding/Pincode';
import ShopByBrandScreen from './src/screens/shopByBrands/ShopByBrands';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        {/* <PincodeScreen /> */}
        <ShopByBrandScreen />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
