import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

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
