import { Box, Center, ScrollView, View, Image, HStack, VStack, Badge } from 'native-base';
import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import BlogsOptionArray from '../../components/explore/ServicesAroundScrollView/BlogsOptionArray';
import CommonFooter from '../../components/explore/ServicesAroundScrollView/CommonFooter';
import CommonHeader from '../../components/explore/ServicesAroundScrollView/CommonHeader';
import CustomTextInput from '../../components/shared/CustomInput/CustomInput';
import CustomText from '../../components/shared/CustomText/CustomText';
const { width, height } = Dimensions.get('screen');


const GroomerScreen = () => {

    const blogData = [
        {
            imgSrc: require('../../../assets/explore/dog3.png'),
            authorSrc: require('../../../assets/explore/dog3.png'),
            publishedDay: '12 hour ago',
            heading: 'Dr Jenny Willson',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate  motivate your dog...',
            readTime: '1 min read'
        },
        {
            imgSrc: require('../../../assets/explore/dog3.png'),
            authorSrc: require('../../../assets/explore/dog3.png'),
            publishedDay: '12 hour ago',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate  motivate your dog...',
            readTime: '1 min read'
        },
        {
            imgSrc: require('../../../assets/explore/dog3.png'),
            authorSrc: require('../../../assets/explore/dog3.png'),
            publishedDay: '12 hour ago',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate  motivate your dog...',
            readTime: '1 min read'
        },
        {
            imgSrc: require('../../../assets/explore/dog3.png'),
            authorSrc: require('../../../assets/explore/dog3.png'),
            publishedDay: '12 hour ago',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate  motivate your dog...',
            readTime: '1 min read'
        },
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
                                    <View style={styles.boxContainer}>
                                        <CustomText text="Services" style={{ color: "#898D8F", fontSize: 12, fontWeight: "normal" }} />
                                        <CustomText text="Pawdicure" style={{ fontWeight: "normal" }} />
                                        <CustomText text="Teeth Brushing / Dental Spray" style={{ fontWeight: "normal" }} />
                                        <CustomText text="Blow Drying" style={{ fontWeight: "normal" }} />
                                        <CustomText text="Nail Clipping / Grinding" style={{ fontWeight: "normal" }} />
                                        <CustomText text="Ear cleaning" style={{ fontWeight: "normal" }} />
                                    </View>
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
export default GroomerScreen;

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
        marginBottom: 30,
        marginLeft: width * 0.25,
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
        height: 330,
        backgroundColor: 'white',
        borderRadius: 17,
        padding: height * 0.02,
        position: 'relative'
    },
    blogCardImage: {
        borderRadius: 10
    },
    blogCardContent: {
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