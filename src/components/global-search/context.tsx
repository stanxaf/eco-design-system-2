"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getGlobalSearchItems, type GlobalSearchItem } from "@/lib/global-search-items";

interface GlobalSearchContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  items: GlobalSearchItem[];
}

const GlobalSearchContext = createContext<GlobalSearchContextType | undefined>(undefined);

interface GlobalSearchProviderProps {
  children: React.ReactNode;
}

export function GlobalSearchProvider({ children }: GlobalSearchProviderProps) {
  const [open, setOpen] = useState(false);
  const items = getGlobalSearchItems();

  const toggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <GlobalSearchContext.Provider
      value={{
        open,
        setOpen,
        toggle,
        items,
      }}
    >
      {children}
    </GlobalSearchContext.Provider>
  );
}

export function useGlobalSearch() {
  const context = useContext(GlobalSearchContext);
  if (context === undefined) {
    throw new Error("useGlobalSearch must be used within a GlobalSearchProvider");
  }
  return context;
}
