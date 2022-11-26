export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      orders: {
        Row: {
          id: string
          created_at: string
          email: string
          sent: boolean
          shop: string | null
          customer_locale: string
          name: string
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          sent?: boolean
          shop?: string | null
          customer_locale?: string
          name?: string
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          sent?: boolean
          shop?: string | null
          customer_locale?: string
          name?: string
        }
      }
      reviews: {
        Row: {
          created_at: string
          name: string
          description: string
          score: number
          order_id: string
        }
        Insert: {
          created_at?: string
          name?: string
          description: string
          score?: number
          order_id: string
        }
        Update: {
          created_at?: string
          name?: string
          description?: string
          score?: number
          order_id?: string
        }
      }
      stores: {
        Row: {
          shop: string
          name: string | null
          email: string | null
          dismissed: boolean | null
          shown_shop: string | null
          shown_email: string | null
          shown_name: string | null
        }
        Insert: {
          shop: string
          name?: string | null
          email?: string | null
          dismissed?: boolean | null
          shown_shop?: string | null
          shown_email?: string | null
          shown_name?: string | null
        }
        Update: {
          shop?: string
          name?: string | null
          email?: string | null
          dismissed?: boolean | null
          shown_shop?: string | null
          shown_email?: string | null
          shown_name?: string | null
        }
      }
    }
    Views: {
      order_names: {
        Row: {
          id: string | null
          user_name: string | null
          shop_name: string | null
        }
      }
      shop_names: {
        Row: {
          shop: string | null
          name: string | null
        }
        Insert: {
          shop?: string | null
          name?: never
        }
        Update: {
          shop?: string | null
          name?: never
        }
      }
      shop_reviews: {
        Row: {
          name: string | null
          description: string | null
          score: number | null
          shop: string | null
          created_at: string | null
        }
      }
      user_reviews: {
        Row: {
          name: string | null
          email: string | null
          shop: string | null
        }
      }
    }
    Functions: {
      gdpr_change_name_in_reviews: {
        Args: { email: string; shop: string }
        Returns: undefined
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
