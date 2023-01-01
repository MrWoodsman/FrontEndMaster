var html_lessons = 
{
    "description":"HTML (HyperText Markup Language) to język służący do tworzenia stron internetowych. Zawiera znaczniki, które określają różne elementy na stronie, takie jak nagłówki, akapity, listy, tabele itp. Znaczniki są umieszczane w nawiasach klamrowych i składają się z nazwy oraz atrybutów. HTML jest podstawą do tworzenia stron internetowych i może być używany z innymi technologiami, takimi jak CSS i JavaScript, aby dostosować wygląd i działanie strony.",
    "color":"#FF9060",
    "type":"html_lessons",
    "title":"html",
    "list": [
        {
            "id":"1",
            "title":"Wprowadzenie do HTML",
            "description":"Ta lekcja zapoznaje początkujących z podstawami HTML, takimi jak co to jest język HTML, do czego służy i jak go używać.",
            "lesson":{
                "content":`<p>HTML, czyli HyperText Markup Language, to język znaczników, który służy do tworzenia i strukturyzacji zawartości stron internetowych. Znaczniki HTML są używane do oznaczania różnych elementów na stronie, takich jak nagłówki, akapity, listy, tabele, formularze itp. Każdy znacznik HTML jest zawarty w nawiasach klamrowych i składa się z dwóch części: nazwy znacznika i atrybutów, które mogą być używane do określenia dodatkowych szczegółów dotyczących elementu.</p>
                <p>HTML jest podstawowym językiem tworzenia stron internetowych i jest używany w połączeniu z innymi technologiami, takimi jak CSS (Cascading Style Sheets) i JavaScript, w celu dostosowania wyglądu i funkcjonalności strony internetowej.</p>
                <p>Aby zacząć korzystać z HTML, potrzebujesz edytora kodu, takiego jak Notatnik lub Sublime Text, oraz przeglądarki internetowej do wyświetlania stron. Pliki HTML są zapisywane z rozszerzeniem .html lub .htm i mogą być otwierane przez dowolną przeglądarkę internetową.</p>
                <p>Podstawowe znaczniki HTML to:</p>
                <ul>
                    <li><span class="bold st">html</span> - służy do oznaczenia początku i końca dokumentu HTML</li>
                    <li><span class="bold st">head</span> - służy do przechowywania informacji o dokumencie, takich jak tytuł i metadane</li>
                    <li><span class="bold st">body</span> - służy do oznaczenia treści, która będzie widoczna na stronie</li>
                    <li><span class="bold st">p</span> - służy do oznaczenia akapitu tekstu</li>
                    <li><span class="bold st">h1</span> do <span class="bold st">h6</span> - służą do oznaczenia nagłówków różnego poziomu</li>
                    <li><span class="bold st">div</span> - służy do grupowania elementów w bloki o określonym celu</li>
                </ul>
<pre class="code_box"><code class="language-html">&lthtml>
    &lthead>
        &ltmeta charset="UTF-8">
        &lttitle>Moja strona&lt/title>
    &lt/head>
    &ltbody>
        &lth1>Moja strona&lt/h1>
        &ltp>Witaj na mojej stronie!&lt/p>
        &ltdiv>
        &ltp>To jest mój pierwszy dokument HTML.&lt/p>
        &ltp>Mam nadzieję, że się spodoba.&lt/p>
        &lt/div>
    &lt/body>
&lt/html></code></pre>
                <p>Ten dokument zawiera nagłówek h1 z tekstem "Moja strona", akapit z tekstem "Witaj na mojej stronie!" oraz dwa akapity zawarte w elemencie div z tekstami "To jest mój pierwszy dokument HTML." i "Mam nadzieję, że się spodoba."</p>
                <p>To tylko kilka podstawowych znaczników HTML, ale istnieje wiele innych, które można użyć do tworzenia bardziej złożonych i atrakcyjnych stron internetowych. W kolejnych lekcjach będziemy uczyć się korzystać z różnych znaczników HTML, aby tworzyć bogate i funkcjonalne strony internetowe</p>`
            }
        },
        {
            "id":"2",
            "title":"Tworzenie struktury strony za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia struktury strony, takiej jak nagłówki, akapity, listy itp.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"3",
            "title":"Formatowanie tekstu i obrazów za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do formatowania tekstu i obrazów na stronie, takich jak zmiana czcionki, koloru, wielkości itp.",
            "lesson":{
                "content":`<p>Formatowanie tekstu i obrazów za pomocą znaczników HTML polega na zastosowaniu odpowiednich znaczników, aby zmienić wygląd elementów na stronie, takich jak czcionka, kolor, rozmiar itp. HTML oferuje szeroki wybór znaczników, które można użyć do formatowania tekstu i obrazów na stronie.</p>
                <p>Podstawowe znaczniki HTML, które mogą być używane do formatowania tekstu, to:</p>
                <ul>
                    <li><span class="bold st">b</span> - służy do pogrubienia tekstu.</li>
                    <li><span class="bold st">i</span> - służy do pochylenia tekstu.</li>
                    <li><span class="bold st">u</span> - służy do podkreślenia tekstu.</li>
                    <li><span class="bold st">sub</span> - służy do umieszczenia tekstu w formie indeksu dolnego.</li>
                    <li><span class="bold st">sup</span> - służy do umieszczenia tekstu w formie indeksu górnego.</li>
                    <li><span class="bold st">font</span> - służy do zmiany właściwości czcionki, takich jak kolor, rodzaj, rozmiar itp.</li>
                </ul>
                <p>Podstawowe znaczniki HTML, które mogą być używane do formatowania obrazów, to:</p>
                <ul>
                    <li><span class="bold st">img</span> - służy do wstawienia obrazu do dokumentu HTML.</li>
                    <li><span class="bold st">alt</span> - służy do określenia alternatywnego tekstu dla obrazu, który jest wyświetlany, gdy obraz nie może być wyświetlony.</li>
                    <li><span class="bold st">width</span> i <span class="bold st">height</span> - służą do określenia szerokości i wysokości obrazu.
                </ul>
                <p>Przykładowy dokument HTML zawierający formatowanie tekstu i obrazów może wyglądać tak:</p>
                <pre class="code_box"><code class="language-html">&lthtml>
    &lthead>
        &lttitle>Moja strona&lt/title>
    &lt/head>
    &ltbody>
        &lth1>Moja strona&lt/h1>
        &ltp>Witaj na &ltb>mojej&lt/b> stronie!&lt/p>
        &ltp>Jestem &lti>programistą&lt/i> i lubię &ltu>tworzyć&lt/u> strony internetowe.&lt/p>
        &ltp>Moje ulubione języki programowania to:&lt/p>
        &ltul>
            &ltli>JavaScript&lt/li>
            &ltli>Python&lt/li>
            &ltli>HTML&lt/li>
        &lt/ul>
        &ltp>A to jest moje zdjęcie:&lt/p>
        &ltimg src="moje_zdjecie.jpg" alt="To jestem ja" width="200" height="300">&lt/img>
    &lt/body>
&lt/html></code></pre>
                <p>Ten dokument zawiera nagłówek h1 z tekstem "Moja strona", trzy akapity z tekstem pogrubionym, pochylonym i podkreślonym oraz nieuporządkowaną listę z trzema elementami zawierającymi teksty "JavaScript", "Python" i "HTML", a także obraz o szerokości 200 i wysokości 300 z alternatywnym tekstem "To jestem ja".</p>`
            }
        },
        {
            "id":"4",
            "title":"Tworzenie tabel za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia tabel z danymi na stronie.",
            "lesson":{
                "content":`
                <p>Tworzenie tabel za pomocą znaczników HTML polega na użyciu odpowiednich znaczników, aby utworzyć tabelę z danymi na stronie internetowej. HTML oferuje szeroki wybór znaczników, które mogą być używane do tworzenia tabel.</p>
                <p>Podstawowe znaczniki HTML, które mogą być używane do tworzenia tabel, to:</p>
                <ul>
                    <li><span class="bold st">table></span> - służy do oznaczenia tabeli.</li>
                    <li><span class="bold st">tr></span> - służy do oznaczenia wiersza tabeli.</li>
                    <li><span class="bold st">td></span> - służy do oznaczenia komórki tabeli.</li>
                    <li><span class="bold st">th></span> - służy do oznaczenia komórki nagłówka tabeli.</li>
                </ul>
                <p>Przykładowy dokument HTML zawierający tabelę może wyglądać tak:</p>
                <pre class="code_box"><code class="language-html">&lthtml>
    &lthead>
        &lttitle>Moja strona&lt/title>
    &lt/head>
    &ltbody>
        &lth1>Moja strona&lt/h1>
        &lttable>
        &lttr>
            &ltth>Imię&lt/th>
            &ltth>Nazwisko&lt/th>
            &ltth> Wiek&lt/th>
        &lt/tr>
        &lttr>
            &lttd>Jan&lt/td>
            &lttd>Kowalski&lt/td>
            &lttd>35&lt/td>
        &lt/tr>
        &lttr>
            &lttd>Anna&lt/td>
            &lttd>Nowak&lt/td>
            &lttd>28&lt/td>
        &lt/tr>
        &lttr>
            &lttd>Piotr&lt/td>
            &lttd>Wiśniewski&lt/td>
            &lttd>43&lt/td>
        &lt/tr>
        &lt/table>
    &lt/body>
&lt/html></code></pre>
                <p>Ten dokument zawiera nagłówek h1 z tekstem "Moja strona" oraz tabelę z trzema wierszami i trzema kolumnami, z których pierwszy wiersz zawiera komórki nagłówka z tekstami "Imię", "Nazwisko" i "Wiek", a pozostałe wiersze zawierają komórki z danymi o imieniu, nazwisku i wieku poszczególnych osób.</p>
                <p>Użycie odpowiednich znaczników HTML do tworzenia tabel z danymi na stronie umożliwia ich uporządkowanie i ułatwia odczytanie i zrozumienie zawartości strony. Tabela może być używana do wyświetlenia różnego rodzaju danych, takich jak dane osobowe, dane finansowe, statystyki itp.</p>
                `
            }
        },
        {
            "id":"5",
            "title":"Tworzenie formularzy za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia formularzy do wypełniania przez użytkowników strony.",
            "lesson":{
                "content":`
                <p>Tworzenie formularzy za pomocą znaczników HTML polega na użyciu odpowiednich znaczników, aby utworzyć formularz do wypełniania przez użytkowników strony internetowej. HTML oferuje szeroki wybór znaczników, które mogą być używane do tworzenia formularzy.</p>
                <p>Podstawowe znaczniki HTML, które mogą być używane do tworzenia formularzy, to:</p>
                <ul>
                    <li><span class="bold st">form></span> - służy do oznaczenia formularza.</li>
                    <li><span class="bold st">input></span> - służy do utworzenia pola formularza, takiego jak pole tekstowe, przycisk radio, przycisk checkbox itp.</li>
                    <li><span class="bold st">label></span> - służy do oznaczenia etykiety pola formularza.</li>
                    <li><span class="bold st">select></span> - służy do utworzenia listy rozwijanej w formularzu.</li>
                    <li><span class="bold st">option></span> - służy do oznaczenia opcji listy rozwijanej.</li>
                </ul>
                <p></p>
                <pre class="code_box"><code class="language-html">&lthtml>
    &lthead>
        &lttitle>Moja strona&lt/title>
    &lt/head>
    &ltbody>
        &lth1>Moja strona&lt/h1>
        &ltform>
        &ltlabel for="imie">Imię:&lt/label>&ltbr/>
        &ltinput type="text" id="imie" name="imie"/>&ltbr/>
        &ltlabel for="nazwisko">Nazwisko:&lt/label>&ltbr/>
        &ltinput type="text" id="nazwisko" name="nazwisko"/>&ltbr/>
        &ltlabel for="plec">Płeć:&lt/label>&ltbr/>
        &ltinput type="radio" id="plec" name="plec" value="kobieta"/>Kobieta
        &ltinput type="radio" id="plec" name="plec" value="mężczyzna"/>Mężczyzna&ltbr/>
        &ltlabel for="ulubiony_kolor">Ulubiony kolor:&lt/label>&ltbr/>
        &ltselect id="ulubiony_kolor" name="ulubiony_kolor">
            &ltoption value="czerwony">Czerwony&lt/option>
            &ltoption value="zielony">Zielony&lt/option>
            &ltoption value="niebieski">Niebieski&lt/option>
        &lt/select>
        &ltbr/>&ltbr/>
        &ltinput type="submit" value="Wyślij"/>
        &lt/form>
    &lt/body>
&lt/html></code></pre>
                <p>Ten dokument zawiera nagłówek h1 z tekstem "Moja strona" oraz formularz składający się z trzech pól tekstowych, przycisków radio do wyboru płci, listy rozwijanej z trzema opcjami kolorów i przycisku submit do wysłania formularza. Każde pole formularza jest opatrzone etykietą z tekstem opisującym jego zawartość, co umożliwia użytkownikom wygodne wypełnienie formularza.</p>
                <p>Użycie odpowiednich znaczników HTML do tworzenia formularzy na stronie internetowej umożliwia zbieranie danych od użytkowników oraz ułatwia komunikację z nimi. Formularze mogą być używane do różnych celów, takich jak zamawianie produktów, rejestracja na stronie, kontakt z obsługą klienta itp.</p>
                `
            }
        },
        {
            "id":"6",
            "title":"Dodawanie linków i odnośników za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia linków i odnośników do innych stron lub plików.",
            "lesson":{
                "content":`
                <p>Dodawanie linków i odnośników za pomocą znaczników HTML polega na użyciu odpowiednich znaczników, aby utworzyć odnośnik do innych stron lub plików na stronie internetowej. HTML oferuje szeroki wybór znaczników, które mogą być używane do tworzenia odnośników.</p>
                <p>Podstawowy znacznik HTML, który może być używany do tworzenia odnośników, to:</p>
                <ul>
                <li><span class="bold st">a></span> - służy do oznaczenia odnośnika.</li>
                </ul>
                <p>Przykładowy dokument HTML zawierający odnośnik do innej strony może wyglądać tak:</p>
                <pre class="code_box"><code class="language-html">&lthtml>
    &lthead>
        &lttitle>Moja strona&lt/title>
    &lt/head>
    &ltbody>
        &lth1>Moja strona&lt/h1>
        &ltp>Zapraszam na moją &lta href="http://www.mojastrona.pl">stronę&lt/a>.&lt/p>
    &lt/body>
&lt/html></code></pre>
                <p>Ten dokument zawiera nagłówek h1 z tekstem "Moja strona" oraz akapit z tekstem "Zapraszam na moją stronę." Słowo "stronę" jest oznaczone znacznikiem &lta> z atrybutem href określającym adres URL docelowej strony, na którą odnośnik prowadzi. Po kliknięciu na słowo "stronę" przez użytkownika, przeglądarka otworzy stronę o podanym adresie URL.</p>
                <p class="curiosity">Ciekawostką jest fakt, że pierwszy odnośnik w historii sieci WWW został utworzony w 1990 roku przez Tima Berners-Lee, twórcę sieci WWW, w dokumencie zatytułowanym "Information Management: A Proposal". Odnośnik ten prowadził do innego dokumentu zawierającego opis projektu sieci WWW. W kolejnych lekcjach będziemy uczyć się używać różnych znaczników HTML do tworzenia bogatych i funkcjonalnych stron internetowych.</p>
                <p>Odnośniki mogą być używane do różnych celów, takich jak nawigacja po stronie, udostępnianie plików do pobrania, otwieranie stron w nowych oknach itp.</p>
                `
            }
        },
        {
            "id":"7",
            "title":"Tworzenie map obrazów za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia map obrazów, które pozwalają na tworzenie obszarów na obrazie, które mogą być klikalne jako linki.",
            "lesson":{
                "content":`
                <p>Tworzenie map obrazów za pomocą znaczników HTML polega na użyciu odpowiednich znaczników, aby utworzyć obszary na obrazie, które mogą być klikalne jako linki. HTML oferuje szeroki wybór znaczników, które mogą być używane do tworzenia map obrazów.</p>
                <p>Podstawowe znaczniki HTML, które mogą być używane do tworzenia map obrazów, to:</p>
                <ul>
                    <li><span class="bold st">img</span></li>
                    <li><span class="bold st">map</span></li>
                    <li><span class="bold st">area</span></li>
                </ul>
                <p>Przykładowy dokument HTML zawierający mapę obrazu może wyglądać tak:</p>
                <pre class="code_box"><code class="language-html">&lthtml>
    &lthead>
        &lttitle>Moja strona&lt/title>
    &lt/head>
    &ltbody>
        &lth1>Moja strona&lt/h1>
        &ltimg src="moj_obraz.jpg" usemap="#moja_mapa">
        &ltmap name="moja_mapa">
            &ltarea shape="rect" coords="0,0,100,100" href="strona1.html" alt="Strona 1">
            &ltarea shape="circle" coords="150,150,50" href="strona2.html" alt="Strona 2">
            &ltarea shape="poly" coords="200,0,250,50,300,0,350,50,300,100" href="strona3.html" alt="Strona 3">
        &lt/map>
    &lt/body>
&lt/html></code></pre>
                <p>Ten dokument zawiera nagłówek h1 z tekstem "Moja strona" oraz obraz osadzony w dokumencie za pomocą znacznika <span class="tag_stmp">img</span> z atrybutem <span class="att_stmp">usemap</span> określającym nazwę mapy obrazu. Mapa obrazu składa się z trzech obszarów oznaczonych znacznikami <span class="tag_stmp">area</span> z atrybutami <span class="att_stmp">shape</span>, <span class="att_stmp">cords</span> i <span class="att_stmp">href</span> określającymi kształt obszaru, współrzędne go określające oraz adres URL docelowej strony, na którą odnośnik prowadzi. Po kliknięciu na jeden z tych obszarów przez użytkownika, przeglądarka otworzy stronę o podanym adresie URL.</p>
                <p>Mapy obrazów są szczególnie przydatne, gdy na stronie internetowej znajduje się duży obraz, na którym chcemy umieścić wiele odnośników. Dzięki mapom obrazów możemy osadzić obraz na stronie, a następnie oznaczyć różne obszary na nim jako linki, bez konieczności dodawania dodatkowych elementów interfejsu użytkownika, takich jak przyciski czy menu.</p>
                `
            }
        },
        {
            "id":"8",
            "title":"Dodawanie plików multimedialnych za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do dodawania plików audio, wideo i innych plików multimedialnych do strony.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"9",
            "title":"Tworzenie menu nawigacyjnego za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia menu nawigacyjnego, które pozwala użytkownikom łatwo przemieszczać się po różnych sekcjach strony.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"10",
            "title":"Tworzenie meta tagów za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia meta tagów, które służą do opisywania zawartości strony dla wyszukiwarek i innych narzędzi.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"11",
            "title":"Tworzenie ram za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia ram, które pozwalają na wyświetlanie kilku stron w jednym oknie przeglądarki.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"12",
            "title":"Tworzenie dokumentów HTML5 za pomocą nowych znaczników",
            "description":"Ta lekcja pokaże, jak używać nowych znaczników HTML5, takich jak <header>, <footer>, <article> itp., w celu tworzenia bardziej semantycznych i przyjaznych dla użytkownika dokumentów.",
            "lesson":{
                "content":""
            }
        },
    ]
}
var css_lessons = 
{
    "description":"CSS",
    "color":"#5258E6",
    "type":"css_lessons",
    "title":"css",
    "list": [
        {
            "id":"1",
            "title":"Wprowadzenie do CSS",
            "description":"Ta lekcja zapoznaje początkujących z podstawami HTML, takimi jak co to jest język HTML, do czego służy i jak go używać.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"2",
            "title":"Tworzenie struktury strony za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia struktury strony, takiej jak nagłówki, akapity, listy itp.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"3",
            "title":"Formatowanie tekstu i obrazów za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do formatowania tekstu i obrazów na stronie, takich jak zmiana czcionki, koloru, wielkości itp.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"4",
            "title":"Tworzenie tabel za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia tabel z danymi na stronie.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"5",
            "title":"Tworzenie formularzy za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia formularzy do wypełniania przez użytkowników strony.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"6",
            "title":"Dodawanie linków i odnośników za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia linków i odnośników do innych stron lub plików.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"7",
            "title":"Tworzenie map obrazów za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia map obrazów, które pozwalają na tworzenie obszarów na obrazie, które mogą być klikalne jako linki.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"8",
            "title":"Dodawanie plików multimedialnych za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do dodawania plików audio, wideo i innych plików multimedialnych do strony.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"9",
            "title":"Tworzenie menu nawigacyjnego za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia menu nawigacyjnego, które pozwala użytkownikom łatwo przemieszczać się po różnych sekcjach strony.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"10",
            "title":"Tworzenie meta tagów za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia meta tagów, które służą do opisywania zawartości strony dla wyszukiwarek i innych narzędzi.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"11",
            "title":"Tworzenie ram za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia ram, które pozwalają na wyświetlanie kilku stron w jednym oknie przeglądarki.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"12",
            "title":"Tworzenie dokumentów HTML5 za pomocą nowych znaczników",
            "description":"Ta lekcja pokaże, jak używać nowych znaczników HTML5, takich jak <header>, <footer>, <article> itp., w celu tworzenia bardziej semantycznych i przyjaznych dla użytkownika dokumentów.",
            "lesson":{
                "content":""
            }
        },
    ]
}

var js_lessons = 
{
    "description":"JS",
    "color":"#f7d516",
    "title":"javascript",
    "type":"js_lessons",
    "list": [
        {
            "id":"1",
            "title":"Wprowadzenie do JavaScript",
            "description":"Ta lekcja zapoznaje początkujących z podstawami HTML, takimi jak co to jest język HTML, do czego służy i jak go używać.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"2",
            "title":"Tworzenie struktury strony za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia struktury strony, takiej jak nagłówki, akapity, listy itp.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"3",
            "title":"Formatowanie tekstu i obrazów za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do formatowania tekstu i obrazów na stronie, takich jak zmiana czcionki, koloru, wielkości itp.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"4",
            "title":"Tworzenie tabel za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia tabel z danymi na stronie.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"5",
            "title":"Tworzenie formularzy za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia formularzy do wypełniania przez użytkowników strony.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"6",
            "title":"Dodawanie linków i odnośników za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia linków i odnośników do innych stron lub plików.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"7",
            "title":"Tworzenie map obrazów za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia map obrazów, które pozwalają na tworzenie obszarów na obrazie, które mogą być klikalne jako linki.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"8",
            "title":"Dodawanie plików multimedialnych za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do dodawania plików audio, wideo i innych plików multimedialnych do strony.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"9",
            "title":"Tworzenie menu nawigacyjnego za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia menu nawigacyjnego, które pozwala użytkownikom łatwo przemieszczać się po różnych sekcjach strony.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"10",
            "title":"Tworzenie meta tagów za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia meta tagów, które służą do opisywania zawartości strony dla wyszukiwarek i innych narzędzi.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"11",
            "title":"Tworzenie ram za pomocą znaczników HTML",
            "description":"Ta lekcja pokaże, jak używać znaczników HTML do tworzenia ram, które pozwalają na wyświetlanie kilku stron w jednym oknie przeglądarki.",
            "lesson":{
                "content":""
            }
        },
        {
            "id":"12",
            "title":"Tworzenie dokumentów HTML5 za pomocą nowych znaczników",
            "description":"Ta lekcja pokaże, jak używać nowych znaczników HTML5, takich jak <header>, <footer>, <article> itp., w celu tworzenia bardziej semantycznych i przyjaznych dla użytkownika dokumentów.",
            "lesson":{
                "content":""
            }
        },
    ]
}