# A Simple URL Parser

A simple URL parsing library for Node.js.

## Installation

```bash
npm install https://github.com/asgard-dev/a-simple-url-parser
```

## Usage Example

```javascript
const URLParser = require('a-simple-urll-parser');
const parser = new URLParser('https://www.example.com/path?query=123#hash');

console.log(parser.getProtocol()); // Outputs: https
console.log(parser.getHostname()); // Outputs: www.example.com
console.log(parser.getPathname()); // Outputs: /path
console.log(parser.getSearchParams()); // Outputs: { query: '123' }
console.log(parser.getHash()); // Outputs: #hash
```
