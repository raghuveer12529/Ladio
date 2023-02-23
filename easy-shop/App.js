import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ProductContainer } from './SCREENS/PRODUCTS/ProductContainer';
import Header from './Shared/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >


      <Header />
      <ProductContainer />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
