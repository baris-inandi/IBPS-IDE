import { useEffect } from "react";
import usePrefersColorScheme from "use-prefers-color-scheme";

interface Props {
    children: React.ReactNode;
}

const ThemeColorChangeProvider: React.FC<Props> = (props) => {
    const prefersColorScheme = usePrefersColorScheme();

    useEffect(() => {
        const metaTag = document.getElementById(
            "theme-color",
        ) as HTMLMetaElement;
        if (!metaTag) {
            return;
        }
        if (prefersColorScheme === "dark") {
            metaTag.content = "#1D1F24";
        } else {
            metaTag.content = "#FAFAF9";
        }
    }, [prefersColorScheme]);

    return props.children;
};

export default ThemeColorChangeProvider;
