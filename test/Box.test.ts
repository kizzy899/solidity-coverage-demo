import { expect } from "chai";
import { ethers } from "hardhat";

describe("Box", () => {
  it("should store and retrieve a value", async () => {
    const BoxFactory = await ethers.getContractFactory("Box");
    const box = await BoxFactory.deploy();
    await box.waitForDeployment();
    
    const testValue = 42;
    await (box as any).store(testValue);
    
    expect(await (box as any).retrieve()).to.equal(testValue);
  });
});