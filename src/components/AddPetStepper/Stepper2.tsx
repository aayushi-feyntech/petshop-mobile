
import React from "react";
import { Box, Center, Image } from "native-base";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import CustomTextInput from "../shared/CustomInput/CustomInput";
import CustomText from "../shared/CustomText/CustomText";
const { width, height } = Dimensions.get('screen');

const Stepper2 = () => {

    const stepper2Data = [
        {
            img: require('../../../assets/blogback1.png'),
            body: 'Dog'
        },
        {
            img: require('../../../assets/blogback1.png'),
            body: 'Dog'
        },
        {
            img: require('../../../assets/blogback1.png'),
            body: 'Dog'
        },
        {
            img: require('../../../assets/blogback1.png'),
            body: 'Dog'
        }
    ]

    return <View style={styles.bodyContent}>
        <CustomText text="Tell us Leo’s Species." style={styles.heading} />
        <View style={styles.cards}>
            {
                stepper2Data.flatMap((item, index) => {
                    return <Box style={[styles.card, styles.shadowProp]} shadow={10}>
                        <Center>
                            <Image source={require('../../../assets/cat.png')} height={109} width={186} resizeMode="contain" />
                            <TouchableOpacity
                                onPress={() => { }}
                            >
                                <Box style={styles.card_body} >
                                    <CustomText text="Dog" style={{ color: 'black', fontWeight: 'normal' }} />
                                </Box>
                            </TouchableOpacity>
                        </Center>
                    </Box>
                })
            }
        </View>
    </View>
}

export default Stepper2;


const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bodyContent: {
        height: height,
        padding: height * 0.02,
        display: 'flex',
        flexDirection: 'column',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    card: {
        borderRadius: 16,
        padding: 10,
        backgroundColor: 'white',
        marginTop: height * 0.045,
        width: 174,
        height: 186,
    },
    card_body: {
        backgroundColor: '#F3F3F3',
        width: 158,
        height: 60,
        display: "flex",
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card_content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        width: 174,
        height: 186,
        borderRadius: 16,
        backgroundColor: 'pink',
    },
});
