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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SpaceTraders SDK](docs/sdks/spacetraders/README.md)

* [getStatus](docs/sdks/spacetraders/README.md#getstatus) - Get Status
* [register](docs/sdks/spacetraders/README.md#register) - Register New Agent

### [agents](docs/sdks/agents/README.md)

* [getMyAgent](docs/sdks/agents/README.md#getmyagent) - My Agent Details

### [contracts](docs/sdks/contracts/README.md)

* [acceptContract](docs/sdks/contracts/README.md#acceptcontract) - Accept Contract
* [deliverContract](docs/sdks/contracts/README.md#delivercontract) - Deliver Contract
* [fulfillContract](docs/sdks/contracts/README.md#fulfillcontract) - Fulfill Contract
* [getContract](docs/sdks/contracts/README.md#getcontract) - Get Contract
* [getContracts](docs/sdks/contracts/README.md#getcontracts) - List Contracts

### [factions](docs/sdks/factions/README.md)

* [getFaction](docs/sdks/factions/README.md#getfaction) - Get Faction
* [getFactions](docs/sdks/factions/README.md#getfactions) - List Factions

### [fleet](docs/sdks/fleet/README.md)

* [createChart](docs/sdks/fleet/README.md#createchart) - Create Chart
* [createShipShipScan](docs/sdks/fleet/README.md#createshipshipscan) - Scan Ships
* [createShipSystemScan](docs/sdks/fleet/README.md#createshipsystemscan) - Scan Systems
* [createShipWaypointScan](docs/sdks/fleet/README.md#createshipwaypointscan) - Scan Waypoints
* [createSurvey](docs/sdks/fleet/README.md#createsurvey) - Create Survey
* [dockShip](docs/sdks/fleet/README.md#dockship) - Dock Ship
* [extractResources](docs/sdks/fleet/README.md#extractresources) - Extract Resources
* [getMyShip](docs/sdks/fleet/README.md#getmyship) - Get Ship
* [getMyShipCargo](docs/sdks/fleet/README.md#getmyshipcargo) - Get Ship Cargo
* [getMyShips](docs/sdks/fleet/README.md#getmyships) - List Ships
* [getShipCooldown](docs/sdks/fleet/README.md#getshipcooldown) - Get Ship Cooldown
* [getShipNav](docs/sdks/fleet/README.md#getshipnav) - Get Ship Nav
* [jettison](docs/sdks/fleet/README.md#jettison) - Jettison Cargo
* [jumpShip](docs/sdks/fleet/README.md#jumpship) - Jump Ship
* [navigateShip](docs/sdks/fleet/README.md#navigateship) - Navigate Ship
* [negotiateContract](docs/sdks/fleet/README.md#negotiatecontract) - Negotiate Contract
* [orbitShip](docs/sdks/fleet/README.md#orbitship) - Orbit Ship
* [patchShipNav](docs/sdks/fleet/README.md#patchshipnav) - Patch Ship Nav
* [purchaseCargo](docs/sdks/fleet/README.md#purchasecargo) - Purchase Cargo
* [purchaseShip](docs/sdks/fleet/README.md#purchaseship) - Purchase Ship
* [refuelShip](docs/sdks/fleet/README.md#refuelship) - Refuel Ship
* [sellCargo](docs/sdks/fleet/README.md#sellcargo) - Sell Cargo
* [shipRefine](docs/sdks/fleet/README.md#shiprefine) - Ship Refine
* [transferCargo](docs/sdks/fleet/README.md#transfercargo) - Transfer Cargo
* [warpShip](docs/sdks/fleet/README.md#warpship) - Warp Ship

### [systems](docs/sdks/systems/README.md)

* [getJumpGate](docs/sdks/systems/README.md#getjumpgate) - Get Jump Gate
* [getMarket](docs/sdks/systems/README.md#getmarket) - Get Market
* [getShipyard](docs/sdks/systems/README.md#getshipyard) - Get Shipyard
* [getSystem](docs/sdks/systems/README.md#getsystem) - Get System
* [getSystemWaypoints](docs/sdks/systems/README.md#getsystemwaypoints) - List Waypoints
* [getSystems](docs/sdks/systems/README.md#getsystems) - List Systems
* [getWaypoint](docs/sdks/systems/README.md#getwaypoint) - Get Waypoint
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

