import type { UnsplashRaw, Unsplash } from "./types";

const CLIENT_ID = process.env.UNSPLASH_CLIENT_ID;

export async function fetchUnsplash(): Promise<Unsplash[]> {
  return [
    {
      width: 4928,
      height: 3264,
      date: "2021-10-08T17:48:31Z",
      description: "unable to provide alt",
      href: "https://images.unsplash.com/photo-1633715288420-7fc731f9c37d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHwxfHx8fHx8Mnx8MTY1OTQwNDYzMg&ixlib=rb-1.2.1&q=80",
    },
    {
      width: 3264,
      height: 4928,
      date: "2021-08-11T17:57:54Z",
      description: "unable to provide alt",
      href: "https://images.unsplash.com/photo-1628704601852-4ab24f69ab2b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1OTQwNDYzMg&ixlib=rb-1.2.1&q=80",
    },
    {
      width: 4928,
      height: 3264,
      date: "2021-08-10T15:24:49Z",
      description: "unable to provide alt",
      href: "https://images.unsplash.com/photo-1628608955856-d8c0c8e22c4c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1OTQwNDYzMg&ixlib=rb-1.2.1&q=80",
    },
    {
      width: 2268,
      height: 2269,
      date: "2021-08-10T15:24:49Z",
      description: "unable to provide alt",
      href: "https://images.unsplash.com/photo-1628608955815-0e268fae1fa5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1OTQwNDYzMg&ixlib=rb-1.2.1&q=80",
    },
    {
      width: 3024,
      height: 4032,
      date: "2021-08-10T15:24:49Z",
      description: "unable to provide alt",
      href: "https://images.unsplash.com/photo-1628608955978-efe0305ec18a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1OTQwNDYzMg&ixlib=rb-1.2.1&q=80",
    },
    {
      width: 4928,
      height: 3264,
      date: "2021-08-10T15:02:35Z",
      description: "white bridge over river under white sky during daytime",
      href: "https://images.unsplash.com/photo-1628607688230-1742ccef6633?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHw2fHx8fHx8Mnx8MTY1OTQwNDYzMg&ixlib=rb-1.2.1&q=80",
    },
    {
      width: 4000,
      height: 2250,
      date: "2021-06-01T15:45:35Z",
      description: "unable to provide alt",
      href: "https://images.unsplash.com/photo-1622562315887-be91ba3de4ae?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1OTQwNDYzMg&ixlib=rb-1.2.1&q=80",
    },
    {
      width: 4032,
      height: 2268,
      date: "2021-05-31T17:09:12Z",
      description: "ocean waves crashing on shore during sunset",
      href: "https://images.unsplash.com/photo-1622480826198-515d985b4dd4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1OTQwNDYzMg&ixlib=rb-1.2.1&q=80",
    },
    {
      width: 4032,
      height: 2268,
      date: "2021-05-31T17:09:12Z",
      description: "green trees near river during daytime",
      href: "https://images.unsplash.com/photo-1622480826258-adb2dde4b166?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1OTQwNDYzMg&ixlib=rb-1.2.1&q=80",
    },
    {
      width: 4032,
      height: 2268,
      date: "2021-05-31T17:09:12Z",
      description: "unable to provide alt",
      href: "https://images.unsplash.com/photo-1622480826339-001a2be1cbc2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTE2MDl8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTk0MDQ2MzI&ixlib=rb-1.2.1&q=80",
    },
  ];
  const res = (await fetch(
    `https://api.unsplash.com/users/elijahjcobb/photos?client_id=${CLIENT_ID}`
  ).then((r) => r.json())) as UnsplashRaw[];

  return res.map(
    (raw): Unsplash => ({
      width: raw.width,
      height: raw.height,
      date: raw.created_at,
      description: raw.alt_description ?? "unable to provide alt",
      href: raw.urls.full,
    })
  );
}
