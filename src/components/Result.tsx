import * as React from 'react'

export interface ResultProps {
  balance?: number;
  takerAddress?: string;
}

const Result = ({ balance, takerAddress }: ResultProps) => (
  <div className="Result">
    Balance: {balance}
    Taker Address: {takerAddress}
  </div>
)

export default Result
