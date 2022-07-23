import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Badge, Box, Card, Divider, ScrollView } from 'native-base';
import CustomText from "../CustomText/CustomText";
const { width, height } = Dimensions.get('screen');

const newProductList = [
    {
        img: require('../../../assets/newItem1.png'),
        title: "Black white ombre cotton dog leash...",
        description: "Super quality built for small dogs"
    }, {
        img: require('../../../assets/newItem2.png'),
        title: "Wooden bird nesting box",
        description: "Super quality built for small dogs"
    }, {
        img: require('../../../assets/newItem1.png'),
        title: "Black white ombre cotton dog leash...",
        description: "Super quality built for small dogs"
    }
]
const NewProductsView = () => {
    return <ScrollView horizontal={true}>
        {
            newProductList.map((item) => {
                return <Box style={[styles.card, styles.shadowProp]} shadow={10}>
                    <View>
                        <Image source={item.img
                        } style={styles.card_image} />
                        <Divider />
                        <View style={styles.card_body}>
                            <View style={styles.card_content}>
                                <CustomText text="Black white ombre cotton dog leash..." />
                            </View>

                            <View style={styles.card_content}>
                                <CustomText text="Super quality built for small dogs" style={{ fontWeight: 'normal' }} />
                            </View>
                        </View>
                    </View>
                </Box>
            })
        }

    </ScrollView>

}

export default NewProductsView;



const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        width: width * 0.42,
        height: 250,
        backgroundColor: 'white',
        marginLeft: 5,
        marginTop: 20,
        marginRight: 20
        // margin: 10
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    card_image: {
        width: width * 0.22,
        height: 85,
        justifyContent: 'center',
        marginRight: 42,
        marginLeft: 42,
        marginTop: 36,
        marginBottom: 26
    },
    card_body: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        // height: 185,
        justifyContent: 'space-between',
        resizeMode: 'contain'
    },
    card_content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    badge: {
        backgroundColor: '#FFE01B',
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 10
    },
});