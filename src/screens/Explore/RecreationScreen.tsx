import { Box, Center, ScrollView, View, Image, HStack, VStack, Badge } from 'native-base';
import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import BlogsOptionArray from '../../components/explore/ServicesAroundScrollView/BlogsOptionArray';
import CommonFooter from '../../components/explore/ServicesAroundScrollView/CommonFooter';
import CommonHeader from '../../components/explore/ServicesAroundScrollView/CommonHeader';
import CustomTextInput from '../../components/shared/CustomInput/CustomInput';
import CustomText from '../../components/shared/CustomText/CustomText';
const { width, height } = Dimensions.get('screen');


const RecreationScreen = () => {

    const blogData = [
        {
            imgSrc: require('../../../assets/explore/dog1.png'),
            publishedDay: 'Today',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate your dog.Activities that can motivate your dog.ext'
        },
        {
            imgSrc: require('../../../assets/explore/dog2.png'),
            publishedDay: 'Today',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate your dog.Activities that can motivate your dog.ext'
        },
        {
            imgSrc: require('../../../assets/explore/dog1.png'),
            publishedDay: 'Today',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate your dog.Activities that can motivate your dog.ext'
        }
    ]

    return (
        <View style={styles.container}>

            <ScrollView horizontal={false}>
                <View style={styles.topContainer}>
                    <BlogsOptionArray />
                    <Center>
                        <CustomTextInput placeholder='What’s on your mind?' height={56} width={width * 0.9} borderRadius={28} />
                    </Center>
                </View>

                <View style={styles.blogContainer}>
                    <View style={styles.badge}>
                        <Badge colorScheme="warning" rounded="full">14 verified vets found near you</Badge>
                    </View>

                    {
                        blogData.map((blog) => {
                            return <HStack style={[styles.blogCard, styles.shadowProp]}>
                                <View style={styles.blogCardContent}>
                                    <CommonHeader blogDetails={blog} />

                                    <CommonFooter />
                                </View>
                            </HStack>
                        })
                    }
                </View>

            </ScrollView>

        </View>
    );
}
export default RecreationScreen;

const styles = StyleSheet.create({
    container: {
    },

    badge: {
        width: 250,
        padding: 20,
        borderRadius: 100
    },

    boxContainer: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: width * 0.85,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5
    },

    boxButton: {
        borderColor: '#F3F3F3',
        borderWidth: 1,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
        width: width * 0.4
    },

    topContainer: {
        height: 160,
        backgroundColor: 'white'
    },
    blogContainer: {
        marginTop: 10,
        backgroundColor: 'white'
    },
    blogCard: {
        margin: width * 0.03,
        height: 196,
        backgroundColor: 'white',
        borderRadius: 17,
        padding: height * 0.02,
        position: 'relative'
    },
    blogCardImage: {
        borderRadius: 10
    },
    blogCardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // padding: 10,
        width: width * 0.45,
        // marginTop: height * 0.05
    },
    para: {
        height: height * 0.1,
        position: 'relative'
    },
    paraText: {
        fontSize: 12,
        color: "#898D8F",
        fontWeight: 'normal',
        position: 'absolute',
        bottom: 0
    },
    publishedDay: {
        position: 'absolute',
        right: height * 0.02,
        top: height * 0.02,
        color: '#00C14E',
        fontWeight: 'normal'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
});