[@vieolo/device-js](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [colorTheme](default.md#colortheme)
- [desktopBreakPoint](default.md#desktopbreakpoint)
- [height](default.md#height)
- [isBothTouchAndMouse](default.md#isbothtouchandmouse)
- [isMouseOnlyDevice](default.md#ismouseonlydevice)
- [isTouchOnlyDevice](default.md#istouchonlydevice)
- [laptop13BreakPoint](default.md#laptop13breakpoint)
- [laptop15BreakPoint](default.md#laptop15breakpoint)
- [mobileBreakPoint](default.md#mobilebreakpoint)
- [mobileSmallBreakPoint](default.md#mobilesmallbreakpoint)
- [orientation](default.md#orientation)
- [pointerType](default.md#pointertype)
- [tablet10LandscapeBreakPoint](default.md#tablet10landscapebreakpoint)
- [tablet11LandscapeBreakPoint](default.md#tablet11landscapebreakpoint)
- [tablet13LandscapeBreakPoint](default.md#tablet13landscapebreakpoint)
- [width](default.md#width)

### Methods

- [isAnAppleDevice](default.md#isanappledevice)
- [os](default.md#os)
- [size](default.md#size)
- [sizeCategory](default.md#sizecategory)

## Constructors

### constructor

• **new default**()

## Properties

### colorTheme

▪ `Static` **colorTheme**: [`DeviceColorTheme`](../enums/DeviceColorTheme.md)

#### Defined in

[index.ts:106](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L106)

___

### desktopBreakPoint

▪ `Static` **desktopBreakPoint**: `number` = `1900`

#### Defined in

[index.ts:53](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L53)

___

### height

▪ `Static` **height**: `number` = `window.innerHeight`

The inner width of the device

#### Defined in

[index.ts:69](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L69)

___

### isBothTouchAndMouse

▪ `Static` **isBothTouchAndMouse**: `boolean`

#### Defined in

[index.ts:73](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L73)

___

### isMouseOnlyDevice

▪ `Static` **isMouseOnlyDevice**: `boolean`

#### Defined in

[index.ts:72](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L72)

___

### isTouchOnlyDevice

▪ `Static` **isTouchOnlyDevice**: `boolean`

#### Defined in

[index.ts:71](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L71)

___

### laptop13BreakPoint

▪ `Static` **laptop13BreakPoint**: `number` = `1400`

#### Defined in

[index.ts:55](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L55)

___

### laptop15BreakPoint

▪ `Static` **laptop15BreakPoint**: `number` = `1550`

#### Defined in

[index.ts:54](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L54)

___

### mobileBreakPoint

▪ `Static` **mobileBreakPoint**: `number` = `700`

#### Defined in

[index.ts:62](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L62)

___

### mobileSmallBreakPoint

▪ `Static` **mobileSmallBreakPoint**: `number` = `375`

#### Defined in

[index.ts:63](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L63)

___

### orientation

▪ `Static` **orientation**: [`DeviceOrientation`](../enums/DeviceOrientation.md)

#### Defined in

[index.ts:104](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L104)

___

### pointerType

▪ `Static` **pointerType**: [`DevicePointer`](../enums/DevicePointer.md)

#### Defined in

[index.ts:74](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L74)

___

### tablet10LandscapeBreakPoint

▪ `Static` **tablet10LandscapeBreakPoint**: `number` = `1050`

#### Defined in

[index.ts:58](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L58)

___

### tablet11LandscapeBreakPoint

▪ `Static` **tablet11LandscapeBreakPoint**: `number` = `1200`

#### Defined in

[index.ts:57](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L57)

___

### tablet13LandscapeBreakPoint

▪ `Static` **tablet13LandscapeBreakPoint**: `number` = `1400`

#### Defined in

[index.ts:56](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L56)

___

### width

▪ `Static` **width**: `number` = `window.innerWidth`

The inner width of the device

#### Defined in

[index.ts:66](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L66)

## Methods

### isAnAppleDevice

▸ `Static` **isAnAppleDevice**(): `boolean`

This function is an extension of `os()` function which tells you if the device
you're using is an Apple device (iPhone, iPad, Mac) or not.
The distiction between a MacBook or iMac can only be made by size

#### Returns

`boolean`

boolean

#### Defined in

[index.ts:135](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L135)

___

### os

▸ `Static` **os**(): [`DeviceOS`](../enums/DeviceOS.md)

Detects the OS of the user using the User Agent.
Even though the result of this function is accurate in many cases, the result
cannot be guaranteed. Use this function only when necessary.

#### Returns

[`DeviceOS`](../enums/DeviceOS.md)

DeviceOS

#### Defined in

[index.ts:114](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L114)

___

### size

▸ `Static` **size**(): [`DeviceSize`](../enums/DeviceSize.md)

#### Returns

[`DeviceSize`](../enums/DeviceSize.md)

#### Defined in

[index.ts:91](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L91)

___

### sizeCategory

▸ `Static` **sizeCategory**(): [`DeviceSizeCategory`](../enums/DeviceSizeCategory.md)

returns the size category of the device
As an example, both a 7 inches and 13 inch tablets are considered to be tablets

#### Returns

[`DeviceSizeCategory`](../enums/DeviceSizeCategory.md)

DeviceSizeCategory

#### Defined in

[index.ts:81](https://github.com/Vieolo/device-js/blob/ded6b89/src/index.ts#L81)
