const config = {
  "token": "NjM3OTU4NjY5MzU0NTMyODY0.XbVvWw.erhKOZhP-elm9hKPY9W_canaa6w",

  "dashboard" : {
    "oauthSecret": "W29eNy6s4Bj7FveKcqhDAj3k2vjr4YKR", // botunuzun client secret tini buraya yazin
    "callbackURL": "https://snax-kontrol-panel.glitch.me/callback",// burda login yapmak icin botunuzun Outh2 yazan yere gelip orda daki kizma yapistirip kaydedin
    "sessionSecret": "W29eNy6s4Bj7FveKcqhDAj3k2vjr4YKR",
    "domain": "https://snax-kontrol-panel.glitch.me",// buraya kc at alt yapi yerine yazdiysaniz kc-at-panel isimi ile degistirin
    "port": 8000
  },
};

module.exports = config;