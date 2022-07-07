import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import CustomAvtar from '../../components/CustomAvtar/CustomAvtar';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';

const ShopByBrandScreen = () => {
    return <View style={styles.screen}>
        <CustomCarousel />
        <CustomAvtar />
    </View>
}
export default ShopByBrandScreen;

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: 'column',
        height: 300,
        marginTop: 60
    },
    heading: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 68,
        marginRight: 68,
    },
    welcome_text: {
        fontSize: 20
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
        fontWeight: 'normal'
    }
});