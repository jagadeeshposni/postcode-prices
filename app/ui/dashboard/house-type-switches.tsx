"use client";

import React, { useState } from 'react';
import { Switch } from '@/app/ui/switch';
import { Label } from '@/app/ui/label';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

type HouseType = 'terraced' | 'semiDetached' | 'detached' | 'flats';

export default function HouseTypeSwitches() {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const [switchStates, setSwitchStates] = useState<Record<HouseType, boolean>>({
    terraced: true,
    semiDetached: true,
    detached: true,
    flats: true,
  });

  const handleToggle = (switchName: HouseType) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));

    const params = new URLSearchParams(searchParams);

    if (switchStates[switchName] === true) {
      params.set(switchName, 'true');
    } else {
      params.delete(switchName);
    }
    replace(`${pathname}?${params.toString()}`);

  };

  const houseTypes = [
    { name: 'Terraced', id: 'terraced' },
    { name: 'Semi Detached', id: 'semiDetached' },
    { name: 'Detached', id: 'detached' },
    { name: 'Flats', id: 'flats' },
  ];

  return (
    <>
      <div className="flex w-full items-center justify-between">
        {houseTypes.map((houseType) => (
          // <div key={houseType.id} className="flex h-[48px] grow items-center justify-between gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div key={houseType.id} className="flex">
            <Switch
              id={houseType.id}
              checked={switchStates[houseType.id as HouseType]}
              onChange={() => handleToggle(houseType.id as HouseType)}
            />
            <Label htmlFor={houseType.id} className="flex-grow">
              {houseType.name}
            </Label>

          </div>

        ))}
      </div>
    </>
  );
}