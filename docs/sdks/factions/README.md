# factions

## Overview

Factions

### Available Operations

* [getFaction](#getfaction) - Get Faction
* [getFactions](#getfactions) - List Factions

## getFaction

View the details of a faction.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetFactionResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { FactionTraitSymbol } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.factions.getFaction({
  factionSymbol: "delectus",
}).then((res: GetFactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetFactionRequest](../../models/operations/getfactionrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetFactionResponse](../../models/operations/getfactionresponse.md)>**


## getFactions

List all discovered factions in the game.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetFactionsResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { FactionTraitSymbol } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.factions.getFactions({
  limit: 272656,
  page: 383441,
}).then((res: GetFactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetFactionsRequest](../../models/operations/getfactionsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetFactionsResponse](../../models/operations/getfactionsresponse.md)>**

