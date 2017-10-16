// @flow

import React from 'react';
import { Label, Container, Divider } from 'semantic-ui-react';
import VisibleProviders from './containers/VisibleProviders.jsx';
import { AppVersion } from '../../versions';

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <Container>
                <VisibleProviders />
                <Divider />
                <Container textAlign='center'>
                    <Label color='blue' tag>Ski Goggles - Version: {AppVersion.toFixed(2)}</Label>
                </Container>
            </Container>
        );
    }
}

