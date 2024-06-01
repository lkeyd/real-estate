"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';

export default function useSearchTerm() {
  const searchParams = useSearchParams();
  return searchParams.get("search");
}
