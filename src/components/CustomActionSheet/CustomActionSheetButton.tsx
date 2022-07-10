import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';

export interface CustomActionSheetButtonProps {
    width?: number;
    height?: number;
    text: string;
    icon?: string;
    mode?: "text" | "outlined" | "contained" | undefined;
    color?: string;
    disabled?: boolean;
    borderRadius?: number;
    index?: number;
    textStyle?: any;
    onOptionSelected: (data: any) => void;
}

const CustomActionSheetButton = (props: CustomActionSheetButtonProps) => {

    return <Button
        disabled={props.disabled}
        icon={props.icon}
        mode={props.mode}
        color={props.color || "#FFE01B"}
        style={{
            height: props.height || 55, width: props.width || 216, justifyContent: "center",
            alignItems: "center", borderRadius: props.borderRadius || 8, margin: 10, minWidth: 70
        }}
        onPress={() => props.onOptionSelected(props.index)}>
        <Text style={props.textStyle}>{props.text}</Text>
    </Button>

}
export default CustomActionSheetButton;