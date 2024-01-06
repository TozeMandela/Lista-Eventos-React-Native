import { StatusBar, View } from 'react-native';
import { Home } from './src/screens';

export default function App() {
  return (
    <View >
      <StatusBar 
        barStyle={'dark-content'}
        backgroundColor={'cyan'}
        translucent
      />
      <Home />
    </View>
  );
}
