import { VStack } from "native-base";
import React from "react";
import { StyleSheet } from 'react-native';
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomText from "../../components/CustomText/CustomText";
import { useNavigation } from '@react-navigation/native';

const TempScreen = () => {

    const navigation = useNavigation();
    const width = 180
    return <VStack style={styles.block}>
        <CustomText text="Home" />
        <CustomButton text="New Arrivals" variant="solid" width={width} height={44} handlePress={() => { }} />
        <CustomButton text="Shop By Brands" variant="solid" width={width} height={44} handlePress={() => { navigation.navigate('ShopByBrandsScreen') }} />
        <CustomButton text="Brand Products" variant="solid" width={width} height={44} handlePress={() => { navigation.navigate('ProductScreen') }} />
        <CustomButton text="Product Detail Screen" variant="solid" width={width} height={44} handlePress={() => { navigation.navigate('ProductDetailScreen') }} />
        <CustomButton text="Home Screen" variant="solid" width={width} height={44} handlePress={() => { navigation.navigate('HomeScreen') }} />
        <CustomButton text="Tab Screen" variant="solid" width={width} height={44} handlePress={() => { navigation.navigate('RootScreen') }} />

    </VStack>
}

export default TempScreen;

const styles = StyleSheet.create({
    block: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        height: 285,
        justifyContent: 'space-between',
        resizeMode: 'contain'
    },
});