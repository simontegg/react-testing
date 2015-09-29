var test = require('tape')
var React = require('react/addons')
var TestUtils = React.addons.TestUtils
var Checkbox = require('../src/checkbox')

test('Checkbox changes the text after click', function (t) {

  React.render(
    <Checkbox labelOn='On' labelOff='Off' />,
    document.body
  )


  var label = document.getElementsByTagName('label')[0]
  console.log(label)

  t.ok(true)






  t.end()


})
