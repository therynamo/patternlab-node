var React = require('react');
var Atom = require('../../00-atoms/00-global/00-helloworld.jsx');

module.exports = React.createClass({
  getDefaultProps: function getDefaultProps () {
    return {
      text: "Hello From Container Component!"
    }
  },
  
  render: function render() {
    return (
      <div>
        {this.props.text}
        <Atom/>
      </div>
    )
  }
});
