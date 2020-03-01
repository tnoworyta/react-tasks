import React from 'react';

export const ActivePurchasesStatus = (props) => {
  return <div>Purchased so far: {props.stats.purchasesCompleted}</div>;
};

export default ActivePurchasesStatus;
