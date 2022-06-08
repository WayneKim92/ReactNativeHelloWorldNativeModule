import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    Button,
    Text,
} from 'react-native';

import {
    getDeviceName,
    helloWorld,
    helloX,
} from './NativePrimitiveModule';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const deviceName = getDeviceName();

    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text>{`Device Name : ${deviceName}`}</Text>
                <Button
                    title={'Hello World'}
                    onPress={() => {
                        helloWorld();
                    }}
                />
                <Button
                    title={'Hello Wayne'}
                    onPress={() => {
                        helloX('Wayne');
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
