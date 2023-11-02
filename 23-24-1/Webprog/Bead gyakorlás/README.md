# Gerrymandering játék
A "játék" (nincs győzelem ellenőrzés, csak kiírja, hány kerületben nyert az egyik párt, hányban a másik) amit kitaláltam hirtelen az egy ilyen gerrymandering játék, ahol választókerületeket kell készítenünk, és úgy kell próbálkozni, hogy a zöldek nyerjenek, annak ellenére, hogy a lilák többen vannak.
- A játék rögtön indul, ha megnyitod az oldalt.
- Kattintással alul lehet mezőt választani, és a hoverelsz a tábla felett, kijelöli, hova tenné.
- R betűvel lehet forgatni az elemet.
- Kattintással leteheted az elemet, ha
    - nem lóg ki a pályán kívülre,
    - nem lóg bele már létező foglalt mezőbe,
    - szomszédos a jelenleg készülő kerülettel (tehát egy kerület nem állhat több részből, összefüggőnek kell lennie).
- A confirm district gomb véglegesíti az aktuálisan készülő kerületet, és újat kezd.
- 5x lehet új mezőket generálni.
- A vote gomb elindítja a választást. Ez csak akkor lehetséges, ha minden cella  része egy választókerületnek.