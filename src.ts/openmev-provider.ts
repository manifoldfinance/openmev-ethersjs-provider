/* istanbul ignore file */

"use strict";

import { Network } from "@ethersproject/networks";
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

    static getUrl(network: Network, apiKey?: any): string {
        logger.warn("🔵 OpenMEV API Key's only require you to sign the message body with your EOA address");

        let host = null;
        switch (network.name) {
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
               logger.throwArgumentError("🔴 Error: Unsupported Network", "network", arguments[0]);
        }

        return (host + "?apiKey=" + apiKey);
    }
}

