/* eslint-env jest */

jest.dontMock('../')
jest.dontMock('object-assign')

var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var wrap = require('react-stateless-wrapper').wrap

var tx = require('../').default

var BaseComponent = function (props) {
  return React.createElement('div', null, props.size) // eslint-disable-line
}

var doubleSize = function (oldProps) {
  return { size: oldProps.size * 2 }
}

var addFive = function (oldProps) {
  return { size: oldProps.size + 5 }
}

describe('transformPropsWith', function () {
  it('works', function () {
    var DecoratedComponent = wrap(
      tx(doubleSize)(BaseComponent)
    )
    var component = TestUtils.renderIntoDocument(
      React.createElement(DecoratedComponent, { size: 10 })
    )
    var node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('20')
  })

  it('does not modify original component with no transformations', function () {
    var DecoratedComponent = wrap(
      tx()(BaseComponent)
    )
    var component = TestUtils.renderIntoDocument(
      React.createElement(DecoratedComponent, { size: 10 })
    )
    var node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('10')
  })

  it('accepts array of transformations', function () {
    var DecoratedComponent = wrap(
      tx([doubleSize, addFive])(BaseComponent)
    )
    var component = TestUtils.renderIntoDocument(
      React.createElement(DecoratedComponent, { size: 10 })
    )
    var node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('30')
  })

  it('merges props with object', function () {
    var DecoratedComponent = wrap(
      tx({ size: 30 })(BaseComponent)
    )
    var component = TestUtils.renderIntoDocument(
      React.createElement(DecoratedComponent, { size: 10 })
    )
    var node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('30')
  })

  it('accepts mixed array of transformations and objects', function () {
    var DecoratedComponent = wrap(
      tx([doubleSize, { size: 10 }])(BaseComponent)
    )
    var component = TestUtils.renderIntoDocument(
      React.createElement(DecoratedComponent, {})
    )
    var node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('20')
  })
})