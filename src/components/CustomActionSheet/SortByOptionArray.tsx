import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CustomActionSheetButton from "./CustomActionSheetButton";

const SortByOptionArray = () => {
    const options = ['Popularity', 'Discount: High to Low', 'Price: Low to High', 'Price: High to Low', 'Customer Top Rated','New Arrivals']
    const [activeOption, setActiveOption] = useState(1);

    const onOptionSelected = (index: number) => {
        console.log('Pressed', index);
        setActiveOption(index);
    }

    return <View style={{
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
    </View >
}

export default SortByOptionArray;