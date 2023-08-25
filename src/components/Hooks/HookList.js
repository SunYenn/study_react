import React from 'react';

import HookUseState from './1_useState';
import HookUseInput from './2_useInput';
import HookUseTabs from './3_useTabs';
import HookUseEffect from './4_useEffect';
import HookUseTitle from './5_useTitle';
import HookUseClick from './6_useClick';
import HookUseConfirm from './7_useConfirm';
import HookUsePreventLeave from './8_usePreventLeave';
import HookUseBeforeLeave from './9_useBeforeLeave';
import HookUseFadeIn from './10_useFadeIn';
import HookUseNetwork from './11_useNetwork';
import HookUseScroll from './12_useScroll';
import HookUseFullscreen from './13_useFullscreen';
import HookUseAxios from './14_useAxios';
import HookUseCallback from './15_useCallback';

const HookComponentList = ({ activeTab }) => {
  const components = {
    useState: <HookUseState />,
    useInput: <HookUseInput />,
    useTabs: <HookUseTabs />,
    useEffect: <HookUseEffect />,
    useTitle: <HookUseTitle />,
    useClick: <HookUseClick />,
    useConfirm: <HookUseConfirm />,
    usePreventLeave: <HookUsePreventLeave />,
    useBeforeLeave: <HookUseBeforeLeave />,
    useFadeIn: <HookUseFadeIn />,
    useNetwork: <HookUseNetwork />,
    useScroll: <HookUseScroll />,
    useFullscreen: <HookUseFullscreen />,
    useAxios: <HookUseAxios />,
    useCallback: <HookUseCallback />,
  };

  return components[activeTab] || null;
};

export default HookComponentList;