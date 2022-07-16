import { Radio } from "native-base";
import React, { useState } from "react";

const SortByOptionArray = () => {
    const options: any = {
        popularity: 'Popularity',
        discountHTL: 'Discount: High to Low',
        priceLTH: 'Price: Low to High',
        priceHTL: 'Price: High to Low',
        customerRated: 'Customer Top Rated',
        newArrivals: 'New Arrivals'
    }

    const [value, setValue] = useState("popularity");

    return <Radio.Group name="myRadioGroup" value={value} onChange={nextValue => {
        console.log(".....nextValue", nextValue)
        setValue(nextValue);
    }}>
        {
            Object.keys(options).map((key, index) => {
                return <Radio value={key} my={index} style={{ height: 25, margin: 5 }}>
                    {options[key]}
                </Radio>

            })
        }
    </Radio.Group>;
}

export default SortByOptionArray;