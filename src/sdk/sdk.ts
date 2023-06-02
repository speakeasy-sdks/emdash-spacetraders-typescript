/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Agents } from "./agents";
import { Contracts } from "./contracts";
import { Factions } from "./factions";
import { Fleet } from "./fleet";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { Systems } from "./systems";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * v2
     */
    "https://api.spacetraders.io/v2",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

/**
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.
 *
 * @remarks
 *
 * The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.
 *
 * ```json http
 * {
 *   "method": "GET",
 *   "url": "https://api.spacetraders.io/v2",
 * }
 * ```
 *
 * Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.
 *
 * We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.
 *
 *
 *
 */
export class SpaceTraders {
    /**
     * Agents
     */
    public agents: Agents;
    /**
     * Contracts
     */
    public contracts: Contracts;
    /**
     * Factions
     */
    public factions: Factions;
    /**
     * Fleet
     */
    public fleet: Fleet;
    /**
     * Systems
     */
    public systems: Systems;

    public _defaultClient: AxiosInstance;
    public _securityClient: AxiosInstance;
    public _serverURL: string;
    private _language = "typescript";
    private _sdkVersion = "1.1.1";
    private _genVersion = "2.34.7";
    private _globals: any;

    constructor(props?: SDKProps) {
        this._serverURL = props?.serverURL ?? ServerList[0];

        this._defaultClient = props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase))
                security = new shared.Security(props.security);
            this._securityClient = utils.createSecurityClient(this._defaultClient, security);
        } else {
            this._securityClient = this._defaultClient;
        }

        this.agents = new Agents(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.contracts = new Contracts(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.factions = new Factions(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.fleet = new Fleet(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.systems = new Systems(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );
    }

    /**
     * Get Status
     *
     * @remarks
     * Return the status of the game server.
     */
    async getStatus(config?: AxiosRequestConfig): Promise<operations.GetStatusResponse> {
        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/";

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetStatusResponse = new operations.GetStatusResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getStatus200ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetStatus200ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Register New Agent
     *
     * @remarks
     * Creates a new agent and ties it to a temporary Account.
     *
     * The agent symbol is a 3-14 character string that will represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.
     *
     * A new agent will be granted an authorization token, a contract with their starting faction, a command ship with a jump drive, and one hundred thousand credits.
     *
     * > #### Keep your token safe and secure
     * >
     * > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.
     *
     * You can accept your contract using the `/my/contracts/{contractId}/accept` endpoint. You will want to navigate your command ship to a nearby asteroid field and execute the `/my/ships/{shipSymbol}/extract` endpoint to mine various types of ores and minerals.
     *
     * Return to the contract destination and execute the `/my/ships/{shipSymbol}/deliver` endpoint to deposit goods into the contract.
     *
     * When your contract is fulfilled, you can call `/my/contracts/{contractId}/fulfill` to retrieve payment.
     */
    async register(
        req: operations.RegisterRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.RegisterResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RegisterRequestBody(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/register";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.RegisterResponse = new operations.RegisterResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.register201ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.Register201ApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
