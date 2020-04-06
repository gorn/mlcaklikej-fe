# README

Frontend pro aplikaci Mlč a Klikuj, podle zadání fy Digitoo. 

Prvního Apríla 2020 naprogramoval gorn :)

Vzhledem k tomu, že šlo o rychlý quest, zvolil jsem maximálně jednoduchá řešení při zachování požadavků a to tak jak bych začal psát kód pro reálnou aplikaci. Některé oblasti, které by pro produkční verzi bylo nutné zpracovat podrobněji či přepsat  komentuji dále aby bylo jasné že jsem si jich vědom. Taky mám párvýhrad k samotné specifikaci, ale opět - v reálu by následovalo nějaké kolečko s klientem a nejasnosti by se dotáhly. 

## TODO a komentáře
  
  * Pokud jde o design frontendu, použil jsem o standardní CSS, pokud by šlo o dlouhodobější projekt, určitě by bylo dobré nasadit nějaký preprocessor jako SASS (či alternativy) a bottstrap, a příslušné react komponenty jako  BootstrapTable a spol. Designově jsem zachoval vše podle zadání, i když třeba "sign in" k teamu pomocí vyplňování textového pole mi přijde dost špatný UX - daleko lepší by byl inkrementální seach, nebo alespoň výběr teamu přímo z Leaderonrdu, ale nechtěl jsem měnit specifikaci. Tak  jsem aspoň s dovolením udělal trochu jinak barvy a fonty, doufám, že to neurazí.
  * Aplikace používá redux tak jak bylo v zadání. U Leaderboardu jsem ale nechal state přímo v komponentě, protože se to u takhle malé aplikace přímo nabízí. V reálné aplikaci by to tak s přibývajícími požadavky být nejspíš dlouhodobě nemohlo, řešení navíc používá velmi základní pattern (Fetch on Render), které  je minimálně od React Conf 2019 trochu oldschool, v produkční aplikaci bych použil Suspense nebo něco podobného. Pro fetching jsem použil ".then.catch" styl, ale dovedu si představit, že někdo preferuje  "await styl"  mě to takhle přijde ok. Fetching hláška v iniciálních datech je možná trochu prasárna, normálně bych tam dal nějaký isFetching state a dělal to přes něj.
  * Cross-Origin security jsem na backendu vypnul z důvodů flexibility vývoje, v reálu by se to samozřejmě naopak vyladilo s frontendem.
  * URL jsou sice v samostatném souboru konstant, ale pořád v kódu, fuj.
  * Pokud by sajta byla vemi vytížená stálo by za to jinak řešit realtime update leaderboardu, zatím jsem tam dal jednoduchý refresh timer.
  * Specifikace navrhuje URL teamu odvodit od názvu teamu. Naimplementoval jsem to tak, ale nesouhlasím s tím, může to vést k nepředvídatelným sideefektům pokud uživatel zadá divoká jména (diakritika, znaky). Normalizace (napři usekání diakritiky) pomůže jen do jisté míry, protože pak mohou být nejednoznačná url. V produkční verzi bych chtěl mát unikátní ID teamu jako součást URL teamu.Backend je na to připraven, specifikace by se ale musela změnit. Kontaktoval jsem autora zadání přes github a požádal ho o náhled a s názorem souhlasí (https://github.com/gorn/mlcaklikej-be/issues/1#issuecomment-607723744), dokonce byl poněkud překvapen ;)
  * V rámci zjednodušení jede appka přes HTTP, v production by to chtělo HTTPS, s certifikátem přes LetsEncrypt
