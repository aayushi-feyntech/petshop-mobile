import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PincodeScreen from "../screens/onboarding/Pincode";
import ShopByBrandsScreen from "../screens/shopByBrands/ShopByBrands";
import { Badge, Button } from "react-native-paper";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="PincodeScreen" component={PincodeScreen} options={{ title: 'HOmE', headerShown: false }} />
            <Stack.Screen name="ShopByBrandsScreen" component={ShopByBrandsScreen} options={{
                title: '', headerBackTitle: "Shop by brands", headerRight: () => {
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
                                    <Badge size={18} style={{ position: 'absolute', top: -3, left: 18 }}>3</Badge>

                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }, headerTintColor: 'black'
            }} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;

const styles = StyleSheet.create({
    rightHeader: {
        flexDirection: 'row',
        // width: '20%',
        justifyContent: 'space-between'
    },
});