import { useMutation } from '@tanstack/react-query';
import { UpdateClientPayload, updateClientById } from '../updateClientById';

type MutationCallbacks = {
  onSuccess: () => void;
  onError: () => void;
}

export const useClientAddMutation = ({ onSuccess, onError }: MutationCallbacks) => {
  return useMutation({
    mutationFn: async (values: UpdateClientPayload) => { return await updateClientById(values) },
    onSuccess,
    onError
  })
}