"use client";

import React, { useState } from 'react';
import { Switch } from '@/app/ui/switch';
import { Label } from '@/app/ui/label';

type HouseType = 'terraced' | 'semiDetached' | 'detached' | 'flats';

export default function HouseTypeSwitches() {
  const [switchStates, setSwitchStates] = useState<Record<HouseType, boolean>>({
    terraced: false,
    semiDetached: false,
    detached: false,
    flats: false,
  });

  const handleToggle = (switchName: HouseType) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));
  };

  const houseTypes = [
    { name: 'Terraced', id: 'terraced' },
    { name: 'Semi Detached', id: 'semiDetached' },
    { name: 'Detached', id: 'detached' },
    { name: 'Flats', id: 'flats' },
  ];

  return (
    <>
      {houseTypes.map((houseType) => (
        <div
          key={houseType.id}
          className="flex h-[48px] grow items-center justify-between gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <Label htmlFor={houseType.id} className="flex-grow">
            {houseType.name}
          </Label>
          <Switch
            id={houseType.id}
            checked={switchStates[houseType.id as HouseType]}
            onChange={() => handleToggle(houseType.id as HouseType)}
            className="custom-switch"
          />
        </div>
      ))}
    </>
  );
}