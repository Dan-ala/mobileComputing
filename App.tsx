import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen } from './src/presentation/views/register/Register';
import { HomeScreen } from './src/presentation/views/home/Home';
import { AdminScreen } from './src/presentation/views/profile/admin/Admin';
import { ProfileInfoScreen } from './src/presentation/views/profile/info/ProfileInfo';
import { CreateProductScreen } from './src/presentation/views/product/Product';
import { LookAtProductScreen } from './src/presentation/views/product/ConsultarProduct';
  
export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  AdminScreen: undefined;
  ProfileInfoScreen: undefined;
  CreateProductScreen: undefined;
  LookAtProductScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: "Registro",
          }}  
        />
        <Stack.Screen
          name="AdminScreen"
          component={AdminScreen}
        />
        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
        />
        <Stack.Screen
          name="CreateProductScreen"
          component={CreateProductScreen}
        />
        <Stack.Screen
          name="LookAtProductScreen"
          component={LookAtProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
  
export default App;