import React, { Component } from 'react';
import {
  EuiText,
  EuiSpacer,
  EuiBasicTable,
  EuiLink,
  EuiHealth,
} from "@elastic/eui";
const columns = [
  {
    field: 'firstName',
    name: 'First Name',
    sortable: true,
    'data-test-subj': 'firstNameCell',
    mobileOptions: {
      render: item => (
        <span>
          {item.firstName}{' '}
          <EuiLink href="#" target="_blank">
            {item.lastName}
          </EuiLink>
        </span>
      ),
      header: false,
      truncateText: false,
      enlarge: true,
      fullWidth: true,
    },
  },
  {
    field: 'lastName',
    name: 'Last Name',
    truncateText: true,
    render: name => (
      <EuiLink href="#" target="_blank">
        {name}
      </EuiLink>
    ),
    mobileOptions: {
      show: false,
    },
  },
  {
    field: 'github',
    name: 'Github',
  },
  {
    field: 'dateOfBirth',
    name: 'Date of Birth',
    dataType: 'date',
  },
  {
    field: 'nationality',
    name: 'Nationality',
  },
  {
    field: 'online',
    name: 'Online',
    dataType: 'boolean',
    render: online => {
      const color = online ? 'success' : 'danger';
      const label = online ? 'Online' : 'Offline';
      return <EuiHealth color={color}>{label}</EuiHealth>;
    },
  },
];
const items = [{
  id: '1',
  firstName: 'john',
  lastName: 'doe',
  github: 'johndoe',
  dateOfBirth: Date.now(),
  nationality: 'NL',
  online: true
}];

const country = [{
  code: 'NL',
  name: 'Netherlands',
  flag: '🇳🇱'
}];
const getRowProps = item => {
  const { id } = item;
  return {
    'data-test-subj': `row-${id}`,
    className: 'customRowClass',
    onClick: () => console.log(`Clicked row ${id}`),
  };
};

const getCellProps = (item, column) => {
  const { id } = item;
  const { field } = column;
  return {
    className: 'customCellClass',
    'data-test-subj': `cell-${id}-${field}`,
    textOnly: true,
  };
};

export class Counter extends Component {
  displayName = Counter.name

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
      <div>
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
        <EuiBasicTable
          items={items}
          columns={columns}
          rowProps={getRowProps}
          cellProps={getCellProps}
        />
      </div>
    );
  }
}
