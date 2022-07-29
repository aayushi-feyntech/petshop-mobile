import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { Badge, Box, Card, Center, Divider, ScrollView, } from 'native-base';
import CustomText from "../../shared/CustomText/CustomText";
const { width, height } = Dimensions.get('screen');
// import img from '../../../../assets/'
const newProductList = [
    {
        img: require('../../../../assets/blogback1.png'),
        title: "Black white ombre cotton dog leash...",
        description: "Super quality built for small dogs"
    }, {
        img: require('../../../../assets/blogback2.png'),
        title: "Wooden bird nesting box",
        description: "Super quality built for small dogs"
    },
    {
        img: require('../../../../assets/blogback2.png'),
        title: "Wooden bird nesting box",
        description: "Super quality built for small dogs"
    },
]

const ServicesAroundScrollView = () => {
    return <ScrollView horizontal={true}>
        {
            newProductList.map((item) => {
                return <View style={styles.container}>
                    <Box style={[styles.card, styles.shadowProp]}>
                        <View style={styles.imgBox}>
                            <Image source={require('../../../../assets/blogback1.png')} style={styles.image} />
                        </View>
                        <View style={styles.card_body}>
                            <CustomText text="Grooming services" />
                            <TouchableOpacity>
                                <CustomText text="View more" style={{ fontWeight: 'normal', color: '#F15F24' }} />
                            </TouchableOpacity>
                        </View>
                    </Box>
                </View>
            })
        }
    </ScrollView >
}

export default ServicesAroundScrollView;


const styles = StyleSheet.create({
    container: {
        width: 178,
        height: "90%",
        marginBottom: 0,
        borderRadius: 16,
        backgroundColor: 'white',
        position: 'relative',
    },
    image: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        top: -35,
        left: 25
    },
    imgBox: {
        height: 80,
    },
    card: {
        borderRadius: 16,
        position: 'absolute',
        bottom: 3,
        backgroundColor: 'white',
        marginLeft: width * 0.015,
        height: 200,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    card_body: {
        padding: 10,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    },
});