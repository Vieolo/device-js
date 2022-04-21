export enum DevicePointer {
    /** The device only uses touch as the input method */
    touch = "touch",
    /** The device only uses mouse and keyboard as the input method */
    mouse = "mouse",
    /** The device has a touch screen but also uses mouse and keyboard */
    hybrid = "hybrid"
}

export enum DeviceSizeCategory {
    mobile = "mobile",
    tablet = "tablet",
    laptop = "laptop",
    desktop = "desktop",
}

export enum DeviceSize {
    smallMobile = "small mobile",
    mobile = "mobile",
    tablet10 = "tablet10",
    tablet11 = "tablet11",
    /** The distinction between the 13 inch laptop and tablets are their pointer type */
    tablet13 = "tablet13",
    /** The distinction between the 13 inch laptop and tablets are their pointer type */
    laptop13 = "laptop13",
    laptop15 = "laptop15",
    desktop = "desktop",
}

export enum DeviceOrientation {
    landscape = 'landscape',
    portrait = 'portrait',
}

export enum DeviceColorTheme {
    dark = 'dark',
    light = "light"
}

export enum DeviceOS {
    macos = "MacOS",
    ios = "iOS",
    ipados = 'iPadOS',
    /** The distiction between an Android mobile and tablet is made only based on their size */
    android = 'Android',
    windows = 'Windows',
    linux = 'Linux',
    unknown = "Unknown"
}

export default class Device {

    static desktopBreakPoint = 1900;
    static laptop15BreakPoint = 1550;
    static laptop13BreakPoint = 1400;
    static tablet13LandscapeBreakPoint = 1400;
    static tablet11LandscapeBreakPoint = 1200;
    static tablet10LandscapeBreakPoint = 1050;
    // static tablet13PortraitBreakPoint = 1050;
    // static tablet11PortraitBreakPoint = 900;
    // static tablet10PortraitBreakPoint = 800;
    static mobileBreakPoint = 700;
    static mobileSmallBreakPoint = 375;
    
    /** The inner width of the device */
    static width = window.innerWidth;
    
    /** The inner width of the device */
    static height = window.innerHeight;

    static isTouchOnlyDevice = "ontouchstart" in window && window.matchMedia("(pointer: coarse)").matches && !window.matchMedia("(pointer: fine)").matches;
    static isMouseOnlyDevice = !window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(pointer: fine)").matches;
    static isBothTouchAndMouse = window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(pointer: fine)").matches;
    static pointerType: DevicePointer = Device.isTouchOnlyDevice ? DevicePointer.touch : Device.isMouseOnlyDevice ? DevicePointer.mouse : DevicePointer.hybrid;

    /**
     * returns the size category of the device
     * As an example, both a 7 inches and 13 inch tablets are considered to be tablets
     * @returns DeviceSizeCategory
     */
    static sizeCategory() : DeviceSizeCategory {
        if (Device.width <= Device.mobileBreakPoint) return DeviceSizeCategory.mobile;
        else if (Device.width <= Device.tablet11LandscapeBreakPoint) return DeviceSizeCategory.tablet;
        else if (Device.width <= Device.laptop15BreakPoint) {
            if (Device.isTouchOnlyDevice) return DeviceSizeCategory.tablet
            else return DeviceSizeCategory.laptop;
        }
        else return DeviceSizeCategory.desktop;
    }

    static size() : DeviceSize {
        if (Device.width <= Device.mobileSmallBreakPoint) return DeviceSize.smallMobile;
        else if (Device.width <= Device.mobileBreakPoint) return DeviceSize.mobile;
        else if (Device.width <= Device.tablet10LandscapeBreakPoint) return DeviceSize.tablet10;
        else if (Device.width <= Device.tablet11LandscapeBreakPoint) return DeviceSize.tablet11;
        else if (Device.width <= Device.tablet13LandscapeBreakPoint) {
            if (Device.isTouchOnlyDevice) return DeviceSize.tablet13;
            else return DeviceSize.laptop13
        }
        else if (Device.width <= Device.laptop15BreakPoint) return DeviceSize.laptop15;
        else return DeviceSize.desktop;
    }

    static orientation : DeviceOrientation = window.matchMedia("(orientation: portrait)").matches ? DeviceOrientation.portrait : DeviceOrientation.landscape;

    static colorTheme: DeviceColorTheme = window.matchMedia('(prefers-color-scheme: dark)') ? DeviceColorTheme.dark : DeviceColorTheme.light;

    /**
     * Detects the OS of the user using the User Agent.
     * Even though the result of this function is accurate in many cases, the result
     * cannot be guaranteed. Use this function only when necessary.
     * @returns DeviceOS
     */
    static os() : DeviceOS {
        let ua = (window.navigator.userAgent.split("(")[1] || "").split(")")[0];
        if (ua.includes("iPhone")) return DeviceOS.ios;
        else if (ua.includes("iPad")) return DeviceOS.ipados;
        else if (ua.includes("Mac OS")) {
            // Chrome on iPad mentions "iPad" in ua but Safari on iPad only mentions "Mac OS"
            if (Device.isTouchOnlyDevice) return DeviceOS.ipados;
            else return DeviceOS.macos
        }
        else if (ua.includes("Android")) return DeviceOS.android
        else if (ua.includes("Win")) return DeviceOS.windows;
        else if (ua.includes("Linux")) return DeviceOS.linux;
        else return DeviceOS.unknown;
    }

    /**
     * This function is an extension of `os()` function which tells you if the device
     * you're using is an Apple device (iPhone, iPad, Mac) or not.
     * The distiction between a MacBook or iMac can only be made by size
     * @returns boolean
     */
    static isAnAppleDevice() {
        return [DeviceOS.ios, DeviceOS.ipados, DeviceOS.macos].includes(Device.os())
    }
}