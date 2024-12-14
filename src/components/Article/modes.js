import { useState } from "react";

export const HEAD_MODE = "WELCOME"
export const NAV_MODE = "READ"
export const ModeByState = () => {
    const [mode, setMode] = useState(HEAD_MODE)
    return [mode, setMode]
}

export const IdByState = () => {
    const [id, setId] = useState(1)
    return [id, setId]
}
