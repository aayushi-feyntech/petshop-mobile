import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomTextInput from '../../components/CustomInput/CustomInput';
import CustomText from '../../components/CustomText/CustomText';

const PincodeScreen = () => {
    return <View style={styles.screen}>
        <Image source={require('../../../assets/pincode.png')} />
        <View style={styles.content}>
            <View style={styles.heading}>
                <CustomText text="Welcome to " style={styles.welcome_text} />
                <CustomText text="Shake " style={{ color: '#FFE01B', fontSize: 20 }} />
                <CustomText text="Hands!" style={styles.welcome_text} />
            </View>
            <CustomText text="Enter your pincode to discover what’s around you." style={styles.text} />
            <CustomTextInput placeholder='Enter pin code' height={56} width={386} borderRadius={30} />
            <CustomButton text="Get Started" />
        </View>
    </View>
}
export default PincodeScreen;

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