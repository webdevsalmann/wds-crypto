"use client"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { DataProvider } from "./data-context"

export default function Providers({ children }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <DataProvider>
                {children}
                <Toaster />
            </DataProvider>
        </ThemeProvider>
    )
}