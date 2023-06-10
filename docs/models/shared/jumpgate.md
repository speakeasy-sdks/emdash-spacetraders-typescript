# JumpGate


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `connectedSystems`                                                   | [ConnectedSystem](../../models/shared/connectedsystem.md)[]          | :heavy_check_mark:                                                   | The systems within range of the gate that have a corresponding gate. |
| `factionSymbol`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | The symbol of the faction that owns the gate.                        |
| `jumpRange`                                                          | *number*                                                             | :heavy_check_mark:                                                   | The maximum jump range of the gate.                                  |