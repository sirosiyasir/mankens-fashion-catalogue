
// I add and remove class to the products slider
var productsResize = $('.carousel-item img');

$(window).resize(function() {
  if (window.innerWidth <= 1000){
    productsResize.addClass('d-block w-100');
    $(".next-arrow").attr("src", "images/next-previous-arrow/next.png")
    $(".previous-arrow").attr("src", "images/next-previous-arrow/previous.png")
  } else{
     productsResize.removeClass('d-block w-100');
  }
});

// NAVBAR BRAND
$(".brand").click(function() {
  window.location.reload();
})

// LANGUAGES TRANSLATION

// ARABIC
$(".arabic").click(function() {
  $(".location-en-tr").text("موقعك");
  $(".contact-en-tr").text("اتصال");
  $(".about-us-en-tr").text("معلومات عنا");
  $(".visit-en-tr").text("قم بزيارة مجموعتنا الجديدة خريف وشتاء 2023");
  $(".gallery").text(" مجموعة");
  $(".our-products-en-tr").text("منتجنا");
  $(".coats-en-tr").text("المعاطف");
  $(".suits-en-tr").text("بدلة");
  $(".jackets-en-tr").text("جاكيتات");
  $(".dresses-en-tr").text("فساتين");
  $(".cardigans-en-tr").text("بالأزرار");
  $(".ponchos-en-tr").text("بانكولار");
  $(".about-us-title-en-tr").text("معلومات عنا");
  $(".about-us-text-en-tr").text("تأسست شركتنا عام 1993  وبدأت بإنتاج الملابس النسائية الجاهزة      ونستمر بمواكبة التغيرات العصرية التي تناسب مختلف الفئات العمرية ووضعناها بين يديكم انضموا الى عائلتنا لتتعرفوا  على المزيد");
  $(".location-title-en-tr").text("موقع");
})

// ENGLISH
$(".english").click(function() {
window.location.reload();
})

// TURKISH
$(".turkish").click(function(){
  $(".location-en-tr").text("Konum");
  $(".contact-en-tr").text("İletişim");
  $(".about-us-en-tr").text("Hakkımızda");
  $(".visit-en-tr").html("2023 <br> Sonbahar ve Kış <br> Koleksiyonu ");
  $(".gallery").text(" Koleksiyon");
  $(".our-products-en-tr").text("Ürünlerimiz");
  $(".coats-en-tr").text("KABANLAR");
  $(".suits-en-tr").text("TAKIMLAR");
  $(".jackets-en-tr").text("CEKETLER");
  $(".dresses-en-tr").text("ELBİSELER");
  $(".cardigans-en-tr").text("HIRKALAR");
  $(".ponchos-en-tr").text("PANÇOLAR");
  $(".about-us-title-en-tr").text("Hakkımızda");
  $(".about-us-text-en-tr").text("Büyük beden bayan giyim imalatı ve toptan satışı alanında 1993 yılından bu yana hizmet veren firmamız Mankens Fashion, faaliyete başladığı ilk günden bu yana gelişen ve değişen sektörün nabzını tutarak daima yenilik ilkesi doğrultusunda faaliyetlerini sürdürmektedir.");
  $(".location-title-en-tr").text("Konum");
});
