## Buy-Product Daap

Its a simple dapp build using truffle react and besu.

### Setups for MetaMask

1. Switch to localhost:8545

2. Import a new account in metamask

3. copy a private key from truffle-config.js and paste it inside 
private key area to import the account  

### Run the project

1. git clone https://github.com/Shubham-tiwari123/Buy-product-daap.git

2. cd truffle-react

3. npm install

4. cd client

5. npm install

6. cd ..

7. truffle compile

8. sudo npm run besu

9. truffle migrate --network=besu --reset

10. cd client

11. npm run start