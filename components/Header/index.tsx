import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full px-4 py-6">
      <div className="max-w-md mx-auto flex items-center gap-3">
        <Image
          src="/pfp/p1stachy.webp"
          alt="p1stachy"
          width={48}
          height={48}
          className="rounded-full border-2 border-white"
        />
        <h1 className="text-xl font-bold">p1stachy</h1>
      </div>
    </header>
  )
}
