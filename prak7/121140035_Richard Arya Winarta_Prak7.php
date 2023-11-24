<?php

// by Richard Arya Winarta - 121140035
// Praktikum Pemrograman Web RB - Tugas 7

class Mahasiswa {
    protected $nama;
    protected $nim;
    protected $kelas;

    public function __construct($nama, $nim, $kelas) {
        $this->nama = $nama;
        $this->nim = $nim;
        $this->kelas = $kelas;
    }

    public function InfoMahasiswa() {
        // Menggunakan preg_replace untuk mengganti warna nama
        $coloredNama = preg_replace('/\b(\w+)\b/', '<span style="color: blue;">$1</span>', $this->nama);
        return "Nama: $coloredNama, NIM: $this->nim, Kelas: $this->kelas";
    }
}

class MahasiswaBaru extends Mahasiswa {
    private $angkatan;

    public function __construct($nama, $nim, $kelas, $angkatan) {
        parent::__construct($nama, $nim, $kelas);
        $this->angkatan = $angkatan;
    }

    public function InfoMahasiswa() {
        $infoMahasiswa = parent::InfoMahasiswa();
        return "$infoMahasiswa, Tanggal Pendaftaran: $this->angkatan";
    }
}

// Membuat objek mahasiswa
$mahasiswa1 = new Mahasiswa("Richard", "121140035", "RB");
echo "Informasi Mahasiswa: " . $mahasiswa1->InfoMahasiswa() . "<br>", "<br>";

// Membuat objek mahasiswa baru turunan dari kelas Mahasiswa
$mahasiswaBaru1 = new MahasiswaBaru("David", "121140062", "RA", "2021");
echo "Informasi Mahasiswa Baru: " . $mahasiswaBaru1->InfoMahasiswa();
?>