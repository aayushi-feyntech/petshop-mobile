import React, { FC } from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomTextInput from '../../components/CustomInput/CustomInput';
import CustomText from '../../components/CustomText/CustomText';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';

const PincodeScreen: FC = ({ }) => {

    const navigation = useNavigation();

    const onGetStarted = () => {
        navigation.navigate('ShopByBrandsScreen')
    }

    return <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.screen}>
            <Image source={require('../../../assets/pincode.png')} />
            <View style={styles.content}>
                <View style={styles.heading}>
                    <CustomText text="Welcome to" style={styles.welcome_text} />
                    <CustomText text=" Shake " style={{ color: '#FFE01B', fontSize: 20 }} />
                    <CustomText text="Hands!" style={styles.welcome_text} />
                </View>
                <CustomText text="Enter your pincode to discover what’s around you." style={styles.text} />
                <CustomTextInput placeholder='Enter pin code' height={56} width={width * 0.9} borderRadius={30} />
                <CustomButton text="Get Started" handlePress={() => onGetStarted()} />
            </View>
        </View>
    </ScrollView>
}
export default PincodeScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        width: "100%",
        height: "100%",
        // justifyContent: "center",
        paddingTop: height * 0.1,
        alignItems: "center",
    },
    content: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: 'column',
        height: height * 0.35,
        marginTop: 60
    },
    heading: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 58,
        marginRight: 58,
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