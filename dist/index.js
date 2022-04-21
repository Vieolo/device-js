export var DevicePointer;
(function (DevicePointer) {
    /** The device only uses touch as the input method */
    DevicePointer["touch"] = "touch";
    /** The device only uses mouse and keyboard as the input method */
    DevicePointer["mouse"] = "mouse";
    /** The device has a touch screen but also uses mouse and keyboard */
    DevicePointer["hybrid"] = "hybrid";
})(DevicePointer || (DevicePointer = {}));
export var DeviceSizeCategory;
(function (DeviceSizeCategory) {
    DeviceSizeCategory["mobile"] = "mobile";
    DeviceSizeCategory["tablet"] = "tablet";
    DeviceSizeCategory["laptop"] = "laptop";
    DeviceSizeCategory["desktop"] = "desktop";
})(DeviceSizeCategory || (DeviceSizeCategory = {}));
export var DeviceSize;
(function (DeviceSize) {
    DeviceSize["smallMobile"] = "small mobile";
    DeviceSize["mobile"] = "mobile";
    DeviceSize["tablet10"] = "tablet10";
    DeviceSize["tablet11"] = "tablet11";
    /** The distinction between the 13 inch laptop and tablets are their pointer type */
    DeviceSize["tablet13"] = "tablet13";
    /** The distinction between the 13 inch laptop and tablets are their pointer type */
    DeviceSize["laptop13"] = "laptop13";
    DeviceSize["laptop15"] = "laptop15";
    DeviceSize["desktop"] = "desktop";
})(DeviceSize || (DeviceSize = {}));
export var DeviceOrientation;
(function (DeviceOrientation) {
    DeviceOrientation["landscape"] = "landscape";
    DeviceOrientation["portrait"] = "portrait";
})(DeviceOrientation || (DeviceOrientation = {}));
export var DeviceColorTheme;
(function (DeviceColorTheme) {
    DeviceColorTheme["dark"] = "dark";
    DeviceColorTheme["light"] = "light";
})(DeviceColorTheme || (DeviceColorTheme = {}));
export var DeviceOS;
(function (DeviceOS) {
    DeviceOS["macos"] = "MacOS";
    DeviceOS["ios"] = "iOS";
    DeviceOS["ipados"] = "iPadOS";
    /** The distiction between an Android mobile and tablet is made only based on their size */
    DeviceOS["android"] = "Android";
    DeviceOS["windows"] = "Windows";
    DeviceOS["linux"] = "Linux";
    DeviceOS["unknown"] = "Unknown";
})(DeviceOS || (DeviceOS = {}));
export default class Device {
    /**
     * returns the size category of the device
     * As an example, both a 7 inches and 13 inch tablets are considered to be tablets
     * @returns DeviceSizeCategory
     */
    static sizeCategory() {
        if (Device.width <= Device.mobileBreakPoint)
            return DeviceSizeCategory.mobile;
        else if (Device.width <= Device.tablet11LandscapeBreakPoint)
            return DeviceSizeCategory.tablet;
        else if (Device.width <= Device.laptop15BreakPoint) {
            if (Device.isTouchOnlyDevice)
                return DeviceSizeCategory.tablet;
            else
                return DeviceSizeCategory.laptop;
        }
        else
            return DeviceSizeCategory.desktop;
    }
    static size() {
        if (Device.width <= Device.mobileSmallBreakPoint)
            return DeviceSize.smallMobile;
        else if (Device.width <= Device.mobileBreakPoint)
            return DeviceSize.mobile;
        else if (Device.width <= Device.tablet10LandscapeBreakPoint)
            return DeviceSize.tablet10;
        else if (Device.width <= Device.tablet11LandscapeBreakPoint)
            return DeviceSize.tablet11;
        else if (Device.width <= Device.tablet13LandscapeBreakPoint) {
            if (Device.isTouchOnlyDevice)
                return DeviceSize.tablet13;
            else
                return DeviceSize.laptop13;
        }
        else if (Device.width <= Device.laptop15BreakPoint)
            return DeviceSize.laptop15;
        else
            return DeviceSize.desktop;
    }
    /**
     * Detects the OS of the user using the User Agent.
     * Even though the result of this function is accurate in many cases, the result
     * cannot be guaranteed. Use this function only when necessary.
     * @returns DeviceOS
     */
    static os() {
        let ua = (window.navigator.userAgent.split("(")[1] || "").split(")")[0];
        if (ua.includes("iPhone"))
            return DeviceOS.ios;
        else if (ua.includes("iPad"))
            return DeviceOS.ipados;
        else if (ua.includes("Mac OS")) {
            // Chrome on iPad mentions "iPad" in ua but Safari on iPad only mentions "Mac OS"
            if (Device.isTouchOnlyDevice)
                return DeviceOS.ipados;
            else
                return DeviceOS.macos;
        }
        else if (ua.includes("Android"))
            return DeviceOS.android;
        else if (ua.includes("Win"))
            return DeviceOS.windows;
        else if (ua.includes("Linux"))
            return DeviceOS.linux;
        else
            return DeviceOS.unknown;
    }
    /**
     * This function is an extension of `os()` function which tells you if the device
     * you're using is an Apple device (iPhone, iPad, Mac) or not.
     * The distiction between a MacBook or iMac can only be made by size
     * @returns boolean
     */
    static isAnAppleDevice() {
        return [DeviceOS.ios, DeviceOS.ipados, DeviceOS.macos].includes(Device.os());
    }
}
Device.desktopBreakPoint = 1900;
Device.laptop15BreakPoint = 1550;
Device.laptop13BreakPoint = 1400;
Device.tablet13LandscapeBreakPoint = 1400;
Device.tablet11LandscapeBreakPoint = 1200;
Device.tablet10LandscapeBreakPoint = 1050;
// static tablet13PortraitBreakPoint = 1050;
// static tablet11PortraitBreakPoint = 900;
// static tablet10PortraitBreakPoint = 800;
Device.mobileBreakPoint = 700;
Device.mobileSmallBreakPoint = 375;
/** The inner width of the device */
Device.width = window.innerWidth;
/** The inner width of the device */
Device.height = window.innerHeight;
Device.isTouchOnlyDevice = "ontouchstart" in window && window.matchMedia("(pointer: coarse)").matches && !window.matchMedia("(pointer: fine)").matches;
Device.isMouseOnlyDevice = !window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(pointer: fine)").matches;
Device.isBothTouchAndMouse = window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(pointer: fine)").matches;
Device.pointerType = Device.isTouchOnlyDevice ? DevicePointer.touch : Device.isMouseOnlyDevice ? DevicePointer.mouse : DevicePointer.hybrid;
Device.orientation = window.matchMedia("(orientation: portrait)").matches ? DeviceOrientation.portrait : DeviceOrientation.landscape;
Device.colorTheme = window.matchMedia('(prefers-color-scheme: dark)') ? DeviceColorTheme.dark : DeviceColorTheme.light;
