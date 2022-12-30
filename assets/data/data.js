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
                    <li><span class="bold">&lthtml&gt</span> - służy do oznaczenia początku i końca dokumentu HTML</li>
                    <li><span class="bold">&lthead&gt</span> - służy do przechowywania informacji o dokumencie, takich jak tytuł i metadane</li>
                    <li><span class="bold">&ltbody&gt</span> - służy do oznaczenia treści, która będzie widoczna na stronie</li>
                    <li><span class="bold">&ltp&gt</span> - służy do oznaczenia akapitu tekstu</li>
                    <li><span class="bold">&lth1&gt</span> do <span class="bold">&lth6&gt</span> - służą do oznaczenia nagłówków różnego poziomu</li>
                    <li><span class="bold">&ltdiv&gt</span> - służy do grupowania elementów w bloki o określonym celu</li>
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
                    <li><span class="bold">&ltb&gt</span> - służy do pogrubienia tekstu.</li>
                    <li><span class="bold">&lti&gt</span> - służy do pochylenia tekstu.</li>
                    <li><span class="bold">&ltu&gt</span> - służy do podkreślenia tekstu.</li>
                    <li><span class="bold">&ltsub&gt</span> - służy do umieszczenia tekstu w formie indeksu dolnego.</li>
                    <li><span class="bold">&ltsup&gt</span> - służy do umieszczenia tekstu w formie indeksu górnego.</li>
                    <li><span class="bold">&ltfont&gt</span> - służy do zmiany właściwości czcionki, takich jak kolor, rodzaj, rozmiar itp.</li>
                </ul>
                <p>Podstawowe znaczniki HTML, które mogą być używane do formatowania obrazów, to:</p>
                <ul>
                    <li><span class="bold">&ltimg&gt</span> - służy do wstawienia obrazu do dokumentu HTML.</li>
                    <li><span class="bold">&ltalt&gt</span> - służy do określenia alternatywnego tekstu dla obrazu, który jest wyświetlany, gdy obraz nie może być wyświetlony.</li>
                    <li><span class="bold">&ltwidth&gt</span> i <span class="bold">&ltheight&gt</span> - służą do określenia szerokości i wysokości obrazu.
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