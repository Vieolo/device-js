[@vieolo/device-js](../README.md) / [Exports](../modules.md) / Browser

# Class: Browser

Providing utility functions for the browser

## Table of contents

### Constructors

- [constructor](Browser.md#constructor)

### Methods

- [changeHistoryState](Browser.md#changehistorystate)
- [deleteAllSearchParam](Browser.md#deleteallsearchparam)
- [deleteSearchParam](Browser.md#deletesearchparam)
- [getAllCookies](Browser.md#getallcookies)
- [getAllSearchParams](Browser.md#getallsearchparams)
- [getSearchParam](Browser.md#getsearchparam)
- [getSingleCookie](Browser.md#getsinglecookie)
- [hasSearchParam](Browser.md#hassearchparam)
- [pushHistoryState](Browser.md#pushhistorystate)
- [replaceHistoryState](Browser.md#replacehistorystate)
- [setBulkSearchParam](Browser.md#setbulksearchparam)
- [setCookie](Browser.md#setcookie)
- [setSearchParam](Browser.md#setsearchparam)
- [url](Browser.md#url)

## Constructors

### constructor

• **new Browser**()

## Methods

### changeHistoryState

▸ `Static` **changeHistoryState**(`url`, `stateChange?`): `void`

Either replace the location or push the given url to the history stack

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The new url to be set to the browser's location |
| `stateChange?` | `BrowserHistoryStateChange` | Whether to replace the url or push the new url onto the history stack |

#### Returns

`void`

#### Defined in

[browser.ts:106](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L106)

___

### deleteAllSearchParam

▸ `Static` **deleteAllSearchParam**(`stateChange?`): `void`

Deletes all of the search params

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stateChange?` | `BrowserHistoryStateChange` | Whether to replace the url or push the new url onto the history stack |

#### Returns

`void`

#### Defined in

[browser.ts:97](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L97)

___

### deleteSearchParam

▸ `Static` **deleteSearchParam**(`key`, `stateChange?`): `void`

Deletes a key-value pair from the search param

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to be deleted |
| `stateChange?` | `BrowserHistoryStateChange` | Whether to replace the url or push the new url onto the history stack |

#### Returns

`void`

#### Defined in

[browser.ts:86](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L86)

___

### getAllCookies

▸ `Static` **getAllCookies**(): `Object`

Retrieves all the cookies and restructure them into an object

#### Returns

`Object`

#### Defined in

[browser.ts:150](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L150)

___

### getAllSearchParams

▸ `Static` **getAllSearchParams**(): `Object`

Converts the search params into an object

#### Returns

`Object`

#### Defined in

[browser.ts:46](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L46)

___

### getSearchParam

▸ `Static` **getSearchParam**(`target`, `defaultValue?`): ``null`` \| `string`

Retrieves the value of a key from the search params.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `string` | The key to be retrieved |
| `defaultValue?` | `string` \| `number` | The value to be inserted into the url (and returned) if the target key is not present |

#### Returns

``null`` \| `string`

#### Defined in

[browser.ts:36](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L36)

___

### getSingleCookie

▸ `Static` **getSingleCookie**(`name`): `undefined` \| `string`

Attempts to get a specific cookie. If not present, `undefined` is returned

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The key of the cookie to be retrieved |

#### Returns

`undefined` \| `string`

#### Defined in

[browser.ts:164](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L164)

___

### hasSearchParam

▸ `Static` **hasSearchParam**(`target`): `boolean`

Checks whether the browser's search params has the given key or not

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `string` | The key to be searched for in the URL |

#### Returns

`boolean`

#### Defined in

[browser.ts:26](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L26)

___

### pushHistoryState

▸ `Static` **pushHistoryState**(`url`): `void`

Pushes the new URL to the browser's history stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The new URL |

#### Returns

`void`

#### Defined in

[browser.ts:118](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L118)

___

### replaceHistoryState

▸ `Static` **replaceHistoryState**(`url`): `void`

Replaces the browser's location with the given url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The new URL |

#### Returns

`void`

#### Defined in

[browser.ts:126](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L126)

___

### setBulkSearchParam

▸ `Static` **setBulkSearchParam**(`data`, `stateChange?`): `void`

Sets multiple key-value pairs to the search param

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | The object of data to be added to url's search params. All the values will be converted to string |
| `stateChange?` | `BrowserHistoryStateChange` | Whether to replace the url or push the new url onto the history stack |

#### Returns

`void`

#### Defined in

[browser.ts:72](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L72)

___

### setCookie

▸ `Static` **setCookie**(`name`, `value`, `expiry`): `void`

Sets a cookie. To clear a cookie, pass the expiry as 0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the cookie |
| `value` | `string` | The value of the cookie |
| `expiry` | `number` | The validity of the cookie in ms |

#### Returns

`void`

#### Defined in

[browser.ts:139](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L139)

___

### setSearchParam

▸ `Static` **setSearchParam**(`key`, `value`, `stateChange?`): `void`

Sets a new seach param key-value pair

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the search param |
| `value` | `string` \| `number` | The value of the search param. This value will be converted to string |
| `stateChange?` | `BrowserHistoryStateChange` | Whether to replace the url or push the new url onto the history stack |

#### Returns

`void`

#### Defined in

[browser.ts:60](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L60)

___

### url

▸ `Static` **url**(): `URL`

Converts the browser's location to a URL object

#### Returns

`URL`

URL

#### Defined in

[browser.ts:17](https://github.com/Vieolo/device-js/blob/3951077/src/browser.ts#L17)
