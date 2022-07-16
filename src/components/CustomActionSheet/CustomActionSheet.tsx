

import React, { useRef, useState, FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import CustomActionSheetButton from './OptionArray/CustomActionSheetButton';
import WeightOptionArray from './OptionArray/WeightOptionArray';
import { Button, Actionsheet, useDisclose, Center, NativeBaseProvider, Stack, HStack, Heading } from "native-base";
import CustomButton from '../CustomButton/CustomButton';
import SortByOptionArray from './OptionArray/SortByOptionArray';
import VerifyMobileNumberOptionArray, { VerifyOTPOptionArray } from './OptionArray/VerifyMobileNumberOptionArray';
import ApplyGiftCardOptionArray from './OptionArray/ApplyGiftCardOptionArray';
import PrescriptionOptionArray from './OptionArray/PrescriptionOptionArray';
const { width, height } = Dimensions.get('screen');

export interface CustomActionSheetProps {
    isOpen: boolean;
    heading?: string;
    onClose: () => void;
    type: string
}

const CustomActionSheet = (props: CustomActionSheetProps) => {
    console.log("sopen...", props.isOpen)
    const mapOptionArray: any = {
        weight: [<WeightOptionArray />,
        <BottomActionButtons />
        ],
        sortBy: [<SortByOptionArray />],
        verifyMobileNum: [<VerifyOTPOptionArray />],
        applyGiftCard: [<ApplyGiftCardOptionArray />],
        prescription: [<PrescriptionOptionArray />]
    }

    return <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
        <Actionsheet.Content>
            {props.heading && <Heading fontSize="lg" paddingLeft={8} alignSelf={{
                base: "flex-start",
            }}>
                {props.heading}
            </Heading>
            }
            <Actionsheet.Item >
                {mapOptionArray[props.type]}
            </Actionsheet.Item>
        </Actionsheet.Content>
    </Actionsheet>
}

export default CustomActionSheet;

const BottomActionButtons = () => {
    return <Stack space={2} alignItems="center">
        <HStack space={2} alignItems="center">
            <CustomButton text="SAVE" variant="solid" width={width * 0.37} height={44} handlePress={() => { }} />
            <CustomButton text="CANCEL" variant="outline" width={width * 0.37} height={44} handlePress={() => { }} />
        </HStack>
    </Stack>
}