const config = {
  "token": "NjM3MzU2NTEwMDY5OTE1NjUw.XbNAng.4O0PEh4kUV7o1PeA5xCHcwH9P28",

  "dashboard" : {
    "oauthSecret": "uk2R5brX0joQnsbgswXZyVOJXR62swG7", // botunuzun client secret tini buraya yazin
    "callbackURL": "https://snax-kontrol-panel.glitch.me/callback",// burda login yapmak icin botunuzun Outh2 yazan yere gelip orda daki kizma yapistirip kaydedin
    "sessionSecret": "uk2R5brX0joQnsbgswXZyVOJXR62swG7",
    "domain": "https://snax-kontrol-panel.glitch.me",// buraya kc at alt yapi yerine yazdiysaniz kc-at-panel isimi ile degistirin
    "port": 8000
  },
};

module.exports = config;