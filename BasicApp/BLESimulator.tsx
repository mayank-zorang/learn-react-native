import React, { useEffect } from 'react';
import { NativeModules, View, Text } from 'react-native';
import Ble from 'react-native-ble-manager';
import BleM from 'react-native-ble-plx';
import BleAdvertiser from 'react-native-ble-advertiser';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const { BleManager } = NativeModules;

const SERVICE_UUID = '542bce7c-22b2-6a84-e311-9efc982d2f58';
const CHARACTERISTIC_UUID = 'c4ed1fb9-9a32-4a11-aa8e-3dd70c947f90';
const ADVERTISING_DATA = 'YourAdvertisingData'; // Replace with any unique string representing your simulator


const BLESimulator = () => {
  useEffect(() => {
    requestBluetoothPermissions();
    // setupSimulator();
    // Clean up on component unmount
    return () => {
      // BleAdvertiser.stopBroadcast()
    };
  }, []);


  const requestBluetoothPermissions = async () => {
      const permissionResult = await request(PERMISSIONS.ANDROID.BLUETOOTH_CONNECT);
      const permissionResult1 = await request(PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE);
      if (permissionResult === RESULTS.GRANTED && permissionResult1 === RESULTS.GRANTED) {
        // Permission granted, check Bluetooth state and setup simulator
        console.log("yes in")
        checkBluetoothState()
      } else {
        // Permission denied, handle this case in your app
        console.log("Bluetooth permission denied on Android");
      }
  };

    // Function to check Bluetooth state
    const checkBluetoothState = async () => {
      console.log("getting here")
      BleAdvertiser.enableAdapter()
      setupSimulator()
    };

  // Function to set up the simulator as a BLE peripheral
  const setupSimulator = async () => {
    BleAdvertiser.setCompanyId(0x004C);
    const broadcastOptions = {
      interval: 100, // Advertisement interval in milliseconds
      txPowerLevel: 0, // Transmit power level
      includeName: true, // Whether to include the device name in the advertisement
      includeTxPowerLevel: true, // Whether to include the transmit power level in the advertisement
      customData: [1, 2, 3], // Custom data to include in the advertisement (an array of numbers)
    };
    Ble.start()
    console.log("logs here")
    // BleAdvertiser.broadcast(SERVICE_UUID, [12], broadcastOptions)

    BleAdvertiser.broadcast(SERVICE_UUID, [], broadcastOptions) // The service UUID and additional manufacturer data. 
    .then(success => console.log('Broadcasting Successful', success))
    .catch(error => console.log('Broadcasting Error', error));
  };

  return <>
    
  </>; 
};
export default BLESimulator;
