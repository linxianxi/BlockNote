import * as Ariakit from "@ariakit/react";

import { ComponentProps } from "@blocknote/react";

export const Panel = (props: ComponentProps["ImagePanel"]["Root"]) => {
  return (
    <div className={props.className}>
      <Ariakit.TabProvider
        selectedId={props.openTab}
        setActiveId={(activeId) => {
          if (activeId) {
            props.setOpenTab(activeId);
          }
        }}>
        {/*{props.loading && <LoadingOverlay visible={props.loading} />}*/}

        <Ariakit.TabList>
          {props.tabs.map((tab) => (
            <Ariakit.Tab id={tab.name} key={tab.name}>
              {tab.name}
            </Ariakit.Tab>
          ))}
        </Ariakit.TabList>

        {props.tabs.map((tab) => (
          <Ariakit.TabPanel tabId={tab.name} key={tab.name}>
            {tab.tabPanel}
          </Ariakit.TabPanel>
        ))}
      </Ariakit.TabProvider>
    </div>
  );
};
