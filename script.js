let pointsUsed = 0;

// Legal Modal
const legalModal = document.getElementById('legal-modal');
const closeLegalModal = document.getElementById('close-legal-modal');
const legalTitle = document.getElementById('legal-title');
const legalContent = document.getElementById('legal-content');

const legalTexts = {
    terms: {
        cs: {
            title: "ObchodnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ podmĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­nky",
            content: "<h4>1. Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚â€ąĂ˘â‚¬Ë‡vodnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ ustanovenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­</h4><p>Tyto obchodnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ podmĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­nky upravujĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ vzĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇjemnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ prĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇva a povinnosti mezi poskytovatelem (Venvio) a klientem pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âi vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žvoji webovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žch strĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnek, SaaS aplikacĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­, AI chatbotĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» a poskytovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ souvisejĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­cĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch sluĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľeb.</p><h4>2. ObjednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvka a uzavĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ smlouvy</h4><p>Smlouva o dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­lo je uzavĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âena potvrzenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvky klientem (elektronicky pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âes formulĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Â Ä‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤i e-mail). Po uzavĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ smlouvy mĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľe poskytovatel poĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľadovat Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşhradu zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇlohy ve vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇi aĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľ 50 % z celkovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© ceny dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­la.</p><h4>3. Realizace dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­la a pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂedĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­</h4><p>Poskytovatel se zavazuje dodat dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­lo v dohodnutĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©m termĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­nu. Klient je povinen poskytnout potĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âebnou souÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤innost (dodĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ textĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â», pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­stupĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» apod.). PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âi prodlenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ klienta s dodĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m podkladĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» se termĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­n dokonÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤enĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ adekvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇtnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹź prodluĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľuje.</p><h4>4. PlatebnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ podmĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­nky</h4><p>Doplatek celkovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© ceny je splatnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž po pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂedĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ a schvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇlenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ hotovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©ho dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­la klientem. Splatnost faktur je standardnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹź 14 dnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­, nenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­-li dohodnuto jinak.</p><h4>5. AutorskĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ prĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇva a licence</h4><p>AĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľ do Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşplnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©ho zaplacenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ ceny dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­la zĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»stĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­lo i veĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇkerĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ majetkovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ prĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇva k nÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźmu majetkem poskytovatele. Po Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşplnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©m zaplacenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂechĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇzĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ na klienta vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žhradnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ a neomezenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ licence k uĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­la pro jeho Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ely.</p><h4>6. OdpovÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźdnost za vady a zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇruka</h4><p>Poskytovatel poskytuje na svĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­lo zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇruku 6 mÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźsĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­cĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» na skrytĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© softwarovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© chyby. ZĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇruka se nevztahuje na chyby zpĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»sobenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© pozdÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźjĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇsahem klienta nebo tĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂetĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ strany do zdrojovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©ho kĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚ËĂ˘â€šÂ¬ÄąË‡du Ä‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤i administrace.</p>"
        },
        en: {
            title: "Terms of Service",
            content: "<h4>1. Introductory Provisions</h4><p>These terms govern the mutual rights and obligations between the provider (Venvio) and the client in the development of websites, SaaS applications, AI chatbots, and the provision of related services.</p><h4>2. Order and Contract Conclusion</h4><p>The contract for work is concluded upon the client\'s confirmation of the order (electronically via form or email). Upon conclusion of the contract, the provider may request an advance payment of up to 50% of the total price.</p><h4>3. Project Execution and Delivery</h4><p>The provider commits to delivering the work within the agreed timeframe. The client is obliged to provide necessary cooperation (supplying texts, access, etc.). If the client delays providing materials, the completion deadline is proportionally extended.</p><h4>4. Payment Terms</h4><p>The remaining balance is due upon delivery and approval of the completed work by the client. The standard invoice maturity is 14 days unless agreed otherwise.</p><h4>5. Copyright and Licensing</h4><p>Until full payment of the project price, the work and all property rights remain the property of the provider. Upon full payment, the client receives an exclusive and unlimited license to use the work.</p><h4>6. Warranty and Liability</h4><p>The provider offers a 6-month warranty on hidden software defects. The warranty does not cover defects caused by subsequent interference by the client or third parties with the source code or administration.</p>"
        }
    },
    privacy: {
        cs: {
            title: "Ochrana osobnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdajĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» (GDPR)",
            content: "<h4>1. SprĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvce osobnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdajĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»</h4><p>SprĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvcem vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇich osobnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdajĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» je agentura Venvio. VaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇe soukromĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ bereme vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹź a s daty naklĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇdĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇme v souladu s naĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­zenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m GDPR a platnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žmi zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇkony Ä‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ă„Ä…Ă‹â€ˇR.</p><h4>2. JakĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdaje zpracovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇme</h4><p>ZpracovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇme pouze Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdaje, kterĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© nĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇm sami poskytnete pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âi odeslĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ poptĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvky, registraci nebo uzavĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ smlouvy. JednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ se zejmĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©na o: JmĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©no a pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­jmenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ (nebo nĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇzev firmy), e-mailovou adresu, telefonnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ Ä‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­slo, IÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ă„Ä…Ă‹â€ˇO/DIÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ă„Ä…Ă‹â€ˇ a fakturaÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤nĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ adresu.</p><h4>3. Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚â€ąĂ˘â‚¬Ë‡Ä‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤el zpracovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdajĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»</h4><p>VaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇe Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdaje pouĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇme vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žhradnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹź za Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤elem: <br>- ZpracovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ poptĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvky a nacenÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ projektu<br>- PlnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ smlouvy a realizace vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žvoje softwaru<br>- VystavenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ faktur a plnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇkonnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žch Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤etnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch povinnostĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­<br>- Komunikace tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žkajĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­cĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ se podpory a servisu vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇich aplikacĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­</p><h4>4. ZabezpeÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤enĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ a sdĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­lenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ dat</h4><p>OsobnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdaje neprodĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇme ani nesdĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­lĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­me s Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇdnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žmi tĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂetĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­mi stranami pro marketingovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ely. K Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdajĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»m majĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­stup pouze provÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ Ä‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤lenovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žmu Venvio a pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­padnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹź externĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ poskytovatelĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© nezbytnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žch sluĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľeb (napĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Â. Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤etnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ software).</p><h4>5. VaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇe prĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇva</h4><p>Podle naĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­zenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ GDPR mĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇte prĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvo poĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľadovat informaci o tom, jakĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇe Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdaje zpracovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇme, vyĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇdat si jejich aktualizaci, opravu nebo Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşplnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žmaz z naĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ databĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇze. Pro uplatnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ tÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźchto prĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇv nĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇs prosĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m kontaktujte na naĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇem e-mailu.</p>"
        },
        en: {
            title: "Privacy Policy (GDPR)",
            content: "<h4>1. Data Controller</h4><p>The data controller of your personal data is the Venvio agency. We take your privacy seriously and handle data in accordance with GDPR regulations.</p><h4>2. What Data We Process</h4><p>We only process data you provide to us when submitting an inquiry, registering, or concluding a contract. This primarily includes: Name and surname (or company name), email address, phone number, VAT ID, and billing address.</p><h4>3. Purpose of Processing</h4><p>We use your data exclusively for: <br>- Processing your inquiry and project pricing<br>- Contract fulfillment and software development execution<br>- Issuing invoices and fulfilling legal accounting obligations<br>- Communication regarding support and service of your applications</p><h4>4. Data Security and Sharing</h4><p>We do not sell or share personal data with any third parties for marketing purposes. Only verified Venvio team members and, if necessary, external service providers (e.g., accounting software) have access to the data.</p><h4>5. Your Rights</h4><p>Under GDPR, you have the right to request information about what data we process, request its update, correction, or complete deletion from our database. To exercise these rights, please contact us via email.</p>"
        }
    }
};

let currentModalType = null;

if (legalModal) {
    document.querySelector('a[data-i18n="footer.terms"]').addEventListener('click', (e) => {
        e.preventDefault();
        currentModalType = 'terms';
        legalTitle.innerText = legalTexts.terms[currentLang].title;
        legalContent.innerHTML = legalTexts.terms[currentLang].content;
        legalModal.classList.add('active');
    });

    document.querySelector('a[data-i18n="footer.privacy"]').addEventListener('click', (e) => {
        e.preventDefault();
        currentModalType = 'privacy';
        legalTitle.innerText = legalTexts.privacy[currentLang].title;
        legalContent.innerHTML = legalTexts.privacy[currentLang].content;
        legalModal.classList.add('active');
    });

    if(closeLegalModal) closeLegalModal.addEventListener('click', () => {
        legalModal.classList.remove('active');
        currentModalType = null;
    });
    
    // Close on click outside
    legalModal.addEventListener('click', (e) => {
        if (e.target === legalModal) {
            legalModal.classList.remove('active');
            currentModalType = null;
        }
    });
}

// Ensure open modal translates when language changes
const updateLegalModalLang = () => {
    if (legalModal && legalModal.classList.contains('active') && currentModalType) {
        legalTitle.innerText = legalTexts[currentModalType][currentLang].title;
        legalContent.innerHTML = legalTexts[currentModalType][currentLang].content;
    }
};

// Translations Dictionary
const safeJsonParse = (str, fallback) => {
    try { return JSON.parse(str) || fallback; }
    catch (e) { return fallback; }
};
const translations = {
    cs: {
        "nav.why_us": "Proč my",
        "nav.portfolio": "Reference",
        "nav.pricing": "Ceník",
        "nav.addons": "Doplňky",
        "nav.cart": "Košík",
        "hero.title": "Tvoříme weby rychlostí<br><span class=\"text-gradient\">vašeho podnikání.</span>",
        "hero.desc": "Expressní webová prezentace & marketing. Plně funkční, moderní a responzivní řešení do jednoho dne od dodání podkladů.",
        "hero.btn_pkg": "Vybrat balíček",
        "hero.btn_portfolio": "Ukázky práce",
        "hero.badge": "⚡ Express webové řešení",
        "hero.trust1": "SSL Zabezpečení",
        "hero.trust2": "100% Responzivní",
        "hero.trust3": "Rychlé načítání",
        "feature.title": "Naše hlavní výhoda: Web už do 24 hodin",
        "feature.desc": "Víme, že v podnikání rozhoduje rychlost. Zatímco běžné agentury tvoří weby týdny, my díky optimalizovanému vývoji a agilnímu nasazení dodáváme plně funkční, moderní a responzivní řešení do jednoho dne od dodání podkladů.",
        "portfolio.title": "Naše Ukázky",
        "portfolio.desc": "Podívejte se na ukázkové projekty, které jsme připravili pro naše klienty.",
        "portfolio.btn": "Zobrazit web",
        "portfolio.p1_desc": "Moderní vícestránkový web pro bistro",
        "portfolio.p2_desc": "Elegantní prezentace kavárny",
        "portfolio.p3_desc": "Luxusní one-page web",
        "pricing.title": "Hlavní balíčky služeb",
        "pricing.desc": "Vyberte si řešení, které odpovídá vašim potřebám.",
        "pricing.badge_24": "DO 24 HODIN",
        "pricing.badge_48": "DO 48 HODIN",
        "pricing.badge_ind": "INDIVIDUÁLNÍ",
        "pricing.popular": "Nejprodávanější",
        "pkg.start.ideal": "Ideální pro: Restaurace, kavárny, řemeslníky a lokální služby, které potřebují okamžitou vizitku na internetu.",
        "pkg.start.f1": "Moderní jednostránkový web (One-page) pro mobilní telefony",
        "pkg.start.f2": "Důležité sekce: O nás, Nabídka, Ceník, Kontakt",
        "pkg.start.f3": "Propojení na Google Mapy a sociální sítě",
        "pkg.start.f4": "Základní technické SEO",
        "pkg.start.f5": "Spuštění projektu do 24 hodin od podkladů",
        "pkg.std.ideal": "Ideální pro: Rostoucí firmy a živnostníky, kteří chtějí detailně prezentovat více služeb nebo své reference.",
        "pkg.std.f1": "Vícestránkový web (rozsah až 5 samostatných podstránek)",
        "pkg.std.f2": "Pokročilý poptávkový či rezervační formulář",
        "pkg.std.f3": "Přehledná a logická navigace",
        "pkg.std.f4": "Nasazení analytických nástrojů (Google Analytics)",
        "pkg.std.f5": "Kompletní realizace a spuštění do 48 hodin",
        "pkg.prem.price": "od 49 900 Kč",
        "pkg.prem.ideal": "Ideální pro: Náročnější klienty, kteří vyžadují neomezený rozsah obsahu a nadstandardní interaktivní funkce.",
        "pkg.prem.f1": "Neomezené množství podstránek s architekturou na míru",
        "pkg.prem.f2": "Pokročilé dynamické prvky a animace pomocí JavaScriptu",
        "pkg.prem.f3": "Vícejazyčné mutace webu (přepínání jazyků)",
        "pkg.prem.f4": "Plné využití moderních technologií pro rychlost",
        "pkg.prem.f5": "Rozšířená technická podpora a prioritní úpravy",
        "pkg.btn_add": "Přidat do košíku",
        "addons.title": "Doplňkové služby a správa",
        "addons.desc": "Přizpůsobte si projekt svým potřebám.",
        "addon1.title": "Vlastní doména (.cz, .com)",
        "addon1.desc": "Zajištění prémiové domény pro vaši značku na 1 rok včetně SSL certifikátu.",
        "addon2.title": "Měsíční správa a podpora",
        "addon2.desc": "Pravidelné zálohování webu, aktualizace systému, zabezpečení a drobné úpravy obsahu na přání.",
        "addon3.title": "Tvorba vizuální identity",
        "addon3.desc": "Návrh minimalistického loga a definice firemních barev.",
        "addon4.title": "Hodinová sazba (Vícepráce)",
        "addon4.desc": "Práce nad rámec balíčků (rozšiřování webu, specifické animace a kódování). Uveďte počet hodin v košíku.",
        "addon.per_year": "/ rok",
        "addon.per_month": "/ měsíc",
        "addon.per_hour": "/ hod",
        "addon.btn_add": "Přidat",
        "test.title": "Testovací platba pro ověření karty",
        "test.desc": "Stojí pouze malou částku, abyste si mohli vyzkoušet reálný nákup na našem webu.",
        "footer.desc": "Expressní webová prezentace & marketing.",
        "footer.tax": "Ceny jsou konečné. Nejsme plátci DPH.",
        "footer.rights": "Všechna práva vyhrazena.",
        "cart.title": "Váš Košík",
        "cart.empty": "Váš košík je zatím prázdný.",
        "cart.total": "Celkem:",
        "cart.tax_info": "Nejsme plátci DPH. Ceny jsou konečné.",
        "cart.checkout": "Přejít k objednávce",
        "cart.remove": "Odstranit",
        "modal.title": "Dokončení objednávky",
        "modal.name": "Jméno a Příjmení / Firma",
        "modal.name_ph": "Např. Jan Novák",
        "modal.msg": "Zpráva / Vaše představa o webu",
        "modal.msg_ph": "Zde nám můžete popsat, co od webu očekáváte...",
        "modal.submit": "Zaplatit kartou",
        "modal.redirect": "Přesměrovávání na platbu...",
        "modal.empty_cart": "Váš košík je prázdný.",
        "modal.error": "Omlouváme se, došlo k chybě při inicializaci platby: ",
        "success.title": "Objednávka byla úspěšně přijata!",
        "success.desc": "Děkujeme za vaši důvěru. Vaši objednávku jsme v pořádku přijali a brzy se vám ozveme na zadaný e-mail s dalšími kroky k vytvoření vašeho nového webu.",
        "success.btn": "Zpět na hlavní stránku",
        "cancel.desc": "Objednávka nebyla odeslána. Váš košík zůstal uložen a můžete se k objednávce kdykoliv vrátit.",
        "cancel.btn": "Zpět k objednávce",
        "stats.projects": "Dokončených projektů",
        "stats.delivery": "Průměrná doba dodání",
        "stats.satisfaction": "Spokojenost klientů",
        "stats.years": "Roky zkušeností",
        "feature.badge": "⚡ Naše výhoda",
        "feature.speed_title": "Bleskové dodání",
        "feature.speed_desc": "Váš web bude online už do 24 hodin od dodání podkladů.",
        "feature.responsive_title": "Plně responzivní",
        "feature.responsive_desc": "Perfektní zobrazení na všech zařízeních – mobil, tablet, desktop.",
        "feature.seo_title": "SEO optimalizace",
        "feature.seo_desc": "Váš web bude viditelný v Google díky moderním SEO technikám.",
        "feature.support_title": "Podpora",
        "feature.support_desc": "Profesionální zákaznická podpora a pravidelné aktualizace.",
        "process.badge": "🛠️ Postup",
        "process.title": "Jak to funguje?",
        "process.desc": "Jednoduché 4 kroky k vašemu novému webu.",
        "process.s1_title": "Výběr balíčku",
        "process.s1_desc": "Vyberte si z našich balíčků ten, který nejlépe odpovídá vašim potřebám a rozpočtu.",
        "process.s2_title": "Zaslání podkladů",
        "process.s2_desc": "Pošlete nám texty, obrázky a představu o vašem budoucím webu.",
        "process.s3_title": "Tvorba webu",
        "process.s3_desc": "Náš tým okamžitě začne pracovat na vašem profesionálním webu.",
        "process.s4_title": "Spuštění",
        "process.s4_desc": "Váš web nasadíme online a předáme vám přístupy. Vše do 24 hodin!",
        "portfolio.badge": "🖼️ Portfolio",
        "portfolio.multi": "Vícestránkový",
        "portfolio.onepage": "One-page",
        "pricing.badge": "💎 Ceník",
        "addons.badge": "🔧 Doplňky",
        "testimonials.badge": "⭐ Recenze",
        "testimonials.title": "Co říkají naši klienti",
        "testimonial.t1_text": "\"Web byl hotový za pouhý jeden den, přesně jak slíbili. Profesionální přístup a moderní design. Jedině doporučit!\"",
        "testimonial.t1_name": "Martin K.",
        "testimonial.t1_role": "Majitel restaurace",
        "testimonial.t2_text": "\"Nejrychlejší a nejprofesionálnější webovka, kterou jsem kdy objednal. Zákazníci nás díky ní konečně najdou online.\"",
        "testimonial.t2_name": "Jana P.",
        "testimonial.t2_role": "Kavárnice",
        "testimonial.t3_text": "\"Skvělá komunikace, přesně pochopili, co jsme potřebovali. Web vypadá luxusně a funguje bezchybně i na mobilu.\"",
        "testimonial.t3_name": "Petr V.",
        "testimonial.t3_role": "Živnostník",
        "faq.title": "Často kladené otázky",
        "faq.q1": "Opravdu dostanu web do 24 hodin?",
        "faq.a1": "Ano! Jakmile obdržíme všechny potřebné podklady (texty, obrázky, logo), začneme okamžitě pracovat. V naprosté většině případů je web hotový a nasazený online do 24 hodin.",
        "faq.q2": "Co když s webem nebudu spokojen?",
        "faq.a2": "Vaše spokojenost je pro nás prioritou. Provádíme bezplatné revize a úpravy, dokud nebudete s výsledkem naprosto spokojeni.",
        "faq.q3": "Jaké podklady od mě budete potřebovat?",
        "faq.a3": "Stačí nám texty, které chcete na webu zobrazit, fotky (produkty, interiér, tým), logo (pokud máte) a vaše barevné preference. S čímkoli dalším vám rádi pomůžeme.",
        "faq.q4": "Budu moct web sám upravovat?",
        "faq.a4": "Ano, předáme vám kompletní přístupy. Pro rozsáhlejší úpravy doporučujeme naši měsíční správu nebo hodinovou sazbu.",
        "cta.title": "Připraveni na nový web?",
        "cta.desc": "Neváhejte a objednejte si svůj profesionální web ještě dnes. Výsledky uvidíte už zítra!",
        "cta.btn": "Začít hned",
        "footer.nav_title": "Navigace",
        "footer.contact_title": "Kontakt"
    },
    en: {
        "nav.why_us": "Why Us",
        "nav.portfolio": "Portfolio",
        "nav.pricing": "Pricing",
        "nav.addons": "Add-ons",
        "nav.cart": "Cart",
        "hero.title": "Building websites at the speed of<br><span class=\"text-gradient\">your business.</span>",
        "hero.desc": "Express web presentation & marketing. Fully functional, modern, and responsive solutions within one day of receiving materials.",
        "hero.btn_pkg": "Choose a Package",
        "hero.btn_portfolio": "Our Work",
        "hero.badge": "⚡ Express web solution",
        "hero.trust1": "SSL Security",
        "hero.trust2": "100% Responsive",
        "hero.trust3": "Fast Loading",
        "feature.title": "Our Main Advantage: Website within 24 Hours",
        "feature.desc": "We know that speed is crucial in business. While regular agencies take weeks to build websites, thanks to optimized development and agile deployment, we deliver fully functional, modern, and responsive solutions within one day.",
        "portfolio.title": "Our Work (Concepts)",
        "portfolio.desc": "Take a look at the showcase projects we have prepared for our clients.",
        "portfolio.btn": "View Website",
        "portfolio.p1_desc": "Modern multi-page website for a bistro",
        "portfolio.p2_desc": "Elegant cafe presentation",
        "portfolio.p3_desc": "Luxury one-page website",
        "pricing.title": "Main Service Packages",
        "pricing.desc": "Choose the solution that fits your needs.",
        "pricing.badge_24": "WITHIN 24 HOURS",
        "pricing.badge_48": "WITHIN 48 HOURS",
        "pricing.badge_ind": "CUSTOM",
        "pricing.popular": "Best Seller",
        "pkg.start.ideal": "Ideal for: Restaurants, cafes, craftsmen, and local services needing an instant online presence.",
        "pkg.start.f1": "Modern one-page website for mobile phones",
        "pkg.start.f2": "Important sections: About Us, Menu, Pricing, Contact",
        "pkg.start.f3": "Integration with Google Maps and social networks",
        "pkg.start.f4": "Basic technical SEO",
        "pkg.start.f5": "Project launch within 24 hours of receiving materials",
        "pkg.std.ideal": "Ideal for: Growing companies and freelancers who want to present multiple services or references in detail.",
        "pkg.std.f1": "Multi-page website (up to 5 separate subpages)",
        "pkg.std.f2": "Advanced inquiry or booking form",
        "pkg.std.f3": "Clear and logical navigation",
        "pkg.std.f4": "Deployment of analytical tools (Google Analytics)",
        "pkg.std.f5": "Complete realization and launch within 48 hours",
        "pkg.prem.price": "from 18 900 CZK",
        "pkg.prem.ideal": "Ideal for: Demanding clients who require unlimited content scope and premium interactive features.",
        "pkg.prem.f1": "Unlimited subpages with custom architecture",
        "pkg.prem.f2": "Advanced dynamic elements and JavaScript animations",
        "pkg.prem.f3": "Multilingual website versions (language switching)",
        "pkg.prem.f4": "Full use of modern technologies for speed",
        "pkg.prem.f5": "Extended technical support and priority adjustments",
        "pkg.btn_add": "Add to Cart",
        "addons.title": "Additional Services & Support",
        "addons.desc": "Customize the project to your needs.",
        "addon1.title": "Custom Domain (.cz, .com)",
        "addon1.desc": "Securing a premium domain for your brand for 1 year, including SSL certificate.",
        "addon2.title": "Monthly Management & Support",
        "addon2.desc": "Regular website backups, system updates, security, and minor content adjustments on request.",
        "addon3.title": "Visual Identity Creation",
        "addon3.desc": "Design of a minimalist logo and definition of corporate colors.",
        "addon4.title": "Hourly Rate (Extra Work)",
        "addon4.desc": "Work beyond the packages (website expansion, specific animations, and coding). Specify hours in the cart.",
        "addon.per_year": "/ year",
        "addon.per_month": "/ month",
        "addon.per_hour": "/ hr",
        "addon.btn_add": "Add",
        "test.title": "Test Payment to verify cards",
        "test.desc": "Costs only a small amount so you can try a real purchase on our website.",
        "footer.desc": "Express web presentation & marketing.",
        "footer.tax": "Prices are final. We are not VAT payers.",
        "footer.rights": "All rights reserved.",
        "cart.title": "Your Cart",
        "cart.empty": "Your cart is currently empty.",
        "cart.total": "Total:",
        "cart.tax_info": "We are not VAT payers. Prices are final.",
        "cart.checkout": "Proceed to Checkout",
        "cart.remove": "Remove",
        "modal.title": "Complete Your Order",
        "modal.name": "Full Name / Company",
        "modal.name_ph": "e.g., John Doe",
        "modal.msg": "Message / Your vision for the website",
        "modal.msg_ph": "You can describe what you expect from the website here...",
        "modal.submit": "Pay by Card",
        "modal.redirect": "Redirecting to payment...",
        "modal.empty_cart": "Your cart is empty.",
        "modal.error": "Sorry, an error occurred while initializing the payment: ",
        "success.title": "Order successfully received!",
        "success.desc": "Thank you for your trust. We have received your order and will contact you shortly at the provided e-mail with the next steps to create your new website.",
        "success.btn": "Back to Homepage",
        "cancel.title": "Order cancelled",
        "cancel.desc": "The payment was not completed. Your cart remains saved and you can return to your order at any time.",
        "cancel.btn": "Back to Order",
        "stats.projects": "Completed Projects",
        "stats.delivery": "Average Delivery Time",
        "stats.satisfaction": "Client Satisfaction",
        "stats.years": "Years of Experience",
        "feature.badge": "⚡ Our Advantage",
        "feature.speed_title": "Lightning Delivery",
        "feature.speed_desc": "Your website will be online within 24 hours of providing materials.",
        "feature.responsive_title": "Fully Responsive",
        "feature.responsive_desc": "Perfect display on all devices – mobile, tablet, desktop.",
        "feature.seo_title": "SEO Optimization",
        "feature.seo_desc": "Your website will be visible on Google thanks to modern SEO techniques.",
        "feature.support_title": "Support",
        "feature.support_desc": "Professional customer support and regular updates.",
        "process.badge": "🛠️ Process",
        "process.title": "How does it work?",
        "process.desc": "Simple 4 steps to your new website.",
        "process.s1_title": "Package Selection",
        "process.s1_desc": "Choose the package from our offer that best suits your needs and budget.",
        "process.s2_title": "Sending Materials",
        "process.s2_desc": "Send us texts, images, and your vision for your future website.",
        "process.s3_title": "Website Creation",
        "process.s3_desc": "Our team will immediately start working on your professional website.",
        "process.s4_title": "Launch",
        "process.s4_desc": "We will deploy your website online and hand over access. All within 24 hours!",
        "portfolio.badge": "🖼️ Portfolio",
        "portfolio.multi": "Multi-page",
        "portfolio.onepage": "One-page",
        "pricing.badge": "💎 Pricing",
        "addons.badge": "🔧 Addons",
        "testimonials.badge": "⭐ Reviews",
        "testimonials.title": "What our clients say",
        "testimonial.t1_text": "\"The website was finished in just one day, exactly as promised. Professional approach and modern design. Highly recommended!\"",
        "testimonial.t1_name": "Martin K.",
        "testimonial.t1_role": "Restaurant Owner",
        "testimonial.t2_text": "\"The fastest and most professional website I have ever ordered. Customers can finally find us online.\"",
        "testimonial.t2_name": "Jana P.",
        "testimonial.t2_role": "Cafe Owner",
        "testimonial.t3_text": "\"Great communication, they understood exactly what we needed. The website looks luxurious and works flawlessly even on mobile.\"",
        "testimonial.t3_name": "Petr V.",
        "testimonial.t3_role": "Freelancer",
        "faq.title": "Frequently Asked Questions",
        "faq.q1": "Will I really get the website within 24 hours?",
        "faq.a1": "Yes! Once we receive all necessary materials (texts, images, logo), we start working immediately. In the vast majority of cases, the website is finished and deployed online within 24 hours.",
        "faq.q2": "What if I am not satisfied with the website?",
        "faq.a2": "Your satisfaction is our priority. We perform free revisions and adjustments until you are completely satisfied with the result.",
        "faq.q3": "What materials will you need from me?",
        "faq.a3": "We just need the texts you want to display on the website, photos (products, interior, team), logo (if you have one), and your color preferences. We will gladly help with anything else.",
        "faq.q4": "Will I be able to edit the website myself?",
        "faq.a4": "Yes, we will give you full access. For more extensive edits, we recommend our monthly support or hourly rate.",
        "cta.title": "Ready for a new website?",
        "cta.desc": "Do not hesitate and order your professional website today. You will see results tomorrow!",
        "cta.btn": "Start Now",
        "footer.nav_title": "Navigation",
        "footer.contact_title": "Contact"
    }
};


// Products & Pricing Dictionary

const RATE_EUR = 25;
const RATE_USD = 23;

const productPrices = {
    'pkg-start': { czk: { val: 14900, str: '14 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 590, str: '590 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 650, str: '$650' } },
    'pkg-standard': { czk: { val: 29900, str: '29 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 1190, str: '1190 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 1290, str: '$1290' } },
    'pkg-premium': { czk: { val: 49900, str: 'od 49 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 1990, str: 'from 1990 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 2190, str: 'from $2190' } },
    'add-domain': { czk: { val: 490, str: '490 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 20, str: '20 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 22, str: '$22' } },
    'add-support': { czk: { val: 1500, str: '1 500 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 60, str: '60 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 65, str: '$65' } },
    'add-identity': { czk: { val: 8900, str: '8 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 350, str: '350 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 390, str: '$390' } },
    'add-hourly': { czk: { val: 1200, str: '1 200 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 50, str: '50 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 55, str: '$55' } },
    'svc-webapp': { czk: { val: 99000, str: 'od 99 000 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 3990, str: 'from 3990 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 4290, str: 'from $4290' } },
    'svc-ai': { czk: { val: 24900, str: 'od 24 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 990, str: 'from 990 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 1090, str: 'from $1090' } },
    'svc-automation': { czk: { val: 9900, str: 'od 9 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 390, str: 'from 390 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 440, str: 'from $440' } },
    'svc-chrome': { czk: { val: 14900, str: 'od 14 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤' }, eur: { val: 590, str: 'from 590 Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬' }, usd: { val: 650, str: 'from $650' } }
};

// Current State
let currentLang = localStorage.getItem('venvioLang');
if (currentLang !== 'cs' && currentLang !== 'en') currentLang = 'cs';
let currentCurrency = localStorage.getItem('venvioCurr');
if (currentCurrency !== 'czk' && currentCurrency !== 'eur' && currentCurrency !== 'usd') currentCurrency = 'czk';
let discountMultiplier = 1;

// DOM Elements for Translation

// Duplicate chat translations removed


translations.cs['cart.guest_info'] = 'ObjednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇte jako host. PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âihlaste se a zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­skejte okamĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľitou slevu 500 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤!';
translations.en['cart.guest_info'] = 'Ordering as a guest. Log in to get an instant 500 CZK discount!';

translations.cs['checkout.gdpr'] = 'SouhlasĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m se zpracovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m osobnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdajĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» pro Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ely vyĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­zenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvky.';
translations.en['checkout.gdpr'] = 'I agree to the processing of personal data for the purpose of order fulfillment.';
translations.cs['footer.legal'] = 'PrĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ informace';
translations.en['footer.legal'] = 'Legal Information';
translations.cs['footer.terms'] = 'ObchodnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ podmĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­nky';
translations.en['footer.terms'] = 'Terms & Conditions';
translations.cs['footer.privacy'] = 'Ochrana osobnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşdajĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»';
translations.en['footer.privacy'] = 'Privacy Policy';

const applyTranslations = () => {
    document.documentElement.lang = currentLang;
    // Translate text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });

    // Update WhatsApp link text
    const waLink = document.getElementById('fab-whatsapp');
    if (waLink) {
        waLink.href = currentLang === 'en' 
            ? "https://wa.me/420775104206?text=Hello,%20I%20am%20interested%20in%20a%20new%20website."
            : "https://wa.me/420775104206?text=DobrĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž%20den,%20mĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇm%20zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇjem%20o%20novĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž%20web.";
    }

    // Update auth modal dynamically based on active tab
    const authDesc = document.getElementById('auth-desc');
    const authSubmit = document.getElementById('auth-submit-btn');
    const isLogin = document.getElementById('tab-login') && document.getElementById('tab-login').style.borderBottomColor !== 'transparent';
    if (authDesc && authSubmit) {
        if (isLogin) {
            authDesc.innerHTML = currentLang === 'en' ? 'Log in to your account to use loyalty discounts.' : 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âihlaste se ke svĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©mu Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤tu pro vyuĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľitĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ vÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźrnostnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch slev.';
            authSubmit.innerHTML = currentLang === 'en' ? 'Log In' : 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂihlĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇsit se';
        } else {
            authDesc.innerHTML = currentLang === 'en' ? 'Create an account and earn Venvio Coins for discounts on your next order.' : 'VytvoĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âte si Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤et a sbĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­rejte Venvio Coins pro slevy na pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇtĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvky.';
            authSubmit.innerHTML = currentLang === 'en' ? 'Create Account' : 'VytvoĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âit Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤et';
        }
    }

    // Update toast if it's currently showing
    const toastMsg = document.getElementById('toast-message');
    if (toastMsg) {
        if (toastMsg.innerHTML.includes('Secret') || toastMsg.innerHTML.includes('TajnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ sleva') || toastMsg.innerHTML.includes('Tajn')) {
            toastMsg.innerHTML = currentLang === 'en' ? 'Secret found! Promo code: VENVIO10' : 'TajnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ sleva 10%! KĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚ËĂ˘â€šÂ¬ÄąË‡d: VENVIO10';
        } else if (toastMsg.innerHTML.includes('PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂidĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇno') || toastMsg.innerHTML.includes('Ptidno') || toastMsg.innerHTML.includes('Added')) {
            toastMsg.innerHTML = translations[currentLang]['toast.added'] || 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂidĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇno do koĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ku!';
        }
    }


    // Translate placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });

    // Update prices in HTML based on currency
    document.querySelectorAll('[data-price-target]').forEach(el => {
        const key = el.getAttribute('data-price-target');
        if (productPrices[key] && productPrices[key][currentCurrency]) {
            let priceStr = productPrices[key][currentCurrency].str;
            if (currentLang === 'en' && currentCurrency === 'czk') {
                priceStr = priceStr.replace('KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤', 'CZK').replace('od ', 'from ');
            } else if (currentLang === 'cs' && currentCurrency !== 'czk') {
                priceStr = priceStr.replace('from ', 'od ');
            }
            el.innerText = priceStr;
        }
    });

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update active curr button
    document.querySelectorAll('.curr-btn').forEach(btn => {
        if (btn.getAttribute('data-curr') === currentCurrency) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    updateCartUI();
    if(typeof gtag === 'function') gtag('event', 'add_to_cart'); // Re-render cart with new language & currency
};

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentLang = e.currentTarget.getAttribute('data-lang');
        localStorage.setItem('venvioLang', currentLang);
        applyTranslations();
    });
});

document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentCurrency = e.currentTarget.getAttribute('data-curr');
        localStorage.setItem('venvioCurr', currentCurrency);
        applyTranslations();
    });
});

let cart = [];
cart = safeJsonParse(localStorage.getItem('venvioCart'), []);

// DOM Elements
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartCount = document.getElementById('cart-count');
const cartContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeModal = document.getElementById('close-modal');
const checkoutForm = document.getElementById('checkout-form');
const applyDiscountBtn = document.getElementById('apply-discount-btn');
const discountCodeInput = document.getElementById('discount-code');
const discountMsg = document.getElementById('discount-msg');

if (applyDiscountBtn) {
    applyDiscountBtn.addEventListener('click', () => {
        const code = discountCodeInput.value.trim().toUpperCase();
        if (code === 'VENVIO10') {
            if (typeof window.currentUser !== 'undefined' && window.currentUser && window.currentUser.usedCodes.includes(code)) {
                discountMultiplier = 1;
                discountMsg.innerText = currentLang === 'en' ? 'Code already used!' : 'Tento kĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚ËĂ˘â€šÂ¬ÄąË‡d jste jiĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľ vyuĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľili!';
                discountMsg.style.color = '#FF6B6B';
                discountMsg.style.display = 'block';
            } else {
                discountMultiplier = 0.9;
                discountMsg.innerText = currentLang === 'en' ? 'Discount 10% applied!' : 'Sleva 10% uplatnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźna!';
                discountMsg.style.color = '#00D2FF';
                discountMsg.style.display = 'block';
            }
            updateCartUI();
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
        } else if (code === 'VENVIO-50-VIP-X72Q') {
            if (typeof window.currentUser !== 'undefined' && window.currentUser && window.currentUser.usedCodes.includes(code)) {
                discountMultiplier = 1;
                discountMsg.innerText = currentLang === 'en' ? 'Code already used!' : 'Tento kĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚ËĂ˘â€šÂ¬ÄąË‡d jste jiĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľ vyuĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľili!';
                discountMsg.style.color = '#FF6B6B';
                discountMsg.style.display = 'block';
            } else {
                discountMultiplier = 0.5;
                discountMsg.innerText = currentLang === 'en' ? 'VIP Discount 50% applied!' : 'VIP Sleva 50% uplatnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźna!';
                discountMsg.style.color = '#00D2FF';
                discountMsg.style.display = 'block';
            }
            updateCartUI();
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
        } else {
            discountMultiplier = 1;
            discountMsg.innerText = currentLang === 'en' ? 'Invalid code.' : 'NeplatnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž kĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚ËĂ˘â€šÂ¬ÄąË‡d.';
            discountMsg.style.color = '#FF6B6B';
            discountMsg.style.display = 'block';
            updateCartUI();
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
        }
    });
}

// Helper formatting based on currency
const formatPriceDynamic = (priceVal) => {
    if (currentCurrency === 'czk') return currentLang === 'en' ? priceVal + ' CZK' : priceVal + ' KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤';
    if (currentCurrency === 'eur') return priceVal + ' Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬';
    if (currentCurrency === 'usd') return '$' + priceVal;
    return priceVal;
};

// Update UI
const updateCartUI = () => {
    if (!cartCount) return; 
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `<div class="empty-cart-msg">${translations[currentLang]['cart.empty']}</div>`;
        cartTotalPrice.innerText = '0';
        return;
    }

    let total = 0;
    cartContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        // ZĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­skĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ sprĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© ceny podle mÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźny
        const itemPrice = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0);
        total += itemPrice;
        
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h5>${currentLang === 'en' && item.nameEn ? item.nameEn : item.nameCs}</h5>
                <p>${formatPriceDynamic(itemPrice)}</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item" onclick="removeFromCart(${index})">${translations[currentLang]['cart.remove']}</button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    let finalTotal = total * discountMultiplier;
    if(typeof pointsUsed !== 'undefined' && pointsUsed > 0) {
        if (currentCurrency === 'eur') finalTotal -= Math.round(pointsUsed / 25);
        else if (currentCurrency === 'usd') finalTotal -= Math.round(pointsUsed / RATE_USD);
        else finalTotal -= pointsUsed;
        if (finalTotal < 0) finalTotal = 0;
    }
    
    if (discountMultiplier < 1) {
        cartTotalPrice.innerHTML = `<del style="font-size: 0.8rem; color: #94A3B8; margin-right: 8px;">${formatPriceDynamic(total)}</del><span style="color: #FF6B6B;">${formatPriceDynamic(finalTotal)}</span>`;
    } else {
        cartTotalPrice.innerText = formatPriceDynamic(finalTotal);
    }
    
    localStorage.setItem('venvioCart', JSON.stringify(cart));
};

const addToCart = (id, nameCs, nameEn) => {
    cart.push({ id, nameCs, nameEn });
    updateCartUI();
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
    openCart();
    // Show toast notification
    showToast();
};

// Remove from cart (Global function for onclick)
window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
};

// Open/Close Cart
const openCart = () => {
    if(!cartSidebar) return;
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
      if(document.getElementById('chat-widget')) document.getElementById('chat-widget').style.display = 'none';
      if(document.getElementById('fab-whatsapp')) document.getElementById('fab-whatsapp').style.display = 'none';
    document.body.style.overflow = 'hidden';
};

const closeCartSidebar = () => {
    if(!cartSidebar) return;
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
      if(document.getElementById('chat-widget')) document.getElementById('chat-widget').style.display = 'block';
      if(document.getElementById('fab-whatsapp')) document.getElementById('fab-whatsapp').style.display = 'flex';
    document.body.style.overflow = '';
};

// Event Listeners
if(cartBtn) cartBtn.addEventListener('click', openCart);
if(closeCart) closeCart.addEventListener('click', closeCartSidebar);
if(cartOverlay) cartOverlay.addEventListener('click', closeCartSidebar);

if(addToCartBtns) {
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const { id, nameCs, nameEn } = e.currentTarget.dataset;
            addToCart(id, nameCs, nameEn);
        });
    });
}

// Checkout logic - Original simple checkoutBtn listener removed (superseded by complex one later)

if(closeModal) {
    closeModal.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
}

if(checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // ZabrĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žchozĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­mu odeslĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ strĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnky
        
        // ZmÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźna tlaÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­tka na naÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­
        const submitBtn = checkoutForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        
        // --- ANTI-SPAM OCHRANA ---
        // ZabrĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ uĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľivateli odeslat vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ce objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvek bÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźhem 5 minut
        const lastOrderTime = localStorage.getItem('venvioLastOrderTime');
        if (lastOrderTime && (Date.now() - parseInt(lastOrderTime)) < 5 * 60 * 1000) {
            alert(currentLang === 'en' ? "Please wait 5 minutes before submitting another order." : "Z dĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»vodu ochrany proti spamu mĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľete odeslat dalĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvku aĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľ za 5 minut.");
            return;
        }

        submitBtn.innerText = translations[currentLang]['modal.redirect'] || "OdesĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­lĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇm...";
        submitBtn.disabled = true;
        
        // SestavenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ informacĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ z koĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ku
        const formData = new FormData(checkoutForm);
        
        let cartText = "PRĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚ÂZDNĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚â€žĂ˘â‚¬Ĺľ KOĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤K";
        let totalString = "0";
        if (cart.length > 0) {
            cartText = cart.map(item => {
                const price = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0);
                const name = currentLang === 'en' && item.nameEn ? item.nameEn : item.nameCs;
                const details = currentLang === 'en' && item.detailsEn ? ' ' + item.detailsEn : (item.detailsCs ? ' ' + item.detailsCs : '');
                return `Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬Ă‚ÂÄ‚â€žĂ„â€¦Ă„Ä…ÄąĹźĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă˘â‚¬ĹźĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¦ ${name}${details} - ${formatPriceDynamic(price)}`;
            }).join('\n');
            
            
            let rawTotal = cart.reduce((sum, item) => {
                const p = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0);
                return sum + p;
            }, 0);
            let finalCheckoutTotal = rawTotal * discountMultiplier;
            totalString = formatPriceDynamic(finalCheckoutTotal);
            
            if (discountMultiplier < 1) {
                const pct = Math.round((1 - discountMultiplier) * 100);
                totalString += currentLang === 'en' ? ` (Discount ${pct}% applied)` : ` (Sleva ${pct}% uplatnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźna)`;
            }
    
        }
        
        const requestData = {
              "JmĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©no Klienta": formData.get('Jmeno'),
              "E-mail": formData.get('Email'),
              "Telefon": formData.get('Telefon') || "NezadĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇno",
              "ZprĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇva od klienta": formData.get('Zprava') || "Bez zprĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvy",
              "PoloĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľky v koĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ku": "\n" + cartText,
              "CELKOVĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â CENA": totalString,
              _subject: "Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬Ă‚ÂÄ‚â€žĂ„â€¦Ă„Ä…ÄąĹźÄ‚â€žĂ„â€¦Ä‚â€ąĂ˘â‚¬Ë‡Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€šĂ‚Â¬ NovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ VIP objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvka z Venvio.dev!",
              _template: "box",
              _autoresponse: currentLang === 'en' 
                  ? "Thank you for your custom order! We have successfully received your request and will contact you immediately. \n\nBest regards, \nVenvio Team" 
                  : "DÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźkujeme za vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇi objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvku! VĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ poĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľadavek jsme Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşspÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹź pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âijali a brzy se vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇm ozveme. \n\nS pozdravem, \nTĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žm Venvio"
          };

        // PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚ÂECHOD NA WEB3FORMS (MĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­sto FormSubmit)
        requestData.access_key = "8d52594c-6265-48a0-a197-909feda1667f";
        requestData.subject = requestData._subject;
        requestData.from_name = requestData["JmĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©no Klienta"];
        requestData.replyto = requestData["E-mail"];
        requestData.email = requestData["E-mail"];
          requestData.access_key = "8d52594c-6265-48a0-a197-909feda1667f";
          requestData.autoresponse = requestData._autoresponse;
        requestData.email = requestData["E-mail"]; // REQUIRED for Web3Forms Autoresponder
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            
            if (response.ok) {
                if (typeof gtag === 'function') {
                    gtag('event', 'purchase', { value: orderTotal, currency: currentCurrency.toUpperCase() });
                }
                generateInvoicePDF({
                    name: requestData["JmÄ‚Â©no"] || requestData["Name"] || '',
                    email: requestData.email || '',
                    items: cart.map(i => i.nameCs || i.nameEn),
                    total: orderTotal
                });
                if (window.emailjs) {
                    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                        to_email: requestData.email,
                        to_name: requestData["JmĂ„â€šĂ‚Â©no"] || requestData["Name"] || "ZĂ„â€šĂ‹â€ˇkaznĂ„â€šĂ‚Â­ku",
                        order_details: requestData.Zprava || requestData.Message
                    }).catch(e => console.error("EmailJS error:", e));
                }
                localStorage.setItem('venvioLastOrderTime', Date.now().toString());
                if (window.currentUser) {
                    let allUsers = safeJsonParse(localStorage.getItem('venvioAllUsers'), {});
                    if (!allUsers[window.currentUser.email]) allUsers[window.currentUser.email] = { points: 500, usedCodes: [], orders: [] };
                    if (!allUsers[window.currentUser.email].orders) allUsers[window.currentUser.email].orders = [];
                    const date = new Date().toLocaleDateString(currentLang === 'en' ? 'en-US' : 'cs-CZ');
                    const itemsStr = cart.map(i => i.nameCs || i.nameEn).join(', ');
                    let orderTotal = 0;
                    cart.forEach(item => { let p = item.customPrice !== undefined ? item.customPrice : (productPrices[item.id] ? productPrices[item.id][currentCurrency].val : 0); orderTotal += p; });
                    allUsers[window.currentUser.email].orders.push({ date: date, items: itemsStr, total: orderTotal });
                    localStorage.setItem('venvioAllUsers', JSON.stringify(allUsers));
            if (window.firebaseDb) {
                import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js").then(({ doc, updateDoc }) => {
                    const userRef = doc(window.firebaseDb, 'users', window.currentUser.uid);
                    updateDoc(userRef, {
                        points: window.currentUser.points,
                        usedCodes: window.currentUser.usedCodes
                    }).catch(err => console.error("Firestore save error:", err));
                });
            }
                }
                localStorage.removeItem('venvioCart');
                window.location.href = "success.html";
            } else {
                throw new Error("NepodaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âilo se odeslat pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âes Web3Forms.");
            }
        } catch (error) {
            console.error("Web3Forms chyba:", error);
            alert(currentLang === 'en' ? "Sorry, an error occurred while submitting the order. Please try again." : "OmlouvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇme se, doĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇlo k chybÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹź pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âi odesĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­lĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvky. Zkuste to prosĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m znovu.");
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    });
}


translations.cs['blog.title'] = "PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­padovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© studie & Tipy";
translations.en['blog.title'] = "Case Studies & Tips";
translations.cs['blog.desc'] = "ZajĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­mavosti ze svÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźta vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žvoje webĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» a online podnikĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­.";
translations.en['blog.desc'] = "Insights from web development and online business.";
translations.cs['blog.post1.title'] = "Jak modernĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ design zvyĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇuje konverze o 40%";
translations.en['blog.post1.title'] = "How modern design increases conversions by 40%";
translations.cs['blog.post1.desc'] = "DetailnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ pohled na to, proÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇi zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇkaznĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ci odchĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇzejĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ ke konkurenci kvĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»li zastaralĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©mu vzhledu a pomalĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©mu naÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­.";
translations.en['blog.post1.desc'] = "A detailed look at why your customers leave for competitors due to outdated design and slow loading.";
translations.cs['blog.post2.title'] = "ProÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ se vyplatĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ investovat do rychlosti webu?";
translations.en['blog.post2.title'] = "Why invest in website speed?";
translations.cs['blog.post2.desc'] = "KaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľdĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ sekunda naÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ navĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­c vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇs pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âipravuje o 7 % trĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľeb. ZjistÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźte, jak optimalizovat vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇe strĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnky pro vyhledĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvaÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤e.";
translations.en['blog.post2.desc'] = "Every extra second of loading costs you 7% of revenue. Find out how to optimize your pages for search engines.";
translations.cs['blog.post3.title'] = "5 trendĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» ve web designu pro rok 2026";
translations.en['blog.post3.title'] = "5 web design trends for 2026";
translations.cs['blog.post3.desc'] = "Glassmorphism, dark mode, mikro-animace. PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âehled trendĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â», kterĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© dominujĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ a kterĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© by vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ web nemÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźl postrĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇdat.";
translations.en['blog.post3.desc'] = "Glassmorphism, dark mode, micro-animations. Overview of trends that dominate and which your website shouldn't miss.";
translations.cs['blog.read_more'] = "Ä‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­st vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ce";
translations.en['blog.read_more'] = "Read more";
translations.cs['dash.orders'] = "Historie objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvek";
translations.en['dash.orders'] = "Order History";
translations.cs['dash.no_orders'] = "ZatĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m nemĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇte Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇdnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvky.";
translations.en['dash.no_orders'] = "You have no orders yet.";


translations.cs['chat.tooltip'] = "Chatujte s naĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ AI";
translations.en['chat.tooltip'] = "Chat with our AI";
translations.cs['chat.header_title'] = "Venvio Podpora";
translations.en['chat.header_title'] = "Venvio Support";
translations.cs['chat.header_desc'] = "OdpovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇme ihned";
translations.en['chat.header_desc'] = "Replies instantly";
translations.cs['chat.welcome'] = "DobrĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž den! Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬Ă‚ÂÄ‚â€žĂ„â€¦Ă„Ä…ÄąĹźĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ä‚â€šĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ä‚â€žĂ˘â‚¬Â¦ Jak vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇm mĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľeme pomoci s vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m webem?";
translations.en['chat.welcome'] = "Hello! Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬Ă‚ÂÄ‚â€žĂ„â€¦Ă„Ä…ÄąĹźĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ä‚â€šĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ä‚â€žĂ˘â‚¬Â¦ How can we help you with your website?";
translations.cs['chat.placeholder'] = "NapiĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇte zprĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvu...";
translations.en['chat.placeholder'] = "Type a message...";

// Translations Dictionary (update modal submit text)
translations.cs['modal.submit'] = "Odeslat objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvku";
translations.en['modal.submit'] = "Submit Order";
translations.cs['modal.redirect'] = "OdesĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­lĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇm...";
translations.en['modal.redirect'] = "Sending...";

// Translation additions for new elements
translations.cs['modal.phone'] = 'Telefon (volitelnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©)';
translations.en['modal.phone'] = 'Phone (optional)';
translations.cs['toast.added'] = 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂidĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇno do koĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ku!';
translations.en['toast.added'] = 'Added to cart!';
translations.cs['floating.contact'] = 'NapiĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇte nĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇm';
translations.en['floating.contact'] = 'Contact Us';
translations.cs['pricing.popular_ribbon'] = 'DoporuÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ujeme';
translations.en['pricing.popular_ribbon'] = 'Best Value';

// Translation additions for new SluĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľby
translations.cs['nav.services'] = 'SluĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľby';
translations.en['nav.services'] = 'Services';
translations.cs['services.badge'] = 'Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬Ă‚ÂÄ‚â€žĂ„â€¦Ă„Ä…ÄąĹźĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ä‚ËĂ˘â‚¬ĹľĂ‹ÂÄ‚â€žĂ„â€¦Ä‚â€ąÄąÄ„ Premium';
translations.en['services.badge'] = 'Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬Ă‚ÂÄ‚â€žĂ„â€¦Ă„Ä…ÄąĹźĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ä‚ËĂ˘â‚¬ĹľĂ‹ÂÄ‚â€žĂ„â€¦Ä‚â€ąÄąÄ„ Premium';
translations.cs['services.title'] = 'SoftwarovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© sluĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľby na mĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ru';
translations.en['services.title'] = 'Custom Software Services';
translations.cs['services.desc'] = 'Od jednoduchĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žch webĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» po komplexnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ internĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ systĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©my a umÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźlou inteligenci.';
translations.en['services.desc'] = 'From simple websites to complex internal systems and AI.';

translations.cs['svc1.title'] = 'WebovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© Aplikace & SaaS';
translations.en['svc1.title'] = 'Web Applications & SaaS';
translations.cs['svc1.desc'] = 'VĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žvoj plnohodnotnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žch aplikacĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ (React, Node.js), rezervaÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤nĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch systĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©mĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» a klientskĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žch portĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇlĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» na mĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ru.';
translations.en['svc1.desc'] = 'Development of full-featured applications (React, Node.js), booking systems, and custom client portals.';
translations.cs['svc1.price'] = 'Od 99 000 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤';
translations.en['svc1.price'] = 'From 99,000 CZK';

translations.cs['svc2.title'] = 'InteligentnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ AI Chatboti';
translations.en['svc2.title'] = 'Intelligent AI Chatbots';
translations.cs['svc2.desc'] = 'ChytrĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž asistent napojenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž na ChatGPT, kterĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž znĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇe produkty, odpovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­dĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ 24/7 a zvyĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇuje prodeje.';
translations.en['svc2.desc'] = 'A smart assistant connected to ChatGPT that knows your products, replies 24/7, and boosts sales.';
translations.cs['svc2.price'] = 'Od 24 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤';
translations.en['svc2.price'] = 'From 24,900 CZK';

translations.cs['svc3.title'] = 'Automatizace ProcesĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»';
translations.en['svc3.title'] = 'Process Automation';
translations.cs['svc3.desc'] = 'PropojenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ systĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©mĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âes API (Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤etnictvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­, e-shopy). ZbavĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­me vĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇs rutinnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ ruÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤nĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ prĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇce a uĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇetĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­me Ä‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤as.';
translations.en['svc3.desc'] = 'API integrations between systems (accounting, e-shops). We eliminate routine manual work and save time.';
translations.cs['svc3.price'] = 'Od 9 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤';
translations.en['svc3.price'] = 'From 9,900 CZK';

translations.cs['svc4.title'] = 'Chrome DoplĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Âky';
translations.en['svc4.title'] = 'Chrome Extensions';
translations.cs['svc4.desc'] = 'VĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€žvoj privĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇtnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch rozĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ do prohlĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľeÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤e pro usnadnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ prĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇce vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇich obchodnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­kĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â» a zamÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźstnancĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â».';
translations.en['svc4.desc'] = 'Development of private browser extensions to streamline the work of your sales reps and employees.';
translations.cs['svc4.price'] = 'Od 14 900 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤';
translations.en['svc4.price'] = 'From 14,900 CZK';

// Initialize Language & Cart
applyTranslations();

// Scroll Animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// === NEW INTERACTIVE FEATURES ===

// Floating Particles
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particlesContainer.appendChild(particle);
    }
}

// Navbar scroll effect + smart hide/show
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (navbar) {
                const currentScroll = window.scrollY;
                // Scrolled state
                if (currentScroll > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                    navbar.classList.remove('nav-hidden');
                }
                // Hide on scroll down, show on scroll up
                if (currentScroll > lastScrollY && currentScroll > 300) {
                    navbar.classList.add('nav-hidden');
                } else {
                    navbar.classList.remove('nav-hidden');
                }
                lastScrollY = currentScroll;
            }            // Back to top button visibility
            const backToTop = document.getElementById('back-to-top');
            if (backToTop) {
                if (window.scrollY > 600) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }

            // Scroll Progress
            if (scrollProgress) {
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                scrollProgress.style.width = ((currentScroll / docHeight) * 100) + '%';
            }

            // Parallax Hero
            if (heroContent && window.matchMedia('(hover: hover)').matches) {
                if (currentScroll < window.innerHeight) {
                    heroContent.style.transform = `translateY(${currentScroll * 0.3}px)`;
                    heroContent.style.opacity = 1 - (currentScroll / (window.innerHeight * 0.8));
                    if (heroBgGlow) {
                        heroBgGlow.style.transform = `translate(-50%, -50%) scale(${1 + currentScroll * 0.001})`;
                    }
                }
            }

            ticking = false;
        });
        ticking = true;
    }
});

// Animated Stats Counter
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'));
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.innerText = Math.floor(current);
            }, 25);
            statsObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
statNumbers.forEach(el => statsObserver.observe(el));

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// Toast Notification
let toastTimeout;
window.showToast = (customMsg) => {
    const toast = document.getElementById('toast');
    if(toast) {
        if (customMsg) {
            const msgEl = document.getElementById('toast-message');
            if (msgEl) msgEl.innerText = customMsg;
        }
        toast.classList.remove('show');
        void toast.offsetWidth;
        toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
            const msgEl = document.getElementById('toast-message');
            if (msgEl) msgEl.innerText = translations[currentLang]['toast.added'] || 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂidĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇno do koĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ku!';
        }, 3000);
    }
};

// Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu if open
        const navLinks = document.getElementById('nav-links');
        if (navLinks) navLinks.classList.remove('mobile-open');
    });
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-menu-toggle');
const navLinksEl = document.getElementById('nav-links');
if (mobileToggle && navLinksEl) {
    mobileToggle.addEventListener('click', () => {
        navLinksEl.classList.toggle('mobile-open');
    });
}

// === PREMIUM FEATURES ===

// First preloader logic removed as duplicate

// Cursor Glow (desktop only)
const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// Back to Top
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === SCROLL PROGRESS BAR ===
const scrollProgress = document.getElementById('scroll-progress');

// === PARALLAX HERO ===
const heroContent = document.querySelector('.hero-content');
const heroBgGlow = document.querySelector('.hero-bg-glow');
// Listener moved to main scroll handler

// === ACTIVE NAV LINK HIGHLIGHTING ===
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinksAll.forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('nav-active');
                }
            });
        }
    });
}, { threshold: 0.3 });
sections.forEach(s => navObserver.observe(s));

// === OPTION B UPGRADES ===

// 1. Theme Toggle (Light/Dark Mode)
const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggles.forEach(t => {
        if(t) t.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    });
}

themeToggles.forEach(toggleBtn => {
    if (!toggleBtn) return;
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        let theme = 'dark';
        if (document.body.classList.contains('light-mode')) {
            theme = 'light';
            themeToggles.forEach(t => t.querySelector('i').classList.replace('fa-moon', 'fa-sun'));
        } else {
            themeToggles.forEach(t => t.querySelector('i').classList.replace('fa-sun', 'fa-moon'));
        }
        localStorage.setItem('theme', theme);
    });
});

// 2. Dynamic Hero Glow Tracking
const heroHeader = document.querySelector('.hero');
const heroGlow1 = document.querySelector('.hero-bg-glow');
const heroGlow2 = document.querySelector('.hero-bg-glow-2');

if (heroHeader && heroGlow1 && heroGlow2 && window.matchMedia('(hover: hover)').matches) {
    heroHeader.addEventListener('mousemove', (e) => {
        const rect = heroHeader.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Move glow 1 towards mouse
        heroGlow1.style.left = `${x}px`;
        heroGlow1.style.top = `${y}px`;
        
        // Move glow 2 in opposite direction for parallax depth
        heroGlow2.style.left = `${rect.width - x}px`;
        heroGlow2.style.top = `${rect.height - y}px`;
    });
}

// End of script


// Preloader Logic
const hidePreloader = () => {
    const preloader = document.getElementById('preloader');
    if(preloader && !preloader.classList.contains('fade-out')) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            document.body.classList.remove('loading');
            preloader.style.display = 'none';
        }, 800);
    }
};

if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 200);
} else {
    window.addEventListener('load', () => setTimeout(hidePreloader, 200));
    // Fallback in case load event gets stuck (e.g., slow image or ad blocker)
    setTimeout(hidePreloader, 2000);
}


// Easter Egg
window.revealSecret = () => {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-message');
    if(toast && msg) {
        msg.innerText = currentLang === 'en' ? 'Secret found! Promo code: VENVIO10' : 'TajnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ sleva 10%! KĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚ËĂ˘â€šÂ¬ÄąË‡d: VENVIO10';
        toast.classList.add('show');
        setTimeout(() => { 
            toast.classList.remove('show'); 
            setTimeout(() => applyTranslations(), 500); // restore original text
        }, 5000);
    }
};


// Calculator Logic
const calcPages = document.getElementById('calc-pages');
const calcPagesVal = document.getElementById('calc-pages-val');
const calcTotal = document.getElementById('calc-total');
const calcCheckboxes = document.querySelectorAll('.calc-checkboxes input');

// Removed dead updateCalculator function

// Re-run calc on lang/currency change inside applyTranslations


// Calc Translations
translations.cs['calc.badge'] = 'Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬Ă‚ÂÄ‚â€žĂ„â€¦Ă„Ä…ÄąĹźĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ä‚ËĂ˘â‚¬ĹľĂ‹ÂĂ„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ Odhad ceny';
translations.en['calc.badge'] = 'Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬Ă‚ÂÄ‚â€žĂ„â€¦Ă„Ä…ÄąĹźĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ä‚ËĂ˘â‚¬ĹľĂ‹ÂĂ„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ Price Estimate';
translations.cs['calc.title'] = 'InteraktivnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ kalkulaÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ka';
translations.en['calc.title'] = 'Interactive Calculator';
translations.cs['calc.desc'] = 'SpoÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­tejte si hrubĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž odhad vaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇeho projektu na mĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ru.';
translations.en['calc.desc'] = 'Calculate a rough estimate for your custom project.';
translations.cs['calc.pages'] = 'PoÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤et strĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnek/podstrĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnek: ';
translations.en['calc.pages'] = 'Number of pages: ';
translations.cs['calc.opt_cms'] = 'VlastnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ Administrace (CMS)';
translations.en['calc.opt_cms'] = 'Custom Admin (CMS)';
translations.cs['calc.opt_chat'] = 'AI Chatbot Asistent';
translations.en['calc.opt_chat'] = 'AI Chatbot Assistant';
translations.cs['calc.opt_eshop'] = 'E-shop Modul (Platby)';
translations.en['calc.opt_eshop'] = 'E-commerce Module';
translations.cs['calc.total_est'] = 'OdhadovanĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ cena:';
translations.en['calc.total_est'] = 'Estimated Price:';
translations.cs['fab.tooltip'] = 'NapiĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇte nĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇm!';
translations.en['fab.tooltip'] = 'Message Us!';


// Calculator ETA and Cart Logic
let currentCalcTotalRaw = 0;
const calcEtaVal = document.getElementById('calc-eta-val');
const calcAddToCartBtn = document.getElementById('calc-add-to-cart');

const calculateEta = (days) => {
    if (currentLang === 'en') {
        if (days === 1) return 'under 24 hours';
        if (days === 2) return 'under 48 hours';
        if (days <= 6) return `${days} days`;
        if (days <= 10) return '1-2 weeks';
        if (days <= 14) return '2 weeks';
        return `${Math.ceil(days / 7)} weeks`;
    } else {
        if (days === 1) return 'do 24 hodin!';
        if (days === 2) return 'do 48 hodin!';
        if (days > 2 && days <= 4) return `${days} dny`;
        if (days > 4 && days <= 6) return `${days} dnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­`;
        if (days > 6 && days <= 10) return '1-2 tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ždny';
        if (days > 10 && days <= 14) return '2 tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ždny';
        let weeks = Math.ceil(days / 7);
        if (weeks >= 2 && weeks <= 4) return `${weeks} tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ždny`;
        return `${weeks} tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ždnĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»`;
    }
};

let previousCalcTotalRaw = 0;
const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        let val = Math.floor(easeProgress * (end - start) + start);
        obj.innerText = formatPriceDynamic(currentLang === 'en' ? val.toLocaleString('en-US') : val.toLocaleString('cs-CZ'));
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const updateCalculatorWithEta = () => {
    const calcPagesEl = document.getElementById('calc-pages');
    const calcTotalEl = document.getElementById('calc-total');
    if(!calcPagesEl || !calcTotalEl) return;
    
    let pages = parseInt(calcPagesEl.value);
    document.getElementById('calc-pages-val').innerText = pages;
    
    let basePrice = 0;
    let days = 0;
    
    if (pages === 1) {
        basePrice = 14900;
        days = 1;
    } else if (pages <= 5) {
        basePrice = 29900;
        days = 2;
    } else {
        basePrice = 49900 + ((pages - 6) * 2000);
        days = 5 + (pages - 5);
    }
    
    let total = basePrice;
    
    document.querySelectorAll('.calc-checkboxes input').forEach(cb => {
        if(cb.checked) {
            total += parseInt(cb.value);
            if(cb.id === 'calc-cms') days += 3;
            if(cb.id === 'calc-eshop') days += 7;
            if(cb.id === 'calc-chat') days += 2;
        }
    });
    currentCalcTotalRaw = total;
    
    if(calcEtaVal) {
        calcEtaVal.innerText = calculateEta(days);
    }
    
    if(currentCurrency === 'eur') total = Math.round(total / RATE_EUR);
    if(currentCurrency === 'usd') total = Math.round(total / RATE_USD);
    if (previousCalcTotalRaw !== total) {
        animateValue(calcTotalEl, previousCalcTotalRaw, total, 600);
        previousCalcTotalRaw = total;
    } else {
        calcTotalEl.innerText = formatPriceDynamic(currentLang === 'en' ? total.toLocaleString('en-US') : total.toLocaleString('cs-CZ'));
    }
};

if(document.getElementById('calc-pages')) {
    document.getElementById('calc-pages').addEventListener('input', updateCalculatorWithEta);
}
document.querySelectorAll('.calc-checkboxes input').forEach(cb => cb.addEventListener('change', updateCalculatorWithEta));

if(calcAddToCartBtn) {
    calcAddToCartBtn.addEventListener('click', () => {
        cart.push({
            id: 'pkg-calc',
            customPrice: currentCalcTotalRaw,
            nameCs: 'Projekt na mĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ru (KalkulaÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ka)',
            nameEn: 'Custom Project (Calculator)'
        });
        updateCartUI();
        if(typeof gtag === 'function') gtag('event', 'add_to_cart');
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
        showToast(currentLang === 'en' ? 'Added to cart!' : 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂidĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇno do koĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ku!');
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        if(cartSidebar) cartSidebar.classList.add('open');
        if(cartOverlay) cartOverlay.classList.add('active');
      if(document.getElementById('chat-widget')) document.getElementById('chat-widget').style.display = 'none';
      if(document.getElementById('fab-whatsapp')) document.getElementById('fab-whatsapp').style.display = 'none';
    });
}

translations.cs['calc.eta'] = 'OdhadovanĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž Ä‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤as dodĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­:';
translations.en['calc.eta'] = 'Estimated Delivery Time:';
translations.cs['calc.add_to_cart'] = '<i class="fa-solid fa-cart-plus"></i> PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âidat do koĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ku';
translations.en['calc.add_to_cart'] = '<i class="fa-solid fa-cart-plus"></i> Add to Cart';

setTimeout(updateCalculatorWithEta, 100);

// ==========================================
// Auth & Points System
// ==========================================
// ==========================================
// Auth & Points System (with Password & Social Login)
// ==========================================
window.currentUser = null; // Managed by Firebase

const authBtn = document.getElementById('auth-btn');
const authBtnMobile = document.getElementById('auth-btn-mobile');
const authIconMobile = document.getElementById('auth-icon-mobile');
const authIcon = document.getElementById('auth-icon');
const authModal = document.getElementById('auth-modal');
const closeAuthModal = document.getElementById('close-auth-modal');
const authBodyLogin = document.getElementById('auth-body-login');
const authBodyProfile = document.getElementById('auth-body-profile');
const authForm = document.getElementById('auth-form');
const authProfileName = document.getElementById('auth-profile-name');
const authProfileEmail = document.getElementById('auth-profile-email');
const authProfilePoints = document.getElementById('auth-profile-points');
const authLogoutBtn = document.getElementById('auth-logout-btn');

const cartPointsSection = document.getElementById('cart-points-section');
const cartAvailPoints = document.getElementById('cart-avail-points');
const applyPointsBtn = document.getElementById('apply-points-btn');
const pointsMsg = document.getElementById('points-msg');

window.authMode = "login";
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const groupName = document.getElementById('group-name');
const groupPasswordConfirm = document.getElementById('group-password-confirm');
const authDesc = document.getElementById('auth-desc');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authError = document.getElementById('auth-error');
const togglePasswordBtn = document.getElementById('toggle-password');

const btnGoogle = document.getElementById('btn-google');
const btnFacebook = document.getElementById('btn-facebook');

// Simple hash function for passwords (client-side only)
const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return 'h' + Math.abs(hash).toString(36);
};

const showAuthError = (msg) => {
    if (authError) {
        authError.innerText = msg;
        authError.style.display = 'block';
        setTimeout(() => { authError.style.display = 'none'; }, 4000);
    }
};

// Toggle password visibility
if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
        const pwInput = document.getElementById('auth-password');
        const icon = togglePasswordBtn.querySelector('i');
        if (pwInput.type === 'password') {
            pwInput.type = 'text';
            icon.className = 'fa-regular fa-eye-slash';
        } else {
            pwInput.type = 'password';
            icon.className = 'fa-regular fa-eye';
        }
    });
}

window.updateAuthModeUI = () => {
    if (!tabLogin) return;
    if (authError) authError.style.display = 'none';
    const authOptions = document.getElementById('auth-options');
    
    if (window.authMode === "login") {
        tabLogin.style.borderBottomColor = 'var(--color-primary)';
        tabLogin.style.color = '#fff';
        tabRegister.style.borderBottomColor = 'transparent';
        tabRegister.style.color = 'var(--color-text-muted)';
        if(groupName) groupName.style.display = 'none';
        if(groupPasswordConfirm) groupPasswordConfirm.style.display = 'none';
        document.getElementById('auth-name').removeAttribute('required');
        document.getElementById('auth-password-confirm').removeAttribute('required');
        authDesc.innerText = currentLang === 'en' ? 'Log in to your account to use loyalty discounts.' : 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âihlaste se ke svĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©mu Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤tu pro vyuĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľitĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ vÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźrnostnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch slev.';
        authSubmitBtn.innerText = currentLang === 'en' ? 'Log In' : 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂihlĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇsit se';
        if(authOptions) authOptions.style.display = 'flex';
    } else {
        tabRegister.style.borderBottomColor = 'var(--color-primary)';
        tabRegister.style.color = '#fff';
        tabLogin.style.borderBottomColor = 'transparent';
        tabLogin.style.color = 'var(--color-text-muted)';
        groupName.style.display = 'block';
        groupPasswordConfirm.style.display = 'block';
        document.getElementById('auth-name').setAttribute('required', 'true');
        document.getElementById('auth-password-confirm').setAttribute('required', 'true');
        authDesc.innerText = currentLang === 'en' ? 'Create an account and earn Venvio Coins for discounts on your next order.' : 'VytvoĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âte si Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤et a sbĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­rejte Venvio Coins pro slevy na pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇtĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvky.';
        authSubmitBtn.innerText = currentLang === 'en' ? 'Create Account' : 'VytvoĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âit Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤et';
        if(authOptions) authOptions.style.display = 'none';
    }
};

if (tabLogin) tabLogin.addEventListener('click', () => { window.authMode = "login"; updateAuthModeUI(); });
if (tabRegister) tabRegister.addEventListener('click', () => { window.authMode = "register"; updateAuthModeUI(); });

// Social Login Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€šĂ‚Â¬Ă„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă„â€ž opens a mini-form inside the modal instead of ugly prompt()




window.updateAuthUI = () => {
    if (window.currentUser) {
        if(authIcon) {
            authIcon.className = 'fa-solid fa-circle-user';
            authIcon.style.color = 'var(--color-primary)';
        }
        if(authIconMobile) {
            authIconMobile.className = 'fa-solid fa-circle-user';
            authIconMobile.style.color = 'var(--color-primary)';
        }
        if(document.getElementById('guest-discount-info')) document.getElementById('guest-discount-info').style.display = 'none';
          if(cartPointsSection) {
            cartPointsSection.style.display = 'block';
            cartAvailPoints.innerText = window.currentUser.points;
            if(window.currentUser.points > 0) {
                applyPointsBtn.style.display = 'block';
            } else {
                applyPointsBtn.style.display = 'none';
            }
        }
    } else {
        if(authIcon) {
            authIcon.className = 'fa-regular fa-user';
            authIcon.style.color = 'var(--color-text)';
        }
        if(authIconMobile) {
            authIconMobile.className = 'fa-regular fa-user';
            authIconMobile.style.color = 'var(--color-text)';
        }
        if(document.getElementById('guest-discount-info')) document.getElementById('guest-discount-info').style.display = 'none';
          if(cartPointsSection) {
            cartPointsSection.style.display = 'none';
        }
        pointsUsed = 0;
        if(pointsMsg) pointsMsg.style.display = 'none';
        if(applyPointsBtn) applyPointsBtn.style.display = 'block';
    }
    if(typeof updateCartUI === 'function') updateCartUI();
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
};

if (authBtn) {
    authBtn.addEventListener('click', () => {
        authModal.classList.add('active');
        if (window.currentUser) {
            if(authBodyLogin) authBodyLogin.style.display = 'none';
            authBodyProfile.style.display = 'block';
            authProfileName.innerText = window.currentUser.name;
            authProfileEmail.innerText = window.currentUser.email;
            authProfilePoints.innerText = window.currentUser.points;
            
            // Populate orders
            const ordersList = document.getElementById('dashboard-orders-list');
            if (ordersList) {
                let allUsers = safeJsonParse(localStorage.getItem('venvioAllUsers'), {});
                let userOrders = [];
                if (allUsers[window.currentUser.email] && allUsers[window.currentUser.email].orders) {
                    userOrders = allUsers[window.currentUser.email].orders;
                }
                
                if (userOrders.length === 0) {
                    ordersList.innerHTML = `<p style="color: var(--color-text-muted); font-style: italic; text-align: center; margin-top: 1rem;" data-i18n="dash.no_orders">${currentLang === 'en' ? 'You have no orders yet.' : 'ZatĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m nemĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇte Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇdnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvky.'}</p>`;
                } else {
                    let html = '';
                    userOrders.forEach(o => {
                        html += `
                        <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 1rem; margin-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="font-weight: 600; color: #fff;">${o.date}</div>
                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-top: 4px;">${o.items}</div>
                            </div>
                            <div style="background: rgba(0, 210, 255, 0.1); color: var(--color-primary); padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">
                                ${currentLang === 'en' ? 'PROCESSING' : 'VE ZPRACOVĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚ÂNĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤'}
                            </div>
                        </div>`;
                    });
                    ordersList.innerHTML = html;
                }
            }
        } else {
            window.authMode = "login";
            updateAuthModeUI();
            if(authBodyLogin) authBodyLogin.style.display = 'block';
            authBodyProfile.style.display = 'none';
        }
    });
}

if (closeAuthModal) closeAuthModal.addEventListener('click', () => authModal.classList.remove('active'));



if (applyPointsBtn) {
    applyPointsBtn.addEventListener('click', () => {
        if (window.currentUser && window.currentUser.points > 0) {
            pointsUsed = window.currentUser.points;
            applyPointsBtn.style.display = 'none';
            let formattedPoints = pointsUsed;
            if (currentCurrency === 'eur') formattedPoints = Math.round(pointsUsed / RATE_EUR) + ' Ä‚â€žĂ˘â‚¬ĹˇÄ‚â€ąĂ‚ÂĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â¬';
            else if (currentCurrency === 'usd') formattedPoints = '$' + Math.round(pointsUsed / RATE_USD);
            else formattedPoints += ' KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤';
            
            pointsMsg.innerText = currentLang === 'en' ? `Applied ${formattedPoints} discount!` : `UplatnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźna sleva ${formattedPoints}!`;
            pointsMsg.style.display = 'block';
            updateCartUI();
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
        }
    });
}

// Checkout button logic override to save used code & points
const checkoutBtnRef = document.getElementById('checkout-btn');
if (checkoutBtnRef) {
    const newCheckoutBtn = checkoutBtnRef.cloneNode(true);
    checkoutBtnRef.parentNode.replaceChild(newCheckoutBtn, checkoutBtnRef);
    
    newCheckoutBtn.addEventListener('click', async () => {
        if(cart.length === 0) {
            window.showToast(currentLang === 'en' ? 'Cart is empty.' : 'KoĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­k je prĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇzdnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ă„Ä…Ă„â€ž.');
            return;
        }
        
        // Guest checkout allowed

        
        // Dynamicky obnovĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­me stav uĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľivatele z Firebase (pokud zrovna potvrdil e-mail v jinĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â© zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇloĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľce)
        if (window.currentUser && !window.currentUser.emailVerified && window.firebaseAuth && window.firebaseAuth.currentUser) {
            try {
                const checkoutSpinner = document.getElementById('preloader');
                if(checkoutSpinner) checkoutSpinner.classList.remove('fade-out'); // ZobrazĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­me na chvĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­li naÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­tĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­
                
                await window.firebaseAuth.currentUser.reload();
                window.currentUser.emailVerified = window.firebaseAuth.currentUser.emailVerified;
                
                if(checkoutSpinner) checkoutSpinner.classList.add('fade-out');
            } catch (e) {
                console.error("Chyba pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âi obnovÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹź uĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľivatele:", e);
            }
        }
        
        if (window.currentUser && !window.currentUser.emailVerified) {
            alert(currentLang === 'en' ? "Please verify your email address before making a purchase. Check your inbox (or SPAM folder)." : "PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âed nĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇkupem prosĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­m ovÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âte svĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ä‚â€žĂ„â€¦Ä‚â€šĂ‚Â»j e-mail (zkontrolujte doruÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤enou poĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇtu i sloĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľku SPAM). Po potvrzenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ kliknÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźte znovu na PokraÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ovat.");
            return;
        }
        
        // Save used discount code
        if (window.currentUser && discountMultiplier < 1) {
            const code = document.getElementById('discount-code') ? document.getElementById('discount-code').value.trim().toUpperCase() : '';
            if (code && !window.currentUser.usedCodes.includes(code)) {
                window.currentUser.usedCodes.push(code);
            }
        }
        
        // Deduct points
        if (window.currentUser && pointsUsed > 0) {
            window.currentUser.points -= pointsUsed;
            pointsUsed = 0;
            let allUsers = safeJsonParse(localStorage.getItem('venvioAllUsers'), {});
            allUsers[window.currentUser.email] = window.currentUser;
            localStorage.setItem('venvioAllUsers', JSON.stringify(allUsers));
            if (window.firebaseDb) {
                import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js").then(({ doc, updateDoc }) => {
                    const userRef = doc(window.firebaseDb, 'users', window.currentUser.uid);
                    updateDoc(userRef, {
                        points: window.currentUser.points,
                        usedCodes: window.currentUser.usedCodes
                    }).catch(err => console.error("Firestore save error:", err));
                });
            }
            localStorage.setItem('venvioUser', JSON.stringify(window.currentUser));
        }
        
        // Pre-fill email and make it readonly
        const checkoutEmail = document.querySelector('#checkout-form input[name="Email"]');
        if (checkoutEmail && window.currentUser) {
            checkoutEmail.value = window.currentUser.email;
            checkoutEmail.readOnly = true;
            checkoutEmail.style.opacity = '0.7';
            checkoutEmail.style.cursor = 'not-allowed';
        }
        
        const cModal = document.getElementById('checkout-modal');
        if(cModal) cModal.classList.add('active');
        updateAuthUI();
    });
}

// Auth UI Init
setTimeout(updateAuthUI, 100);

// Translation keys
translations.cs['auth.tab_login'] = 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂihlĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇsit se';
translations.en['auth.tab_login'] = 'Log In';
translations.cs['auth.tab_register'] = 'Zaregistrovat';
translations.en['auth.tab_register'] = 'Register';
translations.cs['auth.desc_login'] = 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âihlaste se ke svĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©mu Ă„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ä‚â€žĂ„â€¦Ă„Ä…ÄąĹşÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤tu pro vyuĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„ÄľitĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ vÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźrnostnĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ch slev.';
translations.en['auth.desc_login'] = 'Log in to your account to use loyalty discounts.';
translations.cs['auth.submit_login'] = 'PĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂihlĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇsit se';
translations.en['auth.submit_login'] = 'Log In';
translations.cs['auth.title'] = 'KlientskĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇ sekce';
translations.en['auth.title'] = 'Client Area';
translations.cs['auth.name'] = 'JmĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â©no';
translations.en['auth.name'] = 'Name';
translations.cs['auth.email'] = 'E-mail';
translations.en['auth.email'] = 'Email';
translations.cs['auth.points_label'] = 'Venvio Coins';
translations.en['auth.points_label'] = 'Venvio Coins';
translations.cs['auth.points_val'] = '1 bod = 1 KÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ sleva';
translations.en['auth.points_val'] = '1 coin = 1 CZK discount';
translations.cs['auth.logout'] = 'OdhlĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇsit se';
translations.en['auth.logout'] = 'Log Out';
translations.cs['auth.remember'] = 'Zapamatovat si mÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹź';
translations.en['auth.remember'] = 'Remember me';
translations.cs['auth.forgot_pwd'] = 'ZapomnÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźli jste heslo?';
translations.en['auth.forgot_pwd'] = 'Forgot password?';
translations.cs['auth.or'] = 'Nebo';
translations.en['auth.or'] = 'Or';
translations.cs['auth.google'] = 'PokraÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ovat pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âes Google';
translations.en['auth.google'] = 'Continue with Google';
translations.cs['auth.facebook'] = 'PokraÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤ovat pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âes Facebook';
translations.en['auth.facebook'] = 'Continue with Facebook';
translations.cs['auth.password'] = 'Heslo';
translations.en['auth.password'] = 'Password';
translations.cs['auth.password_ph'] = 'VaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇe heslo';
translations.en['auth.password_ph'] = 'Your password';
translations.cs['auth.password_confirm'] = 'Heslo znovu';
translations.en['auth.password_confirm'] = 'Confirm password';
translations.cs['auth.password_confirm_ph'] = 'Zopakujte heslo';
translations.en['auth.password_confirm_ph'] = 'Repeat your password';
translations.cs['auth.points_info'] = 'Za kaĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ˘â‚¬ĹľÄ‚â€žĂ„Äľdou dokonÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€žĂ„â€¦Ä‚â€šĂ‚Â¤enou objednĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇvku zĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­skĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇte 1000 Venvio Coins. Body pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚Âipisujeme po ovÄ‚â€žĂ˘â‚¬ĹˇÄ‚ËĂ˘â€šÂ¬ÄąÄľĂ„â€šĂ‹ÂÄ‚ËĂ˘â‚¬ĹˇĂ‚Â¬Ă„Ä…ÄąĹźĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­.';
translations.en['auth.points_info'] = 'You earn 1000 Venvio Coins for every completed order. Points are assigned after verification.';
// Duplicate auth translations removed
translations.cs['cart.points_avail'] = 'MĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬Ä…Ä‚ËĂ˘â€šÂ¬Ă‹â€ˇte k dispozici:';
translations.en['cart.points_avail'] = 'You have:';
translations.cs['cart.use_points'] = 'Uplatnit body jako slevu';
translations.en['cart.use_points'] = 'Use coins for discount';

// Sync cart across multiple tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'venvioCart') {
        try {
            const newCart = safeJsonParse(e.newValue, []);
            cart.length = 0;
            cart.push(...newCart);
            updateCartUI();
    if(typeof gtag === 'function') gtag('event', 'add_to_cart');
        } catch(err) {
            console.error('Error syncing cart:', err);
        }
    }
});
// Live Chat Mockup Logic
document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    let chatHistory = [];

    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', () => {
            chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
        });

        if(chatClose) chatClose.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });

        const sendMessage = async () => {
            const text = chatInput.value.trim();
            if (text) {
                // Add user message to UI
                const userDiv = document.createElement('div'); userDiv.style.cssText = 'background: var(--color-primary); color: white; padding: 10px; border-radius: 12px 12px 0 12px; max-width: 85%; font-size: 0.9rem; align-self: flex-end; margin-bottom: 5px;'; userDiv.textContent = text; chatMessages.appendChild(userDiv);
                chatInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;

                // Add to history
                chatHistory.push({ role: 'user', content: text });

                // Loading indicator
                const loadingId = 'loading-' + Date.now();
                chatMessages.innerHTML += `
                <div id="${loadingId}" style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 12px 12px 12px 0; max-width: 85%; font-size: 0.9rem; margin-bottom: 5px;">
                    <i class="fa-solid fa-ellipsis fa-fade"></i>
                </div>`;
                chatMessages.scrollTop = chatMessages.scrollHeight;

                try {
                    const response = await fetch('/api/chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ messages: chatHistory, lang: window.currentLang })
                    });
                    
                    if (document.getElementById(loadingId)) document.getElementById(loadingId).remove();

                    if (response.ok) {
                if (typeof gtag === 'function') {
                    gtag('event', 'purchase', { value: orderTotal, currency: currentCurrency.toUpperCase() });
                }
                generateInvoicePDF({
                    name: requestData["JmÄ‚Â©no"] || requestData["Name"] || '',
                    email: requestData.email || '',
                    items: cart.map(i => i.nameCs || i.nameEn),
                    total: orderTotal
                });
                if (window.emailjs) {
                    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                        to_email: requestData.email,
                        to_name: requestData["JmĂ„â€šĂ‚Â©no"] || requestData["Name"] || "ZĂ„â€šĂ‹â€ˇkaznĂ„â€šĂ‚Â­ku",
                        order_details: requestData.Zprava || requestData.Message
                    }).catch(e => console.error("EmailJS error:", e));
                }
                        const data = await response.json();
                        chatHistory.push({ role: 'assistant', content: data.reply });
                        
                        const botDiv = document.createElement('div'); botDiv.style.cssText = 'background: rgba(255,255,255,0.05); padding: 10px; border-radius: 12px 12px 12px 0; max-width: 85%; font-size: 0.9rem; margin-bottom: 5px;'; botDiv.innerHTML = data.reply.replace(/\n/g, '<br>'); chatMessages.appendChild(botDiv);
                    } else {
                        throw new Error('API Error');
                    }
                } catch (error) {
                    if (document.getElementById(loadingId)) document.getElementById(loadingId).remove();
                    const errMsg = window.currentLang === 'en' ? "Connection error." : "Chyba pĂ„â€šĂ˘â‚¬ĹľÄ‚â€žĂ˘â‚¬Â¦Ă„â€šĂ‹ÂÄ‚ËĂ˘â€šÂ¬ÄąÄľÄ‚â€ąĂ‚ÂipojenĂ„â€šĂ˘â‚¬ĹľÄ‚ËĂ˘â€šÂ¬ÄąË‡Ă„â€šĂ˘â‚¬ĹˇÄ‚â€šĂ‚Â­ k serveru.";
                    const errDiv = document.createElement('div'); errDiv.style.cssText = 'background: rgba(255,50,50,0.1); color: #ff6b6b; padding: 10px; border-radius: 12px 12px 12px 0; max-width: 85%; font-size: 0.9rem; margin-bottom: 5px;'; errDiv.textContent = errMsg; chatMessages.appendChild(errDiv);
                }
            }
        };

        if(chatSend) chatSend.addEventListener('click', sendMessage);
        if(chatInput) chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});


// Ensure all delayed translations are applied
applyTranslations();

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="email"], input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            if (input.checkValidity() && input.value.trim() !== '') {
                input.style.borderColor = 'var(--color-success)';
                input.style.boxShadow = '0 0 5px rgba(46, 204, 113, 0.3)';
            } else {
                input.style.borderColor = 'rgba(255,255,255,0.1)';
                input.style.boxShadow = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => {
        // Inject glow element
        let glow = document.createElement('div');
        glow.className = 'mouse-glow';
        card.appendChild(glow);

        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            glow.style.setProperty('--mouse-x', `${x}px`);
            glow.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

// --- MOBILE AUTH FIX ---
if (authBtnMobile) {
    authBtnMobile.addEventListener('click', () => {
        if (authBtn) {
            authBtn.click(); // Trigger the desktop button's logic
        } else {
            authModal.classList.add('active'); // Fallback
        }
    });
}






// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// PDF Generation
function generateInvoicePDF(orderData) {
    if (!window.jspdf) return;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.text("Venvio - ShrnutÄ‚Â­ objednÄ‚Ë‡vky", 20, 20);
    
    doc.setFontSize(12);
    doc.text(Datum: , 20, 30);
    doc.text(ZÄ‚Ë‡kaznÄ‚Â­k: , 20, 40);
    doc.text(E-mail: , 20, 48);
    
    doc.text("PoloÄąÄľky:", 20, 60);
    let y = 70;
    
    if (orderData.items) {
        orderData.items.forEach(item => {
            doc.text(- , 25, y);
            y += 8;
        });
    }
    
    doc.setFontSize(14);
    doc.text(Celkem k Ä‚ĹźhradĂ„â€ş:  CZK, 20, y + 10);
    
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("Venvio.dev | IĂ„ĹšO: 27622444", 20, 280);
    doc.text("Nejsme plÄ‚Ë‡tci DPH.", 20, 285);
    
    doc.save("venvio-objednavka.pdf");
}
