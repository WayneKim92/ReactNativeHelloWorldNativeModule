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
}
const PrimitiveModule: PrimitiveModuleType = NativeModules.PrimitiveModule;

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text children={'Native Module'}/>
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
