// Patch: top up each group to exactly 100 words
(function(){
var add = function(g, arr){ SETS[g].push.apply(SETS[g], arr); };

// G2 needs 3 more
add("G2 — Core Verbs",[
{de:"schreiben",ph:"SHRY-ben",en:"to write",s:"Ich muss einen Brief schreiben.",t:"I need to write a letter."},
{de:"hören",ph:"HUH-ren",en:"to hear / listen to",s:"Ich will Musik hören.",t:"I want to listen to music."},
{de:"denken",ph:"DENK-en",en:"to think",s:"Ich muss darüber nachdenken.",t:"I need to think about it."}
]);

// G3 needs 5 more
add("G3 — Daily Life Verbs",[
{de:"rasieren",ph:"rah-ZEER-en",en:"to shave",s:"Er muss sich rasieren.",t:"He needs to shave."},
{de:"kämmen",ph:"KEM-en",en:"to comb",s:"Sie kämmt ihr Haar.",t:"She combs her hair."},
{de:"ruhen",ph:"ROO-en",en:"to rest",s:"Ich muss mich ausruhen.",t:"I need to rest."},
{de:"einkaufen",ph:"INE-kow-fen",en:"to go shopping",s:"Ich gehe einkaufen.",t:"I am going shopping."},
{de:"einschlafen",ph:"INE-shlah-fen",en:"to fall asleep",s:"Ich kann nicht einschlafen.",t:"I cannot fall asleep."}
]);

// G4 needs 8 more
add("G4 — People & Body",[
{de:"Schulter",ph:"SHOOL-ter (die)",en:"shoulder",s:"Meine Schulter tut weh.",t:"My shoulder hurts."},
{de:"Knie",ph:"KNEE (das)",en:"knee",s:"Er hat ein verletztes Knie.",t:"He has an injured knee."},
{de:"Ellbogen",ph:"EL-boh-gen (der)",en:"elbow",s:"Er stößt sich den Ellbogen.",t:"He bumps his elbow."},
{de:"Brust",ph:"BROOST (die)",en:"chest / breast",s:"Meine Brust schmerzt.",t:"My chest hurts."},
{de:"Hals",ph:"HAHLS (der)",en:"throat / neck",s:"Mein Hals ist trocken.",t:"My throat is dry."},
{de:"Lippe",ph:"LIP-eh (die)",en:"lip",s:"Er hat rote Lippen.",t:"He has red lips."},
{de:"Wange",ph:"VAHNG-eh (die)",en:"cheek",s:"Sie hat rosige Wangen.",t:"She has rosy cheeks."},
{de:"Stirn",ph:"SHTIRN (die)",en:"forehead",s:"Er hat eine hohe Stirn.",t:"He has a high forehead."}
]);

// G5 needs 3 more
add("G5 — Places & Environment",[
{de:"Nachbarschaft",ph:"NAHKH-bar-shahft (die)",en:"neighbourhood",s:"Die Nachbarschaft ist ruhig.",t:"The neighbourhood is quiet."},
{de:"Stadtmitte",ph:"SHTAHT-mit-eh (die)",en:"city centre",s:"Wir wohnen in der Stadtmitte.",t:"We live in the city centre."},
{de:"Vorort",ph:"FOR-ort (der)",en:"suburb",s:"Er wohnt im Vorort.",t:"He lives in the suburb."}
]);

// G6 needs 18 more
add("G6 — Objects & Things",[
{de:"Mikrofon",ph:"mik-ro-FON (das)",en:"microphone",s:"Das Mikrofon ist kaputt.",t:"The microphone is broken."},
{de:"Lautsprecher",ph:"LOWT-shprekh-er (der)",en:"speaker",s:"Der Lautsprecher ist laut.",t:"The speaker is loud."},
{de:"Ladekabel",ph:"LAH-deh-kah-bel (das)",en:"charging cable",s:"Ich brauche mein Ladekabel.",t:"I need my charging cable."},
{de:"Sonnenbrille",ph:"ZON-en-bril-eh (die)",en:"sunglasses",s:"Ich trage eine Sonnenbrille.",t:"I wear sunglasses."},
{de:"Kissen",ph:"KIS-en (das)",en:"cushion / pillow",s:"Das Kissen ist weich.",t:"The pillow is soft."},
{de:"Decke",ph:"DEK-eh (die)",en:"blanket / ceiling",s:"Die Decke ist warm.",t:"The blanket is warm."},
{de:"Vorhang",ph:"FOR-hahng (der)",en:"curtain",s:"Der Vorhang ist blau.",t:"The curtain is blue."},
{de:"Motorrad",ph:"MOH-tor-raht (das)",en:"motorcycle",s:"Er fährt ein Motorrad.",t:"He rides a motorcycle."},
{de:"Schiff",ph:"SHIF (das)",en:"ship",s:"Das Schiff ist riesig.",t:"The ship is huge."},
{de:"Straßenbahn",ph:"SHTRAH-sen-bahn (die)",en:"tram",s:"Die Straßenbahn ist pünktlich.",t:"The tram is punctual."},
{de:"Unterwäsche",ph:"OON-ter-veh-sheh (die)",en:"underwear",s:"Ich brauche neue Unterwäsche.",t:"I need new underwear."},
{de:"Hut",ph:"HOOT (der)",en:"hat",s:"Er trägt einen Hut.",t:"He wears a hat."},
{de:"Rock",ph:"ROK (der)",en:"skirt",s:"Sie trägt einen kurzen Rock.",t:"She wears a short skirt."},
{de:"Quittung",ph:"KVIT-oong (die)",en:"receipt",s:"Kann ich eine Quittung haben?",t:"Can I have a receipt?"},
{de:"Steuer",ph:"SHTOY-er (die)",en:"tax",s:"Die Steuer ist hoch.",t:"The tax is high."},
{de:"Versicherung",ph:"fehr-ZI-kher-oong (die)",en:"insurance",s:"Ich habe eine gute Versicherung.",t:"I have good insurance."},
{de:"Flasche",ph:"FLAH-sheh (die)",en:"bottle",s:"Die Flasche ist leer.",t:"The bottle is empty."},
{de:"Dose",ph:"DOH-zeh (die)",en:"can / tin",s:"Ich öffne eine Dose.",t:"I open a can."}
]);

// G7 needs 5 more
add("G7 — Numbers & Time",[
{de:"sechzehn",ph:"ZEKH-tsayn",en:"sixteen (16)",s:"Sie ist sechzehn Jahre alt.",t:"She is sixteen years old."},
{de:"Jahrzehnt",ph:"YAHR-tsaynt (das)",en:"decade",s:"Ein Jahrzehnt hat zehn Jahre.",t:"A decade has ten years."},
{de:"Jahrhundert",ph:"YAHR-hoon-dert (das)",en:"century",s:"Das ist drei Jahrhunderte alt.",t:"That is three centuries old."},
{de:"Wochentag",ph:"VOH-khen-tahg (der)",en:"weekday",s:"Montag ist ein Wochentag.",t:"Monday is a weekday."},
{de:"Kalender",ph:"kah-LEN-der (der)",en:"calendar",s:"Schau in den Kalender.",t:"Look in the calendar."}
]);

// G8 needs 7 more
add("G8 — Adjectives & Colors",[
{de:"riesig",ph:"REE-zig",en:"huge / gigantic",s:"Der Baum ist riesig.",t:"The tree is huge."},
{de:"winzig",ph:"VINT-sig",en:"tiny / minute",s:"Das ist ein winziger Fehler.",t:"That is a tiny mistake."},
{de:"außergewöhnlich",ph:"OWS-er-geh-vun-lish",en:"extraordinary",s:"Er ist außergewöhnlich klug.",t:"He is extraordinarily clever."},
{de:"üblich",ph:"UE-blish",en:"usual / common",s:"Das ist hier üblich.",t:"That is common here."},
{de:"selten",ph:"ZEL-ten",en:"rare / seldom",s:"Das ist sehr selten.",t:"That is very rare."},
{de:"häufig",ph:"HOY-fig",en:"frequent / common",s:"Das ist ein häufiger Fehler.",t:"That is a frequent mistake."},
{de:"regelmäßig",ph:"RAY-gel-meh-sig",en:"regular",s:"Ich lerne regelmäßig.",t:"I study regularly."}
]);

// G9 needs 12 more
add("G9 — Food & Drink",[
{de:"Knäckebrot",ph:"KNEK-eh-broht (das)",en:"crispbread",s:"Ich esse Knäckebrot zum Frühstück.",t:"I eat crispbread for breakfast."},
{de:"Haferflocken",ph:"HAH-fer-flok-en (die)",en:"oats / porridge oats",s:"Haferflocken sind gesund.",t:"Oats are healthy."},
{de:"Müsli",ph:"MUES-lee (das)",en:"muesli",s:"Ich esse Müsli mit Milch.",t:"I eat muesli with milk."},
{de:"Speck",ph:"SHPEK (der)",en:"bacon",s:"Er mag Speck zum Frühstück.",t:"He likes bacon for breakfast."},
{de:"Thunfisch",ph:"TOON-fish (der)",en:"tuna",s:"Ich esse Thunfisch aus der Dose.",t:"I eat tuna from the tin."},
{de:"Brokkoli",ph:"BROK-oh-lee (der)",en:"broccoli",s:"Brokkoli ist reich an Vitaminen.",t:"Broccoli is rich in vitamins."},
{de:"Spinat",ph:"shpee-NAHT (der)",en:"spinach",s:"Ich esse gern Spinat.",t:"I like eating spinach."},
{de:"Birne",ph:"BEER-neh (die)",en:"pear",s:"Die Birne ist sehr süß.",t:"The pear is very sweet."},
{de:"Pfirsich",ph:"PFEER-zish (der)",en:"peach",s:"Der Pfirsich ist reif.",t:"The peach is ripe."},
{de:"Wassermelone",ph:"VAH-ser-meh-loh-neh (die)",en:"watermelon",s:"Wassermelone schmeckt im Sommer.",t:"Watermelon tastes good in summer."},
{de:"Sekt",ph:"ZEKT (der)",en:"sparkling wine",s:"Wir trinken Sekt zum Anstoßen.",t:"We drink sparkling wine for a toast."},
{de:"Frischkäse",ph:"FRISH-kay-zeh (der)",en:"cream cheese",s:"Ich streiche Frischkäse aufs Brot.",t:"I spread cream cheese on the bread."}
]);

// G10 needs 7 more
add("G10 — Grammar Words",[
{de:"ob",ph:"OP",en:"whether / if (indirect question)",s:"Ich weiß nicht, ob er kommt.",t:"I do not know whether he is coming."},
{de:"als",ph:"AHLS",en:"when (past) / as / than",s:"Als ich jung war, lebte ich in Berlin.",t:"When I was young, I lived in Berlin."},
{de:"wie",ph:"VEE",en:"as / like / how",s:"Er ist schnell wie ein Pfeil.",t:"He is fast as an arrow."},
{de:"je",ph:"YAY",en:"ever / each / the (with comparatives)",s:"Je mehr ich lerne, desto besser.",t:"The more I learn, the better."},
{de:"desto",ph:"DES-toh",en:"the (in comparisons)",s:"Je früher, desto besser.",t:"The sooner, the better."},
{de:"sowohl",ph:"ZOH-vohl",en:"both … and (sowohl … als auch)",s:"Sie spricht sowohl Englisch als auch Deutsch.",t:"She speaks both English and German."},
{de:"weder",ph:"VAY-der",en:"neither … nor",s:"Weder er noch sie war da.",t:"Neither he nor she was there."}
]);

})();
