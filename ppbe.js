function proses() {
    // Ambil data input
    const harga = parseFloat(document.getElementById('hargaBarang').value) || 0;
    const jumlah = parseInt(document.getElementById('jumlahBeli').value) || 0;
    
    // Hitung total aksesoris yang dipilih
    let totalAksesoris = 0;
    const checkboxes = document.querySelectorAll('.aksesoris:checked');
    checkboxes.forEach((item) => {
        totalAksesoris += parseFloat(item.value);
    });

    // Hitung logika utama
    const totalHargaBarang = (harga * jumlah) + totalAksesoris;
    const pajak = totalHargaBarang * 0.1; // Pajak 10%
    const totalBayar = totalHargaBarang + pajak;

    // Tampilkan hasil (format Rupiah)
    document.getElementById('resTotalBarang').innerText = totalHargaBarang.toLocaleString('id-ID');
    document.getElementById('resPajak').innerText = pajak.toLocaleString('id-ID');
    document.getElementById('resTotalBayar').innerText = totalBayar.toLocaleString('id-ID');
}

function reset() {
    // Kosongkan semua inputan
    document.getElementById('namaBarang').value = "";
    document.getElementById('hargaBarang').value = "";
    document.getElementById('jumlahBeli').value = "";
    
    // Uncheck aksesoris
    const checkboxes = document.querySelectorAll('.aksesoris');
    checkboxes.forEach(item => item.checked = false);

    // Reset teks hasil
    document.getElementById('resTotalBarang').innerText = "0";
    document.getElementById('resPajak').innerText = "0";
    document.getElementById('resTotalBayar').innerText = "0";
}
