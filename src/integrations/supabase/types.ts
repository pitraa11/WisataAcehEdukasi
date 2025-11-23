export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      kegiatan_edukasi: {
        Row: {
          biaya: number
          created_at: string
          harasumber: string | null
          id_kegiatan: string
          id_wisata: string
          jadwal: string | null
          kapasitas: number
          nama_kegiatan: string
        }
        Insert: {
          biaya?: number
          created_at?: string
          harasumber?: string | null
          id_kegiatan?: string
          id_wisata: string
          jadwal?: string | null
          kapasitas?: number
          nama_kegiatan: string
        }
        Update: {
          biaya?: number
          created_at?: string
          harasumber?: string | null
          id_kegiatan?: string
          id_wisata?: string
          jadwal?: string | null
          kapasitas?: number
          nama_kegiatan?: string
        }
        Relationships: [
          {
            foreignKeyName: "kegiatan_edukasi_id_wisata_fkey"
            columns: ["id_wisata"]
            isOneToOne: false
            referencedRelation: "tempat_wisata"
            referencedColumns: ["id_wisata"]
          },
        ]
      }
      pengunjung: {
        Row: {
          alamat: string | null
          created_at: string
          id_pengunjung: string
          nama_pengunjung: string
          no_hp: string
        }
        Insert: {
          alamat?: string | null
          created_at?: string
          id_pengunjung?: string
          nama_pengunjung: string
          no_hp: string
        }
        Update: {
          alamat?: string | null
          created_at?: string
          id_pengunjung?: string
          nama_pengunjung?: string
          no_hp?: string
        }
        Relationships: []
      }
      reservasi_kegiatan: {
        Row: {
          created_at: string
          id_kegiatan: string
          id_pengunjung: string
          id_reservasi: string
          status_reservasi: string
          tanggal_reservasi: string
        }
        Insert: {
          created_at?: string
          id_kegiatan: string
          id_pengunjung: string
          id_reservasi?: string
          status_reservasi?: string
          tanggal_reservasi: string
        }
        Update: {
          created_at?: string
          id_kegiatan?: string
          id_pengunjung?: string
          id_reservasi?: string
          status_reservasi?: string
          tanggal_reservasi?: string
        }
        Relationships: [
          {
            foreignKeyName: "reservasi_kegiatan_id_kegiatan_fkey"
            columns: ["id_kegiatan"]
            isOneToOne: false
            referencedRelation: "kegiatan_edukasi"
            referencedColumns: ["id_kegiatan"]
          },
          {
            foreignKeyName: "reservasi_kegiatan_id_pengunjung_fkey"
            columns: ["id_pengunjung"]
            isOneToOne: false
            referencedRelation: "pengunjung"
            referencedColumns: ["id_pengunjung"]
          },
        ]
      }
      tempat_wisata: {
        Row: {
          created_at: string
          deskripsi: string | null
          gambar_url: string | null
          id_wisata: string
          jam_buka: string | null
          jam_tutup: string | null
          jenis_wisata: string
          lokasi: string
          nama_wisata: string
        }
        Insert: {
          created_at?: string
          deskripsi?: string | null
          gambar_url?: string | null
          id_wisata?: string
          jam_buka?: string | null
          jam_tutup?: string | null
          jenis_wisata: string
          lokasi: string
          nama_wisata: string
        }
        Update: {
          created_at?: string
          deskripsi?: string | null
          gambar_url?: string | null
          id_wisata?: string
          jam_buka?: string | null
          jam_tutup?: string | null
          jenis_wisata?: string
          lokasi?: string
          nama_wisata?: string
        }
        Relationships: []
      }
      tiket: {
        Row: {
          created_at: string
          id_pengunjung: string
          id_tiket: string
          id_wisata: string
          jumlah_tiket: number
          tanggal_kunjungan: string
        }
        Insert: {
          created_at?: string
          id_pengunjung: string
          id_tiket?: string
          id_wisata: string
          jumlah_tiket?: number
          tanggal_kunjungan: string
        }
        Update: {
          created_at?: string
          id_pengunjung?: string
          id_tiket?: string
          id_wisata?: string
          jumlah_tiket?: number
          tanggal_kunjungan?: string
        }
        Relationships: [
          {
            foreignKeyName: "tiket_id_pengunjung_fkey"
            columns: ["id_pengunjung"]
            isOneToOne: false
            referencedRelation: "pengunjung"
            referencedColumns: ["id_pengunjung"]
          },
          {
            foreignKeyName: "tiket_id_wisata_fkey"
            columns: ["id_wisata"]
            isOneToOne: false
            referencedRelation: "tempat_wisata"
            referencedColumns: ["id_wisata"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
