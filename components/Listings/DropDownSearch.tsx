"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { ChevronDownIcon } from "primereact/icons/chevrondown";
import { ChevronRightIcon } from "primereact/icons/chevronright";

export default function DropDownMenu() {
  const [selectedCountry, setSelectedCountry] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const countries = [
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" },
  ];

  //   const selectedCountryTemplate = (option: { name: string }, props) => {
  //     if (option) {
  //       return (
  //         <div className="flex align-items-center">
  //           <div>{option.name}</div>
  //         </div>
  //       );
  //     }

  //     return <span>{props.placeholder}</span>;
  //   };

  //   const countryOptionTemplate = (option: { name: string; code: string }) => {
  //     return (
  //       <div className="flex align-items-center">
  //         <div>{option.name}</div>
  //       </div>
  //     );
  //   };

  //   const panelFooterTemplate = () => {
  //     return (
  //       <div className="py-2 px-3">
  //         {selectedCountry ? (
  //           <span>
  //             <b>{selectedCountry.name}</b> selected.
  //           </span>
  //         ) : (
  //           "No country selected."
  //         )}
  //       </div>
  //     );
  //   };

  return (
    <div className="card flex justify-content-center w-full md:w-96 border ">
      <Dropdown
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.value)}
        options={countries}
        optionLabel="name"
        placeholder="Filter by a Category"
        // valueTemplate={selectedCountryTemplate}
        // itemTemplate={countryOptionTemplate}
        className="w-full md:w-14rem"
        // panelFooterTemplate={panelFooterTemplate}
        dropdownIcon={(opts: any) => {
          return opts.iconProps["data-pr-overlay-visible"] ? (
            <ChevronRightIcon {...opts.iconProps} />
          ) : (
            <ChevronDownIcon {...opts.iconProps} />
          );
        }}
      />
    </div>
  );
}
