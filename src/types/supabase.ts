// Create a minimal Database type definition for Supabase
export type Database = {
    public: {
      Tables: {
        trades: {
          Row: {
            id: string;
            user_id: string;
            company_name: string;
            [key: string]: any;
          };
          Insert: {
            user_id: string;
            company_name: string;
            [key: string]: any;
          };
          Update: {
            user_id?: string;
            company_name?: string;
            [key: string]: any;
          };
        };
        jobs: {
          Row: {
            id: string;
            client_id: string;
            trade_type: string;
            job_description: string;
            [key: string]: any;
          };
          Insert: {
            client_id: string;
            trade_type: string;
            job_description: string;
            [key: string]: any;
          };
          Update: {
            client_id?: string;
            trade_type?: string;
            job_description?: string;
            [key: string]: any;
          };
        };
        matches: {
          Row: {
            id: string;
            job_id: string;
            trade_id: string;
            status: string;
            [key: string]: any;
          };
          Insert: {
            job_id: string;
            trade_id: string;
            status: string;
            [key: string]: any;
          };
          Update: {
            job_id?: string;
            trade_id?: string;
            status?: string;
            [key: string]: any;
          };
        };
        payments: {
          Row: {
            id: string;
            user_id: string;
            amount: number;
            currency: string;
            type: string;
            status: string;
            [key: string]: any;
          };
          Insert: {
            user_id: string;
            amount: number;
            currency: string;
            type: string;
            status: string;
            [key: string]: any;
          };
          Update: {
            user_id?: string;
            amount?: number;
            currency?: string;
            type?: string;
            status?: string;
            [key: string]: any;
          };
        };
        subscriptions: {
          Row: {
            id: string;
            trade_id: string;
            status: string;
            [key: string]: any;
          };
          Insert: {
            trade_id: string;
            status: string;
            [key: string]: any;
          };
          Update: {
            trade_id?: string;
            status?: string;
            [key: string]: any;
          };
        };
        whatsapp_notifications: {
          Row: {
            id: string;
            phone_number: string;
            message: string;
            status: string;
            [key: string]: any;
          };
          Insert: {
            phone_number: string;
            message: string;
            status: string;
            [key: string]: any;
          };
          Update: {
            phone_number?: string;
            message?: string;
            status?: string;
            [key: string]: any;
          };
        };
      };
      Views: {
        [key: string]: {
          Row: Record<string, any>;
        };
      };
      Functions: {
        [key: string]: {
          Args: Record<string, any>;
          Returns: any;
        };
      };
    };
  };
  