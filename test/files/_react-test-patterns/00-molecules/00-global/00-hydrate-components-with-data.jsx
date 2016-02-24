var React = require('react');
var Atom = require('../../00-atoms/00-global/00-helloworld-withdata.jsx');

module.exports = React.createClass({
  getDefaultProps: function getDefaultProps () {
    return {
      text: "Not From Data",
      childText: "Not From Data"
    }
  },

  render: function render() {
    return (
      <div>
        {this.props.text}
        <Atom text={this.props.childText} />
      </div>
    )
  }
});
