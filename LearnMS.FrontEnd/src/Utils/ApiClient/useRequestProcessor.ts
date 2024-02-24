import { useMutation, useQuery, useQueryClient } from 'react-query';

function useRequestProcessor() {
    const queryClient = useQueryClient();

    function query(key: any, queryFunction: any, options = {}) {
        return useQuery({
            queryKey: key,
            queryFn: queryFunction,
            ...options
        });
    }

    function mutate(key: any, mutationFunction: any, options = {}) {
        return useMutation({
            mutationKey: key,
            mutationFn: mutationFunction,
            onSettled: () => queryClient.invalidateQueries(key),
            ...options
        });
    }

    return { query, mutate };
}

export default useRequestProcessor;