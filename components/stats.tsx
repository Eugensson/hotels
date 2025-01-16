"use client";

import CountUp from "react-countup";

const statsData = [
  {
    value: 1.2,
    type: "Hotels",
    unit: "k",
  },
  {
    value: 4.8,
    type: "Rooms",
    unit: "k",
  },
  {
    value: 186,
    type: "Countries",
    unit: null,
  },
];

export const Stats = () => {
  return (
    <ul className="flex flex-col xl:flex-row gap-x-8 gap-y-4 my-10">
      {statsData.map(({ value, type, unit }) => (
        <li key={type} className="flex">
          <div className="flex items-baseline gap-x-2">
            <h3 className="h3 text-soft_green">
              <CountUp
                start={0}
                end={value}
                decimals={value % 1 !== 0 ? 1 : 0}
                duration={6}
              />
              {unit && <span>{unit}</span>}
            </h3>
            <span className="text-black font-semibold">{type}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
