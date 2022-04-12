export declare enum DevicePointer {
    touch = "touch",
    mouse = "mouse",
    hybrid = "hybrid"
}
export declare enum DeviceSizeCategory {
    mobile = "mobile",
    tablet = "tablet",
    laptop = "laptop",
    desktop = "desktop"
}
export declare enum DeviceSize {
    smallMobile = "small mobile",
    mobile = "mobile",
    tablet10 = "tablet10",
    tablet11 = "tablet11",
    tablet13 = "tablet13",
    laptop13 = "laptop13",
    laptop15 = "laptop15",
    desktop = "desktop"
}
export declare enum DeviceOrientation {
    landscape = "landscape",
    portrait = "portrait"
}
export declare enum DeviceColorTheme {
    dark = "dark",
    light = "light"
}
export declare enum DeviceOS {
    macos = "MacOS",
    ios = "iOS",
    ipados = "iPadOS",
    android = "Android",
    windows = "Windows",
    linux = "Linux",
    unknown = "Unknown"
}
export default class Device {
    static desktopBreakPoint: number;
    static laptop15BreakPoint: number;
    static laptop13BreakPoint: number;
    static tablet13LandscapeBreakPoint: number;
    static tablet11LandscapeBreakPoint: number;
    static tablet10LandscapeBreakPoint: number;
    static mobileBreakPoint: number;
    static mobileSmallBreakPoint: number;
    static width: number;
    static height: number;
    static isTouchOnlyDevice: boolean;
    static isMouseOnlyDevice: boolean;
    static isBothTouchAndMouse: boolean;
    static pointerType: DevicePointer;
    static sizeCategory(): DeviceSizeCategory;
    static size(): DeviceSize;
    static orientation: DeviceOrientation;
    static colorTheme: DeviceColorTheme;
    static os(): DeviceOS;
}
