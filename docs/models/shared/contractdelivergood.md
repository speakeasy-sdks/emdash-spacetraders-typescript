# ContractDeliverGood

The details of a delivery contract. Includes the type of good, units needed, and the destination.


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `destinationSymbol`                                             | *string*                                                        | :heavy_check_mark:                                              | The destination where goods need to be delivered.               |
| `tradeSymbol`                                                   | *string*                                                        | :heavy_check_mark:                                              | The symbol of the trade good to deliver.                        |
| `unitsFulfilled`                                                | *number*                                                        | :heavy_check_mark:                                              | The number of units fulfilled on this contract.                 |
| `unitsRequired`                                                 | *number*                                                        | :heavy_check_mark:                                              | The number of units that need to be delivered on this contract. |