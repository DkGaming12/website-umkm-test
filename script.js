document.addEventListener("DOMContentLoaded", () => {

    const namaUMKM = 'MatchaKU';
    console.log(`Selamat datang di Website Profil ${namaUMKM}`);
    

    const layananList = document.getElementById("layanan-list");
    if (layananList) {
        const layanan = ["Gratis Ongkir", "Bayar di Tempat", "Garansi 30 Hari"];
        layanan.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            layananList.appendChild(li);
        });
    }

    // Logika Halaman Produk: Form Pemesanan
    const formPesan = document.getElementById("formPesan");
    if (formPesan) {
        formPesan.addEventListener("submit", (e) => {
            e.preventDefault(); 
            let nama = document.getElementById("namaProduk").value;
            let jumlah = document.getElementById("jumlah").value;
            
            if (nama === "" || jumlah === "") {
                alert("Semua kolom wajib diisi.");
                return false;
            }
            if (jumlah <= 0) {
                alert("Jumlah harus lebih dari 0");
                return false;
            }
            alert(`Pemesanan untuk ${nama} (${jumlah} buah) berhasil dikirim!`);
            formPesan.reset();
            return true;
        });
    }

    // Logika Halaman Produk: Wishlist & Tema
    const produkInput = document.getElementById("produkInput");
    if (produkInput) {
        const tambahBtn = document.getElementById("tambahBtn");
        const daftarProduk = document.getElementById("daftarProduk");
        const previewProduk = document.getElementById("previewProduk");
        const temaSelect = document.getElementById("temaSelect");

        tambahBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const namaProduk = produkInput.value.trim();
            if (namaProduk !== "") {
                const li = document.createElement("li");
                li.textContent = namaProduk;

                li.addEventListener("mouseover", () => li.style.backgroundColor = "#e0e0e0");
                li.addEventListener("mouseout", () => li.style.backgroundColor = "");
                
                li.addEventListener("dblclick", () => {
                    if (confirm(`Yakin ingin menghapus ${namaProduk}?`)) {
                        li.remove();
                    }
                });

                daftarProduk.appendChild(li);
                produkInput.value = "";
                previewProduk.textContent = "";
            }
        });

        produkInput.addEventListener("keyup", () => {
            previewProduk.textContent = produkInput.value;
        });

        temaSelect.addEventListener("change", () => {
            document.body.style.backgroundColor = temaSelect.value;
        });
    }

    // Logika Halaman Kontak: Validasi
    const formKontak = document.getElementById("formKontak");
    if (formKontak) {
        formKontak.addEventListener("submit", (event) => {
            let valid = true;
            
            const nama = document.getElementById("nama");
            const email = document.getElementById("email");
            const kategori = document.getElementById("kategori");
            const pesan = document.getElementById("pesan");
            
            const errorNama = document.getElementById("errorNama");
            const errorEmail = document.getElementById("errorEmail");
            const errorKategori = document.getElementById("errorKategori");
            const errorPesan = document.getElementById("errorPesan");

            errorNama.textContent = "";
            errorEmail.textContent = "";
            errorKategori.textContent = "";
            errorPesan.textContent = "";

            if (nama.value.trim() === "") {
                errorNama.textContent = "Nama wajib diisi.";
                valid = false;
            }

            const emailPattern = /^[^ ]+@gmail\.com$/i;
            if (!emailPattern.test(email.value)) {
                errorEmail.textContent = "Email harus @gmail.com dan format benar.";
                valid = false;
            }

            if (kategori.value === "") {
                errorKategori.textContent = "Pilih salah satu kategori.";
                valid = false;
            }

            if (pesan.value.trim().length < 10) {
                errorPesan.textContent = "Pesan minimal 10 karakter.";
                valid = false;
            }

            if (!valid) {
                event.preventDefault();
            } else {
                event.preventDefault(); 
                alert("Pesan berhasil dikirim!");
                formKontak.reset();
            }
        });

        document.getElementById("nama").addEventListener("blur", function () {
            const errorNama = document.getElementById("errorNama");
            if (this.value.trim() === "") {
                errorNama.textContent = "Nama wajib diisi.";
            } else {
                errorNama.textContent = "";
            }
        });

        document.getElementById("pesan").addEventListener("input", function () {
            const errorPesan = document.getElementById("errorPesan");
            if (this.value.trim().length < 10) {
                errorPesan.textContent = "Pesan minimal 10 karakter.";
            } else {
                errorPesan.textContent = "";
            }
        });

        document.getElementById("langganan").addEventListener("change", function () {
            if (this.checked) {
                alert("Terima kasih telah berlangganan newsletter!");
            }
        });
    }

    // Logika Halaman Webinar (Tugas Akhir)
    const formWebinar = document.getElementById("formWebinar");
    if (formWebinar) {
        const namaInput = document.getElementById("namaPeserta");
        const emailInput = document.getElementById("emailPeserta");
        const hpInput = document.getElementById("noHp");
        const topikInput = document.getElementById("topikWebinar");
        const syaratInput = document.getElementById("syarat");

        const errNama = document.getElementById("errNamaPeserta");
        const errEmail = document.getElementById("errEmailPeserta");
        const errHp = document.getElementById("errNoHp");
        const errTopik = document.getElementById("errTopikWebinar");
        const errSyarat = document.getElementById("errSyarat");

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const angkaPattern = /^[0-9]+$/;

        formWebinar.addEventListener("submit", (e) => {
            let valid = true;

            errNama.textContent = "";
            errEmail.textContent = "";
            errHp.textContent = "";
            errTopik.textContent = "";
            errSyarat.textContent = "";

            if (namaInput.value.trim().length < 3) {
                errNama.textContent = "Nama wajib diisi minimal 3 karakter.";
                valid = false;
            }

            if (emailInput.value.trim() === "") {
                errEmail.textContent = "Email wajib diisi.";
                valid = false;
            } else if (!emailPattern.test(emailInput.value)) {
                errEmail.textContent = "Format email tidak valid.";
                valid = false;
            } else if (emailInput.value.endsWith("@yahoo.com")) {
                errEmail.textContent = "Maaf, domain yahoo.com tidak diperbolehkan.";
                valid = false;
            }

            if (hpInput.value.trim() === "") {
                errHp.textContent = "No HP wajib diisi.";
                valid = false;
            } else if (!angkaPattern.test(hpInput.value)) {
                errHp.textContent = "No HP harus berupa angka.";
                valid = false;
            }

            if (topikInput.value === "") {
                errTopik.textContent = "Silakan pilih salah satu topik.";
                valid = false;
            }

            if (!syaratInput.checked) {
                errSyarat.textContent = "Anda harus menyetujui syarat & ketentuan.";
                valid = false;
            }

            if (!valid) {
                e.preventDefault();
            } else {
                e.preventDefault();
                alert("Pendaftaran Webinar Berhasil!");
                formWebinar.reset();
            }
        });

        namaInput.addEventListener("blur", () => {
            if (namaInput.value.trim().length < 3) {
                errNama.textContent = "Nama wajib diisi minimal 3 karakter.";
            } else {
                errNama.textContent = "";
            }
        });

        emailInput.addEventListener("input", () => {
            if (emailInput.value.endsWith("@yahoo.com")) {
                errEmail.textContent = "Maaf, domain yahoo.com tidak diperbolehkan.";
            } else {
                errEmail.textContent = "";
            }
        });

        hpInput.addEventListener("input", () => {
            if (hpInput.value !== "" && !angkaPattern.test(hpInput.value)) {
                errHp.textContent = "No HP harus berupa angka.";
            } else {
                errHp.textContent = "";
            }
        });

        topikInput.addEventListener("change", () => {
            if (topikInput.value !== "") {
                errTopik.textContent = "";
            }
        });

        syaratInput.addEventListener("change", () => {
            if (syaratInput.checked) {
                errSyarat.textContent = "";
            } else {
                errSyarat.textContent = "Anda harus menyetujui syarat & ketentuan.";
            }
        });
    }
});