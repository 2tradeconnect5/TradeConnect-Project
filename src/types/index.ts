export interface UserType {
  id: string;
  email: string;
  role: 'admin' | 'trade' | 'client';
  created_at: string;
}

export type TradeType = 
  | 'plumber' 
  | 'electrician' 
  | 'carpenter' 
  | 'painter' 
  | 'roofer' 
  | 'landscaper' 
  | 'hvac' 
  | 'general';

  export type JobUrgency = 
  | 'emergency' 
  | 'urgent' 
  | 'standard' 
  | 'flexible';

  export type ContactMethod = 
  | 'phone' 
  | 'email' 
  | 'whatsapp';

export interface Trade {
  id: string;
  user_id: string;
  company_name: string;
  company_address: string;
  vat_registered: boolean;
  bio: string;
  services_offered: string[];
  verified: boolean;
  response_rate: number;
  rating: number;
  lead_counter: number;
  trade_of_week_wins: number;
  ranking_score: number;
}

export interface Client {
  id: string;
  user_id: string;
  name?: string;
  email: string;
  phone?: string;
  whatsapp_number?: string;
  location: string;
  jobs_posted_count: number;
  credit_balance: number;
  reputation_score: number;
  created_at: string;
}

export interface Job {
  id: string;
  client_id: string;
  trade_type: string;
  job_description: string;
  location: string;
  budget_range?: string;
  timeframe: string;
  contact_method: 'phone' | 'email' | 'whatsapp';
  contact_details: string;
  status: 'pending' | 'matched' | 'accepted' | 'completed' | 'cancelled';
  created_at: string;
}

export enum MatchStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
  COMPLETED = 'completed'
}

export interface Match {
  id: string;
  job_id: string;
  trade_id: string;
  match_score: number;
  status: MatchStatus;
  is_free_lead: boolean;
  created_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  amount: number;
  type: 'subscription' | 'lead' | 'credit';
  status: 'pending' | 'succeeded' | 'failed';
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  created_at: string;
}

export interface TradeOfWeek {
  id: string;
  trade_id: string;
  week_starting: string;
  week_ending: string;
  reason: string;
  created_at: string;
}

export interface ClientCredit {
  id: string;
  client_id: string;
  amount: number;
  transaction_type: 'purchase' | 'use' | 'refund';
  created_at: string;
}

export interface Ad {
  id: string;
  title: string;
  description: string;
  image_url: string;
  target_url: string;
  sponsor: string;
  target_trade_types?: string[];
  target_locations?: string[];
  priority: number;
  created_at: string;
}

// Supabase Database type
export type Database = {
  public: {
    Tables: {
      users: {
        Row: UserType;
        Insert: Omit<UserType, 'id' | 'created_at'>;
        Update: Partial<Omit<UserType, 'id' | 'created_at'>>;
      };
      trades: {
        Row: Trade;
        Insert: Omit<Trade, 'id'>;
        Update: Partial<Omit<Trade, 'id'>>;
      };
      clients: {
        Row: Client;
        Insert: Omit<Client, 'id' | 'created_at'>;
        Update: Partial<Omit<Client, 'id' | 'created_at'>>;
      };
      jobs: {
        Row: Job;
        Insert: Omit<Job, 'id' | 'created_at'>;
        Update: Partial<Omit<Job, 'id' | 'created_at'>>;
      };
      matches: {
        Row: Match;
        Insert: Omit<Match, 'id' | 'created_at'>;
        Update: Partial<Omit<Match, 'id' | 'created_at'>>;
      };
      payments: {
        Row: Payment;
        Insert: Omit<Payment, 'id' | 'created_at'>;
        Update: Partial<Omit<Payment, 'id' | 'created_at'>>;
      };
      notifications: {
        Row: Notification;
        Insert: Omit<Notification, 'id' | 'created_at'>;
        Update: Partial<Omit<Notification, 'id' | 'created_at'>>;
      };
      trade_of_week: {
        Row: TradeOfWeek;
        Insert: Omit<TradeOfWeek, 'id' | 'created_at'>;
        Update: Partial<Omit<TradeOfWeek, 'id' | 'created_at'>>;
      };
      client_credits: {
        Row: ClientCredit;
        Insert: Omit<ClientCredit, 'id' | 'created_at'>;
        Update: Partial<Omit<ClientCredit, 'id' | 'created_at'>>;
      };
      ads: {
        Row: Ad;
        Insert: Omit<Ad, 'id' | 'created_at'>;
        Update: Partial<Omit<Ad, 'id' | 'created_at'>>;
      };
    };
  };
}
