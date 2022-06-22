import useSWR, { SWRConfiguration } from "swr";

export const useProduct = (gql:any, config: SWRConfiguration = {}) => {
  const { isValidating, error, data } = useSWR(gql, config);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
};
