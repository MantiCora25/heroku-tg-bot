//бота можно найти в Telegram: @infocountry_bot

const TelegramBot = require('node-telegram-bot-api');
const countries = require('./countries.js');
const capitals = require('./capitals.js');
const TOKEN = require('./token.js');

console.log('started...')

const bot = new TelegramBot(TOKEN, {                        // создание бота
    polling : {
        interval : 300,
        autoStart : true,
        params : {
            timeout : 10
        }
    }
});



/*________________________________________________________________________________________________*/


/*
bot.onText(/\/start/, msg => {                              // бот здоровается с пользователем при команде /start
    const {id} = msg.chat;
    bot.sendMessage(id, `Nice to see you. Type country or capital city;)`);   
});

bot.onText(/\/help/, msg => {                              // бот отправляет информацию /help
    const {id} = msg.chat;
    bot.sendMessage(id, `This bot can send you some info about any country(capital, population, area, currency, etc.). Bot can find country by its name or capital city. You can start now;)`);   
});
bot.onText(/\/report/, msg => {                              // бот отправляет контактную информацию /report
    const {id} = msg.chat;
    bot.sendMessage(id, `You can contact developer by email: lliahovich2014@gmail.com IMPORTANT!!! If you are contacting about bugs or mistakes, please write "InfoCountryBot - BUG" in a letter subject. If you are contacting about any other case, please write "InfoCountryBot - OTHER" in a letter subject. Thank you in advance.`);   
});
bot.onText(/\/copyright/, msg => {                              // бот отправляет копирайт /copyright
    const {id} = msg.chat;
    bot.sendMessage(id, `InfoCountryBot is an uncommercial product. All the information was taken from the open sources on fair use rules. No remuneration required. ©2021`);   
});
bot.onText(/\/countries/, msg => {                              // бот отправляет копирайт /copyright
    const {id} = msg.chat;
    bot.sendMessage(id, countries, {
        parse_mode : 'HTML',
    });   
});
bot.onText(/\/capitals/, msg => {                              // бот отправляет копирайт /copyright
    const {id} = msg.chat;
    bot.sendMessage(id, capitals, {
        parse_mode : 'HTML',
    });   
});*/



/*________________________________________________________________________________________________*/



function findCountry() {

    bot.on('message', msg => {                                  // Afghanistan
    
        if((msg.text.toLowerCase() === ('afghanistan')) || (msg.text.toLowerCase() === ('afganistan')) || (msg.text.toLowerCase() === ('kabul')) || (msg.text.toLowerCase() === ('cabul'))) {
           
const html = `
<b>Afghanistan</b>
__________________________
<b>Capital:</b> Kabul
<b>Area:</b> 652,860 Km²
<b>Population:</b> 39,600,147
<b>Region:</b> Asia
<b>Currency:</b> Afghanian afghani (AFN)
<b>Languages:</b> Pashto, Dari Persian
<b>Phone code:</b> +93
<b>Neighbors:</b> 
<i>Pakistan</i> to the east and south
<i>Iran</i> to the west 
<i>Turkmenistan</i>, <i>Uzbekistan</i>, <i>Tajikistan</i> to the north 
<i>China</i> to the northeast
<pre>______________ </pre>
<b>Largest cities:</b>   
Kabul (3,043,532)
Kandahar (391,190)
Mazar-e Sharif (303,282)
Herat (272,806)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Afghanistan"><b>Click for more info</b></a>
`
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,  
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-afg.jpg', {
                caption : 'Flag of Afghanistan'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-afg.png', {
                caption : 'Afghanistan on a world map'
            });
            
        }
        else if((msg.text.toLowerCase() === ('albania')) || (msg.text.toLowerCase() === ('shqiperia')) || (msg.text.toLowerCase() === ('tirana'))) {           // Albania
    
const html = `
<b>Albania</b>
__________________________
<b>Capital:</b> Tirana
<b>Area:</b> 27,400 Km²
<b>Population:</b> 2,877,797
<b>Region:</b> Europe
<b>Currency:</b> Albanian lek (ALL)
<b>Languages:</b> Albanian
<b>Phone code:</b> +355
<b>Neighbors:</b> 
<i>Montenegro</i> to the north
<i>Serbia (Kosovo)</i> to the north east 
<i>Republic of Macedonia</i> to the east 
<i>Greece</i> to the south east
<b>Seas:</b>
<i>Adriatic Sea</i> to the west
<i>Ionic Sea</i> to the south east
<pre>______________ </pre>
<b>Largest cities:</b>   
Tirana (858,262)
Durrës (201,519)
Vlorë (141,513)
Elbasan (126,703)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Albania"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true, 
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-alb.png', {
                caption : 'Flag of Albania'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-alb.png', {
                caption : 'Albania on a world map'
            });
            
        }
        else if((msg.text.toLowerCase() === ('algeria')) || (msg.text.toLowerCase() === ('algiers'))) {           // Algeria
    
const html = `
<b>Algeria</b>
__________________________
<b>Capital:</b> Algiers
<b>Area:</b> 2,381,740 Km²
<b>Population:</b> 43,050,000
<b>Region:</b> Africa
<b>Currency:</b> Algerian dinar (DZD)
<b>Languages:</b> Arabic, Berber
<b>Phone code:</b> +213
<b>Neighbors:</b> 
<i>Tunisia</i> to the northeast 
<i>Libya</i> to the east 
<i>Niger</i> to the southeast
<i>Mali, Mauritania, and the Western Saharan territory</i> to the southwest
<i>Morocco</i> to the west
<b>Seas:</b>
<i>Mediterranean Sea</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
Algiers (1,977,663)
Boumerdès (786,499)
Oran (645,984)
Tebessa (634,332)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Algeria"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-alg.png', {
                caption : 'Flag of Algeria'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-alg.png', {
                caption : 'Algeria on a world map',
            });
            
        }
        else if((msg.text.toLowerCase() === ('andorra')) || (msg.text.toLowerCase() === ('andora')) || (msg.text.toLowerCase() === ('andorra la vella')) || (msg.text.toLowerCase() === ('andora la vella'))) {           
    // Andorra
const html = ` 
<b>Andorra</b>
__________________________
<b>Capital:</b> Andorra la Vella
<b>Area:</b> 470 Km²
<b>Population:</b> 77 142
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Catalan
<b>Phone code:</b> +376
<b>Neighbors:</b> 
<i>France</i> to the nort and east
<i>Spain</i> to the south and west 
<pre>______________ </pre>
<b>Largest cities:</b>   
Andorra la Vella (20,430)
les Escaldes (15,853)
Encamp (11,223)
Sant Julià de Lòria (8,022)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Andorra"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-and.png', {
                caption : 'Flag of Andorra'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-and.png', {
                caption : 'Andorra on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('angola')) || (msg.text.toLowerCase() === ('luanda'))) {           // Angola
    
const html = ` 
<b>Angola</b>
__________________________
<b>Capital:</b> Luanda
<b>Area:</b> 1,246,700 Km²
<b>Population:</b> 31,830,000
<b>Region:</b> Africa
<b>Currency:</b> Kwanza (AOA)
<b>Languages:</b> Chokwe, Kikongo, Kimbundu, Umbundu
<b>Phone code:</b> +244
<b>Neighbors:</b> 
<i>Republic of the Congo</i> to the nortwest
<i>Democratic Republic of the Congo</i> to the north and northeast 
<i>Zambia</i> to the southeast 
<i>Namibia</i> to the south
<b>Seas:</b>
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Luanda (2,776,168)
N'dalatando (383,100)
Huambo (226,145)
Lobito (207,932)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Angola"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-ang.png', {
                caption : 'Flag of Angola'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-ang.png', {
                caption : 'Angola on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('antigua')) || (msg.text.toLowerCase() === ('antigua and barbuda')) || (msg.text.toLowerCase() === ('antigua barbuda')) || (msg.text.toLowerCase() === ('antigua and barbudda')) || (msg.text.toLowerCase() === (`st. john's`)) || (msg.text.toLowerCase() === (`st john's`)) || (msg.text.toLowerCase() === (`st johns`)) || (msg.text.toLowerCase() === (`st. johns`))) {           
            // Antigua and Barbuda
const html = ` 
<b>Antigua and Barbuda</b>
__________________________
<b>Capital:</b> St. John's
<b>Area:</b> 440 Km²
<b>Population:</b> 97 118
<b>Region:</b> North America
<b>Currency:</b> Eastern Caribbean Dollar (XCD)
<b>Languages:</b> Antiguan and Barbudan Creole
<b>Phone code:</b> +1 268 
<b>Neighbors:</b> 
<i>Saint Kitts and Nevis</i> maritime west
<i>Anguilla (UK)</i> maritime northwest
<i>Montserrat (UK)</i> maritime southwest
<i>Guadelupa (France)</i> maritime south
<b>Seas:</b>
<i>Caribbean Sea</i> to the west
<i>Atlantic Ocean</i> to the north and east
<pre>______________ </pre>
<b>Largest cities:</b>   
St John's (24,226)
All Saints (2,526)
Piggotts (1,878)
Liberta (1,668)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Antigua_and_Barbuda"><b>Click for more info</b></a>
`       

            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-ant.jpg', {
                caption : 'Flag of Antigua and Barbuda'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-ant.png', {
                caption : 'Antigua and Barbuda on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('argentina')) || (msg.text.toLowerCase() === ('buenos aires'))) {           // Argentina
    
const html = `
<b>Argentina</b>
__________________________
<b>Capital:</b> Buenos Aires
<b>Area:</b> 2,736,690 Km²
<b>Population:</b> 44,940,000
<b>Region:</b> South America
<b>Currency:</b> Argentine peso (ARS)
<b>Languages:</b> Spanish
<b>Phone code:</b> +54 
<b>Neighbors:</b> 
<i>Chile</i> to the west
<i>Bolivia and Paraguay</i> to the north
<i>Brazil and Uruguay</i> to the northeast
<b>Seas:</b>
<i>Atlantic Ocean</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Buenos Aires (2,936,877)
Córdoba (1,317,298)
Rosario (1,193,605)
La Plata (643,133)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Argentina"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-arg.png', {
                caption : 'Flag of Argentina'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-arg.png', {
                caption : 'Argentina on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('armenia')) || (msg.text.toLowerCase() === ('armeniya')) || (msg.text.toLowerCase() === ('yerevan')) || (msg.text.toLowerCase() === ('erevan'))) {           
        // Armenia
const html = `
<b>Armenia</b>
__________________________
<b>Capital:</b> Yerevan
<b>Area:</b> 28,470 Km²
<b>Population:</b> 2,958,000
<b>Region:</b> Asia
<b>Currency:</b> Armenian dram (AMD, ֏, դր)
<b>Languages:</b> Armenian
<b>Phone code:</b> +374 
<b>Neighbors:</b> 
<i>Turkey</i> to the west
<i>Georgia</i> to the north
<i>Azerbaijan</i> to the east
<i>Iran</i> to the south
<i>Naxçıvan (Azerbaijan)</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Yerevan (1,093,485)
Gyumri (148,381)
Vanadzor (101,098)
Vagharshapat (46,540)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Armenia"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-arm.jpg', {
                caption : 'Flag of Armenia'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-arm.png', {
                caption : 'Armenia on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('australia')) || (msg.text.toLowerCase() === ('canberra')) || (msg.text.toLowerCase() === ('sydney'))) {           // Australia
    
const html = `
<b>Australia</b>
__________________________ 
<b>Capital:</b> Canberra
<b>Area:</b> 7,682,300 Km²
<b>Population:</b> 25,779,200
<b>Region:</b> Oceania
<b>Currency:</b> Australian dollar (AUD)
<b>Languages:</b> English
<b>Phone code:</b> +61 
<b>Neighbors:</b> 
<i>Papua New Guinea, Indonesia, East Timor</i> maritime to the north
<i>New Zealand</i> maritime to the southeast
<i>Vanuatu, New Caledonia(France)</i> maritime to the east
<i>Solomon Islands</i> maritime to the northeast
<i>Malaysia</i> maritime to the northwest
<b>Seas:</b>
<i>Indian Ocean</i> to the west
<i>Great Australian Gulf</i> to the south
<i>Tasman Sea</i> to the southeast
<i>Pacific Ocean</i> to the east
<i>Coral Sea</i> to the northeast
<i>Arafura Sea, Timorese</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
Sydney (4,741,874)
Melbourne (4,677,157)
Brisbane (2,326,656)
Perth (2,004,696)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Australia"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-aus.png', {
                caption : 'Flag of Australia'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-aus.png', {
                caption : 'Australia on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('austria')) || (msg.text.toLowerCase() === ('vienna')) || (msg.text.toLowerCase() === ('viena'))) {           // Austria
    
const html = `
<b>Austria</b>
__________________________  
<b>Capital:</b> ‎Vienna
<b>Area:</b> 82,409 Km²
<b>Population:</b> 8,859,000
<b>Region:</b> Europe
<b>Currency:</b> Euro‎ (‎€‎, ‎EUR‎)
<b>Languages:</b> German
<b>Phone code:</b> +43 
<b>Neighbors:</b> 
<i>Czech Republic</i> to the north
<i>Slovakia</i> to the northeast
<i>Hungary</i> to the east
<i>Slovenia</i> to the south
<i>Italy</i> to the southwest
<i>Switzerland, Liechtenstein</i> to the west
<i>Germany</i> to the northwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Vienna (1,840,573)
Graz (273,838)
Linz (198,181)
Salzburg (148,420)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Austria"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-austria.jpg', {
                caption : 'Flag of Austria'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-austria.png', {
                caption : 'Austria on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('azerbaijan')) || (msg.text.toLowerCase() === ('azerbayjan')) || (msg.text.toLowerCase() === ('baku'))) {           // 	Azerbaijan
    
const html = `
<b>Azerbaijan</b>
__________________________   
<b>Capital:</b> ‎Baku
<b>Area:</b> 82,658 Km²
<b>Population:</b> 10,127,874
<b>Region:</b> Western Asia/Eastern Europe
<b>Currency:</b> Manat (₼, AZN)
<b>Languages:</b> Azerbaijani
<b>Phone code:</b> +994
<b>Neighbors:</b> 
<i>Russia</i> to the north
<i>Georgia</i> to the northwest
<i>Iran</i> to the south
<i>Armenia</i> to the west
<b>Seas:</b>
<i>Caspian Sea</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Baku (2,277,500)
Sumgait (343,100)
Ganja (332,600)
Lankaran (226,900)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Azerbaijan"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-azer.png', {
                caption : 'Flag of Azerbaijan'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-azer.png', {
                caption : 'Azerbaijan on a world map',
                
            });
            
        }
         else if((msg.text.toLowerCase() === ('bahamas')) || (msg.text.toLowerCase() === ('the bahamas')) || (msg.text.toLowerCase() === ('nassau'))) {           // Bahamas
    
const html = `
<b>Bahamas</b>
__________________________   
<b>Capital:</b> Nassau
<b>Area:</b> 10,010 Km²
<b>Population:</b> 393,244	
<b>Region:</b> North America
<b>Currency:</b> Bahamian dollar (BSD)
<b>Languages:</b> English
<b>Phone code:</b> +1 242
<b>Neighbors:</b> 
<i>the USA</i> maritime to the north
<i>Cuba</i> maritime to the south
<i>Haiti, Turks and Caicos Islands (UK)</i> to the southeast
<b>Seas:</b>
<i>Gulf of Mexico</i> to the west
<i>Atlantic Ocean</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Nassau (227,940)
Lucaya (46,525)
Freeport (26,910)
West End (12,724)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/The_Bahamas"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-baham.png', {
                caption : 'Flag of the Bahamas'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-baham.png', {
                caption : 'Bahamas on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('bahrain')) || (msg.text.toLowerCase() === ('bahrayn')) || (msg.text.toLowerCase() === ('manama'))) {           // Bahrain
    
const html = `
<b>Bahrain</b>
__________________________    
<b>Capital:</b> Manama
<b>Area:</b> 760 Km²
<b>Population:</b> 1,641,000	
<b>Region:</b> Asia
<b>Currency:</b> Bahraini dinar (BHD)
<b>Languages:</b> Arabic
<b>Phone code:</b> +973
<b>Neighbors:</b> 
<i>Iran</i> maritime to the north
<i>Saudi Arabia</i> maritime to the west and south
<i>Quatar</i> maritime to the east and southeast
<b>Seas:</b>
<i>Gulf of Bahrain</i> to the south
<i>Persian Gulf</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Manama (200,000)
Riffa (195,606)
Muharraq (176,583)
Hamad Town (57,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Bahrain"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-bahr.jpg', {
                caption : 'Flag of Bahrain'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-bahr.png', {
                caption : 'Bahrain on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('bangladesh')) || (msg.text.toLowerCase() === ('dhaka')) || (msg.text.toLowerCase() === ('daka'))) {           // Bangladesh
    
const html = `
<b>Bangladesh</b>
__________________________   
<b>Capital:</b> Dhaka
<b>Area:</b> 130,170 Km²
<b>Population:</b> 164,689,383	
<b>Region:</b> Asia
<b>Currency:</b> Taka (৳, BDT)
<b>Languages:</b> Bengali
<b>Phone code:</b> +880
<b>Neighbors:</b> 
<i>India</i>  to the north, west and east
<i>Myanmar (Burma)</i> to the southeast
<b>Seas:</b>
<i>Bay of Bengal</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
Dhaka (8,906,039)
Chittagong (6,001,213)
Khulna (1,900,000)
Rajshahi (763,952)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Bangladesh"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-bang.png', {
                caption : 'Flag of Bangladesh'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-bang.png', {
                caption : 'Bangladesh on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('barbados')) || (msg.text.toLowerCase() === ('bridgetown'))) {           // Barbados
    
const html = `
<b>Barbados</b>
__________________________   
<b>Capital:</b> Bridgetown
<b>Area:</b> 430 Km²
<b>Population:</b> 287,375		
<b>Region:</b> North America
<b>Currency:</b> Barbadian dollar ($, BBD)
<b>Languages:</b> English
<b>Phone code:</b> +1 246
<b>Neighbors:</b> 
<i>Saint Vincent and the Grenadines</i> maritime to the west
<i>Martinique</i> maritime to the northwest
<i>Trinidad and Tobago, Grenada</i> maritime to the northwest
<b>Seas:</b>
<i>Caribbean Sea</i> to the west
<i>Atlantic Ocean</i> to the east and north
<pre>______________ </pre>
<b>Largest cities:</b>   
Bridgetown (98,511)
Speightstown (3,634)
Oistins (2,285)
Bathsheba (1,765)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Barbados"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-barb.jpg', {
                caption : 'Flag of Barbados'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-barb.png', {
                caption : 'Barbados on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('belarus')) || (msg.text.toLowerCase() === ('belorus')) || (msg.text.toLowerCase() === ('belorussia')) || (msg.text.toLowerCase() === ('belarussia')) || (msg.text.toLowerCase() === ('minsk'))) {           // Belarus
    
const html = `
<b>Belarus</b>
__________________________  
<b>Capital:</b> Minsk
<b>Area:</b> 202,910 Km²
<b>Population:</b> 9,449,323		
<b>Region:</b> Europe
<b>Currency:</b> Belarusian ruble (BYN)
<b>Languages:</b> Belarusian, Russian
<b>Phone code:</b> +375
<b>Neighbors:</b> 
<i>Russia</i> to the east and northeast
<i>Latvia</i> to the north
<i>Lithuania</i> to the northwest
<i>Poland</i> to the west
<i>Ukraine</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
Minsk (1,742,124)
Homyel (480,951)
Mogilev (369,200)
Vitebsk (342,700)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Belarus"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-bel.jpg', {
                caption : 'Flag of Belarus'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-bel.png', {
                caption : 'Belarus on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('belgium')) || (msg.text.toLowerCase() === ('belgia')) || (msg.text.toLowerCase() === ('brussels')) || (msg.text.toLowerCase() === ('bruxelles')) || (msg.text.toLowerCase() === ('brussel'))) {           // Belgium
    
const html = `
<b>Belgium</b>
__________________________   
<b>Capital:</b> Brussels
<b>Area:</b> 30,280 Km²
<b>Population:</b> 11,589,623		
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Dutch, French, German
<b>Phone code:</b> +32
<b>Neighbors:</b> 
<i>Germany</i> to the east
<i>Netherlands</i> to the north
<i>Luxembourg</i> to the southeast
<i>France</i> to the south
<b>Seas:</b>
<i>North Sea</i> to the northwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Brussels (1,019,022)
Antwerp (459,805)
Ghent (231,493)
Charleroi (200,132)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Belgium"><b>Click for more info</b></a>
`       

            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-belg.png', {
                caption : 'Flag of Belgium'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-belg.png', {
                caption : 'Belgium on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('belize')) || (msg.text.toLowerCase() === ('beliz')) || (msg.text.toLowerCase() === ('belmopan'))) {           // Belize
    
const html = `
<b>Belize</b>
__________________________   
<b>Capital:</b> Belmopan
<b>Area:</b> 22,810 Km²
<b>Population:</b> 397,628		
<b>Region:</b> North America
<b>Currency:</b> Belize dollar (BZD)
<b>Languages:</b> English
<b>Phone code:</b> +501
<b>Neighbors:</b> 
<i>Mexico</i> to the north
<i>Guatemala</i> to the south and east
<i>Honduras</i> maritime to the southeast
<b>Seas:</b>
<i>Caribbean Sea</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Belize City (61,461)
San Ignacio (16,812)
Orange Walk (15,298)
Belmopan (13,381)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Belize"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-belz.png', {
                caption : 'Flag of Belize'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-belz.png', {
                caption : 'Belize on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('benin')) || (msg.text.toLowerCase() === ('porto-novo')) || (msg.text.toLowerCase() === ('porto novo')) || (msg.text.toLowerCase() === ('cotonou'))) {           // Benin
    
const html = `
<b>Benin</b>
__________________________  
<b>Capital:</b> Porto-Novo
<b>Area:</b> 112,760 Km²
<b>Population:</b> 12,123,200			
<b>Region:</b> Africa
<b>Currency:</b> West African CFA franc (XOF)
<b>Languages:</b> French
<b>Phone code:</b> +229
<b>Neighbors:</b> 
<i>Togo</i> to the west
<i>Burkina Faso, Niger</i> to the north
<i>Nigeria</i> to the east
<b>Seas:</b>
<i>Gulf of Guinea</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Cotonou (780,000)
Abomey-Calavi (385,755)
Djougou (237,040)
Porto-Novo (234,168)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Benin"><b>Click for more info</b></a>
`       

            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-ben.jpg', {
                caption : 'Flag of Benin'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-ben.png', {
                caption : 'Benin on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('bhutan')) || (msg.text.toLowerCase() === ('butan')) || (msg.text.toLowerCase() === ('thimphu'))) {           // Bhutan
    
const html = `
<b>Bhutan</b>
__________________________   
<b>Capital:</b> Thimphu
<b>Area:</b> 38,117 Km²
<b>Population:</b> 771,608			
<b>Region:</b> Asia
<b>Currency:</b> Ngultrum (BTN)
<b>Languages:</b> Dzongkha
<b>Phone code:</b> +975
<b>Neighbors:</b> 
<i>India</i> to the south, west and east
<i>China</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
Thimphu (114,551)
Phuntsholing (27,658)
Paro (11,448)
Gelephu (9,858)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Bhutan"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-but.png', {
                caption : 'Flag of Bhutan'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-but.png', {
                caption : 'Bhutan on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('bolivia')) || (msg.text.toLowerCase() === ('boliwia')) || (msg.text.toLowerCase() === ('sucre')) || (msg.text.toLowerCase() === ('la paz'))) {           // Bolivia
    
const html = `
<b>Bolivia</b>
__________________________   
<b>Capital:</b> Sucre(constitutional), La Paz (executive)
<b>Area:</b> 1,083,300 Km²
<b>Population:</b> 11,673,021			
<b>Region:</b> South America
<b>Currency:</b> Boliviano (BOB)
<b>Languages:</b> Spanish, Quechua, Aymara, Guarani and 33 others
<b>Phone code:</b> +591
<b>Neighbors:</b> 
<i>Brazil</i> to the north and east
<i>Paraguay</i> to the southeast
<i>Argentina</i> to the south
<i>Chile</i> to the southwest and west
<i>Peru</i> to the northwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Santa Cruz de la Sierra (1,441,406)
El Alto (842,378)
La Paz (757,184)
Cochabamba (630,587)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Bolivia"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-bol.png', {
                caption : 'Flag of Bolivia'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-bol.png', {
                caption : 'Bolivia on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('bosnia')) || (msg.text.toLowerCase() === ('herzegovina')) || (msg.text.toLowerCase() === ('bosnia herzegovina')) || (msg.text.toLowerCase() === ('bosnia and herzegovina')) || (msg.text.toLowerCase() === ('bosna and herzegovina')) || (msg.text.toLowerCase() === ('bosna')) || (msg.text.toLowerCase() === ('saraevo')) || (msg.text.toLowerCase() === ('sarajevo'))) {           
                                            // Bosnia and Herzegovina
const html = `
<b>Bosnia and Herzegovina</b>
__________________________   
<b>Capital:</b> Sarajevo
<b>Area:</b> 51,000 Km²
<b>Population:</b> 3,280,819			
<b>Region:</b> Europe
<b>Currency:</b> Convertible mark (BAM)
<b>Languages:</b> Bosnian, Serbian, Croatian
<b>Phone code:</b> +387
<b>Neighbors:</b> 
<i>Croatia</i> to the north, west and south
<i>Serbia</i> to the east
<i>Montenegro</i> to the southeast
<b>Seas</b>
<i>Adriatic Sea</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Sarajevo (275,524)
Banja Luka (199,191)
Mostar (163,067)
Bijeljina (114,663)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-bosn.png', {
                caption : 'Flag of Bosnia and Herzegovina'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-bosn.png', {
                caption : 'Bosnia and Herzegovina on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('botswana')) || (msg.text.toLowerCase() === ('botsvana')) || (msg.text.toLowerCase() === ('gaborone'))) {           // Botswana
    
const html = `
<b>Botswana</b>
__________________________    
<b>Capital:</b> Gaborone
<b>Area:</b> 566,730 Km²
<b>Population:</b> 2,351,627			
<b>Region:</b> Africa
<b>Currency:</b> Pula (BWP)
<b>Languages:</b> English, Setswana
<b>Phone code:</b> +267
<b>Neighbors:</b> 
<i>Namibia</i> to the north and west
<i>Zambia and Zimbabwe</i> to the northeast
<i>South Africa</i> to the southeast and south
<pre>______________ </pre>
<b>Largest cities:</b>   
Gaborone (231,592)
Francistown (98,961)
Molepolole (73,103)
Serowe (57,588)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Botswana"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-bots.png', {
                caption : 'Flag of Botswana'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-bots.png', {
                caption : 'Botswana on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('brazil')) || (msg.text.toLowerCase() === ('brasil')) || (msg.text.toLowerCase() === ('brasilia')) || (msg.text.toLowerCase() === ('brazilia'))) {           
            // 	Brazil
const html = `
<b>Brazil</b>
__________________________  
<b>Capital:</b> Brasília
<b>Area:</b> 8,358,140 Km²
<b>Population:</b> 212,559,417			
<b>Region:</b> South America
<b>Currency:</b> 	Real (R$, BRL)
<b>Languages:</b> Portuguese
<b>Phone code:</b> +55
<b>Neighbors:</b> 
<i>French Guiana, Suriname, Guyana, Venezuela</i> to the north
<i>Colombia</i> to the northwest
<i>Peru</i> to the west
<i>Bolivia, Pagaguay, Argentina</i> to the southwest
<i>Uruguay</i> to the south
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the east, northeast, southeast
<pre>______________ </pre>
<b>Largest cities:</b>   
São Paulo (12,325,232)
Rio de Janeiro (6,747,815)
Brasília (3,055,149)
Salvador (2,886,698)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Brazil"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-braz.png', {
                caption : 'Flag of Brazil'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-braz.png', {
                caption : 'Brazil on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('brunei')) || (msg.text.toLowerCase() === ('bruney')) || (msg.text.toLowerCase() === ('bandar seri begawan'))) {           // 	Brunei
const html = `
<b>Brunei</b>
__________________________   
<b>Capital:</b> Bandar Seri Begawan
<b>Area:</b> 5,270 Km²
<b>Population:</b> 437,479			
<b>Region:</b> Asia
<b>Currency:</b> Brunei dollar (BND)
<b>Languages:</b> Malay
<b>Phone code:</b> +673
<b>Neighbors:</b> 
<i>Malaysia</i> to the south, east, and west
<b>Seas:</b> 
<i>South China Sea</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
Bandar Seri Begawan (64,409)
Kuala Belait (31,178)
Seria (30,097)
Tutong (19,151)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Brunei"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-brun.png', {
                caption : 'Flag of Brunei'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-brun.png', {
                caption : 'Brunei on a world map',
                
            });
            
        }
        else if((msg.text.toLowerCase() === ('bulgaria')) || (msg.text.toLowerCase() === ('bolgaria')) || (msg.text.toLowerCase() === ('sofia'))) {           // 	Bulgaria
const html = `
<b>Bulgaria</b>
__________________________    
<b>Capital:</b> Sofia
<b>Area:</b> 108,560 Km²
<b>Population:</b> 6,948,445			
<b>Region:</b> Europe
<b>Currency:</b> Lev (BGN)
<b>Languages:</b> Bulgarian
<b>Phone code:</b> +359
<b>Neighbors:</b> 
<i>Romania</i> to the north
<i>Serbia, Macedonia</i> to the west
<i>Greece</i> to the south
<i>Turkey</i> to the southeast
<b>Seas:</b> 
<i>Black Sea</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Sofia (1,091,772)
Plovdiv (338,224)
Varna (312,889)
Burgas (192,390)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Bulgaria"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-bulg.png', {
                caption : 'Flag of Bulgaria'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-bulg.png', {
                caption : 'Bulgaria on a world map',
                
            });
            
        }    
        else if((msg.text.toLowerCase() === ('burkina faso')) || (msg.text.toLowerCase() === ('burkinafaso')) || (msg.text.toLowerCase() === ('burkina')) || (msg.text.toLowerCase() === ('ouagadougou')) || (msg.text.toLowerCase() === ('uagadugu'))) {  
             // 	Burkina Faso        
const html = `
<b>Burkina Faso</b>
__________________________     
<b>Capital:</b> Ouagadougou
<b>Area:</b> 273,600 Km²
<b>Population:</b> 20,903,273			
<b>Region:</b> Africa
<b>Currency:</b> West African CFA franc (XOF)
<b>Languages:</b> French
<b>Phone code:</b> +226
<b>Neighbors:</b> 
<i>Mali</i> to the north and west
<i>Niger</i> to the northeast
<i>Ivory Coast, Ghana, and Togo</i> to the south
<i>Benin</i> to the southeast
<pre>______________ </pre>
<b>Largest cities:</b>   
Ouagadougou (1,086,505)
Bobo-Dioulasso (360,106)
Koudougou (87,347)
Ouahigouya (61,096)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Burkina_Faso"><b>Click for more info</b></a>
`       
    
            bot.sendMessage(msg.chat.id, html, {
                parse_mode : 'HTML',
                disable_web_page_preview : true,
            });
            bot.sendPhoto(msg.chat.id, './flags/flag-burk.png', {
                caption : 'Flag of Burkina Faso'
            });
            bot.sendPhoto(msg.chat.id, './maps/map-burk.png', {
                caption : 'Burkina Faso on a world map',
                
            });
            
        }  
        else if((msg.text.toLowerCase() === ('burundi')) || (msg.text.toLowerCase() === ('burundie')) || (msg.text.toLowerCase() === ('burundee')) || (msg.text.toLowerCase() === ('gitega')) || (msg.text.toLowerCase() === ('bujumbura'))) {  // 	Burundi       
const html = `
<b>Burundi</b>
__________________________   
<b>Capital:</b> Gitega (political), Bujumbura (economic)
<b>Area:</b> 25,680 Km²
<b>Population:</b> 11,890,784				
<b>Region:</b> Africa
<b>Currency:</b> Burundian franc (FBu, BIF)
<b>Languages:</b> French, Kirundi, Swahili
<b>Phone code:</b> +257
<b>Neighbors:</b> 
<i>Rwanda</i> to the north
<i>Tanzania</i> to the east and southeast
<i>Democratic Republic of the Congo</i> to the west
<b>Seas:</b>
<i>Lake Tanganyika</i> to the southwestern border
<pre>______________ </pre>
<b>Largest cities:</b>   
Bujumbura (1,124,166)
Gitega (125,944)
Muyinga (95,609)
Ngozi (86,844)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Burundi"><b>Click for more info</b></a>
`       
   
           bot.sendMessage(msg.chat.id, html, {
               parse_mode : 'HTML',
               disable_web_page_preview : true,
           });
           bot.sendPhoto(msg.chat.id, './flags/flag-buru.png', {
               caption : 'Flag of Burundi'
           });
           bot.sendPhoto(msg.chat.id, './maps/map-buru.png', {
               caption : 'Burundi on a world map',
               
           });
           
       }      
       else if((msg.text.toLowerCase() === ('côte d\'ivoire')) || (msg.text.toLowerCase() === ('côte divoire')) || (msg.text.toLowerCase() === ('cote d\'ivoire')) || (msg.text.toLowerCase() === ('cote divoire')) || (msg.text.toLowerCase() === ('ivory coast')) || (msg.text.toLowerCase() === ('yamoussoukro')) || (msg.text.toLowerCase() === ('abidjan'))) { 
            // 	Côte d'Ivoire       
const html = `
<b>Côte d'Ivoire</b>
__________________________    
<b>Capital:</b> Yamoussoukro (de jure), Abidjan (de facto)
<b>Area:</b> 318,000 Km²
<b>Population:</b> 26,378,274				
<b>Region:</b> Africa
<b>Currency:</b> West African CFA franc (XOF)
<b>Languages:</b> French
<b>Phone code:</b> +225
<b>Neighbors:</b> 
<i>Mali, Burkina Faso</i> to the north
<i>Ghana</i> to the east
<i>Guinea, Liberia</i> to the west
<b>Seas:</b>
<i>Atlantic Ocean</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
Abidjan (3,677,115)
Abobo (900,000)
Bouaké (567,481)
Daloa (215,652)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Ivory_Coast"><b>Click for more info</b></a>
`       

        bot.sendMessage(msg.chat.id, html, {
            parse_mode : 'HTML',
            disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-ivor.png', {
            caption : 'Flag of Côte d\'Ivoire'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-ivor.png', {
            caption : 'Côte d\'Ivoire on a world map',
            
        });
        
    }      
    else if((msg.text.toLowerCase() === ('cabo verde')) || (msg.text.toLowerCase() === ('cape verde')) || (msg.text.toLowerCase() === ('praia'))) {     // 	Cabo Verde
               
const html = `
<b>Cabo Verde</b>
__________________________  
<b>Capital:</b> Praia
<b>Area:</b> 4,030 Km²
<b>Population:</b> 555,987				
<b>Region:</b> Africa
<b>Currency:</b> Cape Verdean escudo (CVE)
<b>Languages:</b> Portuguese
<b>Phone code:</b> +238
<b>Neighbors:</b> 
<i>Gambia, Guinea-Bissau, Mauritania, and Senegal</i> maritime to the east
<i>Gambia, Guinea-Bissau</i> maritime to the southeast
<b>Seas:</b>
<i>Atlantic Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
Praia (61,644)
Mindelo (47,109)
Espargos (5,578)
Assomada (3,414)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Cape_Verde"><b>Click for more info</b></a>
`       

    bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
    });
    bot.sendPhoto(msg.chat.id, './flags/flag-cape.png', {
        caption : 'Flag of Cape Verde'
    });
    bot.sendPhoto(msg.chat.id, './maps/map-cape.png', {
        caption : 'Cape Verde on a world map',
        
    });
    
}      
else if((msg.text.toLowerCase() === ('cambodia')) || (msg.text.toLowerCase() === ('cambodja')) || (msg.text.toLowerCase() === ('phnom penh')) || (msg.text.toLowerCase() === ('phnom pen')) || (msg.text.toLowerCase() === ('pnom pen'))) {     // 	Cambodia
               
const html = `
<b>Cambodia</b>
__________________________   
<b>Capital:</b> Phnom Penh
<b>Area:</b> 176,520 Km²
<b>Population:</b> 16,718,965				
<b>Region:</b> Asia
<b>Currency:</b> Riel (៛, KHR)
<b>Languages:</b> Khmer
<b>Phone code:</b> +855
<b>Neighbors:</b> 
<i>Thailand</i> to the west and northwest
<i>Laos</i> to the northeast
<i>Vietnam</i> to the east and southeast
<b>Seas:</b>
<i>Gulf of Thailand</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Phnom Penh (1,573,544)
Takeo (843,931)
Kampong Saom (156,691)
Battambang (150,444)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Cambodia"><b>Click for more info</b></a>
`       

    bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
    });
    bot.sendPhoto(msg.chat.id, './flags/flag-camb.png', {
        caption : 'Flag of Cambodia'
    });
    bot.sendPhoto(msg.chat.id, './maps/map-camb.png', {
        caption : 'Cambodia on a world map',
        
    });
    
} 

else if((msg.text.toLowerCase() === ('camerun')) || (msg.text.toLowerCase() === ('cameroon')) || (msg.text.toLowerCase() === ('yaoundé')) || (msg.text.toLowerCase() === ('yaounde'))) {     // 		Cameroon
               
const html = `
<b>Cameroon</b>
__________________________   
<b>Capital:</b> Yaoundé
<b>Area:</b> 472,710 Km²
<b>Population:</b> 26,545,863				
<b>Region:</b> Africa
<b>Currency:</b> Central African CFA franc (XAF)
<b>Languages:</b> English, French
<b>Phone code:</b> +237
<b>Neighbors:</b> 
<i>Nigeria</i> to the northwest
<i>Chad</i> to the northeast
<i>Central African Republic</i> to the east
<i>Republic of the Congo</i> to the southeast
<i>Gabon, Equatorial Guinea</i> to the south
<b>Seas:</b>
<i>Atlantic Ocean</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Douala (1,338,082)
Yaoundé (1,299,369)
Garoua (436,899)
Kousséri (435,547)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Cameroon"><b>Click for more info</b></a>
`       

    bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
    });
    bot.sendPhoto(msg.chat.id, './flags/flag-camer.png', {
        caption : 'Flag of Cameroon'
    });
    bot.sendPhoto(msg.chat.id, './maps/map-camer.png', {
        caption : 'Cameroon on a world map',
        
    });
    
} 
else if((msg.text.toLowerCase() === ('canada')) || (msg.text.toLowerCase() === ('kanada')) || (msg.text.toLowerCase() === ('ottawa'))) {     // 		Canada
               
const html = `
<b>Canada</b>
__________________________  
<b>Capital:</b> Ottawa
<b>Area:</b> 9,093,510 Km²
<b>Population:</b> 37,742,154				
<b>Region:</b> North America
<b>Currency:</b> Canadian dollar ($, CAD)
<b>Languages:</b> English, French
<b>Phone code:</b> +1 011
<b>Neighbors:</b> 
<i>the USA</i> to the west and south
<i>Greenland(Denmark)</i> maritime to the northeast
<i>Saint Pierre and Miquelon(France)</i> maritime to the southeast
<b>Seas:</b>
<i>Pacific Ocean</i> to the west
<i>Arctic Ocean</i> to the north
<i>Atlantic Ocean</i> to the east
<i>Beaufort Sea</i> to the northeast
<i>Hudson Bay</i> to the east
<i>Labrador Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Toronto (6,471,850)
Montréal (4,318,505)
Vancouver (2,691,351)
Calgary (1,514,723)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Canada"><b>Click for more info</b></a>
`       

    bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
    });
    bot.sendPhoto(msg.chat.id, './flags/flag-can.png', {
        caption : 'Flag of Canada'
    });
    bot.sendPhoto(msg.chat.id, './maps/map-can.png', {
        caption : 'Canada on a world map',
        
    });
    
} 
else if((msg.text.toLowerCase() === ('central african republic')) || (msg.text.toLowerCase() === ('central africa')) || (msg.text.toLowerCase() === ('car')) || (msg.text.toLowerCase() === ('bangui'))) {     
                        // 	Central African Republic
const html = `
<b>Central African Republic</b>
__________________________  
<b>Capital:</b> Bangui
<b>Area:</b> 622,980 Km²
<b>Population:</b> 4,829,767				
<b>Region:</b> Africa
<b>Currency:</b> Central African CFA franc (XAF)
<b>Languages:</b> French, Sango
<b>Phone code:</b> +236
<b>Neighbors:</b> 
<i>Chad</i> to the north
<i>Sudan</i> to the northeast
<i>South Sudan</i> to the east
<i>Democratic Republic of the Congo, Republic of the Congo</i> to the south
<i>Cameroon</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Bangui (622,771)
Bimbo (124,176)
Berbérati (76,918)
Carnot (45,421)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Central_African_Republic"><b>Click for more info</b></a>
`       

    bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
    });
    bot.sendPhoto(msg.chat.id, './flags/flag-car.png', {
        caption : 'Flag of Central African Republic'
    });
    bot.sendPhoto(msg.chat.id, './maps/map-car.png', {
        caption : 'Central African Republic on a world map',
        
    });
    
} 
else if((msg.text.toLowerCase() === ('chad')) || (msg.text.toLowerCase() === ('tchad')) || (msg.text.toLowerCase() === (`n'djamena`)) || (msg.text.toLowerCase() === (`ndjamena`))) {     
    // 	Chad
const html = `
<b>Chad</b>
__________________________  
<b>Capital:</b> N'Djamena
<b>Area:</b> 1,259,200 Km²
<b>Population:</b> 16,425,864				
<b>Region:</b> Africa
<b>Currency:</b> Central African CFA franc (XAF)
<b>Languages:</b> Chadian Arabic, French
<b>Phone code:</b> +235
<b>Neighbors:</b> 
<i>Libya</i> to the north
<i>Niger, Nigeria, Cameroon</i> to the west
<i>Sudan</i> to the east
<i>Central African Republic</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
N'Djamena (951,418)
Moundou (137,929)
Sarh (137,251)
Abéché (97,963)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Chad"><b>Click for more info</b></a>
`       

bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-chad.png', {
caption : 'Flag of Chad'
});
bot.sendPhoto(msg.chat.id, './maps/map-chad.png', {
caption : 'Chad on a world map',

});

} 
else if((msg.text.toLowerCase() === ('chile')) || (msg.text.toLowerCase() === ('chilie')) || (msg.text.toLowerCase() === ('chili')) || (msg.text.toLowerCase() === ('santiago'))) {     
    // 	Chile
const html = `
<b>Chile</b>
__________________________   
<b>Capital:</b> Santiago
<b>Area:</b> 743,532 Km²
<b>Population:</b> 19,116,201				
<b>Region:</b> South America
<b>Currency:</b> Chilean peso (CLP)
<b>Languages:</b> Spanish
<b>Phone code:</b> +56
<b>Neighbors:</b> 
<i>Peru, Bolivia</i> to the north
<i>Argentina</i> to the east
<b>Seas:</b> 
<i>Pacific Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Santiago (4,837,295)
Puente Alto (510,417)
Antofagasta (309,832)
Viña del Mar (294,551)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Chile"><b>Click for more info</b></a>
`       

bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-chi.png', {
caption : 'Flag of Chile'
});
bot.sendPhoto(msg.chat.id, './maps/map-chi.png', {
caption : 'Chile on a world map',

    });

} 
else if((msg.text.toLowerCase() === ('china')) || (msg.text.toLowerCase() === ('beijing')) || (msg.text.toLowerCase() === ('pekin'))) {     // 	China
    
const html = `
<b>China</b>
__________________________  
<b>Capital:</b> Beijing
<b>Area:</b> 9,388,211 Km²
<b>Population:</b> 1,439,323,776				
<b>Region:</b> Asia
<b>Currency:</b> Renminbi (yuan, ¥)
<b>Languages:</b> Simplified Chinese
<b>Phone code:</b> +86 (mainland), +852 (Hong Kong), +853 (Macau)
<b>Neighbors:</b> 
<i>Kazakhstan, Mongolia, Russia</i> to the north
<i>North Korea</i> to the northeast
<i>Vietnam, Laos, Myanmar, India, Nepal, Bhutan</i> to the south
<i>Pakistan</i> to the southwest
<i>Afghanistan, Tajikistan, Kyrgyzstan</i> to the west
<b>Seas:</b> 
<i>Bohai Sea, Huanghai Sea, East China Sea</i> to the west
<i>South China Sea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
Shanghai (26,917,322)
Beijing (20,381,745)
Chongqing (15,773,658)
Tianjin (13,552,359)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/China"><b>Click for more info</b></a>
`       

bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-cna.png', {
caption : 'Flag of China'
});
bot.sendPhoto(msg.chat.id, './maps/map-cna.png', {
caption : 'China on a world map',

    });

} 
else if((msg.text.toLowerCase() === ('colombia')) || (msg.text.toLowerCase() === ('columbia')) || (msg.text.toLowerCase() === ('bogotá')) || (msg.text.toLowerCase() === ('bogota'))) {     // 	Colombia
    
const html = `
<b>Colombia</b>
__________________________   
<b>Capital:</b> Bogotá
<b>Area:</b> 1,109,500 Km²
<b>Population:</b> 50,882,891				
<b>Region:</b> South America
<b>Currency:</b> Colombian peso (COP)
<b>Languages:</b> Spanish
<b>Phone code:</b> 	+57
<b>Neighbors:</b> 
<i>Panama</i> to the northwest
<i>Venezuela, Brazil</i> to the east
<i>Peru, Equador</i> to the south
<i>Costa Rica, Honduras, Nicaragua, Cayman Islands(UK)</i> maritime to the northwest
<i>Dominican Republic, Haiti, Jamaica</i> maritime to the north
<b>Seas:</b> 
<i>Caribbean Sea</i> to the north
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Bogotá (8,181,047)
Medellín (2,529,403)
Cali (2,445,405)
Barranquilla (1,232,462)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Colombia"><b>Click for more info</b></a>
`       
    
    bot.sendMessage(msg.chat.id, html, {
    parse_mode : 'HTML',
    disable_web_page_preview : true,
    });
    bot.sendPhoto(msg.chat.id, './flags/flag-col.png', {
    caption : 'Flag of Colombia'
    });
    bot.sendPhoto(msg.chat.id, './maps/map-col.png', {
    caption : 'Colombia on a world map',
    
        });
    
    }
    else if((msg.text.toLowerCase() === ('comoros')) || (msg.text.toLowerCase() === ('comor islands')) || (msg.text.toLowerCase() === ('comoro islands')) || (msg.text.toLowerCase() === ('moroni'))) {     
            // 	Comoros
const html = `
<b>Comoros</b>
__________________________  
<b>Capital:</b> Moroni
<b>Area:</b> 1,861 Km²
<b>Population:</b> 869,601				
<b>Region:</b> Africa
<b>Currency:</b> Comorian franc (KMF)
<b>Languages:</b> Comorian, French, Arabic
<b>Phone code:</b> +269
<b>Neighbors:</b> 
<i>Mozambique</i> maritime to the west
<i>Madagascar</i> maritime to the southeast
<b>Seas:</b> 
<i>Mozambique Channel</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
Moroni (42,872)
Moutsamoudou (23,594)
Fomboni (14,966)
Domoni (14,509)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Comoros"><b>Click for more info</b></a>
`       
        
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-com.png', {
        caption : 'Flag of Comoros'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-com.png', {
        caption : 'Comoros on a world map',
        
            });
        
        }
        else if((msg.text.toLowerCase() === ('congo')) || (msg.text.toLowerCase() === ('republic of the congo')) || (msg.text.toLowerCase() === ('republic of congo')) || (msg.text.toLowerCase() === ('republic congo')) || (msg.text.toLowerCase() === ('congo-brazzaville')) || (msg.text.toLowerCase() === ('brazzaville'))) {     
            // 	Congo
const html = `
<b>Republic of Congo</b>
__________________________   
<b>Capital:</b> Brazzaville
<b>Area:</b> 341,500 Km²
<b>Population:</b> 5,518,087				
<b>Region:</b> Africa
<b>Currency:</b> Central African CFA franc (XAF)
<b>Languages:</b> French
<b>Phone code:</b> +242
<b>Neighbors:</b> 
<i>Cameroon, Central African Republic</i> to the north
<i>Gabon</i> to the west
<i>Democratic Republic of the Congo</i> to the east and south
<i>Angola</i> to the south
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Brazzaville (1,827,000)
Pointe-Noire (715,334)
Dolisie (83,798)
Nkayi (71,620)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Republic_of_the_Congo"><b>Click for more info</b></a>
`       
        
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-congo.png', {
        caption : 'Flag of Congo'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-congo.png', {
        caption : 'Congo on a world map',
        
            });
        
        }  
        else if((msg.text.toLowerCase() === ('costa rica')) || (msg.text.toLowerCase() === ('costarica')) || (msg.text.toLowerCase() === ('kosta rica')) || (msg.text.toLowerCase() === ('kosta rika')) || (msg.text.toLowerCase() === ('costa rika')) || (msg.text.toLowerCase() === ('san jose')) || (msg.text.toLowerCase() === ('san josé'))) {     
            // 		Costa Rica
const html = `
<b>Costa Rica</b>
__________________________   
<b>Capital:</b> San José
<b>Area:</b> 51,060 Km²
<b>Population:</b> 5,094,118				
<b>Region:</b> North America
<b>Currency:</b> Costa Rican colón (CRC)
<b>Languages:</b> Spanish
<b>Phone code:</b> +506
<b>Neighbors:</b> 
<i>Nicaragua</i> to the north
<i>Panama</i> to the southeast
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the west
<i>Caribbean Sea</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
San José (335,007)
Puerto Limón (63,081)
San Francisco (55,923)
Alajuela (47,494)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Costa_Rica"><b>Click for more info</b></a>
`       
        
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-costa.png', {
        caption : 'Flag of Costa Rica'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-costa.png', {
        caption : 'Costa Rica on a world map',
        
            });
        
        }            
        else if((msg.text.toLowerCase() === ('croatia')) || (msg.text.toLowerCase() === ('hrvatska')) || (msg.text.toLowerCase() === ('zagreb'))) {    // 	Croatia  
           
const html = `
<b>Croatia</b>
__________________________  
<b>Capital:</b> Zagreb
<b>Area:</b> 55,960 Km²
<b>Population:</b> 4,105,267				
<b>Region:</b> Europe
<b>Currency:</b> Kuna (HRK)
<b>Languages:</b> Croatian
<b>Phone code:</b> +385
<b>Neighbors:</b> 
<i>Slovenia, Hungary</i> to the north
<i>Serbia, Bosnia and Herzegovina</i> to the east
<i>Montenegro</i> to the southeast
<i>Italy</i> maritime to the west
<b>Seas:</b> 
<i>Adriatic Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Zagreb (806,341)
Split (176,314)
Rijeka (141,172)
Osijek (88,140)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Croatia"><b>Click for more info</b></a>
`       
        
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-cro.png', {
        caption : 'Flag of Croatia'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-cro.png', {
        caption : 'Croatia on a world map',
        
            });
        
        }
        else if((msg.text.toLowerCase() === ('cuba')) || (msg.text.toLowerCase() === ('kuba')) || (msg.text.toLowerCase() === ('havana'))) {    // 	Cuba
           
const html = `
<b>Cuba</b>
__________________________   
<b>Capital:</b> Havana
<b>Area:</b> 106,440 Km²
<b>Population:</b> 11,326,616				
<b>Region:</b> North America
<b>Currency:</b> Cuban peso (CUP)
<b>Languages:</b> Spanish
<b>Phone code:</b> +53
<b>Neighbors:</b> 
<i>the USA</i> maritime to the north and northwest
<i>Bahamas</i> maritime to the north
<i>Mexico</i> maritime to the west 
<i>Haiti</i> maritime to the east
<i>Jamaica, Cayman Islands</i> maritime to the south
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the north and east
<i>Gulf of Mexico</i> to the west
<i>Caribbean Sea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
Havana (2,130,081)
Santiago de Cuba (433,099)
Camagüey (306,183)
Holguín (294,002)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Cuba"><b>Click for more info</b></a>
`        
                
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-cuba.png', {
        caption : 'Flag of Cuba'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-cuba.png', {
        caption : 'Cuba on a world map',
                    
            });
                    
        }

        else if((msg.text.toLowerCase() === ('cyprus')) || (msg.text.toLowerCase() === ('cypros')) || (msg.text.toLowerCase() === ('nicosia'))) {    // 		Cyprus  
           
const html = `
<b>Cyprus</b>
__________________________    
<b>Capital:</b> Nicosia
<b>Area:</b> 9,240 Km²
<b>Population:</b> 1,207,359				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Greek, Turkish
<b>Phone code:</b> +357
<b>Neighbors:</b> 
<i>Turkey</i> maritime to the north
<i>Syria</i> maritime to the east
<i>Lebanon, Israel</i> maritime to the southeast 
<i>Egypt</i> maritime to the south
<i>Greece </i> maritime to the west
<b>Seas:</b> 
<i>Meditarranean Sea</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
Nicosia (310,355)
Limassol (101,000)
Larnaca (51,468)
Famagusta (40,920)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Cyprus"><b>Click for more info</b></a>
`        
                
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-cyprus.jpg', {
        caption : 'Flag of Cyprus'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-cyprus.png', {
        caption : 'Cyprus on a world map',
                    
            });
                    
        }        
        else if((msg.text.toLowerCase() === ('czech republic')) || (msg.text.toLowerCase() === ('czechia')) || (msg.text.toLowerCase() === ('česko')) || (msg.text.toLowerCase() === ('ceska republika')) || (msg.text.toLowerCase() === ('cesko')) || (msg.text.toLowerCase() === ('prague')) || (msg.text.toLowerCase() === ('praha'))) {    
            // 		Czech Republic      
const html = `
<b>Czech Republic</b>
__________________________  
<b>Capital:</b> Prague
<b>Area:</b> 77,240 Km²
<b>Population:</b> 10,708,981				
<b>Region:</b> Europe
<b>Currency:</b> Czech koruna (CZK)
<b>Languages:</b> Czech
<b>Phone code:</b> +420
<b>Neighbors:</b> 
<i>Poland</i> to the north and northeast
<i>Slovakia</i> to the east
<i>Austria</i> to the south 
<i>Germany</i> to the west and northwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Prague (1,165,581)
Brno (369,559)
Ostrava (313,088)
Pilsen (164,180)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Czech_Republic"><b>Click for more info</b></a>
`        
                
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-czech.png', {
        caption : 'Flag of Czech Republic'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-czech.png', {
        caption : 'Czech Republic on a world map',
                    
            });
                    
        }        
        else if((msg.text.toLowerCase() === ('democratic republic of congo')) || (msg.text.toLowerCase() === ('democratic congo')) || (msg.text.toLowerCase() === ('democratic republic congo')) || (msg.text.toLowerCase() === ('congo-kinshasa')) || (msg.text.toLowerCase() === ('drc')) || (msg.text.toLowerCase() === ('kinshasa'))) {    
            // 		Democratic Republic of the Congo      
const html = `
<b>Democratic Republic of the Congo</b>
__________________________   
<b>Capital:</b> Kinshasa
<b>Area:</b> 2,267,050 Km²
<b>Population:</b> 89,561,403				
<b>Region:</b> Africa
<b>Currency:</b> Congolese franc (CDF)
<b>Languages:</b> French
<b>Phone code:</b> +243
<b>Neighbors:</b> 
<i>Central African Republic, South Sudan</i> to the north
<i>Uganda, Rwanda, Burundi, Tanzania</i> to the east
<i>Zambia</i> to the southeast
<i>Angola</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Kinshasa (7,785,965)
Lubumbashi (1,373,770)
Mbuji-Mayi (874,761)
Kisangani (539,158)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo"><b>Click for more info</b></a>
`        
                
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-drc.png', {
        caption : 'Flag of Democratic Republic of the Congo'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-drc.png', {
        caption : 'Democratic Republic of the Congo on a world map',
                    
            });                   
        }        
        else if((msg.text.toLowerCase() === ('denmark')) || (msg.text.toLowerCase() === ('danmark')) || (msg.text.toLowerCase() === ('greenland')) || (msg.text.toLowerCase() === ('copenhagen'))) {     // 		Denmark     
const html = `
<b>Denmark</b>
__________________________   
<b>Capital:</b> Copenhagen
<b>Area:</b> 42,430 Km²
<b>Population:</b> 5,792,202				
<b>Region:</b> Europe
<b>Currency:</b> Danish krone (DKK)
<b>Languages:</b> Danish
<b>Phone code:</b> +45 (Denmark), +298 (Faroe Islands), +299 (Greenland)
<b>Neighbors:</b> 
<i>Sweden</i> to the east and maritime to the northeast
<i>Norway</i> maritime to the north
<i>Poland</i> maritime to the southeast
<i>Germany</i> to the south
<i>United Kingdom</i> maritime to the west
<i>Canada</i> maritime to the west (from Greenland)
<pre>______________ </pre>
<b>Largest cities:</b>   
Copenhagen (1,295,686)
Aarhus (269,022)
Odense (176,683)
Aalborg (113,417)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Denmark"><b>Click for more info</b></a>
`        
                
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-denm.png', {
        caption : 'Flag of Denmark'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-denm.png', {
        caption : 'Denmark on a world map',
                    
            });                   
        }


        else if((msg.text.toLowerCase() === ('djibouti')) || (msg.text.toLowerCase() === ('djibuti'))) {     // 	Djibouti   
const html = `
<b>Djibouti</b>
__________________________  
<b>Capital:</b> Djibouti
<b>Area:</b> 23,180 Km²
<b>Population:</b> 988,000				
<b>Region:</b> Africa
<b>Currency:</b> Djiboutian franc (DJF)
<b>Languages:</b> Somali, Afar
<b>Phone code:</b> +253
<b>Neighbors:</b> 
<i>Eritrea</i> to the north
<i>Ephiopia</i> to the west and south
<i>Somalia</i> to the southeast
<i>Yemen</i> maritime to the northeast
<b>Seas:</b>
<i>Red Sea</i> to the north
<i>Gulf of Aden</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Djibouti (623,891)
Ali Sabih (55,000)
Tadjoura (22,193)
Obock (17,776)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Djibouti"><b>Click for more info</b></a>
`        
                            
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-djib.png', {
        caption : 'Flag of Djibouti'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-djib.png', {
        caption : 'Djibouti on a world map',
                                
            });                   
        }        
        else if((msg.text.toLowerCase() === ('dominica')) || (msg.text.toLowerCase() === ('dominika')) || (msg.text.toLowerCase() === ('roseau'))) {     // 	Dominica   
const html = `
<b>Dominica</b>
__________________________  
<b>Capital:</b> Roseau
<b>Area:</b> 750 Km²
<b>Population:</b> 71,986				
<b>Region:</b> North America
<b>Currency:</b> East Caribbean dollar (XCD)
<b>Languages:</b> English
<b>Phone code:</b> +1-767
<b>Neighbors:</b> 
<i>Guadeloupe(France)</i> maritime to the north
<i>Martinique</i> maritime to the south
<b>Seas:</b>
<i>Caribbean Sea</i> to the west
<i>Atlantic Ocean</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Roseau (16,571)
Portsmouth (3,633)
Marigot (2,669)
Berekua (2,608)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Dominica"><b>Click for more info</b></a>
`        
                                        
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-doca.png', {
        caption : 'Flag of Dominica'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-doca.png', {
        caption : 'Dominica on a world map',
                                            
            });                   
        }

        else if((msg.text.toLowerCase() === ('dominicana')) || (msg.text.toLowerCase() === ('dominikana')) || (msg.text.toLowerCase() === ('dominican republic')) || (msg.text.toLowerCase() === ('santo domingo'))) {     // 		Dominican Republic   
const html = `
<b>Dominican Republic</b>
__________________________  
<b>Capital:</b> Santo Domingo
<b>Area:</b> 48,320 Km²
<b>Population:</b> 10,847,910				
<b>Region:</b> North America
<b>Currency:</b> Dominican peso (DOP)
<b>Languages:</b> Spanish
<b>Phone code:</b> +1-809, +1-829, +1-849
<b>Neighbors:</b> 
<i>Haiti</i> to the west
<i>Turks and Caicos Islands(United Kingdom)</i> maritime to the north
<i>Colombia, Venezuela, Aruba(Netherlands), Curaçao(Netherlands)</i> maritime to the south
<i>Puerto Rico(United States)</i> maritime to the east
<b>Seas:</b>
<i>Atlantic Ocean</i> to the north
<i>Caribbean Sea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
Santo Domingo (2,201,941)
Santiago de los Caballeros (1,200,000)
Santo Domingo Oeste (701,269)
Santo Domingo Este (700,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Dominican_Republic"><b>Click for more info</b></a>
`        
                                                    
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-domin.jpg', {
        caption : 'Flag of Dominican Republic'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-domin.png', {
        caption : 'Dominican Republic on a world map',
                                                        
            });                   
        }
        else if((msg.text.toLowerCase() === ('ecuador')) || (msg.text.toLowerCase() === ('equador')) || (msg.text.toLowerCase() === ('ekvador')) || (msg.text.toLowerCase() === ('quito'))) {     // 		Ecuador   
const html = `
<b>Ecuador</b>
__________________________  
<b>Capital:</b> Quito
<b>Area:</b> 248,360 Km²
<b>Population:</b> 17,643,054				
<b>Region:</b> South America
<b>Currency:</b> United States dollar (USD)
<b>Languages:</b> Spanish
<b>Phone code:</b> +593
<b>Neighbors:</b> 
<i>Colombia</i> to the north
<i>Peru</i> to the east and south
<b>Seas:</b>
<i>Pacific Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Guayaquil (2,278,691)
Quito (1,607,734)
Cuenca (329,928)
Santo Domingo (270,875)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Ecuador"><b>Click for more info</b></a>
`        
                                                                
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-ecuad.png', {
        caption : 'Flag of Ecuador '
        });
        bot.sendPhoto(msg.chat.id, './maps/map-ecuad.png', {
        caption : 'Ecuador on a world map',
                                                                    
            });                   
        }

        else if((msg.text.toLowerCase() === ('egypt')) || (msg.text.toLowerCase() === ('egipt')) || (msg.text.toLowerCase() === ('cairo')) || (msg.text.toLowerCase() === ('kair'))) {     // 		Egypt   
const html = `
<b>Egypt</b>
__________________________   
<b>Capital:</b> Cairo
<b>Area:</b> 995,450 Km²
<b>Population:</b> 102,334,404				
<b>Region:</b> Africa
<b>Currency:</b> Egyptian pound (E£, EGP)
<b>Languages:</b> Egyptian Arabic
<b>Phone code:</b> +20
<b>Neighbors:</b> 
<i>Gaza Strip(Palestine), Israel</i> to the northeast
<i>Sudan</i> to the south
<i>Libya</i> to the west
<b>Seas:</b>
<i>Gulf of Suez, Gulf of Aqaba, Red Sea</i> to the east
<i>Mediterranean Sea</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
Cairo (7,734,614)
Alexandria (3,811,516)
Giza (2,443,203)
Port Said (538,378)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Egypt"><b>Click for more info</b></a>
`        
                                                                            
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-egypt.png', {
        caption : 'Flag of Egypt'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-egypt.png', {
        caption : 'Egypt on a world map',
                                                                                
            });                   
        }
else if((msg.text.toLowerCase() === ('el salvador')) || (msg.text.toLowerCase() === ('salvador')) || (msg.text.toLowerCase() === ('salwador')) || (msg.text.toLowerCase() === ('el salwador')) || (msg.text.toLowerCase() === ('san salvador'))) {    
    // 		El Salvador   
const html = `
<b>El Salvador</b>
__________________________  
<b>Capital:</b> San Salvador
<b>Area:</b> 20,720 Km²
<b>Population:</b> 6,486,205				
<b>Region:</b> North America
<b>Currency:</b> United States dollar (USD)
<b>Languages:</b> Spanish
<b>Phone code:</b> +503
<b>Neighbors:</b> 
<i>Honduras</i> to the north and east
<i>Guatemala</i> to the northwest
<i>Nicaragua</i> maritime to the southeast
<b>Seas:</b>
<i>Pacific Ocean</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
San Salvador (525,990)
Soyapango (329,708)
Santa Ana (176,661)
San Miguel (161,880)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/El_Salvador"><b>Click for more info</b></a>
`        
                                                                                                                
        bot.sendMessage(msg.chat.id, html, {
        parse_mode : 'HTML',
        disable_web_page_preview : true,
        });
        bot.sendPhoto(msg.chat.id, './flags/flag-salv.png', {
        caption : 'Flag of El Salvador'
        });
        bot.sendPhoto(msg.chat.id, './maps/map-salv.png', {
        caption : 'El Salvador on a world map',
                                                                                                                    
            });                   
        } 
        else if((msg.text.toLowerCase() === ('equatorial guinea')) || (msg.text.toLowerCase() === ('ekvatorial guinea')) || (msg.text.toLowerCase() === ('malabo')) || (msg.text.toLowerCase() === ('ciudad de la paz'))) {    
            // 		Equatorial Guinea   
const html = `
<b>Equatorial Guinea</b>
__________________________  
<b>Capital:</b> Malabo (current),
Ciudad de la Paz (under construction)
<b>Area:</b> 28,050 Km²
<b>Population:</b> 1,402,985				
<b>Region:</b> Africa
<b>Currency:</b> Central African CFA franc (XAF)
<b>Languages:</b> Spanish, Portuguese, French
<b>Phone code:</b> +240
<b>Neighbors:</b> 
<i>Cameroon</i> to the north
<i>Gabon</i> to the east and south
<i>Niger</i> maritime to the northwest
<i>São Tomé and Príncipe</i> maritime to the southwest
<b>Seas:</b>
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Bata (173,046)
Malabo (155,963)
Ebebiyin (24,831)
Aconibe (11,192)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Equatorial_Guinea"><b>Click for more info</b></a>
`        
                                                                                                               
       bot.sendMessage(msg.chat.id, html, {
       parse_mode : 'HTML',
       disable_web_page_preview : true,
       });
       bot.sendPhoto(msg.chat.id, './flags/flag-eqg.png', {
       caption : 'Flag of Equatorial Guinea'
       });
       bot.sendPhoto(msg.chat.id, './maps/map-eqg.png', {
       caption : 'Equatorial Guinea on a world map',
                                                                                                                   
           });                   
       } 
       else if((msg.text.toLowerCase() === ('eritrea')) || (msg.text.toLowerCase() === ('eritreya')) || (msg.text.toLowerCase() === ('eritreia')) || (msg.text.toLowerCase() === ('asmara'))) {    
        // 		Eritrea  
const html = `
<b>Eritrea</b>
__________________________   
<b>Capital:</b> Asmara
<b>Area:</b> 101,000 Km²
<b>Population:</b> 3,546,421				
<b>Region:</b> Africa
<b>Currency:</b> Nakfa (ERN)
<b>Languages:</b> No official language
<b>Phone code:</b> +291
<b>Neighbors:</b> 
<i>Sudan</i> to the west
<i>Ethiopia</i> to the south
<i>Djibouti</i> to the southeast
<i>Saudi Arabia, Yemen</i> maritime to the east

<b>Seas:</b>
<i>Red Sea</i> to the east and northeast 
<pre>______________ </pre>
<b>Largest cities:</b>   
Asmara (563,930)
Keren (74,800)
Massawa (23,100)
Assab (21,300)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Eritrea"><b>Click for more info</b></a>
`        
                                                                                                           
   bot.sendMessage(msg.chat.id, html, {
   parse_mode : 'HTML',
   disable_web_page_preview : true,
   });
   bot.sendPhoto(msg.chat.id, './flags/flag-erit.png', {
   caption : 'Flag of Eritrea'
   });
   bot.sendPhoto(msg.chat.id, './maps/map-erit.png', {
   caption : 'Eritrea on a world map',
                                                                                                               
       });                   
   }
    else if((msg.text.toLowerCase() === ('estonia')) || (msg.text.toLowerCase() === ('eesti')) || (msg.text.toLowerCase() === ('tallinn')) || (msg.text.toLowerCase() === ('tallin'))) {    
    // 			Estonia  
const html = `
<b>Estonia</b>
__________________________   
<b>Capital:</b> Tallinn
<b>Area:</b> 42,390 Km²
<b>Population:</b> 1,326,535				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Estonian
<b>Phone code:</b> +372
<b>Neighbors:</b> 
<i>Russia</i> to the east
<i>Latvia</i> to the south
<i>Finland</i> maritime to the north
<i>Sweden</i> maritime to the west
<b>Seas:</b>
<i>Baltic Sea, Gulf of Riga</i> to the west
<i>Gulf of Finland</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
Tallinn (430,805)
Tartu (93,715)
Narva (56,103)
Pärnu (39,375)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Estonia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-est.png', {
caption : 'Flag of Estonia'
});
bot.sendPhoto(msg.chat.id, './maps/map-est.png', {
caption : 'Estonia on a world map',
                                                                                                           
   });                   
}

else if((msg.text.toLowerCase() === ('eswatini')) || (msg.text.toLowerCase() === ('esvatini')) || (msg.text.toLowerCase() === ('swaziland')) || (msg.text.toLowerCase() === ('svaziland')) || (msg.text.toLowerCase() === ('mbabane')) || (msg.text.toLowerCase() === ('lobamba'))) {    
    // 			Eswatini (fmr. "Swaziland")  
const html = `
<b>Eswatini (fmr. "Swaziland")</b>
__________________________ 
<b>Capital:</b> Mbabane (executive), Lobamba (legislative)
<b>Area:</b> 17,200 Km²
<b>Population:</b> 1,160,164				
<b>Region:</b> Africa
<b>Currency:</b> Lilangeni (SZL), South African rand (ZAR)
<b>Languages:</b> Swazi, English
<b>Phone code:</b> +268
<b>Neighbors:</b> 
<i>Mozambique</i> to the east
<i>South Africa</i> to the north, west, south
<pre>______________ </pre>
<b>Largest cities:</b>   
Manzini (110,537)
Mbabane (76,218)
Big Bend (10,342)
Malkerns (9,724)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Eswatini"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-esw.png', {
caption : 'Flag of Eswatini'
});
bot.sendPhoto(msg.chat.id, './maps/map-esw.png', {
caption : 'Eswatini on a world map',
                                                                                                           
   });                   
}

else if((msg.text.toLowerCase() === ('ethiopia')) || (msg.text.toLowerCase() === ('efiopia')) || (msg.text.toLowerCase() === ('efiopiya')) || (msg.text.toLowerCase() === ('addis ababa')) || (msg.text.toLowerCase() === ('addis abeba'))) {    
    // 			Ethiopia  
const html = `
<b>Ethiopia</b>
__________________________  
<b>Capital:</b> Addis Ababa
<b>Area:</b> 1,000,000 Km²
<b>Population:</b> 114,963,588				
<b>Region:</b> Africa
<b>Currency:</b> Birr (ETB)
<b>Languages:</b> Amharic, Oromo, Tigrinya, Somali, Afar
<b>Phone code:</b> +251
<b>Neighbors:</b> 
<i>Eritrea</i> to the north
<i>Djibouti</i> to the northeast
<i>Somalia</i> to the east
<i>Kenya</i> to the south
<i>South Sudan and Sudan</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Addis Ababa (3,352,000)
Gondar (500,788)
Mekelle (441,991)
Adama (338,940)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Ethiopia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-eth.png', {
caption : 'Flag of Ethiopia'
});
bot.sendPhoto(msg.chat.id, './maps/map-eth.png', {
caption : 'Ethiopia on a world map',
                                                                                                           
   });                   
}

else if((msg.text.toLowerCase() === ('fiji')) || (msg.text.toLowerCase() === ('fidji')) || (msg.text.toLowerCase() === ('fijie')) || (msg.text.toLowerCase() === ('fidjie')) || (msg.text.toLowerCase() === ('suva'))) {    
    // 		Fiji  
const html = `
<b>Fiji</b>
__________________________  
<b>Capital:</b> Suva
<b>Area:</b> 18,270 Km²
<b>Population:</b> 896,445				
<b>Region:</b> Oceania
<b>Currency:</b> Fijian dollar (FJD)
<b>Languages:</b> Fijian, English, Fiji Hindi
<b>Phone code:</b> +679
<b>Neighbors:</b> 
<i>Vanuatu</i> maritime to the west
<i>New Caledonia</i> maritime to the southwest
<i>Wallis, Futuna, the Samoas</i> maritime to the northeast
<i>Tonga</i> maritime to the east
<i>Kermadec Island, New Zealand</i> maritime to the southeast
<pre>______________ </pre>
<b>Largest cities:</b>   
Suva (77,366)
Lautoka (52,500)
Nadi (42,284)
Labasa (27,949)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Fiji"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-fiji.png', {
caption : 'Flag of Fiji'
});
bot.sendPhoto(msg.chat.id, './maps/map-fiji.png', {
caption : 'Fiji on a world map',
                                                                                                           
   });                   
}

else if((msg.text.toLowerCase() === ('finland')) || (msg.text.toLowerCase() === ('suomi')) || (msg.text.toLowerCase() === ('helsinki'))) {    
    // 	Finland  
const html = `
<b>Finland</b>
__________________________   
<b>Capital:</b> Helsinki
<b>Area:</b> 303,890 Km²
<b>Population:</b> 5,540,720				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Finnish, Swedish
<b>Phone code:</b> +358
<b>Neighbors:</b> 
<i>Norway</i> to the north
<i>Russia</i> to the east
<i>Sweden</i> to the northwest
<i>Estonia</i> maritime to the south
<b>Seas:</b>
<i>Gulf of Finland</i> to the south
<i>Gulf of Bothnia</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Helsinki (653,835)
Espoo (289,731)
Tampere (238,140)
Vantaa (233,775)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Finland"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-finl.jpg', {
caption : 'Flag of Finland'
});
bot.sendPhoto(msg.chat.id, './maps/map-finl.png', {
caption : 'Finland on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('france')) || (msg.text.toLowerCase() === ('french')) || (msg.text.toLowerCase() === ('french republic')) || (msg.text.toLowerCase() === ('paris'))) {    
    // 	France  
const html = `
<b>France</b>
__________________________  
<b>Capital:</b> Paris
<b>Area:</b> 547,557 Km²
<b>Population:</b> 65,273,511				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR), CFP franc (XPF)
<b>Languages:</b> French
<b>Phone code:</b> +33
<b>Neighbors:</b> 
<i>Belgium, Luxembourg</i> to the northeast
<i>the United Kingdom</i> maritime to the north
<i>Germany, Switzerland, Italy</i> to the east
<i>Andorra, Spain</i> to the southwest
<b>Seas:</b>
<i>the Manche (British Channel), the North Sea</i> to the north
<i>Atlantic Ocean</i> to the west
<i>Mediterranean Sea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
Paris (2,138,551)
Marseille (794,811)
Lyon (472,317)
Toulouse (433,055)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/France"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-france.png', {
caption : 'Flag of France'
});
bot.sendPhoto(msg.chat.id, './maps/map-france.png', {
caption : 'France on a world map',
                                                                                                           
   });                   
}


else if((msg.text.toLowerCase() === ('gabon')) || (msg.text.toLowerCase() === ('gabbon')) || (msg.text.toLowerCase() === ('libreville'))) {    
    // 	Gabon  
const html = `
<b>Gabon</b>
__________________________  
<b>Capital:</b> Libreville
<b>Area:</b> 257,670 Km²
<b>Population:</b> 2,225,734				
<b>Region:</b> Africa
<b>Currency:</b> Central African CFA franc (XAF)
<b>Languages:</b> French
<b>Phone code:</b> +241
<b>Neighbors:</b> 
<i>Equatorial Guinea, Cameroon</i> to the north
<i>Republic of the Congo</i> to the east and south
<i>San Tome and Principe</i> maritime to the west
<b>Seas:</b>
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Libreville (419,596)
Mandji (79,225)
Masuku (31,183)
Oyem (22,404)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Gabon"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-gabon.png', {
caption : 'Flag of Gabon'
});
bot.sendPhoto(msg.chat.id, './maps/map-gabon.png', {
caption : 'Gabon on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('gambia')) || (msg.text.toLowerCase() === ('gambiya')) || (msg.text.toLowerCase() === ('the gambia')) || (msg.text.toLowerCase() === ('the gambiya')) || (msg.text.toLowerCase() === ('banjul'))) {    
    //  Gambia  
const html = `
<b>Gambia</b>
__________________________   
<b>Capital:</b> Banjul
<b>Area:</b> 10,120 Km²
<b>Population:</b> 2,416,668				
<b>Region:</b> Africa
<b>Currency:</b> Dalasi (GMD)
<b>Languages:</b> English
<b>Phone code:</b> +220
<b>Neighbors:</b> 
<i>Senegal</i> to the north, east, south
<b>Seas:</b>
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Serrekunda (340,000)
Brikama (77,700)
Bakau (43,098)
Banjul (34,589)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/The_Gambia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-gambia.png', {
caption : 'Flag of Gambia'
});
bot.sendPhoto(msg.chat.id, './maps/map-gambia.png', {
caption : 'Gambia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('georgia')) || (msg.text.toLowerCase() === ('sakartvelo')) || (msg.text.toLowerCase() === ('tbilisi'))) {    
    //  Georgia  
const html = `
<b>Georgia</b>
__________________________   
<b>Capital:</b> Tbilisi
<b>Area:</b> 69,490 Km²
<b>Population:</b> 3,989,167				
<b>Region:</b> Europe/Asia
<b>Currency:</b> Georgian lari (₾, GEL)
<b>Languages:</b> Georgian
<b>Phone code:</b> +995
<b>Neighbors:</b> 
<i>Russia</i> to the north and northeast
<i>Azerbaijan</i> to the east and southeast
<i>Armenia, Turkey</i> to the south
<b>Seas:</b>
<i>Black Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Tbilisi (1,049,498)
Kutaisi (178,338)
Batumi (121,806)
Sukhumi (81,546)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Georgia_(country)"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-georg.png', {
caption : 'Flag of Georgia'
});
bot.sendPhoto(msg.chat.id, './maps/map-georg.png', {
caption : 'Georgia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('germany')) || (msg.text.toLowerCase() === ('germania')) || (msg.text.toLowerCase() === ('deutschland')) || (msg.text.toLowerCase() === ('allemagne')) || (msg.text.toLowerCase() === ('berlin'))) {    
    //  Germany  
const html = `
<b>Germany</b>
__________________________   
<b>Capital:</b> Berlin
<b>Area:</b> 348,560 Km²
<b>Population:</b> 83,783,942				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> German
<b>Phone code:</b> +49
<b>Neighbors:</b> 
<i>Denmark</i> to the north
<i>Sweden</i> maritime to the north
<i>Poland, Czech Republic</i> to the east
<i>Switzerland, Austria</i> to the south
<i>France</i> to the southwest
<i>Belgium, Luxembourg, Netherlands</i> to the west
<b>Seas:</b>
<i>North Sea</i> to the north
<i>Baltic Sea</i> to the northeast
<pre>______________ </pre>
<b>Largest cities:</b>   
Berlin (3,275,000)
Hamburg (1,686,100)
München (Munich) (1,185,400)
Köln (Cologne) (965,300)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Germany"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-germ.png', {
caption : 'Flag of Germany'
});
bot.sendPhoto(msg.chat.id, './maps/map-germ.png', {
caption : 'Germany on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('ghana')) || (msg.text.toLowerCase() === ('gana')) || (msg.text.toLowerCase() === ('accra')) || (msg.text.toLowerCase() === ('acra')) || (msg.text.toLowerCase() === ('akkra')) || (msg.text.toLowerCase() === ('akra'))) {    
    //  Ghana  
const html = `
<b>Ghana</b>
__________________________   
<b>Capital:</b> Accra
<b>Area:</b> 227,540 Km²
<b>Population:</b> 31,072,940				
<b>Region:</b> Africa
<b>Currency:</b> Cedi (GHS)
<b>Languages:</b> English
<b>Phone code:</b> +233
<b>Neighbors:</b> 
<i>Côte d'Ivoire</i> to the west
<i>Burkina Faso</i> to the north and northeast
<i>Togo</i> to the east
<b>Seas:</b>
<i>Gulf of Guinea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
Accra (1,963,264)
Kumasi (1,468,609)
Tamale (360,579)
Takoradze (232,919)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Ghana"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-ghana.png', {
caption : 'Flag of Ghana'
});
bot.sendPhoto(msg.chat.id, './maps/map-ghana.png', {
caption : 'Ghana on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('greece')) || (msg.text.toLowerCase() === ('ellada')) || (msg.text.toLowerCase() === ('grece')) || (msg.text.toLowerCase() === ('greese')) || (msg.text.toLowerCase() === ('grees')) || (msg.text.toLowerCase() === ('athens')) || (msg.text.toLowerCase() === ('atens'))) {    
    //  Greece  
const html = `
<b>Greece</b>
__________________________  
<b>Capital:</b> Athens
<b>Area:</b> 128,900 Km²
<b>Population:</b> 10,423,054				
<b>Region:</b> Europe
<b>Currency:</b> 	Euro (€, EUR)
<b>Languages:</b> Greek
<b>Phone code:</b> +30
<b>Neighbors:</b> 
<i>Macedonia, Bulgaria</i> to the north
<i>Albania</i> to the northwest
<i>Turkey</i> to the east(land and maritme)
<i>Cyprus</i> maritime to the southeast
<i>Libya, Egypt</i> maritime to the south
<i>Libya, Egypt</i> maritime to the south
<i>Italy</i> maritime to the west
<b>Seas:</b>
<i>Aegean Sea</i> to the east
<i>Cretan Sea, Libyan Sea</i> to the south
<i>Ionian Sea</i> to the west
<i>Mediterranean Sea</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
Athens (664,046)
Thessaloniki (315,196)
Patras (167,446)
Piraeus (163,688)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Greece"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-greece.png', {
caption : 'Flag of Greece'
});
bot.sendPhoto(msg.chat.id, './maps/map-greece.png', {
caption : 'Greece on a world map',
                                                                                                           
   });                   
}

else if((msg.text.toLowerCase() === ('grenada')) || (msg.text.toLowerCase() === ('granada')) || (msg.text.toLowerCase() === ('gwenad')) || (msg.text.toLowerCase() === (`st. george's`)) || (msg.text.toLowerCase() === (`st. georges`)) || (msg.text.toLowerCase() === (`saint georges`)) || (msg.text.toLowerCase() === (`saint george's`))) {    
    //  Grenada  
const html = `
<b>Grenada</b>
__________________________  
<b>Capital:</b> St. George's
<b>Area:</b> 340 Km²
<b>Population:</b> 112,523				
<b>Region:</b> North America
<b>Currency:</b> East Caribbean dollar (XCD)
<b>Languages:</b> English
<b>Phone code:</b> +1-473
<b>Neighbors:</b> 
<b>NO FORMAL NEIGHBORS!</b>
<b>Closest countries:</b> 
<i>Venezuela, Trinidad and Tobago</i> to the south
<i>St. Vincent and the Grenadines</i> to the north
<b>Seas:</b>
<i>Caribbean Sea</i> to the west
<i>Atlantic Ocean</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Saint George's (7,500)
Gouyave (3,378)
Grenville (2,476)
Victoria (2,256)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Grenada"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-gren.png', {
caption : 'Flag of Grenada'
});
bot.sendPhoto(msg.chat.id, './maps/map-gren.png', {
caption : 'Grenada on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('guatemala')) || (msg.text.toLowerCase() === ('gvatemala')) || (msg.text.toLowerCase() === ('gwatemala')) || (msg.text.toLowerCase() === ('guatemala city'))) {    
    // 	Guatemala  
const html = `
<b>Guatemala</b>
__________________________   
<b>Capital:</b> Guatemala City
<b>Area:</b> 107,160 Km²
<b>Population:</b> 17,915,568				
<b>Region:</b> North America
<b>Currency:</b> Quetzal (GTQ)
<b>Languages:</b> Spanish
<b>Phone code:</b> +502
<b>Neighbors:</b>  
<i>Mexico</i> to the north and west
<i>Belize</i> to the northeast
<i>Honduras</i> to the east
<i>El Salvador</i> to the southeast
<b>Seas:</b>
<i>Pacific Ocean</i> to the south
<i>Gulf of Honduras</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
Guatemala City (942,348)
Mixco (384,428)
Villa Nueva (301,947)
Quetzaltenango (120,496)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Guatemala"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-guat.jpg', {
caption : 'Flag of Guatemala'
});
bot.sendPhoto(msg.chat.id, './maps/map-guat.png', {
caption : 'Guatemala on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('guinea')) || (msg.text.toLowerCase() === ('gvinea')) || (msg.text.toLowerCase() === ('gwinea')) || (msg.text.toLowerCase() === ('conakry'))) {    
    // 		Guinea  
const html = `
<b>Guinea</b>
__________________________   
<b>Capital:</b> Conakry
<b>Area:</b> 245,720 Km²
<b>Population:</b> 13,132,795				
<b>Region:</b> Africa
<b>Currency:</b> Guinean franc (GNF)
<b>Languages:</b> French
<b>Phone code:</b> +224
<b>Neighbors:</b>  
<i>Guinea-Bissau</i> to the northwest
<i>Senegal</i> to the north
<i>Mali</i> to the northeast
<i>Côte d'Ivoire</i> to the southeast
<i>Liberia, Sierra Leone</i> to the south
<b>Seas:</b>
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Camayenne (1,871,242)
Conakry (1,767,200)
Nzérékoré (132,728)
Kindia (117,062)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Guinea"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-guin.png', {
caption : 'Flag of Guinea'
});
bot.sendPhoto(msg.chat.id, './maps/map-guin.png', {
caption : 'Guinea on a world map',
                                                                                                           
   });                   
}

else if((msg.text.toLowerCase() === ('guinea-bissau')) || (msg.text.toLowerCase() === ('gvinea-bissau')) || (msg.text.toLowerCase() === ('gwinea-bissau'))  || (msg.text.toLowerCase() === ('guinea bisau')) || (msg.text.toLowerCase() === ('guinea bissau')) || (msg.text.toLowerCase() === ('bissau')) || (msg.text.toLowerCase() === ('bisau'))) {    
    // 		Guinea-Bissau  
const html = `
<b>Guinea-Bissau</b>
__________________________    
<b>Capital:</b> Bissau
<b>Area:</b> 28,120 Km²
<b>Population:</b> 1,968,001				
<b>Region:</b> Africa
<b>Currency:</b> West African CFA franc (XOF)
<b>Languages:</b> Portuguese
<b>Phone code:</b> +245
<b>Neighbors:</b>  
<i>Senegal</i> to the north
<i>Guinea</i> to the south and east
<b>Seas:</b>
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
Bissau (388,028)
Bafatá (22,521)
Gabú (14,430)
Bissorã (12,688)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Guinea-Bissau"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-gubi.png', {
caption : 'Flag of Guinea-Bissau'
});
bot.sendPhoto(msg.chat.id, './maps/map-gubi.png', {
caption : 'Guinea-Bissau on a world map',
                                                                                                           
   });                   
}

else if((msg.text.toLowerCase() === ('guyana')) || (msg.text.toLowerCase() === ('gayana')) || (msg.text.toLowerCase() === ('georgetown'))) {    
    //  	Guyana 
const html = `
<b>Guyana</b>
__________________________  
<b>Capital:</b> Georgetown
<b>Area:</b> 196,850 Km²
<b>Population:</b> 786,552				
<b>Region:</b> South Africa
<b>Currency:</b> Guyanese dollar (GYD)
<b>Languages:</b> English
<b>Phone code:</b> +592
<b>Neighbors:</b>  
<i>Suriname</i> to the north
<i>Brazil</i> to the south and southwest
<i>Venezuela</i> to the west
<b>Seas:</b>
<i>Atlantic Ocean</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
Georgetown (235,017)
Linden (44,690)
New Amsterdam (35,039)
Anna Regina (12,448)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Guyana"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-guy.png', {
caption : 'Flag of Guyana'
});
bot.sendPhoto(msg.chat.id, './maps/map-guy.png', {
caption : 'Guyana on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('haiti')) || (msg.text.toLowerCase() === ('gaiti')) || (msg.text.toLowerCase() === ('hayiti')) || (msg.text.toLowerCase() === ('haïti')) || (msg.text.toLowerCase() === ('ayiti')) || (msg.text.toLowerCase() === ('port-au-prince')) || (msg.text.toLowerCase() === ('port au prince'))) {    
    //  	Haiti 
const html = `
<b>Haiti</b>
__________________________ 
<b>Capital:</b> Port-au-Prince
<b>Area:</b> 27,560 Km²
<b>Population:</b> 11,402,528				
<b>Region:</b> North America
<b>Currency:</b> Gourde (G, HTG)
<b>Languages:</b> French, Haitian Creole
<b>Phone code:</b> +509
<b>Neighbors:</b>  
<i>Dominican Republic</i> to the east
<i>Bahamas</i> maritime to the northwest
<i>Colombia</i> maritime to the south
<i>Cuba, Jamaica</i> maritime to the west
<b>Seas:</b>
<i>Atlantic Ocean</i> to the north
<i>Caribbean Sea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
Port-au-Prince (987,310)
Carrefour (511,345)
Delmas (395,260)
Pétion-Ville (376,834)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Haiti"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-haiti.png', {
caption : 'Flag of Haiti'
});
bot.sendPhoto(msg.chat.id, './maps/map-haiti.png', {
caption : 'Haiti on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('vatican')) || (msg.text.toLowerCase() === ('vatican city')) || (msg.text.toLowerCase() === ('holy see')) || (msg.text.toLowerCase() === ('sancta sedes')) || (msg.text.toLowerCase() === ('santa sede')) || (msg.text.toLowerCase() === ('holy sea'))) {    
    //  	Holy See
const html = `
<b>Holy See</b>
__________________________  
<b>Capital:</b> Vatican City (de facto)
<b>Area:</b> 44 ha
<b>Population:</b> 825				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Italian, French (diplomatic)
<b>Phone code:</b> +379
<b>Neighbors:</b>  
<i>Italy</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Vatican</i> (825)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Holy_See"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-vat.jpg', {
caption : 'Flag of Holy See'
});
bot.sendPhoto(msg.chat.id, './maps/map-vat.png', {
caption : 'Holy See on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('honduras')) || (msg.text.toLowerCase() === ('gonduras')) || (msg.text.toLowerCase() === ('tegucigalpa')) || (msg.text.toLowerCase() === ('tegusigalpa'))) {    
    //       Honduras
const html = `
<b>Honduras</b>
__________________________  
<b>Capital:</b> Tegucigalpa
<b>Area:</b> 111,890 Km²
<b>Population:</b> 9,904,607				
<b>Region:</b> North America
<b>Currency:</b> Lempira (HNL)
<b>Languages:</b> Spanish
<b>Phone code:</b> +504
<b>Neighbors:</b>  
<i>Guatemala, El Salvador</i> to the west
<i>Nicaragua</i> to the south
<i>Belize</i> maritime to the northwest
<i>Belize</i> maritime to the northwest
<i>Colombia</i> maritime to the southeast
<i>Cuba, Mexico</i> maritime to the north
<b>Seas:</b>
<i>Caribbean Sea</i> to the north and south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Tegucigalpa</i> (1,086,642)
<i>San Pedro Sula</i> (638,259)
<i>Choloma</i> (222,828)
<i>La Ceiba</i> (174,006)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Honduras"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-hond.png', {
caption : 'Flag of Honduras'
});
bot.sendPhoto(msg.chat.id, './maps/map-hond.png', {
caption : 'Honduras on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('hungary')) || (msg.text.toLowerCase() === ('magyarország')) || (msg.text.toLowerCase() === ('magyarorszag')) || (msg.text.toLowerCase() === ('budapest')) || (msg.text.toLowerCase() === ('budapesht'))) {    
    //       Hungary
const html = `
<b>Hungary</b>
__________________________  
<b>Capital:</b> Budapest
<b>Area:</b> 90,530 Km²
<b>Population:</b> 9,660,351				
<b>Region:</b> Europe
<b>Currency:</b> Forint (HUF)
<b>Languages:</b> Hungarian
<b>Phone code:</b> +36
<b>Neighbors:</b>  
<i>Slovakia</i> to the north
<i>Romania</i> to the east and southeast
<i>Serbia</i> to the south
<i>Croatia, Slovenia</i> to the southwest
<i>Austria</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Budapest</i> (1,772,000)
<i>Debrecen</i> (203,500)
<i>Szeged</i> (154,741)
<i>Miskolc</i> (147,999)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Hungary"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-hung.png', {
caption : 'Flag of Hungary'
});
bot.sendPhoto(msg.chat.id, './maps/map-hung.png', {
caption : 'Hungary on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('island')) || (msg.text.toLowerCase() === ('iceland')) || (msg.text.toLowerCase() === ('reykjavík')) || (msg.text.toLowerCase() === ('reykjavik'))) {    
    //       Iceland
const html = `
<b>Iceland</b>
__________________________  
<b>Capital:</b> Reykjavík
<b>Area:</b> 100,250 Km²
<b>Population:</b> 341,243				
<b>Region:</b> Europe
<b>Currency:</b> Icelandic króna (ISK)
<b>Languages:</b> Icelandic
<b>Phone code:</b> +354
<b>Neighbors:</b>  
<i>Greenland(Denmark)</i> maritime to the north and west
<i>Faroe Islands, United Kingdom, Ireland</i> maritime to the southeast
<i>Norway</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Reykjavik</i> (118,918)
<i>Kopavogur</i> (31,719)
<i>Hafnarfjoerdur</i> (26,808)
<i>Akureyri</i> (17,693)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Iceland"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-icel.png', {
caption : 'Flag of Iceland'
});
bot.sendPhoto(msg.chat.id, './maps/map-icel.png', {
caption : 'Iceland on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('india')) || (msg.text.toLowerCase() === ('indiya')) || (msg.text.toLowerCase() === ('indija')) || (msg.text.toLowerCase() === ('new delhi')) || (msg.text.toLowerCase() === ('new deli')) || (msg.text.toLowerCase() === ('deli')) || (msg.text.toLowerCase() === ('delhi'))) {    
    //   India
const html = `
<b>India</b>
__________________________  
<b>Capital:</b> New Delhi
<b>Area:</b> 2,973,190 Km²
<b>Population:</b> 1,380,004,385				
<b>Region:</b> Asia
<b>Currency:</b> Indian rupee (₹, INR)
<b>Languages:</b> Hindi, English
<b>Phone code:</b> +91
<b>Neighbors:</b>  
<i>Pakistan</i> to the northwest
<i>China, Nepal</i> to the north
<i>Bhutan</i> to the northeast
<i>Bangladesh, Myanmar</i> to the east
<i>Sri Lanka</i> maritime to the southeast
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Mumbai</i> (12,442,373)
<i>Delhi</i> (11,007,835)
<i>Bangalore</i> (8,436,675)
<i>Hyderabad</i> (6,809,970)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/India"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-india.png', {
caption : 'Flag of India'
});
bot.sendPhoto(msg.chat.id, './maps/map-india.png', {
caption : 'India on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('indonesia')) || (msg.text.toLowerCase() === ('indonesiya')) || (msg.text.toLowerCase() === ('indonesija')) || (msg.text.toLowerCase() === ('jakarta')) || (msg.text.toLowerCase() === ('djakarta'))) {    
    //   Indonesia
const html = `
<b>Indonesia</b>
__________________________   
<b>Capital:</b> Jakarta
<b>Area:</b> 1,811,570 Km²
<b>Population:</b> 273,523,615				
<b>Region:</b> Asia/Oceania
<b>Currency:</b> Indonesian rupiah (Rp, IDR)
<b>Languages:</b> Indonesian
<b>Phone code:</b> +62
<b>Neighbors:</b>  
<i>Malaysia</i> to the north
<i>Papua New Guinea, East Timor</i> to the east
<i>Singapore, Malaysia, Philippines</i> maritime to the northeast
<i>Andaman and Nicobar Islands(India)</i> maritime to the northwest
<i>Australia</i> maritime to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Jakarta</i> (34,540,000)
<i>Bandung</i> (7,065,000)
<i>Surabaya</i> (6,499,000)
<i>Medan</i> (3,632,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Indonesia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-indon.png', {
caption : 'Flag of Indonesia'
});
bot.sendPhoto(msg.chat.id, './maps/map-indon.png', {
caption : 'Indonesia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('iran')) || (msg.text.toLowerCase() === ('tehran')) || (msg.text.toLowerCase() === ('teheran')) || (msg.text.toLowerCase() === ('tegeran'))) {    
    //   Iran
const html = `
<b>Iran</b>
__________________________  
<b>Capital:</b> Tehran
<b>Area:</b> 1,628,550 Km²
<b>Population:</b> 83,992,949				
<b>Region:</b> Asia
<b>Currency:</b> Iranian rial (ریال, IRR)
<b>Languages:</b> Persian
<b>Phone code:</b> +98
<b>Neighbors:</b>  
<i>Azerbaijan, Turkmenistan, Armenia</i> to the north
<i>Afghanistan, Pakistan</i> to the east
<i>Iraq, Turkey</i> to the west
<i>Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, the United Arab Emirates</i> maritime to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Tehran</i> (8,154,051)
<i>Mashhad</i> (2,749,374)
<i>Isfahan</i> (1,756,126)
<i>Karaj</i> (1,460,665)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Iran"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-iran.png', {
caption : 'Flag of Iran'
});
bot.sendPhoto(msg.chat.id, './maps/map-iran.png', {
caption : 'Iran on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('iraq')) || (msg.text.toLowerCase() === ('irak')) || (msg.text.toLowerCase() === ('iraque')) || (msg.text.toLowerCase() === ('baghdad')) || (msg.text.toLowerCase() === ('bagdad'))) {    
    //   Iraq
const html = `
<b>Iraq</b>
__________________________   
<b>Capital:</b> Baghdad
<b>Area:</b> 434,320 Km²
<b>Population:</b> 40,222,493				
<b>Region:</b> Asia
<b>Currency:</b> Iraqi dinar (IQD)
<b>Languages:</b> Arabic, Kurdish
<b>Phone code:</b> +964
<b>Neighbors:</b>  
<i>Turkey</i> to the north
<i>Iran</i> to the east
<i>Syria, Jordan</i> to the west
<i>Saudi Arabia, Kuwait</i> to the south
<b>Seas:</b>
<i>Persian Gulf</i> to the southeast
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Baghdad</i> (7,216,000)
<i>Basra</i> (2,600,000)
<i>Mosul</i> (1,739,800)
<i>Erbil</i> (932,800)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Iraq"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-iraq.png', {
caption : 'Flag of Iraq'
});
bot.sendPhoto(msg.chat.id, './maps/map-iraq.png', {
caption : 'Iraq on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('ireland')) || (msg.text.toLowerCase() === ('eire')) || (msg.text.toLowerCase() === ('airlann')) || (msg.text.toLowerCase() === ('éire')) || (msg.text.toLowerCase() === ('dublin'))) {    
    //  Ireland
const html = `
<b>Ireland</b>
__________________________  
<b>Capital:</b> Dublin
<b>Area:</b> 68,890 Km²
<b>Population:</b> 4,937,786				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Irish, English
<b>Phone code:</b> +353
<b>Neighbors:</b>  
<i>Northern Ireland(UK)</i> to the northeast
<i>United Kingdom</i> maritime to the east
<b>Seas:</b>
<i>Atlantic Ocean</i> to the west
<i>Celtic Sea</i> to the south
<i>Irish Sea</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Dublin</i> (1,110,627)
<i>Belfast</i> (579,726)
<i>Cork</i> (198,582)
<i>Derry</i> (93,512)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Ireland"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-irel.png', {
caption : 'Flag of Ireland'
});
bot.sendPhoto(msg.chat.id, './maps/map-irel.png', {
caption : 'Ireland on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('israel')) || (msg.text.toLowerCase() === ('israil')) || (msg.text.toLowerCase() === ('jerusalem')) || (msg.text.toLowerCase() === ('jerusalim'))) {    
    //  Israel
const html = `
<b>Israel</b>
__________________________  
<b>Capital:</b> Jerusalem
<b>Area:</b> 21,640 Km²
<b>Population:</b> 8,655,535				
<b>Region:</b> Asia
<b>Currency:</b> New shekel (₪‎, ILS)
<b>Languages:</b> Irish, English
<b>Phone code:</b> +972
<b>Neighbors:</b>  
<i>Lebanon</i> to the north
<i>Syria, Jordan</i> to the east
<i>Egypt</i> to the east
<b>Seas:</b>
<i>Levantine Sea, Mediterranean Sea</i> to the west
<i>Aqaba(gulf)</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Jerusalem</i> (801,000)
<i>Tel Aviv</i> (432,892)
<i>Haifa</i> (267,300)
<i>Ashdod</i> (224,656)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Israel"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-isr.png', {
caption : 'Flag of Israel'
});
bot.sendPhoto(msg.chat.id, './maps/map-isr.png', {
caption : 'Israel on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('italy')) || (msg.text.toLowerCase() === ('italia')) || (msg.text.toLowerCase() === ('rome'))) {    
    //  Italy
const html = `
<b>Italy</b>
__________________________   
<b>Capital:</b> Rome
<b>Area:</b> 294,140 Km²
<b>Population:</b> 60,461,826				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Italian
<b>Phone code:</b> +39
<b>Neighbors:</b>  
<i>Austria, Switzerland</i> to the north
<i>France</i> to the west
<i>Slovenia</i> to the east
<i>Croatia, Montenegro, Albania, Greece</i> maritime to the east
<i>Algeria, Tunisia, Libya, Malta</i> maritime to the south
<i>Spain</i> maritime to the west
<b>Seas:</b>
<i>Adriatic Sea</i> to the east
<i>Ionian Sea</i> to the south
<i>Ligurian Sea, Tyrrhenian Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Rome</i> (2,837,332)
<i>Milan</i> (1,396,059)
<i>Naples</i> (962,589)
<i>Turin</i> (870,952)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Italy"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-ital.jpg', {
caption : 'Flag of Italy'
});
bot.sendPhoto(msg.chat.id, './maps/map-ital.png', {
caption : 'Italy on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('jamaica')) || (msg.text.toLowerCase() === ('jamayca')) || (msg.text.toLowerCase() === ('yamaica')) || (msg.text.toLowerCase() === ('yamayca')) || (msg.text.toLowerCase() === ('yamayka')) || (msg.text.toLowerCase() === ('jamaika')) || (msg.text.toLowerCase() === ('yamaika')) || (msg.text.toLowerCase() === ('jamayka')) || (msg.text.toLowerCase() === ('kingston'))) {    
    //  Jamaica
const html = `
<b>Jamaica</b>
__________________________   
<b>Capital:</b> Kingston
<b>Area:</b> 10,830 Km²
<b>Population:</b> 2,961,167				
<b>Region:</b> North America
<b>Currency:</b> Jamaican dollar (JMD)
<b>Languages:</b> English
<b>Phone code:</b> +1-876, +1-658
<b>Neighbors:</b>  
<i>Cayman Islands(UK)</i> maritime to the northwest
<i>Cuba</i> maritime to the north
<i>Haiti</i> maritime to the east
<i>Colombia</i> maritime to the south
<b>Seas:</b>
<i>Caribbean Sea</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Kingston</i> (937,700)
<i>Spanish Town</i> (145,018)
<i>Portmore</i> (102,861)
<i>Montego Bay</i> (82,867)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Jamaica"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-jam.png', {
caption : 'Flag of Jamaica'
});
bot.sendPhoto(msg.chat.id, './maps/map-jam.png', {
caption : 'Jamaica on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('japan')) || (msg.text.toLowerCase() === ('日本国')) || (msg.text.toLowerCase() === ('日本')) || (msg.text.toLowerCase() === ('tokyo')) || (msg.text.toLowerCase() === ('tokio'))) {    
    //  Japan
const html = `
<b>Japan</b>
__________________________ 
<b>Capital:</b> Tokyo
<b>Area:</b> 364,555 Km²
<b>Population:</b> 126,476,461				
<b>Region:</b> Asia
<b>Currency:</b> Japanese yen (¥)
<b>Languages:</b> Japanese
<b>Phone code:</b> +81
<b>Neighbors:</b>  
<i>Russia</i> maritime to the north and west
<i>North Korea, South Korea, China</i> maritime to the west
<i>Taiwan, Philippines</i> maritime to the southwest
<i>Northern Mariana Islands(the USA)</i> maritime to the south
<b>Seas:</b>
<i>Pacific Ocean</i> to the east
<i>Sea of Okhotsk</i> to the north
<i>Sea of Japan</i> to the west
<i>East China Sea</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Tokyo</i> (8,956,000)
<i>Yokohama</i> (3,690,000)
<i>Osaka</i> (2,670,000)
<i>Nagoya</i> (2,266,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Japan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-jap.png', {
caption : 'Flag of Japan'
});
bot.sendPhoto(msg.chat.id, './maps/map-jap.png', {
caption : 'Japan on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('jordan')) || (msg.text.toLowerCase() === ('jordania')) || (msg.text.toLowerCase() === ('yordania')) || (msg.text.toLowerCase() === ('iordania')) || (msg.text.toLowerCase() === ('iordan')) || (msg.text.toLowerCase() === ('amman')) || (msg.text.toLowerCase() === ('aman'))) {    
    //  Jordan
const html = `
<b>Jordan</b>
__________________________  
<b>Capital:</b> Amman
<b>Area:</b> 88,780 Km²
<b>Population:</b> 10,203,134				
<b>Region:</b> Asia
<b>Currency:</b> Jordanian dinar (JOD)
<b>Languages:</b> Arabic
<b>Phone code:</b> +962
<b>Neighbors:</b>  
<i>Syria</i> to the north
<i>Iraq</i> to the northwest
<i>Saudi Arabia</i> to the west and south
<i>Israel</i> to the west
<b>Seas:</b>
<i>Aqaba(gulf)</i> to the southeast
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Amman</i> (1,812,059)
<i>Zarqa</i> (635,160)
<i>Irbid</i> (502,714)
<i>Russeifa</i> (472,604)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Jordan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-jor.png', {
caption : 'Flag of Jordan'
});
bot.sendPhoto(msg.chat.id, './maps/map-jor.png', {
caption : 'Jordan on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('kazakhstan')) || (msg.text.toLowerCase() === ('kazahstan')) || (msg.text.toLowerCase() === ('қазақстан')) || (msg.text.toLowerCase() === ('казакстан')) || (msg.text.toLowerCase() === ('казахстан')) || (msg.text.toLowerCase() === ('nur sultan')) || (msg.text.toLowerCase() === ('nur-sultan')) || (msg.text.toLowerCase() === ('almaty'))) {    
    //  Kazakhstan
const html = `
<b>Kazakhstan</b>
__________________________  
<b>Capital:</b> Nur-Sultan
<b>Area:</b> 2,699,700 Km²
<b>Population:</b> 18,776,707				
<b>Region:</b> Asia
<b>Currency:</b> Tenge (₸, KZT)
<b>Languages:</b> Kazakh, Russian
<b>Phone code:</b> +7-6xx, +7-7xx
<b>Neighbors:</b>  
<i>Russia</i> to the north and west
<i>China</i> to the east
<i>Kyrgyzstan, Uzbekistan, Turkmenistan</i> to the south
<b>Seas:</b>
<i>Aral Sea</i> to the south
<i>Caspian Sea</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Almaty</i> (1,854,656)
<i>Nur-Sultan</i> (1,127,263)
<i>Shymkent</i> (1,038,278)
<i>Aktobe</i> (497,381)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Kazakhstan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-kaz.jpg', {
caption : 'Flag of Kazakhstan'
});
bot.sendPhoto(msg.chat.id, './maps/map-kaz.png', {
caption : 'Kazakhstan on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('kenya')) || (msg.text.toLowerCase() === ('kenia')) || (msg.text.toLowerCase() === ('keniya')) || (msg.text.toLowerCase() === ('nairobi')) || (msg.text.toLowerCase() === ('nayrobi'))) {    
    //  Kenya
const html = `
<b>Kenya</b>
__________________________ 
<b>Capital:</b> Nairobi
<b>Area:</b> 569,140 Km²
<b>Population:</b> 53,771,296				
<b>Region:</b> Africa
<b>Currency:</b> Kenyan shilling (KES)
<b>Languages:</b> Swahili
<b>Phone code:</b> +254
<b>Neighbors:</b>  
<i>South Sudan, Ethiopia</i> to the north
<i>Somalia</i> to the east
<i>Tanzania</i> to the south
<i>Uganda</i> to the west
<b>Seas:</b>
<i>Indian Ocean</i> to the east
<i>Lake Victoria</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Nairobi Metro</i> (6,547,547)
<i>Nairobi</i> (3,375,000)
<i>Mombasa</i> (1,200,000)
<i>Kisumu</i> (409,928)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Kenya"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-ken.png', {
caption : 'Flag of Kenya'
});
bot.sendPhoto(msg.chat.id, './maps/map-ken.png', {
caption : 'Kenya on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('kiribati')) || (msg.text.toLowerCase() === ('kirybati')) || (msg.text.toLowerCase() === ('kiribaty')) || (msg.text.toLowerCase() === ('kiribatie')) || (msg.text.toLowerCase() === ('south tarawa on tarawa')) || (msg.text.toLowerCase() === ('south tarawa')) || (msg.text.toLowerCase() === ('tarawa'))) {    
    //  Kiribati
const html = `
<b>Kiribati</b>
__________________________  
<b>Capital:</b> South Tarawa on Tarawa
<b>Area:</b> 810 Km²
<b>Population:</b> 119,449				
<b>Region:</b> Oceania
<b>Currency:</b> Australian dollar (AUD)
<b>Languages:</b> English, Gilbertese
<b>Phone code:</b> +686
<b>Neighbors:</b>  
<i>Cook Islands(New Zealand)</i> maritime to the south
<i>Marshall Islands, Nauru</i> to the northwest
<i>Tokelau(New Zealand), Tuvalu</i> to the southwest
<i>French Polynesia(France)</i> to the southeast
<i>the USA</i> to the northeast
<b>Seas:</b>
<i>Pacific Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Tarawa</i> (40,311)
<i>Betio Village</i> (12,509)
<i>Bikenibeu Village</i> (6,170)
<i>Teaoraereke Village</i> (3,939)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Kiribati"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-kirib.png', {
caption : 'Flag of Kiribati'
});
bot.sendPhoto(msg.chat.id, './maps/map-kir.png', {
caption : 'Kiribati on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('kuwait')) || (msg.text.toLowerCase() === ('kuweit')) || (msg.text.toLowerCase() === ('kuwayt')) || (msg.text.toLowerCase() === ('kuweyt')) || (msg.text.toLowerCase() === ('kuwait city'))) {    
    //  Kuwait
const html = `
<b>Kuwait</b>
__________________________   
<b>Capital:</b> Kuwait City
<b>Area:</b> 17,820 Km²
<b>Population:</b> 4,270,571				
<b>Region:</b> Asia
<b>Currency:</b> Kuwaiti dinar (KWD)
<b>Languages:</b> Arabic
<b>Phone code:</b> +965
<b>Neighbors:</b>  
<i>Iraq</i> to the north and west
<i>Saudi Arabia</i> to the south
<i>Iran</i> maritime to the east
<b>Seas:</b>
<i>Persian Gulf</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Al Ahmadi</i> (637,411)
<i>Ḩawallī</i> (164,212)
<i>Şabāḩ as Sālim</i> (139,163)
<i>Al Farwānīyah</i> (86,525)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Kuwait"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-kuw.png', {
caption : 'Flag of Kuwait'
});
bot.sendPhoto(msg.chat.id, './maps/map-kuw.png', {
caption : 'Kuwait on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('kyrgyzstan')) || (msg.text.toLowerCase() === ('kirgizstan')) || (msg.text.toLowerCase() === ('bishkek')) || (msg.text.toLowerCase() === ('byshkek'))) {    
    //  Kyrgyzstan
const html = `
<b>Kyrgyzstan</b>
__________________________  
<b>Capital:</b> Bishkek
<b>Area:</b> 191,800 Km²
<b>Population:</b> 6,524,195				
<b>Region:</b> Asia
<b>Currency:</b> Kyrgyzstani som (c, KGS)
<b>Languages:</b> Kyrgyz, Russian
<b>Phone code:</b> +996
<b>Neighbors:</b>  
<i>Kazakhstan</i> to the north
<i>Uzbekistan</i> to the west
<i>Tajikistan</i> to the south
<i>China</i> to the south and east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Bishkek</i> (900,000)
<i>Osh</i> (200,000)
<i>Jalal-Abad</i> (75,700)
<i>Karakol</i> (70,171)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Kyrgyzstan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-kyr.png', {
caption : 'Flag of Kyrgyzstan'
});
bot.sendPhoto(msg.chat.id, './maps/map-kyr.png', {
caption : 'Kyrgyzstan on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('laos')) || (msg.text.toLowerCase() === ('lao')) || (msg.text.toLowerCase() === ('vientiane')) || (msg.text.toLowerCase() === ('vientian')) || (msg.text.toLowerCase() === ('vientyan')) || (msg.text.toLowerCase() === ('vyentyan'))) {    
    //  Laos
const html = `
<b>Laos</b>
__________________________   
<b>Capital:</b> Vientiane
<b>Area:</b> 230,800 Km²
<b>Population:</b> 7,275,560				
<b>Region:</b> Asia
<b>Currency:</b> Kip (₭, LAK)
<b>Languages:</b> Lao
<b>Phone code:</b> +856
<b>Neighbors:</b>  
<i>China</i> to the north
<i>Vietnam</i> to the east
<i>Cambodia</i> to the south
<i>Thailand</i> to the west
<i>Myanmar</i> to the northwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Vientiane</i> (768,743)
<i>Pakse</i> (88,332)
<i>Savannakhet</i> (66,553)
<i>Luang Prabang</i> (47,378)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Laos"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-laos.png', {
caption : 'Flag of Laos'
});
bot.sendPhoto(msg.chat.id, './maps/map-laos.png', {
caption : 'Laos on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('latvia')) || (msg.text.toLowerCase() === ('latvija')) || (msg.text.toLowerCase() === ('riga'))) {    
    //  Latvia
const html = `
<b>Latvia</b>
__________________________   
<b>Capital:</b> Riga
<b>Area:</b> 62,200 Km²
<b>Population:</b> 1,886,198				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Latvian
<b>Phone code:</b> +371
<b>Neighbors:</b>  
<i>Estonia</i> to the north
<i>Russia</i> to the east
<i>Belarus, Lithuania</i> to the south
<i>Sweden</i> maritime to the west
<b>Seas:</b>
<i>Baltic Sea</i> to the west
<i>Gulf of Riga</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Riga</i> (742,572)
<i>Daugavpils</i> (111,564)
<i>Liepāja</i> (85,132)
<i>Jelgava</i> (61,791)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Latvia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-lat.png', {
caption : 'Flag of Latvia'
});
bot.sendPhoto(msg.chat.id, './maps/map-lat.png', {
caption : 'Latvia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('lebanon')) || (msg.text.toLowerCase() === ('libanaise')) || (msg.text.toLowerCase() === ('livan')) || (msg.text.toLowerCase() === ('liwan')) || (msg.text.toLowerCase() === ('beirut')) || (msg.text.toLowerCase() === ('beyrut'))) {    
    //  Lebanon
const html = `
<b>Lebanon</b>
__________________________  
<b>Capital:</b> Beirut
<b>Area:</b> 10,230	Km²
<b>Population:</b> 6,825,445				
<b>Region:</b> Asia
<b>Currency:</b> Lebanese pound (LBP)
<b>Languages:</b> Arabic
<b>Phone code:</b> +961
<b>Neighbors:</b>  
<i>Syria</i> to the north and east
<i>Israel</i> to the south
<b>Seas:</b>
<i>Mediterranean Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Beirut</i> (1,916,100)
<i>Tripoli</i> (229,398)
<i>Sidon</i> (163,554)
<i>Tyre</i> (135,204)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Lebanon"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-leb.jpg', {
caption : 'Flag of Lebanon'
});
bot.sendPhoto(msg.chat.id, './maps/map-leb.png', {
caption : 'Lebanon on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('lesotho')) || (msg.text.toLowerCase() === ('lesoto')) || (msg.text.toLowerCase() === ('maseru'))) {    
    //  Lesotho
const html = `
<b>Lesotho</b>
__________________________   
<b>Capital:</b> Maseru
<b>Area:</b> 30,360	Km²
<b>Population:</b> 2,142,249				
<b>Region:</b> Africa
<b>Currency:</b> Loti (LSL), South African rand (ZAR)
<b>Languages:</b> Sesotho, English
<b>Phone code:</b> +266
<b>Neighbors:</b>  
<i>South Africa</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Maseru</i> (330,760)
<i>Maputsoe</i> (55,541)
<i>Mafeteng</i> (39,754)
<i>Hlotse</i> (38,558)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Lesotho"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-les.png', {
caption : 'Flag of Lesotho'
});
bot.sendPhoto(msg.chat.id, './maps/map-les.png', {
caption : 'Lesotho on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('liberia')) || (msg.text.toLowerCase() === ('liberya')) || (msg.text.toLowerCase() === ('liberija')) || (msg.text.toLowerCase() === ('liberija')) || (msg.text.toLowerCase() === ('monrovia')) || (msg.text.toLowerCase() === ('monrovija')) || (msg.text.toLowerCase() === ('monroviya'))) {    
    //  Liberia
const html = `
<b>Liberia</b>
__________________________  
<b>Capital:</b> Monrovia
<b>Area:</b> 96,320	Km²
<b>Population:</b> 5,057,681				
<b>Region:</b> Africa
<b>Currency:</b> Liberian dollar (LRD)
<b>Languages:</b> English
<b>Phone code:</b> +231
<b>Neighbors:</b>  
<i>Sierra Leone</i> to the northwest
<i>Guinea</i> to the north
<i>Côte d'Ivoire</i> to the east
<b>Seas:</b>
<i>Atlantic ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Monrovia</i> (939,524)
<i>Gbarnga</i> (45,835)
<i>Kakata</i> (33,945)
<i>Bensonville</i> (33,188)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Liberia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-lib.png', {
caption : 'Flag of Liberia'
});
bot.sendPhoto(msg.chat.id, './maps/map-lib.png', {
caption : 'Liberia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('libya')) || (msg.text.toLowerCase() === ('livia')) || (msg.text.toLowerCase() === ('libia')) || (msg.text.toLowerCase() === ('libija')) || (msg.text.toLowerCase() === ('libiya')) || (msg.text.toLowerCase() === ('tripoli')) || (msg.text.toLowerCase() === ('tripoly'))) {    
    //  Libya
const html = `
<b>Libya</b>
__________________________ 
<b>Capital:</b> Tripoli
<b>Area:</b> 1,759,540 Km²
<b>Population:</b> 6,871,292				
<b>Region:</b> Africa
<b>Currency:</b> Libyan dinar (LYD)
<b>Languages:</b> Arabic
<b>Phone code:</b> +218
<b>Neighbors:</b>  
<i>Egypt</i> to the east
<i>Sudan</i> to the southeast
<i>Niger, Chad</i> to the south
<i>Tunisia, Algeria</i> to the west
<b>Seas:</b>
<i>Mediterranean Sea</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Tripoli</i> (1,126,000)
<i>Benghazi</i> (631,555)
<i>Mişrātah</i> (259,056)
<i>Al Bayḑā'</i> (250,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Libya"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-libya.png', {
caption : 'Flag of Libya'
});
bot.sendPhoto(msg.chat.id, './maps/map-libya.png', {
caption : 'Libya on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('liechtenstein')) || (msg.text.toLowerCase() === ('lichtenstein')) || (msg.text.toLowerCase() === ('lichtenshtein')) || (msg.text.toLowerCase() === ('lichtenshteyn')) || (msg.text.toLowerCase() === ('liechtenshteyn')) || (msg.text.toLowerCase() === ('vaduz'))) {    
    //  Liechtenstein
const html = `
<b>Liechtenstein</b>
__________________________  
<b>Capital:</b> Vaduz
<b>Area:</b> 160 Km²
<b>Population:</b> 38,128				
<b>Region:</b> Europe
<b>Currency:</b> Swiss franc (CHF)
<b>Languages:</b> German
<b>Phone code:</b> +423
<b>Neighbors:</b>  
<i>Austria</i> to the east
<i>Switzerland</i> to the west, north, south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Schaan</i> (5,748)
<i>Vaduz</i> (5,197)
<i>Triesen</i> (4,701)
<i>Balzers</i> (4,447)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Liechtenstein"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-liech.jpg', {
caption : 'Flag of Liechtenstein'
});
bot.sendPhoto(msg.chat.id, './maps/map-liech.png', {
caption : 'Liechtenstein on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('lithuania')) || (msg.text.toLowerCase() === ('lietuva')) || (msg.text.toLowerCase() === ('litva')) || (msg.text.toLowerCase() === ('vilnius')) || (msg.text.toLowerCase() === ('vilnus'))) {    
    //  Lithuania
const html = `
<b>Lithuania</b>
__________________________ 
<b>Capital:</b> Vilnius
<b>Area:</b> 62,674 Km²
<b>Population:</b> 2,722,289				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Lithuanian
<b>Phone code:</b> +370
<b>Neighbors:</b>  
<i>Latvia</i> to the east
<i>Belarus</i> to the east and south
<i>Poland, Kaliningrad Oblast(Russia)</i> to the southwest
<b>Seas:</b> 
<i>Baltic Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Vilnius</i> (700,725)
<i>Kaunas</i> (381,007)
<i>Klaipėda</i> (209,240)
<i>Šiauliai</i> (141,784)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Lithuania"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-liet.jpg', {
caption : 'Flag of Lithuania'
});
bot.sendPhoto(msg.chat.id, './maps/map-liet.png', {
caption : 'Lithuania on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('luxembourg')) || (msg.text.toLowerCase() === ('luxemburg')) || (msg.text.toLowerCase() === ('luksemburg')) || (msg.text.toLowerCase() === ('luksembourg')) || (msg.text.toLowerCase() === ('luxembourg city'))) {    
    //  Luxembourg
const html = `
<b>Luxembourg</b>
__________________________  
<b>Capital:</b> Luxembourg City
<b>Area:</b> 2,590 Km²
<b>Population:</b> 625,978				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Luxembourgish, French, German
<b>Phone code:</b> +352
<b>Neighbors:</b>  
<i>Belgium</i> to the west and north
<i>France</i> to the south
<i>Germany</i> to the northeast and east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Luxembourg</i> (76,684)
<i>Esch-sur-Alzette</i> (28,228)
<i>Dudelange</i> (18,013)
<i>Schifflange</i> (8,155)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Luxembourg"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-lux.png', {
caption : 'Flag of Luxembourg'
});
bot.sendPhoto(msg.chat.id, './maps/map-lux.png', {
caption : 'Luxembourg on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('madagascar')) || (msg.text.toLowerCase() === ('madagaskar')) || (msg.text.toLowerCase() === ('antananarivo')) || (msg.text.toLowerCase() === ('antananarivu')) || (msg.text.toLowerCase() === ('antananariwo')) || (msg.text.toLowerCase() === ('antananariwu'))) {    
    //  Madagascar
const html = `
<b>Madagascar</b>
__________________________  
<b>Capital:</b> Antananarivo
<b>Area:</b> 581,795 Km²
<b>Population:</b> 27,691,018				
<b>Region:</b> Africa
<b>Currency:</b> Ariary (MGA)
<b>Languages:</b> Malagasy, French
<b>Phone code:</b> +261
<b>Neighbors:</b>  
<i>Mozambique</i> maritime to the west
<i>Comoros, Seychelles, Mayotte(France)</i> maritime to the northwest
<i>Mauritius, Réunion(France)</i> maritime to the east
<i>French Southern and Antarctic Lands(France)</i> maritime to the southeast
<b>Seas:</b> 
<i>Indian Ocean</i> to the east, north and south
<i>Mozambique strait</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Antananarivo</i> (1,391,433)
<i>Toamasina</i> (206,373)
<i>Antsirabe</i> (186,253)
<i>Fianarantsoa</i> (167,227)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Madagascar"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mad.png', {
caption : 'Flag of Madagascar'
});
bot.sendPhoto(msg.chat.id, './maps/map-mad.png', {
caption : 'Madagascar on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('malawi')) || (msg.text.toLowerCase() === ('malavi')) || (msg.text.toLowerCase() === ('malaŵi')) || (msg.text.toLowerCase() === ('lilongwe')) || (msg.text.toLowerCase() === ('lilongve'))) {    
    //  Malawi
const html = `
<b>Malawi</b>
__________________________  
<b>Capital:</b> Lilongwe
<b>Area:</b> 94,280 Km²
<b>Population:</b> 19,129,952			
<b>Region:</b> Africa
<b>Currency:</b> Malawian kwacha (D, MWK)
<b>Languages:</b> English, Chewa, Yao
<b>Phone code:</b> +265
<b>Neighbors:</b>  
<i>Mozambique</i> to the east and south
<i>Tanzania</i> to the north and east
<i>Zambia</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Lilongwe</i> (646,750)
<i>Blantyre</i> (584,877)
<i>Mzuzu</i> (175,345)
<i>Zomba</i> (80,932)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Malawi"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-malawi.png', {
caption : 'Flag of Malawi'
});
bot.sendPhoto(msg.chat.id, './maps/map-malawi.png', {
caption : 'Malawi on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('malaysia')) || (msg.text.toLowerCase() === ('malasia')) || (msg.text.toLowerCase() === ('malajsia')) || (msg.text.toLowerCase() === ('kuala lumpur')) || (msg.text.toLowerCase() === ('koala-lumpur')) || (msg.text.toLowerCase() === ('kuala-lumpur')) || (msg.text.toLowerCase() === ('koala lumpur')) || (msg.text.toLowerCase() === ('putrajaya'))) {    
    //  Malaysia
const html = `
<b>Malaysia</b>
__________________________  
<b>Capital:</b> Kuala Lumpur, Putrajaya (administrative)
<b>Area:</b> 328,550 Km²
<b>Population:</b> 32,365,999			
<b>Region:</b> Asia
<b>Currency:</b> Ringgit (RM, MYR)
<b>Languages:</b> Malaysian
<b>Phone code:</b> +60
<b>Neighbors:</b> 
<i>Thailand, Brunei</i> to the north
<i>Singapore</i> to the south
<i>Philippines</i>maritime to the northeast
<i>Indonesia</i> maritime to the south
<i>Vietnam</i> maritime to the north
<b>Seas:</b> 
<i>Malaki strait</i> to the west
<i>South China Sea</i> to the east and west
<i>Gulf of Thai</i> to the northeast
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Kuala Lumpur</i> (7,200,000)
<i>George Town of Penang</i> (2,412,616)
<i>Ipoh</i> (657,892)
<i>Johor Bahru</i> (497,067)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Malaysia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-malay.png', {
caption : 'Flag of Malaysia'
});
bot.sendPhoto(msg.chat.id, './maps/map-malay.png', {
caption : 'Malaysia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('maldives')) || (msg.text.toLowerCase() === ('maldivs')) || (msg.text.toLowerCase() === ('malé')) || (msg.text.toLowerCase() === ('male'))) {    
    //  Maldives
const html = `
<b>Maldives</b>
__________________________  
<b>Capital:</b> Malé
<b>Area:</b> 300 Km²
<b>Population:</b> 540,544			
<b>Region:</b> Asia
<b>Currency:</b> Maldivian rufiyaa (MVR)
<b>Languages:</b> Dhivehi
<b>Phone code:</b> +960
<b>Neighbors:</b> 
<i>India, Sri Lanka</i> maritime to the northeast
<i>British Indian Ocean Territory(UK)</i> maritime to the south
<b>Seas:</b>
<i>Indian Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Malé</i> (103,693)
<i>Fuvahmulah</i> (11,140)
<i>Hithadhoo</i> (9,927)
<i>Kulhudhuffushi</i> (9,500)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Maldives"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mald.png', {
caption : 'Flag of Maldives'
});
bot.sendPhoto(msg.chat.id, './maps/map-mald.png', {
caption : 'Maldives on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('mali')) || (msg.text.toLowerCase() === ('malie')) || (msg.text.toLowerCase() === ('maali')) || (msg.text.toLowerCase() === ('bamako'))) {    
    //  Mali
const html = `
<b>Mali</b>
__________________________  
<b>Capital:</b> Bamako
<b>Area:</b> 1,220,190 Km²
<b>Population:</b> 20,250,833			
<b>Region:</b> Africa
<b>Currency:</b> West African CFA franc (XOF)
<b>Languages:</b> French
<b>Phone code:</b> +223
<b>Neighbors:</b> 
<i>Algeria</i> to the north
<i>Niger, Burkina Faso</i> to the east
<i>Côte d'Ivoire, Guinea</i> to the south
<i>Senegal, Mauritania</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Bamako</i> (1,297,281)
<i>Ségou</i> (153,349)
<i>Sikasso</i> (144,786)
<i>Mopti</i> (108,456)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Mali"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mali.jpg', {
caption : 'Flag of Mali'
});
bot.sendPhoto(msg.chat.id, './maps/map-mali.png', {
caption : 'Mali on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('malta')) || (msg.text.toLowerCase() === ('valletta')) || (msg.text.toLowerCase() === ('valetta')) || (msg.text.toLowerCase() === ('valeta')) || (msg.text.toLowerCase() === ('valleta'))) {    
    //  Malta
const html = `
<b>Malta</b>
__________________________  
<b>Capital:</b> Valletta
<b>Area:</b> 320 Km²
<b>Population:</b> 441,543			
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Maltese, English
<b>Phone code:</b> +356
<b>Neighbors:</b> 
<i>Italy</i> maritime to the north
<i>Libya</i> maritime to the south
<i>Tunisia</i> maritime to the southwest
<b>Seas:</b>
<i>Mediterranean Sea</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Birkirkara</i> (21,676)
<i>Qormi</i> (18,230)
<i>Mosta</i> (17,789)
<i>Żabbar</i> (15,030)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Malta"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-malta.png', {
caption : 'Flag of Malta'
});
bot.sendPhoto(msg.chat.id, './maps/map-malta.png', {
caption : 'Malta on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('marshall islands')) || (msg.text.toLowerCase() === ('marshalls')) || (msg.text.toLowerCase() === ('marshal islands')) || (msg.text.toLowerCase() === ('majuro')) || (msg.text.toLowerCase() === ('mayuro'))) {    
    //  Marshall Islands
const html = `
<b>Marshall Islands</b>
__________________________  
<b>Capital:</b> Majuro
<b>Area:</b> 180 Km²
<b>Population:</b> 59,190			
<b>Region:</b> Oceania
<b>Currency:</b> United States dollar (USD)
<b>Languages:</b> Marshallese, English
<b>Phone code:</b> +692
<b>Neighbors:</b> 
<i>Kiribati</i> maritime to the southeast
<i>Federated States of Micronesia</i> maritime to the west
<i>Nauru</i> maritime to the south
<i>Wake Island</i> maritime to the north
<b>Seas:</b>
<i>Pacific Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Majuro</i> (25,400)
<i>Ebaye</i> (15,000)
<i>Arno</i> (2,068)
<i>Jabor</i> (1,200)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Marshall_Islands"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-marsh.png', {
caption : 'Flag of Marshall Islands'
});
bot.sendPhoto(msg.chat.id, './maps/map-marsh.png', {
caption : 'Marshall Islands on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('mauritania')) || (msg.text.toLowerCase() === ('mavritania')) || (msg.text.toLowerCase() === ('mawritania')) || (msg.text.toLowerCase() === ('nouakchott')) || (msg.text.toLowerCase() === ('noakchott')) || (msg.text.toLowerCase() === ('novakchott')) || (msg.text.toLowerCase() === ('nouakchot')) || (msg.text.toLowerCase() === ('nouakshot'))) {    
    // Mauritania
const html = `
<b>Mauritania</b>
__________________________  
<b>Capital:</b> Nouakchott
<b>Area:</b> 1,030,700 Km²
<b>Population:</b> 4,649,658			
<b>Region:</b> Africa
<b>Currency:</b> Ouguiya (MRU)
<b>Languages:</b> Arabic
<b>Phone code:</b> +222
<b>Neighbors:</b> 
<i>Western Sahara</i> to the northwest
<i>Algeria</i> to the north
<i>Mali</i> to the east and south
<i>Senegal</i> to the south
<i>Cape Verde</i> maritime to the west
<b>Seas:</b>
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Nouakchott</i> (661,400)
<i>Nouadhibou</i> (72,337)
<i>Néma</i> (60,000)
<i>Kaédi</i> (55,374)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Mauritania"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-maur.jpg', {
caption : 'Flag of Mauritania'
});
bot.sendPhoto(msg.chat.id, './maps/map-maur.png', {
caption : 'Mauritania on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('mauritius')) || (msg.text.toLowerCase() === ('mavritius')) || (msg.text.toLowerCase() === ('mawritius')) || (msg.text.toLowerCase() === ('maurikius')) || (msg.text.toLowerCase() === ('port louis')) || (msg.text.toLowerCase() === ('port luis'))) {    
    // 	Mauritius
const html = `
<b>Mauritius</b>
__________________________  
<b>Capital:</b> Port Louis
<b>Area:</b> 2,030 Km²
<b>Population:</b> 1,271,768			
<b>Region:</b> Africa
<b>Currency:</b> Mauritian rupee (MUR)
<b>Languages:</b> None(de jure), English(de facto), French(de facto)
<b>Phone code:</b> +230
<b>Neighbors:</b> 
<i>Madagascar, Réunion(France)</i> maritime to the west
<i>Seychelles</i> maritime to the north
<i>French Southern and Antarctic Lands(France)</i> maritime to the south
<b>Seas:</b>
<i>Indian Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Port Louis</i> (155,226)
<i>Beau Bassin-Rose Hill</i> (111,355)
<i>Vacoas</i> (110,000)
<i>Curepipe</i> (84,200)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Mauritius"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mauritius.png', {
caption : 'Flag of Mauritius'
});
bot.sendPhoto(msg.chat.id, './maps/map-mauritius.png', {
caption : 'Mauritius on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('mexico')) || (msg.text.toLowerCase() === ('mexica')) || (msg.text.toLowerCase() === ('mexika')) || (msg.text.toLowerCase() === ('mexiko')) || (msg.text.toLowerCase() === ('mexico city')) || (msg.text.toLowerCase() === ('mexiko city'))) {    
    // 	Mexico
const html = `
<b>Mexico</b>
__________________________  
<b>Capital:</b> Mexico City
<b>Area:</b> 1,943,950 Km²
<b>Population:</b> 128,932,753			
<b>Region:</b> North America
<b>Currency:</b> Mexican peso (MXN)
<b>Languages:</b> None at federal level, Spanish and 68 Amerindian languages
<b>Phone code:</b> +52
<b>Neighbors:</b> 
<i>the USA</i> to the north
<i>Belize, Guatemala</i> to the southeast
<i>Cuba</i> maritime to the east
<i>Honduras</i> maritime to the southeast
<b>Seas:</b>
<i>Pacific Ocean</i> to the west and south
<i>Californian Sea</i> to the west
<i>Gulf of Mexico, Caribbean Sea</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Mexico City</i> (9,209,944)
<i>Tijuana</i> (1,810,645)
<i>Ecatepec</i> (1,643,623)
<i>León</i> (1,579,803)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Mexico"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mex.jpg', {
caption : 'Flag of Mexico'
});
bot.sendPhoto(msg.chat.id, './maps/map-mex.png', {
caption : 'Mexico on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('micronesia')) || (msg.text.toLowerCase() === ('mikronesia')) || (msg.text.toLowerCase() === ('federated states of micronesia')) || (msg.text.toLowerCase() === ('palikir')) || (msg.text.toLowerCase() === ('palikeer'))) {    
    // 	Micronesia
const html = `
<b>Micronesia</b>
__________________________  
<b>Capital:</b> Palikir
<b>Area:</b> 700 Km²
<b>Population:</b> 548,914			
<b>Region:</b> Oceania
<b>Currency:</b> United States dollar (USD)
<b>Languages:</b> English
<b>Phone code:</b> +691
<b>Neighbors:</b> 
<i>Palau</i> maritime to the west
<i>Marshall Islands</i> maritime to the east
<i>Papua Mew Guinea</i> maritime to the southwest
<i>Guam(the USA)</i> maritime to the northwest
<b>Seas:</b>
<i>Pacific Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Weno</i> (13,856)
<i>Tofol</i> (9,686)
<i>Colonia</i> (7,371)
<i>Kolonia</i> (6,074)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Federated_States_of_Micronesia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-micron.png', {
caption : 'Flag of Micronesia'
});
bot.sendPhoto(msg.chat.id, './maps/map-micron.png', {
caption : 'Micronesia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('moldova')) || (msg.text.toLowerCase() === ('moldowa')) || (msg.text.toLowerCase() === ('chișinău')) || (msg.text.toLowerCase() === ('chisinau')) || (msg.text.toLowerCase() === ('chișinau')) || (msg.text.toLowerCase() === ('chisinău')) || (msg.text.toLowerCase() === ('kishinev')) || (msg.text.toLowerCase() === ('kyshynev')) || (msg.text.toLowerCase() === ('chishinev')) || (msg.text.toLowerCase() === ('chishineu'))) {    
    // 	Moldova
const html = `
<b>Moldova</b>
__________________________  
<b>Capital:</b> Chișinău
<b>Area:</b> 32,850 Km²
<b>Population:</b> 4,033,963			
<b>Region:</b> Europe
<b>Currency:</b> Moldovan leu (MDL)
<b>Languages:</b> Romanian (also known as Moldovan)
<b>Phone code:</b> +373
<b>Neighbors:</b> 
<i>Ukraine</i> to the north, east and south
<i>Romania</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Chisinau</i> (635,994)
<i>Tiraspol</i> (157,000)
<i>Bălţi</i> (125,000)
<i>Tighina</i> (110,175)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Moldova"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mold.png', {
caption : 'Flag of Moldova'
});
bot.sendPhoto(msg.chat.id, './maps/map-mold.png', {
caption : 'Moldova on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('monaco')) || (msg.text.toLowerCase() === ('monako')) || (msg.text.toLowerCase() === ('monaco city')) || (msg.text.toLowerCase() === ('monako city'))) {    
    // 	Monaco
const html = `
<b>Monaco</b>
__________________________  
<b>Capital:</b> Monaco(city-state)
<b>Area:</b> 2.1 Km²
<b>Population:</b> 39,242				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> French
<b>Phone code:</b> +373
<b>Neighbors:</b> 
<i>France</i> to the north and west
<b>Seas:</b> 
<i>Mediterranean Sea</i> to the south and east 
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Monaco</i> (32,965)
<i>Monte-Carlo</i> (16,012)
<i>La Condamine</i> (12,167)
<i>Fontvieille</i> (3,602)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Monaco"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mon.jpg', {
caption : 'Flag of Monaco'
});
bot.sendPhoto(msg.chat.id, './maps/map-mon.png', {
caption : 'Monaco on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('mongolia')) || (msg.text.toLowerCase() === ('mongoliya')) || (msg.text.toLowerCase() === ('mongolija')) || (msg.text.toLowerCase() === ('ulaanbaatar')) || (msg.text.toLowerCase() === ('ulanbatar')) || (msg.text.toLowerCase() === ('ulan bator')) || (msg.text.toLowerCase() === ('ulan-bator')) || (msg.text.toLowerCase() === ('ulaan-baator')) || (msg.text.toLowerCase() === ('ulaan-baatar'))) {    
    // 	Mongolia
const html = `
<b>Mongolia</b>
__________________________  
<b>Capital:</b> Ulaanbaatar
<b>Area:</b> 1,553,560 Km²
<b>Population:</b> 3,278,290				
<b>Region:</b> Asia
<b>Currency:</b> Tögrög (MNT)
<b>Languages:</b> Mongolian
<b>Phone code:</b> +976
<b>Neighbors:</b> 
<i>China</i> to the south, east and west
<i>Russia</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Ulaanbaatar</i> (844,818)
<i>Erdenet</i> (79,647)
<i>Darhan</i> (74,300)
<i>Khovd</i> (30,500)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Mongolia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mong.png', {
caption : 'Flag of Mongolia'
});
bot.sendPhoto(msg.chat.id, './maps/map-mong.png', {
caption : 'Mongolia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('montenegro')) || (msg.text.toLowerCase() === ('monte negro')) || (msg.text.toLowerCase() === ('monte-negro')) || (msg.text.toLowerCase() === ('crna gora')) || (msg.text.toLowerCase() === ('crna hora')) || (msg.text.toLowerCase() === ('podgorica')) || (msg.text.toLowerCase() === ('cetinje')) || (msg.text.toLowerCase() === ('podgoriza'))) {    
    // 	Montenegro
const html = `
<b>Montenegro</b>
__________________________  
<b>Capital:</b> Podgorica
<b>Area:</b> 13,450 Km²
<b>Population:</b> 628,066				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Montenegrin
<b>Phone code:</b> +382
<b>Neighbors:</b> 
<i>Bosnia and Herzegovina</i> to the northwest
<i>Serbia</i> to the northeast and east
<i>Croatia</i> to the west
<i>Albania</i> to the southeast
<b>Seas:</b> 
<i>Adriatic Sea</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Podgorica</i> (185,937)
<i>Nikšić</i> (72,443)
<i>Herceg Novi</i> (30,864)
<i>Pljevlja</i> (30,786)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Montenegro"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mont.png', {
caption : 'Flag of Montenegro'
});
bot.sendPhoto(msg.chat.id, './maps/map-mont.png', {
caption : 'Montenegro on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('morocco')) || (msg.text.toLowerCase() === ('marocco')) || (msg.text.toLowerCase() === ('moroco')) || (msg.text.toLowerCase() === ('maroco')) || (msg.text.toLowerCase() === ('marokko')) || (msg.text.toLowerCase() === ('maroko')) || (msg.text.toLowerCase() === ('rabat')) || (msg.text.toLowerCase() === ('rabbat'))) {    
    // 	Morocco
const html = `
<b>Morocco</b>
__________________________  
<b>Capital:</b> Rabat
<b>Area:</b> 446,300 Km²
<b>Population:</b> 36,910,560				
<b>Region:</b> Africa
<b>Currency:</b> Moroccan dirham (MAD)
<b>Languages:</b> Arabic, Berber
<b>Phone code:</b> +212
<b>Neighbors:</b> 
<i>Algeria</i> to the east and south
<i>Western Sahara</i> to the southwest
<i>Spain</i> (acroos the strait of Gibraltar) to the north
<i>Portugal</i> maritime to the northwest
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the west
<i>Mediterranean Sea</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Casablanca</i> (3,144,909)
<i>Rabat</i> (1,655,753)
<i>Fes</i> (964,891)
<i>Salé</i> (903,485)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Morocco"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-mor.jpg', {
caption : 'Flag of Morocco'
});
bot.sendPhoto(msg.chat.id, './maps/map-mor.png', {
caption : 'Morocco on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('mozambique')) || (msg.text.toLowerCase() === ('mozambic')) || (msg.text.toLowerCase() === ('mozambik')) || (msg.text.toLowerCase() === ('mozambiq')) || (msg.text.toLowerCase() === ('maputo'))) {    
    // 	Mozambique
const html = `
<b>Mozambique</b>
__________________________  
<b>Capital:</b> Maputo
<b>Area:</b> 786,380 Km²
<b>Population:</b> 31,255,435				
<b>Region:</b> Africa
<b>Currency:</b> Metical (MZN)
<b>Languages:</b> Portuguese
<b>Phone code:</b> +258
<b>Neighbors:</b> 
<i>Tanzania</i> to the north
<i>Malawi</i> to the northwest
<i>Zambia, Zimbabwe</i> to the west
<i>South Africa, Eswatini</i> to the southwest
<i>Comoros, Madagascar</i> maritime to the east
<b>Seas:</b> 
<i>Mozambique strait</i> to the east
<i>Indian Ocean</i> to the northeast and southeast
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Matola</i> (1,616,267)
<i>Maputo</i> (1,101,170)
<i>Nampula</i> (743,125)
<i>Beira</i> (533,825)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Mozambique"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-moz.png', {
caption : 'Flag of Mozambique'
});
bot.sendPhoto(msg.chat.id, './maps/map-moz.png', {
caption : 'Mozambique on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('myanmar')) || (msg.text.toLowerCase() === ('burma')) || (msg.text.toLowerCase() === ('myanma')) || (msg.text.toLowerCase() === ('birma')) || (msg.text.toLowerCase() === ('byrma')) || (msg.text.toLowerCase() === ('mianmar')) || (msg.text.toLowerCase() === ('mianma')) || (msg.text.toLowerCase() === ('naypyidaw')) || (msg.text.toLowerCase() === ('naypyido')) || (msg.text.toLowerCase() === ('neypyido')) || (msg.text.toLowerCase() === ('naypyidow')) || (msg.text.toLowerCase() === ('neypyidow'))) {    
    // 	Myanmar
const html = `
<b>Mozambique</b>
__________________________  
<b>Capital:</b> Naypyidaw
<b>Area:</b> 653,290 Km²
<b>Population:</b> 54,409,800				
<b>Region:</b> Asia
<b>Currency:</b> Kyat (K, MMK)
<b>Languages:</b> Burmese
<b>Phone code:</b> +95
<b>Neighbors:</b> 
<i>China</i> to the north and east
<i>India</i> to the northwest
<i>Bangladesh</i> to the west
<i>Laos</i> to the east
<i>Thailand</i> to the southeast
<b>Seas:</b> 
<i>Burma Sea</i> to the south
<i>Bengal Sea</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Yangon</i> (3,361,741)
<i>Mandalay</i> (885,287)
<i>Naypyidaw</i> (375,189)
<i>Mawlamyine</i> (307,615)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Myanmar"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-myan.png', {
caption : 'Flag of Myanmar'
});
bot.sendPhoto(msg.chat.id, './maps/map-myan.png', {
caption : 'Myanmar on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('namibia')) || (msg.text.toLowerCase() === ('namibiya')) || (msg.text.toLowerCase() === ('namibija')) || (msg.text.toLowerCase() === ('windhoek')) || (msg.text.toLowerCase() === ('windhok')) || (msg.text.toLowerCase() === ('windhook')) || (msg.text.toLowerCase() === ('windhoock'))) {    
    // 	Namibia
const html = `
<b>Namibia</b>
__________________________  
<b>Capital:</b> Windhoek
<b>Area:</b> 823,290 Km²
<b>Population:</b> 2,540,905				
<b>Region:</b> Africa
<b>Currency:</b> Namibian dollar (NAD), South African rand (ZAR)
<b>Languages:</b> English
<b>Phone code:</b> +264
<b>Neighbors:</b> 
<i>Angola</i> to the north
<i>Zambia</i> to the northeast
<i>Botswana</i> to the east
<i>South Africa</i> to the southeast and south
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Windhoek</i> (268,132)
<i>Rundu</i> (58,172)
<i>Walvis Bay</i> (52,058)
<i>Oshakati</i> (33,618)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Namibia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-nam.png', {
caption : 'Flag of Namibia'
});
bot.sendPhoto(msg.chat.id, './maps/map-nam.png', {
caption : 'Namibia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('nauru')) || (msg.text.toLowerCase() === ('nauruh')) || (msg.text.toLowerCase() === ('naoero')) || (msg.text.toLowerCase() === ('naoro')) || (msg.text.toLowerCase() === ('jaren')) || (msg.text.toLowerCase() === ('yaren'))) {    
    // 	Nauru
const html = `
<b>Nauru</b>
__________________________  
<b>Capital:</b> Yaren
<b>Area:</b> 20	Km²
<b>Population:</b> 10,824				
<b>Region:</b> Oceania
<b>Currency:</b> Australian dollar (AUD)
<b>Languages:</b> Nauruan, English
<b>Phone code:</b> +674
<b>Neighbors:</b> 
<i>Federated States of Micronesia</i> maritime to the northeast
<i>Kiribati</i> maritime to the east
<i>Tuvalu</i> maritime to the southeast
<i>Solomon Islands</i> maritime to the south
<i>Papua New Guinea</i> maritime to the west
<b>Seas:</b> 
<i>Pacific Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Arijejen</i> (2,381)
<i>Denigomodu</i> (1,804)
<i>Menen</i> (1,400)
<i>Yaren District</i> (1,100)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Nauru"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-nauru.png', {
caption : 'Flag of Nauru'
});
bot.sendPhoto(msg.chat.id, './maps/map-nauru.png', {
caption : 'Nauru on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('nepal')) || (msg.text.toLowerCase() === ('kathmandu')) || (msg.text.toLowerCase() === ('katmandu')) || (msg.text.toLowerCase() === ('katmandoo')) || (msg.text.toLowerCase() === ('katmando'))) {    
    // 	Nepal
const html = `
<b>Nepal</b>
__________________________  
<b>Capital:</b> Kathmandu
<b>Area:</b> 143,350 Km²
<b>Population:</b> 29,136,808				
<b>Region:</b> Asia
<b>Currency:</b> Nepalese rupee (Rs, रू, NPR)
<b>Languages:</b> Nepali
<b>Phone code:</b> +977
<b>Neighbors:</b> 
<i>India</i> to the east, south and west
<i>Tibet Autonomous Region(China)</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Kathmandu</i> (1,442,271)
<i>Pokhara</i> (200,000)
<i>Patan</i> (183,310)
<i>Biratnagar</i> (182,324)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Nepal"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-nepal.png', {
caption : 'Flag of Nepal'
});
bot.sendPhoto(msg.chat.id, './maps/map-nepal.png', {
caption : 'Nepal on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('netherlands')) || (msg.text.toLowerCase() === ('nederland')) || (msg.text.toLowerCase() === ('nederlands')) || (msg.text.toLowerCase() === ('holland')) || (msg.text.toLowerCase() === ('hollandia')) || (msg.text.toLowerCase() === ('amsterdam')) || (msg.text.toLowerCase() === ('amsterdamm'))) {    
    // 	Netherlands
const html = `
<b>Netherlands</b>
__________________________  
<b>Capital:</b> Amsterdam
<b>Area:</b> 33,720 Km²
<b>Population:</b> 17,134,872				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€) (EUR), US dollar ($) (USD)
<b>Languages:</b> Dutch, Co-official: English, Papiamento, West Frisian
<b>Phone code:</b> +31, +599(Curaçao)
<b>Neighbors:</b> 
<i>Germany</i> to the east
<i>Belgium</i> to the south
<b>Seas:</b>
<i>North Sea</i> to the north and west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Amsterdam</i> (741,636)
<i>Rotterdam</i> (598,199)
<i>The Hague</i> (474,292)
<i>Utrecht</i> (290,529)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Netherlands"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-neth.png', {
caption : 'Flag of Netherlands'
});
bot.sendPhoto(msg.chat.id, './maps/map-neth.png', {
caption : 'Netherlands on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('new zealand')) || (msg.text.toLowerCase() === ('new zeland')) || (msg.text.toLowerCase() === ('new zeeland')) || (msg.text.toLowerCase() === ('wellington')) || (msg.text.toLowerCase() === ('welington'))) {    
    // 	New Zealand
const html = `
<b>New Zealand</b>
__________________________  
<b>Capital:</b> Wellington
<b>Area:</b> 263,310 Km²
<b>Population:</b> 4,822,233					
<b>Region:</b> Oceania
<b>Currency:</b> New Zealand dollar ($, NZD)
<b>Languages:</b> Māori, NZ Sign Language
<b>Phone code:</b> +64
<b>Neighbors:</b> 
<i>Australia</i> maritime to the east
<i>New Caledonia(France)</i> maritime to the northwest
<i>Fiji, Tonga</i> maritime to the north
<b>Seas:</b>
<i>Tasman Sea</i> to the west
<i>Pacific Ocean</i> to the north, south and east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Auckland</i> (1,470,100)
<i>Christchurch</i> (383,200)
<i>Wellington</i> (215,100)
<i>Hamilton</i> (176,500)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/New_Zealand"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-nz.png', {
caption : 'Flag of New Zealand'
});
bot.sendPhoto(msg.chat.id, './maps/map-nz.png', {
caption : 'New Zealand on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('nicaragua')) || (msg.text.toLowerCase() === ('nikaragua')) || (msg.text.toLowerCase() === ('managua'))) {    
    // 	Nicaragua
const html = `
<b>Nicaragua</b>
__________________________  
<b>Capital:</b> Managua
<b>Area:</b> 120,340 Km²
<b>Population:</b> 6,624,554						
<b>Region:</b> North America
<b>Currency:</b> Córdoba (NIO)
<b>Languages:</b> Spanish
<b>Phone code:</b> +505
<b>Neighbors:</b> 
<i>Honduras</i> to the north
<i>Costa Rica</i> to the south
<i>Colombia</i> maritime to the southeast
<i>El Salvador</i> maritime to the northwest
<b>Seas:</b>
<i>Caribbean Sea</i> to the east
<i>Pacific Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Managua</i> (973,087)
<i>León</i> (144,538)
<i>Masaya</i> (130,113)
<i>Chinandega</i> (126,387)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Nicaragua"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-nic.png', {
caption : 'Flag of Nicaragua'
});
bot.sendPhoto(msg.chat.id, './maps/map-nic.png', {
caption : 'Nicaragua on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('niger')) || (msg.text.toLowerCase() === ('nigger')) || (msg.text.toLowerCase() === ('niamey')) || (msg.text.toLowerCase() === ('nyamey')) || (msg.text.toLowerCase() === ('nyamei')) || (msg.text.toLowerCase() === ('niamei'))) {    
    // 	Niger
const html = `
<b>Niger</b>
__________________________  
<b>Capital:</b> Niamey
<b>Area:</b> 1,266,700 Km²
<b>Population:</b> 24,206,644						
<b>Region:</b> Africa
<b>Currency:</b> West African CFA franc (XOF)
<b>Languages:</b> French
<b>Phone code:</b> +227
<b>Neighbors:</b> 
<i>Algeria, Libya</i> to the north
<i>Nigeria, Benin</i> to the south
<i>Chad</i> maritime to the east
<i>Burkina Faso, Mali</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Niamey</i> (774,235)
<i>Zinder</i> (191,424)
<i>Maradi</i> (163,487)
<i>Agadez</i> (124,324)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Niger"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-niger.png', {
caption : 'Flag of Niger'
});
bot.sendPhoto(msg.chat.id, './maps/map-niger.png', {
caption : 'Niger on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('nigeria')) || (msg.text.toLowerCase() === ('nigerija')) || (msg.text.toLowerCase() === ('nigeriya')) || (msg.text.toLowerCase() === ('abuja')) || (msg.text.toLowerCase() === ('abudja'))) {    
    // 	Nigeria
const html = `
<b>Niger</b>
__________________________  
<b>Capital:</b> Abuja
<b>Area:</b> 910,770 Km²
<b>Population:</b> 206,139,589						
<b>Region:</b> Africa
<b>Currency:</b> Naira (₦, NGN)
<b>Languages:</b> English
<b>Phone code:</b> +234
<b>Neighbors:</b> 
<i>Niger</i> to the north
<i>Chad, Cameroon</i> to the east
<i>Benin</i> to the west
<b>Seas:</b>
<i>Gulf of Guinea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Lagos</i> (9,000,000)
<i>Kano</i> (3,626,000)
<i>Ibadan</i> (3,565,000)
<i>Kaduna</i> (1,582,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Nigeria"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-ng.png', {
caption : 'Flag of Nigeria'
});
bot.sendPhoto(msg.chat.id, './maps/map-ng.png', {
caption : 'Nigeria on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('north korea')) || (msg.text.toLowerCase() === ('dprk')) || (msg.text.toLowerCase() === (`democratic people's republic of korea`)) || (msg.text.toLowerCase() === (`democratic peoples republic of korea`)) || (msg.text.toLowerCase() === ('pyongyang')) || (msg.text.toLowerCase() === ('piongiang')) || (msg.text.toLowerCase() === ('pyongiang')) || (msg.text.toLowerCase() === ('piongyang')) || (msg.text.toLowerCase() === ('phengyang'))) {    
    // 	North Korea
const html = `
<b>North Korea</b>
__________________________  
<b>Capital:</b> Pyongyang
<b>Area:</b> 120,410 Km²
<b>Population:</b> 25,778,816						
<b>Region:</b> Asia
<b>Currency:</b> Korean People's won (₩, KPW)
<b>Languages:</b> Korean(Munhwaŏ)
<b>Phone code:</b> +850
<b>Neighbors:</b> 
<i>China</i> to the north
<i>Russia</i> to the northeast
<i>South Korea</i> to the west
<b>Seas:</b>
<i>Japanese Sea</i> to the east
<i>Yellow Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Pyongyang</i> (3,222,000)
<i>Hamhung</i> (559,056)
<i>Namp'o</i> (455,000)
<i>Sunch'ŏn</i> (437,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/North_Korea"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-nk.png', {
caption : 'Flag of North Korea'
});
bot.sendPhoto(msg.chat.id, './maps/map-nk.png', {
caption : 'North Korea on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('north macedonia')) || (msg.text.toLowerCase() === ('north makedonia')) || (msg.text.toLowerCase() === ('makedonia')) || (msg.text.toLowerCase() === ('macedonia')) || (msg.text.toLowerCase() === ('skopje')) || (msg.text.toLowerCase() === ('skopie')) || (msg.text.toLowerCase() === ('skopye'))) {    
    // 	North Macedonia
const html = `
<b>North Macedonia</b>
__________________________  
<b>Capital:</b> Skopje
<b>Area:</b> 25,220 Km²
<b>Population:</b> 2,083,374						
<b>Region:</b> Europe
<b>Currency:</b> Macedonian denar (MKD)
<b>Languages:</b> Macedonian, Albanian
<b>Phone code:</b> +389
<b>Neighbors:</b> 
<i>Kosovo</i> to the northwest
<i>Serbia</i> to the north
<i>Bulgaria</i> to the east
<i>Greece</i> to the south
<i>Albania</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Skopje</i> (506,926)
<i>Bitola</i> (74,550)
<i>Kumanovo</i> (70,842)
<i>Prilep</i> (66,246)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/North_Macedonia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-nm.png', {
caption : 'Flag of North Macedonia'
});
bot.sendPhoto(msg.chat.id, './maps/map-nm.png', {
caption : 'North Macedonia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('norway')) || (msg.text.toLowerCase() === ('norwegia')) || (msg.text.toLowerCase() === ('norge')) || (msg.text.toLowerCase() === ('noreg')) || (msg.text.toLowerCase() === ('oslo'))) {    
    // 	Norway
const html = `
<b>Norway</b>
__________________________  
<b>Capital:</b> Oslo
<b>Area:</b> 365,268 Km²
<b>Population:</b> 5,421,241						
<b>Region:</b> Europe
<b>Currency:</b> Norwegian krone (NOK)
<b>Languages:</b> Norwegian(written Bokmål and Nynorsk)
<b>Phone code:</b> +47
<b>Neighbors:</b> 
<i>Sweden, Finland, Russia</i> to the east
<i>Denmark</i> maritime to the south
<i>United Kingdom</i> maritime to the southwest
<i>Faroe Islands(Denmark)</i> maritime to the west
<b>Seas:</b>
<i>North Sea</i> to the southwest
<i>Skagerrak strait</i> to the south
<i>Norwegian Sea</i> to the west
<i>Barents Sea</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Oslo</i> (1,019,513)
<i>Bergen</i> (257,087)
<i>Stavanger</i> (225,020)
<i>Trondheim</i> (186,364)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Norway"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-nor.png', {
caption : 'Flag of Norway'
});
bot.sendPhoto(msg.chat.id, './maps/map-nor.png', {
caption : 'Norway on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('oman')) || (msg.text.toLowerCase() === ('muscat')) || (msg.text.toLowerCase() === ('muskat')) || (msg.text.toLowerCase() === ('maskat'))) {    
    // 	Oman
const html = `
<b>Oman</b>
__________________________  
<b>Capital:</b> Muscat
<b>Area:</b> 309,500 Km²
<b>Population:</b> 5,106,626						
<b>Region:</b> Asia
<b>Currency:</b> Omani rial (OMR)
<b>Languages:</b> Arabic
<b>Phone code:</b> +968
<b>Neighbors:</b> 
<i>United Arab Emirates</i> to the north
<i>Saudi Arabia, Yemen</i> maritime to the west
<i>Iran</i> maritime to the north
<i>Pakistan</i> maritime to the northeast
<b>Seas:</b>
<i>Gulf of Oman</i> to the north
<i>Arabian Sea</i> to the east
<b>of Musandam Peninsula:</b>
<i>Strait of Hormuz</i> to the north
<i>Gulf of Oman</i> to the east
<i>Persian Gulf</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Muscat</i> (797,000)
<i>Seeb</i> (237,816)
<i>Salalah</i> (163,140)
<i>Bawshar</i> (159,487)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Oman"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-oman.png', {
caption : 'Flag of Oman'
});
bot.sendPhoto(msg.chat.id, './maps/map-oman.png', {
caption : 'Oman on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('pakistan')) || (msg.text.toLowerCase() === ('pakystan')) || (msg.text.toLowerCase() === ('islamabad')) || (msg.text.toLowerCase() === ('islambad'))) {    
    // 	Pakistan
const html = `
<b>Pakistan</b>
__________________________  
<b>Capital:</b> Islamabad
<b>Area:</b> 770,880 Km²
<b>Population:</b> 220,892,340					
<b>Region:</b> Asia
<b>Currency:</b> Pakistani rupee (₨, PKR)
<b>Languages:</b> English
<b>Phone code:</b> +92
<b>Neighbors:</b> 
<i>Afghanistan</i> to the north
<i>Iran</i> to the west
<i>China</i> to the northeast
<i>India</i> to the east
<i>Oman</i> maritime to the southwest
<b>Seas:</b>
<i>Arabian Sea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Karachi</i> (14,916,456)
<i>Lahore</i> (11,126,285)
<i>Faisalabad</i> (3,204,726)
<i>Rawalpindi</i> (2,098,231)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Pakistan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-pak.png', {
caption : 'Flag of Pakistan'
});
bot.sendPhoto(msg.chat.id, './maps/map-pak.png', {
caption : 'Pakistan on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('palau')) || (msg.text.toLowerCase() === ('belau')) || (msg.text.toLowerCase() === ('ngerulmud')) || (msg.text.toLowerCase() === ('njerulmud'))) {    
    // 	Palau
const html = `
<b>Palau</b>
__________________________  
<b>Capital:</b> Ngerulmud
<b>Area:</b> 460 Km²
<b>Population:</b> 18,094					
<b>Region:</b> Oceania
<b>Currency:</b> United States dollar (USD)
<b>Languages:</b> Palauan, English
<b>Phone code:</b> +680
<b>Neighbors:</b> 
<i>Indonesia</i> maritime to the south
<i>Papua New Guinea</i> maritime to the southeast
<i>Federated States of Micronesia</i> maritime to the east
<i>Philippines</i> maritime to the west
<b>Seas:</b>
<i>Philippine Sea</i> to the north
<i>Pacific Ocean</i> to the west, east and south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Koror</i> (14,000)
<i>Koror Town</i> (12,676)
<i>Kloulklubed</i> (702)
<i>Ulimang</i> (581)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Palau"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-pal.png', {
caption : 'Flag of Palau'
});
bot.sendPhoto(msg.chat.id, './maps/map-pal.png', {
caption : 'Palau on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('palestine')) || (msg.text.toLowerCase() === ('palestina')) || (msg.text.toLowerCase() === ('ramallah')) || (msg.text.toLowerCase() === ('ramalah')) || (msg.text.toLowerCase() === ('ramalla'))) {    
    //      Palestine
const html = `
<b>Palestine</b>
__________________________  
<b>Capital:</b> Ramallah
<b>Area:</b> 6,020 Km²
<b>Population:</b> 5,101,414					
<b>Region:</b> Asia
<b>Currency:</b> Egyptian pound (EGP), Israeli new shekel (ILS), Jordanian dinar (JOD)
<b>Languages:</b> Arabic
<b>Phone code:</b> +970
<b>Neighbors:</b> 
<i>Israel</i> to the west
<i>Jordan</i> to the east
<b>of Gaza strip:</b>
<i>Egypt</i> to the west
<i>Israel</i> to the east and south
<b>Seas(only Gaza Stripe):</b>
<i>Mediterranean Sea</i> to the northwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Gaza</i> (410,000)
<i>Khan Yunis</i> (173,183)
<i>Jabalia</i> (168,568)
<i>Hebron</i> (160,470)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/State_of_Palestine"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-pt.jpg', {
caption : 'Flag of Palestine'
});
bot.sendPhoto(msg.chat.id, './maps/map-pt.png', {
caption : 'Palestine on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('panama')) || (msg.text.toLowerCase() === ('panamá')) || (msg.text.toLowerCase() === ('panama city')) || (msg.text.toLowerCase() === ('panamá city'))) {    
    //      Panama
const html = `
<b>Panama</b>
__________________________  
<b>Capital:</b> Panama City
<b>Area:</b> 74,340 Km²
<b>Population:</b> 4,314,767					
<b>Region:</b> North America
<b>Currency:</b> Balboa (PAB), United States dollar (USD)
<b>Languages:</b> Spanish
<b>Phone code:</b> +507
<b>Neighbors:</b> 
<i>Costa Rica</i> to the west
<i>Colombia</i> to the southeast
<i>Nicaragua</i> maritime to the northwest
<b>Seas:</b>
<i>Caribbean Sea</i> to the north
<i>Pacific Ocean</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Panamá</i> (1,756,781)
<i>Colón</i> (241,817)
<i>David</i> (193,350)
<i>La Chorrera</i> (190,093)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Panama"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-pan.png', {
caption : 'Flag of Panama'
});
bot.sendPhoto(msg.chat.id, './maps/map-pan.png', {
caption : 'Panama on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('papua new guinea')) || (msg.text.toLowerCase() === ('papua new gvinea')) || (msg.text.toLowerCase() === ('papua new gwinea')) || (msg.text.toLowerCase() === ('papua')) || (msg.text.toLowerCase() === ('new guinea')) || (msg.text.toLowerCase() === ('new gvinea')) || (msg.text.toLowerCase() === ('new gwinea')) || (msg.text.toLowerCase() === ('port moresby')) || (msg.text.toLowerCase() === ('port morsby')) || (msg.text.toLowerCase() === ('port morsbey')) || (msg.text.toLowerCase() === ('moresby'))) {    
    //      Papua New Guinea
const html = `
<b>Papua New Guinea</b>
__________________________  
<b>Capital:</b> Port Moresby
<b>Area:</b> 452,860 Km²
<b>Population:</b> 8,947,024					
<b>Region:</b> Oceania
<b>Currency:</b> Kina (PGK)
<b>Languages:</b> English, Hiri Motu, PNG Sign Language, Tok Pisin
<b>Phone code:</b> +675
<b>Neighbors:</b> 
<i>Indonesia</i> to the west
<i>Australia</i> maritime to the south
<i>Solomon Islands</i> maritime to the east
<i>Federated States of Micronesia</i> maritime to the northeast
<b>Seas:</b>
<i>Coral Sea</i> to the south
<i>Arafura Sea</i> to the southwest
<i>Solomon Sea</i> to the east
<i>Bismarck Sea</i> to the northeast
<i>Pacific Ocean</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Port Moresby</i> (254,158)
<i>Lae</i> (100,677)
<i>Arawa</i> (36,443)
<i>Mount Hagen</i> (27,782)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Papua_New_Guinea"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-png.png', {
caption : 'Flag of Papua New Guinea'
});
bot.sendPhoto(msg.chat.id, './maps/map-png.png', {
caption : 'Papua New Guinea on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('paraguay')) || (msg.text.toLowerCase() === ('paragway')) || (msg.text.toLowerCase() === ('paragvay')) || (msg.text.toLowerCase() === ('paraguai')) || (msg.text.toLowerCase() === ('paragwai')) || (msg.text.toLowerCase() === ('paragvai')) || (msg.text.toLowerCase() === ('paraguái')) || (msg.text.toLowerCase() === ('asunción')) || (msg.text.toLowerCase() === ('asuncion')) || (msg.text.toLowerCase() === ('asuncyon'))) {    
    //      Paraguay
const html = `
<b>Paraguay</b>
__________________________  
<b>Capital:</b> Asunción
<b>Area:</b> 397,300 Km²
<b>Population:</b> 7,132,538				
<b>Region:</b> South America
<b>Currency:</b> Guaraní (PYG)
<b>Languages:</b> Spanish, Guarani
<b>Phone code:</b> +595
<b>Neighbors:</b> 
<i>Bolivia</i> to the north and northwest
<i>Brazil</i> to the northeast and east
<i>Argentina</i> to the southeast, south and west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Asunción</i> (512,112)
<i>Ciudad del Este</i> (222,274)
<i>San Lorenzo</i> (204,356)
<i>Luque</i> (70,986)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Paraguay"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-parag.png', {
caption : 'Flag of Paraguay'
});
bot.sendPhoto(msg.chat.id, './maps/map-parag.png', {
caption : 'Paraguay on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('peru')) || (msg.text.toLowerCase() === ('perou')) || (msg.text.toLowerCase() === ('perú')) || (msg.text.toLowerCase() === ('lima'))) {    
    //      Peru
const html = `
<b>Peru</b>
__________________________  
<b>Capital:</b> Lima
<b>Area:</b> 1,280,000 Km²
<b>Population:</b> 32,971,854				
<b>Region:</b> South America
<b>Currency:</b> Sol (PEN)
<b>Languages:</b> Spanish
<b>Phone code:</b> +51
<b>Neighbors:</b> 
<i>Ecuador, Colombia</i> to the north
<i>Brazil, Bolivia</i> to the east
<i>Chile</i> to the south
<b>Seas:</b>
<i>Pacific Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Lima</i> (9,562,280)
<i>Arequipa</i> (1,008,290)
<i>Trujillo</i> (919,899)
<i>Chiclayo</i> (552,508)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Peru"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-peru.png', {
caption : 'Flag of Peru'
});
bot.sendPhoto(msg.chat.id, './maps/map-peru.png', {
caption : 'Peru on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('philippines')) || (msg.text.toLowerCase() === ('filippines')) || (msg.text.toLowerCase() === ('filippins')) || (msg.text.toLowerCase() === ('philippins')) || (msg.text.toLowerCase() === ('philipins')) || (msg.text.toLowerCase() === ('filipins')) || (msg.text.toLowerCase() === ('manila')) || (msg.text.toLowerCase() === ('metro manila'))) {    
    //      Philippines
const html = `
<b>Philippines</b>
__________________________  
<b>Capital:</b> Manila(de jure), Metro Manila(de facto)
<b>Area:</b> 298,170 Km²
<b>Population:</b> 109,581,078				
<b>Region:</b> Asia
<b>Currency:</b> Philippine peso (₱, PHP)
<b>Languages:</b> Filipino, English
<b>Phone code:</b> +63
<b>Neighbors:</b> 
<i>Taiwan</i> to the north
<i>Japan</i> to the northeast
<i>Palau</i> to the east and southeast
<i>Indonesia</i> to the south
<i>Malaysia, Brunei</i> to the southwest
<i>Vietnam</i> to the west
<i>China</i> to the nothwest
<b>Seas:</b>
<i>South China Sea</i> to the west and north
<i>Philippine Sea</i> to the east
<i>Celebes Sea</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Quezon City</i> (2,936,116)
<i>Manila</i> (1,780,148)
<i>Davao City</i> (1,632,991)
<i>Caloocan</i> (1,583,978)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Philippines"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-phil.jpg', {
caption : 'Flag of Philippines'
});
bot.sendPhoto(msg.chat.id, './maps/map-phil.png', {
caption : 'Philippines on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('poland')) || (msg.text.toLowerCase() === ('polen')) || (msg.text.toLowerCase() === ('polska')) || (msg.text.toLowerCase() === ('warsaw')) || (msg.text.toLowerCase() === ('warshaw')) || (msg.text.toLowerCase() === ('warszawa')) || (msg.text.toLowerCase() === ('warschau'))) {    
    //    Poland
const html = `
<b>Poland</b>
__________________________  
<b>Capital:</b> Warsaw
<b>Area:</b> 306,230 Km²
<b>Population:</b> 37,846,611				
<b>Region:</b> Europe
<b>Currency:</b> Złoty (PLN)
<b>Languages:</b> Polish
<b>Phone code:</b> +48
<b>Neighbors:</b> 
<i>Sweden</i> maritime to the north
<i>Denmark</i> maritime to the northwest
<i>Kaliningrad oblast(Russia)</i> to the north
<i>Lithuania</i> to the northeast
<i>Belarus, Ukraine</i> to the east
<i>Slovakia, Czech Republic</i> to the south
<i>Germany</i> to the west
<b>Seas:</b>
<i>Baltic Sea</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Warsaw</i> (1,702,139)
<i>Lodz</i> (768,755)
<i>Krakow</i> (755,050)
<i>Wroclaw</i> (634,893)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Poland"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-pol.png', {
caption : 'Flag of Poland'
});
bot.sendPhoto(msg.chat.id, './maps/map-pol.png', {
caption : 'Poland on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('portugal')) || (msg.text.toLowerCase() === ('portuguesa')) || (msg.text.toLowerCase() === ('portugalia')) || (msg.text.toLowerCase() === ('lisbon')) || (msg.text.toLowerCase() === ('lisabon'))) {    
    //    Portugal
const html = `
<b>Portugal</b>
__________________________  
<b>Capital:</b> Lisbon
<b>Area:</b> 91,590 Km²
<b>Population:</b> 10,196,709				
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Portuguese
<b>Phone code:</b> +351
<b>Neighbors:</b> 
<i>Spain</i> to the east and north
<i>Morocco</i> maritime to the south
<b>Seas:</b>
<i>Atlantic Ocean</i> to the west and south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Lisbon</i> (517,802)
<i>Porto</i> (249,633)
<i>Amadora</i> (178,858)
<i>Braga</i> (121,394)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Portugal"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-port.jpg', {
caption : 'Flag of Portugal'
});
bot.sendPhoto(msg.chat.id, './maps/map-port.png', {
caption : 'Portugal on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('qatar')) || (msg.text.toLowerCase() === ('katar')) || (msg.text.toLowerCase() === ('catar')) || (msg.text.toLowerCase() === ('doha')) || (msg.text.toLowerCase() === ('docha'))) {    
    //    	Qatar
const html = `
<b>Qatar</b>
__________________________  
<b>Capital:</b> Doha
<b>Area:</b> 11,610 Km²
<b>Population:</b> 2,881,053			
<b>Region:</b> Asia
<b>Currency:</b> Qatari riyal (QAR)
<b>Languages:</b> Arabic
<b>Phone code:</b> +974
<b>Neighbors:</b> 
<i>Saudi Arabia</i> to the south
<i>United Arab Emirates</i> maritime to the southeast
<i>Bahrain</i> maritime to the northwest
<i>Iran</i> maritime to the north
<b>Seas:</b>
<i>Persian Gulf</i> to the west, east and north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Doha</i> (344,939)
<i>Al Rayyan</i> (272,465)
<i>Umm Şalāl Muḩammad</i> (29,391)
<i>Al Wakrah</i> (26,436)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Qatar"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-qat.png', {
caption : 'Flag of Qatar'
});
bot.sendPhoto(msg.chat.id, './maps/map-qat.png', {
caption : 'Qatar on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('romania')) || (msg.text.toLowerCase() === ('românia')) || (msg.text.toLowerCase() === ('bucharest')) || (msg.text.toLowerCase() === ('bucurești')) || (msg.text.toLowerCase() === ('buckarest'))) {    
    //    	Romania
const html = `
<b>Romania</b>
__________________________  
<b>Capital:</b> Bucharest
<b>Area:</b> 230,170 Km²
<b>Population:</b> 19,237,691			
<b>Region:</b> Europe
<b>Currency:</b> Romanian leu (RON)
<b>Languages:</b> Romanian
<b>Phone code:</b> +40
<b>Neighbors:</b> 
<i>Ukraine</i> to the north
<i>Moldova</i> to the northeast
<i>Bulgaria</i> to the south
<i>Serbia</i> to the southwest
<i>Hungary</i> to the west
<i>Russia</i> maritime to the east
<b>Seas:</b>
<i>Black Sea</i> to the southeast
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Bucharest</i> (2,139,440)
<i>Iași</i> (382,780)
<i>Timișoara</i> (326,640)
<i>Cluj-Napoca</i> (326,250)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Romania"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-rom.png', {
caption : 'Flag of Romania'
});
bot.sendPhoto(msg.chat.id, './maps/map-rom.png', {
caption : 'Romania on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('russia')) || (msg.text.toLowerCase() === ('rusia')) || (msg.text.toLowerCase() === ('moscow')) || (msg.text.toLowerCase() === ('moskva')) || (msg.text.toLowerCase() === ('moskau'))) {    
    //    	Russia
const html = `
<b>Russia</b>
__________________________  
<b>Capital:</b> Moscow
<b>Area:</b> 16,376,870 Km²
<b>Population:</b> 145,934,462			
<b>Region:</b> Europe, Asia
<b>Currency:</b> Russian ruble (₽, RUB)
<b>Languages:</b> Russian
<b>Phone code:</b> +7
<b>Neighbors:</b> 
<i>North Korea, China, Mongolia, and Kazakhstan, Azerbaijan, Georgia</i> to the south
<i>Ukraine, Belarus, Latvia, Estonia, Finland, Norway</i> to the west
<i>Japan, the USA</i> maritime to the east
<i>Turkey</i> maritime to the southwest
<i>Romania</i> maritime to the west
<b>Seas:</b>
<i>Baltic Sea</i> to the west
<i>Black Sea, Sea of Azov‎</i> to the west
<i>White Sea, Barents Sea, Kara Sea, Laptev Sea, East‑Siberian Sea, Chukchi Sea</i> to the west
<i>Bering Sea, Sea of Okhotsk‎, Sea of Japan</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Moscow</i> (12,678,080)
<i>Saint Petersburg</i> (5,398,060)
<i>Novosibirsk</i> (1,625,310)
<i>Yekaterinburg</i> (1,494,750)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Russia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-rus.png', {
caption : 'Flag of Russia'
});
bot.sendPhoto(msg.chat.id, './maps/map-rus.png', {
caption : 'Russia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('rwanda')) || (msg.text.toLowerCase() === ('rvanda')) || (msg.text.toLowerCase() === ('ruanda')) || (msg.text.toLowerCase() === ('kigali')) || (msg.text.toLowerCase() === ('kigaly'))) {    
    //    	Rwanda
const html = `
<b>Rwanda</b>
__________________________  
<b>Capital:</b> Kigali
<b>Area:</b> 24,670 Km²
<b>Population:</b> 12,952,218		
<b>Region:</b> Africa
<b>Currency:</b> Rwandan franc (RWF)
<b>Languages:</b> English, French, Kinyarwanda, Swahili
<b>Phone code:</b> +250
<b>Neighbors:</b> 
<i>Uganda</i> to the north
<i>Tanzania</i> to the east
<i>Burundi</i> to the south
<i>Democratic Republic of the Congo</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Kigali</i> (745,261)
<i>Butare</i> (89,600)
<i>Gitarama</i> (87,613)
<i>Ruhengeri</i> (86,685)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Rwanda"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-rwa.png', {
caption : 'Flag of Rwanda'
});
bot.sendPhoto(msg.chat.id, './maps/map-rwa.png', {
caption : 'Rwanda on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('saint kitts and nevis')) || (msg.text.toLowerCase() === ('saint kitts nevis')) || (msg.text.toLowerCase() === ('saint kitts')) || (msg.text.toLowerCase() === ('saint kits and nevis')) || (msg.text.toLowerCase() === ('saint kits nevis')) || (msg.text.toLowerCase() === ('saint kits')) || (msg.text.toLowerCase() === ('kitts and nevis')) || (msg.text.toLowerCase() === ('kits and nevis')) || (msg.text.toLowerCase() === ('basseterre')) || (msg.text.toLowerCase() === ('baseterre')) || (msg.text.toLowerCase() === ('bassetere')) || (msg.text.toLowerCase() === ('basetere'))) {    
    //    Saint Kitts and Nevis
const html = `
<b>Saint Kitts and Nevis</b>
__________________________  
<b>Capital:</b> Basseterre
<b>Area:</b> 260 Km²
<b>Population:</b> 53,199		
<b>Region:</b> North America
<b>Currency:</b> East Caribbean dollar (XCD)
<b>Languages:</b> English
<b>Phone code:</b> +1 869
<b>Neighbors:</b> 
<i>Antigua and Barbuda</i> maritime to the east
<i>Montserrat(United Kingdom)</i> maritime to the southeast
<i>Sint Maarten(Netherlands), Saint Barthélemy(France)</i> maritime to the north
<i>Venezuela</i> maritime to the south
<b>Seas:</b> 
<i>Caribbean Sea</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Basseterre</i> (12,920)
<i>Butare</i> (2,922)
<i>Gitarama</i> (2,568)
<i>Ruhengeri</i> (2,460)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-skan.png', {
caption : 'Flag of Saint Kitts and Nevis'
});
bot.sendPhoto(msg.chat.id, './maps/map-skan.png', {
caption : 'Saint Kitts and Nevis on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('saint lucia')) || (msg.text.toLowerCase() === ('saint lusia')) || (msg.text.toLowerCase() === ('santa lucia')) || (msg.text.toLowerCase() === ('castries')) || (msg.text.toLowerCase() === ('kastries')) || (msg.text.toLowerCase() === ('castris')) || (msg.text.toLowerCase() === ('kastris')) || (msg.text.toLowerCase() === ('castry')) || (msg.text.toLowerCase() === ('castrie'))) {    
    //    Saint Lucia
const html = `
<b>Saint Lucia</b>
__________________________  
<b>Capital:</b> Castries
<b>Area:</b> 610 Km²
<b>Population:</b> 183,627		
<b>Region:</b> North America
<b>Currency:</b> East Caribbean dollar (XCD)
<b>Languages:</b> English
<b>Phone code:</b> +1 758
<b>Neighbors:</b> 
<i>Martinique(France)</i> maritime to the north
<i>Saint Vincent and the Grenadines</i> maritime to the south
<i>Barbados</i> maritime to the southeast
<i>Venezuela</i> maritime to the southwest
<b>Seas:</b> 
<i>Caribbean Sea</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Castries</i> (20,000)
<i>Bisee</i> (12,980)
<i>Vieux Fort</i> (4,574)
<i>Micoud</i> (3,406)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Saint_Lucia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sanl.png', {
caption : 'Flag of Saint Lucia'
});
bot.sendPhoto(msg.chat.id, './maps/map-sanl.png', {
caption : 'Saint Lucia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('saint vincent and the grenadines')) || (msg.text.toLowerCase() === ('saint vincent and grenadines')) || (msg.text.toLowerCase() === ('saint vincent')) || (msg.text.toLowerCase() === ('saint vinsent and grenadines')) || (msg.text.toLowerCase() === ('saint vinsent and grenadins')) || (msg.text.toLowerCase() === ('st. vinsent and grenadins')) || (msg.text.toLowerCase() === ('st vinsent and grenadins')) || (msg.text.toLowerCase() === ('st. vincent and grenadines')) || (msg.text.toLowerCase() === ('kingstown'))) {    
    //    Saint Vincent and the Grenadines
const html = `
<b>Saint Vincent and the Grenadines</b>
__________________________  
<b>Capital:</b> Kingstown
<b>Area:</b> 390 Km²
<b>Population:</b> 110,940		
<b>Region:</b> North America
<b>Currency:</b> East Caribbean dollar (XCD)
<b>Languages:</b> English
<b>Phone code:</b> +1 784
<b>Neighbors:</b> 
<i>Saint Lucia</i> maritime to the north
<i>Barbados</i> maritime to the east
<i>Grenada, Trinidad and Tobago</i> maritime to the south
<i>Venezuela</i> maritime to the southwest
<b>Seas:</b> 
<i>Caribbean Sea</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Kingstown</i> (24,518)
<i>Georgetown</i> (1,680)
<i>Byera Village</i> (1,365)
<i>Biabou</i> (1,050)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-svgr.png', {
caption : 'Flag of Saint Vincent and the Grenadines'
});
bot.sendPhoto(msg.chat.id, './maps/map-svgr.png', {
caption : 'Saint Vincent and the Grenadines on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('samoa')) || (msg.text.toLowerCase() === ('sāmoa')) || (msg.text.toLowerCase() === ('apia')) || (msg.text.toLowerCase() === ('apya')) ) {    
    //    	Samoa
const html = `
<b>Samoa</b>
__________________________  
<b>Capital:</b> Apia
<b>Area:</b> 2,830 Km²
<b>Population:</b> 198,414		
<b>Region:</b> Oceania
<b>Currency:</b> Tālā (WS$b) (WST)
<b>Languages:</b> English, Samoan
<b>Phone code:</b> +685
<b>Neighbors:</b> 
<i>Tokelau(New Zealand)</i> maritime to the northeast
<i>Cook Islands</i> maritime to the southeast
<i>American Samoa(the USA)</i> maritime to the east
<i>Tonga</i> maritime to the south
<i>Fiji</i> maritime to the southwest
<i>Wallis and Futuna(France)</i> maritime to the west
<b>Seas:</b> 
<i>Pacific Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Apia</i> (40,407)
<i>Asau</i> (6,643)
<i>Mulifanua</i> (4,508)
<i>Faleula</i> (2,592)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Samoa"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-moa.png', {
caption : 'Flag of Samoa'
});
bot.sendPhoto(msg.chat.id, './maps/map-moa.png', {
caption : 'Samoa on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('san marino')) || (msg.text.toLowerCase() === ('san-marino'))) {    
    //    	San Marino
const html = `
<b>San Marino</b>
__________________________  
<b>Capital:</b> San Marino
<b>Area:</b> 60 Km²
<b>Population:</b> 33,931	
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Italian
<b>Phone code:</b> +378 (+39 0549 calling via Italy)
<b>Neighbors:</b> 
<i>Italy</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Serravalle</i> (9,258)
<i>Borgo Maggiore</i> (6,424)
<i>City of San Marino</i> (4,500)
<i>Domagnano</i> (3,161)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/San_Marino"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sanmar.png', {
caption : 'Flag of San Marino'
});
bot.sendPhoto(msg.chat.id, './maps/map-sanmar.png', {
caption : 'San Marino on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('são tomé and príncipe')) || (msg.text.toLowerCase() === ('san tome and principe')) || (msg.text.toLowerCase() === ('sao tome and principe')) || (msg.text.toLowerCase() === ('sao tome')) || (msg.text.toLowerCase() === ('sao tome principe')) || (msg.text.toLowerCase() === ('san tome')) || (msg.text.toLowerCase() === ('san tome principe')) || (msg.text.toLowerCase() === ('são tome ')) || (msg.text.toLowerCase() === ('são tomé'))) {    
    //  São Tomé and Príncipe
const html = `
<b>São Tomé and Príncipe</b>
__________________________  
<b>Capital:</b> São Tomé
<b>Area:</b> 960 Km²
<b>Population:</b> 219,159	
<b>Region:</b> Africa
<b>Currency:</b> Dobra (STN)
<b>Languages:</b> Portuguese
<b>Phone code:</b> +239
<b>Neighbors:</b> 
<i>Gabon, Equatorial Guinea</i> maritime to the east
<i>Nigeria</i> maritime to the north
<b>Seas:</b> 
<i>Gulf of Guinea</i> to the east and north
<i>Atlantic Ocean</i> to the west and south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>São Tomé</i> (56,166)
<i>Santo Amaro</i> (8,239)
<i>Neves</i> (7,392)
<i>Santana</i> (6,969)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-stap.png', {
caption : 'Flag of São Tomé and Príncipe'
});
bot.sendPhoto(msg.chat.id, './maps/map-stap.png', {
caption : 'São Tomé and Príncipe on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('saudi arabia')) || (msg.text.toLowerCase() === ('saudi aravia')) || (msg.text.toLowerCase() === ('saudi arawia')) || (msg.text.toLowerCase() === ('riyadh')) || (msg.text.toLowerCase() === ('riyad')) || (msg.text.toLowerCase() === ('rijadh')) || (msg.text.toLowerCase() === ('rijad'))) {    
    //  Saudi Arabia
const html = `
<b>Saudi Arabia</b>
__________________________  
<b>Capital:</b> Riyadh
<b>Area:</b> 2,149,690 Km²
<b>Population:</b> 34,813,871	
<b>Region:</b> Asia
<b>Currency:</b> Saudi Riyal (SR, SAR)
<b>Languages:</b> Arabic
<b>Phone code:</b> +966
<b>Neighbors:</b> 
<i>Jordan, Iraq, Kuwait</i> to the north
<i>Qatar, the United Arab Emirates, Oman</i> to the east
<i>Yemen</i> to the south and southwest
<i>Bahrain, Iran</i> maritime to the east
<i>Egypt, Eritrea, Sudan</i> maritime to the west
<b>Seas:</b> 
<i>Persian Gulf</i> to the east
<i>Red Sea, Gulf of Aqaba</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Riyadh</i> (5,188,286)
<i>Jeddah</i> (3,430,697)
<i>Sana'a</i> (2,215,700)
<i>Dubai</i> (2,067,291)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Saudi_Arabia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sauar.png', {
caption : 'Flag of Saudi Arabia'
});
bot.sendPhoto(msg.chat.id, './maps/map-sauar.png', {
caption : 'Saudi Arabia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('senegal')) || (msg.text.toLowerCase() === ('sénégal')) || (msg.text.toLowerCase() === ('senegaal')) || (msg.text.toLowerCase() === ('dakar')) || (msg.text.toLowerCase() === ('dacar'))) {    
    //   Senegal
const html = `
<b>Senegal</b>
__________________________  
<b>Capital:</b> Dakar
<b>Area:</b> 192,530 Km²
<b>Population:</b> 16,743,927
<b>Region:</b> Africa
<b>Currency:</b> West African CFA franc (XOF)
<b>Languages:</b> French
<b>Phone code:</b> +221
<b>Neighbors:</b> 
<i>Gambia</i> surrounded by Senegal
<i>Guinea, Guinea-Bissau</i> to the south
<i>Mali</i> to the east
<i>Mauritania</i> to the east and north
<i>Cape Verde</i> maritime to the west
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Dakar</i> (2,476,400)
<i>Pikine</i> (874,062)
<i>Touba</i> (529,176)
<i>Thiès</i> (320,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Senegal"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-seneg.png', {
caption : 'Flag of Senegal'
});
bot.sendPhoto(msg.chat.id, './maps/map-seneg.png', {
caption : 'Senegal on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('serbia')) || (msg.text.toLowerCase() === ('belgrade')) || (msg.text.toLowerCase() === ('serbija')) || (msg.text.toLowerCase() === ('serbiya')) || (msg.text.toLowerCase() === ('belgrad')) || (msg.text.toLowerCase() === ('srbija')) || (msg.text.toLowerCase() === ('србија'))) {    
    //   Serbia
const html = `
<b>Serbia</b>
__________________________  
<b>Capital:</b> Belgrade
<b>Area:</b> 87,460 Km²
<b>Population:</b> 8,737,371
<b>Region:</b> Europe
<b>Currency:</b> Serbian dinar (RSD)
<b>Languages:</b> Serbian
<b>Phone code:</b> +381
<b>Neighbors:</b> 
<i>Hungary</i> to the north
<i>Romania, Bulgaria</i> to the east
<i>North Macedonia</i> to the south
<i>Montenegro</i> to the southwest
<i>Kosovo(unrecognized by Serbia)</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Belgrade</i> (1,344,844)
<i>Novi Sad</i> (277,522)
<i>Niš</i> (260,237)
<i>Kragujevac</i> (150,835)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Serbia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-serb.png', {
caption : 'Flag of Serbia'
});
bot.sendPhoto(msg.chat.id, './maps/map-serb.png', {
caption : 'Serbia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('seychelles')) || (msg.text.toLowerCase() === ('seyshelles')) || (msg.text.toLowerCase() === ('seyshells')) || (msg.text.toLowerCase() === ('seychells')) || (msg.text.toLowerCase() === ('victoria')) || (msg.text.toLowerCase() === ('viktoria')) || (msg.text.toLowerCase() === ('victoriya')) || (msg.text.toLowerCase() === ('viktoriya')) || (msg.text.toLowerCase() === ('victorija')) || (msg.text.toLowerCase() === ('viktorija'))) {    
    //   	Seychelles
const html = `
<b>Seychelles</b>
__________________________  
<b>Capital:</b> Victoria
<b>Area:</b> 460 Km²
<b>Population:</b> 98,347
<b>Region:</b> Africa
<b>Currency:</b> Seychellois rupee (SCR)
<b>Languages:</b> English, French, Seychellois Creole
<b>Phone code:</b> +248
<b>Neighbors:</b> 
<i>Comoros</i> maritime to the southwest
<i>Tanzania</i> maritime to the west
<i>Madagascar, Mauritius</i> maritime to the south
<b>Seas:</b> 
<i>Indian Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Victoria</i> (22,881)
<i>Anse Boileau</i> (4,183)
<i>Bel Ombre</i> (4,163)
<i>Beau Vallon</i> (4,142)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Seychelles"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sey.png', {
caption : 'Flag of Seychelles'
});
bot.sendPhoto(msg.chat.id, './maps/map-sey.png', {
caption : 'Seychelles on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('sierra leone')) || (msg.text.toLowerCase() === ('sierra-leone')) || (msg.text.toLowerCase() === ('siera-leone')) || (msg.text.toLowerCase() === ('siera leone')) || (msg.text.toLowerCase() === ('freetown')) || (msg.text.toLowerCase() === ('fretown'))) {    
    //   	Sierra Leone
const html = `
<b>Sierra Leone</b>
__________________________  
<b>Capital:</b> Freetown
<b>Area:</b> 72,180 Km²
<b>Population:</b> 7,976,983
<b>Region:</b> Africa
<b>Currency:</b> Leone (SLL)
<b>Languages:</b> English
<b>Phone code:</b> +232
<b>Neighbors:</b> 
<i>Guinea</i> to the north and east
<i>Liberia</i> to the south and southeast
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Freetown</i> (1,055,964)
<i>Kenema</i> (200,443)
<i>Bo</i> (174,369)
<i>Koidu</i> (124,662)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Sierra_Leone"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sile.png', {
caption : 'Flag of Sierra Leone'
});
bot.sendPhoto(msg.chat.id, './maps/map-sile.png', {
caption : 'Sierra Leone on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('singapore')) || (msg.text.toLowerCase() === ('singapor')) || (msg.text.toLowerCase() === ('singapur')) || (msg.text.toLowerCase() === ('singapure')) || (msg.text.toLowerCase() === ('singapoore')) || (msg.text.toLowerCase() === ('singapoor')) || (msg.text.toLowerCase() === ('singapore city'))) {    
    //   	Singapore
const html = `
<b>Singapore</b>
__________________________  
<b>Capital:</b> Singapore
<b>Area:</b> 700 Km²
<b>Population:</b> 5,850,342
<b>Region:</b> Asia
<b>Currency:</b> Singapore dollar (S$, SGD)
<b>Languages:</b> English, Malay, Mandarin, Tamil
<b>Phone code:</b> +65
<b>Neighbors:</b> 
<i>Malaysia</i> to the north
<i>Indonesia</i> to the south and east
<b>Seas:</b> 
<i>Strait of Singapore </i> to the south
<i>Strait of Johor</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Singapore</i> (3,547,809)
<i>Tampines</i> (256,730)
<i>Hougang</i> (226,240)
<i>Pasir Ris</i> (148,020)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Singapore"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sing.png', {
caption : 'Flag of Singapore'
});
bot.sendPhoto(msg.chat.id, './maps/map-sing.png', {
caption : 'Singapore on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('slovakia')) || (msg.text.toLowerCase() === ('slovensko')) || (msg.text.toLowerCase() === ('bratislava')) || (msg.text.toLowerCase() === ('bratyslava'))) {    
    //   	Slovakia
const html = `
<b>Slovakia</b>
__________________________  
<b>Capital:</b> Bratislava
<b>Area:</b> 48,088 Km²
<b>Population:</b> 5,459,642
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Slovak
<b>Phone code:</b> +421
<b>Neighbors:</b> 
<i>Poland</i> to the north
<i>Ukraine</i> to the east
<i>Hungary</i> to the south
<i>Austria</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Bratislava</i> (583,600)
<i>Košice</i> (355,047)
<i>Žilina</i> (108,114)
<i>Prešov</i> (91,352)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Slovakia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sk.png', {
caption : 'Flag of Slovakia'
});
bot.sendPhoto(msg.chat.id, './maps/map-sk.png', {
caption : 'Slovakia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('slovenia')) || (msg.text.toLowerCase() === ('slovenija')) || (msg.text.toLowerCase() === ('sloveniya')) || (msg.text.toLowerCase() === ('ljubljana')) || (msg.text.toLowerCase() === ('lyublyana')) || (msg.text.toLowerCase() === ('liubliana')) || (msg.text.toLowerCase() === ('lublana'))) {    
    //   	Slovenia
const html = `
<b>Slovenia</b>
__________________________  
<b>Capital:</b> Ljubljana
<b>Area:</b> 20,140	Km²
<b>Population:</b> 2,078,938
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Slovene
<b>Phone code:</b> +386
<b>Neighbors:</b> 
<i>Austria</i> to the north
<i>Hungary</i> to the northeast
<i>Croatia</i> to the south, southeast and east
<i>Italy</i> to the west
<b>Seas:</b> 
<i>Adriatic Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Ljubljana</i> (277,554)
<i>Maribor</i> (95,586)
<i>Celje</i> (37,628)
<i>Kranj</i> (37,223)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Slovenia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sloven.png', {
caption : 'Flag of Slovenia'
});
bot.sendPhoto(msg.chat.id, './maps/map-sloven.png', {
caption : 'Slovenia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('solomon islands')) || (msg.text.toLowerCase() === ('solomons')) || (msg.text.toLowerCase() === (`solomon's`)) || (msg.text.toLowerCase() === (`solomon's islands`)) || (msg.text.toLowerCase() === ('solomons islands')) || (msg.text.toLowerCase() === ('solomonos')) || (msg.text.toLowerCase() === ('honiara')) || (msg.text.toLowerCase() === ('honyara')) || (msg.text.toLowerCase() === ('honjara'))) {    
    //   	Solomon Islands
const html = `
<b>Solomon Islands</b>
__________________________  
<b>Capital:</b> Honiara
<b>Area:</b> 27,990	Km²
<b>Population:</b> 686,884
<b>Region:</b> Oceania
<b>Currency:</b> Solomon Islands dollar (SBD)
<b>Languages:</b> English
<b>Phone code:</b> +677
<b>Neighbors:</b> 
<i>Papua New Guinea</i> maritime to the west
<i>Vanuatu</i> maritime to the southeast
<b>Seas:</b> 
<i>Solomon Sea</i> to the west
<i>Coral Sea</i> to the south
<i>Pacific Ocean</i> to the north and east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Honiara</i> (56,298)
<i>Malango</i> (10,532)
<i>Auki</i> (6,811)
<i>Gizo</i> (6,154)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Solomon_Islands"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-solom.png', {
caption : 'Flag of Solomon Islands'
});
bot.sendPhoto(msg.chat.id, './maps/map-solom.png', {
caption : 'Solomon Islands on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('somalia')) || (msg.text.toLowerCase() === ('somali')) || (msg.text.toLowerCase() === (`soomaaliya`)) || (msg.text.toLowerCase() === (`somaliya`)) || (msg.text.toLowerCase() === ('somalija')) || (msg.text.toLowerCase() === ('mogadishu')) || (msg.text.toLowerCase() === ('mogadisho')) || (msg.text.toLowerCase() === ('mogadyshu'))) {    
    //  Somalia
const html = `
<b>Somalia</b>
__________________________  
<b>Capital:</b> Mogadishu
<b>Area:</b> 627,340 Km²
<b>Population:</b> 15,893,222
<b>Region:</b> Africa
<b>Currency:</b> Somali shilling (SOS)
<b>Languages:</b> Somali, Arabic
<b>Phone code:</b> +252
<b>Neighbors:</b> 
<i>Ethiopia</i> to the west
<i>Kenya</i> to the southwest
<i>Djibouti</i> to the northwest
<i>Yemen</i> maritime to the north
<b>Seas:</b> 
<i>Gulf of Aden</i> to the north
<i>Indian Ocean</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Mogadishu</i> (2,587,183)
<i>Kismayo</i> (234,852)
<i>Marka</i> (230,100)
<i>Jamaame</i> (185,270)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Somalia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-somal.png', {
caption : 'Flag of Somalia'
});
bot.sendPhoto(msg.chat.id, './maps/map-somal.png', {
caption : 'Somalia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('south africa')) || (msg.text.toLowerCase() === ('south africa republic')) || (msg.text.toLowerCase() === (`south african republic`)) || (msg.text.toLowerCase() === (`republic of south africa`)) || (msg.text.toLowerCase() === ('pretoria')) || (msg.text.toLowerCase() === ('pretoriya')) || (msg.text.toLowerCase() === ('cape town')) || (msg.text.toLowerCase() === ('capetown')) || (msg.text.toLowerCase() === ('kapetown')) || (msg.text.toLowerCase() === ('kape town')) || (msg.text.toLowerCase() === ('bloemfontein'))) {    
    //  South Africa
const html = `
<b>South Africa</b>
__________________________  
<b>Capital:</b> Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)
<b>Area:</b> 1,213,090 Km²
<b>Population:</b> 59,308,690
<b>Region:</b> Africa
<b>Currency:</b> South African rand (ZAR)
<b>Languages:</b> English, Zulu, Xhosa, Afrikaans, Sepedi, Tswana, Southern Sotho, Tsonga, Swazi, Venda, Southern Ndebele
<b>Phone code:</b> +27
<b>Neighbors:</b> 
<i>Lesotho</i> surrounded by South Africa
<i>Eswatini</i> surrounded by South Africa to the west, north and south
<i>Mozambique</i> to the east
<i>Namibia, Botswana, Zimbabwe</i> to the north
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the west
<i>Indian Ocean</i> to the east and south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Cape Town</i> (3,433,441)
<i>Durban</i> (3,120,282)
<i>Johannesburg</i> (2,026,469)
<i>Soweto</i> (1,695,047)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/South_Africa"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-soafr.png', {
caption : 'Flag of South Africa'
});
bot.sendPhoto(msg.chat.id, './maps/map-soafr.png', {
caption : 'South Africa on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('south korea')) || (msg.text.toLowerCase() === ('south corea')) || (msg.text.toLowerCase() === (`seul`)) || (msg.text.toLowerCase() === (`seoul`))) {    
    //  South Korea
const html = `
<b>South Korea</b>
__________________________  
<b>Capital:</b> Seoul
<b>Area:</b> 97,230 Km²
<b>Population:</b> 51,269,185
<b>Region:</b> Asia
<b>Currency:</b> Korean Republic won (₩, KRW)
<b>Languages:</b> Korean (Pyojun-eo), Korean Sign Language
<b>Phone code:</b> +82
<b>Neighbors:</b> 
<i>North Korea</i> to the north
<i>China</i> maritime to the west
<i>Japan</i> maritime to the east
<b>Seas:</b> 
<i>Sea of Japan</i> to the east
<i>East China Sea</i> to the south
<i>Yellow Sea</i> to the west
<i>Korea Strait</i> to the southeast
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Seoul</i> (9,904,312)
<i>Busan</i> (3,448,737)
<i>Incheon</i> (2,890,451)
<i>Daegu</i> (2,466,052)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/South_Korea"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sokor.png', {
caption : 'Flag of South Korea'
});
bot.sendPhoto(msg.chat.id, './maps/map-sokor.png', {
caption : 'South Korea on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('south sudan')) || (msg.text.toLowerCase() === ('juba')) || (msg.text.toLowerCase() === ('djuba'))) {    
    //  South Sudan
const html = `
<b>South Sudan</b>
__________________________  
<b>Capital:</b> Juba
<b>Area:</b> 610,952 Km²
<b>Population:</b> 11,193,725
<b>Region:</b> Africa
<b>Currency:</b> South Sudanese pound (SSP)
<b>Languages:</b> English
<b>Phone code:</b> +211
<b>Neighbors:</b> 
<i>Sudan</i> to the north
<i>Ethiopia</i> to the east
<i>Kenya, Uganda, Democratic Republic of the Congo</i> to the south
<i>Central African Republic</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Juba</i> (450,000)
<i>Winejok</i> (300,000)
<i>Malakal</i> (160,765)
<i>Wau</i> (127,384)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/South_Sudan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sosud.png', {
caption : 'Flag of South Sudan'
});
bot.sendPhoto(msg.chat.id, './maps/map-sosud.png', {
caption : 'South Sudan on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('spain')) || (msg.text.toLowerCase() === ('españa')) || (msg.text.toLowerCase() === ('espana')) || (msg.text.toLowerCase() === ('madrid')) || (msg.text.toLowerCase() === ('madreed'))) {    
    //  	Spain
const html = `
<b>Spain</b>
__________________________  
<b>Capital:</b> Madrid
<b>Area:</b> 498,800 Km²
<b>Population:</b> 46,754,778	
<b>Region:</b> Europe
<b>Currency:</b> Euro (€, EUR)
<b>Languages:</b> Spanish
<b>Phone code:</b> +34
<b>Neighbors:</b> 
<i>Portugal</i> to the west
<i>France, Andorra</i> to the northeast
<i>Gibraltar(the UK)</i> to the south
<i>Morocco, Algeria</i> maritime to the south
<b>Seas:</b> 
<i>Alboran, Atlantic Ocean, Strait of Gibraltar</i> to the south
<i>Mediterranean Sea</i> to the southeast and east
<i>Balearic Sea</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Madrid</i> (2,824,000)
<i>Barcelona</i> (1,454,000)
<i>Valencia</i> (736,000)
<i>Sevilla</i> (695,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Spain"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-spain.png', {
caption : 'Flag of Spain'
});
bot.sendPhoto(msg.chat.id, './maps/map-spain.png', {
caption : 'Spain on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('sri lanka')) || (msg.text.toLowerCase() === ('sri-lanka')) || (msg.text.toLowerCase() === ('srilanka')) || (msg.text.toLowerCase() === ('shrilanka')) || (msg.text.toLowerCase() === ('shri-lanka')) || (msg.text.toLowerCase() === ('shri lanka')) || (msg.text.toLowerCase() === ('ceylon')) || (msg.text.toLowerCase() === ('sri jayawardenepura kotte')) || (msg.text.toLowerCase() === ('colombo')) || (msg.text.toLowerCase() === ('kolombo'))) {    
    //  	Sri Lanka
const html = `
<b>Sri Lanka</b>
__________________________  
<b>Capital:</b> Sri Jayawardenepura Kotte (legislative), Colombo (executive and judicial)
<b>Area:</b> 62,710 Km²
<b>Population:</b> 21,413,249	
<b>Region:</b> Asia
<b>Currency:</b> Sri Lankan rupee (Rs, LKR)
<b>Languages:</b> Sinhala, Tamil
<b>Phone code:</b> +94
<b>Neighbors:</b> 
<i>India</i> maritime to the north
<i>Maldives</i> maritime to the southwest
<b>Seas:</b> 
<i>Laccadive Sea</i> to the west
<i>Palk Strait</i> to the north and northwest
<i>Bay of Bengal</i> to the east
<i>Indian Ocean</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Colombo</i> (648,034)
<i>Dehiwala-Mount Lavinia</i> (219,827)
<i>Moratuwa</i> (185,031)
<i>Jaffna</i> (169,102)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Sri_Lanka"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sril.png', {
caption : 'Flag of Sri Lanka'
});
bot.sendPhoto(msg.chat.id, './maps/map-sril.png', {
caption : 'Sri Lanka on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('sudan')) || (msg.text.toLowerCase() === ('khartoum')) || (msg.text.toLowerCase() === ('khartum')) || (msg.text.toLowerCase() === ('hartum')) || (msg.text.toLowerCase() === ('hartoum'))) {    
    //  	Sudan
const html = `
<b>Sudan</b>
__________________________  
<b>Capital:</b> Khartoum
<b>Area:</b> 1,765,048 Km²
<b>Population:</b> 43,849,260	
<b>Region:</b> Africa
<b>Currency:</b> Sudanese pound (SDG)
<b>Languages:</b> Arabic, English
<b>Phone code:</b> +249
<b>Neighbors:</b> 
<i>Egypt</i> to the north
<i>Eritrea, Ethiopia</i> to the east
<i>South Sudan</i> to the south
<i>Central African Republic, Chad</i> to the west
<i>Libya</i> to the northwest
<i>Saudi Arabia</i> maritime to the northeast
<b>Seas:</b> 
<i>Red Sea</i> to the northeast
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Khartoum</i> (1,974,647)
<i>Omdurman</i> (1,200,000)
<i>Nyala</i> (565,734)
<i>Port Sudan</i> (489,725)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Sudan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sdn.png', {
caption : 'Flag of Sudan'
});
bot.sendPhoto(msg.chat.id, './maps/map-sdn.png', {
caption : 'Sudan on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('suriname')) || (msg.text.toLowerCase() === ('surinam')) || (msg.text.toLowerCase() === ('paramaribo'))) {    
    //  	Suriname
const html = `
<b>Suriname</b>
__________________________  
<b>Capital:</b> Paramaribo
<b>Area:</b> 156,000 Km²
<b>Population:</b> 586,632
<b>Region:</b> South America
<b>Currency:</b> Surinamese dollar (SRD)
<b>Languages:</b> Dutch
<b>Phone code:</b> +597
<b>Neighbors:</b> 
<i>French Guiana(France)</i> to the east
<i>Brazil</i> to the south
<i>Guyana</i> to the west
<b>Seas:</b> 
<i>Atlantic Ocean</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Paramaribo</i> (223,757)
<i>Lelydorp</i> (18,223)
<i>Brokopondo</i> (14,662)
<i>Nieuw Nickerie</i> (13,143)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Suriname"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-sur.png', {
caption : 'Flag of Suriname'
});
bot.sendPhoto(msg.chat.id, './maps/map-sur.png', {
caption : 'Suriname on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('sweden')) || (msg.text.toLowerCase() === ('sverige')) || (msg.text.toLowerCase() === ('stockholm')) || (msg.text.toLowerCase() === ('stokholm'))) {    
    //  Sweden
const html = `
<b>Sweden</b>
__________________________  
<b>Capital:</b> Stockholm
<b>Area:</b> 410,340 Km²
<b>Population:</b> 10,099,265
<b>Region:</b> Europe
<b>Currency:</b> Swedish krona (SEK)
<b>Languages:</b> Swedish
<b>Phone code:</b> +46
<b>Neighbors:</b> 
<i>Norway</i> to the west and northwest
<i>Finland</i> to the east and southeast
<i>Estonia, Latvia, Lithuania</i> maritime to the east
<i>Kaliningrad oblast(Russia)</i> maritime to the southeast
<i>Poland, Germany</i> maritime to the south
<i>Denmark</i> maritime to the west
<b>Seas:</b> 
<i>Gulf of Bothnia</i> to the east
<i>Baltic Sea</i> to the east and south
<i>Kattegat Strait</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Stockholm</i> (1,515,017)
<i>Göteborg</i> (599,011)
<i>Malmö</i> (316,588)
<i>Uppsala</i> (160,462)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Sweden"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-swe.png', {
caption : 'Flag of Sweden'
});
bot.sendPhoto(msg.chat.id, './maps/map-swe.png', {
caption : 'Sweden on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('switzerland')) || (msg.text.toLowerCase() === ('schweiz')) || (msg.text.toLowerCase() === ('swizerland')) || (msg.text.toLowerCase() === ('suisse')) || (msg.text.toLowerCase() === ('svizzera')) || (msg.text.toLowerCase() === ('bern')) ) {    
    //  	Switzerland
const html = `
<b>Switzerland</b>
__________________________  
<b>Capital:</b> None (de jure), Bern (de facto)
<b>Area:</b> 39,516 Km²
<b>Population:</b> 8,654,622
<b>Region:</b> Europe
<b>Currency:</b> Swiss franc (CHF)
<b>Languages:</b> German, French, Italian
<b>Phone code:</b> +41
<b>Neighbors:</b> 
<i>Italy</i> to the south
<i>France</i> to the west
<i>Germany</i> maritime to the north
<i>Austria, Liechtenstein</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Zurich</i> (341,730)
<i>Geneva</i> (183,981)
<i>Basel</i> (164,488)
<i>Lausanne</i> (139,111)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Switzerland"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-swi.png', {
caption : 'Flag of Switzerland'
});
bot.sendPhoto(msg.chat.id, './maps/map-swi.png', {
caption : 'Switzerland on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('syria')) || (msg.text.toLowerCase() === ('siria')) || (msg.text.toLowerCase() === ('siriya')) || (msg.text.toLowerCase() === ('sirija')) || (msg.text.toLowerCase() === ('damascus')) || (msg.text.toLowerCase() === ('damaskus')) || (msg.text.toLowerCase() === ('damask')) || (msg.text.toLowerCase() === ('damasc'))) {    
    //  	Syria
const html = `
<b>Syria</b>
__________________________  
<b>Capital:</b> Damascus
<b>Area:</b> 183,630 Km²
<b>Population:</b> 17,500,658
<b>Region:</b> Asia
<b>Currency:</b> Syrian pound (SYP)
<b>Languages:</b> Arabic
<b>Phone code:</b> +963
<b>Neighbors:</b> 
<i>Turkey</i> to the north
<i>Lebanon, Israel</i> to the west
<i>Jordan</i> to the south
<i>Iraq</i> to the east and southeast
<i>Cyprus</i> maritime to the west
<b>Seas:</b>
<i>Mediterranean Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Aleppo</i> (1,602,264)
<i>Damascus</i> (1,569,394)
<i>Homs</i> (775,404)
<i>Hama</i> (460,602)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Syria"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-syr.png', {
caption : 'Flag of Syria'
});
bot.sendPhoto(msg.chat.id, './maps/map-syr.png', {
caption : 'Syria on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('tajikistan')) || (msg.text.toLowerCase() === ('tadjikistan')) || (msg.text.toLowerCase() === ('тоҷикистон')) || (msg.text.toLowerCase() === ('dushanbe'))) {    
    //  	Tajikistan
const html = `
<b>Tajikistan</b>
__________________________  
<b>Capital:</b> Dushanbe
<b>Area:</b> 139,960 Km²
<b>Population:</b> 9,537,645
<b>Region:</b> Asia
<b>Currency:</b> Somoni (TJS)
<b>Languages:</b> Tajiki
<b>Phone code:</b> +992
<b>Neighbors:</b> 
<i>Kyrgyzstan</i> to the north
<i>Uzbekistan</i> to the west
<i>Afghanistan</i> to the south
<i>China</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Dushanbe</i> (679,400)
<i>Khujand</i> (144,865)
<i>Kŭlob</i> (78,786)
<i>Kurgan-Tyube</i> (65,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Tajikistan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-taj.png', {
caption : 'Flag of Tajikistan'
});
bot.sendPhoto(msg.chat.id, './maps/map-taj.png', {
caption : 'Tajikistan on a world map',
                                                                                                           
   });                   
}

else if((msg.text.toLowerCase() === ('taiwan')) || (msg.text.toLowerCase() === ('taywan')) || (msg.text.toLowerCase() === ('taipei')) || (msg.text.toLowerCase() === ('taypei')) || (msg.text.toLowerCase() === ('taypey')) || (msg.text.toLowerCase() === ('taipey')) || (msg.text.toLowerCase() === ('taibei')) || (msg.text.toLowerCase() === ('taybei')) || (msg.text.toLowerCase() === ('taybey')) || (msg.text.toLowerCase() === ('taibey'))) {    
    //  	Taiwan
const html = `
<b>Taiwan</b>
__________________________  
<b>Capital:</b> Taipei
<b>Area:</b> 36 193 Km²
<b>Population:</b> 23,570,000
<b>Region:</b> Asia
<b>Currency:</b> New Taiwan dollar (NT$, TWD)
<b>Languages:</b> Formosan languages, Hakka, Hokkien, Mandarin, Matsu, Taiwan Sign Language
<b>Phone code:</b> +886
<b>Neighbors:</b> 
<i>China</i> to the northwest
<i>Japan</i> to the northeast
<i>Philippines</i> to the south
<b>Seas:</b>
<i>East China Sea</i> to the north and west
<i>South China Sea</i> to the south
<i>Philippine Sea</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Taipei</i> (7,871,900)
<i>Kaohsiung</i> (1,519,711)
<i>Taichung</i> (1,040,725)
<i>Tainan City</i> (771,235)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Taiwan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-taiw.png', {
caption : 'Flag of Taiwan'
});
bot.sendPhoto(msg.chat.id, './maps/map-taiw.png', {
caption : 'Taiwan on a world map',
                                                                                                           
   });                   
}







else if((msg.text.toLowerCase() === ('tanzania')) || (msg.text.toLowerCase() === ('tanzaniya')) || (msg.text.toLowerCase() === ('tanzanija')) || (msg.text.toLowerCase() === ('dodoma')) || (msg.text.toLowerCase() === ('dar es salaam')) || (msg.text.toLowerCase() === ('dar es salam'))) {    
    //  	Tanzania
const html = `
<b>Tanzania</b>
__________________________  
<b>Capital:</b> Dodoma
<b>Area:</b> 885,800 Km²
<b>Population:</b> 59,734,218
<b>Region:</b> Africa
<b>Currency:</b> Tanzanian shilling (TZS)
<b>Languages:</b> Swahili
<b>Phone code:</b> +255
<b>Neighbors:</b> 
<i>Kenya, Uganda</i> to the north
<i>Rwanda, Burundi, Democratic Republic of the Congo</i> to the west
<i>Zambia, Malawi, Mozambique</i> to the south
<b>Seas:</b> 
<i>Indian Ocean</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Dar es Salaam</i> (4,364,541)
<i>Mwanza</i> (706,543)
<i>Arusha</i> (416,442)
<i>Dodoma</i> (213,636)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Tanzania"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-tanz.png', {
caption : 'Flag of Tanzania'
});
bot.sendPhoto(msg.chat.id, './maps/map-tanz.png', {
caption : 'Tanzania on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('thailand')) || (msg.text.toLowerCase() === ('thayland')) || (msg.text.toLowerCase() === ('thai')) || (msg.text.toLowerCase() === ('tailand')) || (msg.text.toLowerCase() === ('tayland')) || (msg.text.toLowerCase() === ('bangkok')) || (msg.text.toLowerCase() === ('bangkock')) || (msg.text.toLowerCase() === ('bangcok')) || (msg.text.toLowerCase() === ('bangcock'))) {    
    //  	Thailand
const html = `
<b>Thailand</b>
__________________________  
<b>Capital:</b> Bangkok
<b>Area:</b> 510,890 Km²
<b>Population:</b> 69,799,978
<b>Region:</b> Asia
<b>Currency:</b> Baht (฿, THB)
<b>Languages:</b> Thai
<b>Phone code:</b> +66
<b>Neighbors:</b> 
<i>Myanmar</i> to the north
<i>Laos</i> to the north and east
<i>Cambodia</i> to the east
<i>Malaysia</i> to the south
<i>Vietnam</i> maritime to the east
<i>India</i> maritime to the west
<b>Seas:</b> 
<i>Gulf of Siam</i> to the south
<i>Andaman Sea, Sea of Burma</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Bangkok</i> (14,565,547)
<i>Nonthaburi</i> (270,609)
<i>Nakhon Ratchasima</i> (174,332)
<i>Chiang Mai</i> (174,235)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Thailand"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-thai.png', {
caption : 'Flag of Thailand'
});
bot.sendPhoto(msg.chat.id, './maps/map-thai.png', {
caption : 'Thailand on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('timor-leste')) || (msg.text.toLowerCase() === ('timor leste')) || (msg.text.toLowerCase() === ('timor leshte')) || (msg.text.toLowerCase() === ('timor-leshte')) || (msg.text.toLowerCase() === ('timor-leshti')) || (msg.text.toLowerCase() === ('timor leshti')) || (msg.text.toLowerCase() === ('timór-leste')) || (msg.text.toLowerCase() === ('timór leste')) || (msg.text.toLowerCase() === ('east timor')) || (msg.text.toLowerCase() === ('dili')) || (msg.text.toLowerCase() === ('dily')) || (msg.text.toLowerCase() === ('dilie'))) {    
    //  	Timor-Leste
const html = `
<b>Timor-Leste</b>
__________________________  
<b>Capital:</b> Dili
<b>Area:</b> 14,870 Km²
<b>Population:</b> 1,318,445
<b>Region:</b> Asia
<b>Currency:</b> United States dollar (USD)
<b>Languages:</b> Tetum, Portuguese
<b>Phone code:</b> +670
<b>Neighbors:</b> 
<i>Indonesia</i> to the west, maritime to the north and east
<i>Australia</i> maritime to the south
<b>Seas:</b> 
<i>Timor Sea</i> to the south and east
<i>Banda Sea</i> to the north
<i>Savu Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Dili</i> (150,000)
<i>Maliana</i> (22,000)
<i>Suai</i> (21,539)
<i>Likisá</i> (19,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/East_Timor"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-tile.png', {
caption : 'Flag of Timor-Leste'
});
bot.sendPhoto(msg.chat.id, './maps/map-tile.png', {
caption : 'Timor-Leste on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('togo')) || (msg.text.toLowerCase() === ('lomé')) || (msg.text.toLowerCase() === ('lome')) ) {    
    //  	Togo
const html = `
<b>Togo</b>
__________________________  
<b>Capital:</b> Lomé
<b>Area:</b> 54,390	Km²
<b>Population:</b> 8,278,724
<b>Region:</b> Africa
<b>Currency:</b> West African CFA franc (XOF)
<b>Languages:</b> French
<b>Phone code:</b> +228
<b>Neighbors:</b> 
<i>Ghana</i> to the west
<i>Benin</i> to the east
<i>Burkina Faso</i> to the south
<b>Seas:</b> 
<i>Gulf of Guinea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Lomé</i> (749,700)
<i>Sokodé</i> (117,811)
<i>Kara</i> (104,207)
<i>Atakpamé</i> (80,683)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Togo"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-togo.png', {
caption : 'Flag of Togo'
});
bot.sendPhoto(msg.chat.id, './maps/map-togo.png', {
caption : 'Togo on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('tonga')) || (msg.text.toLowerCase() === ('nukuʻalofa')) || (msg.text.toLowerCase() === (`nuku'alofa`)) || (msg.text.toLowerCase() === ('nukualofa')) || (msg.text.toLowerCase() === ('nuku alofa'))) {    
    //  	Tonga
const html = `
<b>Tonga</b>
__________________________  
<b>Capital:</b> Nukuʻalofa
<b>Area:</b> 720 Km²
<b>Population:</b> 105,695
<b>Region:</b> Oceania
<b>Currency:</b> Paʻanga (TOP)
<b>Languages:</b> English, Tongan
<b>Phone code:</b> +676
<b>Neighbors:</b> 
<i>Fiji, Wallis and Futuna(France)</i> maritime to the northwest
<i>American Samoa(the USA), Samoa, Niue(New Zealand)</i> maritime to the northeast
<b>Seas:</b> 
<i>Pacific Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Nuku'alofa</i> (22,400)
<i>Lapaha</i> (8,000)
<i>Neiafu</i> (4,320)
<i>Haveluloto</i> (3,417)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Tonga"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-tonga.png', {
caption : 'Flag of Tonga'
});
bot.sendPhoto(msg.chat.id, './maps/map-tonga.png', {
caption : 'Tonga on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('trinidad and tobago')) || (msg.text.toLowerCase() === ('trinidad tobago')) || (msg.text.toLowerCase() === (`trinidad`)) || (msg.text.toLowerCase() === ('tobago')) || (msg.text.toLowerCase() === ('trynidad')) || (msg.text.toLowerCase() === ('port of spain')) || (msg.text.toLowerCase() === ('port-of-spain'))) {    
    //  	Trinidad and Tobago
const html = `
<b>Trinidad and Tobago</b>
__________________________  
<b>Capital:</b> Port of Spain
<b>Area:</b> 5,130 Km²
<b>Population:</b> 1,399,488
<b>Region:</b> South America
<b>Currency:</b> Trinidad and Tobago dollar (TTD)
<b>Languages:</b> English
<b>Phone code:</b> +1 (868)
<b>Neighbors:</b> 
<i>Venezuela</i> maritime to the south
<i>Guyana</i> maritime to the southeast
<i>Grenada, Saint Vincent and the Grenadines</i> maritime to the north
<i>Barbados</i> maritime to the northeast
<b>Seas:</b> 
<i>Gulf of Paria</i> to the west
<i>Columbus Channel</i> to the south
<i>Atlantic Ocean</i> to the east
<i>Caribbean Sea</i> to the north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Chaguanas</i> (67,433)
<i>Mon Repos</i> (56,380)
<i>San Fernando</i> (55,419)
<i>Port of Spain</i> (49,031)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Trinidad_and_Tobago"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-trin.png', {
caption : 'Flag of Trinidad and Tobago'
});
bot.sendPhoto(msg.chat.id, './maps/map-trin.png', {
caption : 'Trinidad and Tobago on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('tunisia')) || (msg.text.toLowerCase() === ('tunis')) || (msg.text.toLowerCase() === ('tunisiya')) || (msg.text.toLowerCase() === ('tunisija')) || (msg.text.toLowerCase() === (`tunys`))) {    
    //  	Tunisia
const html = `
<b>Tunisia</b>
__________________________  
<b>Capital:</b> Tunis
<b>Area:</b> 155,360 Km²
<b>Population:</b> 11,818,619
<b>Region:</b> Africa
<b>Currency:</b> Tunisian dinar (TND)
<b>Languages:</b> Arabic
<b>Phone code:</b> +216
<b>Neighbors:</b> 
<i>Algeria</i> to the west
<i>Libya</i> to the east and south
<i>Italy, Malta</i> maritime to the north and northeast
<b>Seas:</b> 
<i>Mediterranean Sea</i> to the north and east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Tunis</i> (693,210)
<i>Sfax</i> (277,278)
<i>Sousse</i> (164,123)
<i>Kairouan</i> (119,794)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Tunisia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-tunis.png', {
caption : 'Flag of Tunisia'
});
bot.sendPhoto(msg.chat.id, './maps/map-tunis.png', {
caption : 'Tunisia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('turkey')) || (msg.text.toLowerCase() === ('türkiye')) || (msg.text.toLowerCase() === ('turkiye')) || (msg.text.toLowerCase() === ('turky')) || (msg.text.toLowerCase() === ('ankara')) || (msg.text.toLowerCase() === ('istanbul')) || (msg.text.toLowerCase() === ('istambul')) || (msg.text.toLowerCase() === ('stambul'))) {    
    //  	Turkey
const html = `
<b>Turkey</b>
__________________________  
<b>Capital:</b> Ankara
<b>Area:</b> 769,630 Km²
<b>Population:</b> 84,339,067
<b>Region:</b> Asia/Europe
<b>Currency:</b> Turkish lira (₺, TRY)
<b>Languages:</b> Turkish
<b>Phone code:</b> +90
<b>Neighbors:</b> 
<i>Greece, Bulgaria</i> to the northwest
<i>Georgia</i> to the northeast
<i>Armenia, Azerbaijan, Iran</i> to the east
<i>Iraq</i> to the southeast
<i>Syria</i> to the south
<b>Seas:</b> 
<i>Black Sea</i> to the north
<i>Sea of Marmara</i> to the northwest
<i>Aegean Sea</i> to the west
<i>Mediterranean Sea</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Istanbul</i> (13,820,000)
<i>Ankara</i> (4,470,000)
<i>Izmir</i> (2,830,000)
<i>Bursa</i> (1,770,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Turkey"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-trky.png', {
caption : 'Flag of Turkey'
});
bot.sendPhoto(msg.chat.id, './maps/map-trky.png', {
caption : 'Turkey on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('turkmenistan')) || (msg.text.toLowerCase() === ('türkmenistan')) || (msg.text.toLowerCase() === ('ashgabat')) || (msg.text.toLowerCase() === ('asgabat')) || (msg.text.toLowerCase() === ('aşgabat'))) {    
    //  	Turkmenistan
const html = `
<b>Turkmenistan</b>
__________________________  
<b>Capital:</b> Ashgabat
<b>Area:</b> 469,930 Km²
<b>Population:</b> 6,031,200
<b>Region:</b> Asia
<b>Currency:</b> Turkmenistan manat (TMT)
<b>Languages:</b> Turkmen
<b>Phone code:</b> +993
<b>Neighbors:</b> 
<i>Kazakhstan</i> to the north
<i>Uzbekistan</i> to the north and northeast
<i>Afghanistan</i> to the southeast
<i>Iran</i> to the south
<i>Azerbaijan</i> maritime to the west
<b>Seas:</b> 
<i>Caspian Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Ashgabat</i> (947,221)
<i>Türkmenabat</i> (279,765)
<i>Daşoguz</i> (245,872)
<i>Mary</i> (126,141)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Turkmenistan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-tmns.png', {
caption : 'Flag of Turkmenistan'
});
bot.sendPhoto(msg.chat.id, './maps/map-tmns.png', {
caption : 'Turkmenistan on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('tuvalu')) || (msg.text.toLowerCase() === ('tuwalu')) || (msg.text.toLowerCase() === ('funafuti')) || (msg.text.toLowerCase() === ('funafuty'))) {    
    //  	Tuvalu
const html = `
<b>Tuvalu</b>
__________________________  
<b>Capital:</b> Funafuti
<b>Area:</b> 30	Km²
<b>Population:</b> 11,792
<b>Region:</b> Oceania
<b>Currency:</b> Tuvaluan dollar, Australian dollar (AUD)
<b>Languages:</b> English, Tuvaluan
<b>Phone code:</b> +688
<b>Neighbors:</b> 
<i>Fiji</i> maritime to the south
<i>Kiribati</i> maritime to the north
<i>Wallis and Futuna(France)</i> maritime to the southwest
<b>Seas:</b> 
<i>Pacific Ocean</i> around
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Funafuti</i> (4,492)
<i>Savave Village</i> (586)
<i>Motufoua School</i> (506)
<i>Teava Village</i> (439)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Tuvalu"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-tuv.png', {
caption : 'Flag of Tuvalu'
});
bot.sendPhoto(msg.chat.id, './maps/map-tuv.png', {
caption : 'Tuvalu on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('uganda')) || (msg.text.toLowerCase() === ('campala')) || (msg.text.toLowerCase() === ('kampala'))) {    
    //  	Uganda
const html = `
<b>Uganda</b>
__________________________  
<b>Capital:</b> Kampala
<b>Area:</b> 199,810 Km²
<b>Population:</b> 45,741,007
<b>Region:</b> Africa
<b>Currency:</b> Ugandan shilling (UGX)
<b>Languages:</b> English, Swahili
<b>Phone code:</b> +256
<b>Neighbors:</b> 
<i>South Sudan</i> to the north
<i>Kenya</i> to the east
<i>Ruanda, Tanzania</i> to the south
<i>Democratic Republic of the Congo</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Kampala</i> (1,353,189)
<i>Gulu</i> (146,858)
<i>Lira</i> (119,323)
<i>Mbarara</i> (97,500)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Uganda"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-uga.png', {
caption : 'Flag of Uganda'
});
bot.sendPhoto(msg.chat.id, './maps/map-uga.png', {
caption : 'Uganda on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('ukraine')) || (msg.text.toLowerCase() === ('ucraine')) || (msg.text.toLowerCase() === ('ukraina')) || (msg.text.toLowerCase() === ('ucrania')) || (msg.text.toLowerCase() === ('kyiv')) || (msg.text.toLowerCase() === ('kiev')) || (msg.text.toLowerCase() === ('kiyev')) || (msg.text.toLowerCase() === ('kijev'))) {    
    //  	Ukraine
const html = `
<b>Ukraine</b>
__________________________  
<b>Capital:</b> Kyiv
<b>Area:</b> 579,320 Km²
<b>Population:</b> 43,733,762
<b>Region:</b> Europe
<b>Currency:</b> Hryvnia (₴, UAH)
<b>Languages:</b> Ukrainian
<b>Phone code:</b> +380
<b>Neighbors:</b> 
<i>Belarus</i> to the north
<i>Russia</i> to the north and east
<i>Poland, Slovakia</i> to the west
<i>Hungary, Romania, Moldova</i> to the southwest
<i>Turkey</i> maritime to the south
<b>Seas:</b> 
<i>Black Sea, Sea of Azov</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Kyiv</i> (2,797,553)
<i>Kharkiv</i> (1,430,885)
<i>Donetsk</i> (1,024,700)
<i>Odessa</i> (1,013,159)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Ukraine"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-ukr.png', {
caption : 'Flag of Ukraine'
});
bot.sendPhoto(msg.chat.id, './maps/map-ukr.png', {
caption : 'Ukraine on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('united arab emirates')) || (msg.text.toLowerCase() === ('arab emirates')) || (msg.text.toLowerCase() === ('the united arab emirates')) || (msg.text.toLowerCase() === ('emirates')) || (msg.text.toLowerCase() === ('uae')) || (msg.text.toLowerCase() === ('the uae')) || (msg.text.toLowerCase() === ('abu dhabi')) || (msg.text.toLowerCase() === ('abudhabi')) || (msg.text.toLowerCase() === ('abu-dhabi')) || (msg.text.toLowerCase() === ('abu dabi')) || (msg.text.toLowerCase() === ('abudabi')) || (msg.text.toLowerCase() === ('abu-dabi'))|| (msg.text.toLowerCase() === ('abu daby')) || (msg.text.toLowerCase() === ('abudaby')) || (msg.text.toLowerCase() === ('abu-daby'))) {    
    //  	United Arab Emirates
const html = `
<b>United Arab Emirates</b>
__________________________  
<b>Capital:</b> Abu Dhabi
<b>Area:</b> 83,600 Km²
<b>Population:</b> 9,890,402
<b>Region:</b> Asia
<b>Currency:</b> UAE dirham (AED)
<b>Languages:</b> Arabic
<b>Phone code:</b> +971
<b>Neighbors:</b> 
<i>Saudi Arabia</i> to the west and south
<i>Oman</i> to the east and northeast
<i>Qatar</i> maritime to the northwest
<i>Iran</i> maritime to the north
<b>Seas:</b> 
<i>Persian Gulf</i> to the north
<i>Gulf of Oman</i> to the east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Dubai</i> (3,386,941)
<i>Abu Dhabi</i> (1,807,000)
<i>Sharjah</i> (1,274,749)
<i>Al Ain</i> (766,936)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/United_Arab_Emirates"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-uae.png', {
caption : 'Flag of United Arab Emirates'
});
bot.sendPhoto(msg.chat.id, './maps/map-uae.png', {
caption : 'United Arab Emirates on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('united kingdom')) || (msg.text.toLowerCase() === ('united kingdom of great britain and northern ireland')) || (msg.text.toLowerCase() === ('the uk')) || (msg.text.toLowerCase() === ('uk')) || (msg.text.toLowerCase() === ('great britain')) || (msg.text.toLowerCase() === ('england')) || (msg.text.toLowerCase() === ('london'))) {    
    //  	United Kingdom
const html = `
<b>United Kingdom</b>
__________________________  
<b>Capital:</b> London
<b>Area:</b> 241,930 Km²
<b>Population:</b> 67,886,011
<b>Region:</b> Europe
<b>Currency:</b> Pound sterling (GBP)
<b>Languages:</b> English
<b>Phone code:</b> +44
<b>Neighbors:</b> 
<i>Ireland</i> to the west
<i>France</i> maritime to the south
<i>Belgium, Netherlands</i> maritime to the southeast
<i>Germany, Denmark</i> maritime to the east
<i>Norway</i> maritime to the northeast
<i>Faroe Islands(Denmark)</i> maritime to the north
<b>Seas:</b> 
<i>English Channel</i> to the south
<i>North Sea</i> to the east
<i>Irish Sea</i> to the west
<i>Atlantic Ocean</i> to the north and west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>London</i> (7,556,900)
<i>Birmingham</i> (984,333)
<i>Liverpool</i> (864,122)
<i>Sheffield</i> (685,368)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/United_Kingdom"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-unik.png', {
caption : 'Flag of United Kingdom'
});
bot.sendPhoto(msg.chat.id, './maps/map-unik.png', {
caption : 'United Kingdom on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('united states of america')) || (msg.text.toLowerCase() === ('the united states of america')) || (msg.text.toLowerCase() === ('america')) || (msg.text.toLowerCase() === ('amerika')) || (msg.text.toLowerCase() === ('the united states')) || (msg.text.toLowerCase() === ('the us')) || (msg.text.toLowerCase() === ('the usa')) || (msg.text.toLowerCase() === ('us')) || (msg.text.toLowerCase() === ('usa')) || (msg.text.toLowerCase() === ('the u.s.a.')) || (msg.text.toLowerCase() === ('u.s.a.')) || (msg.text.toLowerCase() === ('the u.s.')) || (msg.text.toLowerCase() === ('u.s.')) || (msg.text.toLowerCase() === ('washington, d.c.')) || (msg.text.toLowerCase() === ('washington d.c.')) || (msg.text.toLowerCase() === ('washington, dc')) || (msg.text.toLowerCase() === ('washington dc')) || (msg.text.toLowerCase() === ('washington'))) {    
    //  		United States of America
const html = `
<b>United States of America</b>
__________________________  
<b>Capital:</b> Washington, D.C.
<b>Area:</b> 9,147,420 Km²
<b>Population:</b> 331,002,651
<b>Region:</b> North America
<b>Currency:</b> United States dollar ($, USD)
<b>Languages:</b> English
<b>Phone code:</b> +1
<b>Neighbors:</b> 
<i>Canada</i> to the north
<i>Mexico</i> to the south
<i>Cuba, Bahamas</i> maritime to the southeast
<i>Russia</i> maritime to the west
<b>Seas:</b> 
<i>Atlantic Ocean, Gulf of Maine</i> to the east
<i>Gulf of Mexico</i> to the south
<i>Pacific Ocean</i> to the west
<i>Atlantic Ocean</i> to the north and west
<b>on Alaska:</b>
<i>Beaufort Sea, Arctic Ocean</i> to the north
<i>Chukchi Sea, Bering Sea</i> to the west
<i>Gulf of Alaska, Pacific Ocean</i> to the south
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>New York City</i> (8,601,186)
<i>Los Angeles</i> (4,057,841)
<i>Chicago</i> (2,679,044)
<i>Houston</i> (2,359,480)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/United_States"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-usa.png', {
caption : 'Flag of United States of America'
});
bot.sendPhoto(msg.chat.id, './maps/map-usa.png', {
caption : 'United States of America on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('uruguay')) || (msg.text.toLowerCase() === ('uruguai')) || (msg.text.toLowerCase() === ('urugvay')) || (msg.text.toLowerCase() === ('urugvai')) || (msg.text.toLowerCase() === ('urugway')) || (msg.text.toLowerCase() === ('urugwai')) || (msg.text.toLowerCase() === ('montevideo')) || (msg.text.toLowerCase() === ('montewideo'))) {    
    //  	Uruguay
const html = `
<b>Uruguay</b>
__________________________  
<b>Capital:</b> Montevideo
<b>Area:</b> 175,020 Km²
<b>Population:</b> 3,473,730
<b>Region:</b> South America
<b>Currency:</b> Uruguayan peso (UYU)
<b>Languages:</b> Spanish
<b>Phone code:</b> +598
<b>Neighbors:</b> 
<i>Argentina</i> to the west
<i>Brazil</i> to the north and northeast
<b>Seas:</b> 
<i>La Plata(estuary)</i> to the south
<i>Atlantic Ocean</i> to the south and east
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Montevideo</i> (1,319,108)
<i>Salto</i> (104,028)
<i>Ciudad de la Costa</i> (95,176)
<i>Paysandú</i> (76,412)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Uruguay"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-urug.png', {
caption : 'Flag of Uruguay'
});
bot.sendPhoto(msg.chat.id, './maps/map-urug.png', {
caption : 'Uruguay on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('uzbekistan')) || (msg.text.toLowerCase() === ('uzbekystan')) || (msg.text.toLowerCase() === ('uzbek')) || (msg.text.toLowerCase() === ('tashkent')) || (msg.text.toLowerCase() === ('dashkent'))) {    
    //  	Uzbekistan
const html = `
<b>Uzbekistan</b>
__________________________  
<b>Capital:</b> Tashkent
<b>Area:</b> 425,400 Km²
<b>Population:</b> 33,469,203
<b>Region:</b> Asia
<b>Currency:</b> Uzbek som (UZS)
<b>Languages:</b> Uzbek
<b>Phone code:</b> +998
<b>Neighbors:</b>
<i>Kazakhstan</i> to the north and northwest
<i>Kyrgyzstan, Tajikistan</i> to the east and southeast
<i>Afghanistan</i> to the south
<i>Turkmenistan</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Tashkent</i> (2,352,900)
<i>Samarqand</i> (509,000)
<i>Fergana</i> (494,900)
<i>Namangan</i> (475,700)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Uzbekistan"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-uzb.png', {
caption : 'Flag of Uzbekistan'
});
bot.sendPhoto(msg.chat.id, './maps/map-uzb.png', {
caption : 'Uzbekistan on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('vanuatu')) || (msg.text.toLowerCase() === ('wanuatu')) || (msg.text.toLowerCase() === ('new hebrides')) || (msg.text.toLowerCase() === ('port vila')) || (msg.text.toLowerCase() === ('port villa')) || (msg.text.toLowerCase() === ('port-villa')) || (msg.text.toLowerCase() === ('port-vila')) || (msg.text.toLowerCase() === ('port wila')) || (msg.text.toLowerCase() === ('port willa')) || (msg.text.toLowerCase() === ('port-wila')) || (msg.text.toLowerCase() === ('port-willa'))) {    
    //  	Vanuatu
const html = `
<b>Vanuatu</b>
__________________________  
<b>Capital:</b> Port Vila
<b>Area:</b> 12,190	Km²
<b>Population:</b> 307,145
<b>Region:</b> Oceania
<b>Currency:</b> Vatu (VUV)
<b>Languages:</b> Bislama, English, French
<b>Phone code:</b> +678
<b>Neighbors:</b>
<i>Solomon Islands</i> maritime to the northwest
<i>Fiji</i> maritime to the east
<i>New Caledonia(France)</i> to the southwest
<b>Seas:</b>
<i>Coral Sea</i> to the west and north
<i>Pacific Ocean</i> to the east and south 
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Port Vila</i> (35,901)
<i>Luganville</i> (13,397)
<i>Norsup</i> (2,998)
<i>Port-Olry</i> (1,951)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Vanuatu"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-van.jpg', {
caption : 'Flag of Vanuatu'
});
bot.sendPhoto(msg.chat.id, './maps/map-van.png', {
caption : 'Vanuatu on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('venezuela')) || (msg.text.toLowerCase() === ('venesuela')) || (msg.text.toLowerCase() === ('caracas')) || (msg.text.toLowerCase() === ('carakas')) || (msg.text.toLowerCase() === ('karacas')) || (msg.text.toLowerCase() === ('karakas'))) {    
    //  	Venezuela
const html = `
<b>Venezuela</b>
__________________________  
<b>Capital:</b> Caracas
<b>Area:</b> 882,050 Km²
<b>Population:</b> 28,435,940
<b>Region:</b> South America
<b>Currency:</b> Bolívar Soberano (VES)
<b>Languages:</b> Spanish
<b>Phone code:</b> +58
<b>Neighbors:</b>
<i>Guyana</i> to the east
<i>Brazil</i> to the south
<i>Colombia</i> to the southwest and west
<i>Aruba(Netherlands), Curaçao(Netherlands),</i> 
<i>Trinidad and Tobago, Grenada,</i> 
<i>Barbados, Saint Lucia, Dominica</i> 
<i>Dominicana, Puerto Rico,</i> 
<i>Saint Kitts and Nevis,</i> 
<i>United States Virgin Islands,</i>
<i>Saint Vincent and the Grenadines</i> maritime to the north
<b>Seas:</b>
<i>Caribbean Sea, Golfo de Venezuela</i> to north
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Caracas</i> (5,576,000)
<i>Maracaibo</i> (4,163,670)
<i>Valencia</i> (2,585,202)
<i>Barquisimeto</i> (1,600,000)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Venezuela"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-vnz.jpg', {
caption : 'Flag of Venezuela'
});
bot.sendPhoto(msg.chat.id, './maps/map-vnz.png', {
caption : 'Venezuela on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('vietnam')) || (msg.text.toLowerCase() === ('việt nam')) || (msg.text.toLowerCase() === ('viet nam')) || (msg.text.toLowerCase() === ('hanoi')) || (msg.text.toLowerCase() === ('hà nội')) || (msg.text.toLowerCase() === ('ha noi')) || (msg.text.toLowerCase() === ('ha nội')) || (msg.text.toLowerCase() === ('hà noi')) || (msg.text.toLowerCase() === ('ha noy')) || (msg.text.toLowerCase() === ('hanoy'))) {    
    //  	Vietnam
const html = `
<b>Vietnam</b>
__________________________  
<b>Capital:</b> Hanoi
<b>Area:</b> 310,070 Km²
<b>Population:</b> 97,338,579
<b>Region:</b> Asia
<b>Currency:</b> đồng (₫, VND)
<b>Languages:</b> Vietnamese
<b>Phone code:</b> +84
<b>Neighbors:</b>
<i>China</i> to the north
<i>Laos, Cambodia</i> to the west
<i>Thailand</i> maritime to the west
<i>Malaysia</i> maritime to the southwest
<i>Indonesia, Brunei</i> maritime to the south
<i>Philippines</i> maritime to the south and east
<b>Seas:</b>
<i>South China Sea</i> to the east and south
<i>Gulf of Thai</i> to the southwest
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Ho Chi Minh City</i> (3,467,331)
<i>Hanoi</i> (1,431,270)
<i>Da Nang</i> (752,493)
<i>Haiphong</i> (602,695)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Vietnam"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-viet.png', {
caption : 'Flag of Vietnam'
});
bot.sendPhoto(msg.chat.id, './maps/map-viet.png', {
caption : 'Vietnam on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('yemen')) || (msg.text.toLowerCase() === ('jemen')) || (msg.text.toLowerCase() === ('iemen')) || (msg.text.toLowerCase() === (`sana'a`)) || (msg.text.toLowerCase() === ('sanaa')) || (msg.text.toLowerCase() === ('sana')) || (msg.text.toLowerCase() === ('aden'))) {    
    //  	Yemen
const html = `
<b>Yemen</b>
__________________________  
<b>Capital:</b> Sana'a (De jure), Aden (Temporary capital in exile)
<b>Area:</b> 527,970 Km²
<b>Population:</b> 29,825,964
<b>Region:</b> Asia
<b>Currency:</b> Yemeni rial (YER)
<b>Languages:</b> Arabic
<b>Phone code:</b> +967
<b>Neighbors:</b>
<i>Saudi Arabia</i> to the north
<i>Oman</i> to the east
<i>Eritrea</i> maritime to the west
<i>Djibouti</i> maritime to the southwest
<i>Somalia</i> maritime to the south
<b>Seas:</b>
<i>Gulf of Aden</i> to the south
<i>Red Sea</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Sana'a</i> (2,431,649)
<i>Ta'izz</i> (596,672)
<i>Al Hudaydah</i> (548,433)
<i>Aden</i> (507,355)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Yemen"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-yem.png', {
caption : 'Flag of Yemen'
});
bot.sendPhoto(msg.chat.id, './maps/map-yem.png', {
caption : 'Yemen on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('zambia')) || (msg.text.toLowerCase() === ('zambiya')) || (msg.text.toLowerCase() === ('zambija')) || (msg.text.toLowerCase() === ('lusaka')) || (msg.text.toLowerCase() === ('loosaka'))) {    
    //  	Zambia
const html = `
<b>Zambia</b>
__________________________  
<b>Capital:</b> Lusaka
<b>Area:</b> 743,390 Km²
<b>Population:</b> 18,383,955
<b>Region:</b> Africa
<b>Currency:</b> Zambian kwacha (ZMW)
<b>Languages:</b> English
<b>Phone code:</b> +260
<b>Neighbors:</b>
<i>Democratic Republic of the Kongo</i> to the north
<i>Tanzania</i> to the northeast
<i>Malawi</i> to the east
<i>Mozambique</i> to the southeast
<i>Zimbabawe, Namibia</i> to the south
<i>Angola</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Lusaka</i> (1,267,440)
<i>Kitwe</i> (400,914)
<i>Ndola</i> (394,518)
<i>Kabwe</i> (188,979)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Zambia"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-zam.png', {
caption : 'Flag of Zambia'
});
bot.sendPhoto(msg.chat.id, './maps/map-zam.png', {
caption : 'Zambia on a world map',
                                                                                                           
   });                   
}
else if((msg.text.toLowerCase() === ('zimbabwe')) || (msg.text.toLowerCase() === ('zimbabve')) || (msg.text.toLowerCase() === ('simbabwe')) || (msg.text.toLowerCase() === ('harare')) || (msg.text.toLowerCase() === ('jarare'))) {    
    //  	Zimbabwe
const html = `
<b>Zimbabwe</b>
__________________________  
<b>Capital:</b> Harare
<b>Area:</b> 386,850 Km²
<b>Population:</b> 14,862,924
<b>Region:</b> Africa
<b>Currency:</b> Zimbabwean dollar
<b>Languages:</b> 16 languages(English, Shona Ndebele are the most popular)
<b>Phone code:</b> +263
<b>Neighbors:</b>
<i>Zambia</i> to the north
<i>Mozambique</i> to the north, east and southeast
<i>South Africa</i> to the south
<i>Botswana</i> to the south and southwwest
<i>Namibia</i> to the west
<pre>______________ </pre>
<b>Largest cities:</b>   
<i>Harare</i> (1,542,813)
<i>Bulawayo</i> (699,385)
<i>Chitungwiza</i> (340,360)
<i>Mutare</i> (184,205)
<pre>______________ </pre>
<a href="https://en.wikipedia.org/wiki/Zimbabwe"><b>Click for more info</b></a>
`        
                                                                                                       
bot.sendMessage(msg.chat.id, html, {
parse_mode : 'HTML',
disable_web_page_preview : true,
});
bot.sendPhoto(msg.chat.id, './flags/flag-zimb.png', {
caption : 'Flag of Zimbabwe'
});
bot.sendPhoto(msg.chat.id, './maps/map-zimb.png', {
caption : 'Zimbabwe on a world map',
                                                                                                           
   });                   
}
else if ((msg.text === (`/start`))){
   bot.sendMessage(msg.chat.id, `Hi, ${msg.from.first_name}, nice to see you. Type country or capital city;)`)
}
else if ((msg.text === (`/help`)) ){
    bot.sendMessage(msg.chat.id, `This bot can send you some info about any country(capital, population, area, currency, etc.). Bot can find country by its name or capital city. You can start now;)`)
}
else if ((msg.text === (`/report`)) ){
    bot.sendMessage(msg.chat.id, `You can contact developer by email: lliahovich2014@gmail.com IMPORTANT!!! If you are contacting about bugs or mistakes, please write "InfoCountryBot - BUG" in a letter subject. If you are contacting about any other case, please write "InfoCountryBot - OTHER" in a letter subject. Thank you in advance.`)
}
else if ((msg.text === (`/copyright`)) ){
    bot.sendMessage(msg.chat.id, `InfoCountryBot is an uncommercial product. All the information was taken from the open sources on fair use rules. No remuneration required. ©2021`)
}
else if ((msg.text === (`/capitals`)) ){
    bot.sendMessage(msg.chat.id, capitals, {
        parse_mode : 'HTML',
    });   
}
else if ((msg.text === (`/countries`)) ){
    bot.sendMessage(msg.chat.id, countries, {
        parse_mode : 'HTML',
    });   
}
else {
    bot.sendMessage(msg.chat.id, `Unfortunately, I did not find any match. You can use /capitals or /countries to see all info;)`) 
}

    })
};

findCountry();