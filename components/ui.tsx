"use client";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";
export function IconButton({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) { return <button className={clsx("icon-button", className)} {...props}>{children}</button>; }
export function Pill({ active, children, onClick }: { active?: boolean; children: ReactNode; onClick?: () => void }) { return <button onClick={onClick} className={clsx("pill", active && "pill-active")}>{children}</button>; }
