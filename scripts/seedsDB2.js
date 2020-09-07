const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/portfolioMern"
);
// mct oil
// https://www.laballey.com/products/mct-oil-5-gallon-pal
// https://www.laballey.com/products/organic-coconut-mct-oil-5-gallon-pails
// https://www.organicverdana.com/products/verdana-organic-coconut-mct-oil?variant=21331392725097




//      - 5 L => 5000 ml Everclear * 15 mg thc = 75,000 mg thc / 5 Liters 
//    75,000 mg / 200 (20%) = 375 grams per 5 L
//  TO GET TOTAL
// - 10 L Everclear
// - 15 L MCT Oil
// 
// Oils/ Tinctures
//  Sativa
//    - Candyland (18.5) (405g =>  446g) (morning?) (moderate pain, muscle tension, and sour moods. Candyland offers uplifting and stimulating effects, making it a perfect strain for social gatherings or creative pastimes.)
//    - Durban Poisen(17.5) (429g => 472g) (Sativa) (help you stay productive through a busy day, when exploring the outdoors, or to lend a spark of creativity.)
//  Hybrid
//    - Smarties (24%) (313 => 344g) (Indica) (Consumers can expect a great anytime strain that will leave you with a grin without leaving your head in the clouds.)

// SKIP FOR NOW / make into Mocktail Drinks
//    - og cookies (20%) (375g => 412g) (chilling- social: anxiety and depression) (The OG Cookies high is well balanced and functional, it uplifts mood, prompts giggles and social interactions.)
//  Indica Dom  
//    - Gorilla OG (20%) (375g + 10% = 412g) (Sleepy)
// 
// FINAL 
// 
// To Get
// Drinks => 4 batches => 2 oz of Sativa, 2 oz of Indica
// Batch 1: Whisky Infusion: 1 oz Indica, 2.5 L Whiskey
// Batch 2: Tequila Infusion: 1 oz Sativa, 2.5 L Tequila
// Batch 3: Mocktail, 1 oz Indica
// Batch 4: Mocktail, 1 oz Sativa

// Oil
// Batch 1: Sativa MCT, 10 L MCT Oil, 206 G Durban Poisen => 1/2 pound
// Batch 2: Indica MCT, 10 L MCT Oil, 206 G Smarties => 1/2 pound
// Batch 3: Hybrid MCT, 10 L MCT Oil, 206 G OG Cookies => 1/2 pound
// Batch 4: Morning Sativa, 10 L MCT Oil, 206 G Candyland => 1/2 pound
// Batch 5: Sleepy Indica, 10 L MCT Oil, 206 G Gorilla OG => 1/2 pound
// 
// 
// Oil comes in 2500 ml per batch, we want 15 mg/ ml, dose 2 ml= 30 mg
// 2500 * 15 = 37,500 mg total thc
// 37500 / 200 = 187.5 + 10% = 206, (20 extra grams)
// 
// Fufilment
// 7.5, 22.5, 60 = 90ml extra/ batch extra 6 (15ml)
// 18 bottles 15ml / .5 oz
// 12 bottles 45ml / 1.5 oz
// 12 bottles 120ml / 4 oz

// Batch 1: MCT, 20%, 2.5L, 
// 
// Drinks 
// 2.5 Gallons => 0.5 => 10 L whiskey Indica => 4750 => 5000 mg thc (.5 mg/ ml => 25 mg/ 50 ml) 27.5 G => .5 g extra
// 2.5 Gallons => 9.5 L => 10 L Tequila Sativa => 27.5 G => .5 g extra
// 2.5 Gallons => 9.5 L => 10 L Mocktail Indica => 27.5 G
// 2.5 Gallons => 9.5 L => 10 L Mocktail Sativa => 27.5 G
// 1 galon jug at a time
// 
//  Fufilment
// 330ml, 500ml, 750ml
// Total Fluid / Batch: 5 L
// 10 bottles 330ml = 10 (9.8)
// 5 bottles 500ml = 2500
// 1 Bottles 750ml = 750
// 
// 
// R & D
// From each Oil batch = 20 extra grams or 160 doses of 25 mg (4000 mg thc)
// 250 ml Everclear / 20 g = 16(-10%)=>15 mg / ml (125 doses)
// 25 bottle of 5 (2 ml) doses. so in each bottle put 10 ml. (150 mg/ bottle)
// 25 bottles of 15 ml, need to add 5ml of sweetner to dilute tincture. 
//  MAYBE make 1/2 batch Mocktail Recipe, (use 14 g, and 6 g left for R&D)
//OR MAYBE use 20 g for herbel Tincture 


// 8 grams/ 750 ml 50% alcohol recipe
// or 25 grams/ bottle everclear = 200 (25 mg) doses? 
// 
// Drinks = extra .5 Grams

// 
// PRODUCTS
//  Base Oils
//    - SKIP FOR NOW ( Olive Oil (only come in big containers?) )
// 
//    - MCT Sativa (Durban Poison)
//    - MCT Indica (Smarties)
//    - MCT Morning Goodness (Candyland - Sativa)
//    - MCT Chilling (Anxiety/ social) (OG Cookies - Hybrid)
//    - MCT Sleepy TV (Gorilla OG - Indica)
//  Strengths
//    - SKIP FOR NOW (10 mg / ml)
//    - SKIP FOR NOW (20 mg / ml)
//    -ONLY 15 mg/ ml
//  Sizes
//    - 15 ml
//    - 45 ml
//    - 120 ml

//  Drinks
//    - Tequila Sativa
//    - Whiskey Indica 
//    - Mocktail Sativa
//    - Mocktail Indica
//  Strengths
//    - 1.8 mg / ml || 25 mg / 45 ml
//  Sizes
//    - 330 ml
//    - 500 ml
//    - 750 ml
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// **************
// FUFILMENT
// 25 bottles of each
// for starting make only 1 dose size 15 mg/ ml 
// 
// 
// 
// (15ml * 25 =  375 ml) + (45 ml * 25 = 1125 ml)  + (120 * 25 = 3000 ml) = 4500 ml || 4.5 L
// = 4.5 L / Batch ===> + 10% ===> 5 L
//  - Batch 1: 5000 ml MCT Oil @ 10 mg / ml Sativa = 50,000 mg Sativa ==> 250 G
//  - Batch 2: 5000 ml MCT Oil @ 20 mg / ml Indica = 100,000 mg Indica ==> 500 G
// Total Sativa 150,000 mg ==> 750 grams
// 150,000 mg ==> (If weed is @ 20%) Divide by 200 ==> ? 750 g total for 2 batches
//  - Batch 3: 5000 ml EVOO @ 10 mg / ml Sativa = 50,000 mg Sativa ==> 250 G
//  - Batch 4: 5000 ml EVOO @ 20 mg / ml Indica = 100,000 mg Indica ==> 500 G
//  Total Indica 150,000 mg ==> 750 grams
// 
// 150,000 mg ==> (If weed is @ 20%) Divide by 200 ==> ? 750 g total for 2 batches
// 
// 10 Liters = 42.268 us cups => 208.336 ml/ 7.045 us fluid ounces of lucithen
// -      
// MCT Oil
// 555.75 / 5 Gallon: https://mountainroseherbs.com/fractionated-coconut-oil
// 
// // https://www.laballey.com/products/mct-oil-5-gallon-pal
// https://www.laballey.com/products/organic-coconut-mct-oil-5-gallon-pails
// https://www.organicverdana.com/products/verdana-organic-coconut-mct-oil?variant=21331392725097
// 
// 
// 
// 
// 
// 
// 

// 
// GET / new Batch
// 
// TINCTURE
// 5 Liter Containers for sitting per batch (TO START: need x 4) OR find best container and still be able to shake 5 L/ batch
// 
// 
// 
// TO GET
// 
// OIL
// 750 G Sativa (MCT) (2 batches)
// 750 G Indica (EVOO) (2 batches)
// 
// 10 L MCT Oil
// 10 L Extra Virgin Olive Oil
// 416.672 ml sunflower lucithen
// 
// 
// 
// 108 bottles 15 ml
// 152 bottles = 108 bottles 45 ml + 44 (11 x 4 batches testing)
// 108 bottles 120 ml
// (5 ml left goes for general loss/ tasting)
// 
// 
// Herbel Tinctures (3 sizes, 2 dose strengths) need to make tincture double or triple as strong so we can dilute it
// 
// 
// 
// 
// TINCTURE 
// 750 g Sativa (Everclear) (2 batches)  ?(X 4 herbel tincture blends: Giggle mix & Morning & Sexy)
// 750 g Indica (Everclear) (2 batches)  ?(X 4 herbel tincture blends: Sleepy & Pain/inflamation & IBD)
// 
// 20 L Everclear
// 
// 108 bottles 15 ml
// 152 bottles = 108 bottles 45 ml + 44 (11 x 4 batches testing)
// 108 bottles 120 ml
// (5 ml left goes for general loss/ tasting)
// 
// 
// 
// 
// DRINKS
// 
// g Sativa
// g Indica
// 
// # bottles per size
// # bottles per size
// # bottles per size
// 
// 
// 
// PRODUCTION
// 
// Formula
// # ml Devided by # machine can do,; then take # ml and Divide by # of times machine can do (rounded up)
//  - 5000 ml Divided by ? = ? ==> 5 So take 5000/ ? = ? ml==> ? Liter per batch
//    - total g divided by ? (same number of times) =  ? mg/ batch 
// 
// 
// OIL 
// 
// Magical butter can do 1180 ml to 70 g   || MAY BE ABLE TO USE UP TO 85 G IN 710ML (3 CUPS) :: mg per teaspoon = 94.44 (teaspoon to ml 4.93) = 19.16 mg / ml :: so in 710 ml 13603.6 mg / 50 (mg dose) = 272 doses => -10% = 245 (2 ml) doses)
//    - 5000 ml Divided by 1180 = 4.24==> 5 So take 5000/ 5 = 1000 ml==> 1 Liter per batch
//    - Weak batch 250 g / 5 = 50 g per batch
//    - Strong batch 500 g / 5 = 100 g per batch // wont fit (max 70)
// STRONG BATCH need to make 7 times per batch
// 5000 ml divided by 7 = 714.3 ml per Strong Batch
// 8.5 hours per 5000 ml batch
// 
// Ardent fx can do 828ml for 113.4 g
// - 5000 ml Divided by 828 = 6.04 ==> 6.04 So take 5000/ 7 = 714 ml per batch
//  - Strong batch 500 g / 7 = 71.43 g per batch
// 17 hours per 5000 ml batch
// 
// Estimate 5 Days not including decarbing for 4 batches
// 
//
// TINCTURES
//
// MAY BE ABLE TO USE UP TO 85 G IN 710ML (3 CUPS) :: mg per teaspoon = 94.44 (teaspoon to ml 4.93) = 19.16 mg / ml :: so in 710 ml 13603.6 mg / 50 (mg dose) = 272 doses => -10% = 245 (2 ml) doses)
// 
// 
// Herbel Tinctures (3 sizes, 2 dose strengths) need to make tincture double or triple as strong so we can dilute it
// 1.18 L (1180 ml) to 70 grams (14 mg/ 1 ml)
// 
// 
// DRINKS
// 18.7 L (4.95 Gallons)    18700 ml (.5 mg / ml => 22.5 mg/ 45ml (us shot))
// 9350 mg thc / 18700 ml 
// 
// sativa Mocktail @18.7 Liters (Durbon Poison - 17.5%) 
//    - 18700 ml / 175 (%) = 107 g + 10% => 118 g
// 
// Indica Mocktail @18.7 L (OG Cookies - 20%)
// 18700 ml / 200 = 94 g => 103 G
// 
// 
// Use This 10% Off Discount Code "LAB10OFF" When You Order Online
// https://www.laballey.com/collections/best-solvents-for-plant-extraction-in-usa

// 500 dollars for 640 fl oz vs = .78/ fl oz
// const Batches = [
//   {

//   }
// ]
// 
// 
// 
const staffSeed = [
  {
    name: "Michael S. Weissman",
    title: "PhD Clinical Director",
    specialties: 'Individual Adult Psychotherapy, Family, Marital, Psychological Testing',
    education: 'Princeton University, 1970. University of Massachusetts, 1974, PhD Past President, Tidewater Academy of Clinical Psychologists Past President, Virginia Academy of Clinical Psychologists Listed in National Register of  Health Care Providers in Psychology.',
    other: 'Past President, Tidewater Academy of Clinical Psychologists Past President, Virginia Academy of Clinical Psychologists Listed in National Register of  Health Care Providers in Psychology. Assistant Professor of Behavioral Science, adjunct faculty, Eastern Virginia Medical School',
    hours: 'Churchland and Norfolk offices.',
    img: '../../Images/mWeissman.jpg',
    rating: 100,
    therapist: true,
    date: new Date(Date.now()) 
},
{
    name: "Barbara B. Forbes",
    title: "MS, LMFT, LPC",
    specialties: 'Depression and anxiety; adult survivors of childhood sexual, physical, and emotional abuse; substance abuse; weight/overeating concerns; overspending behaviors; relationship “addictions,” (codependency). Helps couples understand how their individual histories impact the marital relationship. Provides counseling and support for couples considering separation and/or divorce. Work-related concerns, stress management, women’s issues, as well as issues related to loss and grief. From a military family herself, she provides mental health services to members of the military and their families. Provider with Military One Source, Coast Guard EAP, as well as most other insurances and EAPs.',
    education: 'Old Dominion University, MS, Psychology, 1976.',
    other: ' Works with: Adults, Couples, Families, Groups. In private practice at Churchland Psychological Center, Churchland office, since 1989.',
    hours: 'Churchland office',
    img: '../../Images/bForbes.jpg',
    rating: 99,
    therapist: true,
    date: new Date(Date.now())
}

]
// potential strains
// Blue Gelato  Blue Gelato is a slightly indica dominant hybrid strain (60% indica/40% sativa) created through a delicious cross of the classic Thin Mint Girl Scout Cookies X Blueberry strains. Infamous for its insanely delicious flavor, Blue Gelato is a patient favorite of those who prefer a full-bodied indica high without the heavy sedation that can sometimes come with it. Blue Gelato has a super sweet and citrusy fruity blueberry flavor that has a lightly sour exhale. 
// Gorilla glue
// blue cookies Blue Cookies is an indica-dominant hybrid cross between two celebrity strains, Girl Scout Cookies and Blueberry. As the child of these heavyweight champion strains, Blue Cookies delivers a crushing blow of euphoria straight to the head, where it swiftly sinks down to relax the entire body. Sweet berry flavors fuse with earthy cherry notes in a flavor profile as enticing as the bud’s thick coat of frosty resin that stretches over twisting hues of green and purple. Novice consumers should approach Blue Cookies with modesty, but this strain’s potency is perfect for hard-to-impress veterans.
// 
// Gog
// Lemon tree
// thin mints Thin Mint, a hybrid cross containing Durban Poison and OG Kush genetics, is a phenotype of the legendary GSC strain. Dark green and royal purple hues peek through a heavy coat of crystals, with a sweet minty smell that gives a full explanation of this strain’s name. Thin Mint calls upon the powers of its indica, sativa, and hybrid ancestors for a powerful full-body effect that gives this strain its sterling reputation. The high psychoactivity of this strain is not for novice consumers, but patients with a variety of symptoms are giving Thin Mint their seal of approval: severe pain, nausea, swelling, insomnia, and appetite loss are no match for the potency of Thin Mint.
//  - would be cool to try
// COOKIES - I WANT
// orange sherbert  - not impressed
// animal cookies- interested after reg Cookies
// 
// 
// 
// super kush -When you’re looking to wind down and relax, Super Kush is there to lend a hand. Daughter of Northern Lights #5 and Hindu Kush, Super Kush is a very clear-headed indica. This strain is best for users who would like to ease stress without being stuck on the couch. An all-around easy strain for beginning cannabis users, 
// blue cookies
// gorilla glue
// sourr patch kids - I WANT FOR HYBRID -
// 
// wedding cake INDICA?
// 

const StrainSeed = [
  {
    name: "Larry OG",
    othernames: ["Lemon Larry"],
    description: "Larry OG, also called Lemon Larry, is yet another member of the famous ocean-grown family. Originally created in Orange County, this indica is a cross between OG Kush and SFV OG. Larry OG produces a potent yet easy body buzz that will allow you to relax while getting things done. The effects are happy but not overwhelming. Like other members of the OG family, this strain has a very clean and piney aroma. The nugs tend to be dense and feature distinct burnt orange hairs that are longer than average.",
    thc: 18,
    img: "https://leafly-public.s3-us-west-2.amazonaws.com/strains/reviews/photos/larry-og__primary_ef41.jpg",
    strain: "Hybrid",
    effects: ["Creative", "Energetic", "Focused", "Relaxed", "Happy"],
    comments: ["Is this crack? Started smoking to relax after eight hours on my flat feet, got relief in minutes, and sprang up from my armchair to sweep. I was watching Futurama. Do you understand how good of a cartoon that is? I swept instead — and it was fucking exhilarating. This coming from a 23-year-old outdoorsman.", "Dense, mildly sticky nugs. Grinds really well. Piney sent with a hint of citrus-fuel. Vaped on Magic Flight Box, 4 pulls on one trench. Citrus on the breath on the exhale. Makes you cough, just a bit. Comes on really slow from the base of your neck around the spine to fill up the brain with goose down. Creeps in with a constant low/heavy flow, like a steady rise of ocean tide in an estuary. Then it settles into your upper body. Head becomes heavy, leaning to one side. Eyes and mouth tingle. Lungs feel a bit heavy. Definitely good pain meds. Not too giggly, and seemingly really focused. Was able to do some PHP coding and set up a new website without too many distractions - even though my body feels stupid. Currently deep into my first hour and a half. Going to watch some TV and check back in later."],
    parents: ["SFV OG", "OG Kush"],
    links: ["https://www.leafly.com/strains/larry-og"]
  },
  {
    name: "Chem Pie OG",
 description: "Sativa dominant from Strains Cherry Pie x Chemdawg x Do-Si-Dos",
    thc: 23,
    img: "https://stickyguide.imgix.net/product_photos/2791206/original-1589916626.png?auto=format&fm=jpg&q=60&dpr=1&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
    strain: "Sativa",
    Effects: ["Relaxed", "Happy"],
    // comments: [],
    parents: ["Cherry Pie", "Chemdawg", "Do-Si-Dos"],
    // links: ["https://www.leafly.com/strains/larry-og"]
  },
  {
    name: "Orange Cookies",
 description: "Sativa dominant from Strains Orange Juice x Girl Scout Cookies / GSC",
    thc: 21,
    img: "https://stickyguide.imgix.net/product_photos/2791206/original-1589916626.png?auto=format&fm=jpg&q=60&dpr=1&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
    strain: "Hybrid",
    effects: ["Relaxed", "Happy", "Talkative"],
    // comments: [],
    parents: ["Orange Juice", "Girl Scout Cookies"],
    // links: ["https://www.leafly.com/strains/larry-og"]
  },
  {
  name: "Blueberry space cake",
  description: "Blueberry Space Cake by Cresco Labs is the indica-dominant offspring of Outer Space and Alien Dutchess, with its Alien OG and Trinity lineage bearing the strongest influence on its effects and morphology. It offers heavier than average Kush-forward effects that include cerebral euphoria and relaxed, weighted limbs. This strain exhibits a strong berry and citrus aroma and could be utilized for stress relief, minor physical pain, and restlessness. ",
     thc: 00,
     img: "https://stickyguide.imgix.net/product_photos/2791206/original-1589916626.png?auto=format&fm=jpg&q=60&dpr=1&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
     strain: "Indica",
     effects: ["Relaxed", "Happy", "Euphoric", "Creative"],
     comments: ["Another CRESCO RESERVE and deservedly so!!Creaco puts out some amazing concentrates for Pa patients, some so coveted when they are available. People like me HOARD 10 of em !!!! This is perfect for all kinds of pain,,neuro, muscular, skeletal. Arthritis, other connectivity disorders, 8 blown vertebrae and not many options left..Big PHARMA s poison ... well we do have a choice ismsuch strains as this....in Crasxo,s Reserve, along with Joliet Jake, and other great strains these are made for one or two bloomings n that’s it... They are the crime de le creme!!! This is perfect for anything from PMS to neurological pain. It’s worth the extra money and should u feel real bad 1/3of a cartridge should guarantee you a sandwich, then a nice 8 hour pain free nap...... GOD THANK you for Indicas!!!!! This belong in a box in your closet n you tell NOONE ypu have it....if ya look at my other reviews you’ll find some great friends like BLUEBERRRY, CRITICAL MASS waiting for your approval. I just wanna be pain free so any suggestions are sincerely appreciated....NOW go get TWO of these....one for tonight, one to put away for fall!!!!!! Peace Stajames", "This strain gives you a couch lock while making your arms and legs almost feel numb. Great pain relief for migraines as well. This is one of my new favorite strains."],
     parents: ["Outer Space", " Alien Dutchess", "Alien OG", "Trinity "],
     links: ["https://www.leafly.com/strains/blueberry-space-cake"]
  }
  ,
  {
  name: "Diesel cookies",
  description: "Diesel Dipped Cookies is an indica dominant hybrid strain (80% indica/20% sativa) created through crossing the classic Girl Scout Cookies X Diesel strains. In terms of flavor, this bud's name says it all. Diesel Dipped Cookies packs a super sour and pungent diesel flavor with a hint of rich nuttiness and spices. The aroma is of pungent earth and sour diesel with a touch of herbs and kush as the nugs are broken apart and burned. The Diesel Dipped Cookies high is on the heavy side of things, with stoney physical effects that leave you unbelievably couch-locked and totally at ease within a few minutes of taking your final toke. The high starts with a lift of effects that fill your mind with a sense of euphoria and pure bliss, pushing away any negative or racing thoughts immediately. A deeply relaxing physical high comes next, washing over you and lulling you down into a hefty body stone that can leave you totally immovable for hours on end. With these effects and its super high 18-26% average THC level, Diesel Dipped Cookies is often chosen to treat those suffering from conditions such as appetite loss or nausea, chronic pain, muscle spasms or cramps, mood swings, and depression. This bud has dense small rounded minty green nugs with thin orange hairs and a coating of frosty thick amber crystal trichomes.",
     thc: 23,
     img: "https://stickyguide.imgix.net/product_photos/2791206/original-1589916626.png?auto=format&fm=jpg&q=60&dpr=1&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
     strain: "Indica",
     effects: ["Body High", "Euphoria", "Hungry", "Relaxing", "Uplifting"],
    //  comments: [""],
    relieves: ["Appetite Loss", "Chronic Pain", "Cramps", "Mood Swings"],
     parents: ["Girl Scout Cookies", "Diesel"],
     links: ["https://www.allbud.com/marijuana-strains/indica-dominant-hybrid/diesel-dipped-cookies#:~:text=Diesel%20Dipped%20Cookies%20is%20an,of%20rich%20nuttiness%20and%20spices."]
  },
  {
    name: "Blue Dream",
description: "Blue Dream, a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains. Crossing Blueberry with Haze, Blue Dream balances full-body relaxation with gentle cerebral invigoration. Novice and veteran consumers alike enjoy the level effects of Blue Dream, which ease you gently into a calm euphoria. With a sweet berry aroma redolent of its Blueberry parent, Blue Dream delivers swift symptom relief without heavy sedative effects. This makes Blue Dream a popular daytime medicine for patients treating pain, depression, nausea, and other ailments requiring a high THC strain. ",
   thc: 18.5,
   img: "https://stickyguide.imgix.net/product_photos/2791206/original-1589916626.png?auto=format&fm=jpg&q=60&dpr=1&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
   strain: "Hybrid",
   Effects: ["Happy", "Euphoric", "Relaxed"],
   comments: ["Friends, stoners, red-eyed countrymen, lend me your ears; for I bring unto thee a tale of the Blue Dream... T’was a calm April night, 2014 it was, and I had eagerly purchased an eighth of some pungent Blue Dream. It’s abundance of sugary trichomes, paired with the thick density of the bud was enough to bring a tear to your eye. I enthusiastically ground up the cheeba, packed a generous bowl and went to town. Eight minutes and a bowl later, I was beginning to assume that my herb wasn’t all that strong…but then it hit me like a 150-ton locomotive of euphoria. “Whoooa” was the only thing that I could say, as I looked at everything around the living room. Everything looked as if it were lagging behind by a few frames, and this cerebral adventure lasted for the first few minutes…but just when I thought that Blue Dream had shown me everything there was to experience about her, her sativa effects began to kick in. All of a sudden, I felt as if I was briskly cruising on a warm cloud, which was followed by an amazing burst of energy. Folks let me tell you, if you’d ever like to find out how an eagle feels when it spreads its majestic wings and takes to the air at 80 mph., this strain is a kickass tool to take you there. Finally, when all of your euphoric energy has been expended, Blue Dream ends her experience with a mellow cruise induced by her indica side. Call in at Jimmy John’s and order 12 sandwiches, fire up Netflix, and take it easy on the couch until you slowly begin to melt into the furniture, because you're going to start to drift off into your happy place; and as soon as you reach that critical point of relaxation, you’re going to sleep like a sloth on twelve doses of Ambien. Folks, I guess the moral of the story here is that Blue Dream is an outstanding and pleasurable strain that is fun for cannabis enthusiasts anywhere on the experience spectrum; from the novice user who is looking to have an easy-going yet memorable experience, to the seasoned smoker who owns a laser pointer and a cat, and anybody in between; but my review alone can’t depict the exquisite effects that Blue Dream has to offer. Roll up a liberal amount of Blue Dream, spark it up, and let her take you on a spectacular trip; you’ll be thankful you did when your mind is blissfully floating through the heavens."],
   parents: [" Blueberry", " Haze"],
   links: ["https://www.leafly.com/strains/blue-dream"]
  },
  {
name: "Banana Kush",
description: "This legendary West Coast strain crosses Ghost OG and Skunk Haze to create an indica-dominant hybrid that tastes and smells like a bushel of fresh bananas. Banana Kush tends to provide a mellow buzz alongside a relaxed sense of euphoria. A great choice when dealing with stress or depression, Banana Kush also helps stimulate your creative juices and can help you remain talkative in social settings.",
   thc: 18.5,
   img: "https://stickyguide.imgix.net/product_photos/2791206/original-1589916626.png?auto=format&fm=jpg&q=60&dpr=1&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
   strain: "Indica",
   Effects: ["Mellow Buzz", "Relaxed"],
   comments: ["Picked up some Banana Kush the other day and WOW! This lime green, nice-smelling bud just wasted me after about 4 good rips on a bowl. The high creeps in after about 5 or 10 more minutes and left me all zoned out,…", "Got this and some Sour D as my first two hits of medical during my first trip to a dispensary. I've been smoking daily for the last six months, so I've built up a minimal tolerance. I packed a bowl and after three hits I was gone."],
// relieves: [""],
   parents: ["Ghost OG", "Skunk Haze"],
   links: ["https://www.leafly.com/strains/banana-kush"]
  },
  {
    name: "Chemical Trance",
description: "hybrid indica leaning; Aroma: Vapor smells chem and earthy with hint of pungent; Taste: Earthy, pungent, chem; Looks: A little dark amber color; Effects: Weird euphoria but nod bad, uplifted, relaxed, happy, chill",
   thc: 75,
   img: "https://stickyguide.imgix.net/product_photos/2791206/original-1589916626.png?auto=format&fm=jpg&q=60&dpr=1&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
   strain: "Hybrid",
   Effects: ["Weird", "euphoria", "uplifted", "relaxed", "happy", "chill"],
   comments: ["I was happy to see the July 4th deal of this for 45g. This is absolutely appropriate for the PA market anyways. Prism is getting better at making their concentrates, however their flavors are always weird to me and are nothing like the other growers. So they still need to work on their terp game. Anytime I see the terp percentages I'm shocked because the flavors didn't seem to match what's listed. Two majorly annoying things about Prism concentrates, I can't find the majority of the genetic information and they are never responsive on social media. These things need to change before I'll consider grabbing Prisms stuff regularly. If you are looking for a cheap medicine that'll help various medicinal issues generically then this is a good affordable option. Nothing about it gave me that wow factor but it's medicine and it works."],
// relieves: [""],
  //  parents: [""],
   links: ["https://www.reddit.com/r/PaMedicalMarijuana/comments/hlox9w/prisms_chemical_trance_shatter_review/"]
  }
  
]
// , , 
// name: "",
// description: "",
//    thc: 21,
//    img: "https://stickyguide.imgix.net/product_photos/2791206/original-1589916626.png?auto=format&fm=jpg&q=60&dpr=1&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
//    strain: "",
//    Effects: [""],
//    comments: [""],
// relieves: [""],
//    parents: [""],
//    links: [""]
// }



const ProductsSeed= [
  {
  name: "Larry OG",
  description: "Old oil reused, full strength",
  called: ["Larry", "L"],
  originialform: "Flower",
  form: "Brownies",
  quantity: 16,
  salequantity: 5,
  personal: false,
  totalmg: 0,
  mgperdose: 0,
  dosesize: "Unknown/ One Brownie",
  // strain: "Hybrid",
 ingredients: ["Decarbed Oil", "Duncan Heins Milk Chocolate Brownie Mix"],
  recipe: ["1/2 cup oil in brownie mix", "21 min at 325", "cut into 40"],
  price: 4,
  deals: "N/A",
  originalamount: 40,
  unitamount: "Brownie",
  container: "Bag",
  size: 1,
  rating: 5,
  display: true
  },
  {
    name: "Larry OG",
    description: "Old oil reused, 2 1/2 strength brownies per bag",
    called: ["L 1/2", "L 2"],
    originialform: "Flower",
    form: "Brownies",
    quantity: 5,
    salequantity: 1,
    personal: false,
    totalmg: 0,
    mgperdose: 0,
    dosesize: "Unknown/ One Bag",
    unitamount: "Brownie",
    // strain: "Hybrid",
   ingredients: ["Decarbed Oil", "Duncan Heins Milk Chocolate Brownie Mix"],
    recipe: ["1/2 cup oil in brownie mix", "21 min at 325", "cut into 40"],
    price: 4,
    deals: "N/A",
    rating: 6,
    originalamount: 40,
    container: "Bag",
    size: 1,
    // unitamount: "Bag",
    display: true
  },
  {
    name: "Chem Pie OG",
    description: "2.74 g of Flower",
    totalgrams: 2.74,
    manufacturer: "gLeaf",
    // called: [""],
    originialform: "Flower",
    form: "Oil",
    quantity: .2,
    salequantity: 0,
    personal: true,
    mgperdose: 5,
    dosesize: "4 full droppers",
    originalamount: 4,
    totalmg: 657,
    mgpercontainer: 155,
    container: "Bottle",
    size: 15,
    unitamount: "ml",
    // strain: "Hybrid",
   ingredients: ["2.74 g of flower", "Ardent FX", "sunflower Lucithen", "MCT Oil"],
    recipe: ["Decarb", "Infuse", "Four 10 ml bottles"],
    // price: "1 for $30",
    rating: 5,
    display: true
  },
  {
    name: "Orange Cookies",
    description: "5 g of Flower",
    originialform: "Flower",
    totalgrams: 5,
    manufacturer: "gLeaf",
    // called: [""],
    form: "Oil",
    quantity: .2,
    salequantity: 0,
    personal: true,
    mgperdose: 5.5,
    dosesize: "4 full droppers",
    originalamount: 4,
    totalmg: 680,
    mgpercontainer: 170,
    container: "Bottle",
    size: 15,
    unitamount: "ml",
    // strain: "Hybrid",
   ingredients: ["5 g of flower", "Ardent FX", "sunflower Lucithen", "MCT Oil"],
    recipe: ["Decarb", "Infuse", "Four 10 ml bottles"],
    // price: "1 for $30",
    rating: 5,
    display: true
  },
  {
    name: "Blueberry space cake",
    description: "1/2 g of concentrate",
    originialform: "Concentrate",
    totalgrams: .5,
    manufacturer: "Cresco Resurve",
    // called: [""],
    form: "Oil",
    quantity: 4,
    salequantity: 3,
    personal: false,
    mgperdose: 5.5,
    dosesize: "2-4 full droppers",
    originalamount: 4,
    totalmg: 460,
    mgpercontainer: 115,
    container: "Bottle",
     size: 10,
     unitamount: "ml",
    // strain: "Hybrid",
   ingredients: ["1/2 g concentrate", "Ardent FX", "sunflower Lucithen", "MCT Oil"],
    recipe: ["Decarb", "Infuse", "Four 10 ml bottles"],
    price: 30,
    deals: "2 for $50",
    rating: 5,
    display: true
  },
  {
    name: "Diesel cookies",
    description: "1/2 g of concentrate",
    originialform: "Concentrate Live Crumble",
    totalgrams: .5,
    manufacturer: "Prism",
    // called: [""],
    form: "Oil",
    quantity: 4,
    salequantity: 3,
    personal: false,
    mgperdose: 5.1,
    dosesize: "2-4 full droppers",
    originalamount: 4,
    totalmg: 408,
    mgpercontainer: 102,
    container: "Bottle",
     size: 10,
     unitamount: "ml",
    // strain: "Hybrid",
   ingredients: ["1/2 g concentrate", "Ardent FX", "sunflower Lucithen", "MCT Oil"],
    recipe: ["Decarb", "Infuse", "Four 10 ml bottles"],
    price: 30,
    deals: "2 for $50",
    rating: 5,
    display: true
  },
  {
    name: "Chemical Trance",
    description: "1/2 g of concentrate",
    originialform: "Concentrate Sugar",
    totalgrams: .5,
    manufacturer: "Prism",
    called: ["Chem T", "CT"],
    form: "Brownie",
    quantity: 7,
    salequantity: 3,
    personal: false,
    mgperdose: 20,
    dosesize: "1-2 bags",
    originalamount: 20,
    totalmg: 20,
    mgpercontainer: 20,
    container: "Bag",
     size: 1,
     unitamount: "Brownie",
    // strain: "Hybrid",
   ingredients: ["1/2 g concentrate", "Ardent FX", "sunflower Lucithen", "MCT Oil"],
    recipe: ["Decarb", "Infuse", "Brownies"],
    price: 4,
    deals: "3 for $10",
    rating: 5,
    display: true
  },
  {
    name: "Banana Kush",
    description: "Low Stress Day Brownie",
    originialform: "Concentrate Crumble",
    totalgrams: .5,
    manufacturer: "Prism",
    called: ["BK"],
    form: "Brownie",
    quantity: 9.5,
    salequantity: 2,
    personal: false,
    mgperdose: 10,
    dosesize: "1-2 bags",
    originalamount: 20,
    totalmg: 20,
    mgpercontainer: 20,
    container: "Bag",
     size: 1,
     unitamount: "Brownie",
    // strain: "Hybrid",
   ingredients: ["1/2 g concentrate", "Ardent FX", "sunflower Lucithen", "MCT Oil"],
    recipe: ["Decarb", "Infuse", "Brownies"],
    price: 4,
    deals: "3 for $10",
    rating: 5,
    display: true
  },
  {
    name: "Sativa Blend",
    description: "Unknown g of concentrate",
    originialform: "Concentrate Pressed",
    totalgrams: .5,
    manufacturer: "Unknown",
    called: ["S"],
    form: "Brownie",
    quantity: 18,
    salequantity: 18,
    personal: false,
    mgperdose: 0,
    dosesize: ".2 - 1 bag",
    originalamount: 20,
    // totalmg: 20,
    // mgpercontainer: 20,
    container: "Bag",
     size: 1,
     unitamount: "Brownie",
    // strain: "Hybrid",
   ingredients: ["unknown g concentrate", "Ardent FX", "sunflower Lucithen", "MCT Oil"],
    recipe: ["Decarb", "Infuse", "bags"],
    price: 3,
    deals: "N/A",
    rating: 5,
    display: true
  },
  {
    name: "Blue Dream",
    description: "1 g of concentrate",
    originialform: "Concentrate",
    totalgrams: 1,
    manufacturer: "Unknown",
    called: ["BD"],
    form: "Brownie",
    quantity: 12,
    salequantity: 18,
    personal: false,
    mgperdose: 0,
    dosesize: "1-2 bags",
    originalamount: 40,
    totalmg: 20,
    mgpercontainer: 20,
    container: "Bag",
     size: 1,
     unitamount: "Brownie",
    // strain: "Hybrid",
   ingredients: ["1 g concentrate", "Ardent FX", "sunflower Lucithen", "MCT Oil"],
    recipe: ["Decarb", "Infuse", "bags"],
    price: 4,
    deals: "3 for $10",
    rating: 5,
    display: true
  }
]
// {
//   name: "",
//   title: "",
//   specialties: '',
//   education: '',
//   other: '', 
//   hours: '',
// rating: 79,
//   img: '../../Images/sAsprey.jpg',
//   date: new Date(Date.now())
// },
const resourcesSeed = [
  // {
  //   catagory: "about",
  //   heading: "About Us",
  //   subtitle: "from the creator of GraphicKnowvel",
  //   body1:
  //     "We are a Philadelphia based company serving the needs of small businesses in need of a little cash.",
  //     body2:
  //     "View our values and mission statment to learn more.",
  //     rating: 4,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "howitWorks",
  //   heading: "What are your hours?",
  //   body1:
  //     "Each of our therapists has their own hours, please check their bio on the staff page for more information. The business office is open M-F 9am to 5pm. If you are experiencing a clinical emergency and cannot reach your therapist, please call the answering service at 757-671-3152 to be connected with the therapist on call.",
  //     rating: 2,
  //   date: new Date(Date.now())
  // },
  // {
  //   catagory: "privacypolicy",
  //   heading: "The Dead Zone",
  //   body1:
  //       "Please reproduce and share!",
  //     body2:
  //     "See terms of use",
  //     rating: 1,
  //           date: new Date(Date.now())
  // },
  // {
  //   catagory: "termsofuse",
  //   heading: "Terms of Use",
  //   body1:
  //     "Terms of use the sale of this product is not limited in any way.",
  //     body2:
  //     "No Copyright as of yet.",
  //     rating: 1,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "missionstatement",
  //   heading: "Mission Statement",
  //   body1:
  //     "Partnering with small businesses to help them grow by providing honest, transparent, and consultive funding solutions tailored to the individual needs of each business.",
  //     rating: 3,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "values",
  //   heading: "Core Values",
  //   body1:
  //     "Be Honest and Transparent, Understand Each Client's Unique Needs, Look Out For Client's Best Interest, Client Success Is our Sucess, and Believe In Each And Every patient.",
  //     rating: 4,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "faq",
  //   heading: "Does an application cost money?",
  //   body1:
  //     "No! It will always be free",
  //     rating: 3,
  //   date: new Date(Date.now())
  // },
  {
    catagory: "schedule",
    heading: "How do I schedule an appointment?",
    body1:
      "Please call the main business office at 757-483-3404 and our office staff will take your information and help match you to the appropriate therapist. All of our therapists manage their own schedules, so the therapist will contact you directly to schedule your first appointment.",
      rating: 4,
      display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "insurance",
    heading: "What insurance do you accept?",
    body1:
      "We accept most insurance plans including Anthem Blue Cross Blue Shield, Tricare, Optima, and United Behavioral among many others.",
      rating: 3,
      display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "howmuch",
    heading: "How much will I have to pay for therapy?",
    body1:
      "Most of our clients use insurance to cover the cost of therapy, and the cost will vary depending on your particular plan. You can contact your insurance company to inquire about your benefits, copayments, and deductible",
      rating: 2,
      display: true,
    date: new Date(Date.now())
  },
    {
    catagory: "medicine",
    heading: "Can you prescribe medication for my depression or anxiety?",
    body1:
      "No, we don’t have a psychiatrist on staff and do not offer this service. If your therapist feels that medication might be warranted then an appropriate referral will be made.",
      rating: 1,
      display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "teletherapy",
    heading: "In view of the present Coronavirus Pandemic, Churchland Psychological Center offers REMOTE THERAPY (“Teletherapy”) as an option to all of our patients. This option is covered by almost all insurance companies.",
    body1:"Teletherapy is an option we offer to all of our patients under certain circumstances. Certainly, at present, in 2020, the world is faced with the Coronavirus pandemic, requiring that we stay at home is much as possible, and therefore offering this service allows each patient to continue their therapy without leaving their home. Each therapist in the practice uses the medium that they are most comfortable with and which best suits the patient’s preferences. We can conduct sessions over the Internet where the patient and therapist can see each other and communicate much as they would in the office, allowing the patient to either use their computer, tablet, or smart phone to connect with the therapist. Other options include Facetime, Skype, Zoom, Doxy, and others. Some methods of connecting are more secure than others. For example, both Zoom and Doxy are fully HIPAA compliant, meaning the highest level of security is offered to prevent any possible access by anybody other than the patient and therapist talking with each other. Skype and FaceTime offer less security, but are still acceptable. In some cases, for example, if a patient does not have a computer or smart phone, we can simply have the session conducted by telephone, as this is now permitted under the current health crisis, when normally it is not a covered service. Thus, there are many options available for the therapist to connect with his or her patient. Government regulations have been eased to allow for as much remote therapy as possible",
    rating: 5,
    display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "editform",
    heading: "Form Submition",
    display: false,
    body1:  "Please click on the appropriate link below and the forms will be sent to you within one business day."
  }
];
db.Staff
  .remove({})
  .then(() => db.Staff.collection.insertMany(staffSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into staff!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.Resources
  .remove({})
  .then(() => db.Resources.collection.insertMany(resourcesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into FAQ's!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  db.Products
  .remove({})
  .then(() => db.Products.collection.insertMany(ProductsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into products");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  db.Strains
  .remove({})
  .then(() => db.Strains.collection.insertMany(StrainSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into strains");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });