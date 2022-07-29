import { Box, VStack, Text } from "native-base";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from "../../../components/shared/CustomButton/CustomButton";
import CustomText from "../../../components/shared/CustomText/CustomText";
import CustomTextInput from "../../../components/shared/CustomInput/CustomInput";
import ProductListView from "../../../components/ProductListView/ProductListView";
import NewProductsView from "../../../components/NewProductsView/NewProductsView";
import CustomAvtar from "../../../components/CustomAvtar/CustomAvtar";
const { width, height } = Dimensions.get('screen');

const HomeScreen = () => {
    const Tab = createMaterialTopTabNavigator();
    const navigation = useNavigation();
    const DATA = [
        {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        }, {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        }, {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        },];

    return <ScrollView horizontal={false} style={styles.screen}>
        <Box style={styles.headerCard}>
            <CustomText text="Heylo!" style={{ fontSize: 20 }} />
            <CustomText text="Let’s discover some treasuries for your pets" style={{ fontSize: 16, color: "#898D8F", fontWeight: 'normal', width: 300 }} />
            <CustomTextInput placeholder='What’s on your mind?' height={56} width={width * 0.9} borderRadius={28} />
        </Box>
        <View style={styles.slider}>
            <Image source={require('../../../../assets/slider.png')} />
        </View>

        <Box style={styles.addPetBox}>
            <View style={styles.similarProducts}>
                <View style={styles.petBoxAlignment}>
                    <CustomText text="Let’s personalize your furry friend." style={{ fontSize: 20, width: width * 0.45 }} />
                    <CustomButton text="Add pet" variant="solid" colorScheme="black" textColor="white" width={width * 0.37} height={44} handlePress={() => { }} />
                </View>
                <Image source={require('../../../../assets/addPet.png')} />

            </View>
        </Box>


        <Box style={styles.boxStyle}>
            <CustomText text="Recently viewed by you" style={{ padding: 10, fontSize: 16 }} />
            <View style={styles.similarProducts}>
                <ProductListView />
                <ProductListView />
            </View>
        </Box>

        <Box style={styles.newProductCard}>
            <View style={styles.similarProducts}>
                <CustomText text="New on Shake Hands" style={{ fontSize: 20 }} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProductScreen')}
                >
                    <Text underline>View more</Text>
                </TouchableOpacity>
                {/* <CustomText text="View more" style={{ textDecoration: "underline", fontWeight: 'normal', }} /> */}
            </View>

            <NewProductsView />
        </Box>

        <Box style={styles.shopByBrands}>
            <View style={styles.similarProducts}>
                <CustomText text="Shop by brands" style={{ fontSize: 16 }} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('ShopByBrandsScreen')}
                >
                    <Text underline>View more</Text>
                </TouchableOpacity>
                {/* <CustomText text="View more" style={{ textDecoration: "underline", fontWeight: 'normal', }} /> */}
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    {
                        DATA.flatMap((item, index) => {
                            return <View style={styles.avtar} key={index} ><CustomAvtar size={width * 0.24} avtarImage={require('../../../../assets/pincode.png')} /></View>
                        })
                    }
                </View>
            </ScrollView>
        </Box>

        <Box style={styles.boxStyle}>
            <CustomText text="Inspired from your purchases" style={{ padding: 10, fontSize: 16 }} />
            <View style={styles.similarProducts}>
                <ProductListView />
                <ProductListView />
            </View>
        </Box>


    </ScrollView>
}
export default HomeScreen;

const styles = StyleSheet.create({
    headerCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        padding: 24,
        resizeMode: 'contain',
        height: height * 0.24,
        zIndex: 1
    },
    screen: {
    },
    slider: {
        top: -50
    },
    boxStyle: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    similarProducts: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    newProductCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 340,
        backgroundColor: "#D7EACC",
        resizeMode: 'contain',
        padding: 10
    },
    shopByBrands: {
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 10,
    },
    addPetBox: {
        margin: 10,
        height: 180,
        backgroundColor: "#FFDB1B",
        borderRadius: 16
    },

    petBoxAlignment: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 3
    },

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    avtar: {
        padding: width * 0.023,
        marginTop: height * 0.03,
        justifyContent: 'center',
    },



    productScreen: {
        paddingLeft: width * 0.03,
        paddingRight: width * 0.03,
        paddingTop: width * 0.05,
        paddingBottom: width * 0.05,
    },
    products: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // backgroundColor: 'pink'
    },
    productCard: {
        marginTop: 20,
    },
    cardFilterOptions: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
});