import React from "react";
import PlaceList from "../components/PlaceList.js";

export default function UserPlaces() {
  const DUMMY_PlACES_DATA = [
    {
      id: "p1",
      title: "Random TiTLE for TEst",
      descriptiom: "HELLO Hi Hello hI ahelan i am testing it",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      address: "Seti River, Pokhara 33700 ",
      location: {
        lat: 28.2049059,
        lng: 83.9842173,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Random TiTLE for TEst",
      descriptiom: "HELLO Hi Hello hI ahelan i am testing it",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      address: "Seti River, Pokhara 33700 ",
      location: {
        lat: 28.2049059,
        lng: 83.9842173,
      },
      creator: "u2",
    },
  ];
  return <PlaceList items={DUMMY_PlACES_DATA} />;
}
