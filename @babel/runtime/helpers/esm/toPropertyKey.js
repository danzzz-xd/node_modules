import _typeof from "@babel/runtime/helpers/typeof";
import toPrimitive from "./toPrimitive.js";
export default function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}