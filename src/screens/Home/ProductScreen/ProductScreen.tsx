import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import CustomActionSheet from "../../../components/CustomActionSheet/CustomActionSheet";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomTextInput from "../../../components/CustomInput/CustomInput";
import ProductListView from "../../../components/ProductListView/ProductListView";
const { width, height } = Dimensions.get('screen');

const ProductScreen = () => {
    return <ScrollView style={styles.screen}>
        {/* <SafeAreaView > */}

        <CustomActionSheet />
        {/* <View style={styles.productScreen}>
            <View style={styles.cardFilterOptions}>
                <CustomTextInput placeholder='Search' height={42} width={width * 0.7} borderRadius={30} />
                <AntDesign name="filter" size={30} color="black" />
                <MaterialCommunityIcons name="sort" size={30} color="black" />
            </View>

            <View style={styles.products}>
                <View style={styles.productCard}>
                    <ProductListView />
                </View>
                <View style={styles.productCard}>
                    <ProductListView />
                </View>
                <View style={styles.productCard}>
                    <ProductListView />
                </View>
                <View style={styles.productCard}>
                    <ProductListView />
                </View>
            </View>
        </View> */}

        {/* </SafeAreaView> */}
    </ScrollView>
}

export default ProductScreen;


const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
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
    },
    productCard: {
        marginTop: 20
    },
    cardFilterOptions: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
});