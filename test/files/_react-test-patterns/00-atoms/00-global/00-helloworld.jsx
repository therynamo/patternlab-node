var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function getDefaultProps () {
    return {
      text: "Hello World From React!"
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