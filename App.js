import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    NativeModules,
    Button, Text,
} from 'react-native';

type PrimitiveModuleType = {
    helloWorld: () => void,
    helloX: () => void,
    getDeviceName: () => string
}
const PrimitiveModule: PrimitiveModuleType = NativeModules.PrimitiveModule;

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const deviceName = PrimitiveModule.getDeviceName();

    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text>{`Device Name : ${deviceName}`}</Text>
                <Button
                    title={'Hello World'}
                    onPress={() => {
                        PrimitiveModule.helloWorld();
                    }}
                />
                <Button
                    title={'Hello Wayne'}
                    onPress={() => {
                        PrimitiveModule.helloX('Wayne');
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
