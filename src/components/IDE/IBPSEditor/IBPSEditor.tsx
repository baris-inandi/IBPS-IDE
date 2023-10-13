import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-code_lens";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/mode-plain_text";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-one_dark";
import { useAtom } from "jotai";
import AceEditor from "react-ace";
import usePrefersColorScheme from "use-prefers-color-scheme";
import { ibpsCodeAtom } from "../../../atoms/atoms";
import useFiles from "../../../hooks/useFiles";
import { WELCOME } from "../../../lib/welcome";

const IBPSEditor = () => {
  const { setFileContent, isWelcomePage } = useFiles();
  const { activeFile } = useFiles();
  const [ibpsCode] = useAtom(ibpsCodeAtom);

  const prefersColorScheme = usePrefersColorScheme();

  return (
    <AceEditor
      className="font-mono"
      readOnly={isWelcomePage()}
      wrapEnabled={isWelcomePage()}
      value={isWelcomePage() ? WELCOME : ibpsCode}
      mode="plain_text"
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
    />
  );
};

export default IBPSEditor;
