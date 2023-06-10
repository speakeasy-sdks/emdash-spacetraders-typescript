# fleet

## Overview

Fleet

### Available Operations

* [createChart](#createchart) - Create Chart
* [createShipShipScan](#createshipshipscan) - Scan Ships
* [createShipSystemScan](#createshipsystemscan) - Scan Systems
* [createShipWaypointScan](#createshipwaypointscan) - Scan Waypoints
* [createSurvey](#createsurvey) - Create Survey
* [dockShip](#dockship) - Dock Ship
* [extractResources](#extractresources) - Extract Resources
* [getMyShip](#getmyship) - Get Ship
* [getMyShipCargo](#getmyshipcargo) - Get Ship Cargo
* [getMyShips](#getmyships) - List Ships
* [getShipCooldown](#getshipcooldown) - Get Ship Cooldown
* [getShipNav](#getshipnav) - Get Ship Nav
* [jettison](#jettison) - Jettison Cargo
* [jumpShip](#jumpship) - Jump Ship
* [navigateShip](#navigateship) - Navigate Ship
* [negotiateContract](#negotiatecontract) - Negotiate Contract
* [orbitShip](#orbitship) - Orbit Ship
* [patchShipNav](#patchshipnav) - Patch Ship Nav
* [purchaseCargo](#purchasecargo) - Purchase Cargo
* [purchaseShip](#purchaseship) - Purchase Ship
* [refuelShip](#refuelship) - Refuel Ship
* [sellCargo](#sellcargo) - Sell Cargo
* [shipRefine](#shiprefine) - Ship Refine
* [transferCargo](#transfercargo) - Transfer Cargo
* [warpShip](#warpship) - Warp Ship

## createChart

Command a ship to chart the current waypoint.

Waypoints in the universe are uncharted by default. These locations will not show up in the API until they have been charted by a ship.

Charting a location will record your agent as the one who created the chart.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { CreateChartResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { WaypointTraitSymbol, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.createChart({
  shipSymbol: "molestiae",
}, {
  agentToken: "",
}).then((res: CreateChartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateChartRequest](../../models/operations/createchartrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.CreateChartSecurity](../../models/operations/createchartsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateChartResponse](../../models/operations/createchartresponse.md)>**


## createShipShipScan

Activate your ship's sensor arrays to scan for ship information.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { CreateShipShipScanResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ShipNavFlightMode, ShipNavStatus, ShipRole, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.createShipShipScan({
  shipSymbol: "minus",
}, {
  agentToken: "",
}).then((res: CreateShipShipScanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateShipShipScanRequest](../../models/operations/createshipshipscanrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.CreateShipShipScanSecurity](../../models/operations/createshipshipscansecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateShipShipScanResponse](../../models/operations/createshipshipscanresponse.md)>**


## createShipSystemScan

Activate your ship's sensor arrays to scan for system information.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { CreateShipSystemScanResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { SystemType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.createShipSystemScan({
  shipSymbol: "placeat",
}, {
  agentToken: "",
}).then((res: CreateShipSystemScanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateShipSystemScanRequest](../../models/operations/createshipsystemscanrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateShipSystemScanSecurity](../../models/operations/createshipsystemscansecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateShipSystemScanResponse](../../models/operations/createshipsystemscanresponse.md)>**


## createShipWaypointScan

Activate your ship's sensor arrays to scan for waypoint information.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { CreateShipWaypointScanResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { WaypointTraitSymbol, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.createShipWaypointScan({
  shipSymbol: "voluptatum",
}, {
  agentToken: "",
}).then((res: CreateShipWaypointScanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateShipWaypointScanRequest](../../models/operations/createshipwaypointscanrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.CreateShipWaypointScanSecurity](../../models/operations/createshipwaypointscansecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateShipWaypointScanResponse](../../models/operations/createshipwaypointscanresponse.md)>**


## createSurvey

If you want to target specific yields for an extraction, you can survey a waypoint, such as an asteroid field, and send the survey in the body of the extract request. Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.

Your ship will enter a cooldown between consecutive survey requests. Surveys will eventually expire after a period of time. Multiple ships can use the same survey for extraction.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { CreateSurveyResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { SurveySize } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.createSurvey({
  shipSymbol: "iusto",
}, {
  agentToken: "",
}).then((res: CreateSurveyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateSurveyRequest](../../models/operations/createsurveyrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.CreateSurveySecurity](../../models/operations/createsurveysecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateSurveyResponse](../../models/operations/createsurveyresponse.md)>**


## dockShip

Attempt to dock your ship at it's current location. Docking will only succeed if the waypoint is a dockable location, and your ship is capable of docking at the time of the request.

The endpoint is idempotent - successive calls will succeed even if the ship is already docked.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { DockShipResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ShipNavFlightMode, ShipNavStatus, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.dockShip({
  shipSymbol: "excepturi",
}, {
  agentToken: "",
}).then((res: DockShipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.DockShipRequest](../../models/operations/dockshiprequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.DockShipSecurity](../../models/operations/dockshipsecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.DockShipResponse](../../models/operations/dockshipresponse.md)>**


## extractResources

Extract resources from the waypoint into your ship. Send an optional survey as the payload to target specific yields.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { ExtractResourcesResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { SurveySize } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.extractResources({
  requestBody: {
    survey: {
      deposits: [
        {
          symbol: "recusandae",
        },
        {
          symbol: "temporibus",
        },
      ],
      expiration: new Date("2022-08-30T20:24:33.984Z"),
      signature: "veritatis",
      size: SurveySize.Moderate,
      symbol: "perferendis",
    },
  },
  shipSymbol: "ipsam",
}, {
  agentToken: "",
}).then((res: ExtractResourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ExtractResourcesRequest](../../models/operations/extractresourcesrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ExtractResourcesSecurity](../../models/operations/extractresourcessecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ExtractResourcesResponse](../../models/operations/extractresourcesresponse.md)>**


## getMyShip

Retrieve the details of your ship.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetMyShipResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import {
  ShipCrewRotation,
  ShipEngineSymbol,
  ShipFrameSymbol,
  ShipModuleSymbol,
  ShipMountDeposits,
  ShipMountSymbol,
  ShipNavFlightMode,
  ShipNavStatus,
  ShipReactorSymbol,
  ShipRole,
  WaypointType,
} from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.getMyShip({
  shipSymbol: "repellendus",
}, {
  agentToken: "",
}).then((res: GetMyShipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetMyShipRequest](../../models/operations/getmyshiprequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.GetMyShipSecurity](../../models/operations/getmyshipsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetMyShipResponse](../../models/operations/getmyshipresponse.md)>**


## getMyShipCargo

Retrieve the cargo of your ship.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetMyShipCargoResponse } from "SpaceTradersSDK/dist/sdk/models/operations";

const sdk = new SpaceTraders();

sdk.fleet.getMyShipCargo({
  shipSymbol: "sapiente",
}, {
  agentToken: "",
}).then((res: GetMyShipCargoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetMyShipCargoRequest](../../models/operations/getmyshipcargorequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetMyShipCargoSecurity](../../models/operations/getmyshipcargosecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetMyShipCargoResponse](../../models/operations/getmyshipcargoresponse.md)>**


## getMyShips

Retrieve all of your ships.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetMyShipsResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import {
  ShipCrewRotation,
  ShipEngineSymbol,
  ShipFrameSymbol,
  ShipModuleSymbol,
  ShipMountDeposits,
  ShipMountSymbol,
  ShipNavFlightMode,
  ShipNavStatus,
  ShipReactorSymbol,
  ShipRole,
  WaypointType,
} from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.getMyShips({
  limit: 778157,
  page: 140350,
}, {
  agentToken: "",
}).then((res: GetMyShipsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetMyShipsRequest](../../models/operations/getmyshipsrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetMyShipsSecurity](../../models/operations/getmyshipssecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetMyShipsResponse](../../models/operations/getmyshipsresponse.md)>**


## getShipCooldown

Retrieve the details of your ship's reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.

Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.

Response returns a 204 status code (no-content) when the ship has no cooldown.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetShipCooldownResponse } from "SpaceTradersSDK/dist/sdk/models/operations";

const sdk = new SpaceTraders();

sdk.fleet.getShipCooldown({
  shipSymbol: "at",
}, {
  agentToken: "",
}).then((res: GetShipCooldownResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetShipCooldownRequest](../../models/operations/getshipcooldownrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetShipCooldownSecurity](../../models/operations/getshipcooldownsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetShipCooldownResponse](../../models/operations/getshipcooldownresponse.md)>**


## getShipNav

Get the current nav status of a ship.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetShipNavResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ShipNavFlightMode, ShipNavStatus, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.getShipNav({
  shipSymbol: "at",
}, {
  agentToken: "",
}).then((res: GetShipNavResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetShipNavRequest](../../models/operations/getshipnavrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetShipNavSecurity](../../models/operations/getshipnavsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetShipNavResponse](../../models/operations/getshipnavresponse.md)>**


## jettison

Jettison cargo from your ship's cargo hold.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { JettisonResponse } from "SpaceTradersSDK/dist/sdk/models/operations";

const sdk = new SpaceTraders();

sdk.fleet.jettison({
  requestBody: {
    symbol: "maiores",
    units: 473608,
  },
  shipSymbol: "quod",
}, {
  agentToken: "",
}).then((res: JettisonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.JettisonRequest](../../models/operations/jettisonrequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.JettisonSecurity](../../models/operations/jettisonsecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.JettisonResponse](../../models/operations/jettisonresponse.md)>**


## jumpShip

Jump your ship instantly to a target system. When used while in orbit or docked to a jump gate waypoint, any ship can use this command. When used elsewhere, jumping requires a jump drive unit and consumes a unit of antimatter (which needs to be in your cargo).

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { JumpShipResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ShipNavFlightMode, ShipNavStatus, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.jumpShip({
  requestBody: {
    systemSymbol: "quod",
  },
  shipSymbol: "esse",
}, {
  agentToken: "",
}).then((res: JumpShipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.JumpShipRequest](../../models/operations/jumpshiprequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.JumpShipSecurity](../../models/operations/jumpshipsecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.JumpShipResponse](../../models/operations/jumpshipresponse.md)>**


## navigateShip

Navigate to a target destination. The destination must be located within the same system as the ship. Navigating will consume the necessary fuel and supplies from the ship's manifest, and will pay out crew wages from the agent's account.

The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.

To travel between systems, see the ship's warp or jump actions.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { NavigateShipResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ShipNavFlightMode, ShipNavStatus, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.navigateShip({
  requestBody: {
    waypointSymbol: "totam",
  },
  shipSymbol: "porro",
}, {
  agentToken: "",
}).then((res: NavigateShipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.NavigateShipRequest](../../models/operations/navigateshiprequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.NavigateShipSecurity](../../models/operations/navigateshipsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.NavigateShipResponse](../../models/operations/navigateshipresponse.md)>**


## negotiateContract

Negotiate Contract

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { NegotiateContractResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ContractType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.negotiateContract({
  requestBody: "dolorum",
  shipSymbol: "dicta",
}, {
  agentToken: "",
}).then((res: NegotiateContractResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.NegotiateContractRequest](../../models/operations/negotiatecontractrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.NegotiateContractSecurity](../../models/operations/negotiatecontractsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.NegotiateContractResponse](../../models/operations/negotiatecontractresponse.md)>**


## orbitShip

Attempt to move your ship into orbit at it's current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.

The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { OrbitShipResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ShipNavFlightMode, ShipNavStatus, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.orbitShip({
  shipSymbol: "nam",
}, {
  agentToken: "",
}).then((res: OrbitShipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.OrbitShipRequest](../../models/operations/orbitshiprequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.OrbitShipSecurity](../../models/operations/orbitshipsecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.OrbitShipResponse](../../models/operations/orbitshipresponse.md)>**


## patchShipNav

Update the nav data of a ship, such as the flight mode.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { PatchShipNavResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ShipNavFlightMode, ShipNavStatus, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.patchShipNav({
  requestBody: {
    flightMode: ShipNavFlightMode.Cruise,
  },
  shipSymbol: "occaecati",
}, {
  agentToken: "",
}).then((res: PatchShipNavResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.PatchShipNavRequest](../../models/operations/patchshipnavrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.PatchShipNavSecurity](../../models/operations/patchshipnavsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PatchShipNavResponse](../../models/operations/patchshipnavresponse.md)>**


## purchaseCargo

Purchase cargo.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { PurchaseCargoResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { MarketTransactionType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.purchaseCargo({
  requestBody: {
    symbol: "fugit",
    units: 537373,
  },
  shipSymbol: "hic",
}, {
  agentToken: "",
}).then((res: PurchaseCargoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PurchaseCargoRequest](../../models/operations/purchasecargorequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.PurchaseCargoSecurity](../../models/operations/purchasecargosecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PurchaseCargoResponse](../../models/operations/purchasecargoresponse.md)>**


## purchaseShip

Purchase a ship

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { PurchaseShipResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import {
  ShipCrewRotation,
  ShipEngineSymbol,
  ShipFrameSymbol,
  ShipModuleSymbol,
  ShipMountDeposits,
  ShipMountSymbol,
  ShipNavFlightMode,
  ShipNavStatus,
  ShipReactorSymbol,
  ShipRole,
  ShipType,
  WaypointType,
} from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.purchaseShip({
  shipType: ShipType.ShipLightShuttle,
  waypointSymbol: "totam",
}, {
  agentToken: "",
}).then((res: PurchaseShipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PurchaseShipRequestBody](../../models/operations/purchaseshiprequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.PurchaseShipSecurity](../../models/operations/purchaseshipsecurity.md)       | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PurchaseShipResponse](../../models/operations/purchaseshipresponse.md)>**


## refuelShip

Refuel your ship from the local market.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { RefuelShipResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { MarketTransactionType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.refuelShip({
  shipSymbol: "beatae",
}, {
  agentToken: "",
}).then((res: RefuelShipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.RefuelShipRequest](../../models/operations/refuelshiprequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.RefuelShipSecurity](../../models/operations/refuelshipsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RefuelShipResponse](../../models/operations/refuelshipresponse.md)>**


## sellCargo

Sell cargo.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { SellCargoResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { MarketTransactionType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.sellCargo({
  requestBody: {
    symbol: "commodi",
    units: 473600,
  },
  shipSymbol: "modi",
}, {
  agentToken: "",
}).then((res: SellCargoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.SellCargoRequest](../../models/operations/sellcargorequest.md)   | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `security`                                                                   | [operations.SellCargoSecurity](../../models/operations/sellcargosecurity.md) | :heavy_check_mark:                                                           | The security requirements to use for the request.                            |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.SellCargoResponse](../../models/operations/sellcargoresponse.md)>**


## shipRefine

Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { ShipRefineRequestBodyProduce, ShipRefineResponse } from "SpaceTradersSDK/dist/sdk/models/operations";

const sdk = new SpaceTraders();

sdk.fleet.shipRefine({
  requestBody: {
    produce: ShipRefineRequestBodyProduce.Copper,
  },
  shipSymbol: "impedit",
}, {
  agentToken: "",
}).then((res: ShipRefineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ShipRefineRequest](../../models/operations/shiprefinerequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.ShipRefineSecurity](../../models/operations/shiprefinesecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ShipRefineResponse](../../models/operations/shiprefineresponse.md)>**


## transferCargo

Transfer cargo between ships.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { TransferCargoResponse } from "SpaceTradersSDK/dist/sdk/models/operations";

const sdk = new SpaceTraders();

sdk.fleet.transferCargo({
  requestBody: {
    shipSymbol: "cum",
    tradeSymbol: "esse",
    units: 216550,
  },
  shipSymbol: "excepturi",
}, {
  agentToken: "",
}).then((res: TransferCargoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.TransferCargoRequest](../../models/operations/transfercargorequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.TransferCargoSecurity](../../models/operations/transfercargosecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.TransferCargoResponse](../../models/operations/transfercargoresponse.md)>**


## warpShip

Warp your ship to a target destination in another system. Warping will consume the necessary fuel and supplies from the ship's manifest, and will pay out crew wages from the agent's account.

The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { WarpShipResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { ShipNavFlightMode, ShipNavStatus, WaypointType } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders();

sdk.fleet.warpShip({
  requestBody: {
    waypointSymbol: "aspernatur",
  },
  shipSymbol: "perferendis",
}, {
  agentToken: "",
}).then((res: WarpShipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.WarpShipRequest](../../models/operations/warpshiprequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.WarpShipSecurity](../../models/operations/warpshipsecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.WarpShipResponse](../../models/operations/warpshipresponse.md)>**

