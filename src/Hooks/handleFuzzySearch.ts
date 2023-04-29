import FuzzySearch from "fuzzy-search";

export const handleUsernameSearch = (ListOfUsers: any, LookUpValue: string) => {
  const noResults = [
    {
      displayName: "No Results",
    },
  ];

  const searcher = new FuzzySearch(ListOfUsers, ["displayName", "userName"], {
    caseSensitive: false,
  });
  const results = searcher.search(LookUpValue);

  if (results.length === 0) {
    return noResults;
  }

  if (LookUpValue === "") {
    return [];
  }

  return results;
};
