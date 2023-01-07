"use client";
import Button from "@components/ui/Button";
import { Camera } from "react-feather";
import Input, { Rounded, Size, Variant } from "@components/ui/Input";
import MultiSelect from "@components/ui/MultiSelect";
import Select from "@components/ui/Select";
import Switch from "@components/Switch";
import Checkbox from "@components/ui/Checkbox";
import Radio from "@components/ui/Radio";
import React, { useState } from "react";
export default function Page() {
  const [autoCompleteValue, setautoCompleteValue] = useState<string>();
  const [multiValues, setmultiValues] = useState<any>([]);
  const [checked, setchecked] = useState(false);
  const [variantvalue, setVariantValue] = useState<Variant>("normal");
  const [radiusValue, setRadiusValue] = useState<Rounded>("sm");
  const [sizeValue, SetSizeValue] = useState<Size>("md");
  const [isDisabledValue, setIsDisabledValue] = useState(false);
  const [isInvalid, SetIsInvalidValue] = useState(false);
  const [buttonVariant, setButtonVariant] = useState<any>("normal");
  const [buttonSizeValue, setButtonSizeValue] = useState<Size>("md");
  const [buttonRadiusValue, setButtonRadiusValue] = useState<Rounded>("sm");
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  return (
    <div>
      <div className="w-2/5 space-y-10 p-5 border-b  mt-10">
        <Input
          label="lable"
          type="email"
          rounded={radiusValue}
          disabled={isDisabledValue}
          invalid={isInvalid}
          size={sizeValue}
          variant={variantvalue}
          errorMsg="*Description of the error"
          placeholder="Add placeholder"
        />
        <div className="flex gap-4 flex-wrap">
          <Select
            creatable
            onChange={setVariantValue}
            value={variantvalue}
            label="Variant"
            placeholder="Input's Variant"
            data={["normal", "fill", "outlined"]}
          />
          <Select
            creatable
            onChange={setRadiusValue}
            value={radiusValue}
            label="Radius"
            placeholder="Input's Radius"
            data={["sm", "md", "lg", "full", "none"]}
          />
          <Select
            creatable
            onChange={SetSizeValue}
            value={sizeValue}
            label="Size"
            placeholder="Input's Size"
            data={["sm", "md", "lg"]}
          />
          <div className="flex gap-2 my-auto">
            <Switch
              onChange={() => {
                setIsDisabledValue(!isDisabledValue);
              }}
              label="Disabled"
            />
            <Switch
              onChange={() => {
                SetIsInvalidValue(!isInvalid);
              }}
              label="Invalid"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-3/5 space-y-10 p-5 border-b  mt-10">
        <div className="flex gap-5">
          <Button LeftIcon={Camera}>Hello</Button>
          <Button RightIcon={Camera}>Hello</Button>
          <Button href="google.com" size="md">
            Link
          </Button>
          <Button
            variant={buttonVariant}
            size={buttonSizeValue}
            loading={isLoadingButton}
            rounded={buttonRadiusValue}
            compact={isCompact}
            uppercase={isUppercase}
            disabled={isDisabledButton}
          >
            Hello
          </Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Select
            creatable
            onChange={setButtonVariant}
            value={buttonVariant}
            label="Variant"
            placeholder="Button's Variant"
            data={[
              "normal",
              "outlined",
              "primary",
              "danger",
              "success",
              "light",
              "subtle",
            ]}
          />
          <Select
            creatable
            onChange={setButtonRadiusValue}
            value={buttonRadiusValue}
            label="Radius"
            placeholder="Button's Radius"
            data={["sm", "md", "lg", "full", "none"]}
          />
          <Select
            creatable
            onChange={setButtonSizeValue}
            value={buttonSizeValue}
            label="Size"
            placeholder="Button's Size"
            data={["sm", "md", "lg"]}
          />
          <div className="flex gap-2 my-auto flex-wrap">
            <Switch
              onChange={() => {
                setIsDisabledButton(!isDisabledButton);
              }}
              label="Disabled button"
            />
            <Switch
              onChange={() => {
                setIsCompact(!isCompact);
              }}
              label="Compact"
            />
            <Switch
              onChange={() => {
                setIsLoadingButton(!isLoadingButton);
              }}
              label="Loading..."
            />
            <Switch
              onChange={() => {
                setIsUppercase(!isUppercase);
              }}
              label="Uppercase"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="my-6">
        <MultiSelect
          onChange={setmultiValues}
          values={multiValues}
          label="Pick a framework"
          creatable
          maxSelectedValues={2}
          placeholder="Pick all that you like"
          data={[
            { value: "React", label: "React" },
            { value: "Angular", label: "Angular" },
            { value: "Svelte", label: "Svelte" },
            { value: "Vue", label: "Vue" },
          ]}
        />
      </div>
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
    </div>
  );
}
