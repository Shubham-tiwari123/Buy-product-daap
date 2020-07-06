import React,{Component} from 'react'

class ItemBill extends Component{

     formDiv(itemList){
        let list="";
        for (let i=1;i<itemList.length;i++){
            list = list+itemList[i].id+","+itemList[i].desc+","+itemList[i].price+","+itemList[i].title+"\n";
            //console.log(list)
        }
        return list;
    }

    render() {
        let response = this.props.location.state.item;
        console.log("resppp: ",response[1])
        let billList = response.map(function (item) {
            return(
                <div key={item.id}>
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
                        </div>
                    </div>
                </div>
            );
        })
        let result = this.formDiv(response)
        return(
          <div>
              {billList}
          </div>
        );
    }
}

export default ItemBill;