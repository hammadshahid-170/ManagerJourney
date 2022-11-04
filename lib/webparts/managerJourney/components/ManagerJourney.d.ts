import * as React from 'react';
import { IManagerJourneyProps } from './IManagerJourneyProps';
import '../components/Custom.css';
export interface IManagerJourneyState {
    ManagerJourneyData: any;
}
export default class ManagerJourney extends React.Component<IManagerJourneyProps, IManagerJourneyState> {
    constructor(props: any);
    componentDidMount(): void;
    render(): React.ReactElement<IManagerJourneyProps>;
    getItems(): Promise<any>;
}
//# sourceMappingURL=ManagerJourney.d.ts.map