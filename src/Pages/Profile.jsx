import { useEffect, useState } from "react";

export default function Profile() {
  const [links, setLinks] =
    useState([]);

  useEffect(() => {
    const data =
      JSON.parse(
        localStorage.getItem(
          "socialLinks"
        )
      ) || [];

    setLinks(data);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <h1>My Social Links</h1>

      {links.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          <button>
            {item.platform}
          </button>
        </a>
      ))}
    </div>
  );
}