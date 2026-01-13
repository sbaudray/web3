function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <AppLayout>
      <PostIndex />
    </AppLayout>
  );
}

function OtherPage() {
  return (
    <AppLayout>
      <OtherComponents />
    </AppLayout>
  );
}
