import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ConnectionTreeSidebar from './ConnectionTreeSidebar';

const Index = () => {
    return (
      <div>
        PG Boss
        <ConnectionTreeSidebar connections={[
          { username: 'bramirez', hostname: 'localhost', connected: true, databases: [] },
          { username: 'amp', hostname: 'creators-db1', connected: false, databases: null }
        ]} />
      </div>
    );
};

ReactDOM.render(<Index />, document.getElementById('app'));
