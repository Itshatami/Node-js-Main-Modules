// import fs from "fs";
import fs from "fs/promises";

// readFile() -callback
// fs.readFile("./msg.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - synchronous
// const data = fs.readFileSync('./msg.txt' , 'utf-8');
// console.log(data);

// readFile() - Promise
// fs.readFile("./msg.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - Async/await
// const readFile = async () => {
//   try {
//     const data = await fs.readFile("./msg.txt", "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// readFile()

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile("./msg.txt", "hiii");
    console.log("file written");
  } catch (err) {
    console.log(err);
  }
};
// writeFile()

//appendFile() 
const appendFile = async () => {
    try {
        await fs.appendFile('./msg.txt' , '\n dude become hero')
        console.log('file appended');
    } catch (error) {
        console.log(error);
    }
}
// appendFile();

