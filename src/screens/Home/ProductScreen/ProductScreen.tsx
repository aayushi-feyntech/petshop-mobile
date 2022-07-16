import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomActionSheet from "../../../components/CustomActionSheet/CustomActionSheet";
import CustomTextInput from "../../../components/CustomInput/CustomInput";
import ProductListView from "../../../components/ProductListView/ProductListView";
const { width, height } = Dimensions.get('screen');

const ProductScreen = () => {

    const [showFilterOption, setShowFilterOption] = useState(false);
    const [showSortByOption, setShowSortByOption] = useState(false);

    return <ScrollView style={styles.screen}>
        <View style={styles.productScreen}>
            <View style={styles.cardFilterOptions}>
                <CustomTextInput placeholder='Search' height={42} width={width * 0.7} borderRadius={30} />
                <TouchableOpacity
                    onPress={() => setShowFilterOption(true)}
                >
                    <AntDesign name="filter" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setShowSortByOption(true)}
                >
                    <MaterialCommunityIcons name="sort" size={30} color="black" />
                </TouchableOpacity>
            </View>

            {
                <CustomActionSheet
                    isOpen={showSortByOption}
                    onClose={() => setShowSortByOption(false)}
                    heading={""}
                    type="sortBy"
                />
            }


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
        </View>
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