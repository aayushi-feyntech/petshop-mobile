import { Box, Center, ScrollView, View, Image, HStack, VStack } from 'native-base';
import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../../shared/CustomButton/CustomButton';
import CustomText from '../../shared/CustomText/CustomText';
const { width, height } = Dimensions.get('screen');

const CommonFooter = () => {

    return (
        <HStack style={styles.footer}>
            <TouchableOpacity
                onPress={() => { }}
            >
                <HStack style={styles.navigation}>
                    <Box style={styles.mapBox}>
                        <Center style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <Image source={require('../../../../assets/explore/mapIcon.png')} style={styles.mapIcon} />
                        </Center>
                    </Box>
                    <Center>
                        <CustomText text="Champion Pet’s Clinic Katraj, Pune" style={{ fontSize: 12, fontWeight: "normal", paddingLeft: 10 }} />
                    </Center>
                </HStack>
            </TouchableOpacity>
            <Box style={styles.footerBtn}>
                <CustomButton text='Call' handlePress={() => { }} width={width * 0.3} />
            </Box>
        </HStack>
    );
}
export default CommonFooter;

const styles = StyleSheet.create({

    footerBtn: {
        width: width * 0.3,
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.85,
        alignItems: 'center'
    },

    mapBox: {
        width: 36, height: 48, borderRadius: 74, backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    mapIcon: {
        height: 24,
        width: 16,
    },

    navigation: {
        width: width * 0.40,
    },

});