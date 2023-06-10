# ShipModule

A module can be installed in a ship and provides a set of capabilities such as storage space or quarters for crew. Module installations are permanent.


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `capacity`                                                  | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `description`                                               | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `range`                                                     | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `requirements`                                              | [ShipRequirements](../../models/shared/shiprequirements.md) | :heavy_check_mark:                                          | The requirements for installation on a ship                 |
| `symbol`                                                    | [ShipModuleSymbol](../../models/shared/shipmodulesymbol.md) | :heavy_check_mark:                                          | N/A                                                         |