const tambahEfekHover = (element) => {
    element.classList.add("hover-scale");
};

const hapusEfekHover = (element) => {
    element.classList.remove("hover-scale");
};

export const inisialisasiGaleri = () => {
    const gambarGaleri = document.querySelectorAll(".card img");

    [...gambarGaleri].forEach((img) => {
        
        img.addEventListener("mouseenter", () => tambahEfekHover(img));
        
        img.addEventListener("mouseleave", () => hapusEfekHover(img));

        img.addEventListener("click", (e) => {
            const { alt, parentElement } = e.target;

            if (!parentElement.querySelector(".caption-nama")) {
                const caption = document.createElement("p");
                caption.classList.add("caption-nama");
                
                caption.innerText = `Produk: ${alt}`;
                caption.style.color = "#de9e4c";
                caption.style.fontWeight = "bold";

                parentElement.appendChild(caption);
            }
        });
    });
};