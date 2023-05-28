/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreateChartSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    agentToken: string;
}

export class CreateChartRequest extends SpeakeasyBase {
    /**
     * The symbol of the ship
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipSymbol" })
    shipSymbol: string;
}

export class CreateChart201ApplicationJSONData extends SpeakeasyBase {
    /**
     * The chart of a system or waypoint, which makes the location visible to other agents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "chart" })
    @Type(() => shared.Chart)
    chart: shared.Chart;

    /**
     * A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "waypoint" })
    @Type(() => shared.Waypoint)
    waypoint: shared.Waypoint;
}

/**
 * Created
 */
export class CreateChart201ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => CreateChart201ApplicationJSONData)
    data: CreateChart201ApplicationJSONData;
}

export class CreateChartResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Created
     */
    @SpeakeasyMetadata()
    createChart201ApplicationJSONObject?: CreateChart201ApplicationJSON;
}
