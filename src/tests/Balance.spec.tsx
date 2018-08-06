import * as React from 'react'
import 'jest'
import { shallow } from 'enzyme'
import Balance from '../components/Balance'

const onSubmit = jest.fn()
const balanceShallow1 = shallow(<Balance
                                  balance={0}
                                  ensAddress="vitalik.eth"
                                  ethAddress="0x0000000000000000000000000000000000000000"
                                />)
const balanceShallow2 = shallow(<Balance
                                  balance={undefined}
                                  ensAddress="vitalik.eth"
                                  ethAddress="0x0000000000000000000000000000000000000000"
                                />)

test('Balance: it should render balance, ensAddress and ethAddress', () => {
  expect(balanceShallow1.children().length).toEqual(3)
  expect(balanceShallow1).toMatchSnapshot()
})

test('Balance: it should render ensAddress and ethAddress', () => {
  expect(balanceShallow2.children().length).toEqual(2)
})
