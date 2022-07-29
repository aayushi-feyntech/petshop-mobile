import { Center, Heading, Radio, View, Text } from "native-base";
import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import CustomButton from "../../CustomButton/CustomButton";
import CustomTextInput from "../../CustomInput/CustomInput";
const { width } = Dimensions.get('screen');

const VerifyMobileNumberOptionArray = () => {
    return <View >
        <Center>
            <Heading fontSize="lg" marginBottom={5}>
                Verify your mobile number
            </Heading>
            <Text paddingLeft={10} paddingRight={10} textAlign="center" marginBottom={10}>
                Continue shopping pet essentials and cute
                stuff for your lovelies. Before that, please
                verify with us.
            </Text>
            <View marginBottom={10}>
                <CustomTextInput placeholder='Mobile Number' height={56} width={width * 0.9} borderRadius={12} />
            </View>
            <CustomButton text="Get OTP" variant="solid" width={width * 0.37} height={44} handlePress={() => { }} />
        </Center>
    </View>
}

export default VerifyMobileNumberOptionArray;

export const VerifyOTPOptionArray = () => {
    const [otpState, setOtpState] = useState('')
    console.log("===otpState", otpState)
    const getOtp = (otp: any) => {
        console.log("___otp", otp);
        setOtpState(otp);
    }

    return <View >
        <Center>
            <Heading fontSize="lg" marginBottom={5}>
                Enter OTP here
            </Heading>
            <Text paddingLeft={10} paddingRight={10} textAlign="center" marginBottom={10}>
                Enter the OTP sent to - +91 54845,75222
            </Text>
            <View marginBottom={10}>
                <CustomTextInput placeholder='Mobile Number' height={56} width={width * 0.9} borderRadius={12} />
            </View>
            <CustomButton text="Get OTP" variant="solid" width={width * 0.37} height={44} handlePress={() => { }} />
        </Center>
    </View>
}
