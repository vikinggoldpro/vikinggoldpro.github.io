/* VikingGOLD – jogi dokumentumok (ÁSZF + adatkezelési tájékoztató)
   FONTOS: ha ebben a fájlban BÁRMIT módosítasz (a szövegeket vagy a dátumot), az oldal automatikusan észleli,
   és minden tagnak újra meg kell jelennie az elfogadó ablaknak. Nem kell semmilyen verziószámot átírni. */

export const LEGAL_UPDATED = '2026. november 7.';

/* TÖLTSD KI: az üzemeltető neve és (ha szeretnéd) e-mail címe. Ez kerül a szövegekbe. */
const UZEMELTETO = 'A VikingGOLD üzemeltetője';
const KAPCSOLAT = 'az <a href="/elerhetosegek">Elérhetőségek</a> oldalon';

export const TERMS_HTML = `
<h2 id="aszf">Általános Szerződési Feltételek</h2>
<p class="lg-meta">Hatályos: ${LEGAL_UPDATED}</p>

<h3>1. Ki vagyunk, és mire vonatkozik ez a dokumentum?</h3>
<p>A vikinggoldpro.github.io weboldalt („VikingGOLD”, „Oldal”) ${UZEMELTETO} („Szolgáltató”) üzemelteti. Ez az ÁSZF az Oldal használatára, a regisztrációra és az Oldalon elérhető szolgáltatásokra (tippek, VIP Klub, chat, üzenetküldés, értesítések) vonatkozik. Az Oldal használatával, illetve a regisztráció elfogadásával elfogadod ezeket a feltételeket.</p>

<h3>2. A szolgáltatás jellege – ez nagyon fontos</h3>
<ul>
<li>Az Oldalon közzétett tippek <b>kizárólag tájékoztató és szórakoztató jellegű vélemények</b>. Nem minősülnek pénzügyi, befektetési, fogadási vagy bármilyen más szakmai tanácsadásnak.</li>
<li><b>Nyereményt, hasznot vagy eredményt nem garantálunk.</b> A múltbeli találati arány vagy statisztika nem jelzi előre a jövőbeli eredményt.</li>
<li>A Szolgáltató <b>nem szervez fogadást, nem fogad el tétet, nem közvetít fogadóirodákat</b>, és nem kezeli a Felhasználók pénzét.</li>
<li>Minden fogadási döntést a Felhasználó a saját felelősségére hoz. Csak olyan összeget tegyél fel, amelynek elvesztését megengedheted magadnak.</li>
</ul>

<h3>3. Korhatár</h3>
<p>Az Oldalt és a regisztrációt kizárólag <b>18. életévüket betöltött</b> személyek használhatják. A regisztrációval és az elfogadással kijelented, hogy elmúltál 18 éves. A Szolgáltató jogosult ennek igazolását kérni, és a fiókot felfüggeszteni vagy törölni, ha a kijelentés nem igaz.</p>

<h3>4. Regisztráció és fiók</h3>
<ul>
<li>A fiók létrehozásához érvényes e-mail cím szükséges, amelyet meg kell erősíteni. Egy személy egy fiókot használhat.</li>
<li>A megadott adatoknak valósnak és pontosnak kell lenniük. Gondoskodj a jelszavad titokban tartásáról; a fiókodon végzett tevékenységért te felelsz.</li>
<li>A fiókodat másnak nem adhatod át, nem oszthatod meg, és nem értékesítheted.</li>
</ul>

<h3>5. A Felhasználó kötelezettségei, tiltott magatartás</h3>
<p>Tilos különösen:</p>
<ul>
<li>a VIP vagy más, zárt tartalmak (tippek, elemzések) <b>másolása, továbbadása, nyilvános megosztása</b> vagy kereskedelmi célú felhasználása;</li>
<li>az Oldal automatizált lekérdezése, adatgyűjtése („scraping”), a védelmi megoldások megkerülése, az Oldal vagy a szerverek zavarása, túlterhelése;</li>
<li>mások zaklatása, sértegetése, gyűlöletkeltés, jogsértő, félrevezető vagy kéretlen reklámot tartalmazó üzenetek (spam) küldése;</li>
<li>más személy nevében fellépni, vagy a Szolgáltató munkatársának kiadni magad;</li>
<li>az Oldalon fogadóirodai hirdetéseket, referral-linkeket vagy más, engedély nélküli kereskedelmi tartalmat közzétenni.</li>
</ul>

<h3>6. Chat, üzenetek és tartalmak</h3>
<p>A chatben és az üzenetekben közzétett tartalomért a közzétevő felel. A Szolgáltató a szabályokat sértő üzeneteket törölheti, a Felhasználót időlegesen némíthatja, a fiókot felfüggesztheti vagy véglegesen letilthatja. A moderálásról a Szolgáltató dönt; ha úgy érzed, tévedés történt, jelezd ${KAPCSOLAT}.</p>

<h3>7. VIP Klub</h3>
<p>A VIP tartalmakhoz való hozzáférés külön feltételekkel, a Szolgáltató által megadott módon és időtartamra érhető el. A VIP hozzáférés személyes, nem átruházható. A VIP tartalmak jellege és a hozzáférés lejárata is lehet módosítva; a már kifizetett időszakra vonatkozó jogaidat ez nem érinti. Ha a VIP hozzáférés fizetős, annak árát és a lemondás feltételeit a megrendelés előtt közöljük veled; a jogszabály szerinti fogyasztói jogaid (pl. elállás) érvényesek, kivéve, ha digitális tartalomnál a teljesítés a beleegyezéseddel már megkezdődött.</p>

<h3>8. Felelősség korlátozása</h3>
<ul>
<li>Az Oldal „ahogy van” alapon működik. Nem vállalunk felelősséget azért, hogy folyamatosan, hibátlanul vagy megszakítás nélkül elérhető.</li>
<li>A Szolgáltató a hatályos jogszabályok által megengedett mértékig <b>nem felel</b> a tippek alapján hozott fogadási döntésekből eredő veszteségért, elmaradt haszonért vagy bármilyen közvetett kárért.</li>
<li>Ez a korlátozás nem érinti a szándékosan vagy súlyos gondatlansággal okozott kárért, illetve az életben, testi épségben, egészségben okozott kárért való, jogszabály szerinti felelősséget.</li>
</ul>

<h3>9. Szellemi tulajdon</h3>
<p>Az Oldal arculata, szövegei, grafikái, statisztikái és a tippek összeállítása a Szolgáltató tulajdona vagy a Szolgáltató felhasználási jogával védett. Személyes, nem kereskedelmi használatra engedélyezett; ezen túl a Szolgáltató előzetes írásbeli engedélye szükséges.</p>

<h3>10. Felelős játék</h3>
<p>A fogadás kockázattal jár, és függőséget okozhat. Ha úgy érzed, hogy a fogadás kicsúszik az irányításod alól, kérj segítséget: Lelki Elsősegély Telefonszolgálat, <b>116-123</b> (ingyenes, a nap 24 órájában). Bővebben: <a href="/felelos-jatek">Felelős játék</a>.</p>

<h3>11. A szolgáltatás megszüntetése, a fiók törlése</h3>
<p>A fiókodat bármikor törölheted vagy kérheted a törlését ${KAPCSOLAT}. A Szolgáltató a fiókot felfüggesztheti vagy megszüntetheti, ha megsérted az ÁSZF-et, ha jogsértő magatartást tapasztal, vagy ha a szolgáltatás megszűnik.</p>

<h3>12. Az ÁSZF módosítása</h3>
<p>A Szolgáltató jogosult az ÁSZF-et egyoldalúan módosítani. Módosítás esetén a belépéskor <b>újra megjelenik az elfogadó ablak</b>, és a szolgáltatás további használata a módosított feltételek elfogadásához kötött. Ha nem fogadod el, a fiókodat kérésedre töröljük.</p>

<h3>13. Panaszkezelés, jogviták</h3>
<p>Panaszodat, észrevételedet ${KAPCSOLAT} jelezheted; igyekszünk legkésőbb 30 napon belül válaszolni. Fogyasztói jogvita esetén fordulhatsz a lakóhelyed szerint illetékes békéltető testülethez, illetve bírósághoz.</p>

<h3>14. Irányadó jog</h3>
<p>Az ÁSZF-re és a szolgáltatás használatára a magyar jog irányadó.</p>
`;

export const PRIVACY_HTML = `
<h2 id="adatkezeles">Adatkezelési tájékoztató</h2>
<p class="lg-meta">Hatályos: ${LEGAL_UPDATED}</p>

<h3>1. Az adatkezelő</h3>
<p>Az adatkezelő: ${UZEMELTETO}. Kapcsolat adatvédelmi kérdésekben: ${KAPCSOLAT}. Ez a tájékoztató az Európai Unió általános adatvédelmi rendelete (GDPR) és a magyar jogszabályok alapján készült, és azt mutatja be, milyen személyes adatot kezelünk rólad, miért, meddig, és milyen jogaid vannak.</p>

<h3>2. Milyen adatokat kezelünk?</h3>
<ul>
<li><b>Fiókadatok:</b> felhasználónév, e-mail cím, jelszó (a jelszót mi nem látjuk: a Firebase Authentication titkosítva, hash-elve tárolja), profilkép (ha beállítod), a fiók létrehozásának ideje, a fiók státusza (pl. VIP, felfüggesztett).</li>
<li><b>Hozzájárulások és elfogadás:</b> az ÁSZF és az adatkezelési tájékoztató elfogadásának ténye, időpontja és a dokumentum verziója, valamint a 18 éves korra vonatkozó nyilatkozatod.</li>
<li><b>Használati adatok:</b> az általad adott értékelések (dátum, sportág, csillagok, a neved), annak jelzése, hogy megnéztél-e egy napi tippet (dátum, sportág, a neved, időpont), valamint az online jelenléted (a neved és az utolsó aktivitás ideje).</li>
<li><b>Kommunikáció:</b> a chatben írt üzeneteid, a tippadónak küldött privát üzenetek, a jelzések és panaszok, a moderációs intézkedések (pl. némítás, tiltás).</li>
<li><b>Discord-kapcsolat (opcionális):</b> ha összekapcsolod a Discord-fiókodat: a Discord azonosítód, felhasználóneved és profilképed.</li>
<li><b>Push értesítés (opcionális):</b> az eszközöd értesítési azonosítója (token), ha engedélyezed az értesítéseket.</li>
<li><b>Technikai adatok:</b> IP-cím és böngészőinformáció, amelyet a tárhely és a szolgáltatók a működéshez naplóznak.</li>
</ul>

<h3>3. Miért kezeljük, és mi a jogalap?</h3>
<ul>
<li><b>Fiók működtetése, tippek és VIP hozzáférés biztosítása, chat, üzenetek</b> – a szerződés teljesítése (GDPR 6. cikk (1) b).</li>
<li><b>Visszaélések megelőzése, biztonság, moderáció, jogi igények</b> – jogos érdek (6. cikk (1) f).</li>
<li><b>Az elfogadás és a korhatár-nyilatkozat igazolása</b> – jogos érdek és jogi igények érvényesítése.</li>
<li><b>Push értesítés, Discord-kapcsolat</b> – a te hozzájárulásod (6. cikk (1) a), amelyet bármikor visszavonhatsz a Beállításokban vagy a böngészőben.</li>
<li><b>Megtekintési és értékelési adatok</b> – a szolgáltatás működése és a közösségi funkció (ki látta a tippet, az értékelések összesítése): szerződés teljesítése és jogos érdek. <b>A megtekintők neve a többi belépett tag számára is látható.</b></li>
</ul>

<h3>4. Meddig őrizzük?</h3>
<ul>
<li>A fiókadatokat és a hozzád kötődő tartalmakat a fiók fennállásáig; a törlési kérés után ésszerű időn, legfeljebb 30 napon belül töröljük őket.</li>
<li>Az elfogadási nyilatkozatot a jogi igények igazolása érdekében a fiók törlése után legfeljebb 5 évig megőrizhetjük.</li>
<li>A push értesítési azonosítót a hozzájárulásod visszavonásáig, illetve az eszköz lejárásáig.</li>
<li>A technikai naplókat a szolgáltatók saját szabályai szerint, rövid ideig.</li>
</ul>

<h3>5. Kinek adjuk át az adataidat? (adatfeldolgozók)</h3>
<p>Az adatokat nem adjuk el és nem használjuk hirdetési célra. A működéshez az alábbi szolgáltatókat vesszük igénybe, akik a nevünkben, megbízásból kezelnek adatot:</p>
<ul>
<li><b>Google (Firebase: Authentication, Firestore, Cloud Messaging)</b> – bejelentkezés, adatbázis, értesítések. Az adatok az EU-n kívülre (pl. USA) is kerülhetnek; ezt a Google a szokásos szerződéses záradékokkal és az EU–USA adatvédelmi keretrendszerrel biztosítja.</li>
<li><b>GitHub, Inc. (GitHub Pages)</b> – az oldal tárhelye; a látogatás technikai adatait (IP-cím) naplózhatja.</li>
<li><b>Google Fonts</b> – az oldal betűtípusainak betöltésekor a böngésződ IP-címe a Google szervereihez jut.</li>
<li><b>Discord Inc.</b> – ha összekapcsolod a fiókodat, a Discord azonosítási szolgáltatásán keresztül kapjuk az adataidat; az Oldal értesítései (pl. új update) a Discord szerverére is eljutnak, de ezek nem tartalmaznak személyes adatot rólad.</li>
</ul>
<p>Hatóság kérésére a jogszabály által előírt esetekben adatot szolgáltathatunk ki.</p>

<h3>6. Sütik és helyi tárolás</h3>
<p>Marketing vagy nyomkövető sütiket nem használunk. A működéshez a böngésződ munkamenet- és helyi tárolóját használjuk (pl. bejelentkezés, kiválasztott téma, sportág, az értesítések állapota). Ezek az Oldal működéséhez szükségesek, és a böngésződben bármikor törölheted őket.</p>

<h3>7. Az adataid védelme</h3>
<p>Az adatokat jelszóval és hozzáférési szabályokkal védett rendszerekben tároljuk; az adatbázishoz csak a jogosultság szerint férnek hozzá az arra jogosultak. Ettől függetlenül az internetes adatátvitel nem lehet teljesen kockázatmentes: használj erős, egyedi jelszót, és ne oszd meg senkivel.</p>

<h3>8. A jogaid</h3>
<p>Kérhetsz tájékoztatást a kezelt adataidról, kérheted azok helyesbítését vagy törlését, az adatkezelés korlátozását, tiltakozhatsz a jogos érdeken alapuló kezelés ellen, kérheted az adataid hordozhatóságát, és a hozzájárulásodat bármikor visszavonhatod (ez nem érinti a korábbi kezelés jogszerűségét). A kéréseidet ${KAPCSOLAT} jelezheted; legkésőbb 30 napon belül válaszolunk.</p>
<p>Ha úgy érzed, hogy sérültek a jogaid, panaszt tehetsz a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH, 1055 Budapest, Falk Miksa utca 9-11., <a href="https://naih.hu" rel="noopener" target="_blank">naih.hu</a>), vagy bírósághoz fordulhatsz.</p>

<h3>9. Korhatár</h3>
<p>Az Oldal csak 18 éves vagy idősebb személyek számára használható. Ha megtudjuk, hogy a fiókot kiskorú hozta létre, azt töröljük.</p>

<h3>10. A tájékoztató módosítása</h3>
<p>Ha az adatkezelés módja megváltozik, frissítjük ezt a tájékoztatót, és a belépéskor <b>újra megjelenik az elfogadó ablak</b>. A mindenkori hatályos szöveg a Jogi dokumentumok oldalon érhető el.</p>
`;

/* A szövegekből számolt ujjlenyomat: ha bármi változik, más lesz az értéke → mindenki újra elfogadja. */
export function legalVersion() {
  const s = TERMS_HTML + '\u0001' + PRIVACY_HTML + '\u0001' + LEGAL_UPDATED;
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return LEGAL_UPDATED + '#' + h.toString(36);
}
