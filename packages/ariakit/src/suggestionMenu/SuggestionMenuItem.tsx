import { mergeCSSClasses } from "@blocknote/core";
import { ComponentProps } from "@blocknote/react";
import { forwardRef, useCallback } from "react";

export const SuggestionMenuItem = forwardRef<
  HTMLDivElement,
  ComponentProps["SuggestionMenu"]["Item"]
>((props, ref) => {
  const {
    className,
    title,
    subtext,
    // group,
    icon,
    badge,
    // aliases,
    // onItemClick,
    isSelected,
    setSelected,
    onClick,
  } = props;

  const handleMouseLeave = useCallback(() => {
    setSelected?.(false);
  }, [setSelected]);

  const handleMouseEnter = useCallback(() => {
    setSelected?.(true);
  }, [setSelected]);

  return (
    <div
      // component="div"
      className={mergeCSSClasses("bn-ak-menu-item", className || "")}
      ref={ref}
      onClick={onClick}
      // Ensures an item selected with both mouse & keyboard doesn't get deselected on mouse leave.
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-hovered={isSelected ? "" : undefined}>
      {icon && (
        <div
          className="bn-ak-suggestion-menu-item-section"
          data-position="left">
          {icon}
        </div>
      )}
      <div className="bn-ak-suggestion-menu-item-body">
        <div className="bn-ak-suggestion-menu-item-title">{title}</div>
        <div className="bn-ak-suggestion-menu-item-subtitle">{subtext}</div>
      </div>
      {badge && (
        <div
          data-position="right"
          className="bn-ak-suggestion-menu-item-section">
          <div>{badge}</div>
        </div>
      )}
    </div>
  );
});