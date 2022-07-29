import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import CustomText from '../../components/shared/CustomText/CustomText';
import { Center } from 'native-base';
import { position } from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../../components/shared/CustomButton/CustomButton';
import Stepper1 from '../../components/AddPetStepper/Stepper1';
import CustomTextInput from '../../components/shared/CustomInput/CustomInput';
import Stepper2 from '../../components/AddPetStepper/Stepper2';
import Stepper3 from '../../components/AddPetStepper/Stepper3';
const { width, height } = Dimensions.get('screen');

const AddPetScreen = () => {

    const [currentStep, setCurrentStep] = React.useState(0);
    const [steps, setSteps] = useState(['Review', 'Payment', 'Submit', 'Finish', 'Review', 'Payment', 'Submit', 'Finish', 'Review', 'Payment', 'Submit']);

    return (
        <SafeAreaView style={styles({}).screen}>
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>

                <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10 }}>
                    <TouchableOpacity style={[styles({}).centerElement, { width: 50, height: 50 }]} onPress={() => { }}>
                        <MaterialIcons name="arrow-back" size={25} color="#000" />
                    </TouchableOpacity>
                    <View style={[styles({}).centerElement, { height: 50 }]}>
                        <Text style={{ fontSize: 18, color: '#000' }}>Checkout</Text>
                    </View>
                </View>

                <Center style={{ position: 'relative' }}>
                    <View style={styles({}).centerElement}>
                        {
                            steps.map((item, index) => {
                                return <View style={styles({}).topBarProgressGroup}>
                                    {
                                        index > currentStep && index != currentStep && <View style={styles({ backgroundColor: 'gray' }).topBarProgress}></View>
                                    }
                                    {
                                        index < currentStep && <View style={styles({ backgroundColor: 'black' }).topBarProgress}></View>
                                    }
                                    {
                                        index == currentStep && <View style={styles({ backgroundColor: 'black' }).topBarProgress}></View>
                                    }
                                </View>
                            })
                        }
                    </View>
                </Center>

                <View>

                    {currentStep == 0 && <View>
                        <Stepper1 />
                    </View>
                    }
                    {currentStep == 1 && <View>
                        <Stepper2 />
                    </View>
                    }
                    {currentStep == 2 && <View>
                        <Stepper3 />
                    </View>
                    }

                </View>

                <View style={styles({}).footerView}>
                    <CustomButton text={'Back'} handlePress={() => { currentStep !== 0 && setCurrentStep(currentStep => currentStep - 1) }} width={190} />
                    <CustomButton text={'Next'} handlePress={() => { setCurrentStep(currentStep => currentStep + 1) }} width={190} />
                </View>

            </View>
        </SafeAreaView >
    );
}
export default AddPetScreen;

const styles = (styleProps: any) => StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        flex: 1,
        position: 'relative'
    },
    centerElement: { justifyContent: 'space-between', display: 'flex', flexDirection: 'row', },
    topBar: {
        height: 15,
        width: width * 0.9,
        borderRadius: 10,
        backgroundColor: 'gray',
        position: 'absolute'
    },
    topBarProgressGroup: {
        width: width * 0.08,
    },
    topBarProgress: {
        height: 8,
        top: 0,
        backgroundColor: styleProps.backgroundColor,
        position: 'relative',
        borderRadius: 35,
        marginRight: 10,
        width: 35
    },
    bodyContent: {
        height: 150,
        backgroundColor: 'blue',
        padding: height * 0.04,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    footerView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 0,
        position: 'absolute',
        margin: width * 0.02
    }
});

