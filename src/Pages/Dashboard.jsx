import QRCodeCard from "../components/QRCodeCard";

export default function Dashboard() {
  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <QRCodeCard />
    </div>
  );
}