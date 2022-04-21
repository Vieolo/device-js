export enum DevicePointer {
    touch = "touch",
    mouse = "mouse",
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
    tablet13 = "tablet13",
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
    
    static width = window.innerWidth;
    static height = window.innerHeight;

    static isTouchOnlyDevice = "ontouchstart" in window && window.matchMedia("(pointer: coarse)").matches && !window.matchMedia("(pointer: fine)").matches;
    static isMouseOnlyDevice = !window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(pointer: fine)").matches;
    static isBothTouchAndMouse = window.matchMedia("(pointer: coarse)").matches && window.matchMedia("(pointer: fine)").matches;
    static pointerType: DevicePointer = Device.isTouchOnlyDevice ? DevicePointer.touch : Device.isMouseOnlyDevice ? DevicePointer.mouse : DevicePointer.hybrid;


    static sizeCategory() : DeviceSizeCategory {
        if (Device.width <= Device.mobileBreakPoint) return DeviceSizeCategory.mobile;
        else if (Device.width <= Device.tablet11LandscapeBreakPoint) return DeviceSizeCategory.tablet;
        else if (Device.width <= Device.laptop15BreakPoint) return DeviceSizeCategory.laptop;
        else return DeviceSizeCategory.desktop;
    }

    static size() : DeviceSize {
        if (Device.width <= Device.mobileSmallBreakPoint) return DeviceSize.smallMobile;
        else if (Device.width <= Device.mobileBreakPoint) return DeviceSize.mobile;
        else if (Device.width <= Device.tablet10LandscapeBreakPoint) return DeviceSize.tablet10;
        else if (Device.width <= Device.tablet11LandscapeBreakPoint) return DeviceSize.tablet11;
        else if (Device.width <= Device.tablet13LandscapeBreakPoint) {
            if (Device.isTouchOnlyDevice) return DeviceSize.smallMobile;
            else return DeviceSize.laptop13
        }
        else if (Device.width <= Device.laptop15BreakPoint) return DeviceSize.laptop15;
        else return DeviceSize.desktop;
    }

    static orientation : DeviceOrientation = window.matchMedia("(orientation: portrait)").matches ? DeviceOrientation.portrait : DeviceOrientation.landscape;

    static colorTheme: DeviceColorTheme = window.matchMedia('(prefers-color-scheme: dark)') ? DeviceColorTheme.dark : DeviceColorTheme.light;

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

    static isAnAppleDevice() {
        return [DeviceOS.ios, DeviceOS.ipados, DeviceOS.macos].includes(Device.os())
    }
}