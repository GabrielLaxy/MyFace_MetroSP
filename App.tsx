import * as React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Login from './src/screens/login';


export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}
