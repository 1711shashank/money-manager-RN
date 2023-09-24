import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ProfileScreen from './screens/ProfileScreen';





const Stack = createStackNavigator();


const Tab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default Tab


