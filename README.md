# Solidity 测试覆盖率指南

这是一个基于 Hardhat 和 Solidity 的智能合约测试覆盖率示例项目，展示了如何使用 `solidity-coverage` 插件来分析和提升智能合约的测试质量。

## 功能特性

- ✅ 完整的 Hardhat 测试环境配置
- ✅ 使用 `solidity-coverage` 进行代码覆盖率分析
- ✅ 支持语句、分支、函数、行覆盖率统计
- ✅ 生成详细的 HTML 覆盖率报告
- ✅ 终端简洁摘要输出

## 覆盖率维度说明

| 维度 | 说明 |
|------|------|
| 语句覆盖 (Statements) | 每行代码是否被执行过 |
| 分支覆盖 (Branch) | 每个 if/else/require/?: 是否都被执行过 |
| 函数覆盖 (Functions) | 每个函数是否被调用过 |
| 行覆盖 (Lines) | 物理行号是否被命中 |

## 安装与使用

### 1. 安装依赖
```bash
npm install --save-dev solidity-coverage
```

### 2. 配置 Hardhat
在 `hardhat.config.ts` 中引入插件：
```typescript
import "solidity-coverage";
```

### 3. 运行覆盖率测试
```bash
npx hardhat coverage
```

### 4. 查看报告
- **终端摘要**：运行完成后直接在终端查看
- **详细报告**：打开 `coverage/index.html` 在浏览器中查看

## 示例输出
```
File              % Stmts   % Branch   % Funcs   % Lines
contracts/         100       97.22      100       100
Router02.sol       100       95.45      100       100
Library.sol        100       98.08      100       100
All files          100       96.84      100       100
```

## 目标覆盖率建议
- 语句覆盖率 ≥ 95%
- 分支覆盖率 ≥ 90%
- 函数覆盖率 100%
- 行覆盖率 ≥ 95%

## 项目结构
```
├── contracts/          # Solidity 智能合约
├── test/              # 测试用例
├── coverage/          # 覆盖率报告（自动生成）
├── hardhat.config.ts  # Hardhat 配置
└── README.md
```

## 许可证
MIT
>>>>>>> 1ea7ac9f62569c5749475cfeb4f4bf6a7ca34938
