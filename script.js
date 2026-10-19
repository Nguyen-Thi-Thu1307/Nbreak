// GLOBAL STATE
const state = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  currentCategory: "all",
  searchKeyword: "",
  currentProduct: null,
  currentQuantity: 1,
  currentPage: 1,
  itemsPerPage: 6,
};

// DỮ LIỆU MÔ TẢ CHI TIẾT CHO TẤT CẢ 75 SẢN PHẨM
const productDetails = {
  //  COFFEE (8 sản phẩm)
  "Cafe sữa đá": {
    desc: "☕ Cafe sữa đá là thức uống truyền thống của Việt Nam. Cà phê sữa đá đậm đà được pha bằng phin, kết hợp với sữa đặc thơm béo và đá viên mát lạnh.",
    ingredients: "Cà phê Robusta, sữa đặc, đá viên",
    nutrition: "Calo: ~120kcal | Caffein: ~100mg",
  },
  "Cafe đen": {
    desc: "☕ Cafe đen là cà phê nguyên chất 100% từ hạt cà phê Robusta được rang xay thủ công, không pha sữa, không đường, giữ nguyên hương vị đắng đậm đà đặc trưng.",
    ingredients: "Cà phê Robusta nguyên chất, nước sôi",
    nutrition: "Calo: ~5kcal | Caffein: ~120mg",
  },
  "Cafe phin": {
    desc: "☕ Cafe phin - Hương vị cà phê Việt Nam truyền thống được pha bằng phin nhôm, từng giọt cà phê chảy chậm rãi tạo nên hương thơm đặc trưng.",
    ingredients: "Cà phê Robusta, nước nóng (pha phin)",
    nutrition: "Calo: ~5kcal | Caffein: ~110mg",
  },
  "Cafe Latte": {
    desc: "☕ Cafe Latte là sự kết hợp hoàn hảo giữa espresso Ý và sữa tươi đánh bông, tạo nên lớp foam mịn màng và hương vị cà phê nhẹ nhàng.",
    ingredients: "Espresso, sữa tươi, foam sữa",
    nutrition: "Calo: ~180kcal | Caffein: ~80mg",
  },
  "Cafe Sữa": {
    desc: "🥛 Cafe Sữa - Sự kết hợp giữa cà phê đen đậm đà và sữa đặc béo ngậy, tạo nên thức uống thơm ngon, hấp dẫn.",
    ingredients: "Cà phê đen, sữa đặc, đá",
    nutrition: "Calo: ~200kcal | Caffein: ~90mg",
  },
  "Cafe nâu": {
    desc: "🥛 Cafe nâu - Sự kết hợp giữa cà phê nâu đậm đà và sữa đặc béo ngậy, thức uống quen thuộc của người Việt.",
    ingredients: "Cà phê nâu, sữa đặc, đá",
    nutrition: "Calo: ~200kcal | Caffein: ~90mg",
  },
  "Cafe phô mai muối": {
    desc: "🧂 Cafe phô mai muối - Lớp kem muối mặn mà cùng lớp phô mai béo ngậy hòa quyện cùng cà phê đen tạo nên hương vị độc đáo.",
    ingredients: "Cà phê đen, kem muối, sữa, phô mai",
    nutrition: "Calo: ~150kcal | Caffein: ~95mg",
  },
  "Cafe muối": {
    desc: "🧂 Cafe muối - Đặc sản của Huế với lớp kem muối mặn mà, béo ngậy phủ trên cà phê đen, tạo nên hương vị khó quên.",
    ingredients: "Cà phê đen, kem muối, sữa",
    nutrition: "Calo: ~150kcal | Caffein: ~95mg",
  },

  // SINH TỐ (7 sản phẩm)
  "Sinh tố dâu": {
    desc: "🍓 Sinh tố dâu được làm từ dâu tây tươi nhập khẩu, xay nhuyễn cùng sữa đặc và đá viên, tạo nên thức uống mát lạnh giàu vitamin C.",
    ingredients: "Dâu tây tươi, sữa đặc, đá viên, đường",
    nutrition: "Calo: ~150kcal | Vitamin C: 70mg",
  },
  "Sinh tố bơ": {
    desc: "🥑 Sinh tố bơ được làm từ bơ sáp chín mềm, xay cùng sữa đặc và sữa tươi, tạo nên thức uống béo ngậy, thơm ngon và bổ dưỡng.",
    ingredients: "Bơ sáp, sữa đặc, sữa tươi, đá",
    nutrition: "Calo: ~280kcal | Chất béo tốt: 15g",
  },
  "Sinh tố đào": {
    desc: "🍑 Sinh tố đào được làm từ đào tươi nhập khẩu, xay cùng sữa chua và mật ong, tạo nên thức uống thanh mát, tốt cho tiêu hóa.",
    ingredients: "Đào tươi, sữa chua, mật ong, đá",
    nutrition: "Calo: ~130kcal | Vitamin A: 15%",
  },
  "Sinh tố chuối": {
    desc: "🍌 Sinh tố chuối được làm từ chuối chín thơm ngọt, kết hợp với sữa tươi và sữa chua, tạo nên thức uống bổ dưỡng giàu kali.",
    ingredients: "Chuối chín, sữa tươi, sữa chua, mật ong",
    nutrition: "Calo: ~200kcal | Kali: 400mg",
  },
  "Sinh tố táo": {
    desc: "🍎 Sinh tố táo được làm từ táo xanh tươi mát, xay cùng sữa chua và gừng tươi, tạo nên thức uống thanh lọc cơ thể.",
    ingredients: "Táo xanh, sữa chua, gừng, mật ong",
    nutrition: "Calo: ~120kcal | Chất xơ: 5g",
  },
  "Sinh tố xoài": {
    desc: "🥭 Sinh tố xoài được làm từ xoài cát chín vàng, xay nhuyễn cùng sữa đặc và sữa tươi, tạo nên thức uống thơm ngon, bổ dưỡng.",
    ingredients: "Xoài cát, sữa đặc, sữa tươi, đá",
    nutrition: "Calo: ~170kcal | Vitamin C: 60mg",
  },
  "Sinh tố việt quất": {
    desc: "🫐 Sinh tố việt quất được chắt lọc từ những quả việt quất tím lịm, xay nhuyễn cùng sữa đặc và sữa tươi, giàu chất chống oxy hóa.",
    ingredients: "Việt quất, sữa đặc, sữa tươi, đá",
    nutrition: "Calo: ~170kcal | Vitamin C: 60mg",
  },

  //  TRÀ SỮA (9 sản phẩm)
  "Trà sữa Matcha Latte": {
    desc: "🍵 Trà sữa Matcha Latte được làm từ bột trà xanh Nhật Bản cao cấp, hòa quyện cùng sữa tươi và trân châu dai ngon.",
    ingredients: "Bột matcha Nhật, sữa tươi, trân châu",
    nutrition: "Calo: ~220kcal | Chất chống oxy hóa: Cao",
  },
  "Trà sữa Socola": {
    desc: "🍫 Trà sữa Socola được làm từ bột cacao nguyên chất, hòa quyện cùng trà đen và sữa tươi, tạo nên thức uống thơm ngon, hấp dẫn.",
    ingredients: "Bột cacao, trà đen, sữa tươi, trân châu",
    nutrition: "Calo: ~250kcal | Theobromine: 50mg",
  },
  "Trà sữa dâu tây": {
    desc: "🍓 Trà sữa dâu tây được làm từ dâu tây tươi, kết hợp cùng trà sữa thơm ngon, tạo nên thức uống ngọt ngào, màu sắc bắt mắt.",
    ingredients: "Dâu tây tươi, trà đen, sữa, trân châu",
    nutrition: "Calo: ~200kcal | Vitamin C: 50mg",
  },
  "Trà sữa kem trứng": {
    desc: "🥚 Trà sữa kem trứng - Đặc sản đến từ Đài Loan với lớp kem trứng béo ngậy phủ trên trà sữa thơm lừng.",
    ingredients: "Trà đen, sữa, kem trứng, trân châu",
    nutrition: "Calo: ~300kcal | Protein: 8g",
  },
  "Trà sữa việt quất": {
    desc: "🫐 Trà sữa việt quất được làm từ quả việt quất tươi, giàu chất chống oxy hóa, kết hợp cùng trà sữa thơm ngon.",
    ingredients: "Việt quất, trà đen, sữa, trân châu",
    nutrition: "Calo: ~210kcal | Anthocyanin: Cao",
  },
  "Trà sữa khoai môn": {
    desc: "🍠 Trà sữa khoai môn được làm từ khoai môn tím thơm bùi, xay nhuyễn cùng trà sữa, tạo nên màu sắc tím bắt mắt.",
    ingredients: "Khoai môn tím, trà đen, sữa, trân châu",
    nutrition: "Calo: ~230kcal | Chất xơ: 4g",
  },
  "Trà sữa bạc hà": {
    desc: "🌿 Trà sữa bạc hà được làm từ lá bạc hà tươi, kết hợp cùng trà đen và sữa, tạo nên thức uống thanh mát, dễ chịu.",
    ingredients: "Bạc hà tươi, trà đen, sữa, trân châu",
    nutrition: "Calo: ~180kcal | Tốt cho tiêu hóa",
  },
  "Trà sữa Kiwi": {
    desc: "🥝 Trà sữa Kiwi được làm từ kiwi xanh tươi, giàu vitamin C, kết hợp cùng trà sữa thơm ngon.",
    ingredients: "Kiwi xanh, trà đen, sữa, trân châu",
    nutrition: "Calo: ~190kcal | Vitamin C: 90mg",
  },
  "Trà sữa Ô long": {
    desc: "🍃 Trà sữa Ô long được pha từ trà ô long Đài Loan thượng hạng, hòa quyện cùng sữa tươi, tạo nên hương vị thanh tao.",
    ingredients: "Trà ô long Đài Loan, sữa tươi, trân châu",
    nutrition: "Calo: ~200kcal | Chất chống oxy hóa: Cao",
  },

  //  NƯỚC ÉP (6 sản phẩm)
  "Nước ép dưa hấu": {
    desc: "🍉 Nước ép dưa hấu 100% từ trái dưa hấu tươi, không đường, không chất bảo quản, giải nhiệt cực tốt.",
    ingredients: "Dưa hấu tươi (100%)",
    nutrition: "Calo: ~60kcal | Lycopene: 10mg",
  },
  "Nước ép cam": {
    desc: "🍊 Nước ép cam được vắt từ cam sành tươi, giữ nguyên vị chua ngọt tự nhiên, giàu vitamin C tăng sức đề kháng.",
    ingredients: "Cam sành tươi (100%)",
    nutrition: "Calo: ~70kcal | Vitamin C: 80mg",
  },
  "Nước ép chanh dây": {
    desc: "🟡 Nước ép chanh dây được làm từ chanh dây tím tươi, giàu vitamin A, C và chất xơ, vị chua thanh dễ uống.",
    ingredients: "Chanh dây tím, đường, nước",
    nutrition: "Calo: ~80kcal | Chất xơ: 5g",
  },
  "Nước ép dưa lưới": {
    desc: "🍈 Nước ép dưa lưới được làm từ dưa lưới tươi, vị chua thanh, thơm nhẹ, giàu vitamin C và khoáng chất.",
    ingredients: "Dưa lưới tươi, đường, nước",
    nutrition: "Calo: ~65kcal | Vitamin C: 70mg",
  },
  "Nước ép thơm": {
    desc: "🍍 Nước ép thơm (dứa) được làm từ dứa tươi ngọt thanh, giàu enzyme bromelain hỗ trợ tiêu hóa.",
    ingredients: "Dứa tươi (100%)",
    nutrition: "Calo: ~75kcal | Bromelain: Cao",
  },
  "Nước ép cà rốt": {
    desc: "🥕 Nước ép cà rốt được ép từ cà rốt tươi, giàu beta-carotene, vitamin A tốt cho mắt và làn da.",
    ingredients: "Cà rốt tươi (100%)",
    nutrition: "Calo: ~55kcal | Vitamin A: 200%",
  },

  // TRÀ VỊ (6 sản phẩm)
  "Trà dâu tằm": {
    desc: "🍓 Trà dâu tằm được làm từ dâu tằm tươi, kết hợp cùng trà nền thơm nhẹ, tạo nên thức uống thanh mát.",
    ingredients: "Dâu tằm tươi, trà nền, đường",
    nutrition: "Calo: ~85kcal | Vitamin C: 50mg",
  },
  "Trà bạc hà": {
    desc: "🌿 Trà bạc hà được pha từ lá bạc hà tươi, có vị the mát, dễ chịu, giúp thư giãn và tốt cho tiêu hóa.",
    ingredients: "Lá bạc hà tươi, nước nóng",
    nutrition: "Calo: ~5kcal | Tốt cho tiêu hóa",
  },
  "Trà đào cam sả": {
    desc: "🍑 Trà đào cam sả là sự kết hợp hài hòa giữa vị ngọt thanh của đào, chua nhẹ của cam và hương thơm của sả.",
    ingredients: "Đào, cam, sả, trà nền",
    nutrition: "Calo: ~90kcal | Vitamin C: 40mg",
  },
  "Trà đào": {
    desc: "🍑 Trà đào là thức uống thanh mát với vị ngọt tự nhiên từ đào tươi, kết hợp cùng trà nền thơm nhẹ.",
    ingredients: "Đào tươi, trà nền, đường",
    nutrition: "Calo: ~80kcal | Chất chống oxy hóa",
  },
  "Trà dâu tây": {
    desc: "🍓 Trà dâu tây được làm từ dâu tây tươi, kết hợp cùng trà nền, tạo nên thức uống ngọt ngào, màu sắc bắt mắt.",
    ingredients: "Dâu tây tươi, trà nền, đường",
    nutrition: "Calo: ~85kcal | Vitamin C: 55mg",
  },
  "Trà chanh nha đam": {
    desc: "🍋 Trà chanh nha đam là thức uống thanh lọc cơ thể với vị chua của chanh và nha đam giòn mát, tốt cho làn da.",
    ingredients: "Chanh tươi, nha đam, trà nền, mật ong",
    nutrition: "Calo: ~70kcal | Tốt cho da",
  },
  "Trà chanh": {
    desc: "🍋 Trà chanh là thức uống đơn giản nhưng thanh mát, dễ làm, giúp giải nhiệt và tăng cường vitamin C.",
    ingredients: "Chanh tươi, trà nền, đường",
    nutrition: "Calo: ~60kcal | Vitamin C: 30mg",
  },

  // ĐỒ ĂN VẶT (16 sản phẩm)
  "Hạt hướng dương": {
    desc: "🌻 Hạt hướng dương được rang chín thơm ngon, giòn tan, là món ăn vặt lý tưởng khi nhậu hoặc xem phim.",
    ingredients: "Hạt hướng dương, muối",
    nutrition: "Calo: ~580kcal/100g | Vitamin E: 35mg",
  },
  "Phô mai que": {
    desc: "🧀 Phô mai que được làm từ phô mai Mozzarella cao cấp, chiên giòn vàng ruộm, béo ngậy, kéo sợi dai ngon.",
    ingredients: "Phô mai Mozzarella, bột chiên xù",
    nutrition: "Calo: ~350kcal/100g | Canxi: 500mg",
  },
  "Xúc xích": {
    desc: "🌭 Xúc xích Đức thơm ngon, được nướng trên than hồng, da giòn, thịt bên trong mềm ngọt, đậm đà gia vị.",
    ingredients: "Thịt heo, gia vị, vỏ collagen",
    nutrition: "Calo: ~280kcal/100g | Protein: 12g",
  },
  "Lạp xưởng": {
    desc: "🥓 Lạp xưởng truyền thống được làm từ thịt heo xay nhuyễn, tẩm ướp gia vị đặc biệt, có vị ngọt béo đặc trưng.",
    ingredients: "Thịt heo, mỡ, gia vị, đường",
    nutrition: "Calo: ~450kcal/100g | Protein: 15g",
  },
  "Tôm viên chiên": {
    desc: "🍤 Tôm viên chiên được làm từ tôm tươi xay nhuyễn, viên tròn, chiên giòn vàng, thơm ngon, dai dai.",
    ingredients: "Tôm tươi, bột mì, gia vị",
    nutrition: "Calo: ~220kcal/100g | Protein: 14g",
  },
  "Cá viên chiên": {
    desc: "🐟 Cá viên chiên được làm từ thịt cá tươi, xay nhuyễn, viên tròn và chiên giòn, ăn kèm tương ớt.",
    ingredients: "Thịt cá tươi, bột mì, gia vị",
    nutrition: "Calo: ~200kcal/100g | Omega-3: Tốt",
  },
  "Bò viên chiên": {
    desc: "🥩 Bò viên chiên được làm từ thịt bò xay, viên tròn, chiên vàng, thơm ngon, đậm đà.",
    ingredients: "Thịt bò, bột mì, gia vị",
    nutrition: "Calo: ~250kcal/100g | Sắt: 2mg",
  },
  "Nem chua rán": {
    desc: "🍢 Nem chua rán là món ăn vặt quen thuộc, được bọc bột chiên giòn, chấm cùng tương ớt hoặc mayonnaise.",
    ingredients: "Nem chua, bột chiên, gia vị",
    nutrition: "Calo: ~300kcal/100g | Protein: 10g",
  },
  "Bò khô": {
    desc: "🥩 Bò khô được làm từ thịt bò thượng hạng, tẩm ướp gia vị đặc biệt (sả, ớt), sấy khô vừa ăn, dai dai thơm ngon.",
    ingredients: "Thịt bò, gia vị, ớt, sả",
    nutrition: "Calo: ~350kcal/100g | Protein: 30g",
  },
  "Đùi gà chiên KFC": {
    desc: "🍗 Đùi gà chiên kiểu KFC với lớp da giòn tan, thịt bên trong mềm ngọt, được tẩm ướp gia vị đặc biệt.",
    ingredients: "Đùi gà tươi, bột chiên, gia vị",
    nutrition: "Calo: ~320kcal/100g | Protein: 18g",
  },
  "Cánh gà chiên": {
    desc: "🍗 Cánh gà chiên vàng giòn, thịt ngọt mềm, được tẩm ướp gia vị đậm đà, ăn kèm sốt mayonnaise.",
    ingredients: "Cánh gà tươi, bột chiên, gia vị",
    nutrition: "Calo: ~300kcal/100g | Protein: 16g",
  },
  "Bánh gối chiên": {
    desc: "🥟 Bánh gối chiên có vỏ giòn tan, nhân thịt băm, nấm mèo, miến bên trong thơm ngon, ăn kèm tương ớt.",
    ingredients: "Bột mì, thịt heo, nấm mèo, gia vị",
    nutrition: "Calo: ~280kcal/100g | Protein: 10g",
  },
  "Khoai tây chiên lắc phô mai": {
    desc: "🍟 Khoai tây chiên lắc phô mai được làm từ khoai tây tươi cắt sợi, chiên giòn và lắc đều với bột phô mai thơm béo.",
    ingredients: "Khoai tây, bột phô mai, dầu ăn",
    nutrition: "Calo: ~350kcal/100g | Carbs: 40g",
  },
  "Khoai tây chiên": {
    desc: "🍟 Khoai tây chiên vàng ươm, giòn rụm, được chiên từ dầu thực vật nguyên chất, ăn kèm tương cà.",
    ingredients: "Khoai tây, dầu ăn, muối",
    nutrition: "Calo: ~320kcal/100g | Kali: 400mg",
  },
  "Khoai lang chiên": {
    desc: "🍠 Khoai lang chiên được làm từ khoai lang mật vàng ươm, chiên giòn, vị ngọt tự nhiên, rất tốt cho sức khỏe.",
    ingredients: "Khoai lang, dầu ăn",
    nutrition: "Calo: ~280kcal/100g | Vitamin A: 100%",
  },
  "Hotdog xúc xích phô mai": {
    desc: "🌭 Hotdog xúc xích phô mai kết hợp xúc xích thơm ngon, phô mai béo ngậy bên trong, bánh mì mềm, sốt cà chua và mayonnaise.",
    ingredients: "Xúc xích phô mai, bánh mì, sốt cà chua, sốt mayonnaise",
    nutrition: "Calo: ~380kcal | Protein: 12g",
  },

  //  BÁNH NGỌT (10 sản phẩm)
  "Bánh FLAN": {
    desc: "🍮 Bánh Flan là loại bánh được đánh giá là mang nét đặc trưng của nước Pháp. Bánh FLAN mềm mịn, thơm béo, vị ngọt dịu nhẹ, ăn kèm đá bào và cà phê đắng tạo nên hương vị khó quên.",
    ingredients: "Trứng, sữa tươi, đường, vani",
    nutrition: "Calo: ~150kcal/phần | Protein: 5g",
  },
  "Bánh ngọt": {
    desc: "🍰 Bánh ngọt đa dạng hương vị (socola, dâu, vani), mềm xốp, thơm ngon, thích hợp cho bữa trà chiều.",
    ingredients: "Bột mì, trứng, đường, bơ, sữa",
    nutrition: "Calo: ~350kcal/100g | Carbs: 45g",
  },
  "Bánh Panna Cotta": {
    desc: "🍮 Panna Cotta là món tráng miệng Ý với lớp kem sữa mịn màng, béo ngậy, vị vani thơm nhẹ.",
    ingredients: "Kem tươi, sữa tươi, đường, gelatin, vani",
    nutrition: "Calo: ~250kcal/phần | Canxi: 100mg",
  },
  "Bánh Cookies": {
    desc: "🍪 Bánh Cookies giòn tan, thơm bơ, với những hạt socola hoặc hạt điều bên trong, thích hợp nhâm nhi cùng trà.",
    ingredients: "Bột mì, bơ, đường, trứng, socola chip",
    nutrition: "Calo: ~480kcal/100g | Chất béo: 25g",
  },
  Tiramisu: {
    desc: "🍰 Tiramisu là món bánh Ý với lớp kem mascarpone béo ngậy, hương vị cà phê đậm đà, lớp bánh xốp thấm rượu rum.",
    ingredients: "Mascarpone, cà phê, trứng, đường, bánh ladyfinger",
    nutrition: "Calo: ~400kcal/phần | Caffein: 20mg",
  },
  "Bánh Muffin": {
    desc: "🧁 Bánh Muffin mềm xốp, thơm bơ, nhiều hương vị như socola, việt quất, chuối, thích hợp cho bữa sáng.",
    ingredients: "Bột mì, bơ, trứng, đường, sữa",
    nutrition: "Calo: ~350kcal/phần | Carbs: 45g",
  },
  "Bánh Mì": {
    desc: "🥖 Bánh Mì tươi giòn tan bên ngoài, mềm bên trong. Có thể ăn kèm với bơ, mứt hoặc pate.",
    ingredients: "Bột mì, men nở, muối, nước",
    nutrition: "Calo: ~265kcal/100g | Carbs: 50g",
  },
  "Bánh Macaron": {
    desc: "🍬 Bánh Macaron là bánh ngọt Pháp sang trọng với lớp vỏ giòn, nhân mềm mịn, nhiều màu sắc bắt mắt.",
    ingredients: "Bột hạnh nhân, đường, lòng trắng trứng, nhân kem",
    nutrition: "Calo: ~120kcal/cái | Đường: 10g",
  },
  "Bánh Mousse Cake": {
    desc: "🍰 Bánh Mousse Cake có nguồn gốc từ Pháp. Bánh Mousse Cake có lớp mousse bông xốp, mịn màng, kết hợp với đế bánh bông lan và trái cây tươi.",
    ingredients: "Kem tươi, trứng, đường, gelatin, trái cây",
    nutrition: "Calo: ~320kcal/phần | Chất béo: 20g",
  },
  "Bánh Cheese Cake": {
    desc: "🍰 Bánh Cheese Cake với lớp phô mai béo ngậy, mịn màng, đế bánh quy giòn tan, vị chua nhẹ của chanh.",
    ingredients: "Cream cheese, trứng, đường, bánh quy, bơ",
    nutrition: "Calo: ~380kcal/phần | Canxi: 150mg",
  },

  //  COMBO ĐỒ ĂN VẶT (4 sản phẩm)
  "Combo đồ ăn vặt 1": {
    desc: "🍱 Combo đồ ăn vặt 1 gồm: Gà rán + Phô mai que + Khoai tây chiên + Nước ngọt. Phù hợp cho 1-2 người.",
    ingredients: "Gà rán, phô mai que, khoai tây chiên, nước ngọt",
    nutrition: "Calo: ~850kcal | Tiết kiệm 20%",
  },
  "Combo đồ ăn vặt 2": {
    desc: "🍱 Combo đồ ăn vặt 2 gồm: Bò khô + Hạt hướng dương + Nem chua rán + Trà đào. Phù hợp nhậu nhẹ cùng bạn bè.",
    ingredients: "Bò khô, hạt hướng dương, nem chua rán, trà đào",
    nutrition: "Calo: ~600kcal | Tiết kiệm 10%",
  },
  "Combo đồ ăn vặt 3": {
    desc: "🍱 Combo đồ ăn vặt 3 gồm: Tôm viên chiên + Cá viên chiên + Bò viên chiên + Sốt mayonnaise. Đa dạng viên chiên.",
    ingredients: "Tôm viên, cá viên, bò viên, sốt mayonnaise",
    nutrition: "Calo: ~700kcal | Protein: 30g",
  },
  "Combo đồ ăn vặt 4": {
    desc: "🍱 Combo đồ ăn vặt 4 gồm: Bánh gối chiên + Hotdog + Khoai lang chiên + Nước tương. Combo no bụng.",
    ingredients: "Bánh gối chiên, hotdog, khoai lang chiên, nước tương",
    nutrition: "Calo: ~750kcal | Tiết kiệm 15%",
  },

  //  COMBO ĐỒ UỐNG (6 sản phẩm)
  "Combo đồ uống 1": {
    desc: "🥤 Combo đồ uống 1: 2 ly Trà đào. Phù hợp với nhóm 2 người, tiết kiệm hơn so với mua lẻ.",
    ingredients: "Trà đào x2",
    nutrition: "Calo: ~360kcal | Tiết kiệm 15%",
  },
  "Combo đồ uống 2": {
    desc: "🥤 Combo đồ uống 2: 2 ly Trà chanh nha đam. Thức uống thanh mát, tốt cho làn da.",
    ingredients: "Trà chanh nha đam x2",
    nutrition: "Calo: ~360kcal | Tiết kiệm 10%",
  },
  "Combo đồ uống 3": {
    desc: "🥤 Combo đồ uống 3: 3 ly Trà chanh. Phù hợp với nhóm 3 người, giá rẻ, giải nhiệt tốt.",
    ingredients: "Trà chanh x3",
    nutrition: "Calo: ~540kcal | Vitamin C: Cao",
  },
  "Combo đồ uống 4": {
    desc: "🥤 Combo đồ uống 4: Cafe sữa + Cafe đen. Phù hợp cho nhóm yêu thích cà phê, vừa sữa vừa đen.",
    ingredients: "Cafe sữa, Cafe đen",
    nutrition: "Calo: ~440kcal | Tiết kiệm 15%",
  },
  "Combo đồ uống 5": {
    desc: "🥤 Combo đồ uống 5 gồm: Trà sữa bạc hà + Trà sữa Socola + Trà sữa Ô long. Combo trà sữa đa dạng hương vị.",
    ingredients: "Trà sữa bạc hà, Trà sữa Socola, Trà sữa Ô long",
    nutrition: "Calo: ~600kcal | 3 vị trà sữa khác nhau",
  },
  "Combo đồ uống 6": {
    desc: "🥤 Combo đồ uống 6 gồm: Cafe sữa đá + Cafe Latte. Combo cà phê pha chế, vừa truyền thống vừa hiện đại.",
    ingredients: "Cafe sữa đá, Cafe Latte",
    nutrition: "Calo: ~500kcal | Tiết kiệm 10%",
  },

  //  COMBO (3 sản phẩm)
  "Combo 1": {
    desc: "🍱 Combo 1 dành cho 1 người: 1 đồ uống + 1 đồ ăn vặt (tùy chọn theo menu). Linh hoạt lựa chọn.",
    ingredients: "1 đồ uống + 1 đồ ăn vặt",
    nutrition: "Tiết kiệm 10% | Linh hoạt lựa chọn",
  },
  "Combo 2": {
    desc: "🍱 Combo 2 dành cho 2 người: 2 đồ uống + 2 đồ ăn vặt + 1 bánh ngọt. Phù hợp cho cặp đôi hẹn hò.",
    ingredients: "2 đồ uống + 2 đồ ăn vặt + 1 bánh ngọt",
    nutrition: "Tiết kiệm 15% | Phù hợp hẹn hò",
  },
  "Combo 3": {
    desc: "🍱 Combo 3 dành cho 4 người: 4 đồ uống + 3 đồ ăn vặt + 2 bánh ngọt. Tiệc nhẹ cùng bạn bè, gia đình.",
    ingredients: "4 đồ uống + 3 đồ ăn vặt + 2 bánh ngọt",
    nutrition: "Tiết kiệm 20% | Tiệc nhẹ cùng bạn bè",
  },

  // Mặc định
  default: {
    desc: "✨ Sản phẩm chất lượng cao, nguyên liệu tươi ngon, chế biến theo công thức đặc biệt của Nbreak.",
    ingredients: "Nguyên liệu tự nhiên, tươi ngon, đảm bảo vệ sinh",
    nutrition: "Thông tin dinh dưỡng sẽ được cập nhật",
  },
};

function getProductDetail(name) {
  return productDetails[name] || productDetails.default;
}

// TOAST NOTIFICATION
function showToast(message, type = "success") {
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
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️"}</div>
    <div class="toast-message">${message}</div>
    <button class="toast-close">✕</button>
    <div class="toast-progress"></div>
  `;

  toast.style.cssText = `
    background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
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
    max-width: 350px;
    position: relative;
    overflow: hidden;
    animation: slideDown 0.3s ease;
    cursor: pointer;
  `;

  const iconSpan = toast.querySelector(".toast-icon");
  iconSpan.style.cssText = "font-size: 18px;";

  const messageSpan = toast.querySelector(".toast-message");
  messageSpan.style.cssText = "flex: 1; line-height: 1.4;";

  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.style.cssText = `
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    padding: 0 5px;
    opacity: 0.7;
    transition: opacity 0.2s;
  `;
  closeBtn.onmouseenter = () => (closeBtn.style.opacity = "1");
  closeBtn.onmouseleave = () => (closeBtn.style.opacity = "0.7");
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    toast.remove();
  };

  const progressBar = toast.querySelector(".toast-progress");
  progressBar.style.cssText = `
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: rgba(255,255,255,0.5);
    width: 100%;
    animation: progressShrink 2.5s linear forwards;
  `;

  if (!document.querySelector("#toast-keyframes")) {
    const style = document.createElement("style");
    style.id = "toast-keyframes";
    style.textContent = `
      @keyframes slideDown {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes progressShrink {
        from { width: 100%; }
        to { width: 0%; }
      }
    `;
    document.head.appendChild(style);
  }

  container.appendChild(toast);

  const timeout = setTimeout(() => {
    if (toast && toast.parentNode) {
      toast.style.animation = "slideDown 0.2s reverse";
      setTimeout(() => toast.remove(), 200);
    }
  }, 2500);

  toast.onclick = (e) => {
    if (e.target !== closeBtn) {
      clearTimeout(timeout);
      toast.style.animation = "slideDown 0.2s reverse";
      setTimeout(() => toast.remove(), 200);
    }
  };
}

// POPUP CHI TIẾT SẢN PHẨM VÀ GỢI Ý

function openProductDetail(name, price, img, category) {
  state.currentProduct = { name, price, img, category };
  state.currentQuantity = 1;

  const detail = getProductDetail(name);

  const nameEl = document.getElementById("detail-product-name");
  const imgEl = document.getElementById("detail-product-img");
  const priceEl = document.getElementById("detail-product-price");
  const descEl = document.getElementById("detail-product-desc");
  const qtyEl = document.getElementById("detail-quantity");

  if (nameEl) nameEl.innerText = name;
  if (imgEl) imgEl.src = img;
  if (priceEl) priceEl.innerHTML = price.toLocaleString();
  if (qtyEl) qtyEl.innerText = state.currentQuantity;

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

  loadSuggestedProducts(name, category);

  const popup = document.getElementById("product-detail-popup");
  if (popup) {
    popup.style.display = "flex";
    popup.onclick = function (event) {
      // Nếu click đúng vào chính popup (phần nền mờ) thì đóng
      if (event.target === popup) {
        closeProductDetail();
      }
    };
  }
}

function closeProductDetail() {
  const popup = document.getElementById("product-detail-popup");
  if (popup) {
    popup.style.display = "none";
  }
  state.currentProduct = null;
  state.currentQuantity = 1;
}

function increaseDetailQty() {
  state.currentQuantity++;
  const qtyEl = document.getElementById("detail-quantity");
  if (qtyEl) qtyEl.innerText = state.currentQuantity;
}

function decreaseDetailQty() {
  if (state.currentQuantity > 1) {
    state.currentQuantity--;
    const qtyEl = document.getElementById("detail-quantity");
    if (qtyEl) qtyEl.innerText = state.currentQuantity;
  }
}

function addDetailToCart() {
  if (!state.currentProduct) return;
  for (let i = 0; i < state.currentQuantity; i++) {
    addToCart(state.currentProduct.name, state.currentProduct.price);
  }
  closeProductDetail();
  showToast(
    `✅ Đã thêm ${state.currentQuantity} ${state.currentProduct.name} vào giỏ hàng!`,
    "success",
  );
}

function loadSuggestedProducts(productName, category) {
  const products = document.querySelectorAll(".sanpham");
  const suggestions = [];

  products.forEach((product) => {
    const nameEl = product.querySelector(".sanpham-info div:first-child");
    const name = nameEl ? nameEl.innerText : "";
    const productCategory = product.dataset.category;
    const priceText = product.querySelector(".price")?.innerText;
    const price = priceText ? parseInt(priceText.replace(/[^\d]/g, "")) : 0;
    const img = product.querySelector(".sanpham-anh")?.src;

    if (
      productCategory === category &&
      name !== productName &&
      name &&
      price &&
      img
    ) {
      suggestions.push({ name, price, img, category: productCategory });
    }
  });

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
        openProductDetail(s.name, s.price, s.img, s.category);
      items[index].onmouseenter = () =>
        (items[index].style.transform = "translateY(-3px)");
      items[index].onmouseleave = () =>
        (items[index].style.transform = "translateY(0)");
    }
  });
}

function attachProductClickEvents() {
  const products = document.querySelectorAll(".sanpham");
  products.forEach((product) => {
    const nameEl = product.querySelector(".sanpham-info div:first-child");
    if (nameEl) {
      nameEl.style.cursor = "pointer";
      nameEl.style.fontWeight = "bold";
      nameEl.style.transition = "color 0.2s";
      nameEl.onmouseenter = () => (nameEl.style.color = "#e67e22");
      nameEl.onmouseleave = () => (nameEl.style.color = "#4b2e2b");
      nameEl.onclick = (e) => {
        e.stopPropagation();
        const name = nameEl.innerText;
        const price = parseInt(
          product.querySelector(".price")?.innerText?.replace(/[^\d]/g, "") ||
            0,
        );
        const img = product.querySelector(".sanpham-anh")?.src;
        const category = product.dataset.category;
        openProductDetail(name, price, img, category);
      };
    }
  });
}

// HIỆU ỨNG THEO MÙA VÀ NGÀY LỄ
function getHolidayEffect() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const holidays = {
    "1-1": {
      name: "Tết Dương lịch",
      icon: "🎆",
      items: ["🎆", "🎇", "✨", "🎉", "🥂"],
      color: "#ffd700",
    },
    "2-3": {
      name: "Ngày thành lập Đảng",
      icon: "🚩",
      items: ["🚩", "⭐", "🌾", "🔨", "⚒️"],
      color: "#ff0000",
    },
    "2-14": {
      name: "Lễ Tình nhân",
      icon: "💝",
      items: ["💝", "💕", "🌹", "💌", "💑"],
      color: "#ff69b4",
    },
    "3-8": {
      name: "Ngày Quốc tế Phụ nữ",
      icon: "🌹",
      items: ["🌹", "🌸", "💐", "👩", "💝"],
      color: "#ff69b4",
    },
    "3-26": {
      name: "Ngày Thành lập Đoàn",
      icon: "🌿",
      items: ["🌿", "⭐", "🚩", "💚", "🌱"],
      color: "#00cc66",
    },
    "4-30": {
      name: "Ngày Giải phóng miền Nam",
      icon: "🇻🇳",
      items: ["🇻🇳", "🚩", "🎉", "⭐", "🎆"],
      color: "#ff0000",
    },
    "5-1": {
      name: "Ngày Quốc tế Lao động",
      icon: "🔧",
      items: ["🔧", "⚙️", "🛠️", "👷", "⭐"],
      color: "#ff6600",
    },
    "5-19": {
      name: "Ngày sinh Chủ tịch Hồ Chí Minh",
      icon: "🌻",
      items: ["🌻", "⭐", "📖", "🕊️", "💛"],
      color: "#ffcc00",
    },
    "6-1": {
      name: "Ngày Quốc tế Thiếu nhi",
      icon: "🍭",
      items: ["🍭", "🎈", "🧸", "🍬", "🎠"],
      color: "#ff69b4",
    },
    "7-27": {
      name: "Ngày Thương binh Liệt sĩ",
      icon: "🕯️",
      items: ["🕯️", "🌸", "🙏", "🕊️", "💐"],
      color: "#800000",
    },
    "9-2": {
      name: "Ngày Quốc khánh",
      icon: "🇻🇳",
      items: ["🇻🇳", "🎆", "⭐", "🎉", "🚩"],
      color: "#ff0000",
    },
    "10-10": {
      name: "Ngày Giải phóng Thủ đô",
      icon: "🏛️",
      items: ["🏛️", "⭐", "🎉", "🌾", "🚩"],
      color: "#ff6600",
    },
    "10-20": {
      name: "Ngày Phụ nữ Việt Nam",
      icon: "🌺",
      items: ["🌺", "🌸", "💐", "👩", "💖"],
      color: "#ff1493",
    },
    "11-20": {
      name: "Ngày Nhà giáo Việt Nam",
      icon: "📚",
      items: ["📚", "✏️", "🍎", "📖", "🎓"],
      color: "#00cc66",
    },
    "12-22": {
      name: "Ngày Thành lập QĐNDVN",
      icon: "🪖",
      items: ["🪖", "⭐", "🚩", "⚔️", "🛡️"],
      color: "#008000",
    },
    "12-25": {
      name: "Lễ Giáng Sinh",
      icon: "🎄",
      items: ["🎄", "🎅", "🤶", "🦌", "🎁"],
      color: "#ff4444",
    },
  };

  const key = `${month}-${day}`;
  return holidays[key] || null;
}

function setupSeasonEffect() {
  const month = new Date().getMonth() + 1;
  const holiday = getHolidayEffect();

  if (holiday) {
    console.log(
      `🎉 Hôm nay là ${holiday.name}! Hiệu ứng đặc biệt: ${holiday.icon}`,
    );
    setTimeout(() => {
      showToast(`🎉 Chào mừng ${holiday.name}! ${holiday.icon}`, "success");
    }, 1000);

    setInterval(() => {
      const el = document.createElement("div");
      el.className = "falling-item holiday-effect";
      const randomItem =
        holiday.items[Math.floor(Math.random() * holiday.items.length)];
      el.innerHTML = randomItem;
      el.style.left = Math.random() * 100 + "vw";
      el.style.fontSize = Math.random() * 30 + 20 + "px";
      el.style.animationDuration = Math.random() * 4 + 3 + "s";
      el.style.animationDelay = Math.random() * 2 + "s";
      el.style.filter = `drop-shadow(0 0 5px ${holiday.color})`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 6000);
    }, 300);
    return;
  }

  let seasonConfig = {
    icon: "🌸",
    color: "#ffb7c5",
    name: "spring",
    items: ["🌸", "🌼", "🌺", "🦋", "🍃", "🌱", "🐝", "🌷"],
  };
  if (month >= 6 && month <= 8) {
    seasonConfig = {
      icon: "☀️",
      color: "#ff7a00",
      name: "summer",
      items: ["☀️", "🌊", "🍉", "⛱️", "🐠", "🍦", "🕶️", "🏖️"],
    };
  } else if (month >= 9 && month <= 11) {
    seasonConfig = {
      icon: "🍂",
      color: "#d4a373",
      name: "autumn",
      items: ["🍂", "🍁", "🌰", "🎃", "🌾", "🍎", "🥧", "🍄"],
    };
  } else if (month >= 12 || month <= 2) {
    seasonConfig = {
      icon: "❄️",
      color: "#a8d8ea",
      name: "winter",
      items: ["❄️", "⛄", "🎄", "☃️", "🧣", "🔥", "⭐", "🧤"],
    };
  }

  if (!document.querySelector("#season-style")) {
    const style = document.createElement("style");
    style.id = "season-style";
    style.textContent = `
      .falling-item { position: fixed; top: -30px; pointer-events: none; z-index: 9999; opacity: 0.9; animation: fall linear forwards; }
      .holiday-effect { animation: holidayFall 4s ease-out forwards; }
      @keyframes fall { 0% { transform: translateY(0) rotate(0deg); opacity: 0.9; } 100% { transform: translateY(100vh) rotate(360deg); opacity: 0; } }
      @keyframes holidayFall { 0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; } 50% { transform: translateY(50vh) rotate(180deg) scale(1.2); opacity: 0.8; } 100% { transform: translateY(100vh) rotate(360deg) scale(1); opacity: 0; } }
    `;
    document.head.appendChild(style);
  }

  setInterval(() => {
    const el = document.createElement("div");
    el.className = "falling-item";
    const randomItem =
      seasonConfig.items[Math.floor(Math.random() * seasonConfig.items.length)];
    el.innerHTML = randomItem;
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = Math.random() * 24 + 12 + "px";
    el.style.animationDuration = Math.random() * 4 + 4 + "s";
    el.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 8000);
  }, 600);

  console.log(`🎨 Đã kích hoạt hiệu ứng mùa: ${seasonConfig.name}`);
}

// LẤY LỊCH SỬ ĐƠN HÀNG
function getUserOrderCount() {
  const orders = JSON.parse(localStorage.getItem("orderHistory")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) return 0;
  return orders.filter((order) => order.userEmail === currentUser.email).length;
}

// VOUCHER
function getSpecialDateVoucher() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const dayOfWeek = now.getDay();

  if (month === 1 && day === 1)
    return {
      id: "new_year",
      name: "🎆 Tết Dương lịch",
      discount: 15,
      description: "Giảm 15% chào năm mới",
    };
  if (month === 2 && day === 14)
    return {
      id: "valentine",
      name: "💝 Valentine",
      discount: 15,
      description: "Giảm 15% nhân ngày Valentine",
    };
  if (month === 3 && day === 8)
    return {
      id: "womens_day",
      name: "🌹 Quốc tế Phụ nữ",
      discount: 20,
      description: "Giảm 20% cho phái đẹp",
    };
  if (month === 4 && day === 30)
    return {
      id: "liberation",
      name: "🎉 Giải phóng miền Nam",
      discount: 25,
      description: "Giảm 25% chào mừng 30/4",
    };
  if (month === 5 && day === 1)
    return {
      id: "labor_day",
      name: "🇻🇳 Quốc tế Lao động",
      discount: 20,
      description: "Giảm 20% vinh danh người lao động",
    };
  if (month === 5 && day === 19)
    return {
      id: "ho_chi_minh_birth",
      name: "🌻 Sinh nhật Bác Hồ",
      discount: 20,
      description: "Giảm 20% kỷ niệm ngày sinh Bác",
    };
  if (month === 9 && day === 2)
    return {
      id: "national_day",
      name: "🎆 Quốc khánh 2/9",
      discount: 25,
      description: "Giảm 25% chào mừng Quốc khánh",
    };
  if (month === 10 && day === 20)
    return {
      id: "vietnam_womens_day",
      name: "🌺 Ngày Phụ nữ Việt Nam",
      discount: 20,
      description: "Giảm 20% cho phụ nữ Việt Nam",
    };
  if (month === 11 && day === 20)
    return {
      id: "teachers_day",
      name: "📚 Ngày Nhà giáo Việt Nam",
      discount: 20,
      description: "Giảm 20% tri ân thầy cô",
    };
  if (month === 12 && day >= 20 && day <= 25)
    return {
      id: "christmas",
      name: "🎄 Giáng Sinh",
      discount: 25,
      description: "Giảm 25% mừng Giáng sinh",
    };
  if (hour >= 7 && hour <= 9)
    return {
      id: "golden_morning",
      name: "⏰ Giờ vàng sáng",
      discount: 15,
      description: "Giảm 15% cho đơn hàng từ 7h-9h",
    };
  if (hour >= 20 && hour <= 22)
    return {
      id: "golden_evening",
      name: "⏰ Giờ vàng tối",
      discount: 12,
      description: "Giảm 12% cho đơn hàng từ 20h-22h",
    };
  if (dayOfWeek === 0 || dayOfWeek === 6)
    return {
      id: "weekend",
      name: "🎉 Cuối tuần vui vẻ",
      discount: 10,
      description: "Giảm 10% cho đơn hàng cuối tuần",
      minOrder: 100000,
    };
  return null;
}

function getLoyaltyVoucher() {
  const orderCount = getUserOrderCount();
  if (orderCount >= 10)
    return {
      id: "loyalty_10",
      name: "👑 Khách hàng VIP",
      discount: 20,
      description: "Giảm 20% cho khách hàng đã đặt 10+ đơn",
    };
  if (orderCount >= 5)
    return {
      id: "loyalty_5",
      name: "⭐ Khách hàng thân thiết",
      discount: 10,
      description: "Giảm 10% cho khách hàng đã đặt 5+ đơn",
    };
  return null;
}

function getQuantityVoucher() {
  const totalQuantity = state.cart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  if (totalQuantity >= 5)
    return {
      id: "bulk_5",
      name: "🎁 Mua nhiều giảm giá",
      discount: 10,
      description: "Giảm 10% cho đơn hàng từ 5 sản phẩm",
      minQuantity: 5,
    };
  return null;
}

function getBestVoucher() {
  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const vouchers = [];
  const qtyVoucher = getQuantityVoucher();
  const loyaltyVoucher = getLoyaltyVoucher();
  const dateVoucher = getSpecialDateVoucher();
  if (qtyVoucher) vouchers.push(qtyVoucher);
  if (loyaltyVoucher) vouchers.push(loyaltyVoucher);
  if (
    dateVoucher &&
    (!dateVoucher.minOrder || subtotal >= dateVoucher.minOrder)
  )
    vouchers.push(dateVoucher);
  if (vouchers.length === 0) return null;
  return vouchers.reduce(
    (best, current) => (current.discount > best.discount ? current : best),
    vouchers[0],
  );
}

function getCurrentVoucher() {
  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const bestVoucher = getBestVoucher();
  if (!bestVoucher) return null;
  const discountAmount = Math.floor((subtotal * bestVoucher.discount) / 100);
  return {
    ...bestVoucher,
    discountAmount,
    finalTotal: subtotal - discountAmount,
  };
}

// GÁN CATEGORY CHO SẢN PHẨM

function assignCategoriesToProducts() {
  const products = document.querySelectorAll(".sanpham");
  const categoryMapping = [
    { range: [0, 7], category: "coffee" },
    { range: [8, 14], category: "sinhto" },
    { range: [15, 23], category: "trasua" },
    { range: [24, 29], category: "nuocep" },
    { range: [30, 36], category: "travi" },
    { range: [37, 52], category: "doanvat" },
    { range: [53, 62], category: "banhngot" },
    { range: [63, 66], category: "combodoanvat" },
    { range: [67, 72], category: "combodouong" },
    { range: [73, 75], category: "combo" },
  ];
  products.forEach((product, index) => {
    const mapping = categoryMapping.find(
      (m) => index >= m.range[0] && index <= m.range[1],
    );
    product.dataset.category = mapping ? mapping.category : "other";
  });
}

function updateCategoryCounts() {
  const products = document.querySelectorAll(".sanpham");
  const menuItems = document.querySelectorAll(".menu-trai li");
  const categoryMap = {
    Coffee: "coffee",
    "Sinh tố": "sinhto",
    "Trà sữa": "trasua",
    "Nước ép": "nuocep",
    "Trà vị": "travi",
    "Đồ ăn vặt": "doanvat",
    "Bánh ngọt": "banhngot",
    "Combo đồ ăn vặt": "combodoanvat",
    "Combo đồ uống": "combodouong",
    Combo: "combo",
  };
  const counts = {
    coffee: 0,
    sinhto: 0,
    trasua: 0,
    nuocep: 0,
    travi: 0,
    doanvat: 0,
    banhngot: 0,
    combodoanvat: 0,
    combodouong: 0,
    combo: 0,
  };
  products.forEach((p) => {
    const cat = p.dataset.category;
    if (counts[cat] !== undefined) counts[cat]++;
  });
  menuItems.forEach((item) => {
    const itemText = item.innerText.split("(")[0].trim();
    const category = categoryMap[itemText];
    if (category && counts[category] !== undefined)
      item.innerHTML = `${itemText} <span class="count-product">(${counts[category]})</span>`;
  });
}

function initMenuFilter() {
  const menuItems = document.querySelectorAll(".menu-trai li");
  const products = document.querySelectorAll(".sanpham");
  const categoryMap = {
    Coffee: "coffee",
    "Sinh tố": "sinhto",
    "Trà sữa": "trasua",
    "Nước ép": "nuocep",
    "Trà vị": "travi",
    "Đồ ăn vặt": "doanvat",
    "Bánh ngọt": "banhngot",
    "Combo đồ ăn vặt": "combodoanvat",
    "Combo đồ uống": "combodouong",
    Combo: "combo",
  };

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((i) => i.classList.remove("active-category"));
      item.classList.add("active-category");
      const itemText = item.innerText.split("(")[0].trim();
      const category = categoryMap[itemText] || "all";

      state.currentCategory = category;
      state.currentPage = 1; // Reset về trang 1 khi chọn danh mục

      // Gọi phân trang để hiển thị
      displayProductsByPage();
    });
  });

  // Khởi tạo hiển thị ban đầu
  setTimeout(() => {
    displayProductsByPage();
  }, 100);
}

// BANNER QUẢNG CÁO

let currentBanner = 0;
let bannerInterval;

function initBanner() {
  const slides = document.querySelectorAll(".banner-slide");
  const dots = document.querySelectorAll(".dot");
  if (!slides.length) return;

  function show(index) {
    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));
    currentBanner = (index + slides.length) % slides.length;
    slides[currentBanner].classList.add("active");
    if (dots[currentBanner]) dots[currentBanner].classList.add("active");
  }

  function autoRun() {
    if (bannerInterval) clearInterval(bannerInterval);
    bannerInterval = setInterval(() => show(currentBanner + 1), 5000);
  }

  window.prevBanner = () => {
    show(currentBanner - 1);
    clearInterval(bannerInterval);
    autoRun();
  };
  window.nextBanner = () => {
    show(currentBanner + 1);
    clearInterval(bannerInterval);
    autoRun();
  };
  window.goToBanner = (i) => {
    show(i);
    clearInterval(bannerInterval);
    autoRun();
  };

  show(0);
  autoRun();
}

// TÌM KIẾM
function initSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;
  const suggestBox = document.createElement("div");
  suggestBox.className = "search-suggest";
  suggestBox.style.cssText = `position:absolute; top:100%; left:0; right:0; background:white; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.1); z-index:1000; display:none; max-height:300px; overflow-y:auto;`;
  input.parentNode.style.position = "relative";
  input.parentNode.appendChild(suggestBox);

  input.addEventListener("input", () => {
    state.searchKeyword = input.value.toLowerCase().trim();
    state.currentPage = 1; // Reset về trang 1 khi tìm kiếm

    if (state.searchKeyword === "") {
      suggestBox.style.display = "none";
      filterProductsBySearch();
      return;
    }
    showSuggestions(state.searchKeyword, suggestBox);
    filterProductsBySearch();
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !suggestBox.contains(e.target))
      suggestBox.style.display = "none";
  });
}

function showSuggestions(keyword, suggestBox) {
  const products = document.querySelectorAll(".sanpham");
  const matches = [];
  products.forEach((p) => {
    const name = p.querySelector(".sanpham-info div:last-child")?.innerText;
    if (name && name.toLowerCase().includes(keyword)) matches.push(name);
  });
  if (matches.length === 0) {
    suggestBox.style.display = "none";
    return;
  }
  suggestBox.style.display = "block";
  suggestBox.innerHTML = matches
    .slice(0, 5)
    .map(
      (name) =>
        `<div class="suggest-item" style="padding:10px 15px; cursor:pointer; border-bottom:1px solid #eee;">${name}</div>`,
    )
    .join("");
  suggestBox.querySelectorAll(".suggest-item").forEach((item) => {
    item.onclick = () => {
      document.getElementById("search-input").value = item.innerText;
      state.searchKeyword = item.innerText.toLowerCase();
      state.currentPage = 1; // Reset về trang 1
      suggestBox.style.display = "none";
      filterProductsBySearch();
    };
  });
}

function filterProductsBySearch() {
  const products = document.querySelectorAll(".sanpham");
  const keyword = state.searchKeyword;
  let foundCount = 0;

  products.forEach((product) => {
    const name = product
      .querySelector(".sanpham-info div:first-child")
      ?.innerText.toLowerCase();
    const matchSearch = keyword === "" || (name && name.includes(keyword));
    const matchCategory =
      state.currentCategory === "all" ||
      product.dataset.category === state.currentCategory;
    if (matchSearch && matchCategory) {
      foundCount++;
    }
  });

  // Reset về trang 1 khi tìm kiếm
  state.currentPage = 1;

  // Gọi phân trang để hiển thị
  displayProductsByPage();

  // Xóa thông báo cũ
  const oldMsg = document.getElementById("no-search-result");
  if (oldMsg) oldMsg.remove();

  if (keyword !== "" && foundCount === 0) {
    showToast(`🔍 Không tìm thấy sản phẩm nào cho "${keyword}"`, "error");
    const productGrid = document.querySelector(".luoi-sanpham");
    let noResultMsg = document.createElement("div");
    noResultMsg.id = "no-search-result";
    noResultMsg.style.cssText = `grid-column: 1/-1; text-align:center; padding:50px 20px; background:#fef9f0; border-radius:16px; margin:20px 0;`;
    noResultMsg.innerHTML = `<div style="font-size:48px; margin-bottom:15px;">🔍❌</div><h3 style="color:#4b2e2b;">Không tìm thấy sản phẩm</h3><p style="color:#666;">Từ khóa "<strong style="color:#e67e22;">${keyword}</strong>" không có sản phẩm nào</p><p style="color:#999; margin-top:10px;">💡 Gợi ý: Thử tìm "cafe", "trà sữa", "sinh tố"...</p>`;
    productGrid?.appendChild(noResultMsg);
  } else if (keyword !== "" && foundCount > 0) {
    showToast(`🔍 Tìm thấy ${foundCount} sản phẩm cho "${keyword}"`, "success");
  }
}

// GIỎ HÀNG

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(state.cart));
}

function addToCart(name, price) {
  const item = state.cart.find((i) => i.name === name);
  if (item) {
    item.quantity++;
    showToast(`📦 Đã thêm ${name} (x${item.quantity})`, "success");
  } else {
    state.cart.push({ name, price, quantity: 1 });
    showToast(`✅ Đã thêm ${name} vào giỏ hàng`, "success");
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(name) {
  const item = state.cart.find((i) => i.name === name);
  if (!item) return;
  item.quantity--;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((i) => i.name !== name);
    showToast(`🗑️ Đã xóa ${name} khỏi giỏ hàng`, "error");
  } else
    showToast(`📦 Đã giảm số lượng ${name} còn ${item.quantity}`, "success");
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const count = document.getElementById("cart-count");
  if (!count) return;
  const total = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  count.innerText = total;
}

// THANH TOÁN

function openCheckout() {
  console.log("🔍 openCheckout được gọi");
  console.log("📦 Giỏ hàng:", state.cart);

  if (state.cart.length === 0) {
    showToast("🛒 Giỏ hàng trống! Hãy thêm sản phẩm", "error");
    return;
  }

  const popup = document.getElementById("checkout-popup");
  console.log("🔍 Tìm thấy popup:", popup);

  if (!popup) {
    console.error("❌ Không tìm thấy phần tử #checkout-popup!");
    alert("Lỗi: Thiếu popup thanh toán trong HTML!");
    return;
  }

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const voucher = getCurrentVoucher();
  const finalTotal = voucher ? voucher.finalTotal : subtotal;

  const list = document.getElementById("checkout-items");
  const totalEl = document.getElementById("checkout-total");

  if (!list || !totalEl) {
    console.error("❌ Không tìm thấy checkout-items hoặc checkout-total!");
    return;
  }

  // Hiển thị danh sách sản phẩm
  list.innerHTML = state.cart
    .map(
      (item) => `
    <div style="display:flex; justify-content:space-between; margin-bottom:10px; padding:8px 0; border-bottom:1px solid #eee;">
      <span>${item.name} x ${item.quantity}</span>
      <span style="color:#e67e22;">${(item.price * item.quantity).toLocaleString()}đ</span>
    </div>
  `,
    )
    .join("");

  // Hiển thị tổng tiền và voucher
  let voucherHtml = "";
  if (voucher) {
    voucherHtml = `
      <div style="background:#e8f5e9; padding:12px; border-radius:10px; margin:10px 0; border-left:4px solid #27ae60;">
        <div style="display:flex; justify-content:space-between;">
          <div><strong>🎉 ${voucher.name}</strong><br><small>${voucher.description}</small></div>
          <span style="color:#e67e22;">-${voucher.discountAmount.toLocaleString()}đ</span>
        </div>
      </div>
    `;
  }

  totalEl.innerHTML = `
    <div>Tạm tính: <strong>${subtotal.toLocaleString()}đ</strong></div>
    ${voucherHtml}
    <div style="font-size:20px; margin-top:15px; padding-top:10px; border-top:2px dashed #eee;">
      Tổng cộng: <strong style="color:#e67e22;">${finalTotal.toLocaleString()}đ</strong>
    </div>
  `;

  // Hiển thị popup
  popup.style.display = "flex";
  console.log("✅ Đã hiển thị popup checkout");
}

function closeCheckout() {
  document.getElementById("checkout-popup").style.display = "none";
}

function confirmOrder() {
  const name = document.getElementById("customer-name")?.value;
  const phone = document.getElementById("customer-phone")?.value;
  const address = document.getElementById("customer-address")?.value;

  if (!name || !phone || !address) {
    showToast("⚠️ Vui lòng nhập đầy đủ thông tin!", "error");
    return;
  }

  if (state.cart.length === 0) {
    showToast("🛒 Giỏ hàng trống!", "error");
    return;
  }

  const subtotal = state.cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const voucher = getCurrentVoucher();
  const discountAmount = voucher ? voucher.discountAmount : 0;
  const finalTotal = voucher ? voucher.finalTotal : subtotal;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // QUAN TRỌNG: Lưu đúng email của user
  const userEmail = currentUser ? currentUser.email : "guest";

  const order = {
    id: "#" + Date.now().toString().slice(-8),
    date: new Date().toLocaleString(),
    items: [...state.cart],
    total: finalTotal,
    originalTotal: subtotal,
    discount: discountAmount,
    voucher: voucher
      ? { name: voucher.name, discount: voucher.discount }
      : null,
    customer: { name, phone, address },
    userEmail: userEmail, // Đảm bảo dòng này đúng
    status: "pending",
  };

  // Lấy danh sách đơn hàng hiện tại
  let orders = JSON.parse(localStorage.getItem("orderHistory")) || [];
  orders.push(order);
  localStorage.setItem("orderHistory", JSON.stringify(orders));

  // Thêm thông báo cho user
  if (typeof addNotification === "function") {
    addNotification(
      "✅ Đặt hàng thành công!",
      `Đơn hàng ${order.id} - ${finalTotal.toLocaleString()}đ đã được xác nhận.`,
      "order",
    );
  }

  state.cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();

  const displayName = document.getElementById("display-name");
  const displayPhone = document.getElementById("display-phone");
  const displayAddress = document.getElementById("display-address");
  const successPopup = document.getElementById("success-popup");

  if (displayName) displayName.innerText = name;
  if (displayPhone) displayPhone.innerText = phone;
  if (displayAddress) displayAddress.innerText = address;
  if (successPopup) successPopup.style.display = "flex";

  showToast(`🎉 Đặt hàng thành công! Mã: ${order.id}`, "success");

  let countdown = 10;
  const timer = document.getElementById("countdown-timer");
  const interval = setInterval(() => {
    countdown--;
    if (timer) timer.innerText = countdown;
    if (countdown <= 0) {
      clearInterval(interval);
      closeSuccessPopup();
    }
  }, 1000);
}

function closeSuccessPopup() {
  document.getElementById("success-popup").style.display = "none";
  location.reload();
}
function closeSuccessPopupOnOutside(event) {
  if (event.target === document.getElementById("success-popup"))
    closeSuccessPopup();
}
function toggleQR(show) {
  const qr = document.getElementById("qr-container");
  if (qr) qr.style.display = show ? "block" : "none";
}
function goToCategory(category) {
  const grid = document.querySelector(".luoi-sanpham");
  if (grid) grid.scrollIntoView({ behavior: "smooth" });
}
function handleSearch(event) {
  if (event.key === "Enter") filterProductsBySearch();
}
function performSearch() {
  filterProductsBySearch();
}

// PHÂN TRANG SẢN PHẨM
// Lấy danh sách sản phẩm đã lọc (theo category và search)
function getFilteredProducts() {
  const products = document.querySelectorAll(".sanpham");
  const filtered = [];

  products.forEach((product) => {
    const name =
      product
        .querySelector(".sanpham-info div:first-child")
        ?.innerText?.toLowerCase() || "";
    const matchSearch =
      state.searchKeyword === "" || name.includes(state.searchKeyword);
    const matchCategory =
      state.currentCategory === "all" ||
      product.dataset.category === state.currentCategory;

    if (matchSearch && matchCategory) {
      filtered.push(product);
    }
  });

  return filtered;
}

function displayProductsByPage() {
  const allProducts = document.querySelectorAll(".sanpham");
  const filtered = getFilteredProducts();
  const totalPages = Math.ceil(filtered.length / state.itemsPerPage);

  // Điều chỉnh currentPage nếu vượt quá
  if (state.currentPage > totalPages && totalPages > 0)
    state.currentPage = totalPages;
  if (state.currentPage < 1) state.currentPage = 1;

  // Ẩn tất cả sản phẩm nhưng giữ nguyên layout
  allProducts.forEach((product) => {
    product.style.display = "none";
  });

  // Hiển thị sản phẩm của trang hiện tại - DÙNG "flex" thay vì "block"
  const start = (state.currentPage - 1) * state.itemsPerPage;
  const end = start + state.itemsPerPage;
  filtered.slice(start, end).forEach((product) => {
    product.style.display = "flex"; // QUAN TRỌNG: dùng "flex" để giữ đúng layout
    product.style.flexDirection = "column";
  });

  // Cập nhật nút phân trang
  updatePaginationUI(totalPages);
}

// Cập nhật giao diện nút phân trang
function updatePaginationUI(totalPages) {
  // Xóa phân trang cũ
  const oldPagination = document.querySelector(".pagination-wrapper");
  if (oldPagination) oldPagination.remove();

  // Chỉ hiển thị nếu có nhiều hơn 1 trang
  if (totalPages <= 1) return;

  // Tạo wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "pagination-wrapper";
  wrapper.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 40px 0 60px 0;
    width: 100%;
    clear: both;
  `;

  // Nút Trang trước
  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i> Trang trước';
  prevBtn.className = "btn-nav";
  prevBtn.style.cssText = `
    padding: 10px 25px;
    background: ${state.currentPage === 1 ? "#ccc" : "#4b2e2b"};
    color: white;
    border: none;
    border-radius: 30px;
    cursor: ${state.currentPage === 1 ? "not-allowed" : "pointer"};
    font-weight: bold;
    font-size: 14px;
    transition: 0.3s;
  `;
  prevBtn.disabled = state.currentPage === 1;
  prevBtn.onclick = () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      displayProductsByPage();
      document
        .querySelector(".luoi-sanpham")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Thông tin trang
  const pageInfo = document.createElement("span");
  pageInfo.className = "page-info";
  pageInfo.style.cssText = `
    background: #f5f0eb;
    padding: 8px 20px;
    border-radius: 30px;
    font-weight: bold;
    color: #4b2e2b;
  `;
  pageInfo.innerText = `Trang ${state.currentPage} / ${totalPages}`;

  // Nút Trang sau
  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = 'Trang sau <i class="fa-solid fa-chevron-right"></i>';
  nextBtn.className = "btn-nav";
  nextBtn.style.cssText = `
    padding: 10px 25px;
    background: ${state.currentPage === totalPages ? "#ccc" : "#4b2e2b"};
    color: white;
    border: none;
    border-radius: 30px;
    cursor: ${state.currentPage === totalPages ? "not-allowed" : "pointer"};
    font-weight: bold;
    font-size: 14px;
    transition: 0.3s;
  `;
  nextBtn.disabled = state.currentPage === totalPages;
  nextBtn.onclick = () => {
    if (state.currentPage < totalPages) {
      state.currentPage++;
      displayProductsByPage();
      document
        .querySelector(".luoi-sanpham")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  wrapper.appendChild(prevBtn);
  wrapper.appendChild(pageInfo);
  wrapper.appendChild(nextBtn);

  // QUAN TRỌNG: Đặt phân trang vào cuối .khung-trang, sau toàn bộ nội dung
  const container = document.querySelector(".khung-trang");
  if (container) {
    container.appendChild(wrapper);
  } else {
    // Fallback: đặt sau grid
    const productGrid = document.querySelector(".luoi-sanpham");
    if (productGrid && productGrid.parentNode) {
      productGrid.parentNode.insertBefore(wrapper, productGrid.nextSibling);
    }
  }
}

// KHỞI TẠO
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Website khởi động");
  assignCategoriesToProducts();
  updateCategoryCounts();
  initMenuFilter();
  initBanner();
  initSearch();
  updateCartUI();
  setupSeasonEffect();
  attachProductClickEvents();
  setTimeout(() => {
    displayProductsByPage();
  }, 100);

  console.log("✅ Khởi tạo hoàn tất!");
});

// EXPOSE FUNCTIONS TO GLOBAL
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.confirmOrder = confirmOrder;
window.closeSuccessPopup = closeSuccessPopup;
window.closeSuccessPopupOnOutside = closeSuccessPopupOnOutside;
window.toggleQR = toggleQR;
window.goToCategory = goToCategory;
window.showToast = showToast;
window.handleSearch = handleSearch;
window.performSearch = performSearch;
window.openProductDetail = openProductDetail;
window.closeProductDetail = closeProductDetail;
window.increaseDetailQty = increaseDetailQty;
window.decreaseDetailQty = decreaseDetailQty;
window.addDetailToCart = addDetailToCart;
window.prevBanner = prevBanner;
window.nextBanner = nextBanner;
window.goToBanner = goToBanner;

console.log("✅ Tất cả hàm đã được expose ra global!");
