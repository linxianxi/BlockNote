import { useCallback } from "react";
import { Menu } from "@mantine/core";
import { BlockNoteEditor } from "@blocknote/core";
import { ToolbarButton } from "../../../SharedComponents/Toolbar/components/ToolbarButton";
import { ColorIcon } from "../../../SharedComponents/ColorPicker/components/ColorIcon";
import { ColorPicker } from "../../../SharedComponents/ColorPicker/components/ColorPicker";

export const ColorStyleButton = (props: { editor: BlockNoteEditor }) => {
  const getTextColor = () =>
    props.editor.getActiveStyles().textColor || "default";

  const setTextColor = useCallback(
    (color: string) => {
      props.editor.focus();
      color === "default"
        ? props.editor.removeStyles({ textColor: color })
        : props.editor.addStyles({ textColor: color });
    },
    [props.editor]
  );

  const getBackgroundColor = useCallback(
    () => props.editor.getActiveStyles().backgroundColor || "default",
    [props.editor]
  );

  const setBackgroundColor = (color: string) => {
    props.editor.focus();
    color === "default"
      ? props.editor.removeStyles({ backgroundColor: color })
      : props.editor.addStyles({ backgroundColor: color });
  };

  return (
    <Menu>
      <Menu.Target>
        <ToolbarButton
          mainTooltip={"Colors"}
          icon={() => (
            <ColorIcon
              textColor={getTextColor()}
              backgroundColor={getBackgroundColor()}
              size={20}
            />
          )}
        />
      </Menu.Target>
      <Menu.Dropdown>
        <ColorPicker
          textColor={getTextColor()}
          setTextColor={setTextColor}
          backgroundColor={getBackgroundColor()}
          setBackgroundColor={setBackgroundColor}
        />
      </Menu.Dropdown>
    </Menu>
  );
};