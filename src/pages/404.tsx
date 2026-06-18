import React from "react";
import Layout from "../layouts/layout";

const NotFoundPage = () => (
  <Layout title="404 | lordpipon" canonical="/404">
    <main className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col items-center justify-center px-4 text-center text-text">
      <h1 className="section-title">404</h1>
      <p className="section-subtitle mt-1">page not found</p>
      <a href="/" className="muted-link mt-6 hover:underline">
        ← home
      </a>
    </main>
  </Layout>
);

export default NotFoundPage;
