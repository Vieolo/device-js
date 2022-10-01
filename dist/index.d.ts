import Device, { DeviceColorTheme, DeviceOS, DeviceOrientation, DevicePointer, DeviceSize, DeviceSizeCategory } from './device';
import Browser, { BrowserHistoryStateChange as BrowserHistoryStateChangeTemp } from './browser';
export default Device;
export { Browser, DeviceColorTheme, DeviceOS, DeviceOrientation, DevicePointer, DeviceSize, DeviceSizeCategory, };
export declare type BrowserHistoryStateChange = BrowserHistoryStateChangeTemp;
