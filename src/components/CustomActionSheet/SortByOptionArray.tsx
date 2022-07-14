import { Radio } from "native-base";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CustomActionSheetButton from "./CustomActionSheetButton";

const SortByOptionArray = () => {
    const options: any = {
        popularity: 'Popularity',
        discountHTL: 'Discount: High to Low',
        priceLTH: 'Price: Low to High',
        priceHTL: 'Price: High to Low',
        customerRated: 'Customer Top Rated',
        newArrivals: 'New Arrivals'
    }


    const [activeOption, setActiveOption] = useState(1);

    const onOptionSelected = (index: number) => {
        console.log('Pressed', index);
        setActiveOption(index);
    }

    const [value, setValue] = React.useState("one");
    return <Radio.Group name="myRadioGroup" value={value} onChange={nextValue => {
        setValue(nextValue);
    }}>
        {
            Object.keys(options).map((key, index) => {
                return <Radio value={key} my={index} style={{ height: 25, margin: 5 }} >
                    {options[key]}
                </Radio>

            })
        }
    </Radio.Group>;


    // <View style={{
    //     display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%',
    //     height: 220, overflow: 'scroll', padding: 20
    // }}>
    //     <ScrollView
    //         horizontal={true}
    //     >
    //         {
    //             options.map((items, index) => {
    //                 return <CustomActionSheetButton
    //                     text={items}
    //                     width={90}
    //                     height={40}
    //                     disabled={index === 2 ? true : false}
    //                     mode={activeOption === index ? "contained" : "outlined"}
    //                     index={index}
    //                     onOptionSelected={onOptionSelected}
    //                     textStyle={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} />
    //             })
    //         }
    //     </ScrollView>
    // </View >
}

export default SortByOptionArray;