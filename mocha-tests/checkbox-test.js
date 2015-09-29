// using mocha http://jaketrent.com/post/testing-react-with-jsdom/
// http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/

var jsdom = require('mocha-jsdom')

// Replace BigComplicatedComponent.js with a stub component.
// global.reactModulesToStub = [
//   'BigComplicatedComponent.js'
// ]

var assert = require('assert')
)
describe('Checkbox', function() {
  jsdom()
  it('changes the text after click', function() {
    var React = require('react/addons')
    var TestUtils = React.addons.TestUtils
    var Checkbox = require('../src/checkbox')

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <Checkbox labelOn="On" labelOff="Off" />
    )

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label')
    assert.equal(label.getDOMNode().textContent, 'Off')

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    TestUtils.Simulate.change(input)
    assert.equal(label.getDOMNode().textContent, 'On')
  })
})
