
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/// adding flutter
import { l10n } from 'vscode';
import { ChooseArtifactStep } from "../ChooseArtifactStep";
import { ScaffoldingWizardContext } from "../ScaffoldingWizardContext";

export class ChooseFlutterArtifactStep extends ChooseArtifactStep<ScaffoldingWizardContext> {
    public constructor() {
        super(
            l10n.t('Choose a Flutter project metadata file (pubspec.yaml)'),
            ['**/[Pp][Uu][Bb][Ss][Pp][Ee][Cc].[Yy][Aa][Mm][Ll]'],
            l10n.t('No Flutter project metadata files were found.')
        );
    }

    public async prompt(wizardContext: ScaffoldingWizardContext): Promise<void> {
        // Flutter's behavior is to look for a pubspec.yaml file, but if none is present no error is thrown
        try {
            await super.prompt(wizardContext);
        } catch {
            // Not a problem
        }
    }
}
