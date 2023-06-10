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

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `security`                                                                     | [operations.GetMyAgentSecurity](../../models/operations/getmyagentsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetMyAgentResponse](../../models/operations/getmyagentresponse.md)>**

