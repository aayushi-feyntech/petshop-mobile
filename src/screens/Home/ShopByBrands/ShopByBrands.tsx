import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View, StyleSheet, Dimensions, FlatList, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { TextInput, Text, Button, Card } from 'react-native-paper';
import CustomAvtar from '../../../components/CustomAvtar/CustomAvtar';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomCarousel from '../../../components/CustomCarousel/CustomCarousel';
import CustomTextInput from '../../../components/CustomInput/CustomInput';
const { width, height } = Dimensions.get('screen');

const ShopByBrandsScreen = () => {

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
        }, {
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
        }, {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        },
    ];

    const navigation = useNavigation();

    const onGetStarted = () => {
        navigation.navigate('ProductScreen')
    }


    return <ScrollView horizontal={false}>
        <View style={styles.screen}>
            <CustomCarousel />
        </View>
        <Card mode="elevated" style={styles.card} elevation={5}>
            <View style={styles.cardFilterOptions}>
                <CustomTextInput placeholder='Search' height={42} width={width * 0.7} borderRadius={30} />
                <AntDesign name="filter" size={30} color="black" />
                <MaterialCommunityIcons name="sort" size={30} color="black" />
            </View>
            <View style={styles.container}>
                {
                    DATA.flatMap((item, index) => {
                        return <View style={styles.avtar} key={index} ><CustomAvtar size={width*0.24} avtarImage={require('../../../../assets/pincode.png')} /></View>
                    })
                }
            </View>
        </Card>
        <View style={styles.cus_btn}>
            <CustomButton text="Product Screen" handlePress={() => onGetStarted()} />
        </View>
    </ScrollView>
}

// navigation.navigate('ShopByBrandsScreen')

export default ShopByBrandsScreen;

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: height * 0.25,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        marginTop: -10,
        borderRadius: 20,
        width: "100%",
        padding: 16
    },
    cardFilterOptions: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    avtar: {
        padding: width*0.023,
        marginTop: height*0.03,
        justifyContent: 'center',
    },
    cus_btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        
    }
});