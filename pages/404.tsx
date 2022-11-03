import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1>404 - Page Not Found</h1>
        <Link href={"/"}>
          <button
            style={{
              width: "150px",
              height: "50px",
              marginTop: "20px",
            }}
          >
            Go back home
          </button>
        </Link>
      </div>
    </>
  );
}
