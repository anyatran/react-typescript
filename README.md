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
Right now the function that looks up an ENS address when you pass a hex-encoded Ethereum address
is always returning nothing. This function is calling `ethjs-ens` [reverse(address)](https://github.com/ethjs/ethjs-ens#ensreverse-address-) method inside of it.
The reason for that might be because registry's reverse-registrar doesn't have any hex to ENS address mapping
