function CenteredBlock({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div>
        {children}
      </div>
    </div>
  )
}

export { CenteredBlock }
