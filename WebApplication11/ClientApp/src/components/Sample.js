import React, { Component } from 'react';
import { EuiText, EuiSpacer } from "@elastic/eui";

export class Sample extends Component {
    displayName = Sample.name
    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div style={{ maxWidth: 600, padding: 32 }}>
                <EuiText>
                    <h3>EUI sandbox</h3>
                    <p>
                        This sandbox allows you to play around and work with latest version of
                        EUI. It can utilize and import Sass files and work with the EUI
                        variables.
                    </p>
                    <p>
                        The component below exists only in the sandbox. Edit its contents in the
                        `src/components` directory to begin hacking.
                    </p>
                </EuiText>
                <EuiSpacer />
            </div>
        );
    }
}

