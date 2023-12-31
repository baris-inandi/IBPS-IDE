import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { BsDatabaseFill } from "react-icons/bs";
import packagejson from "../../../../package.json";
import { usedDiskSpaceAtom } from "../../../atoms/atoms";
import { getCompilerVersion } from "../../../lib/ibpscomp-rs/ibpscomp";

const BottomBar = () => {
    const [{ usedBytesRepr, availableBytesRepr, usedBytesPercentage }] =
        useAtom(usedDiskSpaceAtom);
    const [compilerVersion, setCompilerVersion] = useState("");
    const [uiVersion, setUiVersion] = useState("");

    useEffect(() => {
        getCompilerVersion().then((v) => setCompilerVersion(v));
        setUiVersion(packagejson.version);
    }, []);

    return (
        <div className="border-t dark:border-black px-2 text-sm w-full bg-blue-500 text-white border-stone-300 dark:bg-onedark-1000 dark:text-neutral-500 flex justify-between">
            <p>
                IBPS IDE <code className="font-bold pl-[2px]">{uiVersion}</code> • ibpscomp-rs{" "}
                <code className="font-bold pl-[2px]">{compilerVersion}</code> • created by{" "}
                <a
                    className="underline underline-offset-2 font-medium"
                    target="blank"
                    href="https://inandioglu.com"
                >
                    Baris
                </a>
            </p>
            <div className="flex items-center gap-2 w-64">
                <div
                    className={`rounded-full w-full bg-black dark:bg-onedark-900 bg-opacity-20 h-[8px] ${
                        usedBytesPercentage >= 90 ? "border border-red-200" : ""
                    }`}
                >
                    <div
                        style={{
                            width:
                                usedBytesPercentage >= 100
                                    ? "100%"
                                    : usedBytesPercentage < 10
                                    ? "8px"
                                    : usedBytesPercentage + "%",
                        }}
                        className="rounded-full h-full bg-white border border-stone-300 dark:bg-onedark-600 dark:border-black"
                    />
                </div>
                <div className="flex flex-shrink-0 items-center h-full gap-2">
                    <span className="h-fit">
                        <BsDatabaseFill />
                    </span>
                    <span>
                        {usedBytesRepr} of {availableBytesRepr} used
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;

