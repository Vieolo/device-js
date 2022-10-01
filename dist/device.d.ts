export declare enum DevicePointer {
    /** The device only uses touch as the input method */
    touch = "touch",
    /** The device only uses mouse and keyboard as the input method */
    mouse = "mouse",
    /** The device has a touch screen but also uses mouse and keyboard */
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
    /** The distinction between the 13 inch laptop and tablets are their pointer type */
    tablet13 = "tablet13",
    /** The distinction between the 13 inch laptop and tablets are their pointer type */
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
    /** The distiction between an Android mobile and tablet is made only based on their size */
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
    /** The inner width of the device */
    static width: number;
    /** The inner width of the device */
    static height: number;
    static isTouchOnlyDevice: boolean;
    static isMouseOnlyDevice: boolean;
    static isBothTouchAndMouse: boolean;
    static pointerType: DevicePointer;
    /**
     * returns the size category of the device
     * As an example, both a 7 inches and 13 inch tablets are considered to be tablets
     * @returns DeviceSizeCategory
     */
    static sizeCategory(): DeviceSizeCategory;
    static size(): DeviceSize;
    static orientation: DeviceOrientation;
    static colorTheme: DeviceColorTheme;
    /**
     * Detects the OS of the user using the User Agent.
     * Even though the result of this function is accurate in many cases, the result
     * cannot be guaranteed. Use this function only when necessary.
     * @returns DeviceOS
     */
    static os(): DeviceOS;
    /**
     * This function is an extension of `os()` function which tells you if the device
     * you're using is an Apple device (iPhone, iPad, Mac) or not.
     * The distiction between a MacBook or iMac can only be made by size
     * @returns boolean
     */
    static isAnAppleDevice(): boolean;
}
