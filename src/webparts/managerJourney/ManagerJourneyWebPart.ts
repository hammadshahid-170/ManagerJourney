import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ManagerJourneyWebPartStrings';
import ManagerJourney from './components/ManagerJourney';
import { IManagerJourneyProps } from './components/IManagerJourneyProps';

export interface IManagerJourneyWebPartProps {
  description: string;
  ListName: string;
  SiteUrl: string;
}

export default class ManagerJourneyWebPart extends BaseClientSideWebPart<IManagerJourneyWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IManagerJourneyProps> = React.createElement(
      ManagerJourney,
      {
        description: this.properties.description,
        ListName: this.properties.ListName,
        SiteUrl: this.properties.SiteUrl,
        context:this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('ListName', {
                  label: 'List Name'
                }),
                PropertyPaneTextField('SiteUrl', {
                  label: 'Root Site Url'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
