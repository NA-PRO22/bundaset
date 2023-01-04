"use client";

import Switch from "@components/Switch";
import Checkbox from "@components/ui/Checkbox";
import Radio from "@components/ui/Radio";
import React, { useState } from "react";

export default function Page() {
  const [checked, setchecked] = useState(false);
  return (
    <div>
      <div className="m-5">
        <Radio
          checked={true}
          onChange={() => {}}
          label="How is the gym training"
        />
        <Radio label="What is andela" onChange={() => {}} />
      </div>
      <div className="m-5">
        <Checkbox
          checked={checked}
          onChange={() => {
            setchecked(!checked);
          }}
          label="Click me to change the selected"
        />
      </div>
      <div className="my-10 mx-5">
        <Switch
          onChange={() => {}}
          title="Available to hire"
          subTitle="Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia."
        />
        <Switch onChange={() => {}} label="Aliquet turpis sed sit lacinia." />
      </div>
    </div>
  );
}
