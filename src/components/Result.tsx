import * as React from 'react'

export interface ResultProps {
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
const Result = ({ balance, ensAddress, ethAddress }: ResultProps): JSX.Element => (
  <div className="Result">
    Balance: {balance}
    Taker Ethereum Address: {ethAddress}
    Taker ENS Address: {ensAddress}
  </div>
)

export default Result
