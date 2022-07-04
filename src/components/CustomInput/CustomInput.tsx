import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

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
    return <TextInput
        style={{
            height: props.height,
            width: props.width,
            borderRadius: props.borderRadius,
            borderTopEndRadius: props.borderRadius,
            borderTopStartRadius: props.borderRadius,
            backgroundColor: '#F3F3F3'
        }}
        mode="flat"
        activeUnderlineColor="transparent"
        underlineColor="transparent"
        label={props.label}
        error={props.error || false}
        placeholder={props.placeholder}
    />
}
export default CustomTextInput;