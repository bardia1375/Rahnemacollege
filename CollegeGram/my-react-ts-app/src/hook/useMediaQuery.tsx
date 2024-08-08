// useMediaQuery.ts
import { useEffect, useState } from 'react';
import { breakpoints } from '../Utils/breakpoints';

type DeviceType = 'phone' | 'tablet' | 'laptop' | 'desktop' | '';

const useMediaQuery = (): DeviceType => {
  const [device, setDevice] = useState<DeviceType>('');

  useEffect(() => {
    const mediaQueryLists = Object.keys(breakpoints).map((key) => ({
      key: key as DeviceType,
      mediaQueryList: window.matchMedia(breakpoints[key as keyof typeof breakpoints]),
    }));

    const handler = () => {
      const matchedDevice = mediaQueryLists.find(
        ({ mediaQueryList }) => mediaQueryList.matches
      )?.key;
      setDevice(matchedDevice || 'desktop');
    };

    handler(); // Set the initial value

    mediaQueryLists.forEach(({ mediaQueryList }) =>
      mediaQueryList.addEventListener('change', handler)
    );

    return () => {
      mediaQueryLists.forEach(({ mediaQueryList }) =>
        mediaQueryList.removeEventListener('change', handler)
      );
    };
  }, []);

  return device;
};

export default useMediaQuery;
