const vocabData = {
  "lessons": [
    {
      "lesson_number": 1,
      "vocabulary": [
        { "kana": "にほんご", "kanji": "日本語", "english": "Japanese Language" },
        { "kana": "せんせい", "kanji": "先生", "english": "Teacher" },
        { "kana": "がくせい", "kanji": "学生", "english": "Student" },
        { "kana": "おんな", "kanji": "女", "english": "Woman, Female" },
        { "kana": "えいご", "kanji": "英語", "english": "English Language" },
        { "kana": "おとこ", "kanji": "男", "english": "Male, Man" },
        { "kana": "ひと", "kanji": "人", "english": "Person" },
        { "kana": "かた", "kanji": "方", "english": "Person (Polite)" },
        { "kana": "にほん", "kanji": "日本", "english": "Japan" },
        { "kana": "ちゅうごく", "kanji": "中国", "english": "China" },
        { "kana": "はやし", "kanji": "林", "english": "Hayashi (Name)" },
        { "kana": "わたし", "kanji": "私", "english": "I, me" },
        { "kana": "あなた", "kanji": "貴方", "english": "You" },
        { "kana": "どなた", "kanji": "何方", "english": "Who (with respect)" },
        { "kana": "だれ", "kanji": "誰", "english": "Who" },
        { "kana": "この", "kanji": "此の", "english": "This (followed by noun)" },
        { "kana": "その", "kanji": "其の", "english": "That (followed by noun)" },
        { "kana": "あの", "kanji": "彼の", "english": "That (far off, followed by noun)" },
        { "kana": "どの", "kanji": "何の", "english": "Which? (followed by noun)" },
        { "kana": "はい", "kanji": null, "english": "Yes" },
        { "kana": "いいえ", "kanji": null, "english": "No" },
        { "kana": "こんにちは", "kanji": "今日は", "english": "Hello, Hi, Good Day" },
        { "kana": "はじめまして", "kanji": "初めまして", "english": "Pleased to meet you" },
        { "kana": "どうぞよろしく", "kanji": "どうぞ宜しく", "english": "Best regards" },
        { "kana": "フランス", "kanji": null, "english": "France" },
        { "kana": "アメリカ", "kanji": null, "english": "America" },
        { "kana": "インドネシア", "kanji": null, "english": "Indonesia" },
        { "kana": "タイ", "kanji": null, "english": "Thailand" },
        { "kana": "オーストラリア", "kanji": null, "english": "Australia" },
        { "kana": "イギリス", "kanji": null, "english": "England" },
        { "kana": "マレーシア", "kanji": null, "english": "Malaysia" },
        { "kana": "シンガポール", "kanji": null, "english": "Singapore" },
        { "kana": "フィリピン", "kanji": null, "english": "Philippines" },
        { "kana": "インド", "kanji": null, "english": "India" },
        { "kana": "ジョン スミス", "kanji": null, "english": "John Smith" },
        { "kana": "アリ", "kanji": null, "english": "Ali" },
        { "kana": "チン", "kanji": null, "english": "Chin" },
        { "kana": "ラタナー", "kanji": null, "english": "Ratna" },
        { "kana": "ガロ", "kanji": null, "english": "Garo" }
      ]
    },
    {
      "lesson_number": 2,
      "vocabulary": [
        { "kana": "つくえ", "kanji": "机", "english": "Table, desk" },
        { "kana": "いす", "kanji": "椅子", "english": "Chair" },
        { "kana": "でんき", "kanji": "電気", "english": "Electricity, Lamp" },
        { "kana": "ほん", "kanji": "本", "english": "Book" },
        { "kana": "えんぴつ", "kanji": "鉛筆", "english": "Pencil" },
        { "kana": "しんぶん", "kanji": "新聞", "english": "Newspaper" },
        { "kana": "とけい", "kanji": "時計", "english": "Watch, clock" },
        { "kana": "くつ", "kanji": "靴", "english": "Shoe" },
        { "kana": "うち", "kanji": "家", "english": "Home, house" },
        { "kana": "でんしゃ", "kanji": "電車", "english": "Electric train, train" },
        { "kana": "かさ", "kanji": "傘", "english": "Umbrella" },
        { "kana": "ぼうし", "kanji": "帽子", "english": "Cap, Hat" },
        { "kana": "じどうしゃ", "kanji": "自動車", "english": "Automobile" },
        { "kana": "かばん", "kanji": "鞄", "english": "Briefcase/Bag" },
        { "kana": "くつした", "kanji": "靴下", "english": "Socks" },
        { "kana": "めがね", "kanji": "眼鏡", "english": "Spectacles" },
        { "kana": "うわぎ", "kanji": "上着", "english": "Overcoat/Outerwear" },
        { "kana": "これ", "kanji": "此れ", "english": "This" },
        { "kana": "それ", "kanji": "其れ", "english": "That" },
        { "kana": "あれ", "kanji": "彼れ", "english": "That (far off)" },
        { "kana": "どれ", "kanji": "何れ", "english": "Which?" },
        { "kana": "なん", "kanji": "何", "english": "What" },
        { "kana": "ラジオ", "kanji": null, "english": "Radio" },
        { "kana": "サンダル", "kanji": null, "english": "Sandal" },
        { "kana": "ハンドバッグ", "kanji": null, "english": "Handbag" },
        { "kana": "ネクタイ", "kanji": null, "english": "Necktie" },
        { "kana": "スリッパ", "kanji": null, "english": "Slipper" },
        { "kana": "シャツ", "kanji": null, "english": "Shirt" },
        { "kana": "ズボン", "kanji": null, "english": "Trousers/Pants" },
        { "kana": "スカート", "kanji": null, "english": "Skirt" },
        { "kana": "がいこく", "kanji": "外国", "english": "Foreign country" }
      ]
    },
    {
      "lesson_number": 3,
      "vocabulary": [
        { "kana": "でんわ", "kanji": "電話", "english": "Telephone" },
        { "kana": "へや", "kanji": "部屋", "english": "Room" },
        { "kana": "だいどころ", "kanji": "台所", "english": "Kitchen" },
        { "kana": "れいぞうこ", "kanji": "冷蔵庫", "english": "Refrigerator" },
        { "kana": "やさい", "kanji": "野菜", "english": "Vegetables" },
        { "kana": "くだもの", "kanji": "果物", "english": "Fruits" },
        { "kana": "ぎゅうにゅう", "kanji": "牛乳", "english": "Milk" },
        { "kana": "たまご", "kanji": "卵", "english": "Egg" },
        { "kana": "ごはん", "kanji": "ご飯", "english": "Cooked rice" },
        { "kana": "そば", "kanji": "側", "english": "Side / Near" },
        { "kana": "とだな", "kanji": "戸棚", "english": "Shelf/Cupboard" },
        { "kana": "びょういん", "kanji": "病院", "english": "Hospital" },
        { "kana": "こうじょう", "kanji": "工場", "english": "Factory" },
        { "kana": "がっこう", "kanji": "学校", "english": "School" },
        { "kana": "きょうしつ", "kanji": "教室", "english": "Classroom" },
        { "kana": "えき", "kanji": "駅", "english": "Station" },
        { "kana": "ゆうびんきょく", "kanji": "郵便局", "english": "Post-office" },
        { "kana": "むこう", "kanji": "向こう", "english": "Other side, opposite side" },
        { "kana": "はさみ", "kanji": "鋏", "english": "Scissors" },
        { "kana": "まんねんひつ", "kanji": "万年筆", "english": "Fountain pen" },
        { "kana": "かみ", "kanji": "紙 / 髪 / 神", "english": "Paper / Hair / God" },
        { "kana": "とうきょう", "kanji": "東京", "english": "Tokyo" },
        { "kana": "おおさか", "kanji": "大阪", "english": "Osaka" },
        { "kana": "きょうと", "kanji": "京都", "english": "Kyoto" },
        { "kana": "など", "kanji": "等", "english": "Etc." },
        { "kana": "ここ", "kanji": "此処", "english": "Here" },
        { "kana": "そこ", "kanji": "其処", "english": "There" },
        { "kana": "あそこ", "kanji": "彼処", "english": "There (far off)" },
        { "kana": "どこ", "kanji": "何処", "english": "Where?" },
        { "kana": "なに", "kanji": "何", "english": "What" },
        { "kana": "ここに", "kanji": null, "english": "In this place" },
        { "kana": "そこに", "kanji": null, "english": "In that place" },
        { "kana": "あそこに", "kanji": null, "english": "In that place (far off)" },
        { "kana": "どこに", "kanji": null, "english": "In which place?" },
        { "kana": "テレビ", "kanji": null, "english": "Television" },
        { "kana": "ベッド", "kanji": null, "english": "Bed" },
        { "kana": "ナイフ", "kanji": null, "english": "Knife" },
        { "kana": "ノート", "kanji": null, "english": "Notebook" },
        { "kana": "けしゴム", "kanji": "消しゴム", "english": "Eraser" },
        { "kana": "ある (あります)", "kanji": "有る", "english": "To exist (inanimate things)" },
        { "kana": "なにも", "kanji": "何も", "english": "Nothing (with negative)" },
        { "kana": "なにか", "kanji": "何か", "english": "Something" },
        { "kana": "なか", "kanji": "中", "english": "In, inside" },
        { "kana": "うえ", "kanji": "上", "english": "On, on top, over" },
        { "kana": "やま", "kanji": "山", "english": "Mountain" },
        { "kana": "した", "kanji": "下", "english": "Under, below" },
        { "kana": "かわ", "kanji": "川", "english": "River" }
      ]
    },
    {
      "lesson_number": 4,
      "vocabulary": [
        { "kana": "うしろ", "kanji": "後ろ", "english": "Behind" },
        { "kana": "にわ", "kanji": "庭", "english": "Garden" },
        { "kana": "いけ", "kanji": "池", "english": "Pond" },
        { "kana": "とり", "kanji": "鳥", "english": "Bird" },
        { "kana": "さかな", "kanji": "魚", "english": "Fish" },
        { "kana": "じむしつ", "kanji": "事務室", "english": "Office room" },
        { "kana": "まえ", "kanji": "前", "english": "In front of" },
        { "kana": "いぬ", "kanji": "犬", "english": "Dog" },
        { "kana": "ねこ", "kanji": "猫", "english": "Cat" },
        { "kana": "きんぎょ", "kanji": "金魚", "english": "Gold fish" },
        { "kana": "にわとり", "kanji": "鶏", "english": "Chicken, hen" },
        { "kana": "たてもの", "kanji": "建物", "english": "Building" },
        { "kana": "としょかん", "kanji": "図書館", "english": "Library" },
        { "kana": "ひがし", "kanji": "東", "english": "East" },
        { "kana": "にし", "kanji": "西", "english": "West" },
        { "kana": "みなみ", "kanji": "南", "english": "South" },
        { "kana": "きた", "kanji": "北", "english": "North" },
        { "kana": "もん", "kanji": "門", "english": "Gate" },
        { "kana": "こちら", "kanji": "此方", "english": "This side" },
        { "kana": "そちら", "kanji": "其方", "english": "That side" },
        { "kana": "あちら", "kanji": "彼方", "english": "That side (over there)" },
        { "kana": "どちら", "kanji": "何方", "english": "Which side" },
        { "kana": "いる (います)", "kanji": "居る", "english": "To exist (animate things)" },
        { "kana": "どなたか", "kanji": null, "english": "Someone" },
        { "kana": "どなたも", "kanji": null, "english": "No one (with negative)" },
        { "kana": "どこかに", "kanji": null, "english": "Somewhere" },
        { "kana": "どこにも", "kanji": null, "english": "Nowhere (with negative)" },
        { "kana": "ひと", "kanji": "人", "english": "Person" },
        { "kana": "おとこ", "kanji": "男", "english": "Male, Man" },
        { "kana": "おんな", "kanji": "女", "english": "Female, woman" },
        { "kana": "き", "kanji": "木", "english": "Tree, wood" }
      ]
    },
    {
      "lesson_number": 5,
      "vocabulary": [
        { "kana": "～じん", "kanji": "～人", "english": "Person from (Suffix)" },
        { "kana": "りんご", "kanji": "林檎", "english": "Apple" },
        { "kana": "みかん", "kanji": "蜜柑", "english": "Orange" },
        { "kana": "みんな", "kanji": "皆", "english": "All, everybody" },
        { "kana": "しょうがっこう", "kanji": "小学校", "english": "Primary school" },
        { "kana": "せいと", "kanji": "生徒", "english": "Pupil" },
        { "kana": "ちゃわん", "kanji": "茶碗", "english": "Tea cup, rice bowl" },
        { "kana": "はがき", "kanji": "葉書", "english": "Post card" },
        { "kana": "ふうとう", "kanji": "封筒", "english": "Envelope" },
        { "kana": "きって", "kanji": "切手", "english": "Stamp" },
        { "kana": "さら", "kanji": "皿", "english": "Plate" },
        { "kana": "じてんしゃ", "kanji": "自転車", "english": "Bicycle" },
        { "kana": "ざっし", "kanji": "雑誌", "english": "Magazine" },
        { "kana": "びん", "kanji": "瓶", "english": "Bottle" },
        { "kana": "たばこ", "kanji": "煙草", "english": "Cigarette" },
        { "kana": "むし", "kanji": "虫", "english": "Insect" },
        { "kana": "すずめ", "kanji": "雀", "english": "Sparrow" },
        { "kana": "はと", "kanji": "鳩", "english": "Dove" },
        { "kana": "いくつ", "kanji": "幾つ", "english": "How much (items)" },
        { "kana": "あかい", "kanji": "赤い", "english": "Red" },
        { "kana": "あおい", "kanji": "青い", "english": "Blue, green" },
        { "kana": "しろい", "kanji": "白い", "english": "White" },
        { "kana": "くろい", "kanji": "黒い", "english": "Black" },
        { "kana": "きいろい", "kanji": "黄色い", "english": "Yellow" },
        { "kana": "たくさん", "kanji": "沢山", "english": "Lots of (things)" },
        { "kana": "おおぜい", "kanji": "大勢", "english": "Lots of (people)" },
        { "kana": "すこし", "kanji": "少し", "english": "A little" },
        { "kana": "～しか", "kanji": null, "english": "Not more than (with negative)" },
        { "kana": "そう", "kanji": null, "english": "Really!" },
        { "kana": "～まい", "kanji": "～枚", "english": "Counter for flat things" },
        { "kana": "～だい", "kanji": "～台", "english": "Counter for machines, vehicles" },
        { "kana": "～さつ", "kanji": "～冊", "english": "Counter for books, notebooks" },
        { "kana": "～ほん", "kanji": "～本", "english": "Counter for cylindrical things" },
        { "kana": "～そく", "kanji": "～足", "english": "Counter for pairs (footwear)" },
        { "kana": "～ひき", "kanji": "～匹", "english": "Counter for animals" },
        { "kana": "～わ", "kanji": "～羽", "english": "Counter for birds" },
        { "kana": "～けん", "kanji": "～軒", "english": "Counter for buildings" },
        { "kana": "こ", "kanji": "子", "english": "Child" },
        { "kana": "こども", "kanji": "子ども", "english": "Child, children" },
        { "kana": "おとこのこ", "kanji": "男の子", "english": "Boy" },
        { "kana": "おんなのこ", "kanji": "女の子", "english": "Girl" }
      ]
    },
    {
      "lesson_number": 6,
      "vocabulary": [
        { "kana": "ハンカチ", "kanji": null, "english": "Handkerchief" },
        { "kana": "タイプライター", "kanji": null, "english": "Typewriter" },
        { "kana": "カメラ", "kanji": null, "english": "Camera" },
        { "kana": "バナナ", "kanji": null, "english": "Banana" },
        { "kana": "ほん", "kanji": "本", "english": "Book" },
        { "kana": "にほん", "kanji": "日本", "english": "Japan" },
        { "kana": "ばら", "kanji": "薔薇", "english": "Rose" },
        { "kana": "みせ", "kanji": "店", "english": "Shop, store" },
        { "kana": "ようひんてん", "kanji": "洋品店", "english": "Clothing store" },
        { "kana": "したぎ", "kanji": "下着", "english": "Undergarments" },
        { "kana": "け", "kanji": "毛", "english": "Wool, Hair" },
        { "kana": "ほんや", "kanji": "本屋", "english": "Book shop" },
        { "kana": "たばこや", "kanji": "たばこ屋", "english": "Cigarette shop" },
        { "kana": "くつや", "kanji": "靴屋", "english": "Shoe shop" },
        { "kana": "やおや", "kanji": "八百屋", "english": "Vegetable shop" },
        { "kana": "くすり", "kanji": "薬", "english": "Medicine" },
        { "kana": "くすりや", "kanji": "薬屋", "english": "Pharmacy" },
        { "kana": "はなや", "kanji": "花屋", "english": "Flower shop" },
        { "kana": "おゆ", "kanji": "お湯", "english": "Hot water" },
        { "kana": "いくら", "kanji": "幾ら", "english": "How much? (cost)" },
        { "kana": "おおきい", "kanji": "大きい", "english": "Big" },
        { "kana": "ちいさい", "kanji": "小さい", "english": "Small" },
        { "kana": "たかい", "kanji": "高い", "english": "Expensive, high" },
        { "kana": "やすい", "kanji": "安い", "english": "Cheap" },
        { "kana": "みじかい", "kanji": "短い", "english": "Short" },
        { "kana": "ながい", "kanji": "長い", "english": "Long" },
        { "kana": "ふとい", "kanji": "太い", "english": "Fat" },
        { "kana": "ほそい", "kanji": "細い", "english": "Slender" },
        { "kana": "つめたい", "kanji": "冷たい", "english": "Cold (drinks/touch)" },
        { "kana": "あつい", "kanji": "暑い / 熱い", "english": "Hot (weather / drinks)" },
        { "kana": "きれい(な)", "kanji": "綺麗(な)", "english": "Pretty, Clean" },
        { "kana": "じょうぶ(な)", "kanji": "丈夫(な)", "english": "Strong, Durable" },
        { "kana": "かう (かいます)", "kanji": "買う", "english": "To buy" },
        { "kana": "ください", "kanji": "下さい", "english": "Please (give me)" },
        { "kana": "ぜんぶ", "kanji": "全部", "english": "All" },
        { "kana": "それでは", "kanji": null, "english": "Well then" },
        { "kana": "ありがとう ございます", "kanji": null, "english": "Thank you" },
        { "kana": "はな", "kanji": "花", "english": "Flower" },
        { "kana": "ひゃく", "kanji": "百", "english": "Hundred" },
        { "kana": "えん", "kanji": "円", "english": "Yen" },
        { "kana": "せん", "kanji": "千", "english": "Thousand" },
        { "kana": "おかね", "kanji": "お金", "english": "Money" },
        { "kana": "まん", "kanji": "万", "english": "Ten thousand" },
        { "kana": "みず", "kanji": "水", "english": "Water" },
        { "kana": "ねる (ねます)", "kanji": "寝る", "english": "To sleep" },
        { "kana": "ナイロン", "kanji": null, "english": "Nylon" },
        { "kana": "ボールペン", "kanji": null, "english": "Ball-pen" }
      ]
    },
    {
      "lesson_number": 7,
      "vocabulary": [
        { "kana": "たいしかん", "kanji": "大使館", "english": "Embassy" },
        { "kana": "ぎんこう", "kanji": "銀行", "english": "Bank" },
        { "kana": "くに", "kanji": "国", "english": "Country" },
        { "kana": "せいれき", "kanji": "西暦", "english": "A.D." },
        { "kana": "はる", "kanji": "春", "english": "Spring" },
        { "kana": "なつ", "kanji": "夏", "english": "Summer" },
        { "kana": "あき", "kanji": "秋", "english": "Autumn" },
        { "kana": "ふゆ", "kanji": "冬", "english": "Winter" },
        { "kana": "いつ", "kanji": "何時", "english": "When" },
        { "kana": "あたたかい", "kanji": "暖かい", "english": "Warm" },
        { "kana": "あつい", "kanji": "暑い", "english": "Hot" },
        { "kana": "すずしい", "kanji": "涼しい", "english": "Cool" },
        { "kana": "さむい", "kanji": "寒い", "english": "Cold" },
        { "kana": "ホテル", "kanji": null, "english": "Hotel" },
        { "kana": "アパート", "kanji": null, "english": "Apartment" },
        { "kana": "いく (いきます)", "kanji": "行く", "english": "To go" },
        { "kana": "はいる (はいります)", "kanji": "入る", "english": "To enter" },
        { "kana": "はじまる (はじまります)", "kanji": "始まる", "english": "To begin" },
        { "kana": "うまれる (うまれます)", "kanji": "生まれる", "english": "To be born" },
        { "kana": "くる (きます)", "kanji": "来る", "english": "To come" },
        { "kana": "から", "kanji": null, "english": "From" },
        { "kana": "まで", "kanji": null, "english": "To" },
        { "kana": "～にち", "kanji": "～日", "english": "One day duration / Date" },
        { "kana": "～かげつ", "kanji": "～ヶ月", "english": "Month duration" },
        { "kana": "～ねん", "kanji": "～年", "english": "Year duration" },
        { "kana": "～しゅうかん", "kanji": "～週間", "english": "Week duration" },
        { "kana": "たんじょうび", "kanji": "誕生日", "english": "Birthday" },
        { "kana": "だいがく", "kanji": "大学", "english": "University" }
      ]
    },
    {
      "lesson_number": 8,
      "vocabulary": [
        { "kana": "べんきょう", "kanji": "勉強", "english": "Studies" },
        { "kana": "こうえん", "kanji": "公園", "english": "Park" },
        { "kana": "うんどう", "kanji": "運動", "english": "Exercise" },
        { "kana": "さんぽ", "kanji": "散歩", "english": "Walk" },
        { "kana": "そうじ", "kanji": "掃除", "english": "Cleaning" },
        { "kana": "せんたく", "kanji": "洗濯", "english": "Washing clothes" },
        { "kana": "かいもの", "kanji": "買い物", "english": "Shopping" },
        { "kana": "こと", "kanji": "事", "english": "Matter, thing" },
        { "kana": "てがみ", "kanji": "手紙", "english": "Letter" },
        { "kana": "うた", "kanji": "歌", "english": "Song" },
        { "kana": "しごと", "kanji": "仕事", "english": "Work" },
        { "kana": "じ", "kanji": "字", "english": "Alphabets/characters" },
        { "kana": "おちゃ", "kanji": "お茶", "english": "Green tea" },
        { "kana": "おかし", "kanji": "お菓子", "english": "Sweet, Snack" },
        { "kana": "どう", "kanji": null, "english": "How" },
        { "kana": "どんな", "kanji": null, "english": "What type" },
        { "kana": "バドミントン", "kanji": null, "english": "Badminton" },
        { "kana": "バレーボール", "kanji": null, "english": "Volley-ball" },
        { "kana": "ピンポン", "kanji": null, "english": "Ping-pong" },
        { "kana": "ピアノ", "kanji": null, "english": "Piano" },
        { "kana": "むずかしい", "kanji": "難しい", "english": "Difficult" },
        { "kana": "おもしろい", "kanji": "面白い", "english": "Interesting" },
        { "kana": "いそがしい", "kanji": "忙しい", "english": "Busy" },
        { "kana": "たのしい", "kanji": "楽しい", "english": "Enjoyable" },
        { "kana": "ひろい", "kanji": "広い", "english": "Wide" },
        { "kana": "せまい", "kanji": "狭い", "english": "Narrow" },
        { "kana": "たかい", "kanji": "高い", "english": "Expensive, high" },
        { "kana": "ひくい", "kanji": "低い", "english": "Short (height)" },
        { "kana": "あつい", "kanji": "厚い", "english": "Fat (book), Thick" },
        { "kana": "うすい", "kanji": "薄い", "english": "Thin (book)" },
        { "kana": "あたらしい", "kanji": "新しい", "english": "New" },
        { "kana": "ふるい", "kanji": "古い", "english": "Old" },
        { "kana": "おいしい", "kanji": "美味しい", "english": "Tasty" },
        { "kana": "まずい", "kanji": "不味い", "english": "Tasteless, Bad tasting" },
        { "kana": "いろいろな", "kanji": "色々な", "english": "Various" },
        { "kana": "たいへん", "kanji": "大変", "english": "Very" },
        { "kana": "あまり", "kanji": "余り", "english": "Not much (with negative)" },
        { "kana": "しかし", "kanji": null, "english": "But" },
        { "kana": "どうですか", "kanji": null, "english": "How about?" },
        { "kana": "どこか", "kanji": null, "english": "Somewhere" },
        { "kana": "どこへも", "kanji": null, "english": "Nowhere (with negative)" },
        { "kana": "あなたがた", "kanji": "貴方方", "english": "You all" },
        { "kana": "～かい", "kanji": "～回", "english": "Counter for frequency" },
        { "kana": "よむ (よみます)", "kanji": "読む", "english": "To read" },
        { "kana": "かく (かきます)", "kanji": "書く", "english": "To write" },
        { "kana": "きく (ききます)", "kanji": "聞く", "english": "To hear" },
        { "kana": "ひく (ひきます)", "kanji": "弾く", "english": "To play an instrument" },
        { "kana": "うたう (うたいます)", "kanji": "歌う", "english": "To sing" },
        { "kana": "のむ (のみます)", "kanji": "飲む", "english": "To drink" },
        { "kana": "すう (すいます)", "kanji": "吸う", "english": "To smoke" },
        { "kana": "みる (みます)", "kanji": "見る", "english": "To see" },
        { "kana": "たべる (たべます)", "kanji": "食べる", "english": "To eat" },
        { "kana": "する (します)", "kanji": null, "english": "To do" },
        { "kana": "まいにち", "kanji": "毎日", "english": "Every day" },
        { "kana": "まいつき", "kanji": "毎月", "english": "Every month" },
        { "kana": "まいねん", "kanji": "毎年", "english": "Every year" }
      ]
    },
    {
      "lesson_number": 9,
      "vocabulary": [
        { "kana": "あさ", "kanji": "朝", "english": "Morning" },
        { "kana": "よる", "kanji": "夜", "english": "Night" },
        { "kana": "じゅぎょう", "kanji": "授業", "english": "Class" },
        { "kana": "ごぜん", "kanji": "午前", "english": "a.m." },
        { "kana": "ごご", "kanji": "午後", "english": "p.m." },
        { "kana": "ひるやすみ", "kanji": "昼休み", "english": "Lunch break" },
        { "kana": "ひこうき", "kanji": "飛行機", "english": "Aeroplane" },
        { "kana": "けさ", "kanji": "今朝", "english": "This morning" },
        { "kana": "ゆうべ", "kanji": "昨夜", "english": "Last night" },
        { "kana": "かいしゃ", "kanji": "会社", "english": "Office/Company" },
        { "kana": "いろ", "kanji": "色", "english": "Color" },
        { "kana": "おとな", "kanji": "大人", "english": "Adult" },
        { "kana": "びょうき", "kanji": "病気", "english": "Sick person / Illness" },
        { "kana": "からだ", "kanji": "体", "english": "Body" },
        { "kana": "まち", "kanji": "町", "english": "Town" },
        { "kana": "おと", "kanji": "音", "english": "Sound" },
        { "kana": "ゆきこ", "kanji": "雪子", "english": "Yukiko (Name)" },
        { "kana": "どのぐらい", "kanji": "どの位", "english": "How long/much" },
        { "kana": "ちょうど", "kanji": "丁度", "english": "Exactly" },
        { "kana": "はやい", "kanji": "早い", "english": "Fast/Early" },
        { "kana": "おそい", "kanji": "遅い", "english": "Slow/Late" },
        { "kana": "くらい", "kanji": "暗い", "english": "Dark" },
        { "kana": "きたない", "kanji": "汚い", "english": "Dirty" },
        { "kana": "さびしい", "kanji": "寂しい", "english": "Lonely" },
        { "kana": "はたち", "kanji": "二十歳", "english": "20 years of age" },
        { "kana": "げんきな", "kanji": "元気な", "english": "Healthy" },
        { "kana": "にぎやかな", "kanji": "賑やかな", "english": "Lively" },
        { "kana": "しずかな", "kanji": "静かな", "english": "Silent" },
        { "kana": "おわる (おわります)", "kanji": "終わる", "english": "To get over/end" },
        { "kana": "なる (なります)", "kanji": "成る", "english": "To become" },
        { "kana": "かかる (かかります)", "kanji": "掛かる", "english": "To take (time/money)" },
        { "kana": "あるく (あるきます)", "kanji": "歩く", "english": "To walk" },
        { "kana": "かえる (かえります)", "kanji": "帰る", "english": "To return" },
        { "kana": "ぬる (ぬります)", "kanji": "塗る", "english": "To paint" },
        { "kana": "まつ (まちます)", "kanji": "待つ", "english": "To wait" },
        { "kana": "おきる (おきます)", "kanji": "起きる", "english": "To wake up" },
        { "kana": "もう", "kanji": null, "english": "Already" },
        { "kana": "まだ", "kanji": null, "english": "Not yet" },
        { "kana": "あるいて", "kanji": "歩いて", "english": "By foot" },
        { "kana": "バス", "kanji": null, "english": "Bus" },
        { "kana": "ごろ", "kanji": "頃", "english": "Around (time)" },
        { "kana": "いま", "kanji": "今", "english": "Now" },
        { "kana": "なんじ", "kanji": "何時", "english": "What time" },
        { "kana": "ごふん", "kanji": "五分", "english": "5 minutes" },
        { "kana": "くじはん", "kanji": "九時半", "english": "9:30" },
        { "kana": "ひとつき", "kanji": "一月", "english": "One month" },
        { "kana": "はんとし", "kanji": "半年", "english": "Half-year" },
        { "kana": "まいあさ", "kanji": "毎朝", "english": "Every morning" },
        { "kana": "まいばん", "kanji": "毎晩", "english": "Every night" },
        { "kana": "～じかん", "kanji": "～時間", "english": "Hour duration" },
        { "kana": "～ふん / ぷん", "kanji": "～分", "english": "Minute duration" },
        { "kana": "～びょう", "kanji": "～秒", "english": "Second duration" }
      ]
    },
    {
      "lesson_number": 10,
      "vocabulary": [
        { "kana": "かみなり", "kanji": "雷", "english": "Thunder" },
        { "kana": "かぜ", "kanji": "風", "english": "Wind" },
        { "kana": "きこう", "kanji": "気候", "english": "Climate" },
        { "kana": "きせつ", "kanji": "季節", "english": "Season" },
        { "kana": "とかい", "kanji": "都会", "english": "City" },
        { "kana": "ところ", "kanji": "所", "english": "Place" },
        { "kana": "たべもの", "kanji": "食べ物", "english": "Eatables" },
        { "kana": "じゅうしょ", "kanji": "住所", "english": "Address" },
        { "kana": "さくら", "kanji": "桜", "english": "Sakura flower" },
        { "kana": "もの", "kanji": "物", "english": "Thing" },
        { "kana": "はいざら", "kanji": "灰皿", "english": "Ash tray" },
        { "kana": "かご", "kanji": "籠", "english": "Basket" },
        { "kana": "ほっかいどう", "kanji": "北海道", "english": "Hokkaido" },
        { "kana": "おきなわ", "kanji": "沖縄", "english": "Okinawa" },
        { "kana": "ふじさん", "kanji": "富士山", "english": "Mt. Fuji" },
        { "kana": "ぎんざ", "kanji": "銀座", "english": "Ginza" },
        { "kana": "しんじゅく", "kanji": "新宿", "english": "Shinjuku" },
        { "kana": "テーブル", "kanji": null, "english": "Table" },
        { "kana": "いい", "kanji": "良い", "english": "Good" },
        { "kana": "わるい", "kanji": "悪い", "english": "Bad" },
        { "kana": "たぶん", "kanji": "多分", "english": "Probably" },
        { "kana": "いちばん", "kanji": "一番", "english": "Topmost, Number one" },
        { "kana": "ふる (ふります)", "kanji": "降る", "english": "To rain (snow)" },
        { "kana": "なる (なります)", "kanji": "鳴る", "english": "To thunder / sound" },
        { "kana": "ふく (ふきます)", "kanji": "吹く", "english": "To blow (wind)" },
        { "kana": "ちがう (ちがいます)", "kanji": "違う", "english": "To be different" },
        { "kana": "やむ (やみます)", "kanji": "止む", "english": "To stop (rain)" },
        { "kana": "くもる (くもります)", "kanji": "曇る", "english": "To be cloudy" },
        { "kana": "はれる (はれます)", "kanji": "晴れる", "english": "To clear up" },
        { "kana": "てんき", "kanji": "天気", "english": "Weather" },
        { "kana": "あめ", "kanji": "雨", "english": "Rain" },
        { "kana": "おなじ", "kanji": "同じ", "english": "Same" },
        { "kana": "ゆき", "kanji": "雪", "english": "Snow" },
        { "kana": "そら", "kanji": "空", "english": "Sky" },
        { "kana": "いちねんじゅう", "kanji": "一年中", "english": "Throughout the year" },
        { "kana": "つき", "kanji": "月", "english": "Moon" }
      ]
    },
    {
      "lesson_number": 11,
      "vocabulary": [
        { "kana": "おとうさん", "kanji": "お父さん", "english": "Other person’s father" },
        { "kana": "けんぶつ", "kanji": "見物", "english": "Sight-seeing" },
        { "kana": "こうぎょう", "kanji": "工業", "english": "Industry" },
        { "kana": "ぎじゅつ", "kanji": "技術", "english": "Technology" },
        { "kana": "せんぱい", "kanji": "先輩", "english": "Senior" },
        { "kana": "りょこう", "kanji": "旅行", "english": "Travel" },
        { "kana": "じっしゅう", "kanji": "実習", "english": "Training" },
        { "kana": "いなか", "kanji": "田舎", "english": "Village, countryside" },
        { "kana": "じぶん", "kanji": "自分", "english": "Oneself" },
        { "kana": "えいがかん", "kanji": "映画館", "english": "Theatre" },
        { "kana": "えいが", "kanji": "映画", "english": "Movie" },
        { "kana": "おんがく", "kanji": "音楽", "english": "Music" },
        { "kana": "せんめんじょ", "kanji": "洗面所", "english": "Wash-basin/Washroom" },
        { "kana": "わすれもの", "kanji": "忘れ物", "english": "Forgotten things" },
        { "kana": "デパート", "kanji": null, "english": "Department store" },
        { "kana": "スキー", "kanji": null, "english": "Ski" },
        { "kana": "レストラン", "kanji": null, "english": "Restaurant" },
        { "kana": "ならう (ならいます)", "kanji": "習う", "english": "To learn" },
        { "kana": "あそぶ (あそびます)", "kanji": "遊ぶ", "english": "To play" },
        { "kana": "およぐ (およぎます)", "kanji": "泳ぐ", "english": "To swim" },
        { "kana": "はたらく (はたらきます)", "kanji": "働く", "english": "To work" },
        { "kana": "とまる (とまります)", "kanji": "泊まる", "english": "To stay (overnight)" },
        { "kana": "だす (だします)", "kanji": "出す", "english": "To post / to send out" },
        { "kana": "あらう (あらいます)", "kanji": "洗う", "english": "To wash" },
        { "kana": "とる (とります)", "kanji": "取る", "english": "To take" },
        { "kana": "もどる (もどります)", "kanji": "戻る", "english": "To return back" },
        { "kana": "でかける (でかけます)", "kanji": "出かける", "english": "To go out" },
        { "kana": "いっしょに", "kanji": "一緒に", "english": "Along with" },
        { "kana": "ぶんがく", "kanji": "文学", "english": "Literature" },
        { "kana": "らいげつ", "kanji": "来月", "english": "Next month" },
        { "kana": "ちち", "kanji": "父", "english": "Father" },
        { "kana": "ともだち", "kanji": "友達", "english": "Friend" },
        { "kana": "はなし", "kanji": "話", "english": "Speech/Story" },
        { "kana": "もり", "kanji": "森", "english": "Forest" },
        { "kana": "うみ", "kanji": "海", "english": "Sea" },
        { "kana": "おんがくかい", "kanji": "音楽会", "english": "Musical concert/auditorium" },
        { "kana": "て", "kanji": "手", "english": "Hand" }
      ]
    },
    {
      "lesson_number": 12,
      "vocabulary": [
        { "kana": "やくそく", "kanji": "約束", "english": "Promise" },
        { "kana": "きっさてん", "kanji": "喫茶店", "english": "Coffee-shop" },
        { "kana": "ていりゅうじょ", "kanji": "停留所", "english": "Bus-stop" },
        { "kana": "はんたい", "kanji": "反対", "english": "Opposite" },
        { "kana": "えさ", "kanji": "餌", "english": "Food for animals" },
        { "kana": "しつもん", "kanji": "質問", "english": "Question" },
        { "kana": "けっこん", "kanji": "結婚", "english": "Marriage" },
        { "kana": "けんか", "kanji": "喧嘩", "english": "Fight" },
        { "kana": "きょうそう", "kanji": "競争", "english": "Competition" },
        { "kana": "じゅうどう", "kanji": "柔道", "english": "Judo" },
        { "kana": "そうだん", "kanji": "相談", "english": "Consultation" },
        { "kana": "なべ", "kanji": "鍋", "english": "Vessel/Pot" },
        { "kana": "やかん", "kanji": "薬缶", "english": "Kettle" },
        { "kana": "にもつ", "kanji": "荷物", "english": "Luggage" },
        { "kana": "きっぷ", "kanji": "切符", "english": "Ticket" },
        { "kana": "きもの", "kanji": "着物", "english": "Japanese dress" },
        { "kana": "なかの", "kanji": "中野", "english": "Nakano (Place name)" },
        { "kana": "やまだ", "kanji": "山田", "english": "Yamada (Name)" },
        { "kana": "かずお", "kanji": "一夫", "english": "Kazuo (Name)" },
        { "kana": "たろう", "kanji": "太郎", "english": "Tarou (Name)" },
        { "kana": "じろう", "kanji": "次郎", "english": "Jirou (Name)" },
        { "kana": "きょうこ", "kanji": "京子", "english": "Kyouko (Name)" },
        { "kana": "ちかい", "kanji": "近い", "english": "Near" },
        { "kana": "とおい", "kanji": "遠い", "english": "Far" },
        { "kana": "さきに", "kanji": "先に", "english": "Earlier/Ahead" },
        { "kana": "あとから", "kanji": "後から", "english": "Afterwards" },
        { "kana": "あう (あいます)", "kanji": "会う", "english": "To meet" },
        { "kana": "のる (のります)", "kanji": "乗る", "english": "To climb/ride" },
        { "kana": "とまる (とまります)", "kanji": "止まる", "english": "To come to a halt" },
        { "kana": "やる (やります)", "kanji": "やる", "english": "To do / give" },
        { "kana": "はなしあう (はなしあいます)", "kanji": "話し合う", "english": "To discuss" },
        { "kana": "きる (きります)", "kanji": "切る", "english": "To cut" },
        { "kana": "たく (たきます)", "kanji": "炊く", "english": "To cook (rice)" },
        { "kana": "わかす (わかします)", "kanji": "沸かす", "english": "To boil (water)" },
        { "kana": "はこぶ (はこびます)", "kanji": "運ぶ", "english": "To carry" },
        { "kana": "うる (うります)", "kanji": "売る", "english": "To sell" },
        { "kana": "ぬう (ぬいます)", "kanji": "縫う", "english": "To sew" },
        { "kana": "おりる (おります)", "kanji": "降りる", "english": "To get down" },
        { "kana": "でんわをかける", "kanji": "電話を掛ける", "english": "Make a telephone call" },
        { "kana": "おしえる (おしえます)", "kanji": "教える", "english": "To teach" },
        { "kana": "でる (でます)", "kanji": "出る", "english": "To depart/exit" },
        { "kana": "ええ", "kanji": null, "english": "Yes (casual)" },
        { "kana": "～くん", "kanji": "～君", "english": "Suffix for young male" },
        { "kana": "ほう", "kanji": "方", "english": "Direction" },
        { "kana": "いと", "kanji": "糸", "english": "Thread" },
        { "kana": "はは", "kanji": "母", "english": "Mother" }
      ]
    },
    {
      "lesson_number": 13,
      "vocabulary": [
        { "kana": "は", "kanji": "歯", "english": "Teeth" },
        { "kana": "はをみがく", "kanji": "歯を磨く", "english": "Brushing the teeth" },
        { "kana": "かお", "kanji": "顔", "english": "Face" },
        { "kana": "おふろ", "kanji": "お風呂", "english": "Bath tub" },
        { "kana": "ばんごはん", "kanji": "晩御飯", "english": "Dinner" },
        { "kana": "りゅうがくせい", "kanji": "留学生", "english": "Foreign student" },
        { "kana": "かがみ", "kanji": "鏡", "english": "Mirror" },
        { "kana": "ひげ", "kanji": "髭", "english": "Beard" },
        { "kana": "はし", "kanji": "橋 / 箸", "english": "Bridge / Chopsticks" },
        { "kana": "じしょ", "kanji": "辞書", "english": "Dictionary" },
        { "kana": "ひらがな", "kanji": "平仮名", "english": "Hiragana" },
        { "kana": "カタカナ", "kanji": "片仮名", "english": "Katakana" },
        { "kana": "かんじ", "kanji": "漢字", "english": "Kanji" },
        { "kana": "ようふく", "kanji": "洋服", "english": "Western dress" },
        { "kana": "ねまき", "kanji": "寝巻き", "english": "Night dress" },
        { "kana": "かぜをひく", "kanji": "風邪を引く", "english": "Catch a cold" },
        { "kana": "けが", "kanji": "怪我", "english": "Injury" },
        { "kana": "しゃしん", "kanji": "写真", "english": "Photo" },
        { "kana": "しあい", "kanji": "試合", "english": "Match/Game" },
        { "kana": "しょうひん", "kanji": "賞品", "english": "Prize" },
        { "kana": "せんしゅう", "kanji": "先週", "english": "Last week" },
        { "kana": "いつも", "kanji": "何時も", "english": "Always" },
        { "kana": "さっき", "kanji": "先程", "english": "A little while back" },
        { "kana": "そして", "kanji": null, "english": "And then" },
        { "kana": "それから", "kanji": null, "english": "Afterwards" },
        { "kana": "それで", "kanji": null, "english": "That’s why" },
        { "kana": "タクシー", "kanji": null, "english": "Taxi" },
        { "kana": "ニュース", "kanji": null, "english": "News" },
        { "kana": "みがく (みがきます)", "kanji": "磨く", "english": "To brush / to shine" },
        { "kana": "やすむ (やすみます)", "kanji": "休む", "english": "To take rest / to take a break" },
        { "kana": "ひらく (ひらきます)", "kanji": "開く", "english": "To open / to spread out" },
        { "kana": "そる (そります)", "kanji": "剃る", "english": "To shave" },
        { "kana": "つかう (つかいます)", "kanji": "使う", "english": "To use" },
        { "kana": "じしょをひく", "kanji": "辞書を引く", "english": "To refer a dictionary" },
        { "kana": "なおす (なおします)", "kanji": "直す", "english": "To repair" },
        { "kana": "ぬぐ (ぬぎます)", "kanji": "脱ぐ", "english": "To remove (clothes)" },
        { "kana": "ころぶ (ころびます)", "kanji": "転ぶ", "english": "To tumble/fall" },
        { "kana": "おどろく (おどろきます)", "kanji": "驚く", "english": "To be surprised" },
        { "kana": "しぬ (しにます)", "kanji": "死ぬ", "english": "To die" },
        { "kana": "さわぐ (さわぎます)", "kanji": "騒ぐ", "english": "To make a noise" },
        { "kana": "しゃしんをうつす", "kanji": "写真を写す", "english": "To click a photo" },
        { "kana": "かつ (かちます)", "kanji": "勝つ", "english": "To win" },
        { "kana": "もらう (もらいます)", "kanji": "貰う", "english": "To receive" },
        { "kana": "よろこぶ (よろこびます)", "kanji": "喜ぶ", "english": "To be happy" },
        { "kana": "ぬすむ (ぬすみます)", "kanji": "盗む", "english": "To steal" },
        { "kana": "てをあげる", "kanji": "手を上げる", "english": "To raise hand" },
        { "kana": "さげる (さげます)", "kanji": "下げる", "english": "To lower" },
        { "kana": "つかれる (つかれます)", "kanji": "疲れる", "english": "To be tired" },
        { "kana": "よごれる (よごれます)", "kanji": "汚れる", "english": "To be dirty" },
        { "kana": "まげる (まげます)", "kanji": "曲げる", "english": "To turn/bend" },
        { "kana": "このまえ", "kanji": "この前", "english": "A little while before" },
        { "kana": "あし", "kanji": "足", "english": "Leg" },
        { "kana": "ひだり", "kanji": "左", "english": "Left" },
        { "kana": "みぎ", "kanji": "右", "english": "Right" },
        { "kana": "なまえ", "kanji": "名前", "english": "Name" }
      ]
    },
    {
      "lesson_number": 14,
      "vocabulary": [
        { "kana": "としょしつ", "kanji": "図書室", "english": "Library room" },
        { "kana": "たな", "kanji": "棚", "english": "Shelf" },
        { "kana": "せん", "kanji": "線", "english": "Line" },
        { "kana": "ばんごう", "kanji": "番号", "english": "Number" },
        { "kana": "らいしゅう", "kanji": "来週", "english": "Next week" },
        { "kana": "まど", "kanji": "窓", "english": "Window" },
        { "kana": "いしゃ", "kanji": "医者", "english": "Doctor" },
        { "kana": "きつえんしつ", "kanji": "喫煙室", "english": "Smoking area" },
        { "kana": "くずかご", "kanji": "屑籠", "english": "Dust-bin" },
        { "kana": "やきゅう", "kanji": "野球", "english": "Base-ball" },
        { "kana": "あじ", "kanji": "味", "english": "Taste" },
        { "kana": "けっこう", "kanji": "結構", "english": "Good / Fine" },
        { "kana": "ちょっと", "kanji": "一寸", "english": "A little" },
        { "kana": "まず", "kanji": "先ず", "english": "First" },
        { "kana": "では", "kanji": null, "english": "And then / Well then" },
        { "kana": "すみません", "kanji": null, "english": "Excuse me" },
        { "kana": "おねがいします", "kanji": "お願いします", "english": "Request please" },
        { "kana": "しつれいします", "kanji": "失礼します", "english": "Excuse me (entering/leaving)" },
        { "kana": "すみませんが", "kanji": null, "english": "Excuse me (intro to request)" },
        { "kana": "かす (かします)", "kanji": "貸す", "english": "To lend" },
        { "kana": "かえす (かえします)", "kanji": "返す", "english": "To return a thing" },
        { "kana": "わかる (わかります)", "kanji": "分かる", "english": "To understand" },
        { "kana": "てつだう (てつだいます)", "kanji": "手伝う", "english": "To help" },
        { "kana": "もつ (もちます)", "kanji": "持つ", "english": "To hold/possess" },
        { "kana": "よぶ (よびます)", "kanji": "呼ぶ", "english": "To call" },
        { "kana": "やきゅうをやる", "kanji": "野球をやる", "english": "To play base-ball" },
        { "kana": "おく (おきます)", "kanji": "置く", "english": "To keep/place" },
        { "kana": "いすにかける", "kanji": "椅子に掛ける", "english": "To sit in a chair" },
        { "kana": "あける (あけます)", "kanji": "開ける", "english": "To open (a window)" },
        { "kana": "でんきをつける", "kanji": "電気を点ける", "english": "To put on a light" },
        { "kana": "かたづける (かたづけます)", "kanji": "片付ける", "english": "To tidy up" },
        { "kana": "すてる (すてます)", "kanji": "捨てる", "english": "To throw" },
        { "kana": "かりる (かります)", "kanji": "借りる", "english": "To borrow" },
        { "kana": "みせる (みせます)", "kanji": "見せる", "english": "To show" },
        { "kana": "とめる (とめます)", "kanji": "止める", "english": "To stop / stay" },
        { "kana": "こい", "kanji": "濃い", "english": "Dark color" },
        { "kana": "うすい", "kanji": "薄い", "english": "Light color" },
        { "kana": "あかるい", "kanji": "明るい", "english": "Bright" },
        { "kana": "あまい", "kanji": "甘い", "english": "Sweet" },
        { "kana": "からい", "kanji": "辛い", "english": "Spicy" },
        { "kana": "すうがく", "kanji": "数学", "english": "Mathematics" },
        { "kana": "ほか", "kanji": "外", "english": "Outside / Other" },
        { "kana": "くるま", "kanji": "車", "english": "Car" },
        { "kana": "もちもの", "kanji": "持ち物", "english": "Personal belongings" },
        { "kana": "ひづけ", "kanji": "日付", "english": "Date" },
        { "kana": "ようび", "kanji": "曜日", "english": "Day of week" },
        { "kana": "かみくず", "kanji": "紙屑", "english": "Waste paper" },
        { "kana": "ちゅうしゃじょ", "kanji": "駐車場", "english": "Parking place" },
        { "kana": "うんどうじょ", "kanji": "運動場", "english": "Gym/Sports ground" },
        { "kana": "クラス", "kanji": null, "english": "Class" },
        { "kana": "サイン", "kanji": null, "english": "Sign" },
        { "kana": "マッチ", "kanji": null, "english": "Matches" }
      ]
    },
    {
      "lesson_number": 15,
      "vocabulary": [
        { "kana": "いう (いいます)", "kanji": "言う", "english": "To say" },
        { "kana": "とき", "kanji": "時", "english": "Time" },
        { "kana": "よる", "kanji": "夜", "english": "Night" },
        { "kana": "しる (しります)", "kanji": "知る", "english": "To know" },
        { "kana": "ひるま", "kanji": "昼間", "english": "Day time" },
        { "kana": "おんよみ", "kanji": "音読み", "english": "Onyomi (Chinese reading)" },
        { "kana": "くんよみ", "kanji": "訓読み", "english": "Kunyomi (Japanese reading)" },
        { "kana": "うし", "kanji": "牛", "english": "Cow" },
        { "kana": "こたえる (こたえます)", "kanji": "答える", "english": "To answer" },
        { "kana": "おきたとき", "kanji": "起きた時", "english": "Waking up time" },
        { "kana": "あいさつ", "kanji": "挨拶", "english": "Greetings" },
        { "kana": "ぶた", "kanji": "豚", "english": "Pig" },
        { "kana": "ねずみ", "kanji": "鼠", "english": "Mouse" },
        { "kana": "とし", "kanji": "年", "english": "Age" },
        { "kana": "おれい", "kanji": "お礼", "english": "Gratitude" },
        { "kana": "へんじ", "kanji": "返事", "english": "Reply" },
        { "kana": "もっと", "kanji": null, "english": "More" },
        { "kana": "ゆっくり", "kanji": null, "english": "Slowly" },
        { "kana": "よく", "kanji": null, "english": "Well / often" },
        { "kana": "また", "kanji": "又", "english": "Again" },
        { "kana": "はじめて", "kanji": "初めて", "english": "At the beginning / For the first time" },
        { "kana": "やあ", "kanji": null, "english": "Aa!! (Exclamation)" },
        { "kana": "おはよう", "kanji": null, "english": "Good morning (Casual)" },
        { "kana": "おはよう ございます", "kanji": null, "english": "Good morning (Polite)" },
        { "kana": "おやすみなさい", "kanji": null, "english": "Good night" },
        { "kana": "こんばんは", "kanji": "今晩は", "english": "Good evening" },
        { "kana": "さようなら", "kanji": null, "english": "Bye for a long time" },
        { "kana": "ありがとう ございました", "kanji": null, "english": "Thank you very much (Past)" },
        { "kana": "どういたしまして", "kanji": null, "english": "Do not mention it" },
        { "kana": "おげんきですか", "kanji": "お元気ですか", "english": "How is your health?" },
        { "kana": "ごめんなさい", "kanji": null, "english": "Excuse me / Sorry" },
        { "kana": "いただきます", "kanji": "頂きます", "english": "Phrase before eating" },
        { "kana": "ごちそうさま", "kanji": "ご馳走様", "english": "Phrase after eating" },
        { "kana": "いってまいります", "kanji": "行って参ります", "english": "Phrase while leaving house" },
        { "kana": "ただいま", "kanji": "只今", "english": "Phrase while entering house" },
        { "kana": "グッド モーニング", "kanji": null, "english": "Good morning" },
        { "kana": "ワンワン", "kanji": null, "english": "Bow-wow (Dog sound)" },
        { "kana": "ニャーニャー", "kanji": null, "english": "Mewing (Cat sound)" },
        { "kana": "モーモー", "kanji": null, "english": "Mooing (Cow sound)" },
        { "kana": "ブーブー", "kanji": null, "english": "Booing (Pig sound)" },
        { "kana": "チューチュー", "kanji": null, "english": "Squeak (Mouse sound)" },
        { "kana": "いぬがなく", "kanji": "犬が鳴く", "english": "Dog barks" },
        { "kana": "たのむ (たのみます)", "kanji": "頼む", "english": "To request" },
        { "kana": "あやまる (あやまります)", "kanji": "謝る", "english": "To apologize" },
        { "kana": "たべおわる", "kanji": "食べ終わる", "english": "To finish eating" },
        { "kana": "わかれる (わかれます)", "kanji": "別れる", "english": "To disperse/separate" },
        { "kana": "たずねる (たずねます)", "kanji": "尋ねる", "english": "To enquire" }
      ]
    },
    {
      "lesson_number": 16,
      "vocabulary": [
        { "kana": "かぜ", "kanji": "風", "english": "Breeze" },
        { "kana": "たつ (たちます)", "kanji": "立つ", "english": "To stand" },
        { "kana": "しゃちょう", "kanji": "社長", "english": "President of the Company" },
        { "kana": "しょうがっこう", "kanji": "小学校", "english": "Primary school" },
        { "kana": "あに", "kanji": "兄", "english": "Elder brother" },
        { "kana": "ちゅうがっこう", "kanji": "中学校", "english": "Middle school" },
        { "kana": "あね", "kanji": "姉", "english": "Elder sister" },
        { "kana": "おとうと", "kanji": "弟", "english": "Younger brother" },
        { "kana": "こうこう", "kanji": "高校", "english": "High school" },
        { "kana": "いもうと", "kanji": "妹", "english": "Younger sister" },
        { "kana": "はしる (はしります)", "kanji": "走る", "english": "To run" },
        { "kana": "こうちょう", "kanji": "校長", "english": "School principal" },
        { "kana": "しょくどう", "kanji": "食堂", "english": "Dining hall" },
        { "kana": "しょくじ", "kanji": "食事", "english": "Food/Meal" },
        { "kana": "おかあさん", "kanji": "お母さん", "english": "Other person’s mother" },
        { "kana": "しょうばい", "kanji": "商売", "english": "Business" },
        { "kana": "けんきゅう", "kanji": "研究", "english": "Research" },
        { "kana": "おにいさん", "kanji": "お兄さん", "english": "Elder brother (Polite)" },
        { "kana": "せいふ", "kanji": "政府", "english": "Government" },
        { "kana": "やくにん", "kanji": "役人", "english": "Govt official" },
        { "kana": "おねえさん", "kanji": "お姉さん", "english": "Elder sister (Polite)" },
        { "kana": "かんごふ", "kanji": "看護婦", "english": "Nurse" },
        { "kana": "シャワー", "kanji": null, "english": "Shower" },
        { "kana": "かさをさす", "kanji": "傘を差す", "english": "To hold an umbrella" },
        { "kana": "タイプライターをうつ", "kanji": "タイプライターを打つ", "english": "To type" },
        { "kana": "とぶ (とびます)", "kanji": "飛ぶ", "english": "To fly" },
        { "kana": "あびる (あびます)", "kanji": "浴びる", "english": "To bathe" },
        { "kana": "つとめる (つとめます)", "kanji": "勤める", "english": "To work (for someone)" }
      ]
    },
    {
      "lesson_number": 17,
      "vocabulary": [
        { "kana": "しろい", "kanji": "白い", "english": "White" },
        { "kana": "ちゃいろ", "kanji": "茶色", "english": "Brown" },
        { "kana": "きいろ", "kanji": "黄色", "english": "Yellow" },
        { "kana": "くろい", "kanji": "黒い", "english": "Black" },
        { "kana": "ほし", "kanji": "星", "english": "Star" },
        { "kana": "ひかる (ひかります)", "kanji": "光る", "english": "To shine" },
        { "kana": "くさ", "kanji": "草", "english": "Grass" },
        { "kana": "はえる (はえます)", "kanji": "生える", "english": "To grow" },
        { "kana": "ふくそう", "kanji": "服装", "english": "Dress / clothes" },
        { "kana": "おくさん", "kanji": "奥さん", "english": "Other person’s wife" },
        { "kana": "ゆびわ", "kanji": "指輪", "english": "Finger ring" },
        { "kana": "てぶくろ", "kanji": "手袋", "english": "Gloves" },
        { "kana": "ひがでる", "kanji": "日が出る", "english": "Sun-rise" },
        { "kana": "つきがでる", "kanji": "月が出る", "english": "Moon-rise" },
        { "kana": "セーター", "kanji": null, "english": "Sweater" },
        { "kana": "マフラー", "kanji": null, "english": "Muffler" },
        { "kana": "ぼうしをかぶる", "kanji": "帽子を被る", "english": "Wear a cap/hat" },
        { "kana": "ネクタイをしめる", "kanji": "ネクタイを締める", "english": "Put on a neck-tie" },
        { "kana": "うわぎをきる", "kanji": "上着を着る", "english": "Wear an over-coat" },
        { "kana": "くつをはく", "kanji": "靴を履く", "english": "Put on shoes" },
        { "kana": "マフラーをまく", "kanji": "マフラーを巻く", "english": "Wind a muffler" },
        { "kana": "さく (さきます)", "kanji": "咲く", "english": "To bloom" },
        { "kana": "きる (きます)", "kanji": "着る", "english": "To wear" },
        { "kana": "ゆびわをはめる", "kanji": "指輪をはめる", "english": "Put on a ring" },
        { "kana": "めがねをかける", "kanji": "眼鏡を掛ける", "english": "To put on spectacles" }
      ]
    },
    {
      "lesson_number": 18,
      "vocabulary": [
        { "kana": "ちず", "kanji": "地図", "english": "Map" },
        { "kana": "ひきだし", "kanji": "引き出し", "english": "Drawer" },
        { "kana": "いれる (いれます)", "kanji": "入れる", "english": "To put in" },
        { "kana": "でいりぐち", "kanji": "出入り口", "english": "Entrance & exit" },
        { "kana": "と", "kanji": "戸", "english": "Door" },
        { "kana": "みせ", "kanji": "店", "english": "Shop" },
        { "kana": "にんぎょう", "kanji": "人形", "english": "Doll" },
        { "kana": "ひ", "kanji": "火", "english": "Fire" },
        { "kana": "いえ", "kanji": "家", "english": "House" },
        { "kana": "かべ", "kanji": "壁", "english": "Wall" },
        { "kana": "こくばん", "kanji": "黒板", "english": "Blackboard" },
        { "kana": "うら", "kanji": "裏", "english": "Reverse side / Back" },
        { "kana": "かぎ", "kanji": "鍵", "english": "Key" },
        { "kana": "ようふくだんす", "kanji": "洋服箪笥", "english": "Wardrobe" },
        { "kana": "かんばん", "kanji": "看板", "english": "Signboard" },
        { "kana": "きんこ", "kanji": "金庫", "english": "Safe" },
        { "kana": "ほんばこ", "kanji": "本箱", "english": "Book shelf" },
        { "kana": "かびん", "kanji": "花瓶", "english": "Vase" },
        { "kana": "はた", "kanji": "旗", "english": "Flag" },
        { "kana": "たいせつ(な)", "kanji": "大切(な)", "english": "Important" },
        { "kana": "カレンダー", "kanji": null, "english": "Calendar" },
        { "kana": "カーテン", "kanji": null, "english": "Curtain" },
        { "kana": "テープレコーダー", "kanji": null, "english": "Tape-recorder" },
        { "kana": "ロッカー", "kanji": null, "english": "Locker" },
        { "kana": "ガラス", "kanji": null, "english": "Glass" },
        { "kana": "ポケット", "kanji": null, "english": "Pocket" },
        { "kana": "ちずをはる", "kanji": "地図を貼る", "english": "Stick a map" },
        { "kana": "たす", "kanji": "足す", "english": "Add (plus)" },
        { "kana": "つるす (つるします)", "kanji": "吊るす", "english": "To hang (clothes)" },
        { "kana": "かざる (かざります)", "kanji": "飾る", "english": "To decorate" },
        { "kana": "さす (さします)", "kanji": "指す", "english": "To point / hold" },
        { "kana": "ならぶ (ならびます)", "kanji": "並ぶ", "english": "To line up" },
        { "kana": "ひく (ひきます)", "kanji": "引く", "english": "To pull" }
      ]
    },
    {
      "lesson_number": 19,
      "vocabulary": [
        { "kana": "おもう", "kanji": "思う", "english": "To think" },
        { "kana": "かんがえる", "kanji": "考える", "english": "To consider" },
        { "kana": "だいがくいん", "kanji": "大学院", "english": "Graduate school" },
        { "kana": "さかな", "kanji": "魚", "english": "Fish" },
        { "kana": "いしゃ", "kanji": "医者", "english": "Doctor" },
        { "kana": "しょうにん", "kanji": "商人", "english": "Trader" },
        { "kana": "おんがくか", "kanji": "音楽家", "english": "Musician" },
        { "kana": "しんぶん", "kanji": "新聞", "english": "News paper" },
        { "kana": "しんぶんきしゃ", "kanji": "新聞記者", "english": "Journalist" },
        { "kana": "がか", "kanji": "画家", "english": "Artist" },
        { "kana": "しちょう", "kanji": "市長", "english": "Mayor" },
        { "kana": "やくにん", "kanji": "役人", "english": "Government official" },
        { "kana": "ぎんこういん", "kanji": "銀行員", "english": "Bank employee" },
        { "kana": "でんきこうがく", "kanji": "電気工学", "english": "Electrical engineering" },
        { "kana": "がくしゃ", "kanji": "学者", "english": "Scholar" },
        { "kana": "とうきょうだいがく", "kanji": "東京大学", "english": "Tokyo university" },
        { "kana": "つもり", "kanji": "", "english": "Thinking" },
        { "kana": "しょうらい", "kanji": "", "english": "Future" },
        { "kana": "がくぶ", "kanji": "", "english": "College or course" },
        { "kana": "しゅうしかてい", "kanji": "", "english": "Post graduation" },
        { "kana": "はくしかてい", "kanji": "", "english": "Doctrate" },
        { "kana": "しけん", "kanji": "", "english": "Exam" },
        { "kana": "でんぽう", "kanji": "", "english": "Telegram" },
        { "kana": "テニス", "kanji": "", "english": "Tennis" },
        { "kana": "おもう / おもいます", "kanji": "思う", "english": "To think" },
        { "kana": "やく / やきます", "kanji": "", "english": "To burn" },
        { "kana": "かんがえる / かんがえます", "kanji": "考える", "english": "To consider" },
        { "kana": "うける / うけます", "kanji": "", "english": "To attend// take up ( an exam)" },
        { "kana": "まける / まけます", "kanji": "", "english": "To lose" }
      ]
    },
    {
      "lesson_number": 20,
      "vocabulary": [
        { "kana": "つくる", "kanji": "作る", "english": "To create/ to make" },
        { "kana": "だいどころ", "kanji": "台所", "english": "Kitchen" },
        { "kana": "あじ", "kanji": "味", "english": "Taste" },
        { "kana": "つかう", "kanji": "使う", "english": "To use" },
        { "kana": "たけ", "kanji": "竹", "english": "Bamboo" },
        { "kana": "けいと", "kanji": "毛糸", "english": "Knitting wool" },
        { "kana": "こめ", "kanji": "米", "english": "Rice" },
        { "kana": "ぎゅうにゅう", "kanji": "牛にゅう", "english": "Milk" },
        { "kana": "くすり", "kanji": "薬", "english": "Medicine" },
        { "kana": "かいすい", "kanji": "海水", "english": "Sea water" },
        { "kana": "おと", "kanji": "音", "english": "Sound" },
        { "kana": "こえ", "kanji": "声", "english": "Voice" },
        { "kana": "ながい", "kanji": "長い", "english": "Long" },
        { "kana": "あたらしい", "kanji": "新しい", "english": "New" },
        { "kana": "ふるい", "kanji": "古い", "english": "Old" },
        { "kana": "おおい", "kanji": "多い", "english": "Lots" },
        { "kana": "すくない", "kanji": "少ない", "english": "Not much" },
        { "kana": "さくぶん", "kanji": "作文", "english": "Essay / Composition" },
        { "kana": "のむ", "kanji": "飲む", "english": "To drink" },
        { "kana": "にく", "kanji": "", "english": "Meat" },
        { "kana": "りょうり", "kanji": "", "english": "Dish" },
        { "kana": "におい", "kanji": "", "english": "Fragrance" },
        { "kana": "しょうゆ", "kanji": "", "english": "Soya sauce" },
        { "kana": "しお", "kanji": "", "english": "Salt" },
        { "kana": "さとう", "kanji": "", "english": "Sugar" },
        { "kana": "だいず", "kanji": "", "english": "Soya beans" },
        { "kana": "とうふ", "kanji": "", "english": "Bean curd" },
        { "kana": "げんりょう", "kanji": "", "english": "Raw materials" },
        { "kana": "みそしる", "kanji": "", "english": "Soya soup" },
        { "kana": "こむぎこ", "kanji": "", "english": "Wheat flour" },
        { "kana": "ふくろ", "kanji": "", "english": "Carry bag" },
        { "kana": "かわ", "kanji": "", "english": "Leather" },
        { "kana": "げた", "kanji": "", "english": "Wooden slipper" },
        { "kana": "ふえ", "kanji": "", "english": "Flute" },
        { "kana": "さけ", "kanji": "", "english": "Japanese wine" },
        { "kana": "いちご", "kanji": "", "english": "Straw berry" },
        { "kana": "ぶどう", "kanji": "", "english": "Grapes" },
        { "kana": "ぶどうしゅ", "kanji": "", "english": "Grape wine" },
        { "kana": "しゅくだい", "kanji": "", "english": "Home work" },
        { "kana": "せっけん", "kanji": "", "english": "Soap" },
        { "kana": "よい", "kanji": "", "english": "Good" },
        { "kana": "おもい", "kanji": "", "english": "Heavy" },
        { "kana": "おおい", "kanji": "多い", "english": "Many/ lots" },
        { "kana": "すくない", "kanji": "少ない", "english": "Not much" },
        { "kana": "すこし", "kanji": "少し", "english": "Small quantity" },
        { "kana": "おかしい", "kanji": "", "english": "Strange" },
        { "kana": "ジャム", "kanji": "", "english": "Jam" },
        { "kana": "バター", "kanji": "", "english": "Butter" },
        { "kana": "いや（な）", "kanji": "", "english": "Not good" },
        { "kana": "ざんねん（な）", "kanji": "", "english": "Pitiful" },
        { "kana": "とても", "kanji": "", "english": "Very" },
        { "kana": "うっかり", "kanji": "", "english": "Careless" },
        { "kana": "つい", "kanji": "", "english": "Unintentionally" },
        { "kana": "つくる / つくります", "kanji": "作る", "english": "To create/ to make" },
        { "kana": "のこる / のこります", "kanji": "", "english": "To remain" },
        { "kana": "あむ / あみます", "kanji": "", "english": "To knit" },
        { "kana": "しおをとる / とります", "kanji": "しおを取る", "english": "To take/ pass the ___" },
        { "kana": "おとす / おとします", "kanji": "", "english": "To drop" },
        { "kana": "ひろう / ひろいます", "kanji": "", "english": "To pick" },
        { "kana": "わらう / わらいます", "kanji": "", "english": "To laugh" },
        { "kana": "のみすぎる / のみすぎます", "kanji": "飲みすぎる", "english": "To drink excessively" },
        { "kana": "あじをつける / つけます", "kanji": "味をつける", "english": "To add to the taste" },
        { "kana": "おぼえる / おぼえます", "kanji": "", "english": "To remember" },
        { "kana": "わすれる / わすれます", "kanji": "", "english": "To forget" }
      ]
    },
    {
      "lesson_number": 21,
      "vocabulary": [
        { "kana": "そと", "kanji": "外", "english": "Outside" },
        { "kana": "きおん", "kanji": "気温", "english": "Temperature" },
        { "kana": "ゆうがた", "kanji": "夕方", "english": "Evening" },
        { "kana": "らいしゅう", "kanji": "来週", "english": "Next week" },
        { "kana": "りょうしん", "kanji": "両親", "english": "Parents" },
        { "kana": "べんきょう", "kanji": "勉強", "english": "Studies" },
        { "kana": "たはた", "kanji": "田畑", "english": "Fields" },
        { "kana": "せいかつ", "kanji": "生活", "english": "Life-style" },
        { "kana": "しごと", "kanji": "仕事", "english": "Work" },
        { "kana": "しなもの", "kanji": "品物", "english": "Goods / articles" },
        { "kana": "ふね", "kanji": "船", "english": "Ship / boat" },
        { "kana": "たいふう", "kanji": "台風", "english": "Typhoon" },
        { "kana": "たま", "kanji": "玉", "english": "Ball / sphere" },
        { "kana": "かじ", "kanji": "火事", "english": "Fire" },
        { "kana": "め", "kanji": "目", "english": "Eye" },
        { "kana": "たのしい", "kanji": "楽しい", "english": "Enjoyable" },
        { "kana": "ただしい", "kanji": "正しい", "english": "Correct" },
        { "kana": "ゆうめい", "kanji": "有名", "english": "Famous" },
        { "kana": "てんきよほう", "kanji": "天気よほう", "english": "Weather fore-cast" },
        { "kana": "きょうだい", "kanji": "兄弟", "english": "Siblings" },
        { "kana": "こたえ", "kanji": "答え", "english": "Answer" },
        { "kana": "はじめ", "kanji": "", "english": "Start" },
        { "kana": "かれ", "kanji": "", "english": "He" },
        { "kana": "かのじょ", "kanji": "", "english": "She" },
        { "kana": "もんだい", "kanji": "", "english": "Problem" },
        { "kana": "じしん", "kanji": "", "english": "Earth quake" },
        { "kana": "おまつり", "kanji": "", "english": "Festival" },
        { "kana": "こんど", "kanji": "", "english": "This time" },
        { "kana": "はきよい", "kanji": "", "english": "Easy to wear" },
        { "kana": "うれしい", "kanji": "", "english": "Happy" },
        { "kana": "あぶない", "kanji": "", "english": "Dangerous" },
        { "kana": "やさしい", "kanji": "", "english": "Easy" },
        { "kana": "かなしい", "kanji": "", "english": "Sad" },
        { "kana": "しんせつ（な）", "kanji": "", "english": "Kind" },
        { "kana": "まじめ（な）", "kanji": "", "english": "Honest" },
        { "kana": "ほがらか（な）", "kanji": "", "english": "Bright" },
        { "kana": "ゆうめいな", "kanji": "有名（な）", "english": "Famous" },
        { "kana": "あいかわらず", "kanji": "", "english": "As usual" },
        { "kana": "つづく", "kanji": "", "english": "To continue" },
        { "kana": "さがる", "kanji": "下がる", "english": "To lower" },
        { "kana": "たがやす", "kanji": "", "english": "To cultivate" },
        { "kana": "しごとにつく", "kanji": "仕事につく", "english": "Stick to a job" },
        { "kana": "しずむ", "kanji": "", "english": "To sink" },
        { "kana": "なく", "kanji": "", "english": "To cry" },
        { "kana": "くずれる", "kanji": "", "english": "To crumble" },
        { "kana": "あれる", "kanji": "", "english": "To be rough" },
        { "kana": "たおれる", "kanji": "", "english": "To fall down" },
        { "kana": "いえをたてる", "kanji": "家をたてる", "english": "To build a home" },
        { "kana": "やめる", "kanji": "", "english": "To stop" }
      ],
    },
  ],
};
// ... [KEEP YOUR HUGE vocabData JSON HERE] ...

// --- APP LOGIC ---

let currentLessonWords = [];
let displayList = []; // The list currently being shown (filtered or full)
let currentIndex = 0;

// Load weak words from LocalStorage (Memory)
// We store them as a Set of strings like "Lesson1-WordIndex" or "Kana-English"
let weakWordsSet = new Set(JSON.parse(localStorage.getItem('nihongoWeakWords')) || []);

const cardElement = document.getElementById('flashcard');
const englishEl = document.getElementById('word-english');
const kanjiEl = document.getElementById('word-kanji');
const kanaEl = document.getElementById('word-kana');
const counterEl = document.getElementById('counter');
const lessonSelect = document.getElementById('lesson-select');
const weakToggle = document.getElementById('weak-toggle');
const starBtn = document.querySelector('.star-btn');

function init() {
  vocabData.lessons.forEach(lesson => {
    const option = document.createElement('option');
    option.value = lesson.lesson_number;
    option.textContent = `Lesson ${lesson.lesson_number}`;
    lessonSelect.appendChild(option);
  });
  loadLesson('all');
}

// 1. GENERATE A UNIQUE ID FOR EACH WORD
// We need this to track which specific word is "weak"
function getWordId(word) {
  return `${word.kana}-${word.english}`;
}

// 2. LOAD LESSON (Called when changing dropdown OR toggling checkbox)
function loadLesson(lessonNum) {
  // A. Get the raw words from the JSON
  if (lessonNum === 'all') {
    currentLessonWords = vocabData.lessons.flatMap(l => l.vocabulary);
  } else {
    const lesson = vocabData.lessons.find(l => l.lesson_number == lessonNum);
    currentLessonWords = lesson ? [...lesson.vocabulary] : [];
  }

  // B. Check if we need to filter for Weak Words
  reloadCurrentLesson();
}

function reloadCurrentLesson() {
  const isWeakMode = weakToggle.checked;

  if (isWeakMode) {
    // Filter: Keep only words whose ID is in the weakWordsSet
    displayList = currentLessonWords.filter(word => weakWordsSet.has(getWordId(word)));
  } else {
    // No Filter: Show everything
    displayList = [...currentLessonWords];
  }

  currentIndex = 0;
  updateCard();
}

// 3. UPDATE CARD DISPLAY
function updateCard() {
  cardElement.classList.remove('flipped');

  // Handle Empty List
  if (displayList.length === 0) {
    englishEl.textContent = "No words found!";
    kanjiEl.textContent = "";
    kanaEl.textContent = "";
    counterEl.textContent = "0 / 0";
    starBtn.style.display = 'none'; // Hide star if no cards
    return;
  }

  starBtn.style.display = 'block';
  const word = displayList[currentIndex];

  setTimeout(() => {
    englishEl.textContent = word.english;
    kanjiEl.textContent = word.kanji ? word.kanji : word.kana;
    kanaEl.textContent = word.kanji ? word.kana : "";
    counterEl.textContent = `${currentIndex + 1} / ${displayList.length}`;

    // Update Star Appearance
    updateStarAppearance(word);
  }, 200);
}

// 4. WEAK WORD LOGIC
function updateStarAppearance(word) {
  const id = getWordId(word);
  if (weakWordsSet.has(id)) {
    starBtn.textContent = '★'; // Solid star
    starBtn.classList.add('active');
  } else {
    starBtn.textContent = '☆'; // Hollow star
    starBtn.classList.remove('active');
  }
}

function toggleWeakStatus(event) {
  event.stopPropagation(); // Stop card from flipping

  if (displayList.length === 0) return;

  const word = displayList[currentIndex];
  const id = getWordId(word);

  if (weakWordsSet.has(id)) {
    weakWordsSet.delete(id); // Remove
  } else {
    weakWordsSet.add(id); // Add
  }

  // Save to browser memory
  localStorage.setItem('nihongoWeakWords', JSON.stringify([...weakWordsSet]));

  // Update visual star
  updateStarAppearance(word);
}

// --- STANDARD NAVIGATION FUNCTIONS ---

function flipCard() {
  cardElement.classList.toggle('flipped');
  if (cardElement.classList.contains('flipped')) {
    const word = displayList[currentIndex];
    if (!word) return;

    // Audio Logic
    const textToSpeak = word.kana;
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.8;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }
}

function playAudio(event) {
  event.stopPropagation();
  const word = displayList[currentIndex];
  if (!word) return;

  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(word.kana);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}

function nextCard() {
  if (currentIndex < displayList.length - 1) {
    currentIndex++;
    updateCard();
  } else {
    // Loop back to start? Or just stop.
    // Let's loop for smoother usage
    currentIndex = 0;
    updateCard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCard();
  } else {
    currentIndex = displayList.length - 1;
    updateCard();
  }
}

function shuffleCards() {
  for (let i = displayList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [displayList[i], displayList[j]] = [displayList[j], displayList[i]];
  }
  currentIndex = 0;
  updateCard();
}

// Event Listeners
lessonSelect.addEventListener('change', (e) => loadLesson(e.target.value));

// Start
init();