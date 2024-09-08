'use client';
import { TopAppBar } from "@/components/rendition/top-app-bar";
import { ChipGroup, ChipItem } from "@/components/rendition/chip-group";
import { TitleComponent } from "@/components/rendition/title";
import { MetricDashboardGroup, MetricDashboardItem } from "@/components/rendition/metric-dashboard";
import { ScrollGalleryGroup, ScrollGalleryItem } from "@/components/rendition/scroll-gallery";
import { ContentTilesGroup, ContentTilesItem } from "@/components/rendition/content-tiles";
import { BottomAppBar } from "@/components/rendition/bottom-app-bar";

import { useState, useEffect, useRef } from "react";

export default function Component() {
  return (
    <>
      <TopAppBar
        title="AgroPredict Dashboard"
        leading={{
          type: "icon",
          icon: "menu",
          IconElement: MenuIcon,
        }}
        mode="sm"
      />
      
      <ChipGroup wrapMode="scroll" style="filled">
        <ChipItem title="EN" />
        <ChipItem title="हिंदी" />
      </ChipGroup>
      
      <TitleComponent title="Welcome to AgroPredict" textAlign="center" />
      
      <MetricDashboardGroup style="filled" textAlign="center">
        <MetricDashboardItem title="Current Temperature" subtitle="75°F" />
        <MetricDashboardItem title="Humidity" subtitle="60%" />
        <MetricDashboardItem title="Rainfall Prediction" subtitle="10% chance" />
      </MetricDashboardGroup>
      
      <ScrollGalleryGroup aspectRatio="landscape" style="outlined" size="md">
        <ScrollGalleryItem
          title="Crop Prediction"
          subtitle="Expected yield: 1500 lbs/acre"
          imageDescription="Graph showing crop yield predictions"
          imageSrc="https://file.rendit.io/n/vQA16pIzjx.png"
        />
        <ScrollGalleryItem
          title="Market Trends"
          subtitle="Corn prices up by 5%"
          imageDescription="Graph showing market price trends"
          imageSrc="https://file.rendit.io/n/X8c2KAMG3z.png"
        />
      </ScrollGalleryGroup>
      
      <TitleComponent title="Insights" textAlign="left" />
      
      <ContentTilesGroup>
        <ContentTilesItem
          title="Weather Alerts"
          subtitle="Stay updated with real-time alerts"
          icon="warning"
          IconElement={HeadphonesIcon}
        />
        <ContentTilesItem
          title="Crop Health Monitoring"
          subtitle="Check the health of your crops"
          icon="health_and_safety"
          IconElement={HeadphonesIcon}
        />
        <ContentTilesItem
          title="Market Analysis"
          subtitle="Get insights on market fluctuations"
          icon="analytics"
          IconElement={NotebookIcon}
        />
      </ContentTilesGroup>
      
      <BottomAppBar
        showText={true}
        selectedIndex={0}
        actions={[
          {
            title: "Home",
            icon: "home",
            IconElement: HomeIcon,
          },
          {
            title: "Insights",
            icon: "insights",
            IconElement: NotebookIcon,
          },
          {
            title: "Settings",
            icon: "settings",
            IconElement: SettingsIcon,
          },
        ]}
      />
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

function HeadphonesIcon(props) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function NotebookIcon(props) {
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
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}