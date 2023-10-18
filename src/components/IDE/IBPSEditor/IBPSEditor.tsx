import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-code_lens";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";
import acePythonMode from "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-one_dark";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import AceEditor from "react-ace";
import usePrefersColorScheme from "use-prefers-color-scheme";
import { ibpsCodeAtom } from "../../../atoms/atoms";
import useFiles from "../../../hooks/useFiles";
import { WELCOME } from "../../../lib/welcome";

const IBPSEditor = () => {
  const { setFileContent, isWelcomePage } = useFiles();
  const { activeFile } = useFiles();
  const [ibpsCode] = useAtom(ibpsCodeAtom);
  const aceRef = useRef(null);

  const prefersColorScheme = usePrefersColorScheme();
  console.log(acePythonMode);

  useEffect(() => {
    if (aceRef.current) {
      const editor = (aceRef.current as AceEditor).editor;
      const session = editor.getSession();
      session.setMode(acePythonMode);
    }
  });

  return (
    <AceEditor
      className="font-mono"
      readOnly={isWelcomePage()}
      wrapEnabled={isWelcomePage()}
      value={isWelcomePage() ? WELCOME : ibpsCode}
      mode="python"
      showPrintMargin={false}
      theme={prefersColorScheme === "dark" ? "one_dark" : "crimson_editor"}
      fontSize={14}
      onChange={(val) => {
        if (!isWelcomePage()) {
          setFileContent(activeFile, val);
        }
      }}
      name="IBPSEditor"
      height="100%"
      width="100%"
      focus={true}
    />
  );
};

export default IBPSEditor;
