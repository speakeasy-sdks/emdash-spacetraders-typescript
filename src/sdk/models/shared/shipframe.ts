/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ShipRequirements } from "./shiprequirements";
import { Expose, Type } from "class-transformer";

export enum ShipFrameSymbol {
    FrameProbe = "FRAME_PROBE",
    FrameDrone = "FRAME_DRONE",
    FrameInterceptor = "FRAME_INTERCEPTOR",
    FrameRacer = "FRAME_RACER",
    FrameFighter = "FRAME_FIGHTER",
    FrameFrigate = "FRAME_FRIGATE",
    FrameShuttle = "FRAME_SHUTTLE",
    FrameExplorer = "FRAME_EXPLORER",
    FrameMiner = "FRAME_MINER",
    FrameLightFreighter = "FRAME_LIGHT_FREIGHTER",
    FrameHeavyFreighter = "FRAME_HEAVY_FREIGHTER",
    FrameTransport = "FRAME_TRANSPORT",
    FrameDestroyer = "FRAME_DESTROYER",
    FrameCruiser = "FRAME_CRUISER",
    FrameCarrier = "FRAME_CARRIER",
}

/**
 * The frame of the ship. The frame determines the number of modules and mounting points of the ship, as well as base fuel capacity. As the condition of the frame takes more wear, the ship will become more sluggish and less maneuverable.
 */
export class ShipFrame extends SpeakeasyBase {
    /**
     * Condition is a range of 0 to 100 where 0 is completely worn out and 100 is brand new.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "condition" })
    condition?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "fuelCapacity" })
    fuelCapacity: number;

    @SpeakeasyMetadata()
    @Expose({ name: "moduleSlots" })
    moduleSlots: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mountingPoints" })
    mountingPoints: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The requirements for installation on a ship
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requirements" })
    @Type(() => ShipRequirements)
    requirements: ShipRequirements;

    @SpeakeasyMetadata()
    @Expose({ name: "symbol" })
    symbol: ShipFrameSymbol;
}
