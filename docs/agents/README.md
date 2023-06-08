# agents

## Overview

Agents

### Available Operations

* [getMyAgent](#getmyagent) - My Agent Details

## getMyAgent

Fetch your agent's details.

### Example Usage

```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetMyAgentResponse } from "SpaceTradersSDK/dist/sdk/models/operations";

const sdk = new SpaceTraders();

sdk.agents.getMyAgent({
  agentToken: "",
}).then((res: GetMyAgentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
