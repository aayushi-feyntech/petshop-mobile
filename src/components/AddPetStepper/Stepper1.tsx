import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomTextInput from "../shared/CustomInput/CustomInput";
import CustomText from "../shared/CustomText/CustomText";
const { width, height } = Dimensions.get('screen');

const Stepper1 = () => {
    return <View style={styles.bodyContent}>
        <CustomText text="Whats is your pet’s name?" style={styles.heading} />
        <CustomTextInput height={50} borderRadius={12}/>
    </View>
}

export default Stepper1;


const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
    },
    bodyContent: {
        height: 200,
        // backgroundColor: 'blue',
        padding: height * 0.04,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
});
