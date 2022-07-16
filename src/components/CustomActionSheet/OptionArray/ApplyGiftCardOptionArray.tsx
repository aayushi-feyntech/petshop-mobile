import { Center, Heading, Radio, View, Text } from "native-base";
import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import CustomButton from "../../CustomButton/CustomButton";
import CustomTextInput from "../../CustomInput/CustomInput";
const { width } = Dimensions.get('screen');

const ApplyGiftCardOptionArray = () => {
    return <View >
        <Center>
            <Heading fontSize="lg" marginBottom={5}>
                Apply Gift card
            </Heading>
            <Text paddingLeft={10} paddingRight={10} textAlign="center" marginBottom={10}>
                Remaining Gift card value(if any) will be added to Gift card balance in your profile.
            </Text>
            <View marginBottom={10}>
                <CustomTextInput placeholder='16 Digits Gift card Number' height={56} width={width * 0.9} borderRadius={12} />
            </View>
            <View marginBottom={10}>
                <CustomTextInput placeholder='6 Digits Gift card code' height={56} width={width * 0.9} borderRadius={12} />
            </View>
            <CustomButton text="Apply" variant="solid" width={width * 0.37} height={44} handlePress={() => { }} />
        </Center>
    </View>
}

export default ApplyGiftCardOptionArray;