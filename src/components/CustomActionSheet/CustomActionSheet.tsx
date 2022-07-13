

import React, { useRef, useState, FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import CustomActionSheetButton from './CustomActionSheetButton';
import WeightOptionArray from './WeightOptionArray';

const CustomActionSheet: FC = () => {
    const actionSheet = useRef();

    const mapOptionArray = {
        weight: [<WeightOptionArray/>],
        // sortBy: 
    }


    const showActionSheet = () => {
        actionSheet?.current?.show()
    }

    return <View>
        <TouchableOpacity
            onPress={showActionSheet}
        >
            <Text>Shoow</Text>
        </TouchableOpacity>
        <ActionSheet
            styles={{ body: { minHeight: 150, backgroundColor: '#fff' } }}
            ref={actionSheet}
            title={<Text style={{ color: '#000', fontSize: 18, alignSelf: 'flex-start', marginLeft: 10 }}>Weight</Text> as any}
            options={mapOptionArray.weight}
            cancelButtonIndex={0}
            destructiveButtonIndex={0}
            onPress={(index) => { /* do something */ }}
        />
    </View>
}

export default CustomActionSheet;