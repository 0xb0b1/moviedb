import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { MovieCart } from "../MovieCart";

import styles from "./styles.module.scss";

const movieInfo = {
  adult: false,
  backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
  belongs_to_collection: {
    id: 531241,
    name: "Spider-Man (Avengers) Collection",
    poster_path: "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg",
    backdrop_path: "/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg",
  },
  budget: 200000000,
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 878, name: "Science Fiction" },
  ],
  homepage: "https://www.spidermannowayhome.movie",
  id: 634649,
  imdb_id: "tt10872600",
  original_language: "en",
  original_title: "Spider-Man: No Way Home",
  overview:
    "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  popularity: 21676.527,
  poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  production_companies: [
    {
      id: 420,
      logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
      name: "Marvel Studios",
      origin_country: "US",
    },
    {
      id: 84041,
      logo_path: "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
      name: "Pascal Pictures",
      origin_country: "US",
    },
    {
      id: 5,
      logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
      name: "Columbia Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2021-12-15",
  revenue: 1738889808,
  runtime: 148,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
    { english_name: "Tagalog", iso_639_1: "tl", name: "" },
  ],
  status: "Released",
  tagline: "The Multiverse unleashed.",
  title: "Spider-Man: No Way Home",
  video: false,
  vote_average: 8.4,
  vote_count: 6735,
};

const popular = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 21676.527,
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8.4,
      vote_count: 6699,
    },
    {
      adult: false,
      backdrop_path: "/m3Ys7UDzUzOyoPYKzp4GhKKokUr.jpg",
      genre_ids: [16, 10751, 14, 35, 12],
      id: 585083,
      original_language: "en",
      original_title: "Hotel Transylvania: Transformania",
      overview:
        "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
      popularity: 4795.881,
      poster_path: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
      release_date: "2022-01-13",
      title: "Hotel Transylvania: Transformania",
      video: false,
      vote_average: 7.6,
      vote_count: 1370,
    },
    {
      adult: false,
      backdrop_path: "/k2twTjSddgLc1oFFHVibfxp2kQV.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 524434,
      original_language: "en",
      original_title: "Eternals",
      overview:
        "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
      popularity: 5660.794,
      poster_path: "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
      release_date: "2021-11-03",
      title: "Eternals",
      video: false,
      vote_average: 7.2,
      vote_count: 3823,
    },
    {
      adult: false,
      backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
      genre_ids: [16, 35, 10751, 14],
      id: 568124,
      original_language: "en",
      original_title: "Encanto",
      overview:
        "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      popularity: 4395.662,
      poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
      release_date: "2021-11-24",
      title: "Encanto",
      video: false,
      vote_average: 7.8,
      vote_count: 3726,
    },
    {
      adult: false,
      backdrop_path: "/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg",
      genre_ids: [35, 16, 10751, 10402],
      id: 438695,
      original_language: "en",
      original_title: "Sing 2",
      overview:
        "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
      popularity: 3212.515,
      poster_path: "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
      release_date: "2021-12-01",
      title: "Sing 2",
      video: false,
      vote_average: 8.3,
      vote_count: 1532,
    },
    {
      adult: false,
      backdrop_path: "/t4To8feUSysyBs4tlBAbXIrKlCv.jpg",
      genre_ids: [28, 53],
      id: 860623,
      original_language: "en",
      original_title: "Last Man Down",
      overview:
        "After civilization succumbs to a deadly pandemic and his wife is murdered, a special forces soldier abandons his duty and becomes a hermit in the Nordic wilderness. Years later, a wounded woman appears on his doorstep. She's escaped from a lab and her pursuers believe her blood is the key to a worldwide cure. He's hesitant to get involved, but all doubts are cast aside when he discovers her pursuer is none other than Commander Stone, the man that murdered his wife some years ago.",
      popularity: 2729.497,
      poster_path: "/4B7liCxNCZIZGONmAMkCnxVlZQV.jpg",
      release_date: "2021-10-19",
      title: "Last Man Down",
      video: false,
      vote_average: 6.7,
      vote_count: 165,
    },
    {
      adult: false,
      backdrop_path: "/srJ7haOhfykoPOYPQrstOaFem08.jpg",
      genre_ids: [28],
      id: 811592,
      original_language: "en",
      original_title: "One Shot",
      overview:
        "An elite squad of Navy SEALs, on a covert mission to transport a prisoner off a CIA black site island prison, are trapped when insurgents attack while trying to rescue the same prisoner.",
      popularity: 2612.919,
      poster_path: "/3OXiTjU30gWtqxmx4BU9RVp2OTv.jpg",
      release_date: "2021-11-05",
      title: "One Shot",
      video: false,
      vote_average: 6.8,
      vote_count: 154,
    },
    {
      adult: false,
      backdrop_path: "/o76ZDm8PS9791XiuieNB93UZcRV.jpg",
      genre_ids: [27, 28, 878],
      id: 460458,
      original_language: "en",
      original_title: "Resident Evil: Welcome to Raccoon City",
      overview:
        "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
      popularity: 2465.751,
      poster_path: "/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg",
      release_date: "2021-11-24",
      title: "Resident Evil: Welcome to Raccoon City",
      video: false,
      vote_average: 6.1,
      vote_count: 1073,
    },
    {
      adult: false,
      backdrop_path: "/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg",
      genre_ids: [878, 28, 12],
      id: 624860,
      original_language: "en",
      original_title: "The Matrix Resurrections",
      overview:
        "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
      popularity: 2459.501,
      poster_path: "/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
      release_date: "2021-12-16",
      title: "The Matrix Resurrections",
      video: false,
      vote_average: 6.8,
      vote_count: 2655,
    },
    {
      adult: false,
      backdrop_path: "/EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg",
      genre_ids: [35, 14, 12],
      id: 425909,
      original_language: "en",
      original_title: "Ghostbusters: Afterlife",
      overview:
        "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
      popularity: 2803.12,
      poster_path: "/sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
      release_date: "2021-11-11",
      title: "Ghostbusters: Afterlife",
      video: false,
      vote_average: 7.7,
      vote_count: 1693,
    },
    {
      adult: false,
      backdrop_path: "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
      genre_ids: [878, 28, 12],
      id: 580489,
      original_language: "en",
      original_title: "Venom: Let There Be Carnage",
      overview:
        "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      popularity: 2338.164,
      poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      release_date: "2021-09-30",
      title: "Venom: Let There Be Carnage",
      video: false,
      vote_average: 7.1,
      vote_count: 6101,
    },
    {
      adult: false,
      backdrop_path: "/2Jp2RIwJ3Dt7vamkTt7llVJ7uY.jpg",
      genre_ids: [53, 9648, 18],
      id: 916740,
      original_language: "en",
      original_title: "Brazen",
      overview:
        "Mystery writer Grace Miller has killer instincts when it comes to motive - and she'll need every bit of expertise to help solve her sister's murder.",
      popularity: 1719.145,
      poster_path: "/7e4n1GfC9iky9VQzH3cDQz9wYpO.jpg",
      release_date: "2022-01-13",
      title: "Brazen",
      video: false,
      vote_average: 4.8,
      vote_count: 170,
    },
    {
      adult: false,
      backdrop_path: "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg",
      genre_ids: [28, 35, 80, 53],
      id: 512195,
      original_language: "en",
      original_title: "Red Notice",
      overview:
        "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
      popularity: 1791.409,
      poster_path: "/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
      release_date: "2021-11-04",
      title: "Red Notice",
      video: false,
      vote_average: 6.8,
      vote_count: 2859,
    },
    {
      adult: false,
      backdrop_path: "/AmLpWYm9R3Ur2FLPgj5CH3wR8wp.jpg",
      genre_ids: [878, 53],
      id: 739413,
      original_language: "en",
      original_title: "Mother/Android",
      overview:
        "Georgia and her boyfriend Sam go on a treacherous journey to escape their country, which is caught in an unexpected war with artificial intelligence. Days away from the arrival of their first child, the couple must face No Man’s Land—a stronghold of the android uprising—in hopes of reaching safety before giving birth.",
      popularity: 1415.432,
      poster_path: "/rO3nV9d1wzHEWsC7xgwxotjZQpM.jpg",
      release_date: "2021-12-17",
      title: "Mother/Android",
      video: false,
      vote_average: 5.8,
      vote_count: 350,
    },
    {
      adult: false,
      backdrop_path: "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
      genre_ids: [28, 12, 14],
      id: 566525,
      original_language: "en",
      original_title: "Shang-Chi and the Legend of the Ten Rings",
      overview:
        "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
      popularity: 1410.508,
      poster_path: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
      release_date: "2021-09-01",
      title: "Shang-Chi and the Legend of the Ten Rings",
      video: false,
      vote_average: 7.8,
      vote_count: 5429,
    },
    {
      adult: false,
      backdrop_path: "/mo57hzhW3BcZL1f7MNteWKHsmlN.jpg",
      genre_ids: [28, 53],
      id: 763788,
      original_language: "en",
      original_title: "Dangerous",
      overview:
        "A reformed sociopath heads to a remote island after the death of his brother. Soon after his arrival, the island falls under siege from a deadly gang of mercenaries, and when he discovers their role in his brother’s demise, he sets out on a relentless quest for vengeance.",
      popularity: 1189.473,
      poster_path: "/vTtkQGC7qKlSRQJZYtAWAmYdH0A.jpg",
      release_date: "2021-11-05",
      title: "Dangerous",
      video: false,
      vote_average: 6.6,
      vote_count: 131,
    },
    {
      adult: false,
      backdrop_path: "/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
      genre_ids: [16, 28, 12, 14],
      id: 635302,
      original_language: "ja",
      original_title: "劇場版「鬼滅の刃」無限列車編",
      overview:
        "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
      popularity: 1270.198,
      poster_path: "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      release_date: "2020-10-16",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      video: false,
      vote_average: 8.4,
      vote_count: 2088,
    },
    {
      adult: false,
      backdrop_path: "/A6K6Y39vYsYboyKiiXwcPR6Q6tM.jpg",
      genre_ids: [10770, 9648, 53, 35],
      id: 922885,
      original_language: "es",
      original_title: "Laura y el misterio del asesino inesperado",
      overview:
        "After years of leave, Laura Lebrel returns to action. Lydia asks him for help on a case: Eugenio Ortiz, Laura's former instructor, has been murdered. But a new detective, Hector, finds evidence that incriminates Laura. She asks to be allowed to find the killer and Lydia gives her 24 hours to solve the case before arresting her.",
      popularity: 1028.309,
      poster_path: "/p6T9g5a227cUs4rlTlaxo8QAqIf.jpg",
      release_date: "2022-01-13",
      title: "Laura y el misterio del asesino inesperado",
      video: false,
      vote_average: 7.3,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: "/mv4lRdLy201m3pndE68MuIKofpt.jpg",
      genre_ids: [10749, 35],
      id: 790142,
      original_language: "en",
      original_title: "The Royal Treatment",
      overview:
        "Isabella runs her own salon and isn’t afraid to speak her mind, while Prince Thomas runs his own country and is about to marry for duty rather than love. When Izzy and her fellow stylists get the opportunity of a lifetime to do the hair for the royal wedding, she and Prince Thomas learn that taking control of their own destiny requires following their hearts.",
      popularity: 990.946,
      poster_path: "/faUHWGTr1hN0wGtqYfiWNJXhBlW.jpg",
      release_date: "2022-01-20",
      title: "The Royal Treatment",
      video: false,
      vote_average: 6.8,
      vote_count: 219,
    },
    {
      adult: false,
      backdrop_path: "/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg",
      genre_ids: [16, 35, 10751],
      id: 585245,
      original_language: "en",
      original_title: "Clifford the Big Red Dog",
      overview:
        "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.",
      popularity: 1000.758,
      poster_path: "/oifhfVhUcuDjE61V5bS5dfShQrm.jpg",
      release_date: "2021-11-10",
      title: "Clifford the Big Red Dog",
      video: false,
      vote_average: 7.3,
      vote_count: 959,
    },
  ],
  total_pages: 32148,
  total_results: 642945,
};

interface IProps {
  poster_path: string;
  title: string;
  release_date: string;
  id?: number;
}

const baseUrlMovieDBImage =
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

export const MovieListing = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get(
        `movie/popular?api_key=${process.env.MOVIEDB_KEY}&page=1`
      );

      setPopularMovies(response.data);
    };

    getMovies();
  }, []);

  console.log(popularMovies);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {popular.results.map((item) => (
          <MovieCart
            poster_path={`${baseUrlMovieDBImage}${item.poster_path}`}
            title={item.title}
            release_date={item.release_date}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};
