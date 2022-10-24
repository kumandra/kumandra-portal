// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
// structs need to be in order

/* eslint-disable sort-keys */
const definitions = {
  types: [{
    // on all versions
    minmax: [0, undefined],
    types: {
      BurnTxDetails: {
        approvals: 'u32',
        approvers: 'Vec<AccountId>'
      },
      OrmlVestingSchedule: {
        start: 'BlockNumber',
        period: 'BlockNumber',
        periodCount: 'u32',
        perPeriod: 'Compact<Balance>'
      },
      VestingScheduleOf: 'OrmlVestingSchedule'
    }
  }]
};
export default definitions;