/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/// adding flutter
import * as fse from 'fs-extra';
import { GatherInformationStep } from '../GatherInformationStep';
import { FlutterScaffoldingWizardContext } from './FlutterScaffoldingWizardContext';

export class FlutterGatherInformationStep extends GatherInformationStep<FlutterScaffoldingWizardContext> {
    public async prompt(wizardContext: FlutterScaffoldingWizardContext): Promise<void> {
        // Implement Flutter-specific logic for gathering information here
        const pubspecPath = 'pubspec.yaml';
        if (await fse.pathExists(pubspecPath)) {
            const pubspecContents = await fse.readFile(pubspecPath, 'utf-8');
            // Parse pubspec.yaml to extract relevant information
            wizardContext.relativeFlutterOutputPath = 'build/app/outputs/flutter-apk/app-release.apk'; // Example output path
        }
    }
}
