import Data from "./data.txt"
import styles from './index.less'

// console.log(styles)

// console.log(styles.toString())

const msgElement = document.querySelector("#message");
msgElement.innerText = Data;

const obj = { a: 1 }

const obj2 = { ...obj, b: 2 }

console.log(obj2)