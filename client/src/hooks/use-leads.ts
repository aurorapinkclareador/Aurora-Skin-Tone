import { useMutation } from "@tanstack/react-query";
import { api, type LeadInput } from "@shared/routes";

// Note: This hook is provided to satisfy standard architecture requirements, 
// though the sales page uses direct checkout links as per specifications.
export function useCreateLead() {
  return useMutation({
    mutationFn: async (data: LeadInput) => {
      const validated = api.leads.create.input.parse(data);
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });
      if (!res.ok) {
        throw new Error('Falha ao registrar lead');
      }
      return api.leads.create.responses[201].parse(await res.json());
    },
  });
}
