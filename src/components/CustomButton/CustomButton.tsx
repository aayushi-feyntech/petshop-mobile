import React from 'react';
import { Button } from 'react-native-paper';

export interface CustomButtonProps {
    width?: number;
    height?: number;
    text: string;
    icon?: string;
    mode?: "text" | "outlined" | "contained" | undefined;
    color?: string;
    disabled?: boolean;
    onPress?: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
    return <Button
        icon={props.icon}
        mode={props.mode || "contained"}
        color={props.color || "#FFE01B"}
        style={{
            height: props.height || 55, width: props.width || 216, justifyContent: "center",
            alignItems: "center"
        }}
        onPress={() => console.log('Pressed')}>
        {props.text}
    </Button>

}
export default CustomButton;