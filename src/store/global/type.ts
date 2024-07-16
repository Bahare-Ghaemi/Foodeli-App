type TGlobalStore = {
    currentTheme: "light" | "dark"

    setCurrentTheme: (theme: "light" | "dark") => void
}

export default TGlobalStore