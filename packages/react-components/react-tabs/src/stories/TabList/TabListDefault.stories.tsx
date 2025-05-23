import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import { Tab, TabList } from '@fluentui/react-tabs';
import type { TabListProps } from '@fluentui/react-tabs';

const useStyles = makeStyles({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    ...shorthands.padding('50px', '20px'),
    rowGap: '20px',
  },
});

export const Default = (props: Partial<TabListProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <TabList {...props}>
        <Tab value="tab1">First Tab</Tab>
        <Tab value="tab2">Second Tab</Tab>
        <Tab value="tab3">Third Tab</Tab>
        <Tab value="tab4">Fourth Tab</Tab>
      </TabList>
    </div>
  );
};
