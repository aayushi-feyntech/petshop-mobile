import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import PincodeScreen from "../screens/onboarding/Pincode";
import ProductScreen from "../screens/Home/ProductScreen/ProductScreen";
import ShopByBrandsScreen from "../screens/Home/ShopByBrands/ShopByBrands";
import { Badge } from "native-base";
import TempScreen from "../screens/Home/TempScreen";
import ProductDetailScreen from "../screens/Home/ProductScreen/ProductDetailScreen";
import HomeScreen from "../screens/Home/HomeScreen/HomeScreen";
import RootScreen from "../screens";
import AddPetScreen from "../screens/MyPet/AddPetScreen";
import ExploreScreen from "../screens/Explore/Explore";
import ExploreBlogsScreen from "../screens/Explore/Blogs";
import ExpertSayScreen from "../screens/Explore/ExpertSayScreen";
import VetsScreen from "../screens/Explore/VetsScreen";
const Stack = createNativeStackNavigator();

const showHeaderRight = () => {
    return (
        <View style={styles.rightHeader}>
            <View style={{ right: 10 }}>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <FontAwesome name="whatsapp" size={27} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <AntDesign name="shoppingcart" size={27} color="black" style={{ position: 'relative' }} />
                    <Badge fontSize={7} width={5} height={5} padding={0} variant="solid" colorScheme="red" borderRadius={"full"} style={{ position: 'absolute', top: -3, left: 18 }}>8</Badge>

                </TouchableOpacity>
            </View>
        </View>
    )
}
const Routes = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="PincodeScreen" component={PincodeScreen} options={{ title: 'HOmE', headerShown: false }} />
            {/* <Stack.Screen name="TempScreen" component={TempScreen} options={{ title: 'TempScreen', headerShown: true }} /> */}
            <Stack.Screen name="RootScreen" component={RootScreen} options={{
                headerLeft: () => <Image source={require('../../assets/logo.png')} width={10} height={30} />,
                title: '', headerRight: showHeaderRight,
            }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                title: '',
                headerShown: false
            }} />
            <Stack.Screen name="AddPetScreen" component={AddPetScreen} options={{
                title: '',
                headerShown: false
            }} />

            <Stack.Screen name="ShopByBrandsScreen" component={ShopByBrandsScreen} options={{
                title: '', headerBackTitle: "Shop by brands", headerRight: showHeaderRight, headerTintColor: 'black'
            }} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ title: '', headerBackTitle: "New arrivals", headerRight: showHeaderRight, headerTintColor: 'black' }} />
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ title: '', headerBackTitle: "ProductDetailScreen", headerRight: showHeaderRight, headerTintColor: 'black' }} />

            {/* ExploreScreen */}

            <Stack.Screen name="ExploreBlogsScreen" component={ExploreBlogsScreen} options={{ title: '', headerBackTitle: "Blogs", headerRight: showHeaderRight, headerTintColor: 'black' }} />
            <Stack.Screen name="ExpertSayScreen" component={ExpertSayScreen} options={{ title: '', headerBackTitle: "Expert say", headerRight: showHeaderRight, headerTintColor: 'black' }} />
            <Stack.Screen name="VetsScreen" component={VetsScreen} options={{ title: '', headerBackTitle: "Vets", headerRight: showHeaderRight, headerTintColor: 'black' }} />

        </Stack.Navigator>
    </NavigationContainer>  //Whiskas
}

export default Routes;

const styles = StyleSheet.create({
    rightHeader: {
        flexDirection: 'row',
        // width: '20%',
        justifyContent: 'space-between'
    },
});