import 'jest'
import { ethService } from '../utils/EthService'

test('EthService: validateAddress()', () => {
  expect(ethService.validateAddress('vitalik.eth')).toEqual(true)
  expect(ethService.validateAddress('vitalik.ethu')).toEqual(false)
  expect(ethService.validateAddress('vitalik')).toEqual(false)
  expect(ethService.validateAddress('0x8394a052eb6c32fb9defcaabc12fcbd8fea0b8a8')).toEqual(true)
  expect(ethService.validateAddress('0x8394a052eb6c32fb9defcaabc12fcbd8fea0b8a')).toEqual(false)
})

test('EthService: isENS()', () => {
  expect(ethService.isENS('vitalik.eth')).toEqual(true)
  expect(ethService.isENS('vitalik.ethu')).toEqual(false)
  expect(ethService.isENS('vitalik')).toEqual(false)
  expect(ethService.isENS('0x8394a052eb6c32fb9defcaabc12fcbd8fea0b8a8')).toEqual(false)
  expect(ethService.isENS('0x8394a052eb6c32fb9defcaabc12fcbd8fea0b8a')).toEqual(false)
})

test('EthService: getEthBalance()', () => {
  ethService.getEthBalance('0x0000000000000000000000000000000000000000').then((balance) => {
    expect(balance).toEqual(6679.039904775781)
  })

  ethService.getEthBalance('0x0000000000000000000000000000000000200004').then((balance) => {
    expect(balance).toEqual(0)
  })
})

test('EthService: ensToEth()', () => {
  ethService.ensToEth('computer.eth').then((address) => {
    expect(address).toEqual('0x8394a052eb6c32fb9defcaabc12fcbd8fea0b8a8')
  })

  ethService.ensToEth('undefined.eth').catch((err) => {
    expect(address).toEqual(undefined)
  })
})

test('EthService: ethToEns()', () => {
  ethService.ethToEns('0x8394a052eb6c32fb9defcaabc12fcbd8fea0b8a8').catch((err) => {
    expect(address).toEqual(undefined)
  })
})
