import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL Object
const urlObj = new URL(urlString);
// console.log(urlObj);

// format()
// console.log(url.format(urlObj));

// import.meta.url
// console.log(import.meta.url);

// fileUrlToPath()
// console.log(url.fileURLToPath(import.meta.url));

// console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search)
console.log(params.get('q'));
params.append('w' , 'main');
params.delete('q')
console.log(params);