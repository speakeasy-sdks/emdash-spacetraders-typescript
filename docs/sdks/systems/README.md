# systems

## Overview

Systems

### Available Operations

* [getJumpGate](#getjumpgate) - Get Jump Gate
* [getMarket](#getmarket) - Get Market
* [getShipyard](#getshipyard) - Get Shipyard
* [getSystem](#getsystem) - Get System
* [getSystemWaypoints](#getsystemwaypoints) - List Waypoints
* [getSystems](#getsystems) - List Systems
* [getWaypoint](#getwaypoint) - Get Waypoint

## getJumpGate

Get jump gate details for a waypoint.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetJumpGateResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { SystemType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.systems.getJumpGate({
  systemSymbol: "ad",
  waypointSymbol: "natus",
}).then((res: GetJumpGateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetJumpGateRequest](../../models/operations/getjumpgaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetJumpGateResponse](../../models/operations/getjumpgateresponse.md)>**


## getMarket

Retrieve imports, exports and exchange data from a marketplace. Imports can be sold, exports can be purchased, and exchange goods can be purchased or sold. Send a ship to the waypoint to access trade good prices and recent transactions.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetMarketResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { MarketTradeGoodSupply, MarketTransactionType, TradeSymbol } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.systems.getMarket({
  systemSymbol: "sed",
  waypointSymbol: "iste",
}).then((res: GetMarketResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetMarketRequest](../../models/operations/getmarketrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetMarketResponse](../../models/operations/getmarketresponse.md)>**


## getShipyard

Get the shipyard for a waypoint. Send a ship to the waypoint to access ships that are currently available for purchase and recent transactions.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetShipyardResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import {
  ShipEngineSymbol,
  ShipFrameSymbol,
  ShipModuleSymbol,
  ShipMountDeposits,
  ShipMountSymbol,
  ShipReactorSymbol,
  ShipType,
} from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.systems.getShipyard({
  systemSymbol: "dolor",
  waypointSymbol: "natus",
}).then((res: GetShipyardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetShipyardRequest](../../models/operations/getshipyardrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetShipyardResponse](../../models/operations/getshipyardresponse.md)>**


## getSystem

Get the details of a system.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetSystemResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { SystemType, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.systems.getSystem({
  systemSymbol: "laboriosam",
}).then((res: GetSystemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetSystemRequest](../../models/operations/getsystemrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetSystemResponse](../../models/operations/getsystemresponse.md)>**


## getSystemWaypoints

Fetch all of the waypoints for a given system. System must be charted or a ship must be present to return waypoint details.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetSystemWaypointsResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { WaypointTraitSymbol, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.systems.getSystemWaypoints({
  limit: 943749,
  page: 902599,
  systemSymbol: "fuga",
}, {
  agentToken: "",
}).then((res: GetSystemWaypointsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetSystemWaypointsRequest](../../models/operations/getsystemwaypointsrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.GetSystemWaypointsSecurity](../../models/operations/getsystemwaypointssecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetSystemWaypointsResponse](../../models/operations/getsystemwaypointsresponse.md)>**


## getSystems

Return a list of all systems.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetSystemsResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { SystemType, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.systems.getSystems({
  limit: 449950,
  page: 359508,
}).then((res: GetSystemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetSystemsRequest](../../models/operations/getsystemsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetSystemsResponse](../../models/operations/getsystemsresponse.md)>**


## getWaypoint

View the details of a waypoint.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetWaypointResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { WaypointTraitSymbol, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.systems.getWaypoint({
  systemSymbol: "iste",
  waypointSymbol: "iure",
}).then((res: GetWaypointResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetWaypointRequest](../../models/operations/getwaypointrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetWaypointResponse](../../models/operations/getwaypointresponse.md)>**

