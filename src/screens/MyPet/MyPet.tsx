import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { Box, Center } from 'native-base';
import CustomText from '../../components/CustomText/CustomText';
import { flexbox } from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../../components/CustomButton/CustomButton';

const MyPetScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/myPetBackground.png')} resizeMode="cover" style={styles.image}>
                <CustomText text='Introduce your pets to us!' style={styles.header} />
                <View style={styles.paraBox}>
                    <CustomText text='Help us to know your pet in a better way by taking up a few questions.' style={styles.para} />
                    <CustomText text='You’ll be surprised with product recommendations, birthday discounts and special offers.' style={styles.para} />
                </View>
                <Center style={styles.btnBox}>
                    <CustomButton text="Add my Buddy" variant="solid" width={width * 0.47} height={54} handlePress={() => { }} />
                </Center>
            </ImageBackground>
        </View >
    );
}
export default MyPetScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        position: 'relative'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginTop: height * 0.05
    },
    para: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        marginTop: height * 0.02,
        fontWeight: '400'
    },
    paraBox: {
        marginLeft: width * 0.15,
        marginRight: width * 0.15,
    },
    btnBox: {
        position: 'absolute',
        bottom: 20,
        justifyContent: 'center',
        display:'flex',
        width: width,
        // marginTop: height*0.5
    }
});