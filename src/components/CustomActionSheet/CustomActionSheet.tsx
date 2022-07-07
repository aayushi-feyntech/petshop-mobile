

import React, { useRef, useState, FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import CustomActionSheetButton from './CustomActionSheetButton';

const CustomActionSheet: FC = () => {
    const options = ['250gm', '500gm', '1kg', '2kg', '5kg']
    const actionSheet = useRef();
    const [activeOption, setActiveOption] = useState(1);

    const onOptionSelected = (index: number) => {
        console.log('Pressed', index);
        setActiveOption(index);
    }

    const optionArray = [<View style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%',
        height: 220, overflow: 'scroll', padding: 20
    }}>
        <ScrollView
            horizontal={true}
        >
            {
                options.map((items, index) => {
                    return <CustomActionSheetButton
                        text={items}
                        width={90}
                        height={40}
                        disabled={index === 2 ? true : false}
                        mode={activeOption === index ? "contained" : "outlined"}
                        index={index}
                        onOptionSelected={onOptionSelected}
                        textStyle={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} />
                })
            }
        </ScrollView>
    </View >,
    ];

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
            options={optionArray}
            cancelButtonIndex={0}
            destructiveButtonIndex={0}
            onPress={(index) => { /* do something */ }}
        />
    </View>
}

export default CustomActionSheet;