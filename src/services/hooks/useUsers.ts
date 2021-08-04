import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  users: User[];
  totalCount: number;
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));

  return { users, totalCount };
}

export function useUsers(page: number, options?: UseQueryOptions) {
  // chave em que os dados vão ser guardados em cache
  return useQuery(["users", page], () => getUsers(page), {
    // por quanto tempos os dados vão ser fresh (não obsoletos)
    // enquanto eles forem fresh, não é preciso fazer requisições, só quando forem stale (obsoletos)
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  }) as UseQueryResult<GetUsersResponse, unknown>;
}
