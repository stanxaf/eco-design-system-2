"use client";

import type { Component } from "@/lib/registry";
import { AlertDocs } from "./alert";
import { AvatarDocs } from "./avatar";
import { BadgeDocs } from "./badge";
import { ButtonDocs } from "./button";
import { CheckboxDocs } from "./checkbox";
import { ComboboxDocs } from "./combobox";
import { NavigationMenuDocs } from "./navigation-menu";
import { SwitchDocs } from "./switch";
import { TextareaDocs } from "./textarea";
import { SkeletonDocs } from "./skeleton";
import { SelectDocs } from "./select";
import { RadioGroupDocs } from "./radio-group";
import { DataTablePaginationDocs } from "./data-table-pagination";
import { GenericDocs } from "./generic";

interface ComponentDocsProps {
  component: Component;
}

export function ComponentDocs({ component }: ComponentDocsProps) {
  // Map component names to their specific documentation components
  const docsMap: Record<string, React.ComponentType> = {
    avatar: AvatarDocs,
    badge: BadgeDocs,
    button: ButtonDocs,
    checkbox: CheckboxDocs,
    combobox: ComboboxDocs,
    "navigation-menu": NavigationMenuDocs,
    switch: SwitchDocs,
    textarea: TextareaDocs,
    alert: AlertDocs,
    skeleton: SkeletonDocs,
    select: SelectDocs,
    "radio-group": RadioGroupDocs,
    "data-table-pagination": DataTablePaginationDocs,
  };

  // Get the appropriate documentation component
  const DocsComponent = docsMap[component.name];

  if (DocsComponent) {
    // For components with specific documentation, render without props
    return <DocsComponent />;
  } else {
    // For components without specific documentation, use GenericDocs with component prop
    return <GenericDocs component={component} />;
  }
}
