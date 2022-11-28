export type BrowserHistoryStateChange =
    /** Replacing the browser's location does not affect the history */
    "replace" |
    /** Pushing a url to the browser's location will add to the history stack. If the user presses the browser's back button, the browser goes back to the previous url */
    "push"


/**
 * Providing utility functions for the browser
 */
export default class Browser {

    /**
     * Converts the browser's location to a URL object
     * @returns URL
     */
    static url() {
        if (typeof window === 'undefined') return new URL("")
        return new URL(window.location.href)
    }

    /**
     * Checks whether the browser's search params has the given key or not
     * @param target The key to be searched for in the URL
     */
    static hasSearchParam(target: string) {
        if (typeof window === 'undefined') return false
        return Browser.url().searchParams.has(target)
    }

    /**
     * Retrieves the value of a key from the search params.
     * @param target The key to be retrieved
     * @param defaultValue The value to be inserted into the url (and returned) if the target key is not present
     */
    static getSearchParam(target: string, defaultValue?: string | number): string | null {
        if (!Browser.hasSearchParam(target) && defaultValue !== undefined) {
            Browser.setSearchParam(target, defaultValue.toString())
        }
        return Browser.url().searchParams.get(target)
    }

    /**
     * Converts the search params into an object
     */
    static getAllSearchParams(): { [key: string]: string } {
        let res: { [key: string]: string } = {}
        Browser.url().searchParams.forEach((v, k, parent) => {
            res[k] = v
        })
        return res
    }

    /**
     * Sets a new seach param key-value pair
     * @param key The key of the search param
     * @param value The value of the search param. This value will be converted to string
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static setSearchParam(key: string, value: string | number, stateChange?: BrowserHistoryStateChange) {
        let url = Browser.url()
        let sp = url.searchParams
        sp.set(key, value.toString());
        Browser.changeHistoryState(url.toString(), stateChange)
    }

    /**
     * Sets multiple key-value pairs to the search param
     * @param data The object of data to be added to url's search params. All the values will be converted to string
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static setBulkSearchParam(data: { [key: string]: string | number }, stateChange?: BrowserHistoryStateChange) {
        let url = Browser.url()
        let sp = url.searchParams
        Object.entries(data).forEach(e => {
            sp.set(e[0], e[1].toString())
        })
        Browser.changeHistoryState(url.toString(), stateChange)
    }

    /**
     * Deletes a key-value pair from the search param
     * @param key The key to be deleted
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static deleteSearchParam(key: string, stateChange?: BrowserHistoryStateChange) {
        let url = Browser.url()
        let sp = url.searchParams
        sp.delete(key);
        Browser.changeHistoryState(url.toString(), stateChange)
    }

    /**
     * Deletes all of the search params
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static deleteAllSearchParam(stateChange?: BrowserHistoryStateChange) {
        if (typeof window !== 'undefined') Browser.changeHistoryState(window.location.href.split("?")[0], stateChange)
    }

    /**
     * Either replace the location or push the given url to the history stack
     * @param url The new url to be set to the browser's location
     * @param stateChange Whether to replace the url or push the new url onto the history stack
     */
    static changeHistoryState(url: string, stateChange?: BrowserHistoryStateChange) {
        if (stateChange === 'push') {
            Browser.pushHistoryState(url.toString())
        } else {
            Browser.replaceHistoryState(url.toString())
        }
    }

    /**
     * Pushes the new URL to the browser's history stack.
     * @param url The new URL
     */
    static pushHistoryState(url: string) {
        if (typeof window !== 'undefined') window.history.pushState(null, "", url.toString())
    }

    /**
     * Replaces the browser's location with the given url
     * @param url The new URL
     */
    static replaceHistoryState(url: string) {
        if (typeof window !== 'undefined') window.history.replaceState(null, "", url.toString())
    }


    // Cookie Utils -------
    
    /**
     * Sets a cookie. To clear a cookie, pass the expiry as 0
     * @param name The name of the cookie
     * @param value The value of the cookie
     * @param expiry The validity of the cookie in ms
     */
    static setCookie(name: string, value: string, expiry: number) {
        var expires = "";
        var date = new Date();
        date.setTime(date.getTime() + expiry);
        expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    /**
     * Retrieves all the cookies and restructure them into an object     
     */
    static getAllCookies(): { [key: string]: string } {
        let cookiesArray = document.cookie.split(";");
        let cookies: { [key: string]: string } = {};
        for (let i = 0; i < cookiesArray.length; i++) {
            const c = cookiesArray[i].split("=");
            cookies[c[0].trim()] = c[1];
        }
        return cookies;
    }

    /**
     * Attempts to get a specific cookie. If not present, `undefined` is returned
     * @param name The key of the cookie to be retrieved
     */
    static getSingleCookie(name: string): string | undefined {
        return Browser.getAllCookies()[name]
    }
}