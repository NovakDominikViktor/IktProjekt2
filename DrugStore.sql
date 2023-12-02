SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

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
  `Description` varchar(60) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

CREATE TABLE `products` (
  `Id` char(36) NOT NULL,
  `ProductName` varchar(60) NOT NULL,
  `ProductBrand` varchar(60) NOT NULL,
  `Instructions` varchar(90) NOT NULL,
  `Company` varchar(60) NOT NULL,
  `AccessId` int(11) NOT NULL,
  `Price` decimal(10, 2) NOT NULL, -- Added Price field
  `CreatedTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Added CreatedTime field
  PRIMARY KEY (`Id`),
  KEY `fk_access_id` (`AccessId`),
  CONSTRAINT `fk_access_id` FOREIGN KEY (`AccessId`) REFERENCES `accesess` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
