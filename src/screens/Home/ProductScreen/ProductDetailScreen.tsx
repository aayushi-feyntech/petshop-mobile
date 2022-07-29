import { Box, Button, Heading, Icon, Input } from "native-base";
import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import CustomActionSheetButton from "../../../components/shared/CustomActionSheet/OptionArray/CustomActionSheetButton";
import CustomCarousel from "../../../components/shared/CustomCarousel/CustomCarousel";
import CustomIncrementDecrementButton from "../../../components/CustomIncrementDecrementButton/CustomIncrementDecrementButton";
import CustomText from "../../../components/shared/CustomText/CustomText";
import { AntDesign } from '@expo/vector-icons';
import ProductListView from "../../../components/ProductListView/ProductListView";
const { width, height } = Dimensions.get('screen');

const ProductDetailScreen = () => {
    const options = ['250gm', '500gm', '1kg', '2kg', '5kg']
    const [activeOption, setActiveOption] = useState(1);
    const [showDescription, setShowDescription] = useState(false);
    const [showReview, setShowReview] = useState(false);

    const onOptionSelected = (index: number) => {
        console.log('Pressed', index);
        setActiveOption(index);
    }

    return <ScrollView horizontal={false}>
        <Box style={styles.carouselBox}>
            <View style={styles.screen}>
                <CustomCarousel width={width * 0.5} height={height * 0.25} />
            </View>
            <View style={styles.productHeader}>
                <Heading fontSize="lg">Pedigree Chicken & Vegetables adult Dry food
                    for dogs</Heading>
                <CustomText text="High-quality, wholesome, balanced food specially curated for adult dogs" style={{ fontWeight: 'normal' }} />
                <View style={styles.amountDetail}>
                    <View style={styles.column}>
                        <View style={styles.card_content}>
                            <CustomText text="₹ 2000" style={{ fontSize: 20, fontWeight: '800', padding: 8, paddingLeft: 0 }} />
                            <CustomText text="MRP ₹ 2500" style={{ textDecorationLine: 'line-through', fontSize: 18, color: '#898D8F', textDecorationStyle: 'solid', fontWeight: 'normal', padding: 8 }} />
                            <CustomText text="10% OFF" style={{ color: 'red', fontWeight: 'normal', padding: 8 }} />
                        </View>
                        <CustomText text="You save: ₹500" style={{ color: 'red', fontWeight: 'normal' }} />
                    </View>
                    <View style={styles.btn}>
                        <CustomIncrementDecrementButton />
                    </View>
                </View>
            </View>
        </Box>

        <Box style={styles.boxStyle}>
            <View>
                <CustomText text="Weight" style={{ padding: 10, fontSize: 16 }} />
            </View>
            <ScrollView
                horizontal={true}
            >
                {
                    options.map((items, index) => {
                        return <CustomActionSheetButton
                            text={items}
                            width={100}
                            height={40}
                            disabled={index === 2 ? true : false}
                            variant={activeOption === index ? "solid" : "outline"}
                            index={index}
                            onOptionSelected={onOptionSelected}
                        />
                    })
                }
            </ScrollView>
        </Box>

        <Box style={styles.boxStyle}>
            <View style={styles.amountDetail}>
                <CustomText text="Product description" style={{ padding: 10, fontSize: 16 }} />
                {
                    showDescription && <TouchableOpacity onPress={() => { setShowDescription(!showDescription) }} style={{ padding: 10 }} >
                        <AntDesign name="up" size={20} color="black" />
                    </TouchableOpacity>
                }
                {
                    !showDescription && <TouchableOpacity onPress={() => { setShowDescription(!showDescription) }} style={{ padding: 10 }} >
                        <AntDesign name="down" size={20} color="black" />
                    </TouchableOpacity>
                }
            </View>
            {
                showDescription && <CustomText style={{ padding: 10, fontWeight: 'normal' }} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  "/>
            }
        </Box>

        {/* <Box style={styles.boxStyle}>
            <View style={styles.amountDetail}>
                <CustomText text="Ratings & reviews" style={{ padding: 10, fontSize: 16 }} />
                {
                    showReview && <TouchableOpacity onPress={() => { setShowReview(!showReview) }} style={{ padding: 10 }} >
                        <AntDesign name="up" size={20} color="black" />
                    </TouchableOpacity>
                }
                {
                    !showReview && <TouchableOpacity onPress={() => { setShowReview(!showReview) }} style={{ padding: 10 }} >
                        <AntDesign name="down" size={20} color="black" />
                    </TouchableOpacity>
                }
            </View>
            {
                showReview && <CustomText style={{ padding: 10, fontWeight: 'normal' }} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  "/>
            }
        </Box> */}

        <Box style={styles.boxStyle}>
            <View>
                <CustomText text="Product description" style={{ padding: 10, fontSize: 16 }} />
            </View>
            <Input value="Delivery details for 444878" editable={false} borderRadius={28} height={50} variant="unstyled" placeholder="Unstyled" backgroundColor={"#FBEECA"} InputRightElement={<Icon as={<AntDesign name="edit" size={24} color="black"/>} paddingRight={8} />} />
            <View style={[styles.card_content, styles.imageIcon]}>
                <Image source={require('../../../../assets/delivery.png')} />
                <CustomText text="Get it by Thu, 10 Feb" style={{ marginLeft: 10, color: '#898D8F', fontWeight: 'normal' }} />
            </View>
            <View style={[styles.card_content, styles.imageIcon]}>
                <Image source={require('../../../../assets/repeat.png')} />
                <CustomText text="Easy 15 days Return & Exchage available" style={{ marginLeft: 10, color: '#898D8F', fontWeight: 'normal' }} />
            </View>
        </Box>


        <Box style={styles.boxStyle}>
            <CustomText text="Similar products you might like" style={{ padding: 10, fontSize: 16 }} />
            <View style={styles.similarProducts}>
                <ProductListView />
                <ProductListView />
            </View>
        </Box>

    </ScrollView>
}

export default ProductDetailScreen;


const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: height * 0.35,
        justifyContent: "center",
        alignItems: "center",
    },
    productHeader: {
        margin: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        height: 180,
        justifyContent: 'space-between',
        resizeMode: 'contain'
    },
    card_content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    amountDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        alignItems: 'flex-end',
        display: 'flex',
        justifyContent: 'space-around',
        right: 0
    },
    column: {
        flexDirection: 'column',
    },
    boxStyle: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    carouselBox: {
        marginTop: 10,
        backgroundColor: 'white'
    },
    similarProducts: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    imageIcon: {
        padding: 15,
    }

});