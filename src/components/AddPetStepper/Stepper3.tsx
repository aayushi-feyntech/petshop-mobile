import { Button, Center, ScrollView, Text } from "native-base";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomTextInput from "../shared/CustomInput/CustomInput";
import CustomText from "../shared/CustomText/CustomText";
const { width, height } = Dimensions.get('screen');

const Stepper3 = () => {
    return <View style={styles.bodyContent}>
        <CustomText text="Whats is your pet’s name?" style={styles.heading} />
        <View style={styles.scrollView}>
            <Center style={styles.btnView}>
                <Button style={styles.btn} variant="outline" size={20}></Button>
            </Center>
            <ScrollView horizontal={false}>
                <Text style={styles.scroll}>1</Text>
                <Text style={styles.scroll}>2</Text>
                <Text style={styles.scroll}>3</Text>
                <Text style={styles.scroll}>4</Text>
                <Text style={styles.scroll}>5</Text>
                <Text style={styles.scroll}>6</Text>
                <Text style={styles.scroll}>7</Text>
                <Text style={styles.scroll}>8</Text>
            </ScrollView>
        </View>
    </View>
}

export default Stepper3;


const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        position: 'relative',

    },
    bodyContent: {
        height: height,
        backgroundColor: 'pink',
        padding: height * 0.04,
        display: 'flex',
        flexDirection: 'column',
    },
    scroll: {
        padding: 20,
        textAlign: 'center'
    },
    scrollView: {
        paddingLeft: height * 0.05,
        paddingRight: height * 0.05,
        paddingTop: height * 0.05,
        height: height * 0.5,
        backgroundColor: 'blue',
    },
    btn: {
        borderRadius: 40,
        position: 'absolute',
        borderColor: "#898D8F",
        top: 160,
        textAlign: 'center'
    },
    btnView: {
    }
});
