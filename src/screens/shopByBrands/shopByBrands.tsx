import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, View, StyleSheet, Dimensions, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { TextInput, Text, Button, Card } from 'react-native-paper';
import CustomAvtar from '../../components/CustomAvtar/CustomAvtar';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import CustomTextInput from '../../components/CustomInput/CustomInput';
const { width, height } = Dimensions.get('screen');

const ShopByBrandScreen = () => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e2349d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        },
    ];

    return <View style={styles.screen}>
        <CustomCarousel />
        <Card mode="elevated" style={styles.card} elevation={5}>
            <View style={styles.cardFilterOptions}>
                <CustomTextInput placeholder='Search' height={52} width={width * 0.7} borderRadius={30} />
                <AntDesign name="filter" size={36} color="black" />
                <MaterialCommunityIcons name="sort" size={36} color="black" />
            </View>
            <View style={styles.container}>
                {
                    DATA.flatMap((item, index) => {
                        return <View style={styles.avtar}><CustomAvtar size={104} key={index} /></View>
                    })
                }
            </View>
        </Card>
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
    card: {
        borderRadius: 20,
        width: "100%",
        height: 372,
        padding: 16
    },
    cardFilterOptions: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        // width: '90%'
        marginBottom: 20
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avtar: {
        padding: 8,
        marginTop: 20,
        // marginBottom: 20,
        // marginLeft: 9,
        // marginRight: 8,
    }
});