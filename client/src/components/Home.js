import React,{Component} from 'react'
import ItemsList from "./ItemsList";
import getWeb3 from "../getWeb3";
import BuyItems from "../contracts/BuyItems.json";

class Home extends Component{
    state = {
        storageValue: "",
        web3: null,
        accounts: null,
        contract: null,
        purchasedItemID:[]
    };

    componentDidMount = async () => {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();

            //change the contract name
            //To get the instance of deployed network
            const deployedNetwork = BuyItems.networks[networkId];
            const instance = new web3.eth.Contract(
                //change the contract name
                BuyItems.abi,
                deployedNetwork && deployedNetwork.address,
            );

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.

            let count = await instance.methods.getCount().call();
            let boughtItems=[]
            for (let i = 1; i <= count; i++) {
                let items = await instance.methods.purchasedItems(i).call();
                //console.log("items",items)
                boughtItems[i] = items.productID
            }

            this.setState({web3, accounts, contract: instance,purchasedItemID:boughtItems});
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.log("error:",error);
        }
    };


    render() {
        return(
            <div>
                <h1>WELCOME</h1><br/>
                <ItemsList stateValue={this.state} history={this.props.history}/>
            </div>
        );
    }
}

export default Home;