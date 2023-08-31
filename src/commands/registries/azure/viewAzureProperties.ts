/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IActionContext, contextValueExperience, openReadOnlyJson } from "@microsoft/vscode-azext-utils";
import { ext } from "../../../extensionVariables";
import { AzureRegistry } from "../../../tree/registries/Azure/AzureRegistryDataProvider";
import { UnifiedRegistryItem } from "../../../tree/registries/UnifiedRegistryTreeDataProvider";

export async function viewAzureProperties(context: IActionContext, node?: UnifiedRegistryItem<AzureRegistry>): Promise<void> {
    if (!node) {
        node = await contextValueExperience(context, ext.azureRegistryDataProvider, { 'include': 'azureContainerRegistry' });
    }

    await openReadOnlyJson({ label: node.wrappedItem.label, fullId: node.wrappedItem.id }, node.wrappedItem.registryProperties);
}
