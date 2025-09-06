function CenteredBlock({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        {children}
      </div>
    </div>
  )
}

export { CenteredBlock }
