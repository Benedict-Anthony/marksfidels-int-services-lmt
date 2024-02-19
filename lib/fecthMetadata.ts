export const fecthMetadata = async (slug: string) => {
  "use server";
  const response = await fetch(`http://localhost:8000/api/${slug}`);
  const data: ResultItem = await response.json();
  return data;
};
