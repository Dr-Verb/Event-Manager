# Event-Manager
_Site / App to management warranty events._

---

[PL]


#### _Strona / Aplikacja służąca do zarządzania zgłoszeniamia gwarancyjnymi._
`Jest to wersja wstępnie przygotowanej strony, na potrzeby zaliczenia kursu JavaScript Developer, którą chciałbym rozwinąć później o pełną funkcjonalność również backendową. Wykorzystywać będzie jezyk JavaScript, skłądninę JSX, oraz REACT, jako zewnętrzne żródło danych będzie wykorzystywany JSON-SERVER.`

_Aplikacja ma na celu umożliwienie wprowadzanania nowych zgłoszeń gwarancyjnych, ich opisywania przez zalogowanych użytkowników. W zależności od poziomu użytkownika będzie dochodziła nowa funkcjonalność:_

  - `Poziom 1 (zgłaszający) - stworzenie zgłoszenia (w trakcie) i zamkniecie go. (zamknięte)`
  - `Poziom 2 (odpowiedzialny) + zmiana statusu na niezasadne (niezasadne) / zakończone do odbioru (zakończono) (bez zamknięcia bo trzeba zweryfikować)`
  - `Poziom 3 (operator) + przypisanie zgłoszenia do odpowiedzialnego + wszystkie zmiany statusów`
  - `Poziom 4 (administrator) + przypisanie operatorów do zgłąszających + tworzenie użytkowników niższych poziomów`
  
_Aplikacja miała by za zadanie wspierać pracę i organizację pracy w dziale gwarancji firm budowlanych w których zgłoszenia gwarancyjne przychodzą od różnych inwestorów z różnych obiektów i w zależności od obiektu są obrabiane przez odpowiednich operatorów i przekazywane do odpowiedzialnych przedstawicieli podwykonawcy, po czym zamykane gdy usterki zostaną usunięte._ 



### _Założenia Podstawowe:_
- [ ] Aplikacja się uruchamia.
- [X] Projekt zgodny z ustalonym tematem między kursantem a mentorem.
- [ ] Aplikacja musi wykorzystywać bibliotekę React.
- [ ] Aplikacja musi wykorzystywać stan lokalny.
- [ ] Poprawne zarządzanie stanem aplikacji (Redux, Context API, itp.).
- [ ] Aplikacja wykorzystuje odpowiednie lifecycle methods lub hooki (np. useEffect) do zarządzania cyklem życia komponentów.
- [ ] Poprawna obsługa formularzy - zarówno kontrolowanych jak i niekontrolowanych, w zależności od potrzeb projektu.
- [ ] Wykorzystanie routingu - aplikacja ma odpowiednio skonfigurowane routy przy użyciu React Router lub innej biblioteki do routingu.
- [ ] Aplikacja jest responsywna - poprawne dostosowanie wyglądu do różnych rozmiarów ekranu za pomocą CSS media queries lub bibliotek do responsywnego designu.
- [ ] Brak występowania błędów krytycznych na poziomie konceptualnym - aplikacja działa zgodnie z oczekiwaniami i nie zawiera fundamentalnych błędów logicznych

___

_**Dalsze możliwości rozwoju aplikacji:**_
> - dołożenie przesyłania załączników zdjęcia / filmy. 
> - wprowadzania obiektu/inwestycji tak aby można było kontrolować kontrolować umowne terminy usunięcia usterki oraz termin zakońćzenia gwarancji na danej realizacji,
> - obiekty przypisywane do użytkowników tak aby zgłoszenia automatycznie tylko zgłąszać usterkę z danej inwestycji, gdy kilka inwestycji a 1 użytkownik dojdzie możliwość wyboru inwestycji,
> - rozszerzenie inwestycji o listę podwykonawców tak aby egzekwować terminy u podwykonawców (w zależności od inwestycji mogą być rózne terminy więc koniecznie uzależnieneie od inwestycji),
> - wprowadzenie kalendarza z oznaczeniem maksymalnych terminów usunięica usterki,
> - generowanie i wysyłanie maili z ponagleniem / statusem do podwykonawców, (+ ustawienia czy każda zmiana w zgłoszeniu czy tylko wybrane zmiany),
> - generowanie oficjalnych pism w sprawie zgłoszeń: szablony DOC lub PDF do druku (wezwanie , ponownego wezwanie, informacja o wprowadzeniu wykonawstwa zastępczego, informacja o kosztach wykoanwstwa zastępczego i wystawionej nocie obciązeniowej),
> - rozszerzenie aplikacji o kwestie finansowe związane z pozostającą kaucją gwarancyjną, (wielkość kaucji u inwestora i u podwykonawców) + możliwość wprowadzenia obciążęń dla podwykonawców (pomniejszenie kaucji),
> - wprowadzenie statystyki usuniętych usterek, oraz statystyki finansowej (odzyskana kaucja / poniesione dodatkowe koszty),
> - rozszerzenie użytkowników np o operatoranadzoru który będzie odpowiedzialny za edycję spraw finansowychi kontrolowanie operatorów itp,
> - wprowadzenie kalendarza z zadaniami do usunięcia przez siły własne / wykonawcę zastępczego,
> - i na pewno w miarę używania jeszcze na pewno dojdzie parę pomysłów 😊

_**Instalacja aplikacji:**_

```install
git clone https://github.com/Dr-Verb/Event-Manager.git
cd Event-Manager
npm install
```

_**Uruchomienie aplikacji:**_

```run
npm run dev
```

aplikacja dostępna pod adresem [localhost:3000](http://localhost:3000/)


___
+ _30.07.2025r. - Założenie Projektu_
+ _03.08.2025r. - Struktura folderów, konfiguracja JSON SERWER i VITE, sprawdzenie działania serwerów oraz konfiguracji_
+ _04.08.2025r. - Wstępna budowa strony_
