import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ProfileScreen from './screens/ProfileScreen';


const Tab = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerStyle: { backgroundColor: '#2c2c2c' },
                    headerTintColor: 'white',
                }} />
        </Stack.Navigator>
    )
}

export default Tab


