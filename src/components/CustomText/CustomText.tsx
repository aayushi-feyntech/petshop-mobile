import React from 'react';
import { StyleSheet } from 'react-native'
import { Text } from 'native-base';
export interface CustomTextProps {
    text: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    style?: any;
}

const CustomText = (props: CustomTextProps) => {
    return <Text style={styles(props.style).baseText}>
        {props.text}
    </Text>
}

export default CustomText;
// Add font family
const styles = (styleProps: any) => StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
        fontSize: 14,
        ...styleProps
    },
});
