function AppLayoutExample({ children }) {
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
      <HomeComponents />
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
