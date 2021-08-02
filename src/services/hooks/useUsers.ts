import { useQuery } from "react-query";
import { api } from "../../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("users");

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

  return users;
}

export function useUsers() {
  // chave em que os dados vão ser guardados em cache
  return useQuery("users", getUsers, {
    // por quanto tempos os dados vão ser fresh (não obsoletos)
    // enquanto eles forem fresh, não é preciso fazer requisições, só quando forem stale (obsoletos)
    staleTime: 1000 * 5, // 5 seconds
  });
}
