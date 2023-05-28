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
    agentToken: "YOUR_BEARER_TOKEN_HERE",
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

## getFactions

List all discovered factions in the game.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetFactionsResponse } from "SpaceTradersSDK/dist/sdk/models/operations";
import { FactionTraitSymbol } from "SpaceTradersSDK/dist/sdk/models/shared";

const sdk = new SpaceTraders({
  security: {
    agentToken: "YOUR_BEARER_TOKEN_HERE",
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
