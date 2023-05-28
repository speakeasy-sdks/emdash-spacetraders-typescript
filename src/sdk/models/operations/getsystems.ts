/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetSystemsRequest extends SpeakeasyBase {
    /**
     * How many entries to return per page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * What entry offset to request
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;
}

/**
 * OK
 */
export class GetSystems200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.System })
    @Expose({ name: "data" })
    @Type(() => shared.System)
    data: shared.System[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta: shared.Meta;
}

export class GetSystemsResponse extends SpeakeasyBase {
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
    getSystems200ApplicationJSONObject?: GetSystems200ApplicationJSON;
}
