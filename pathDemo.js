import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = "./dir1/dir2/msg.txt";

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

const filePath2 = path.join(__dirname, "dir1", "dir2", "msg.txt");
console.log(filePath2);