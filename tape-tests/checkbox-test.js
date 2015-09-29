//using tape https://www.npmjs.com/package/tape

var React = require('react/addons')
var TestUtils = React.addons.TestUtils
var test = require('tape')
var Checkbox = require('../src/checkbox')

test('Checkbox changes the text after click', function (t) {
  var data = {
    labelOn: 'On',
    labelOff: 'Off'
  }

  // Render a checkbox with label in the document
  var checkbox = TestUtils.renderIntoDocument(
    <Checkbox labelOn="On" labelOff="Off" />
  )
  var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label')
  var msg0 = 'label renders as "' + data.labelOff + '"'

  t.equal(label.getDOMNode().textContent, data.labelOff, msg0)

  // Simulate a click and verify that it is now On
  var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
  var msg1 = 'label is now "' + data.labelOn + '" after checkbox checked'
  TestUtils.Simulate.change(input)

  t.equal(label.getDOMNode().textContent, data.labelOn, msg1)

  t.end()
})
