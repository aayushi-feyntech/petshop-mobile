import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Box, Center, Stack, Text, Image } from 'native-base';
import CustomButton from "../../components/shared/CustomButton/CustomButton";
import CustomText from "../../components/shared/CustomText/CustomText";
const { width, height } = Dimensions.get('screen');


const JoinCommunityScreen = () => {
    return <View style={styles.container}>
        <ScrollView>
            <View style={styles.imgBox}>
                <Image source={require('../../../assets/explore/burgandy.png')} style={styles.img1} />
                <Image source={require('../../../assets/explore/joinCommunityHead.png')} style={styles.img2} />
            </View>

            <View>
                <CustomText text="Learn, Share & Hangout with our community!" style={{ fontSize: 20, color: '#241C15', textAlign: 'center' }} />
            </View>
            <Center>
                <Center style={[styles.card, styles.shadowProp]}>
                    <Image source={require('../../../assets/explore/join1.png')} />
                    <View style={styles.textBox}>
                        <CustomText text="Ever wondered what it can be like to talk and discuss endlessly about your goofballs?" style={styles.text} />
                        <CustomText text="Welcome to a DEDICATED online pet community where we come together to share, educate and connect over what we love doing the most." style={styles.text} />
                    </View>
                    <CustomButton text="Join now" variant="solid" width={width * 0.47} height={54} handlePress={() => { }} />
                </Center>
            </Center>


            <Center>
                <Center style={[styles.card, styles.shadowProp, styles.bottom]}>
                    <Image source={require('../../../assets/explore/join2.png')} />
                    <View style={styles.textBox}>
                        <CustomText text="Follow us on Instagram for details on our upcoming offers, new arrivals, useful parenting tips and tricks, live sessions with experts and lots of cute stuff all about our lovely pets." style={styles.text} />
                    </View>
                    <CustomButton text="Follow us" variant="solid" width={width * 0.47} height={54} handlePress={() => { }} />
                </Center>
            </Center>

        </ScrollView>
    </View>
}


export default JoinCommunityScreen;

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',

    },
    bottom: {
        marginTop: height*0.05,
        marginBottom: height*0.05,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    card: {
        borderRadius: 16,
        width: width * 0.93,
        backgroundColor: 'white',
        marginTop: 20,
        padding: 20,
    },
    imgBox: {
        position: 'relative',
        height: 320,
        width: width
    },
    img1: {
        position: 'absolute',
    },
    img2: {
        position: 'absolute',
        top: height * 0.05,
        zIndex: 5
    },
    textBox: {
        padding: 20
    },
    text: {
        fontSize: 16,
        color: '#898D8F',
        textAlign: 'center',
        fontWeight: 'normal',
        marginTop: 10
    }
})