<!-- Start SDK Example Usage -->
```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetStatusResponse } from "SpaceTradersSDK/dist/sdk/models/operations";

const sdk = new SpaceTraders({
  security: {
    agentToken: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.getStatus().then((res: GetStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->