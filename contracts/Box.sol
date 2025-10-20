// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


contract Box {
    uint256 private _value;
    
   
    function store(uint256 value) external {
        _value = value;
    }
    
   
    function retrieve() external view returns (uint256) {
        return _value;
    }
}