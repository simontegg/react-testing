var React = require('react')
var CheckBox = require('./src/checkbox')
var domready = require('domready')

// our data
var labelOn = "The CheckBox Label is On!"
var labelOff = "Now its Off!"

domready(function () {
  React.render(
    <CheckBox labelOn={labelOn} labelOff={labelOff} />,
    document.getElementById('app')
  )
})
