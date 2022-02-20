import React, { createContext } from "react";
import { Post, User, Comment } from "../interface/index";
import fetchData from "../components/hooks/fetch-query";
import { useQuery, UseQueryResult } from "react-query";

interface All {
  data: [Post[], User[], Comment[]] | undefined;
  status: string;
}

const PostContext = createContext<All>(undefined!);

export function PostContextProvider({ children }: { children: React.ReactNode }) {
  // const [usePost, setPost] = useState<Post | undefined>(undefined);

  const { data, status }: UseQueryResult<undefined> = useQuery(["data", null], () => fetchData(null, "2"));

  return <PostContext.Provider value={{ data, status }}>{children}</PostContext.Provider>;
}

export const useData = () => React.useContext(PostContext);
