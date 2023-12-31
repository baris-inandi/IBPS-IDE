interface IDEPanelTopbarProps {
    children?: React.ReactNode;
    pl?: boolean;
    pr?: boolean;
}

const IDEPanelTopbar: React.FC<IDEPanelTopbarProps> = (props) => {
    return (
        <div
            className={`
      ${props.pl ? "pl-3" : ""}
      ${props.pr ? "pr-3" : ""}
      flex-shrink-0 border-b border-stone-300 dark:border-black flex justify-between items-center h-8 pt-[1px] text-sm w-full bg-stone-50 text-black dark:text-white dark:bg-onedark-950`}
        >
            {props.children}
        </div>
    );
};

export default IDEPanelTopbar;
