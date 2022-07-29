import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { Badge, Box, Card, Center, Divider, ScrollView, } from 'native-base';
import CustomText from "../shared/CustomText/CustomText";
const { width, height } = Dimensions.get('screen');
// import r from '../../../assets/blogback1.png'

const newProductList = [
    {
        img: require('../../../assets/blogback1.png'),
        title: "Black white ombre cotton dog leash...",
        description: "Super quality built for small dogs"
    }, {
        img: require('../../../assets/blogback2.png'),
        title: "Wooden bird nesting box",
        description: "Super quality built for small dogs"
    },
]

const BlogScrollView = () => {
    return <ScrollView horizontal={true}>
        {
            newProductList.map((item) => {
                return <View style={styles.container}>
                    {/* <Image source={require('../../../assets/blogback1.png')} style={styles.image} /> */}
                    <ImageBackground source={require('../../../assets/blogback1.png')} resizeMode="cover" imageStyle={{ borderRadius: 16 }} style={styles.image}>
                        {/* <CustomText text="Super quality built for small dogs" style={{ fontWeight: 'normal' }} /> */}
                        <Box style={styles.card}>
                            <View style={styles.card_body}>
                                <View style={styles.card_content}>
                                    <CustomText text="Motivate your dog." />
                                </View>

                                <View style={styles.card_content}>
                                    <CustomText text="Lorem ipsum dolor sit amet. Et velit." style={{ fontWeight: 'normal' }} />
                                </View>
                            </View>
                        </Box>
                    </ImageBackground>



                </View>

            })
        }
    </ScrollView >
}

export default BlogScrollView;


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: 178,
        height: "90%",
        margin: width * 0.02,
        marginBottom: 0,
        borderRadius: 16,
        backgroundColor: 'pink',
        position: 'relative',

    },
    image: {
        flex: 1,
    },
    card: {
        borderRadius: 16,
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'white',
        marginLeft: width * 0.015,
    },
    card_body: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        resizeMode: 'contain'
    },
    card_content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});