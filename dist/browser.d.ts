export declare type BrowserHistoryStateChange = 
/** Replacing the browser's location does not affect the history */
"replace" | 
/** Pushing a url to the browser's location will add to the history stack. If the user presses the browser's back button, the browser goes back to the previous url */
"push";
/**
 * Providing utility functions for the browser
 */
export default class Browser {
    /**
     * Converts the browser's location to a URL object
     * @returns URL
     */
    static url(): URL;
    /**
     * Checks whether the browser's search params has the given key or not
     * @param target The key to be searched for in the URL
     */
    static hasSearchParam(target: string): boolean;
    /**
     * Retrieves the value of a key from the search params.
     * @param target The key to be retrieved
     * @param defaultValue The value to be inserted into the url (and returned) if the target key is not present
     */
    static getSearchParam(target: string, defaultValue?: string | number): string | null;
    /**
     * Converts the search params into an object
     */
    static getAllSearchParams(): {
        [key: string]: string;
    };
    /**
     * Sets a new seach param key-value pair
     * @param key The key of the search param
     * @param value The value of the search param. This value will be converted to string
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static setSearchParam(key: string, value: string | number, stateChange?: BrowserHistoryStateChange): void;
    /**
     * Sets multiple key-value pairs to the search param
     * @param data The object of data to be added to url's search params. All the values will be converted to string
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static setBulkSearchParam(data: {
        [key: string]: string | number;
    }, stateChange?: BrowserHistoryStateChange): void;
    /**
     * Deletes a key-value pair from the search param
     * @param key The key to be deleted
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static deleteSearchParam(key: string, stateChange?: BrowserHistoryStateChange): void;
    /**
     * Deletes all of the search params
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static deleteAllSearchParam(stateChange?: BrowserHistoryStateChange): void;
    /**
     * Either replace the location or push the given url to the history stack
     * @param url The new url to be set to the browser's location
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static changeHistoryState(url: string, stateChange?: BrowserHistoryStateChange): void;
    /**
     * Pushes the new URL to the browser's history stack.
     * @param url The new URL
     */
    static pushHistoryState(url: string): void;
    /**
     * Replaces the browser's location with the given url
     * @param url The new URL
     */
    static replaceHistoryState(url: string): void;
}
