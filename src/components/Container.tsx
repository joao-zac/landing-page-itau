import { ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
    return (
        <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
            {children}
        </div>
    )
}