import React, { useState } from "react";
import { PhonePreview } from "./components/PhonePreview";
import { ProfileForm } from "./components/ProfileForm";
import { CustomizationPanel } from "./components/CustomizationPanel";
export type Profile = {
    name: string;
    bio: string;
    links: {
        platform: string;
        url: string;
    }[];
};
export type Theme = {
    backgroundColor: string;
    textColor: string;
    accentColor: string;
    layout: "list" | "grid";
};
export function App() {
    const [profile, setProfile] = useState<Profile>({
        name: "",
        bio: "",
        links: [],
    });
    const [theme, setTheme] = useState<Theme>({
        backgroundColor: "#ffffff",
        textColor: "#000000",
        accentColor: "#3b82f6",
        layout: "list",
    });
    return (
        <main className="min-h-screen w-full bg-gray-100 p-4 sm:p-10 md:p-20 lg:p-40">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <ProfileForm profile={profile} setProfile={setProfile} />
                    <CustomizationPanel theme={theme} setTheme={setTheme} />
                </div>
                <div className="flex justify-center">
                    <PhonePreview profile={profile} theme={theme} />
                </div>
            </div>
        </main>
    );
}
