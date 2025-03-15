"use client"
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      modifiersClassNames={{
        months: "flex flex-col sm:flex-row gap-2 items-center",
        month: "flex flex-col gap-4 w-full",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-[20px] font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex w-full justify-between text-center",
        head_cell:
          "rounded-md w-full font-normal lg:text-[20px] text-center text-[#562C2C]",
        row: "flex w-full mt-2 justify-between text-center lg:gap-4 gap-1",
        cell: cn(
          "relative w-full text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        days: cn(
          buttonVariants({ variant: "outline" }),
          "lg:text-[20px] lg:py-8 font-normal aria-selected:opacity-100 w-full rounded-[10px] bg-[#FFF4F1] border-[#F2542D] text-[#562C2C]"
        ),
        range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        outside:
          "day-outside",
        disabled: "opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
      }}
      components={{
        PreviousMonthButton: ({ className, ...props }) => (
          <button {...props} className={cn("size-6 p-1", className)}>
            <ChevronLeft className="w-8 h-8 text-primary" />
          </button>
        ),
        NextMonthButton: ({ className, ...props }) => (
          <button {...props} className={cn("size-6 p-1", className)}>
            <ChevronRight className="w-8 h-8 text-primary" />
          </button>
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
