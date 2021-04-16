import React from 'react';
import Icon from '@mdi/react'
import { mdiDatabase } from '@mdi/js'

const DatabaseIcon: React.FunctionComponent<{}> = () => {
  return (
    <Icon path={mdiDatabase}
      title="Database"
      size={1}
    />
  );
};

export default DatabaseIcon;
