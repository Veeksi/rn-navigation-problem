import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

const RNStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RNStack.Navigator>
        <RNStack.Screen name='First' component={First} />
        <RNStack.Screen
          name='Second'
          component={Second}
          options={{ animation: 'slide_from_right' }}
        />
      </RNStack.Navigator>
    </NavigationContainer>
  );
}

const First = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>first</Text>
      <Button
        title='Go to second XD'
        onPress={() => navigation.navigate({ name: 'Second' })}
      />
    </View>
  );
};

const Second = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <Text>second</Text>
    </View>
  );
};

