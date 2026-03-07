import { type Lead, type InsertLead } from "@shared/schema";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
}

export class MemStorage implements IStorage {
  private leads: Map<number, Lead>;
  private currentId: number;

  constructor() {
    this.leads = new Map();
    this.currentId = 1;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const lead: Lead = { ...insertLead, id: this.currentId++ };
    this.leads.set(lead.id, lead);
    return lead;
  }
}

export const storage = new MemStorage();
