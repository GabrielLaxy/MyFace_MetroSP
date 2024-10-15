import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Notifications" component={Cadastro} />
    </Stack.Navigator>
  );
}