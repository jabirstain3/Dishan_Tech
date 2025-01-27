import {HeroUIProvider} from "@heroui/react";

const Provider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <HeroUIProvider>
            { children }
        </HeroUIProvider>
    );
};

export default Provider;