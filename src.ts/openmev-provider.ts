/* istanbul ignore file */

"use strict";

import { Network, Networkish } from "@ethersproject/networks";
import { defineReadOnly } from "@ethersproject/properties";
import { ConnectionInfo } from "@ethersproject/web";

import { UrlJsonRpcProvider } from "./url-json-rpc-provider";

import { Logger } from "@ethersproject/logger";
import { version } from "./_version";
const logger = new Logger(version);

/**
 * @const defaultApiKey
 * @summary defaultApiKey is simply your EOA account signing the message body
 * @since ethers@^5.4.0
 * @version 2021.09
 * @external docs.openemv.org/ethers-provider
 */
const defaultApiKey = "";



export class OpenMEVProvider extends UrlJsonRpcProvider {

    static getApiKey(apiKey: any): any {
        if (apiKey && typeof(apiKey) !== "string") {
            logger.throwArgumentError("🔴 Error: unable to validate apiKey", "apiKey", apiKey);
        }
        return apiKey || defaultApiKey;
    }

    /**

@TODO 
@NOTE Placeholder for Authenticated Endpoint Access 
    static getUrl(network?: Networkish, apiKey?: any): ConnectionInfo {

        constructor(network?: Networkish, apiKey?: any) {
        const provider = new OpenMEVProvider(network, apiKey);
        const connection = provider.connection;
        const url = connection.url.replace(/^http/i, "ws").replace("/v2/", "/ws/v2/");
        super(url, network);

        return new OpenMEVProvider(network, apiKey);


     */

 
    static getUrl(network: Network, apiKey: any): ConnectionInfo {

    console.log("🔵 OpenMEV API Key's only require you to sign the message body with your EOA address");

        let host: string = null;
        switch(network ? network.name: "unknown") {
            case "mainnet":
                host = "https://rpc.openmev.net/eth/v1/";
                break;
            case "rinkeby":
                host = "https://rpc.openmev.net/rinkeby/v1/";
                break;
            case "goerli":
                host = "https://rpc.openmev.net/goerli/v1/";
                break;
 /**       case "relay":
                host = "https://";
                break;
*/   
 /**       case "sushi":
                host = "https://";
                break;
*/       
            default:
               logger.throwArgumentError("🔴 Error: Unsupported Network",  Logger.errors.INVALID_ARGUMENT, {
                argument: "network",
                value: network
            });
        }

        /** 
        const connection: ConnectionInfo = {
            allowGzip: true,
            url: ("https:/" + "/" + host + "/v2/" + apiKey),
            throttleCallback: (attempt: number, url: string) => {
                if (apiKey) {
                    showThrottleMessage();
                }
                return Promise.resolve(true);
            }
        };

                return connection;
    }

*/
        return (host + "?apiKey=" + apiKey);
    }
}


