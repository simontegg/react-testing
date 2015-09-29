//using jest https://facebook.github.io/jest/docs/tutorial-react.html

//tell jest to get a 'real' component. Otherwise it will use a basic 'mocked' version
jest.dontMock('../src/checkbox.js')

describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {

    //put these inside the jest describe call
    var React = require('react/addons')
    var TestUtils = React.addons.TestUtils
    var Checkbox = require('../src/checkbox.js')


    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <Checkbox labelOn="On" labelOff="Off" />
    );

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label')


    expect(React.findDOMNode(label).textContent).toEqual('Off')

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')

    TestUtils.Simulate.change(input)

    expect(React.findDOMNode(label).textContent).toEqual('On')
  })
})
