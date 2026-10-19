// Dữ liệu sản phẩm đầy đủ cho menu
const menuProducts = {
  coffee: [
    {
      name: "Cafe sữa đá",
      price: 25000,
      img: "./image/cafe_sua_da.png",
      desc: "Cà phê đậm đà pha phin cùng sữa đặc thơm béo",
      category: "coffee",
    },
    {
      name: "Cafe đen",
      price: 20000,
      img: "./image/cafe_den.png",
      desc: "Cà phê nguyên chất 100%, vị đắng đậm đà",
      category: "coffee",
    },
    {
      name: "Cafe phin",
      price: 25000,
      img: "./image/cafe_phin.png",
      desc: "Cà phê phin truyền thống, thơm lừng",
      category: "coffee",
    },
    {
      name: "Cafe Latte",
      price: 25000,
      img: "./image/cafe_latte.png",
      desc: "Espresso kết hợp sữa tươi đánh bông",
      category: "coffee",
    },
    {
      name: "Cafe Sữa",
      price: 25000,
      img: "./image/cafe_sua.png",
      desc: "Cà phê đen hòa quyện sữa đặc",
      category: "coffee",
    },
    {
      name: "Cafe nâu",
      price: 20000,
      img: "./image/cafe_nau.png",
      desc: "Cà phê nâu thơm ngon, béo ngậy",
      category: "coffee",
    },
    {
      name: "Cafe phô mai muối",
      price: 40000,
      img: "./image/cafe_pho_mai_muoi.png",
      desc: "Lớp kem phô mai muối béo ngậy",
      category: "coffee",
    },
    {
      name: "Cafe muối",
      price: 30000,
      img: "./image/cafe_muoi.png",
      desc: "Đặc sản Huế với lớp kem muối mặn mà",
      category: "coffee",
    },
  ],
  sinhto: [
    {
      name: "Sinh tố dâu",
      price: 35000,
      img: "./image/st_dau.jpg",
      desc: "Dâu tây tươi xay nhuyễn cùng sữa đặc",
      category: "sinhto",
    },
    {
      name: "Sinh tố bơ",
      price: 35000,
      img: "./image/st_bo.png",
      desc: "Bơ sáp chín mềm xay cùng sữa tươi",
      category: "sinhto",
    },
    {
      name: "Sinh tố đào",
      price: 35000,
      img: "./image/st_dao.png",
      desc: "Đào tươi ngọt thanh xay cùng sữa chua",
      category: "sinhto",
    },
    {
      name: "Sinh tố chuối",
      price: 30000,
      img: "./image/st_chuoi.png",
      desc: "Chuối chín kết hợp sữa tươi",
      category: "sinhto",
    },
    {
      name: "Sinh tố táo",
      price: 30000,
      img: "./image/st_tao.png",
      desc: "Táo xanh tươi mát xay cùng sữa chua",
      category: "sinhto",
    },
    {
      name: "Sinh tố xoài",
      price: 30000,
      img: "./image/st_xoai.png",
      desc: "Xoài cát chín vàng thơm lừng",
      category: "sinhto",
    },
    {
      name: "Sinh tố việt quất",
      price: 30000,
      img: "./image/st_viet_quat.png",
      desc: "Việt quất tươi giàu chất chống oxy hóa",
      category: "sinhto",
    },
  ],
  trasua: [
    {
      name: "Trà sữa Matcha Latte",
      price: 28000,
      img: "./image/ts_matcha_latte.png",
      desc: "Bột trà xanh Nhật Bản cao cấp",
      category: "trasua",
    },
    {
      name: "Trà sữa Socola",
      price: 28000,
      img: "./image/ts_socola.png",
      desc: "Bột cacao nguyên chất hòa quyện trà đen",
      category: "trasua",
    },
    {
      name: "Trà sữa dâu tây",
      price: 30000,
      img: "./image/ts_dau_tay.png",
      desc: "Dâu tây tươi ngọt chua hấp dẫn",
      category: "trasua",
    },
    {
      name: "Trà sữa kem trứng",
      price: 25000,
      img: "./image/ts_kem_trung.png",
      desc: "Lớp kem trứng béo ngậy phủ trên trà sữa",
      category: "trasua",
    },
    {
      name: "Trà sữa việt quất",
      price: 30000,
      img: "./image/ts_viet_quat.png",
      desc: "Việt quất tươi giàu chất chống oxy hóa",
      category: "trasua",
    },
    {
      name: "Trà sữa khoai môn",
      price: 20000,
      img: "./image/ts_khoai_mon.png",
      desc: "Khoai môn tím thơm bùi xay nhuyễn",
      category: "trasua",
    },
    {
      name: "Trà sữa bạc hà",
      price: 20000,
      img: "./image/ts_bac_ha.png",
      desc: "Bạc hà tươi the mát, dễ chịu",
      category: "trasua",
    },
    {
      name: "Trà sữa Kiwi",
      price: 25000,
      img: "./image/ts_kiwi.png",
      desc: "Kiwi xanh tươi giàu vitamin C",
      category: "trasua",
    },
    {
      name: "Trà sữa Ô long",
      price: 20000,
      img: "./image/ts_o_long.png",
      desc: "Trà ô long Đài Loan thượng hạng",
      category: "trasua",
    },
  ],
  nuocep: [
    {
      name: "Nước ép dưa hấu",
      price: 20000,
      img: "./image/dua_hau.png",
      desc: "Dưa hấu tươi 100%, giải nhiệt cơ thể",
      category: "nuocep",
    },
    {
      name: "Nước ép cam",
      price: 20000,
      img: "./image/cam.jpg",
      desc: "Cam sành tươi giàu vitamin C",
      category: "nuocep",
    },
    {
      name: "Nước ép chanh dây",
      price: 25000,
      img: "./image/chanh_day.png",
      desc: "Chanh dây tím tươi giàu chất xơ",
      category: "nuocep",
    },
    {
      name: "Nước ép dưa lưới",
      price: 25000,
      img: "./image/dua_luoi.png",
      desc: "Dưa lưới tươi ngọt thanh",
      category: "nuocep",
    },
    {
      name: "Nước ép thơm",
      price: 18000,
      img: "./image/thom.png",
      desc: "Dứa tươi giàu enzyme bromelain",
      category: "nuocep",
    },
    {
      name: "Nước ép cà rốt",
      price: 15000,
      img: "./image/ca_rot.png",
      desc: "Cà rốt tươi giàu beta-carotene",
      category: "nuocep",
    },
  ],
  travi: [
    {
      name: "Trà dâu tằm",
      price: 20000,
      img: "./image/tra_dau_tam.png",
      desc: "Dâu tằm tươi màu tím bắt mắt",
      category: "travi",
    },
    {
      name: "Trà bạc hà",
      price: 18000,
      img: "./image/tra_bac_ha.png",
      desc: "Bạc hà tươi the mát, dễ chịu",
      category: "travi",
    },
    {
      name: "Trà đào cam sả",
      price: 22000,
      img: "./image/dao_sa.png",
      desc: "Đào ngọt, cam chua, sả thơm",
      category: "travi",
    },
    {
      name: "Trà đào",
      price: 18000,
      img: "./image/tra_dao.png",
      desc: "Đào tươi ngọt thanh",
      category: "travi",
    },
    {
      name: "Trà dâu tây",
      price: 22000,
      img: "./image/tra_dau.png",
      desc: "Dâu tây tươi chua ngọt",
      category: "travi",
    },
    {
      name: "Trà chanh nha đam",
      price: 18000,
      img: "./image/nha_dam.png",
      desc: "Chanh tươi kết hợp nha đam",
      category: "travi",
    },
    {
      name: "Trà chanh",
      price: 18000,
      img: "./image/tra_chanh.png",
      desc: "Chanh tươi thanh mát",
      category: "travi",
    },
  ],
  doanvat: [
    {
      name: "Hạt hướng dương",
      price: 10000,
      img: "./image/huong_duong.png",
      desc: "Hạt hướng dương rang chín thơm ngon",
      category: "doanvat",
    },
    {
      name: "Phô mai que",
      price: 40000,
      img: "./image/pho_mai_que.png",
      desc: "Phô mai que chiên giòn, kéo sợi",
      category: "doanvat",
    },
    {
      name: "Xúc xích",
      price: 35000,
      img: "./image/xuc_xich.png",
      desc: "Xúc xích Đức nướng thơm ngon",
      category: "doanvat",
    },
    {
      name: "Lạp xưởng",
      price: 45000,
      img: "./image/lap_xuong.png",
      desc: "Lạp xưởng truyền thống đậm đà",
      category: "doanvat",
    },
    {
      name: "Tôm viên chiên",
      price: 40000,
      img: "./image/tom_vien.png",
      desc: "Tôm viên chiên giòn dai ngọt",
      category: "doanvat",
    },
    {
      name: "Cá viên chiên",
      price: 35000,
      img: "./image/ca_vien.png",
      desc: "Cá viên chiên vàng giòn",
      category: "doanvat",
    },
    {
      name: "Bò viên chiên",
      price: 45000,
      img: "./image/bo_vien.png",
      desc: "Bò viên chiên đậm đà",
      category: "doanvat",
    },
    {
      name: "Nem chua rán",
      price: 35000,
      img: "./image/nem.png",
      desc: "Nem chua rán giòn tan",
      category: "doanvat",
    },
    {
      name: "Bò khô",
      price: 50000,
      img: "./image/bo_kho.png",
      desc: "Bò khô dai dai đậm đà",
      category: "doanvat",
    },
    {
      name: "Đùi gà chiên KFC",
      price: 60000,
      img: "./image/dui_ga.png",
      desc: "Đùi gà chiên giòn tan",
      category: "doanvat",
    },
    {
      name: "Cánh gà chiên",
      price: 55000,
      img: "./image/canh_ga.png",
      desc: "Cánh gà chiên vàng giòn",
      category: "doanvat",
    },
    {
      name: "Bánh gối chiên",
      price: 55000,
      img: "./image/banh_goi.png",
      desc: "Bánh gối chiên vỏ giòn nhân thịt",
      category: "doanvat",
    },
    {
      name: "Khoai tây chiên lắc phô mai",
      price: 35000,
      img: "./image/khoai_tay_lac_pho_mai.png",
      desc: "Khoai tây chiên lắc phô mai thơm béo",
      category: "doanvat",
    },
    {
      name: "Khoai tây chiên",
      price: 30000,
      img: "./image/khoai_tay.png",
      desc: "Khoai tây chiên vàng giòn",
      category: "doanvat",
    },
    {
      name: "Khoai lang chiên",
      price: 30000,
      img: "./image/khoai_lang.png",
      desc: "Khoai lang chiên ngọt tự nhiên",
      category: "doanvat",
    },
    {
      name: "Hotdog xúc xích phô mai",
      price: 40000,
      img: "./image/hotdog.png",
      desc: "Hotdog xúc xích phô mai béo ngậy",
      category: "doanvat",
    },
  ],
  banhngot: [
    {
      name: "Bánh FLAN",
      price: 25000,
      img: "./image/flan.png",
      desc: "Bánh FLAN mềm mịn thơm béo",
      category: "banhngot",
    },
    {
      name: "Bánh ngọt",
      price: 20000,
      img: "./image/banh_ngot.png",
      desc: "Bánh ngọt đa dạng hương vị",
      category: "banhngot",
    },
    {
      name: "Bánh Panna Cotta",
      price: 20000,
      img: "./image/cotta.png",
      desc: "Panna Cotta kem sữa mịn màng",
      category: "banhngot",
    },
    {
      name: "Bánh Cookies",
      price: 20000,
      img: "./image/cookies.png",
      desc: "Cookies giòn tan thơm bơ",
      category: "banhngot",
    },
    {
      name: "Tiramisu",
      price: 25000,
      img: "./image/tiramisu.png",
      desc: "Tiramisu kem mascarpone béo ngậy",
      category: "banhngot",
    },
    {
      name: "Bánh Muffin",
      price: 25000,
      img: "./image/muffin.png",
      desc: "Muffin mềm xốp thơm bơ",
      category: "banhngot",
    },
    {
      name: "Bánh Mì",
      price: 25000,
      img: "./image/banh_mi.png",
      desc: "Bánh mì tươi giòn bên ngoài",
      category: "banhngot",
    },
    {
      name: "Bánh Macaron",
      price: 25000,
      img: "./image/macaron.png",
      desc: "Macaron Pháp màu sắc bắt mắt",
      category: "banhngot",
    },
    {
      name: "Bánh Mousse Cake",
      price: 25000,
      img: "./image/cake.png",
      desc: "Mousse Cake bông xốp mịn màng",
      category: "banhngot",
    },
    {
      name: "Bánh Cheese Cake",
      price: 25000,
      img: "./image/cheese.png",
      desc: "Cheese Cake phô mai béo ngậy",
      category: "banhngot",
    },
  ],
  combodoanvat: [
    {
      name: "Combo đồ ăn vặt 1",
      price: 65000,
      img: "./image/anvat_1.png",
      desc: "Gà rán + Phô mai que + Khoai tây chiên + Nước ngọt",
      category: "combodoanvat",
    },
    {
      name: "Combo đồ ăn vặt 2",
      price: 75000,
      img: "./image/anvat_2.png",
      desc: "Bò khô + Hạt hướng dương + Nem chua rán + Trà đào",
      category: "combodoanvat",
    },
    {
      name: "Combo đồ ăn vặt 3",
      price: 85000,
      img: "./image/anvat_3.png",
      desc: "Tôm viên + Cá viên + Bò viên + Sốt mayonnaise",
      category: "combodoanvat",
    },
    {
      name: "Combo đồ ăn vặt 4",
      price: 65000,
      img: "./image/anvat_4.png",
      desc: "Bánh gối + Hotdog + Khoai lang chiên + Nước tương",
      category: "combodoanvat",
    },
  ],
  combodouong: [
    {
      name: "Combo đồ uống 1",
      price: 45000,
      img: "./image/douong_1.png",
      desc: "Trà đào + Bánh ngọt",
      category: "combodouong",
    },
    {
      name: "Combo đồ uống 2",
      price: 55000,
      img: "./image/douong_2.png",
      desc: "Trà chanh nha đam + Bánh FLAN",
      category: "combodouong",
    },
    {
      name: "Combo đồ uống 3",
      price: 55000,
      img: "./image/douong_3.png",
      desc: "Trà chanh + Bánh Cookies",
      category: "combodouong",
    },
    {
      name: "Combo đồ uống 4",
      price: 55000,
      img: "./image/douong_4.png",
      desc: "Cafe sữa + Cafe đen",
      category: "combodouong",
    },
    {
      name: "Combo đồ uống 5",
      price: 55000,
      img: "./image/douong_5.png",
      desc: "Trà sữa bạc hà + Trà sữa Socola + Trà sữa Ô long",
      category: "combodouong",
    },
    {
      name: "Combo đồ uống 6",
      price: 55000,
      img: "./image/douong_6.png",
      desc: "Cafe sữa đá + Cafe Latte",
      category: "combodouong",
    },
  ],
  combo: [
    {
      name: "Combo 1",
      price: 60000,
      img: "./image/combo_1.png",
      desc: "1 đồ uống + 1 đồ ăn vặt (tùy chọn)",
      category: "combo",
    },
    {
      name: "Combo 2",
      price: 60000,
      img: "./image/combo_2.png",
      desc: "2 đồ uống + 2 đồ ăn vặt + 1 bánh ngọt",
      category: "combo",
    },
    {
      name: "Combo 3",
      price: 60000,
      img: "./image/combo_3.png",
      desc: "4 đồ uống + 3 đồ ăn vặt + 2 bánh ngọt",
      category: "combo",
    },
  ],
};

// Hàm hiển thị menu
function displayMenu() {
  const categories = [
    "coffee",
    "sinhto",
    "trasua",
    "nuocep",
    "travi",
    "doanvat",
    "banhngot",
    "combodoanvat",
    "combodouong",
    "combo",
  ];

  categories.forEach((cat) => {
    const grid = document.getElementById(`${cat}-grid`);
    if (grid && menuProducts[cat]) {
      grid.innerHTML = menuProducts[cat]
        .map(
          (product) => `
        <div class="menu-item">
          <img class="menu-item-img" src="${product.img}" alt="${product.name}" onerror="this.src='image/logo.jpg'">
          <div class="menu-item-info">
            <h3 style="cursor: pointer; color: #4b2e2b;" onclick="openProductDetailFromMenu('${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.img}', '${product.category}')">${product.name}</h3>
            <div class="price">${product.price.toLocaleString()}đ</div>
            <p class="desc">${product.desc}</p>
          </div>
          <button class="menu-item-btn" onclick="addToCartFromMenu('${product.name.replace(/'/g, "\\'")}', ${product.price})">+</button>
        </div>
      `,
        )
        .join("");
    }
  });
}

// Hàm mở popup chi tiết sản phẩm ngay trên trang menu
function openProductDetailFromMenu(name, price, img, category) {
  console.log("Mở chi tiết sản phẩm:", name, price, img, category);

  // Lưu thông tin sản phẩm hiện tại
  window.currentProductFromMenu = { name, price, img, category };
  window.currentQuantityFromMenu = 1;

  // Lấy thông tin chi tiết từ productDetails (nếu có trong script.js)
  let detail = {
    desc: "✨ Sản phẩm chất lượng cao, nguyên liệu tươi ngon, chế biến theo công thức đặc biệt của Nbreak.",
    ingredients: "Nguyên liệu tự nhiên, tươi ngon, đảm bảo vệ sinh",
    nutrition: "Thông tin dinh dưỡng sẽ được cập nhật",
  };

  // Nếu có productDetails từ script.js thì dùng
  if (
    typeof window.productDetails !== "undefined" &&
    window.productDetails[name]
  ) {
    detail = window.productDetails[name];
  }

  // Cập nhật nội dung popup
  const nameEl = document.getElementById("detail-product-name");
  const imgEl = document.getElementById("detail-product-img");
  const priceEl = document.getElementById("detail-product-price");
  const descEl = document.getElementById("detail-product-desc");
  const qtyEl = document.getElementById("detail-quantity");

  if (nameEl) nameEl.innerText = name;
  if (imgEl) imgEl.src = img;
  if (priceEl) priceEl.innerHTML = price.toLocaleString();
  if (qtyEl) qtyEl.innerText = "1";

  if (descEl) {
    descEl.innerHTML = `
      <div class="detail-section" style="margin-bottom: 15px;">
        <h3 style="color: #4b2e2b; margin-bottom: 8px; font-size: 16px;">📝 Mô tả</h3>
        <p style="color: #555; line-height: 1.5;">${detail.desc}</p>
      </div>
      <div class="detail-section" style="margin-bottom: 15px;">
        <h3 style="color: #4b2e2b; margin-bottom: 8px; font-size: 16px;">🥗 Thành phần</h3>
        <p style="color: #555; line-height: 1.5;">${detail.ingredients}</p>
      </div>
      <div class="detail-section" style="margin-bottom: 15px;">
        <h3 style="color: #4b2e2b; margin-bottom: 8px; font-size: 16px;">📊 Dinh dưỡng</h3>
        <p style="color: #555; line-height: 1.5;">${detail.nutrition}</p>
      </div>
    `;
  }

  // Load sản phẩm gợi ý cùng danh mục
  loadSuggestedProductsFromMenu(name, category);

  // Hiển thị popup
  const popup = document.getElementById("product-detail-popup");
  if (popup) {
    popup.style.display = "flex";
    popup.onclick = function (event) {
      if (event.target === popup) {
        closeProductDetailFromMenu();
      }
    };
  }
}

// Hàm tăng giảm số lượng trong popup
function increaseDetailQtyFromMenu() {
  if (typeof window.currentQuantityFromMenu === "undefined")
    window.currentQuantityFromMenu = 1;
  window.currentQuantityFromMenu++;
  const qtyEl = document.getElementById("detail-quantity");
  if (qtyEl) qtyEl.innerText = window.currentQuantityFromMenu;
}

function decreaseDetailQtyFromMenu() {
  if (typeof window.currentQuantityFromMenu === "undefined")
    window.currentQuantityFromMenu = 1;
  if (window.currentQuantityFromMenu > 1) {
    window.currentQuantityFromMenu--;
    const qtyEl = document.getElementById("detail-quantity");
    if (qtyEl) qtyEl.innerText = window.currentQuantityFromMenu;
  }
}

// Hàm thêm vào giỏ hàng từ popup
function addDetailToCartFromMenu() {
  if (!window.currentProductFromMenu) return;
  const product = window.currentProductFromMenu;
  const quantity = window.currentQuantityFromMenu || 1;

  for (let i = 0; i < quantity; i++) {
    addToCartFromMenu(product.name, product.price);
  }

  closeProductDetailFromMenu();
  showToastFromMenu(`✅ Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);
}

// Đóng popup chi tiết
function closeProductDetailFromMenu() {
  const popup = document.getElementById("product-detail-popup");
  if (popup) {
    popup.style.display = "none";
  }
  window.currentProductFromMenu = null;
  window.currentQuantityFromMenu = 1;
}

// Hàm load sản phẩm gợi ý
function loadSuggestedProductsFromMenu(productName, category) {
  // Lấy danh sách sản phẩm từ menuProducts
  let allProducts = [];
  for (let cat in menuProducts) {
    allProducts = allProducts.concat(menuProducts[cat]);
  }

  const suggestions = allProducts.filter(
    (p) => p.category === category && p.name !== productName,
  );
  const grid = document.getElementById("suggested-grid");
  if (!grid) return;

  if (suggestions.length === 0) {
    grid.innerHTML =
      '<p style="text-align:center; color:#999; grid-column: 1/-1; padding: 20px;">✨ Chưa có sản phẩm gợi ý cùng danh mục</p>';
    return;
  }

  grid.innerHTML = suggestions
    .slice(0, 4)
    .map(
      (s) => `
    <div class="suggested-item" style="background:#f9f9f9; border-radius:12px; padding:10px; text-align:center; cursor:pointer; transition:0.3s;">
      <img src="${s.img}" alt="${s.name}" style="width:100%; height:90px; object-fit:cover; border-radius:8px; margin-bottom:8px;">
      <div style="font-weight:bold; font-size:13px; color:#4b2e2b;">${s.name}</div>
      <div style="color:#e67e22; font-size:12px; margin-top:5px;">${s.price.toLocaleString()}đ</div>
    </div>
  `,
    )
    .join("");

  const items = document.querySelectorAll(".suggested-item");
  suggestions.slice(0, 4).forEach((s, index) => {
    if (items[index]) {
      items[index].onclick = () =>
        openProductDetailFromMenu(s.name, s.price, s.img, s.category);
      items[index].onmouseenter = () =>
        (items[index].style.transform = "translateY(-3px)");
      items[index].onmouseleave = () =>
        (items[index].style.transform = "translateY(0)");
    }
  });
}

// Hàm thêm vào giỏ hàng từ menu
function addToCartFromMenu(name, price) {
  // Lấy giỏ hàng từ localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((p) => p.name === name);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  showToastFromMenu(`✅ Đã thêm ${name} vào giỏ hàng!`);

  // Cập nhật số lượng trên icon giỏ hàng
  updateCartCountFromMenu();

  // Phát hiệu ứng nhấp nháy cho icon giỏ hàng
  const cartIcon = document.querySelector(".cart-icon-fix .nav-icon");
  if (cartIcon) {
    cartIcon.style.transform = "scale(1.2)";
    setTimeout(() => {
      cartIcon.style.transform = "";
    }, 300);
  }
}

// Hàm hiển thị toast
function showToastFromMenu(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.style.cssText = `
    background: ${type === "success" ? "#10b981" : "#ef4444"};
    color: white;
    padding: 12px 16px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    min-width: 260px;
    animation: slideInRight 0.3s ease;
  `;
  toast.innerHTML = `
    <span style="font-size: 18px;">${type === "success" ? "✅" : "❌"}</span>
    <span style="flex: 1;">${message}</span>
    <button style="background: none; border: none; color: white; cursor: pointer; font-size: 16px;">✕</button>
  `;

  const closeBtn = toast.querySelector("button");
  closeBtn.onclick = () => toast.remove();

  container.appendChild(toast);

  setTimeout(() => {
    if (toast && toast.parentNode) {
      toast.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }
  }, 2500);

  // Thêm animation keyframes nếu chưa có
  if (!document.querySelector("#toast-animation-style")) {
    const style = document.createElement("style");
    style.id = "toast-animation-style";
    style.textContent = `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

// Cập nhật số lượng giỏ hàng
function updateCartCountFromMenu() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountSpan = document.getElementById("cart-count");
  if (cartCountSpan) cartCountSpan.innerText = total;
}

// Khởi tạo menu
document.addEventListener("DOMContentLoaded", () => {
  displayMenu();
  updateCartCountFromMenu();

  // Gắn sự kiện cho các nút tăng/giảm trong popup (nếu chưa có)
  const increaseBtn = document.querySelector(
    "#product-detail-popup .quantity-control button:first-child",
  );
  const decreaseBtn = document.querySelector(
    "#product-detail-popup .quantity-control button:last-child",
  );
  const addToCartBtn = document.querySelector(
    "#product-detail-popup .add-to-cart-detail",
  );
  const closeBtn = document.querySelector(
    "#product-detail-popup .product-detail-close",
  );

  if (increaseBtn && !increaseBtn.hasAttribute("data-listener")) {
    increaseBtn.setAttribute("data-listener", "true");
    increaseBtn.onclick = () => {
      if (typeof window.increaseDetailQty === "function") {
        window.increaseDetailQty();
      } else {
        increaseDetailQtyFromMenu();
      }
    };
  }

  if (decreaseBtn && !decreaseBtn.hasAttribute("data-listener")) {
    decreaseBtn.setAttribute("data-listener", "true");
    decreaseBtn.onclick = () => {
      if (typeof window.decreaseDetailQty === "function") {
        window.decreaseDetailQty();
      } else {
        decreaseDetailQtyFromMenu();
      }
    };
  }

  if (addToCartBtn && !addToCartBtn.hasAttribute("data-listener")) {
    addToCartBtn.setAttribute("data-listener", "true");
    addToCartBtn.onclick = () => {
      if (typeof window.addDetailToCart === "function") {
        window.addDetailToCart();
      } else {
        addDetailToCartFromMenu();
      }
    };
  }

  if (closeBtn && !closeBtn.hasAttribute("data-listener")) {
    closeBtn.setAttribute("data-listener", "true");
    closeBtn.onclick = () => {
      if (typeof window.closeProductDetail === "function") {
        window.closeProductDetail();
      } else {
        closeProductDetailFromMenu();
      }
    };
  }
});

// Export các hàm ra global để sử dụng trong HTML
window.openProductDetailFromMenu = openProductDetailFromMenu;
window.addToCartFromMenu = addToCartFromMenu;
window.increaseDetailQtyFromMenu = increaseDetailQtyFromMenu;
window.decreaseDetailQtyFromMenu = decreaseDetailQtyFromMenu;
window.addDetailToCartFromMenu = addDetailToCartFromMenu;
window.closeProductDetailFromMenu = closeProductDetailFromMenu;
window.updateCartCountFromMenu = updateCartCountFromMenu;
