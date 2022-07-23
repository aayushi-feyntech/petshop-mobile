import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home/HomeScreen/HomeScreen';
import ProductDetailScreen from './Home/ProductScreen/ProductDetailScreen';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from './Profile/ProfileScreen';
import { Image } from 'react-native';
import MyPetScreen from './MyPet/MyPet';
import ExploreScreen from './Explore/Explore';
const Tab = createBottomTabNavigator();

const RootScreen = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={size}
                    />
                ),
            }} />
            <Tab.Screen name="My Pet" component={MyPetScreen} options={{
                tabBarLabel: 'My Pet',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="pets" color={color}
                        size={size} />
                ),
            }} />
            <Tab.Screen name="Explore" component={ExploreScreen} options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="explore" color={color}
                        size={size} />
                ),
            }} />
            <Tab.Screen name="Profile12" component={ProfileScreen} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="face-man-profile"
                        color={color}
                        size={size}
                    />
                ),
            }} />
        </Tab.Navigator>
    );
}


export default RootScreen;