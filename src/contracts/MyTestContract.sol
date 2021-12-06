pragma solidity ^0.5.0;

contract MyTestContract {

    string public name = "";
    string public city = "Portland";
    TestProduct public defaultProduct;

    constructor() public {
        name = "FirstName";
        createFirstProduct();
    }

    struct TestProduct {
        uint id;
        string name;
        address payable owner;
    }

    event ProductLog(
        uint id,
        string productName,
        address payable owner
    );

    function createFirstProduct() public {
        defaultProduct = TestProduct(123, "FirstProduct", msg.sender);
    }

    function CreateDefaultProduct() public {
        TestProduct memory testProduct = TestProduct(234, "defaultProduct", msg.sender);
        defaultProduct = testProduct;
        emit ProductLog(234, "defaultProduct", msg.sender);
    }

    function readName() public {
        //console.log();
        name = "Reading Name";
    }

    function setNameValue(string memory nameParam) public {
        name = nameParam;
    }


}