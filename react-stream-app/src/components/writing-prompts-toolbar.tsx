import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

import {
    Briefcase,
    ChevronDown,
    List,
    Minimize2,
    Palette,
    PenLine,
    Smile,
    SpellCheck,
    Type,
} from "lucide-react";

import React, { useState } from "react";

interface WritingPromptsToolbarProps {
    onPromptSelect: (prompt: string) => void;
    className?: string;
}

const toolbarPrompts = [
    {
        icon: SpellCheck,
        text: "Fix grammar & spelling",
        category: "Editing",
    },
    {
        icon: Minimize2,
        text: "Make this more concise",
        category: "Refinement",
    },
    {
        icon: Briefcase,
        text: "Write this more professionally",
        category: "Tone",
    },
    {
        icon: Smile,
        text: "Make it sound more human",
        category: "Style"
    },
    {
        icon: List,
        text: "Summarize the key points",
        category: "Summary",
    },
    {
        icon: PenLine,
        text: "Continue writing from here",
        category: "Generation",
    },
    {
        icon: Type,
        text: "Suggest a title for this",
        category: "Ideas",
    },
    {
        icon: Palette,
        text: "Change the tone to be more...",
        category: "Tone",
    },
];

export const WritingPromptsToolbar: React.FC<WritingPromptsToolbarProps> = ({ onPromptSelect, className=""}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (

        <div className={`relative ${className}`}>
            {/* Expanded menu */}
            {
                isExpanded && (
                    <>
                    {/* Backdrop to close menu when clicking outside */}
                    <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsExpanded(false)}
                    />
                    </>
                )
            }

            {/* Toolbar - always visible */}
            <div>

            </div>
        </div>
    );
};