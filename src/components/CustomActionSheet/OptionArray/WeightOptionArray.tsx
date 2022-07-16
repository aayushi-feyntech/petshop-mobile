import React, { useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import CustomActionSheetButton from "./CustomActionSheetButton";
const { width, height } = Dimensions.get('screen');

const WeightOptionArray = () => {
    const options = ['250gm', '500gm', '1kg', '2kg', '5kg']
    const [activeOption, setActiveOption] = useState(1);

    const onOptionSelected = (index: number) => {
        console.log('Pressed', index);
        setActiveOption(index);
    }

    return <View style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: width*0.9, padding: 10,
        overflow: 'scroll'
    }}>
        <ScrollView
            horizontal={true}
        >
            {
                options.map((items, index) => {
                    return <CustomActionSheetButton
                        text={items}
                        width={100}
                        height={40}
                        disabled={index === 2 ? true : false}
                        variant={activeOption === index ? "solid" : "outline"}
                        index={index}
                        onOptionSelected={onOptionSelected}
                        />
                })
            }
        </ScrollView>
    </View >

}

export default WeightOptionArray;