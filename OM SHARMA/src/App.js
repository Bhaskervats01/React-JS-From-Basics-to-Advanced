
const categories = [
  { name: "Ladies Suits", emoji: "👗" },
  { name: "Kurtas", emoji: "🌸" },
  { name: "Ladies Tops", emoji: "👚" },
  { name: "Jeans", emoji: "👖" },
  { name: "Kids Wear", emoji: "🧸" },
];

const products = [
  { id: 1, name: "Elegant Ladies Suit", price: 899, emoji: "👗" },
  { id: 2, name: "Casual Cotton Kurta", price: 499, emoji: "👚" },
  { id: 3, name: "Trendy Ladies Top", price: 399, emoji: "🌷" },
  { id: 4, name: "Kids Fashion Set", price: 599, emoji: "🧸" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-800">
      <div className="bg-orange-600 px-4 py-2 text-center text-sm text-white">
        Welcome to Om Sharma Fashion Store
      </div>

      <header className="flex flex-wrap items-center justify-between gap-4 bg-white px-6 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-orange-600">
          Om Sharma Fashion Store
        </h1>

        <nav className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="#" className="hover:text-orange-600">Home</a>
          <a href="#categories" className="hover:text-orange-600">Categories</a>
          <a href="#products" className="hover:text-orange-600">Products</a>
        </nav>

        <button className="rounded-full border border-orange-600 px-4 py-2 text-orange-600">
          🛒 Cart (0)
        </button>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10">
        <section className="rounded-3xl bg-orange-100 px-6 py-12 text-center md:py-20">
          <p className="mb-3 font-semibold text-orange-700">
            STYLE FOR EVERYDAY
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Fashion for Every Family
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Discover ladies suits, kurtas, tops, jeans and
            adorable kids wear at Om Sharma Fashion Store.
          </p>

          <a
            href="#products"
            className="mt-7 inline-block rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
          >
            Explore Collection
          </a>
        </section>

        <section id="categories" className="py-12">
          <h2 className="mb-6 text-2xl font-bold">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {categories.map((category) => (
              <div
                key={category.name}
                className="rounded-xl bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-4xl">{category.emoji}</div>
                <h3 className="mt-3 font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="pb-12">
          <h2 className="mb-6 text-2xl font-bold">
            Featured Products
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="rounded-xl bg-white p-4 shadow-sm"
              >
                <div className="flex aspect-square items-center justify-center rounded-lg bg-orange-100 text-6xl">
                  {product.emoji}
                </div>

                <h3 className="mt-4 font-semibold">
                  {product.name}
                </h3>

                <p className="mt-2 font-bold text-orange-600">
                  ₹{product.price}
                </p>

                <button
                  className="mt-4 w-full rounded-lg bg-orange-600 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-700"
                  onClick={() =>
                    alert("Cart feature hum next step mein banayenge!")
                  }
                >
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 px-5 py-6 text-center text-white">
        <p className="font-semibold">Om Sharma Fashion Store</p>
        <p className="mt-2 text-sm text-gray-300">
          Fashion for Every Family
        </p>
      </footer>
    </div>
  );
}
