// Define dimensions of the image
var w = 8192,
    h = 6144;

// Calculate center coordinates
var centerX = w / 2,
    centerY = h / 2;

// Initialize the map
var map = L.map('map', {
    minZoom: -2,
    maxZoom: 0,
    crs: L.CRS.Simple,
    maxBounds: [[-h, -w], [h, w]] // Set maximum bounds to the image dimensions
}).setView([centerY, centerX], -100); // Set an appropriate zoom level here

// Add the custom map image as an overlay
L.imageOverlay('images/whole map.png', [[-h, -w], [h, w]]).addTo(map);

// Enable scroll wheel zoom
map.scrollWheelZoom.enable();

// Define a custom icon for the marker
var customIcon = L.icon({
    iconUrl: 'images/image.png',
    iconSize: [75, 75], // Size of the icon
    iconAnchor: [75/2, 75/2], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var lordOfTheSea = L.icon({
    iconUrl: 'images/monsters-gifs/lordofthecoast.gif',
    iconSize: [150,150], // Size of the icon
    iconAnchor: [125, 125], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var Merry = L.icon({
    iconUrl: 'images/boats-gifs/merry.gif',
    iconSize: [300,200], // Size of the icon
    iconAnchor: [150, 100], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var Alvida = L.icon({
    iconUrl: 'images/boats-gifs/alvida.gif',
    iconSize: [170,150], // Size of the icon
    iconAnchor: [85, 75], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var Mihawk = L.icon({
    iconUrl: 'images/boats-gifs/mihawk.gif',
    iconSize: [250,220], // Size of the icon
    iconAnchor: [125, 110], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var donkrieg = L.icon({
    iconUrl: 'images/boats-gifs/donkrieg.gif',
    iconSize: [210,180], // Size of the icon
    iconAnchor: [125, 110], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var baratie = L.icon({
    iconUrl: 'images/boats-gifs/baratie.gif',
    iconSize: [250,220], // Size of the icon
    iconAnchor: [125, 110], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var goatIsland = L.icon({
    iconUrl: 'images/islands-gifs/goatisland.gif',
    iconSize: [150,130], // Size of the icon
    iconAnchor: [75, 65], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var sixisIsland = L.icon({
    iconUrl: 'images/islands-gifs/sixis_island.gif',
    iconSize: [150,130], // Size of the icon
    iconAnchor: [75, 65], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var windmill = L.icon({
    iconUrl: 'images/islands-gifs/windmill.gif',
    iconSize: [200,170], // Size of the icon
    iconAnchor: [100, 85], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var cozia = L.icon({
    iconUrl: 'images/islands-gifs/cozia_island.gif',
    iconSize: [150,120], // Size of the icon
    iconAnchor: [75, 60], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var kumate = L.icon({
    iconUrl: 'images/islands-gifs/kumate_island.gif',
    iconSize: [220,190], // Size of the icon
    iconAnchor: [110, 95], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var mirrorball = L.icon({
    iconUrl: 'images/islands-gifs/mirrorballisland.gif',
    iconSize: [220,190], // Size of the icon
    iconAnchor: [110, 95], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var oykor = L.icon({
    iconUrl: 'images/islands-gifs/oykor_kingdom.gif',
    iconSize: [220,190], // Size of the icon
    iconAnchor: [110, 95], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var shimotsuki = L.icon({
    iconUrl: 'images/islands-gifs/shimotsuki.gif',
    iconSize: [220,190], // Size of the icon
    iconAnchor: [110, 95], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var shellstown = L.icon({
    iconUrl: 'images/islands-gifs/shellstown.gif',
    iconSize: [180,160], // Size of the icon
    iconAnchor: [110, 95], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var goza = L.icon({
    iconUrl: 'images/islands-gifs/goza.gif',
    iconSize: [160,120], // Size of the icon
    iconAnchor: [80, 70], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var ira = L.icon({
    iconUrl: 'images/islands-gifs/ira.gif',
    iconSize: [180,140], // Size of the icon
    iconAnchor: [80, 70], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var orange = L.icon({
    iconUrl: 'images/islands-gifs/orangetown.gif',
    iconSize: [200,160], // Size of the icon
    iconAnchor: [100, 120], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var syrup = L.icon({
    iconUrl: 'images/islands-gifs/syrupvillage.gif',
    iconSize: [180,140], // Size of the icon
    iconAnchor: [90, 70], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var logue = L.icon({
    iconUrl: 'images/islands-gifs/loguetown.gif',
    iconSize: [200,160], // Size of the icon
    iconAnchor: [100, 80],  // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var coco = L.icon({
    iconUrl: 'images/islands-gifs/cocoyashi.gif',
    iconSize: [180,140], // Size of the icon
    iconAnchor: [90, 70],  // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var arlong = L.icon({
    iconUrl: 'images/islands-gifs/arlong.gif',
    iconSize: [140,120], // Size of the icon
    iconAnchor: [90, 70],   // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var pato = L.icon({
    iconUrl: 'images/monsters-gifs/duck.gif',
    iconSize: [190, 160], // Size of the icon
    iconAnchor: [75, 75], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var crocgreen = L.icon({
    iconUrl: 'images/monsters-gifs/croco_green.gif',
    iconSize: [300, 300], // Size of the icon
    iconAnchor: [150, 150], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var momoo = L.icon({
    iconUrl: 'images/monsters-gifs/moo.gif',
    iconSize: [200, 170], // Size of the icon
    iconAnchor: [100, 85], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var laboon = L.icon({
    iconUrl: 'images/monsters-gifs/laboon.gif',
    iconSize: [240, 170], // Size of the icon
    iconAnchor: [165, 125], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var zebra = L.icon({
    iconUrl: 'images/monsters-gifs/zebra.gif',
    iconSize: [250, 150], // Size of the icon
    iconAnchor: [165, 125], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

 var popupContentArray = [ //array with all popup contents 
    {name: 'Shellstown',id:'popupContent1',sound:'sounds/shellstown.mp3', coordX: centerX-100, coordY: centerY, icon: shellstown, body:'<div id="sidebar1"></div>',image:'images/shellstown.png',description:"Shells Town, situated in the Yotsuba Island Region, serves as a crucial locale in the early stages of the One Piece narrative. The 153rd Branch symbolizes authority but also oppression. Monkey D. Luffy's intervention disrupts Morgan's tyranny, the 'Pirate Hunter.' Captain Morgan faces defeat by Luffy and Zoro, catalyzing change in Shells Town. Helmeppo undergoes redemption alongside Koby, offering insights into the complexities of the One Piece world.", clickable:true},
    {name: 'Goat Island',id:'popupContent2',sound:'', coordX: centerX+500, coordY: centerY-350, icon: goatIsland, body:'<div id="sidebar2"></div>',image:'images/goat island.png',description:"Goat Island served as the meeting ground for Luffy and Coby. Initially a stopover for the Alvida Pirates, Luffy liberated Coby from his servitude, forging their bond. The island's primary figure, 'Iron Mace' Alvida, posed as Luffy's first antagonist at sea, casting a shadow over his journey. After Luffy's defeat of Alvida, she formed an alliance with Buggy. Goat Island stands as a pivotal setting, shaping Luffy's journey and establishing key alliances and conflicts in the early arcs of One Piece.", clickable:true},
    {name: 'Windmill Village',id:'popupContent3',sound:'', coordX: centerX+1200, coordY: centerY-700, icon: windmill, body:'<div id="sidebar3"></div>',image:'images/windmill.png',description:"Windmill Village serves as the serene beginning of the One Piece saga.<br> Partys Bar, managed by Makino, stands as a social hub. The village witnessed the introduction of the legendary pirate Shanks and the dramatic encounter with the bandit Higuma. It's where Monkey D. Luffy gained extraordinary powers by consuming the Gomu Gomu no Mi. Windmill Village holds special significance for Luffy, being his hometown and where he first encountered Shanks, setting him on his path to becoming a renowned pirate.", clickable:true},
    {name: 'Shimotsuki Village',id:'popupContent4',sound:'', coordX: centerX+1700, coordY: centerY-4050, icon: shimotsuki, body:'<div id="sidebar3"></div>',image:'images/shimotsuki.png',description:"Shimotsuki Village, situated in East Blue, holds significance as Roronoa Zoro's hometown. Founded by pirates roughly 55 years ago, it was named after Shimotsuki Kozaburo, a member of the Shimotsuki Family from Wano Country and one of the village's founders. The village is central to Zoro's backstory, particularly his rivalry with Kuina, daughter of the local dojo master, and their shared dream of becoming the world's greatest swordsman.", clickable:true},
    {name: 'Sixis Island',id:'popupContent5',sound:'', coordX: centerX-150, coordY: centerY-5500, icon: sixisIsland, body:'<div id="sidebar3"></div>',image:'images/sixis.png',description:"Sixis Island, located in East Blue, marks the starting point of Ace's journey. Three years before the series began, Portgas D. Ace and Masked Deuce found themselves stranded on Sixis with no means of escape. During their time on the island, Deuce learned about Ace's heritage, causing a rift between them. When faced with starvation, Deuce attempted to take Ace's food by force, but Ace's generosity in sharing it repaired their relationship. Upon realizing the fruit's significance, they constructed a raft together to depart the island.", clickable:true},
    {name: 'Momoo',id:'popupContent6',sound:'sounds/monsters/momoo.wav', coordX: centerX-8600, coordY: centerY-1900, icon: momoo, body:'<div id="sidebar3"></div>',image:'images/momoo.png',description:"Momoo, a giant sea cow hailing from the Grand Line, stands as the first Sea Beast introduced in the series. Classified as a Type A creature, 'Big Friendly', Momoo was initially employed by the Arlong Pirates to intimidate the residents of the Conomi Islands. Following Arlong's defeat, Momoo was captured and repurposed as a draft animal by the Caribou Pirates.", clickable:true},
    {name: 'Lord of the Coast',id:'popupContent7',sound:'sounds/monsters/lord_of_the_coast.mp3', coordX: centerX+1200, coordY: centerY-1550, icon: lordOfTheSea, body:'<div id="sidebar3"></div>',image:'images/gomu_gomu_no_pistol.png',description:"The Lord of the Coast, a fearsome Sea King near Dawn Island, menaced Windmill Village, infamous for attacking humans. It clashed with renowned pirates like Shanks, costing him his arm while protecting young Luffy. Shanks' Haoshoku Haki intimidated the creature, showing its vulnerability. As Luffy grew, he defeated the Sea King effortlessly. The creature's encounter with Higuma ended tragically, with the bandit being swallowed. When Luffy set sail, the Sea King tried again but was swiftly defeated by Luffy's Gomu Gomu no Pistol. This marked another failed attempt to prey on Luffy, solidifying his reputation. ", clickable:true},
    {name: 'Loguetown',id:'popupContent8',sound:'', coordX: centerX-9750, coordY: centerY-6000, icon: logue, body:'<div id="sidebar3"></div>',image:'images/loguetown.png',description:"Loguetown, located on the Polestar Islands in the East Blue, occupies nearly the entirety of its island, with only a few steep hills remaining untouched. Renowned for its strategic location near Reverse Mountain and the Red Line, Loguetown serves as a crucial resupply point for ships venturing into the Grand Line, attracting numerous vessels, especially pirate ships. The city holds historical significance as both the birthplace and the execution site of former Pirate King Gol D. Roger, earning it the epithet 'the town of the beginning and the end.'", clickable:true},
    {name: 'Orange Town',id:'popupContent9',sound:'', coordX: centerX-2400, coordY: centerY-1940, icon: orange, body:'<div id="sidebar3"></div>',image:'images/orange.png',description:"Orange Town, a village enduring four decades, was central in the Orange Town Arc of One Piece. Ruled oppressively by the Buggy Pirates, led by Buggy the clown, until Monkey D. Luffy's intervention. With Mayor Boodle at the helm, Orange Town struggled until Luffy challenged Buggy. Nami, seeking treasure, joined forces with the Straw Hat Pirates for freedom. Amidst chaos caused by Buggy's cannonballs, bonds formed with Chouchou and Mayor Boodle. Luffy, Zoro, and Nami led the counterattack, shifting the tide. Despite misunderstandings, Luffy's generosity aided Orange Town's recovery, sparking hope anew.", clickable:true},
    {name: 'Cocoyasi Village',id:'popupContent10',sound:'', coordX: centerX-7900, coordY: centerY-2300, icon: coco, body:'<div id="sidebar3"></div>',image:'images/cocoyasi.png',description:"Cocoyasi Village, located on the Conomi Islands, is where Nami and her sister Nojiko grew up under the care of Bell-mère. The village is in close proximity to Arlong Park and serves as the residence for many key characters from the Arlong Park Arc. When the Straw Hat Pirates arrived, Cocoyasi Village faced the threat of destruction similar to Gosa Village. Following Arlong's defeat, the village became the site of a celebratory gathering.", clickable:true},
    {name: 'Mihawk',id:'popupContent11',sound:'', coordX: centerX-3350, coordY: centerY-5200, icon: Mihawk, body:'<div id="sidebar3"></div>',image:'images/mihawk.png',description:"Dracule Mihawk stands as a legendary figure in the world of One Piece, renowned as the 'Greatest Swordsman in the World'. With his elegant yet deadly swordsmanship and the iconic black blade Yoru at his side, Mihawk is a force to be reckoned with on any battlefield. His stoic demeanor and solitary lifestyle on the secluded Kuraigana Island add an air of mystery to his character, as he remains largely removed from the chaos of the pirate world. Despite his status as a former Warlord of the Sea, Mihawk's true motivations and allegiances often remain shrouded in secrecy, leaving many to wonder about the depths of his intentions.", clickable:true},
    {name: 'Goza Village',id:'popupContent12',sound:'', coordX: centerX-7300, coordY: centerY-1820, icon: goza, body:'<div id="sidebar3"></div>',image:'images/gosa.png',description:"Gosa Village, situated near Cocoyasi Village in the Conomi Islands region, suffered under the oppressive rule of the Arlong Pirates. Due to their inability to meet Arlong's tribute demands, the village was devastated by Momoo, a giant sea cow owned by the Arlong Pirates. Chabo is the sole known inhabitant of the village. Survivors of the destruction sought aid from the Marines' 77th Branch, led by Commodore Pudding Pudding, but their rescue efforts failed. Following the defeat of the Arlong Pirates by the Straw Hat Pirates, Nami demanded that Nezumi's 16th Branch reconstruct Gosa Village as part of the reparations.", clickable:true},
    {name: 'Arlong Park',id:'popupContent13',sound:'', coordX: centerX-8025, coordY: centerY-1825, icon: arlong, body:'<div id="sidebar3"></div>',image:'images/arlong.png',description:"Arlong Park, situated on the Conomi Islands, serves as the headquarters of the Arlong Pirates and the central setting for the Arlong Park Arc. This imposing structure looms over the nearby Cocoyasi Village, embodying the oppressive regime of its leader, Arlong. The park's significance extends beyond its physical presence, representing the enduring struggle against tyranny and injustice in the East Blue. It is here that the Straw Hat Pirates confront Arlong and his crew in a pivotal battle that ultimately leads to the liberation of Nami's home and the triumph of justice over oppression.", clickable:true},
    {name: 'Going Merry',id:'popupContent14',sound:'', coordX: centerX-4100, coordY: centerY-3000, icon: Merry, body:'<div id="sidebar3"></div>',image:'images/merry.png',description:"The Going Merry was the first full-sized ship owned by the Straw Hat Pirates, serving as their main transportation from the East Blue to the Grand Line until Water 7. Affectionately referred to as simply 'Merry' by the crew, it was originally designed by Kaya's servant Merry and gifted to the Straw Hats for defending Syrup Village against the Black Cat Pirates. Over time, it became beloved by the crew as both a home and a friend, eventually developing a life of its own and becoming a genuine member of the crew.", clickable:true},
    {name: 'Syrup Village',id:'popupContent15',sound:'', coordX: centerX-4935, coordY: centerY-2475, icon: syrup, body:'<div id="sidebar3"></div>',image:'images/syrup.png',description:"Syrup Village, situated on the Gecko Islands and birthplace of Usopp, exudes peace and tranquility. In the Syrup Village Arc, Luffy, Zoro, and Nami encounter Usopp, the local storyteller, and become embroiled in a plot against his friend Kaya. They join forces to thwart Captain Kuro and gain a new crew member in Usopp. The arc culminates in the acquisition of the Going Merry, marking the beginning of the Straw Hats' adventures with their new ship.", clickable:true},
    {name: 'Kumate Island',id:'popupContent16',sound:'', coordX: centerX+50, coordY: centerY-3100, icon: kumate, body:'<div id="sidebar3"></div>',image:'images/kumate.jpg',description:"Kumate Island, situated in the East Blue, serves as the home of the Kumate Tribe. After being expelled from Orange Town, the Buggy Pirates, lacking their captain, find refuge on Kumate Island, where they hold a funeral for him. Richie is then promoted to captain, but the crew soon encounters the Kumate Tribe. Meanwhile, Buggy and Alvida stumble upon Kumate Island, recognizing Buggy's ship ashore. They rescue the stranded pirate crew from the clutches of the Kumate Tribe before departing the island.", clickable:true},
    {name: 'Mirror Ball Island',id:'popupContent17',sound:'', coordX: centerX-5000, coordY: centerY-850, icon: mirrorball, body:'<div id="sidebar3"></div>',image:'images/mirrorball.png',description:"Mirror Ball Island features in the 'Jango's Dance Paradise' Cover Story. After departing from Syrup Village, Jango seeks refuge on Mirror Ball Island, only to find the Marines already searching for him. To evade capture, Jango disguises himself and participates in the island's dance competition, which he ultimately wins. During his time on the island, he befriends Fullbody, a Marine and fellow competitor. However, their camaraderie is tested when the Tulip Pirates attack. Despite their efforts, the pirates gain the upper hand by taking a woman hostage. Upon Jango's return and subsequent rescue of the hostage, he and Fullbody team up to defeat the pirates and save the island. However, Fullbody later arrests Jango for his past crimes.", clickable:true}, 
    {name: 'Cozia Island',id:'popupContent18',sound:'', coordX: centerX-9100, coordY: centerY-550, icon: cozia, body:'<div id="sidebar3"></div>',image:'images/cozia.png',description:"Cozia Island, situated in the East Blue, fell victim to an attack by Germa 66 thirteen years ago. During this assault, Germa 66, originating from the North Blue, crossed into the East Blue to target the island. The exact outcome of the battle remains unknown. Notably, it was on Cozia Island that Sanji managed to escape from his family and board the Orbit, marking a significant turning point in his life.", clickable:true},
    {name: 'Oykot Kingdom',id:'popupContent19',sound:'sounds/oykot.mp3', coordX: centerX-6000, coordY: centerY-5800, icon: oykor, body:'<div id="sidebar3"></div>',image:'images/oykot.png',description:"The Oykot Kingdom, situated in the East Blue, serves as the backdrop for the fateful meeting between Bell-mère, Nami, and Nojiko. Two decades ago, the kingdom faced an attack by pirates, prompting the Marines to dispatch Bell-mère and her unit for rescue operations. Amidst the turmoil, Bell-mère, grappling with despair, was prepared to accept defeat until Nojiko arrived, holding an infant Nami. Moved by their plight, Bell-mère chose to adopt the girls and bring them to her hometown, marking the beginning of their new family.", clickable:true},  
    {name: 'o pato',id:'popupContent20',sound:'', coordX: centerX-7000, coordY: centerY-4000, icon: pato, body:'',image:'https://media.tenor.com/MVpfNx2QgFwAAAAM/skeleton.gif',description:'Can i put my tea in your plate', clickable:false},  
    {name: 'Baratie',id:'popupContent21',sound:'', coordX: centerX-2600, coordY: centerY-5100, icon: baratie, body:'<div id="sidebar3"></div>',image:'images/baratie.png',description:"The Baratie, an ocean-going restaurant operated by Zeff, is located in the Sambas Region of the East Blue, near the entrance of the Grand Line. In the Baratie Arc, the restaurant is attacked by the Krieg Pirates after Sanji offers food to Gin. Gin, in response, brings the starving armada to the Baratie. Despite Zeff's hospitality towards Krieg, the pirate attempts to capture the Baratie to use as a disguise for future attacks. The restaurant's cooks prepare to defend against Krieg and his armada, known as the Wolves of the Sea. Meanwhile, a fierce battle ensues between Krieg and Luffy, leading to the successful defense of the Baratie. Additionally, during this arc, there is a notable encounter between Mihawk and Zoro, where Mihawk showcases his unparalleled swordsmanship, leaving a lasting impression on Zoro.", clickable:true},
    {name: 'Alvida',id:'popupContent22',sound:'', coordX: centerX+200, coordY: centerY-675, icon: Alvida, body:'<div id="sidebar1"></div>',image:'images/alvida.png',description:"Alvida, a prominent figure in the early stages of the One Piece series, is a pirate whose presence commands attention both for her physical size and her boisterous personality. Gifted with the Slip-Slip Fruit, she possesses the unique ability to glide through attacks effortlessly, making her a formidable opponent on the high seas. Despite her imposing appearance, Alvida's vanity often takes center stage, as she obsessively pursues beauty and youth, believing herself to be the epitome of both. Her ambition to find the legendary treasure, One Piece, fuels her piracy career, driving her to seek dominance over the vast expanse of the ocean.", clickable:true},
    {name: 'Don Krieg',id:'popupContent23',sound:'', coordX: centerX-3300, coordY: centerY-4600, icon: donkrieg, body:'<div id="sidebar3"></div>',image:'images/Don-Krieg-Cropped.png',description:"Don Krieg, the merciless captain of the Krieg Pirates, is a notorious figure whose thirst for power and conquest knows no bounds. Armed to the teeth with an arsenal of weapons and a fleet of ships, he terrorizes the seas with ruthless efficiency. With his Iron Mace, Poison Gas Bombs, and myriad other deadly weapons, Krieg strikes fear into the hearts of both pirates and civilians alike. His insatiable desire for dominance leads him to clash with numerous adversaries, including the Straw Hat Pirates, as he seeks to expand his influence and amass wealth. Despite his formidable arsenal and strategic cunning, Krieg's arrogance and overconfidence often prove to be his downfall, as he underestimates the resilience and resourcefulness of his opponents. Nevertheless, his legacy as a relentless and unyielding pirate captain cements his place in the annals of One Piece history, serving as a cautionary tale of the dangers of unchecked ambition.", clickable:true},
    {name: 'green croc',id:'popupContent24',sound:'', coordX: centerX-2300, coordY: centerY-3600, icon: crocgreen, body:'<div id="sidebar3"></div>',image:'https://media.tenor.com/MVpfNx2QgFwAAAAM/skeleton.gif',description:'Can i put my tea in your plate', clickable:false},
    {name: 'Laboon',id:'popupContent25',sound:'sounds/monsters/laboon.mp3', coordX: centerX-9600, coordY: centerY-8800, icon: laboon, body:'<div id="sidebar3"></div>',image:'images/laboon.png',description:"Laboon, an Island Whale native to the West Blue, serves as a significant encounter for the Straw Hat Pirates upon entering the Grand Line. Classified as a Type A creature, 'Big Friendly', Laboon stands at the pinnacle of both size and friendliness scales. Separated from his pod as a baby, Laboon became a companion of the Rumbar Pirates, who promised to return for him. Under the care of Crocus, Laboon awaits their return, making it Brook's ultimate goal to reunite with him. Laboon's presence within Reverse Mountain's innards makes him a primary setting for the events of the Reverse Mountain Arc, alongside the Twin Cape.", clickable:true},
    {name: 'Island of Rare Animals',sound:'',id:'popupContent26', coordX: centerX-2500, coordY: centerY-2940, icon: ira, body:'<div id="sidebar3"></div>',image:'images/rare animals.png',description:"The Island of Rare Animals, also called the Legendary Treasure Island, is a unique locale in the East Blue characterized by its population of bizarre 'hybrid' animals. With only two human inhabitants, Gaimon and Sarfunkel, it stands as a mysterious and intriguing destination in the One Piece world.", clickable:true},
    {name: 'zebra',id:'popupContent27',sound:'', coordX: centerX-3000, coordY: centerY+400, icon: zebra, body:'<div id="sidebar3"></div>',image:'https://media.tenor.com/MVpfNx2QgFwAAAAM/skeleton.gif',description:'Can i put my tea in your plate', clickable:false},
]; 


 for (var i = 0; i < popupContentArray.length; i++) {
    var popupContent = popupContentArray[i];
    if (popupContent.clickable == true) {
        var marker = L.marker([popupContent.coordY, popupContent.coordX], {icon:popupContent.icon})
        .addTo(map)
        .bindPopup(popupContent.body);
        marker._icon.id = popupContent.id;
        
    } else if (popupContent.clickable == false){
        var markerNoClick = L.marker([popupContent.coordY, popupContent.coordX], {icon:popupContent.icon})
        .addTo(map);
        
        markerNoClick._icon.id = popupContent.id;
        
    }
    
 }
