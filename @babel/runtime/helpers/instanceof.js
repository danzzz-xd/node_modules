function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

module.exports = _instanceof;
module.exports["default"] = module.exports, module.exports.__esModule = true;