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
    'hello world react pattern renders': function (test) {
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
    }
  }
})();
