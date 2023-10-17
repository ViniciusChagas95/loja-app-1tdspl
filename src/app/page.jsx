import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Bom dia Brasilllllllll</h1>

    <div>
      <Link href="/produtos/tenis">TÊNIS</Link> |
      <Link href="/produtos/produto/tenis-preto:">TÊNIS PRETO</Link>
    </div>
    </>
    
  )
}
