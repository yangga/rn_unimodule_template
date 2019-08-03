import _ from 'lodash'
import ExpoConstants from 'expo-constants';
import DeviceInfo from 'react-native-device-info'
import VersionNumber from 'react-native-version-number'

// 순수 expo 대신 unimodule을 사용함에따라 몇몇 상수가 사라짐. 따로 넣어줌.
const CustomConstants = {
    appOwnership: 'standalone',
    deviceId: DeviceInfo.getUniqueID(),
    deviceLocale: DeviceInfo.getDeviceLocale(),
    deviceName: DeviceInfo.getDeviceName(),
    deviceUniqueID: DeviceInfo.getUniqueID(),
    isDevice: !DeviceInfo.isEmulator(),
    manifest: Object.assign({}, 
        require('../../app.json').manifest, 
        {
            version: VersionNumber.appVersion
        }),
}

export default _.merge({}, ExpoConstants, CustomConstants)
