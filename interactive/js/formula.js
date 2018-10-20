function calculateGarbage(area, height, weightToVolumn, growthRate, wastePerCapita, population) {
  return Math.floor(
    Math.log(
      1 -
        (area * height * 1000 * 1000 * weightToVolumn * (1 - growthRate)) /
          (wastePerCapita * population)
    ) / Math.log(growthRate)
  );
}

// countrycode,population, area(m2),waste per capita(kg/year), default year
// other inputs: growthRate = 1.02, weightToVolumn = 300, height = 1 (m)
var defaultData = [
  ['ABW', 71566, 193, 1231, 134],
  ['AFG', 29121286, 647500, 193, 330],
  ['AGO', 13068161, 1246700, 322, 378],
  ['ALB', 2986952, 28748, 383, 254],
  ['AND', 84000, 468, 512, 212],
  ['ARE', 4975593, 82880, 1088, 229],
  ['ARG', 41343201, 2766890, 433, 345],
  ['ARM', 2968000, 29800, 166, 298],
  ['ASM', 57881, 199, 328, 210],
  ['ATG', 86754, 443, 353, 226],
  ['AUS', 21515754, 7686850, 620, 411],
  ['AUT', 8205000, 83858, 589, 235],
  ['AZE', 8303512, 86600, 353, 262],
  ['BDI', 9863117, 27830, 190, 227],
  ['BEL', 10403000, 30510, 453, 186],
  ['BEN', 9056010, 112620, 76, 348],
  ['BFA', 16241811, 274200, 159, 326],
  ['BGD', 156118464, 144000, 95, 206],
  ['BGR', 7148785, 110910, 421, 273],
  ['BHR', 738004, 665, 1290, 83],
  ['BHS', 301790, 13940, 875, 291],
  ['BIH', 4590000, 51129, 272, 278],
  ['BLR', 9685000, 207600, 442, 287],
  ['BLZ', 314522, 22966, 322, 364],
  ['BMU', 65365, 53, 1254, 80],
  ['BOL', 9947418, 1098580, 223, 404],
  ['BRA', 201103330, 8511965, 397, 326],
  ['BRB', 285653, 431, 612, 139],
  ['BRN', 395027, 5770, 547, 257],
  ['BTN', 699847, 47000, 159, 396],
  ['BWA', 2029307, 600370, 104, 492],
  ['CAF', 4844927, 622984, 228, 410],
  ['CAN', 33679000, 9984670, 745, 393],
  ['CHE', 7581000, 41290, 799, 189],
  ['CHL', 16746491, 756950, 389, 331],
  ['CHN', 1330044000, 9596960, 158, 284],
  ['CIV', 21058798, 322460, 211, 307],
  ['CMR', 19294149, 475440, 170, 342],
  ['COD', 70916439, 2345410, 203, 348],
  ['COG', 3039126, 342000, 148, 425],
  ['COL', 47790000, 1138910, 254, 320],
  ['COM', 773407, 2170, 118, 251],
  ['CPV', 508659, 4033, 261, 263],
  ['CRI', 4516220, 51100, 323, 270],
  ['CUB', 11423000, 110860, 236, 278],
  ['CUW', 141766, 444, 174, 237],
  ['CYM', 44270, 262, 1355, 167],
  ['CYP', 1102677, 9250, 491, 234],
  ['CZE', 10476000, 78866, 319, 250],
  ['DEU', 81802257, 357021, 624, 190],
  ['DJI', 740528, 23000, 155, 358],
  ['DMA', 72813, 754, 181, 295],
  ['DNK', 5484000, 43094, 818, 206],
  ['DOM', 9823821, 48730, 414, 217],
  ['DZA', 34586184, 2381740, 358, 356],
  ['ECU', 14790608, 283560, 358, 292],
  ['EGY', 80471869, 1001450, 261, 286],
  ['ERI', 5792984, 121320, 125, 349],
  ['ESP', 46505963, 504782, 433, 253],
  ['EST', 1291170, 45226, 366, 321],
  ['ETH', 88013491, 1127127, 74, 351],
  ['FIN', 5244000, 337030, 522, 334],
  ['FJI', 875983, 18270, 216, 321],
  ['FRA', 64768389, 547030, 516, 232],
  ['FRO', 48228, 1399, 1265, 249],
  ['FSM', 107708, 702, 242, 257],
  ['GAB', 1545255, 267667, 154, 445],
  ['GBR', 62348447, 244820, 506, 195],
  ['GEO', 4630000, 69700, 173, 316],
  ['GHA', 24339838, 239460, 145, 304],
  ['GIB', 27884, 7, 608, 63],
  ['GIN', 10324025, 245857, 58, 394],
  ['GMB', 1593256, 11300, 121, 296],
  ['GNB', 1565126, 36120, 185, 334],
  ['GNQ', 1014999, 28051, 196, 340],
  ['GRC', 11000000, 131940, 498, 251],
  ['GRD', 107818, 344, 274, 215],
  ['GRL', 56375, 2166086, 887, 630],
  ['GTM', 13550440, 108890, 203, 276],
  ['GUM', 159358, 549, 888, 161],
  ['GUY', 748486, 214970, 239, 449],
  ['HKG', 6898686, 1092, 823, 39],
  ['HND', 7989415, 112090, 271, 290],
  ['HRV', 4491000, 56542, 368, 269],
  ['HTI', 9648924, 27750, 239, 217],
  ['HUN', 9982000, 93030, 372, 253],
  ['IDN', 242968342, 1919440, 268, 262],
  ['IMN', 75049, 572, 674, 214],
  ['IND', 1173108018, 3287590, 144, 241],
  ['IRL', 4622917, 70280, 582, 256],
  ['IRN', 76923300, 1648000, 233, 319],
  ['IRQ', 29671605, 437072, 443, 268],
  ['ISL', 308910, 103000, 1700, 357],
  ['ISR', 7353985, 20770, 734, 161],
  ['ITA', 60340328, 301230, 489, 209],
  ['JAM', 2847232, 10991, 369, 210],
  ['JOR', 6407085, 92300, 395, 272],
  ['JPN', 127288000, 377835, 346, 200],
  ['KAZ', 15340000, 2717300, 304, 412],
  ['KEN', 40046566, 582650, 140, 325],
  ['KGZ', 5508626, 198500, 202, 352],
  ['KHM', 14453680, 181040, 75, 349],
  ['KIR', 92533, 811, 386, 249],
  ['KNA', 51134, 261, 643, 196],
  ['KOR', 48422644, 98480, 376, 177],
  ['KWT', 2789132, 17820, 627, 209],
  ['LAO', 6368162, 236800, 55, 420],
  ['LBN', 4125247, 10400, 495, 174],
  ['LBR', 3685076, 111370, 153, 357],
  ['LBY', 6461454, 1759540, 332, 429],
  ['LCA', 160922, 616, 482, 196],
  ['LIE', 35000, 160, 925, 173],
  ['LKA', 21513990, 65610, 122, 253],
  ['LSO', 1919552, 30355, 38, 395],
  ['LTU', 2944459, 65200, 442, 288],
  ['LUX', 497538, 2586, 716, 192],
  ['LVA', 2217969, 64589, 386, 309],
  ['MAC', 449198, 254, 841, 82],
  ['MAF', 35925, 53, 431, 155],
  ['MAR', 31627428, 446550, 217, 301],
  ['MCO', 32965, 2, 1395, 12],
  ['MDA', 4324000, 33843, 921, 200],
  ['MDG', 21281844, 587040, 177, 345],
  ['MDV', 395650, 300, 535, 114],
  ['MEX', 112468855, 1972550, 472, 273],
  ['MHL', 65859, 181, 131, 245],
  ['MKD', 2062294, 25333, 386, 265],
  ['MLI', 13796354, 1240000, 140, 417],
  ['MLT', 403000, 316, 667, 105],
  ['MMR', 53414374, 678500, 88, 342],
  ['MNE', 666730, 14026, 498, 280],
  ['MNG', 3086918, 1565000, 939, 408],
  ['MNP', 53883, 477, 608, 226],
  ['MOZ', 22061451, 801590, 113, 382],
  ['MRT', 3205060, 1030700, 142, 481],
  ['MUS', 1294104, 2040, 338, 170],
  ['MWI', 15447500, 118480, 84, 319],
  ['MYS', 28274729, 329750, 459, 254],
  ['NAM', 2128471, 825418, 121, 498],
  ['NCL', 216494, 19060, 500, 352],
  ['NER', 15878271, 1267000, 117, 420],
  ['NGA', 154000000, 923768, 179, 268],
  ['NIC', 5995928, 129494, 255, 315],
  ['NLD', 16645000, 41526, 532, 170],
  ['NOR', 5009150, 324220, 437, 343],
  ['NPL', 28951852, 140800, 61, 312],
  ['NRU', 10065, 21, 615, 155],
  ['NZL', 4252277, 268680, 801, 311],
  ['OMN', 2967717, 212460, 585, 333],
  ['PAK', 184404791, 803940, 167, 256],
  ['PAN', 3410676, 78200, 432, 291],
  ['PER', 29907003, 1285220, 279, 345],
  ['PHL', 99900177, 300000, 146, 244],
  ['PLW', 19907, 458, 474, 287],
  ['PNG', 6064515, 462840, 165, 400],
  ['POL', 38500000, 312685, 282, 260],
  ['PRI', 3916632, 9104, 1065, 134],
  ['PRT', 10676000, 92391, 441, 241],
  ['PRY', 6375830, 406750, 285, 364],
  ['PSE', 3800000, 5970, 365, 166],
  ['PYF', 270485, 4167, 543, 260],
  ['QAT', 840926, 11437, 1190, 214],
  ['ROU', 21959278, 237500, 223, 287],
  ['RUS', 140702000, 17100000, 426, 376],
  ['RWA', 11055976, 26338, 397, 182],
  ['SAU', 25731776, 1960582, 627, 333],
  ['SDN', 35000000, 1861484, 81, 418],
  ['SEN', 12323252, 196190, 199, 312],
  ['SGP', 4701069, 693, 1639, 22],
  ['SLB', 559198, 28450, 322, 346],
  ['SLE', 5245695, 71740, 116, 331],
  ['SLV', 6052064, 21040, 272, 220],
  ['SMR', 31477, 61, 546, 157],
  ['SOM', 10112453, 637657, 230, 374],
  ['SRB', 7344847, 88361, 251, 286],
  ['SSD', 8260490, 644329, 325, 367],
  ['STP', 175808, 1001, 146, 276],
  ['SUR', 492829, 163270, 160, 476],
  ['SVK', 5455000, 48845, 327, 258],
  ['SVN', 2007000, 20273, 461, 247],
  ['SWE', 9555893, 449964, 458, 325],
  ['SWZ', 1354051, 17363, 161, 312],
  ['SYC', 88340, 455, 543, 205],
  ['SYR', 22198110, 185180, 203, 278],
  ['TCD', 10543464, 1284000, 129, 436],
  ['TGO', 6587239, 56785, 168, 290],
  ['THA', 67089500, 514000, 400, 240],
  ['TJK', 7487489, 143100, 239, 312],
  ['TKM', 4940916, 488100, 101, 438],
  ['TLS', 1154625, 15007, 55, 366],
  ['TON', 122580, 748, 141, 281],
  ['TTO', 1228691, 5128, 592, 190],
  ['TUN', 10589025, 163610, 255, 298],
  ['TUR', 77804122, 780580, 402, 253],
  ['TUV', 10472, 26, 381, 186],
  ['TWN', 22894384, 35980, 320, 173],
  ['TZA', 41892895, 945087, 221, 324],
  ['UGA', 33398682, 236040, 211, 268],
  ['UKR', 45415596, 603700, 336, 276],
  ['URY', 3477000, 176220, 362, 340],
  ['USA', 310232863, 9629091, 832, 273],
  ['UZB', 27865738, 447400, 144, 329],
  ['VCT', 104217, 389, 303, 218],
  ['VEN', 27223228, 912050, 359, 320],
  ['VGB', 21730, 153, 971, 192],
  ['VIR', 108708, 352, 1348, 138],
  ['VNM', 89571130, 329560, 107, 269],
  ['VUT', 221552, 12200, 317, 351],
  ['WSM', 192001, 2944, 143, 327],
  ['XKX', 1800000, 10887, 177, 269],
  ['YEM', 23495361, 527970, 206, 328],
  ['ZAF', 49000000, 1219912, 377, 302],
  ['ZMB', 13460305, 752614, 194, 377],
  ['ZWE', 11651858, 390580, 124, 373],
];
