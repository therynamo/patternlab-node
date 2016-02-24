var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function getDefaultProps () {
    return {
      text: "Not From Data"
    }
  },

  render: function render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
});
