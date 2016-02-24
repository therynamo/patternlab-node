(function () {
  "use strict";

  var path = require('path');
  var pa = require('../builder/pattern_assembler');
  var testPatternsPath = path.resolve(__dirname, 'files', '_react-test-patterns');

  var fakePatternLab = function fakePatternLab() {
    var fpl = {
      partials: {},
      patterns: [],
      footer: '',
      header: '',
      listitems: {},
      listItemArray: [],
      data: {
        link: {}
      },
      config: require('../config.json'),
      package: {}
    };

    fpl.config.paths.source.patterns = './test/files/_handlebars-test-patterns';

    return fpl;
  };

  exports['engine_react'] = {
    'single React component renders with default props': function (test) {
      test.expect(1);

      var patternPath = path.resolve(
        testPatternsPath,
        '00-atoms',
        '00-global',
        '00-helloworld.jsx'
      );

      var patternLab = fakePatternLab();
      var assembler = new pa();

      var helloWorldPattern = assembler.process_pattern_iterative(patternPath, patternLab);

      test.equals(helloWorldPattern.render(), '<div>Hello World From React!</div>')
      test.done();
    },

    'single React component renders with json data': function (test) {
      test.expect(1);

      var patternPath = path.resolve(
        testPatternsPath,
        '00-atoms',
        '00-global',
        '00-helloworld-withdata.jsx'
      );

      var patternLab = fakePatternLab();
      var assembler = new pa();
      var helloWorldFromJSON = assembler.process_pattern_iterative(patternPath, patternLab);

      test.equals(helloWorldFromJSON.render(), '<div>Hello React From JSON!</div>');
      test.done();
    },

    'nested React components should render with default props': function (test) {
      var patternPath = path.resolve(
        testPatternsPath,
        '00-molecules',
        '00-global',
        '00-helloworld.jsx'
      );

      var patternLab = fakePatternLab();
      var assembler = new pa();
      var helloWorld = assembler.process_pattern_iterative(patternPath, patternLab);

      test.equals(helloWorld.render(), '<div>Hello From Container Component!<div>Hello World From React!</div></div>');
      test.done();
    },

    'nested React components should render with hydrated data': function (test) {
      var patternPath = path.resolve(
        testPatternsPath,
        '00-molecules',
        '00-global',
        '00-hydrate-components-with-data.jsx'
      );

      var patternLab = fakePatternLab();
      var assembler = new pa();
      var helloWorld = assembler.process_pattern_iterative(patternPath, patternLab);

      test.equals(helloWorld.render(), '<div>Container Component JSON<div>Stateless Component JSON</div></div>');
      test.done();
    }
  }
})();
