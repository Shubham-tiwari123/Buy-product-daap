import React, {Component} from 'react'

class ItemsList extends Component{

    state ={
        itemsList:[
            {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,status:false},
            {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,status:false},
            {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,status:false},
            {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,status:false},
            {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,status:false},
            {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,status:false}
        ],
        stateValue:null,
        purchasedItemsList:[],
        listLen:0
    }

    initialize(){
        let count = this.state.stateValue.purchasedItemID.length;
        let boughtItems = this.state.stateValue.purchasedItemID;
        this.state.listLen = count-1;
        for (let i = 1; i < count; i++) {
            let index = parseInt(boughtItems[i],10);
            this.state.itemsList[index-1].status = true;
            this.state.purchasedItemsList[i] = this.state.itemsList[index-1];
        }
    }


     async buyProduct(productID,event){
        event.preventDefault();
        const {accounts, contract} = this.state.stateValue;
        let response =  await contract.methods.addToCart(
            this.state.itemsList[productID-1].id,
            this.state.itemsList[productID-1].desc,
            this.state.itemsList[productID-1].price
        ).send({from: accounts[0]});

        console.log("resp::",response)
        if (response.status) {
            this.state.purchasedItemsList[this.state.listLen + 1] = this.state.itemsList[productID - 1];
            console.log("fun", this.props)
             this.props.history.push({
                pathname: "/bill",
                state: {
                    item: this.state.purchasedItemsList
                }
            })
        }
    }

     render() {
        this.state.stateValue = this.props.stateValue
         console.log(this.props.history)
        let classRef = this;
        this.initialize();
        let itemList = this.state.itemsList.map(function (item){
            if(!item.status) {
                return (
                    <div key={item.id} id={item.id}>
                        <div id="card-body">
                            <div id="product-title">
                                {item.title}
                            </div>
                            <div id="product-des">
                                {item.desc}
                            </div>
                            <div id="product-price">
                                <div id="price-tag">
                                    Rs. {item.price}
                                </div>
                                <div id="btn">
                                    <button id="buy-product" onClick={(event) => {
                                        classRef.buyProduct(item.id, event)
                                    }}>Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        });
        return(
            <div>
                {itemList}
            </div>
        );
    }
}

export default ItemsList;