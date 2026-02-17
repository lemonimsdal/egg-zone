// ===== DOM ===== (Skapar koppling från JS till specifika HTML-element.)
const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const listMessage = document.querySelector("#listMessage");

// ===== Data (array av objekt) =====
const state = {
  products: [
    {
      id: 1,
      name: "Stjärnägg",
      desc: "Sveriges ledande äggleverantör med kvalitet.",
      image: "public/egg1.jpeg",
      link: "https://stjarnagg.se/",
      favorite: false
    },
    {
      id: 2,
      name: "Adelsö Ägg",
      desc: "Lokala färska ägg från Mälaröarna.",
      image: "public/egg2.jpeg",
      link: "https://adelsoagg.se/",
      favorite: false
    },
    {
      id: 3,
      name: "Västkustägg",
      desc: "Frigående höns, smak från västkusten.",
      image: "public/egg3.jpeg",
      link: "https://vastkustagg.se/",
      favorite: false
    },
    {
      id: 4,
      name: "Älsbo Ägg",
      desc: "Familjegård med ekologiska premiumägg.",
      image: "public/egg4.jpeg",
      link: "https://alsboagg.se/",
      favorite: false
    },
    {
      id: 5,
      name: "Hemägg",
      desc: "Färska ägg från lokala producenter.",
      image: "public/egg5.jpeg",
      link: "https://www.hemagg.se/",
      favorite: false
    },
    {
      id: 6,
      name: "Torggummans Ägg",
      desc: "Bondens bästa ägg, alltid färska.",
      image: "public/egg6.jpeg",
      link: "https://torggummansagg.se/",
      favorite: false
    },
    {
      id: 7,
      name: "Sanda Hönseri",
      desc: "Ekologiska ägg från Sanda Hönseri.",
      image: "public/egg7.jpeg",
      link: "https://sandahonseri.se/",
      favorite: false
    },
    {
      id: 8,
      name: "Gårdsby ägg",
      desc: "Gårdsproducerade ekologiska ägg från Småland.",
      image: "public/egg8.jpeg",
      link: "https://gardsbyagg.se/",
      favorite: false
    }
  ],
  search: ""
};

// ===== Render =====
function renderProducts() {
  productGrid.innerHTML = "";

// 1) Om inga produkter alls

  if (state.products.length === 0) {
  listMessage.textContent = "Tom lista.";
  return;
}

  const filtered = state.products.filter((p) => {
    const q = state.search.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  });

  if (filtered.length === 0) {
    listMessage.textContent = "Inga matchningar.";
    return;
  }

  listMessage.textContent = "";

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.dataset.id = String(product.id);

    const favText = product.favorite ? "★ Favorit" : "☆ Markera favorit";

    card.innerHTML = `
      <img src="${product.image}" alt="Bild på ${product.name}">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="buy-button">Läs mer</a>
      <button class="buy-button" data-action="toggle-favorite" type="button" style="margin-left:8px;">
        ${favText}
      </button>
    `;

    productGrid.append(card);
  });
}

// ===== Events =====

// 1) Sök/filter i realtid
searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  renderProducts();
});

// 2) Event delegation (click på parent)
productGrid.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  if (action !== "toggle-favorite") return;

  const card = event.target.closest(".product-card");
  if (!card) return;

  const id = Number(card.dataset.id);
  const product = state.products.find((p) => p.id === id);
  if (!product) return;

  product.favorite = !product.favorite;
  listMessage.textContent = `${product.name} ${product.favorite ? "markerad som favorit." : "borttagen från favoriter."}`;
  renderProducts();
});

// 3) Rensa sökning med Escape

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchInput.value = "";
    state.search = "";
    renderProducts();
    listMessage.textContent = "Sökning rensad.";
  }
});

// Start
renderProducts();