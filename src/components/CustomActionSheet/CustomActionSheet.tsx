

import React, { useRef, useState, FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import CustomActionSheetButton from './CustomActionSheetButton';
import WeightOptionArray from './WeightOptionArray';
import { Button, Actionsheet, useDisclose, Center, NativeBaseProvider, Stack, HStack, Heading } from "native-base";
import CustomButton from '../CustomButton/CustomButton';
import SortByOptionArray from './SortByOptionArray';
const { width, height } = Dimensions.get('screen');

export interface CustomActionSheetProps {
    isOpen: boolean;
    onClose: () => void;
}

const CustomActionSheet = (props: CustomActionSheetProps) => {
    console.log("sopen...", props.isOpen)
    const mapOptionArray = {
        weight: [<WeightOptionArray />,
        <BottomActionButtons />
        ],
        sortBy: [<SortByOptionArray />]
    }

    return <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
        <Actionsheet.Content>
            <Heading fontSize="lg" paddingLeft={8} alignSelf={{
                base: "flex-start",
            }}>
                Sort By
            </Heading>;

            <Actionsheet.Item >
                {mapOptionArray.sortBy}
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