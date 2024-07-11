
// Generated on 2024-07-11 at 16:42:05
// Google Ads Conversion Scripts
(function() {
  var adData = [
  {
    "account": "Account1",
    "id": "AW-16610029004",
    "conversionId": "gI6yCM2c-LwZEMzbo_A9"
  },
  {
    "account": "Account2",
    "id": "AW-16634450698",
    "conversionId": "dFUBCKqynMAZEIqm9vs9"
  },
  {
    "account": "Account3",
    "id": "AW-16635348770",
    "conversionId": "1z39CNyPwMAZEKKOrfw9"
  },
  {
    "account": "Account4",
    "id": "AW-16635409119",
    "conversionId": "2VAjCO_BosEZEN_lsPw9"
  },
  {
    "account": "Account5",
    "id": "AW-16635477508",
    "conversionId": "faGYCIHfu8AZEIT8tPw9"
  },
  {
    "account": "Account6",
    "id": "AW-16629880194",
    "conversionId": "TfCpCPec-r4ZEIKr3_k9"
  },
  {
    "account": "Account7",
    "id": "AW-16628701585",
    "conversionId": "EH-OCMuWyr4ZEJGzl_k9"
  },
  {
    "account": "Account8",
    "id": "AW-16632096298",
    "conversionId": "QA4nCPjPqb8ZEKrM5vo9"
  },
  {
    "account": "Account9",
    "id": "AW-16632654850",
    "conversionId": "p3OcCJnj1r8ZEILYiPs9"
  },
  {
    "account": "Account10",
    "id": "AW-16628678543",
    "conversionId": "p0vHCKbco8EZEI__lfk9"
  },
  {
    "account": "Account11",
    "id": "AW-16628214595",
    "conversionId": "4WFaCKTWqb4ZEMPW-fg9"
  }
];

  adData.forEach(function(ad) {
    // Load Google Tag Manager
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + ad.id;
    document.head.appendChild(gtagScript);

    // Initialize Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', ad.id);

    // Track conversion event
    if (ad.conversionId) {
      gtag('event', 'conversion', {'send_to': ad.id + '/' + ad.conversionId});
    }
  });
})();
            