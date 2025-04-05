import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// Initialize Supabase client with environment variables
// In production, these would be set in your environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';

// Create a single supabase client for the entire app
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Helper functions for common Supabase operations
export async function signUp(email: string, password: string, userData: Record<string, any>) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error signing up:', error);
    return { data: null, error };
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error signing in:', error);
    return { data: null, error };
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Error signing out:', error);
    return { error };
  }
}

export async function getCurrentUser() {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { user: data.user, error: null };
  } catch (error) {
    console.error('Error getting current user:', error);
    return { user: null, error };
  }
}

export async function getTradeProfile(userId: string) {
  try {
    const { data, error } = await supabase
      .from('trades')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error) throw error;
    return { profile: data, error: null };
  } catch (error) {
    console.error('Error getting trade profile:', error);
    return { profile: null, error };
  }
}

export async function updateTradeProfile(userId: string, profileData: Record<string, any>) {
  try {
    const { data, error } = await supabase
      .from('trades')
      .update(profileData)
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return { profile: data, error: null };
  } catch (error) {
    console.error('Error updating trade profile:', error);
    return { profile: null, error };
  }
}

export async function createJob(jobData: Record<string, any>) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert(jobData)
      .select()
      .single();
    
    if (error) throw error;
    return { job: data, error: null };
  } catch (error) {
    console.error('Error creating job:', error);
    return { job: null, error };
  }
}

export async function getJobsForTrade(tradeId: string, status?: string) {
  try {
    let query = supabase
      .from('matches')
      .select('*, jobs(*)')
      .eq('trade_id', tradeId);
    
    if (status) {
      query = query.eq('status', status);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    return { matches: data, error: null };
  } catch (error) {
    console.error('Error getting jobs for trade:', error);
    return { matches: null, error };
  }
}

export async function updateMatchStatus(matchId: string, status: string) {
  try {
    const { data, error } = await supabase
      .from('matches')
      .update({ status })
      .eq('id', matchId)
      .select()
      .single();
    
    if (error) throw error;
    return { match: data, error: null };
  } catch (error) {
    console.error('Error updating match status:', error);
    return { match: null, error };
  }
}
