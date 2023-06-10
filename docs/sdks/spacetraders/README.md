# SpaceTraders SDK

## Overview

SpaceTraders API: SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.

The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.

```json http
{
  "method": "GET",
  "url": "https://api.spacetraders.io/v2",
}
```

Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.

We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.




### Available Operations

* [getStatus](#getstatus) - Get Status
* [register](#register) - Register New Agent

## getStatus

Return the status of the game server.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetStatusResponse } from "SpaceTradersSDK/dist/sdk/models/operations";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.spaceTraders.getStatus().then((res: GetStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetStatusResponse](../../models/operations/getstatusresponse.md)>**


## register

Creates a new agent and ties it to a temporary Account.

The agent symbol is a 3-14 character string that will represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.

A new agent will be granted an authorization token, a contract with their starting faction, a command ship with a jump drive, and one hundred thousand credits.

> #### Keep your token safe and secure
>
> Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.

You can accept your contract using the `/my/contracts/{contractId}/accept` endpoint. You will want to navigate your command ship to a nearby asteroid field and execute the `/my/ships/{shipSymbol}/extract` endpoint to mine various types of ores and minerals.

Return to the contract destination and execute the `/my/ships/{shipSymbol}/deliver` endpoint to deposit goods into the contract.

When your contract is fulfilled, you can call `/my/contracts/{contractId}/fulfill` to retrieve payment.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { RegisterRequestBodyFaction, RegisterResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import {
  ContractType,
  FactionTraitSymbol,
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

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.spaceTraders.register({
  email: "Larue_Rau85@yahoo.com",
  faction: RegisterRequestBodyFaction.Galactic,
  symbol: "BADGER",
}).then((res: RegisterResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.RegisterRequestBody](../../models/operations/registerrequestbody.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.RegisterResponse](../../models/operations/registerresponse.md)>**

