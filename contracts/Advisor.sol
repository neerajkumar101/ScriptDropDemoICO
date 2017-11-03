pragma solidity >=0.4.4;

import './ICO.sol';

contract Advisor {
    ICO ico;
    function Advisor(address _ico) {
        ico = ICO(_ico);
    }

    function deposit() payable {
        ico.deposit.value(msg.value)();
    }

    // function claim() {
    //     ico.claim();
    // }

    function () payable {
    }
}