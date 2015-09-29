var React = require('react/addons')

module.exports = React.createClass({

  propTypes: {
    label: React.PropTypes.string
  },

  getInitialState: function() {
    return { isChecked: false }
  },

  onChange: function() {
    this.setState({isChecked: !this.state.isChecked});
  },

  render: function() {

    return (
      <label id='checkbox'>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    )
  }
})
