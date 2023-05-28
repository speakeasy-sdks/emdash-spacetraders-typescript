# SpaceTradersSDK

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/emdash-spacetraders-typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/emdash-spacetraders-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SpaceTraders SDK](docs/spacetraders/README.md)

* [getStatus](docs/spacetraders/README.md#getstatus) - Get Status
* [register](docs/spacetraders/README.md#register) - Register New Agent

### [agents](docs/agents/README.md)

* [getMyAgent](docs/agents/README.md#getmyagent) - My Agent Details

### [contracts](docs/contracts/README.md)

* [acceptContract](docs/contracts/README.md#acceptcontract) - Accept Contract
* [deliverContract](docs/contracts/README.md#delivercontract) - Deliver Contract
* [fulfillContract](docs/contracts/README.md#fulfillcontract) - Fulfill Contract
* [getContract](docs/contracts/README.md#getcontract) - Get Contract
* [getContracts](docs/contracts/README.md#getcontracts) - List Contracts

### [factions](docs/factions/README.md)

* [getFaction](docs/factions/README.md#getfaction) - Get Faction
* [getFactions](docs/factions/README.md#getfactions) - List Factions

### [fleet](docs/fleet/README.md)

* [createChart](docs/fleet/README.md#createchart) - Create Chart
* [createShipShipScan](docs/fleet/README.md#createshipshipscan) - Scan Ships
* [createShipSystemScan](docs/fleet/README.md#createshipsystemscan) - Scan Systems
* [createShipWaypointScan](docs/fleet/README.md#createshipwaypointscan) - Scan Waypoints
* [createSurvey](docs/fleet/README.md#createsurvey) - Create Survey
* [dockShip](docs/fleet/README.md#dockship) - Dock Ship
* [extractResources](docs/fleet/README.md#extractresources) - Extract Resources
* [getMyShip](docs/fleet/README.md#getmyship) - Get Ship
* [getMyShipCargo](docs/fleet/README.md#getmyshipcargo) - Get Ship Cargo
* [getMyShips](docs/fleet/README.md#getmyships) - List Ships
* [getShipCooldown](docs/fleet/README.md#getshipcooldown) - Get Ship Cooldown
* [getShipNav](docs/fleet/README.md#getshipnav) - Get Ship Nav
* [jettison](docs/fleet/README.md#jettison) - Jettison Cargo
* [jumpShip](docs/fleet/README.md#jumpship) - Jump Ship
* [navigateShip](docs/fleet/README.md#navigateship) - Navigate Ship
* [negotiateContract](docs/fleet/README.md#negotiatecontract) - Negotiate Contract
* [orbitShip](docs/fleet/README.md#orbitship) - Orbit Ship
* [patchShipNav](docs/fleet/README.md#patchshipnav) - Patch Ship Nav
* [purchaseCargo](docs/fleet/README.md#purchasecargo) - Purchase Cargo
* [purchaseShip](docs/fleet/README.md#purchaseship) - Purchase Ship
* [refuelShip](docs/fleet/README.md#refuelship) - Refuel Ship
* [sellCargo](docs/fleet/README.md#sellcargo) - Sell Cargo
* [shipRefine](docs/fleet/README.md#shiprefine) - Ship Refine
* [transferCargo](docs/fleet/README.md#transfercargo) - Transfer Cargo
* [warpShip](docs/fleet/README.md#warpship) - Warp Ship

### [systems](docs/systems/README.md)

* [getJumpGate](docs/systems/README.md#getjumpgate) - Get Jump Gate
* [getMarket](docs/systems/README.md#getmarket) - Get Market
* [getShipyard](docs/systems/README.md#getshipyard) - Get Shipyard
* [getSystem](docs/systems/README.md#getsystem) - Get System
* [getSystemWaypoints](docs/systems/README.md#getsystemwaypoints) - List Waypoints
* [getSystems](docs/systems/README.md#getsystems) - List Systems
* [getWaypoint](docs/systems/README.md#getwaypoint) - Get Waypoint
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

