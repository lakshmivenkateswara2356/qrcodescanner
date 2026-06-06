import socialLinks from "../data/socialLinks";

export default function Profile() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Calorye Hive
        </h1>

        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textDecoration: "none",
              textAlign: "center",
              padding: "14px",
              marginBottom: "12px",
              background: "#000",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
}