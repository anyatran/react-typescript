# Ethereum Balance Lookup
A simple web app for looking up Ethereum balance. It accepts both hex-encoded and ENS addresses as an input.

## Guide
* Install dependencies: `npm install`
* Start the program: `npm start` and open `http://localhost:8080/`
* Run tests: `npm test`

## Tools used
* Typescript and React
* [ethjs-ens](https://github.com/ethjs/ethjs-ens)
* [web3](https://github.com/ethereum/web3.js)

## Notes
The project is using `https://ropsten.infura.io` as a provider for web3, therefore the
numbers and results are not going to be same as if you were looking up in a real
system.

Here are some queries that you can try out:
* `vitalik.eth` (or `0x0000000000000000000000000000000000000000`)
* `computer.eth` (or `0x8394a052eb6c32fb9defcaabc12fcbd8fea0b8a8`)

Right now the function that looks up an ENS address when you pass a hex-encoded Ethereum address
is always returning nothing. This function is calling `ethjs-ens` [reverse(address)](https://github.com/ethjs/ethjs-ens#ensreverse-address-) method inside of it.
The reason for that might be because registry's reverse-registrar doesn't have any hex to ENS address mapping
