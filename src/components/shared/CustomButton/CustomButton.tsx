import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Icon } from 'native-base';
import React from 'react';

export interface CustomButtonProps {
    width?: number;
    height?: number;
    text: string;
    textColor?: string;
    icon?: string;
    variant?: "subtle" | "outline" | "solid" | undefined;
    colorScheme?: string;
    disabled?: boolean;
    handlePress: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
    const { handlePress } = props;
    return <Button
        // leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}
        variant={props.variant || "solid"}
        style={{ backgroundColor: props.variant === "outline" ? "white" : props.colorScheme || "#FFE01B", height: props.height || 55, width: props.width || 216, borderColor: "#898D8F", borderRadius: 8 }}
        _text={{
            color: props.textColor ? props.textColor : "#1F2937",
            fontSize: 16
        }}
        onPress={() => handlePress()}>
        {props.text}
    </Button>
}
export default CustomButton;