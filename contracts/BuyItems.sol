pragma solidity >=0.4.21 <0.7.0;

contract BuyItems {

    uint256 public purchasedItemsCount=0;

    struct Items{
        uint256 productID;
        string description;
        uint256 price;
    }

    mapping(uint256=>Items) public purchasedItems;

    constructor() public{

    }

    function addToCart(uint256 id, string memory name, uint256 price) public {
        purchasedItemsCount++;
        purchasedItems[purchasedItemsCount] = Items(id,name,price);
    }

    function getCount() public returns(uint256){
        return purchasedItemsCount;
    }
}
