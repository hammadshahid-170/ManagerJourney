import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IManagerJourneyWebPartProps {
    description: string;
    ListName: string;
    SiteUrl: string;
}
export default class ManagerJourneyWebPart extends BaseClientSideWebPart<IManagerJourneyWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ManagerJourneyWebPart.d.ts.map