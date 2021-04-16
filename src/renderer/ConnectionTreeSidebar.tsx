import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import CastIcon from '@material-ui/icons/Cast';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import StyledTreeItem from './StyledTreeItem';
import DatabaseIcon from './DatabaseIcon';

import { Connection } from './types';

type Props = {
  connections: Connection[];
}

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const ConnectionTreeSidebar: React.FunctionComponent<Props> = ({ connections }) => {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {
        connections.map((connection, i) => (
          <StyledTreeItem
            nodeId={"connection_" + i}
            labelText={`${connection.username}@${connection.hostname}`}
            labelIcon={connection.connected ? CastConnectedIcon : CastIcon}
          >
            <TreeView><DatabaseIcon />amp_dev</TreeView>
            <TreeView><DatabaseIcon />amp_test</TreeView>
            <TreeView><DatabaseIcon />amp</TreeView>
            <TreeView><DatabaseIcon />creator_notifications_dev</TreeView>
            <TreeView><DatabaseIcon />creator_notifications_test</TreeView>
          </StyledTreeItem>
        ))
      }
    </TreeView>
  );
};

export default ConnectionTreeSidebar;
