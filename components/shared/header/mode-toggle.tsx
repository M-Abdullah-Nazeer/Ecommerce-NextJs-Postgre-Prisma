'use client'

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

import { useTheme } from "next-themes";

const ModeToggle = () => {

    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">

                    {
                        theme === 'system' ? (<SunMoon />) : theme === "dark" ? (<MoonIcon />) : <SunIcon />
                    }

                </Button>

            </DropdownMenuTrigger>

            <DropdownMenuContent>

                <DropdownMenuLabel>Appearence</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>

                    System

                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>

                    Light

                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>

                    Dark

                </DropdownMenuCheckboxItem>

            </DropdownMenuContent>

        </DropdownMenu>
    );
}

export default ModeToggle;