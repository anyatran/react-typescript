import * as React from 'react'
import { mount, shallow } from 'enzyme'
import Search from '../components/Search'

const searchShallow = shallow(<Search />)
const searchMount = mount(<Search />)
afterEach(() => {
  searchMount.setState({ balance: undefined, ensAddress: undefined, ethAddress: undefined, error: undefined })
})

test('Search: it should render 1 child node', () => {
  expect(searchShallow.children().length).toEqual(1)
  expect(searchShallow).toMatchSnapshot()
})

test('Search: it should not render error and balance', () => {
  expect(searchShallow.find('.Search__error')).toHaveLength(0)
  expect(searchShallow.find('.Balance')).toHaveLength(0)
})

test('Search: it should render error only', () => {
  searchMount.setState({ error: 'This is an error'})
  expect(searchMount.find('.Search__error')).toHaveLength(1)
  expect(searchMount.find('.Balance')).toHaveLength(0)
})

test('Search: it should render balance only', () => {
  searchMount.setState({ ethAddress: '0x0000000000000000000000000000000000000000' })
  expect(searchMount.find('.Search__error')).toHaveLength(0)
  expect(searchMount.find('.Balance')).toHaveLength(1)
})
