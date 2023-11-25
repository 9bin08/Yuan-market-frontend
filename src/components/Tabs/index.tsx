import * as S from '@components/Tabs/styles';
import TabPanel from '@components/Tabs/TabPanel';
import TabList from '@components/Tabs/TabList';
import { type ReactNode, useState, useMemo } from 'react';

export type Tab = {
  id: string;
  label: string;
  contents: ReactNode;
};

interface TabsProps {
  tabs: Tab[];
}

function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(() => tabs[0].id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const memoizedTabsComponent = useMemo(
    () => (
      <S.TabsContainer>
        <TabList
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <TabPanel tabs={tabs} activeTab={activeTab} />
      </S.TabsContainer>
    ),
    [activeTab, tabs]
  );

  return memoizedTabsComponent;
}

export default Tabs;
