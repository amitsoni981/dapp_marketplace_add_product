pragma solidity ^0.5.0;

contract TestContract {

    string public name;
    uint public id;
    Product public defaultProduct;

    constructor() public
    {
        name = "first";
        id = 123;
    }

    struct Product{
        uint id;
        string name;
    }

    event ProductCreate(
        uint id,
        string name
    );

    function testCreate() public {
        defaultProduct = Product(234, "second");
    }



}