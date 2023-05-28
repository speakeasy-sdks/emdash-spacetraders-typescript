/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FulfillContractSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    agentToken: string;
}

export class FulfillContractRequest extends SpeakeasyBase {
    /**
     * The ID of the contract
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contractId" })
    contractId: string;
}

export class FulfillContract200ApplicationJSONData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "agent" })
    @Type(() => shared.Agent)
    agent: shared.Agent;

    @SpeakeasyMetadata()
    @Expose({ name: "contract" })
    @Type(() => shared.Contract)
    contract: shared.Contract;
}

/**
 * OK
 */
export class FulfillContract200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => FulfillContract200ApplicationJSONData)
    data: FulfillContract200ApplicationJSONData;
}

export class FulfillContractResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    fulfillContract200ApplicationJSONObject?: FulfillContract200ApplicationJSON;
}
