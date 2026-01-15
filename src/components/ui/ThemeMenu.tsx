"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useState } from "react";

function ThemeIcon({ theme }: { theme: string | undefined }) {
  const iconClass = "h-4 w-4";

  switch (theme) {
    case "light":
      return <Sun className={iconClass} aria-hidden="true" />;
    case "dark":
      return <Moon className={iconClass} aria-hidden="true" />;
    default:
      return <Monitor className={iconClass} aria-hidden="true" />;
  }
}

function MenuItem({
  label,
  active,
  onSelect,
}: {
  label: string;
  active?: boolean;
  onSelect: () => void;
}) {
  return (
    <DropdownMenu.Item
      className={cn(
        "cursor-pointer select-none rounded-xl px-3 py-2 text-sm outline-none transition focus:bg-white/10",
        active ? "bg-white/10 text-white" : "text-white/85",
      )}
      onSelect={onSelect}
    >
      {label}
    </DropdownMenu.Item>
  );
}

export function ThemeMenu() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isClient] = useState(() => typeof window !== "undefined");
  const currentTheme = theme === "system" ? systemTheme : theme;

  const icon = isClient ? <ThemeIcon theme={theme} /> : <Monitor className="h-4 w-4" aria-hidden="true" />;

  return (
    <DropdownMenu.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <DropdownMenu.Trigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="px-3"
              aria-label="Change theme"
              suppressHydrationWarning
            >
              {icon}
            </Button>
          </DropdownMenu.Trigger>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            align="end"
            className="z-50 rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-xs text-white shadow-lg backdrop-blur-xl"
          >
            Theme
            <Tooltip.Arrow className="fill-black/80" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          className="z-50 w-48 overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-2 text-white shadow-lg backdrop-blur-xl"
        >
          <div className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Appearance
          </div>
          <MenuItem
            label="Light"
            active={currentTheme === "light" && theme !== "system"}
            onSelect={() => setTheme("light")}
          />
          <MenuItem
            label="Dark"
            active={currentTheme === "dark" && theme !== "system"}
            onSelect={() => setTheme("dark")}
          />
          <MenuItem
            label="System"
            active={theme === "system"}
            onSelect={() => setTheme("system")}
          />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
