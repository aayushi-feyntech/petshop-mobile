import { Center, Heading, Radio, View, Text } from "native-base";
import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import CustomButton from "../../CustomButton/CustomButton";
import CustomTextInput from "../../CustomInput/CustomInput";
const { width } = Dimensions.get('screen');

const PrescriptionOptionArray = () => {
    return <View >
        <Center>
            <Heading fontSize="lg" marginBottom={5}>
                No prescription- Request a call
            </Heading>
            <Text paddingLeft={10} paddingRight={10} textAlign="center" marginBottom={10}>
                Give us a few minutes, our pharmacists/doctors
                will call you to confirm the medicines.
            </Text>
            <CustomButton text="Request a call" variant="solid" width={width * 0.37} height={44} handlePress={() => { }} />
        </Center>
    </View>
}

export default PrescriptionOptionArray;