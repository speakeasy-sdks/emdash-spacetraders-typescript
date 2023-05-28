/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ContractPayment extends SpeakeasyBase {
    /**
     * The amount of credits received up front for accepting the contract.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "onAccepted" })
    onAccepted: number;

    /**
     * The amount of credits received when the contract is fulfilled.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "onFulfilled" })
    onFulfilled: number;
}
