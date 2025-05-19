document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactButton").addEventListener("click", function () {
        let phoneNumber = "6285777760460";
        let message = encodeURIComponent("Halo, saya tertarik dengan produk diecast Anda!");
        let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buyNow").addEventListener("click", function () {
        let phoneNumber = "6285777760460";
        let message = encodeURIComponent("Halo, apakah barang ini ready?");
        let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank");
    });
});