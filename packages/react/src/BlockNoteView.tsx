import { BlockNoteEditor, BlockSchema } from "@blocknote/core";
import { MantineProvider } from "@mantine/core";
import { EditorContent } from "@tiptap/react";
import { getBlockNoteTheme } from "./BlockNoteTheme";
import { ReactNode, useEffect, useState } from "react";
import { FormattingToolbarPositioner } from "./FormattingToolbar/components/FormattingToolbarPositioner";
import { HyperlinkToolbarPositioner } from "./HyperlinkToolbar/components/HyperlinkToolbarPositioner";
import { SlashMenuPositioner } from "./SlashMenu/components/SlashMenuPositioner";
import { SideMenuPositioner } from "./SideMenu/components/SideMenuPositioner";

export function BlockNoteView<BSchema extends BlockSchema>(props: {
  editor: BlockNoteEditor<BSchema>;
  children?: ReactNode;
}) {
  const [ready, setReady] = useState(props.editor.ready);
  console.log(props.editor.ready);

  useEffect(() => {
    function checkReady() {
      if (!props.editor.ready) {
        window.setTimeout(checkReady, 100);
      } else {
        setReady(true);
      }
    }
    checkReady();

    // TODO: Shouldn't this work with props.editor.ready in deps? It fails in
    //  tests so it doesn't seem to.
    // if (props.editor.ready) {
    //   setReady(true);
    // }
  }, []);

  return (
    <MantineProvider theme={getBlockNoteTheme()}>
      <EditorContent
        editor={props.editor?._tiptapEditor}
        // TODO: Better class name
        className={"BlockNote"}>
        {ready &&
          (props.children || (
            <>
              <FormattingToolbarPositioner editor={props.editor} />
              <HyperlinkToolbarPositioner editor={props.editor} />
              <SlashMenuPositioner editor={props.editor} />
              <SideMenuPositioner editor={props.editor} />
            </>
          ))}
      </EditorContent>
    </MantineProvider>
  );
}
