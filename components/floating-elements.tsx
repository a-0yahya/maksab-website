"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-20 h-20 bg-maksab-green/10 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-maksab-blue/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-maksab-green/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-maksab-blue/5 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-maksab-green/15 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  )
}
