"use client";

import type { Component } from "@/lib/registry";
import { AvatarDocs } from "./avatar";
import { BadgeDocs } from "./badge";
import { ButtonDocs } from "./button";
import { CheckboxDocs } from "./checkbox";
import { TextareaDocs } from "./textarea";
import { AlertDocs } from "./alert";
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
    textarea: TextareaDocs,
    alert: AlertDocs,
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
