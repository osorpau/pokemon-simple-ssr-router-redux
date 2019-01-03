"use strict";

var _pokemon = _interopRequireDefault(require("../components/pokemon"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(pokemon) {
  var content = (0, _server.renderToString)(_react.default.createElement(_pokemon.default, pokemon));
  return {
    content: content
  };
};