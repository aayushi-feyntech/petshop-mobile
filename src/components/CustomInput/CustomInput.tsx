import { Input } from 'native-base';
import React from 'react';
import { View } from 'react-native';

export interface CustomTextInputProps {
    width?: number;
    height?: number;
    placeholder?: string;
    label?: string;
    error?: boolean;
    onChangeText?: () => void;
    borderRadius?: number;
    onPress?: () => void;
}

const CustomTextInput = (props: CustomTextInputProps) => {
    return <Input variant="unstyled" width={props.width} placeholder={props.placeholder} isRequired={true} style={{
        height: props.height,
        width: props.width,
        borderRadius: props.borderRadius,
        borderTopEndRadius: props.borderRadius,
        borderTopStartRadius: props.borderRadius,
        backgroundColor: '#F3F3F3',
        padding: 5
    }} />


}
export default CustomTextInput;