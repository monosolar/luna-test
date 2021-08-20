export const getRectRelativeToParent = (elementRect, parentElementRect) => {
  //   relativePos.top = childrenPos.top - parentPos.top,
  // relativePos.right = childrenPos.right - parentPos.right,
  // relativePos.bottom = childrenPos.bottom - parentPos.bottom,
  // relativePos.left = childrenPos.left - parentPos.left;

  return new DOMRect(
    elementRect.left - parentElementRect.left,
    elementRect.top - parentElementRect.top,
    elementRect.width,
    elementRect.height
  )
}
