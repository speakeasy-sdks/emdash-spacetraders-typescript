# contracts

## Overview

Contracts

### Available Operations

* [acceptContract](#acceptcontract) - Accept Contract
* [deliverContract](#delivercontract) - Deliver Contract
* [fulfillContract](#fulfillcontract) - Fulfill Contract
* [getContract](#getcontract) - Get Contract
* [getContracts](#getcontracts) - List Contracts

## acceptContract

Accept a contract.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { AcceptContractResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ContractType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.contracts.acceptContract({
  contractId: "illum",
}, {
  agentToken: "YOUR_BEARER_TOKEN_HERE",
}).then((res: AcceptContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deliverContract

Deliver cargo on a given contract.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { DeliverContractResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ContractType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.contracts.deliverContract({
  requestBody: {
    shipSymbol: "vel",
    tradeSymbol: "error",
    units: 645894,
  },
  contractId: "suscipit",
}, {
  agentToken: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeliverContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## fulfillContract

Fulfill a contract

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { FulfillContractResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ContractType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.contracts.fulfillContract({
  contractId: "iure",
}, {
  agentToken: "YOUR_BEARER_TOKEN_HERE",
}).then((res: FulfillContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getContract

Get the details of a contract by ID.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetContractResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ContractType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.contracts.getContract({
  contractId: "magnam",
}, {
  agentToken: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getContracts

List all of your contracts.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetContractsResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ContractType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.contracts.getContracts({
  limit: 891773,
  page: 56713,
}, {
  agentToken: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetContractsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
