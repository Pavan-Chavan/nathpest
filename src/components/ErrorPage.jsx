function ErrorPage() {
  return (
    <main className="container py-5 text-center">
      <h1>Page not found</h1>
      <p>The page you are looking for may have moved or no longer exists.</p>
      <a className="btn btn-primary rounded-pill px-4 py-2" href="/">
        Return to home
      </a>
    </main>
  )
}

export default ErrorPage