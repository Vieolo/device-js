[@vieolo/device-js](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [colorTheme](default.md#colortheme)
- [desktopBreakPoint](default.md#desktopbreakpoint)
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

### Methods

- [height](default.md#height)
- [isAnAppleDevice](default.md#isanappledevice)
- [os](default.md#os)
- [size](default.md#size)
- [sizeCategory](default.md#sizecategory)
- [width](default.md#width)

## Constructors

### constructor

• **new default**()

## Properties

### colorTheme

▪ `Static` **colorTheme**: [`DeviceColorTheme`](../enums/DeviceColorTheme.md)

#### Defined in

[device.ts:112](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L112)

___

### desktopBreakPoint

▪ `Static` **desktopBreakPoint**: `number` = `1900`

#### Defined in

[device.ts:53](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L53)

___

### isBothTouchAndMouse

▪ `Static` **isBothTouchAndMouse**: `boolean`

#### Defined in

[device.ts:77](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L77)

___

### isMouseOnlyDevice

▪ `Static` **isMouseOnlyDevice**: `boolean`

#### Defined in

[device.ts:76](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L76)

___

### isTouchOnlyDevice

▪ `Static` **isTouchOnlyDevice**: `boolean`

#### Defined in

[device.ts:75](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L75)

___

### laptop13BreakPoint

▪ `Static` **laptop13BreakPoint**: `number` = `1400`

#### Defined in

[device.ts:55](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L55)

___

### laptop15BreakPoint

▪ `Static` **laptop15BreakPoint**: `number` = `1550`

#### Defined in

[device.ts:54](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L54)

___

### mobileBreakPoint

▪ `Static` **mobileBreakPoint**: `number` = `700`

#### Defined in

[device.ts:62](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L62)

___

### mobileSmallBreakPoint

▪ `Static` **mobileSmallBreakPoint**: `number` = `375`

#### Defined in

[device.ts:63](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L63)

___

### orientation

▪ `Static` **orientation**: [`DeviceOrientation`](../enums/DeviceOrientation.md)

#### Defined in

[device.ts:110](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L110)

___

### pointerType

▪ `Static` **pointerType**: [`DevicePointer`](../enums/DevicePointer.md)

#### Defined in

[device.ts:78](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L78)

___

### tablet10LandscapeBreakPoint

▪ `Static` **tablet10LandscapeBreakPoint**: `number` = `1050`

#### Defined in

[device.ts:58](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L58)

___

### tablet11LandscapeBreakPoint

▪ `Static` **tablet11LandscapeBreakPoint**: `number` = `1200`

#### Defined in

[device.ts:57](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L57)

___

### tablet13LandscapeBreakPoint

▪ `Static` **tablet13LandscapeBreakPoint**: `number` = `1400`

#### Defined in

[device.ts:56](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L56)

## Methods

### height

▸ `Static` **height**(): `number`

The inner width of the device

#### Returns

`number`

#### Defined in

[device.ts:71](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L71)

___

### isAnAppleDevice

▸ `Static` **isAnAppleDevice**(): `boolean`

This function is an extension of `os()` function which tells you if the device
you're using is an Apple device (iPhone, iPad, Mac) or not.
The distiction between a MacBook or iMac can only be made by size

#### Returns

`boolean`

boolean

#### Defined in

[device.ts:143](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L143)

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

[device.ts:120](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L120)

___

### size

▸ `Static` **size**(): [`DeviceSize`](../enums/DeviceSize.md)

#### Returns

[`DeviceSize`](../enums/DeviceSize.md)

#### Defined in

[device.ts:96](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L96)

___

### sizeCategory

▸ `Static` **sizeCategory**(): [`DeviceSizeCategory`](../enums/DeviceSizeCategory.md)

returns the size category of the device
As an example, both a 7 inches and 13 inch tablets are considered to be tablets

#### Returns

[`DeviceSizeCategory`](../enums/DeviceSizeCategory.md)

DeviceSizeCategory

#### Defined in

[device.ts:85](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L85)

___

### width

▸ `Static` **width**(): `number`

The inner width of the device

#### Returns

`number`

#### Defined in

[device.ts:66](https://github.com/Vieolo/device-js/blob/3951077/src/device.ts#L66)
