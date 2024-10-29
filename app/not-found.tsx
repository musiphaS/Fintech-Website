// app/not-found.tsx
export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2>Page Not Found</h2>
          <p>Could not find requested resource</p>
          <a href="/" className="text-blue-500 hover:underline">
            Return Home
          </a>
        </div>
      </div>
    )
  }