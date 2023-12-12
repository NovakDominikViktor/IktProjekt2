-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Dec 12. 09:20
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `drugstore`
--
DROP DATABASE IF EXISTS `drugstore`;
CREATE DATABASE IF NOT EXISTS `drugstore` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `drugstore`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `accesess`
--

CREATE TABLE `accesess` (
  `Id` int(11) NOT NULL,
  `Name` varchar(60) NOT NULL,
  `Description` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `accesess`
--

INSERT INTO `accesess` (`Id`, `Name`, `Description`) VALUES
(0, 'guest', 'user who did not logged in'),
(1, 'regular', 'users with free account'),
(2, 'premium', 'users who have access to premium products'),
(3, 'admin', 'Can access the datas directly');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

CREATE TABLE `products` (
  `Id` char(36) NOT NULL,
  `ProductName` varchar(60) NOT NULL,
  `ProductBrand` varchar(60) NOT NULL,
  `Instructions` varchar(90) NOT NULL,
  `AccessId` int(11) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `CreatedTime` timestamp NOT NULL DEFAULT current_timestamp(),
  `ImageUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `products`
--

INSERT INTO `products` (`Id`, `ProductName`, `ProductBrand`, `Instructions`, `AccessId`, `Price`, `CreatedTime`, `ImageUrl`) VALUES
('32414ec3-6720-406a-99f8-41a82c9ba01e', 'Sildenafil', 'Mylan Pharmaceuticals Inc.', 'Use as prescribed for erectile dysfunction.', 1, 285.17, '2023-07-07 22:19:11', 'https://www.quickmeds.co.uk/go_files/products/667663.png'),
('32603993-50a6-49a1-b658-848d4d5874f7', 'Hydrocortisone Acetate', 'Kinray Inc.', 'Apply to affected skin for relief from itching and inflammation.', 1, 257.00, '2023-01-09 11:43:26', 'https://medice.com/_next/image?url=https%3A%2F%2Fmedice.com%2Fapi%2Fen-de%2Four-products%2Fdermatosis%2Fsoventol-r-hydrocortisone-acetate%2F%40%40images%2Fd22e67e5-429f-445e-951d-34ad4895f3c1.jpeg&w=3840&q=90'),
('33f2db00-d638-4a72-bb55-51e552241994', 'Salicylic Acid', 'CLINIQUE LABORATORIES INC', 'Apply to affected skin for acne treatment.', 1, 316.06, '2023-01-10 00:22:30', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/12208002-8215061806670567.jpg'),
('44455280-d0bb-4941-bc39-6fdc5c6fa70f', 'Buspirone Hydrochloride', 'REMEDYREPACK INC.', 'Follow the doctor\'s prescription for anxiety treatment.', 1, 196.78, '2023-03-18 12:47:18', 'https://s.turbifycdn.com/aah/yhst-135855760451349/buspirone-5mg-per-tablet-manufacture-may-vary-34.jpg'),
('4a61eda0-0c31-41a4-8a15-850756e15f14', 'Levothyroxine Sodium', 'Cardinal Health', 'Take on an empty stomach as directed by the doctor.', 1, 81.71, '2023-08-10 05:29:53', 'https://5.imimg.com/data5/SELLER/Default/2023/8/332352961/PT/IP/IT/98283251/levothyroxine-sodium-tablet3.jpg'),
('4e3bda80-5aa1-46e5-ad33-51dbb4e98eaf', 'Sodium Monofluorophosphate', 'GlaxoSmithKline Consumer Healthcare LP', 'Use as directed for toothpaste.', 1, 343.94, '2023-05-09 06:45:08', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYJVXlJZaQP-W1j0r7kCbT7Bi_em67vgwCQ'),
('55fa8130-3008-44c7-9ec6-0ee5d7c55a03', 'Dextromethorphan HBr and Guaifenesin', 'Preferred Pharmaceuticals, Inc', 'Take 1 tablespoon for cough and chest congestion.', 1, 227.16, '2023-05-03 16:17:20', 'https://mimsshst.blob.core.windows.net/drug-resources/PH/packshot/Robitussin-DM6001PPS0.JPG'),
('5fb9bff7-eb55-4ec9-85b6-5c6e4aa7aff3', 'Fluconazole', 'REMEDYREPACK INC.', 'Follow the doctor\'s prescription for fungal infections.', 1, 90.50, '2023-10-22 04:10:56', 'https://www.pharmica.co.uk/sexual-health/thrush/fluconazole/fluconazole-x-36072.jpg'),
('695eaed4-97f5-458f-8a2d-cddbea475935', 'Alprazolam', 'Aphena Pharma Solutions - Tennessee, LLC', 'Follow the doctor\'s prescription for anxiety treatment.', 1, 27.45, '2023-06-19 04:05:46', 'https://www.ratiopharm.de/assets/products/de/packpic/Alprazolam_rtp_0,5mg_TAB_OP10_3D_Web_quer_links_clean_08703959.png'),
('78555ac7-176b-4b27-b356-6bc46d204464', 'Dextromethorphan Hydrobromide / Guaifenesin', 'Reese Pharmaceutical Co', 'Take 1 tablespoon for cough and cold relief.', 1, 339.64, '2023-11-14 02:31:54', 'https://5.imimg.com/data5/SELLER/Default/2023/5/304456801/AA/KJ/AL/40344738/skydon-d-dextromethorphan-hydrobromide-syrup-500x500.jpeg'),
('8ebf5989-0621-4ff4-9881-71c52c7bd39d', 'Homosalate, Octinoxate, Octisalate, and Oxybenzone', 'Neutrogena Corporation', 'Apply to exposed skin for sun protection.', 1, 113.02, '2023-10-25 10:53:14', 'https://cdn.shopify.com/s/files/1/0684/3161/0176/products/BUTYLMETHOXYDIBENZOYLMETHANE-1kg.png?v=1677716708&width=533'),
('c4e5a3aa-2f21-4ad3-b12e-2b7b538fa205', 'Isopropyl Alcohol', 'National Distribution Network (Smart Choice)', 'Use as an antiseptic for minor cuts and abrasions.', 1, 342.00, '2023-08-27 00:17:27', 'https://target.scene7.com/is/image/Target/GUEST_028c0f2e-c90c-48d7-ba02-94259139de86?qlt=65&fmt=pjpeg&hei=350&wid=350'),
('d3c1d364-0f6a-4184-ad42-21b1a2bf6ced', 'Acetaminophen, Diphenhydramine hydrochloride, Phenylephrine ', 'Western Family Foods Inc', 'Take as directed for cold and flu relief.', 1, 230.46, '2022-12-28 14:32:46', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61LoOoJA8JL.jpg'),
('da51da80-d0b4-4168-ae2b-0d6f804fdf9d', 'Avobenzone, Octinoxate', 'Beiersdorf', 'Apply to exposed skin for sun protection.', 1, 220.05, '2023-03-11 13:26:16', 'https://static2.medplusmart.com/products/_d98d10c_/CUVI0004_L.jpg'),
('e4e70863-4038-46ba-8385-8816c888f3f5', 'Cefepime', 'APP Pharmaceuticals, LLC', 'Follow the doctor\'s prescription for bacterial infections.', 1, 144.97, '2023-09-30 18:54:51', 'https://5.imimg.com/data5/SELLER/Default/2022/9/BY/FR/BF/66534963/cefepime-1gm.jpg'),
('efb9cf1d-dfe5-463f-9b03-b1669e8a0576', 'Doxycycline Hyclate', 'STAT Rx USA LLC', 'Follow the doctor\'s prescription for bacterial infections.', 1, 31.86, '2023-02-19 09:45:09', 'https://www.jgpharmainc.com/assets/img/doxycycline-hyclate-hero.png'),
('f7e8ed65-c1e8-482f-a067-5cdcef8c403e', 'Omeprazole Magnesium 20.6mg Capsules', 'The Kroger Co.', 'Take one capsule daily before a meal for acid reflux.', 1, 387.05, '2023-05-07 06:21:38', 'https://www.promedsupply.com/ProductImages/Main%20Product%20Images/PH168.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `UserName` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `PasswordHash` varchar(256) NOT NULL,
  `AccessId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`Id`, `UserName`, `Email`, `PasswordHash`, `AccessId`) VALUES
(1, 'Bela', 'iamBela@gmail.com', '123', 1),
(2, 'DaniKun', 'kovacsdaniel2010@gmail.com', 'Yrim', 3);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `accesess`
--
ALTER TABLE `accesess`
  ADD PRIMARY KEY (`Id`);

--
-- A tábla indexei `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `fk_access_id` (`AccessId`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `AccessId` (`AccessId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_access_id` FOREIGN KEY (`AccessId`) REFERENCES `accesess` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`AccessId`) REFERENCES `accesess` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
