'use client';

import { TopAppBar } from "@/components/rendition/top-app-bar";
import { TextComponent } from "@/components/rendition/text-component";
import { SegmentedControl } from "@/components/rendition/segmented-control";
import { FormInputComponent } from "@/components/rendition/form-input";
import { ButtonComponent } from "@/components/rendition/button-component";

import { useState, useEffect, useRef } from "react";

export default function Component() {
  return (
    <>
      <TopAppBar
        title="Fertilizer Recommendation"
        leading={{
          type: "icon",
          icon: "menu",
          IconElement: MenuIcon,
        }}
        mode="sm"
      />
      
      <TextComponent content="Based on soil type and crop type, users receive tailored fertilizer suggestions." textAlign="center" />
      
      <SegmentedControl data={["Soil Type", "Crop Type"]} />
      
      <FormInputComponent title="Select Soil Type" placeholder="e.g., Clay, Sandy, Loamy" />
      <FormInputComponent title="Select Crop Type" placeholder="e.g., Corn, Wheat, Soybean" />
      
      <ButtonComponent title="Get Recommendation" style="primary" />
    </>
  );
}

function IconElement(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3h.01" />
      <path d="M14 2h.01" />
      <path d="m2 9 20-5" />
      <path d="M12 12V6.5" />
      <rect width="16" height="10" x="4" y="12" rx="3" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M4 17h16" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}