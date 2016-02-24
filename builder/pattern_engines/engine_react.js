(function () {
  "use strict";

  // Babel Require Hook in order to require in JSX
  require('babel-register')();

  var React = require('react');
  var ReactDOM = require('react-dom/server');
  var assignIn = require('lodash').assignIn;

  var engine_react = {
    engine: React,
    engineName: 'react',
    engineFileExtension: '.jsx',

    renderPattern: function renderPattern(Component, props) {
      return ReactDOM.renderToStaticMarkup(React.createElement(Component,
        assignIn({}, props, this.props)));
    },

    loadCompiledTemplate: function loadCompiledTemplate(filePath) {
      return require(filePath);
    }
  };

  module.exports = engine_react;
})();
