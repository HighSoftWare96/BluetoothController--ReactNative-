import BleManager from 'react-native-ble-manager';
import { Alert, NativeEventEmitter, NativeModules } from 'react-native';

const BleManagerModule = NativeModules.BleManager;

export class BluetoothService {
    static initialize = () => {
        // inizlalizzazione del modulo del bluetooth
        BleManager.start({ showAlert: true }).then(() => {
            console.log("Module initialized");
        });
    }

    static enableBlth = () => {
        return BleManager.enableBluetooth();
    }

    static getEmitter = () => {
        return new NativeEventEmitter(BleManagerModule);
    }

    static getStatus = () => {
        BleManager.checkState()
    }
}