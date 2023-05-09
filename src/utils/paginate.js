import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const filteredItems = items.slice(startIndex, pageNumber * pageSize);
  return filteredItems;
}
