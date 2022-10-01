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
- [getAllSearchParams](Browser.md#getallsearchparams)
- [getSearchParam](Browser.md#getsearchparam)
- [hasSearchParam](Browser.md#hassearchparam)
- [pushHistoryState](Browser.md#pushhistorystate)
- [replaceHistoryState](Browser.md#replacehistorystate)
- [setBulkSearchParam](Browser.md#setbulksearchparam)
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

[browser.ts:104](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L104)

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

[browser.ts:95](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L95)

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

[browser.ts:84](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L84)

___

### getAllSearchParams

▸ `Static` **getAllSearchParams**(): `Object`

Converts the search params into an object

#### Returns

`Object`

#### Defined in

[browser.ts:44](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L44)

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

[browser.ts:34](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L34)

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

[browser.ts:25](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L25)

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

[browser.ts:116](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L116)

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

[browser.ts:124](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L124)

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

[browser.ts:70](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L70)

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

[browser.ts:58](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L58)

___

### url

▸ `Static` **url**(): `URL`

Converts the browser's location to a URL object

#### Returns

`URL`

URL

#### Defined in

[browser.ts:17](https://github.com/Vieolo/device-js/blob/8374194/src/browser.ts#L17)
