import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, } from 'native-base';
import React from 'react';
import { Image, View, StyleSheet, Dimensions, FlatList, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import CustomAvtar from '../../../components/CustomAvtar/CustomAvtar';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomCarousel from '../../../components/CustomCarousel/CustomCarousel';
import CustomTextInput from '../../../components/CustomInput/CustomInput';
const { width, height } = Dimensions.get('screen');

const ShopByBrandsScreen = () => {

    const DATA = [
        {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        }, {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        }, {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        }, {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        }, {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        }, {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        }, {
            id: '58694a0f-3da1-471f-bd96-14557ewd1e29d72',
            title: 'Third Item',
        },
    ];

    const navigation = useNavigation();

    const onGetStarted = () => {
        navigation.navigate('ProductScreen')
    }


    return <ScrollView horizontal={false}>
        <View style={styles.screen}>
            <CustomCarousel width={width}/>
        </View>

        <Box style={styles.card}>
            <View style={styles.cardFilterOptions}>
                <CustomTextInput placeholder='Search' height={44} width={width * 0.7} borderRadius={30} />
                <AntDesign name="filter" size={30} color="black" />
                <MaterialCommunityIcons name="sort" size={30} color="black" />
            </View>
            <View style={styles.container}>
                {
                    DATA.flatMap((item, index) => {
                        return <View style={styles.avtar} key={index} ><CustomAvtar size={width * 0.24} avtarImage={require('../../../../assets/pincode.png')} /></View>
                    })
                }
            </View>
        </Box>
        {/* <Box alignItems="center">
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                        }} alt="image" />
                    </AspectRatio>
                    <Center bg="violet.500" _dark={{
                        bg: "violet.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        PHOTOS
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            The Garden City
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            The Silicon Valley of India.
                        </Text>
                    </Stack>
                    <Text fontWeight="400">
                        Bengaluru (also called Bangalore) is the center of India's high-tech
                        industry. The city is also known for its parks and nightlife.
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                6 mins ago
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box> */}

        {/* <Card mode="elevated" style={styles.card} elevation={5}>
            <View style={styles.cardFilterOptions}>
                <CustomTextInput placeholder='Search' height={42} width={width * 0.7} borderRadius={30} />
                <AntDesign name="filter" size={30} color="black" />
                <MaterialCommunityIcons name="sort" size={30} color="black" />
            </View>
            <View style={styles.container}>
                {
                    DATA.flatMap((item, index) => {
                        return <View style={styles.avtar} key={index} ><CustomAvtar size={width * 0.24} avtarImage={require('../../../../assets/pincode.png')} /></View>
                    })
                }
            </View>
        </Card> */}



        <View style={styles.cus_btn}>
            <CustomButton text="Product Screen" handlePress={() => onGetStarted()} />
        </View>
    </ScrollView>
}

// navigation.navigate('ShopByBrandsScreen')

export default ShopByBrandsScreen;

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: height * 0.25,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        marginTop: -10,
        borderRadius: 20,
        width: "100%",
        padding: 16,
        backgroundColor: 'white'
    },
    cardFilterOptions: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    avtar: {
        padding: width * 0.023,
        marginTop: height * 0.03,
        justifyContent: 'center',
    },
    cus_btn: {
        flexDirection: 'row',
        justifyContent: 'center',

    }
});