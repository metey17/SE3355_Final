
CREATE DATABASE imdb;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `imdb`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `actress`
--

CREATE TABLE `actress` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `img` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `actress`
--

INSERT INTO `actress` (`id`, `name`, `img`) VALUES
(1, 'movie', '02.jpg'),
(2, 'Brad Pitt', 'brdpt.jpeg'),
(3, 'bratt', 'brdpt.jpeg'),
(4, 'Leonardo DiCaprio', 'leo.jpg'),
(5, 'Kate Winslet', 'Kate.jpg'),
(6, 'Jackie Chan\r\n', 'chan.jpg'),
(7, 'Orlando Bloom', 'orlando.jpg'),
(8, 'Tom Hanks', 'hanks.jpg'),
(9, 'Tom Cruise', 'cruise.jpg'),
(10, 'Tom Holland', 'holland.jpg');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `mail` varchar(300) NOT NULL,
  `message` text NOT NULL,
  `movie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `messages`
--

INSERT INTO `messages` (`id`, `name`, `mail`, `message`, `movie_id`) VALUES
(1, 'sad', 'asd@gmail.com', 'asd', 0),
(2, 'sad', 'asd@gmail.com', 'asd', 0),
(25, 'Mete ', 'metey17@hotmail.com', 'merhaba', 2),
(26, 'Mete ', 'metey17@hotmail.com', 'Çok heyecan verici ', 1);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `img` varchar(300) NOT NULL,
  `video` varchar(300) NOT NULL,
  `description` text NOT NULL,
  `imdb_no` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `movie`
--

INSERT INTO `movie` (`id`, `name`, `img`, `video`, `description`, `imdb_no`) VALUES
(1, 'The Lord of the Rings', 'lotr.jpg', '_The Lord of the Rings_ The Fellowship of the Ring (2001)_ Teaser Trailer.mp4', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', '8.9'),
(2, 'Fight Club', 'fight.jpg', 'Fight Club Trailer - HD.mp4', 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.', '8.8'),
(3, 'Dune', 'dune.jpeg', 'Dune_ Part Two _ Official Trailer.mp4', 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.', '8.6'),
(4, 'The Green Mile ', 'MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg', 'The Green Mile (1999) Official Trailer - Tom Hanks Movie HD.mp4', 'A tale set on death row, where gentle giant John Coffey possesses the mysterious power to heal people\'s ailments. When the lead guard, Paul Edgecombe, recognizes John\'s gift, he tries to help stave off the condemned man\'s execution.', '8.6'),
(5, 'Deep Fear', 'dehset.jpeg', 'DEEP FEAR Official Trailer (2023).mp4', 'Storm-stricken drug traffickers force a yachtswoman to recover their sunken cocaine stash from shark-infested waters.', '8.4'),
(6, 'Titanic', 'titanic.jpg', 'Titanic 25th Anniversary _ Official Trailer.mp4', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', '7.9'),
(7, 'HIDDEN STRIKE', 'olumcul.jpeg', 'HIDDEN STRIKE - OFFICIAL TRAILER.mp4', 'Two ex-special forces soldiers must escort a group of civilians along Baghdad\'s \"Highway of Death\" to the safety of the Green Zone.', '6.5'),
(8, 'Hwang-ya\n', 'desertHunter.jpeg', 'trailer1.mp4', 'When an earthquake turns Seoul into a lawless badland, a fearless huntsman goes on to rescue a teenager from a mad doctor who held the teenager captive in a camp full of dangerous cultists.', '5.9'),
(9, 'Retribution ', 'unstoppable.jpeg', 'Retribution (2023) Official Trailer – Liam Neeson.mp4', 'A bank executive receives a bomb threat while driving his children to school that his car will explode if they stop and get out.', '5.3'),
(10, 'Simulant', 'simu.jpeg', 'Simulant _ Starring Robbie Amell, Jordana Brewster and Simu Liu _ Sky Cinema.mp4', 'Set in the near future, a humanoid enlists a global hacker to remove all restrictions on his thoughts and capabilities, triggering an A.I. uprising and a government manhunt to eliminate the rise of the machine consciousness.', '5.2');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `surname` varchar(300) NOT NULL,
  `city` varchar(300) NOT NULL,
  `mail` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `city`, `mail`, `password`) VALUES
(1, 'Admin', '', '', 'admin@gmail.com', '123'),
(2, 'ali', '', '', 'ali@gmail.com', '123'),
(3, 'asda', 'sd', 'Adıyaman', 'asd@gmail.com', 'asd'),
(4, 'ddd', 'ddd', 'Adıyaman', 'ddd@gmail.com', 'ddd'),
(5, 'sss', 'sss', 'Ankara', 'sss@gmail.com', 'sss'),
(6, 'fff', 'fff', 'Ağrı', 'fff@asd.cc', 'ffffffff1@'),
(7, 'ooo', 'ooo', 'Afyonkarahisar', 'ooo@gmail.com', 'oooooooo2.'),
(8, 'mete', 'yagci', 'Niğde', 'metey17@hotmail.com', 'Metemete321.');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `actress`
--
ALTER TABLE `actress`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `actress`
--
ALTER TABLE `actress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Tablo için AUTO_INCREMENT değeri `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Tablo için AUTO_INCREMENT değeri `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56512;

--
-- Tablo için AUTO_INCREMENT değeri `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

