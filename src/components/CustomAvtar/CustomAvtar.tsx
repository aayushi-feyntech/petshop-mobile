import { Avatar } from 'native-base';
import React from 'react';

export interface CustomAvtarProps {
    size?: number;
    avtarImage: any;
    onPress?: () => void;
}


const CustomAvtar = (props: CustomAvtarProps) => {
    return <Avatar size={props.size} source={props.avtarImage} style={{ marginRight: 6 }} /> 
}

export default CustomAvtar;