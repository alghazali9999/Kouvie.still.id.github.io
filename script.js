// Hamburger Menu //
function toggleMenu() {
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const menu = document.getElementById('slideMenu');

  // Animasi untuk toggle garis menjadi tanda silang (X)
  line1.classList.toggle('rotate-45');  // Rotasi garis pertama
  line2.classList.toggle('-rotate-45'); // Rotasi garis kedua dan bergerak ke atas

  // Menambahkan efek fade up pada slide menu
  if (menu.classList.contains('translate-y-full')) {
    menu.classList.remove('translate-y-full', 'opacity-0');
    menu.classList.add('translate-y-0', 'opacity-100');
  } else {
    menu.classList.remove('translate-y-0', 'opacity-100');
    menu.classList.add('translate-y-full', 'opacity-0');
  }
}
// And Hamburger Menu //

// Slide Animation //
let slider = document.getElementById('slider');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 3; // Scroll speed
  slider.style.transform = 'translateX(' + -scrollAmount + 'px)';

  // Reset scroll when reaching the end
  if (scrollAmount >= slider.scrollWidth / 2) {
    scrollAmount = 0;
  }
}

setInterval(autoScroll, 50); // Adjust interval for smoother scrolling
//And Slide Animation //

// Efect 3D Parallax//

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', parallaxEffect);
function parallaxEffect() {
  const scrollTop = window.pageYOffset;

  // Memeriksa apakah halaman di-scroll ke bawah
  if (scrollTop > 0) {
    // Mengambil gambar utama dan gambar kecil
    const imageSmall1 = document.getElementById('image-small-1');
    const imageSmall2 = document.getElementById('image-small-2');

    // Menyesuaikan kecepatan gerakan gambar kecil untuk scroll down
    imageSmall1.style.transform = `translateX(${scrollTop * 0.1}px)`; // Gerakan ke kanan
    imageSmall2.style.transform = `translateY(${scrollTop * -0.1}px)`; // Gerakan ke kiri
  }
}

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', parallaxEffect);

window.addEventListener('scroll', parallaxEffect);
function parallaxEffect() {
  const scrollTop = window.pageYOffset;

  // Memeriksa apakah halaman di-scroll ke bawah
  if (scrollTop > 0) {
    // Mengambil gambar utama dan gambar kecil
    const imageSmall1 = document.getElementById('image-sma-1');
    const imageSmall2 = document.getElementById('image-sma-2');

    // Menyesuaikan kecepatan gerakan gambar kecil untuk scroll down
    imageSmall1.style.transform = `translateX(${scrollTop * 0.1}px)`; // Gerakan ke kanan
    imageSmall2.style.transform = `translateY(${scrollTop * -0.1}px)`; // Gerakan ke kiri
  }
}

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', parallaxEffect);

// And Efect 3D Parallax//

// Totop Scroll Animation//
document.addEventListener('DOMContentLoaded', function () {
  const toTopButton = document.querySelector('.totop');

  // Scroll to Top when the button is clicked
  toTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  });

  // Toggle visibility of the button based on scroll position
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { // If the scroll position is greater than 200px
      toTopButton.classList.remove('opacity-0'); // Make the button visible
      toTopButton.classList.add('opacity-100');  // Add full opacity
    } else {
      toTopButton.classList.remove('opacity-100'); // Hide the button
      toTopButton.classList.add('opacity-0');      // Add opacity 0
    }
  });
});
// And Totop Scroll Animation//

// Filter Category Produk List //
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    productCards.forEach(card => {
      card.style.display = 'none';
      card.classList.remove('scale-105'); // Reset animasi zoom

      if (filter === 'all' || card.classList.contains(filter)) {
        setTimeout(() => {
          card.style.display = 'block';
          setTimeout(() => {
            card.classList.add('scale-105'); // Tambahkan animasi zoom
          }, 100); // Delay animasi zoom agar lebih smooth
        }, 100);
      }
    });
  });
});
// And Filter Category Produk List //

// Efect bg parllax 3d //
document.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const parallaxSection = document.querySelector('section');

  // Mengubah posisi background tergantung dari posisi scroll
  parallaxSection.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// And Efect bg parllax 3d //

