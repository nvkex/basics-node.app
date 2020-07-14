const url = require('url');

const myUrl = new URL('http://duckduckgo/search?q=hello+world');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain and port)
console.log(myUrl.host);

// Hostname (root domain)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// add Params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
