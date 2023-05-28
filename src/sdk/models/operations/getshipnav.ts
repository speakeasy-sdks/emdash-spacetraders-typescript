/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetShipNavSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    agentToken: string;
}

export class GetShipNavRequest extends SpeakeasyBase {
    /**
     * The ship symbol
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipSymbol" })
    shipSymbol: string;
}

/**
 * The current nav status of the ship.
 */
export class GetShipNav200ApplicationJSON extends SpeakeasyBase {
    /**
     * The navigation information of the ship.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.ShipNav)
    data: shared.ShipNav;
}

export class GetShipNavResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The current nav status of the ship.
     */
    @SpeakeasyMetadata()
    getShipNav200ApplicationJSONObject?: GetShipNav200ApplicationJSON;
}
