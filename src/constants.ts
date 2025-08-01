import {
  Home,
  Compass,
  User,
  Album,
  Clock,
  Heart,
  Repeat,
  ListMusic,
  ListPlus,
} from "lucide-react";

export const sideBarItems = [
  {
    title: "Menu",
    items: [
      {
        icon: Home,
        name: "Home",
      },
      {
        icon: Compass,
        name: "Discover",
      },
      {
        icon: Album,
        name: "Discover",
      },
      {
        icon: User,
        name: "Artists",
      },
    ],
  },
  {
    title: "Library",
    items: [
      {
        icon: Clock,
        name: "Recently Added",
      },
      {
        icon: Repeat,
        name: "Most Played",
      },
    ],
  },
  {
    title: "Playlist and Favourites",
    items: [
      {
        icon: ListMusic,
        name: "Playlists",
      },
      {
        icon: Heart,
        name: "Favourites",
      },
      {
        icon: ListPlus,
        name: "Add Playlist",
      },
    ],
  },
  
];
