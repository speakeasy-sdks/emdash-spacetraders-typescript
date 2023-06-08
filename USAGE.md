<!-- Start SDK Example Usage -->
```typescript
import { SpaceTraders } from "SpaceTradersSDK";
import { GetStatusResponse } from "SpaceTradersSDK/dist/sdk/models/operations";

const sdk = new SpaceTraders({
  security: {
    agentToken: "",
  },
});

sdk.getStatus().then((res: GetStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->