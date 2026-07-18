"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { sortTypes } from "@/constants";

const Sort = () => {
  const router = useRouter();
  const path = usePathname();

  const handleSort = () => {
    router.push(`${path}?sort=${value}`);
  };

  return (
    <Select onValueChange={handleSort} defaultValue={sortTypes[0].value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={sortTypes[0].value} />
      </SelectTrigger>
      <SelectContent className="sort-select-content bg-white">
        <SelectGroup>
          {sortTypes.map((sort) => (
            <SelectItem
              key={sort.label}
              value={sort.value}
              className="shad-select-item"
            >
              {sort.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sort;
