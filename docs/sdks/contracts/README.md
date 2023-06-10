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
  agentToken: "",
}).then((res: AcceptContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.AcceptContractRequest](../../models/operations/acceptcontractrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.AcceptContractSecurity](../../models/operations/acceptcontractsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.AcceptContractResponse](../../models/operations/acceptcontractresponse.md)>**


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
  agentToken: "",
}).then((res: DeliverContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeliverContractRequest](../../models/operations/delivercontractrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.DeliverContractSecurity](../../models/operations/delivercontractsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeliverContractResponse](../../models/operations/delivercontractresponse.md)>**


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
  agentToken: "",
}).then((res: FulfillContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.FulfillContractRequest](../../models/operations/fulfillcontractrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.FulfillContractSecurity](../../models/operations/fulfillcontractsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.FulfillContractResponse](../../models/operations/fulfillcontractresponse.md)>**


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
  agentToken: "",
}).then((res: GetContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetContractRequest](../../models/operations/getcontractrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetContractSecurity](../../models/operations/getcontractsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetContractResponse](../../models/operations/getcontractresponse.md)>**


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
  agentToken: "",
}).then((res: GetContractsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetContractsRequest](../../models/operations/getcontractsrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetContractsSecurity](../../models/operations/getcontractssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetContractsResponse](../../models/operations/getcontractsresponse.md)>**

