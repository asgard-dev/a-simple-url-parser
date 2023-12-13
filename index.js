class URLParser {
    constructor(url) {
        this.url = new URL(url);
    }

    getProtocol() {
        return this.url.protocol;
    }

    getHostname() {
        return this.url.hostname;
    }

    getPathname() {
        return this.url.pathname;
    }

    getSearchParams() {
        return Array.from(this.url.searchParams).reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
        }, {});
    }

    getHash() {
        return this.url.hash;
    }
}

module.exports = URLParser;
