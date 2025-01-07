-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Apr 2024 pada 01.39
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nurul_portfolio`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `table_contact`
--

CREATE TABLE `table_contact` (
  `Id` int(11) NOT NULL,
  `Nama` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(15) NOT NULL,
  `Messages` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `table_contact`
--

INSERT INTO `table_contact` (`Id`, `Nama`, `Email`, `Phone`, `Messages`) VALUES
(1, 'Nurul Zahrah', 'nurullzahrah08@gmail.com', '083895542878', 'Good Job'),
(3, 'Nurul zahrah', 'nurullzahrah08@gmail.com', '083895542878', 'Thank You, Sis!');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `table_contact`
--
ALTER TABLE `table_contact`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `table_contact`
--
ALTER TABLE `table_contact`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
