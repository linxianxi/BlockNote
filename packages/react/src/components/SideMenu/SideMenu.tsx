import {
  BlockSchema,
  DefaultBlockSchema,
  DefaultInlineContentSchema,
  DefaultStyleSchema,
  InlineContentSchema,
  StyleSchema,
} from "@blocknote/core";
import { ReactNode } from "react";

import { AddBlockButton } from "./DefaultButtons/AddBlockButton";
import { DragHandleButton } from "./DefaultButtons/DragHandleButton";
import { SideMenuProps } from "./SideMenuProps";

// TODO: props.dragHandleMenu should only be available if no children are passed
/**
 * By default, the SideMenu component will render with default buttons. However,
 * you can override the buttons to render by passing children. The children you
 * pass should be:
 *
 * - Default buttons: Components found within the `/DefaultButtons` directory.
 * - Custom buttons: The `SideMenuButton` component.
 */
export const SideMenu = <
  BSchema extends BlockSchema = DefaultBlockSchema,
  I extends InlineContentSchema = DefaultInlineContentSchema,
  S extends StyleSchema = DefaultStyleSchema
>(
  props: SideMenuProps<BSchema, I, S> & { children?: ReactNode }
) => {
  const { addBlock, ...rest } = props;

  return (
    <div
      className={"bn-side-menu"}
      // TODO: move to css
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: 0,
      }}>
      {props.children || (
        <>
          <AddBlockButton addBlock={addBlock} />
          <DragHandleButton {...rest} />
        </>
      )}
    </div>
  );
};