// Menunggu hingga seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // 1. Ambil elemen tombol berdasarkan ID
    const tombol = document.getElementById('tombolUbahPesan');
    
    // 2. Ambil elemen paragraf pesan berdasarkan ID
    const pesanElement = document.getElementById('pesan');
    
    // 3. Tambahkan event listener (pendengar event) ke tombol
    // Saat tombol di-klik, fungsi anonim di dalamnya akan dijalankan
    tombol.addEventListener('click', function() {
        // 4. Ubah isi teks dari elemen pesan
        pesanElement.textContent = 'Pesan telah diubah oleh JavaScript! Anda berhasil mengklik tombol.';
        
        // 5. Ubah warna tombol secara dinamis (opsional)
        tombol.style.backgroundColor = '#dc3545';
        tombol.textContent = 'Sudah Diklik!';
    });
});
