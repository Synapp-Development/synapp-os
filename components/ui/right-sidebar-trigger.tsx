"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PanelRightIcon } from "lucide-react"
import { useRightSidebar } from "./right-sidebar-provider"

export function RightSidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useRightSidebar()

  return (
    <Button
      data-sidebar="right-trigger"
      data-slot="right-sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelRightIcon />
      <span className="sr-only">Toggle Right Sidebar</span>
    </Button>
  )
} 