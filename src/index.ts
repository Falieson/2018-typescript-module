/** TS-Module w/ Declarations (Part 1/4)
  * http://TGRstack.com/#ts-module_articles_part-1
  * ./src/index.ts (Section 2. Figure 03.)
**/
import {default as HelloWorld} from './hello/HelloWorld'

const FirstPart: string = "Hi"
const LastPart: string = "Earth"

console.log(HelloWorld(FirstPart, LastPart))

export default HelloWorld