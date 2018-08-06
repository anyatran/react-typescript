import * as React from 'react'
import 'jest'
import { mount, shallow } from 'enzyme'
import Form from '../components/Form'

const onSubmit = jest.fn()
const formShallow = shallow(<Form onSubmit={onSubmit}/>)
const formMount = mount(<Form onSubmit={onSubmit} />)

beforeEach(() => {
  formMount.setState({ error: false, takerAddress: undefined })
})

test('Form: it should render 3 children nodes', () => {
  expect(formShallow.children().length).toEqual(3)
  expect(formShallow).toMatchSnapshot()
})

test('Form: renderError()', () => {
  expect(formMount.find('.Form__error').length).toEqual(0)
  formMount.setState({ error: true })
  expect(formMount.find('.Form__error')).toHaveLength(1)
})
