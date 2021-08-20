export const getRectRelativeToParent = (elementRect, parentElementRect) =>
  new DOMRect(
    elementRect.left - parentElementRect.left,
    elementRect.top - parentElementRect.top,
    elementRect.width,
    elementRect.height
  )
