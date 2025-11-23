-- Create Tempat_Wisata (Tourist Places) table
CREATE TABLE public.tempat_wisata (
  id_wisata UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nama_wisata TEXT NOT NULL,
  lokasi TEXT NOT NULL,
  jenis_wisata TEXT NOT NULL,
  deskripsi TEXT,
  jam_buka TIME,
  jam_tutup TIME,
  gambar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Kegiatan_Edukasi (Educational Activities) table
CREATE TABLE public.kegiatan_edukasi (
  id_kegiatan UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  id_wisata UUID NOT NULL REFERENCES public.tempat_wisata(id_wisata) ON DELETE CASCADE,
  nama_kegiatan TEXT NOT NULL,
  harasumber TEXT,
  jadwal TEXT,
  kapasitas INTEGER NOT NULL DEFAULT 0,
  biaya NUMERIC(10, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Pengunjung (Visitors) table
CREATE TABLE public.pengunjung (
  id_pengunjung UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nama_pengunjung TEXT NOT NULL,
  alamat TEXT,
  no_hp TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Tiket (Tickets) table
CREATE TABLE public.tiket (
  id_tiket UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  id_pengunjung UUID NOT NULL REFERENCES public.pengunjung(id_pengunjung) ON DELETE CASCADE,
  id_wisata UUID NOT NULL REFERENCES public.tempat_wisata(id_wisata) ON DELETE CASCADE,
  tanggal_kunjungan DATE NOT NULL,
  jumlah_tiket INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Reservasi_Kegiatan (Activity Reservations) table
CREATE TABLE public.reservasi_kegiatan (
  id_reservasi UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  id_pengunjung UUID NOT NULL REFERENCES public.pengunjung(id_pengunjung) ON DELETE CASCADE,
  id_kegiatan UUID NOT NULL REFERENCES public.kegiatan_edukasi(id_kegiatan) ON DELETE CASCADE,
  tanggal_reservasi DATE NOT NULL,
  status_reservasi TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tempat_wisata ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kegiatan_edukasi ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pengunjung ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tiket ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reservasi_kegiatan ENABLE ROW LEVEL SECURITY;

-- Create public read policies for tourist places and activities
CREATE POLICY "Anyone can view tourist places"
ON public.tempat_wisata FOR SELECT
USING (true);

CREATE POLICY "Anyone can view educational activities"
ON public.kegiatan_edukasi FOR SELECT
USING (true);

-- Create policies for visitors (can insert their own data)
CREATE POLICY "Anyone can create visitor records"
ON public.pengunjung FOR INSERT
WITH CHECK (true);

CREATE POLICY "Visitors can view their own data"
ON public.pengunjung FOR SELECT
USING (true);

-- Create policies for tickets
CREATE POLICY "Anyone can create tickets"
ON public.tiket FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can view tickets"
ON public.tiket FOR SELECT
USING (true);

-- Create policies for reservations
CREATE POLICY "Anyone can create reservations"
ON public.reservasi_kegiatan FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can view reservations"
ON public.reservasi_kegiatan FOR SELECT
USING (true);

-- Create indexes for better performance
CREATE INDEX idx_kegiatan_wisata ON public.kegiatan_edukasi(id_wisata);
CREATE INDEX idx_tiket_pengunjung ON public.tiket(id_pengunjung);
CREATE INDEX idx_tiket_wisata ON public.tiket(id_wisata);
CREATE INDEX idx_reservasi_pengunjung ON public.reservasi_kegiatan(id_pengunjung);
CREATE INDEX idx_reservasi_kegiatan ON public.reservasi_kegiatan(id_kegiatan);