import { useQuery } from '@tanstack/react-query';
import { getAllClients } from '../getAllClients';
import { QUERY_KEYS } from '../constants';
import { getClientById } from '../getClientByID';

export const useGetAllClients = () => {
  return useQuery({ queryKey: [QUERY_KEYS.clients.getAll], queryFn: getAllClients })
}

export const useGetClientById = (id?: string) => {
  return useQuery({ queryKey: [QUERY_KEYS.clients.get, id], queryFn: () => getClientById(id || ""), enabled: !!id })
}