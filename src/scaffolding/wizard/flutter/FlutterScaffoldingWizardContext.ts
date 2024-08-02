/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/// adding flutter
import { AzureWizardPromptStep, IWizardOptions } from '@microsoft/vscode-azext-utils';
import { ChoosePortsStep } from '../ChoosePortsStep';
import { ScaffoldingWizardContext } from '../ScaffoldingWizardContext';
import { ChooseFlutterArtifactStep } from './ChooseFlutterArtifactStep';
import { FlutterGatherInformationStep } from './FlutterGatherInformationStep';

export interface FlutterScaffoldingWizardContext extends ScaffoldingWizardContext {
    relativeFlutterOutputPath?: string;
}

export function getFlutterSubWizardOptions(wizardContext: ScaffoldingWizardContext): IWizardOptions<FlutterScaffoldingWizardContext> {
    const promptSteps: AzureWizardPromptStep<FlutterScaffoldingWizardContext>[] = [
        new ChooseFlutterArtifactStep(),
        new ChoosePortsStep([8080]), // Example port for Flutter
        new FlutterGatherInformationStep(),
    ];

    return {
        promptSteps: promptSteps,
    };
}
