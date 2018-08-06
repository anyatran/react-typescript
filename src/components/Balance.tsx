import * as React from 'react'

export interface BalanceProps {
  balance: number | undefined;
  ensAddress: string | undefined;
  ethAddress: string | undefined;
}

/**
 * renders balance, taker ethereum and ens adresses
 * @param {number | undefined} balance - balance in Ethereum
 * @param {string | undefined} ensAddress
 * @param {string | undefined} ethAddress
 * @return {JSX.Element}
 */
const Balance = ({ balance, ensAddress, ethAddress }: BalanceProps): JSX.Element => (
  <div className="Balance">
    {ensAddress && <p>Taker ENS Address: {ensAddress}</p>}
    {ethAddress && <p>Taker Ethereum Address: {ethAddress}</p>}
    {balance !== undefined && <p>Balance: {balance} ETH</p>}
  </div>
)

export default Balance
