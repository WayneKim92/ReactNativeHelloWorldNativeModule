import { NativeModules } from 'react-native';

type PrimitiveModuleType = {
    helloWorld: () => void,
    helloX: () => void,
    getDeviceName: () => string
}

const { PrimitiveModule } = NativeModules;

export const {
    getDeviceName,
    helloWorld,
    helloX,
}: PrimitiveModuleType = PrimitiveModule;
