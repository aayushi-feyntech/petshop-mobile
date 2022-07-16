import { Button, Text } from 'native-base';
import React, { useState } from 'react';

export interface CustomActionSheetButtonProps {
    borderRadius?: number;
    index?: number;
    textStyle?: any;
    onOptionSelected: (data: any) => void;

    width?: number;
    height?: number;
    text: string;
    icon?: string;
    variant?: "subtle" | "outline" | "solid" | undefined;
    colorScheme?: string;
    disabled?: boolean;
}

const CustomActionSheetButton = (props: CustomActionSheetButtonProps) => {
    return <Button
        // disabled={props.disabled}
        // icon={props.icon}
        variant={props.variant}
        style={{
            height: props.height || 55, width: props.width || 216, justifyContent: "center", backgroundColor: props.variant === "outline" ? "white" : props.colorScheme || "#FFE01B",
            alignItems: "center", borderRadius: props.borderRadius || 8, margin: 10, minWidth: 70, borderColor: "#898D8F"
        }}
        onPress={() => props.onOptionSelected(props.index)}>
        <Text strikeThrough >{props.text}</Text>
    </Button>

}
export default CustomActionSheetButton;