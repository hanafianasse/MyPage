import React from "react";

export function SkilCard({ label, text, icon }) {

    return (
        <div className="w-full h-full flex flex-col bg-[#1F1F1F] aspect-square rounded-xl border-[1px] border-[#595959]">
            <div className="flex-1">
                <div className="h-full flex justify-center items-center">
                    <div className="rounded-full p-5 bg-black border-[2px] border-[#faa908]">{icon}</div>
                </div>
            </div>
            <div className="flex-1 text-center px-2 pb-2">
                <div className="text-banana font-bold text-xl">{label.toUpperCase()}</div>
                <div className="mt-5">{text}</div>
            </div>
        </div>
    );
}