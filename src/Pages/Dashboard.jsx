import { useState } from "react";
import socialLinksData from "../data/socialLinks";
import QRCodeCard from "../components/QRCodeCard";

export default function Dashboard() {
  const [links, setLinks] =
    useState(socialLinksData);

  const [platform, setPlatform] =
    useState("");

  const [url, setUrl] =
    useState("");

  const addLink = () => {
    if (!platform || !url) return;

    setLinks([
      ...links,
      {
        id: Date.now(),
        platform,
        url,
      },
    ]);

    setPlatform("");
    setUrl("");
  };

  const deleteLink = (id) => {
    setLinks(
      links.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div style={{ padding: 30 }}>
     <QRCodeCard />
      
    </div>
  );
}