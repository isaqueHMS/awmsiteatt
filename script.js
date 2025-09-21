// ================= Constantes Globais ================= //
const ITEMS_PER_PAGE = 50;
const BACKGROUND_PLAYLIST = [
  "fundoSound.mp3",
  "fundoSound1.mp3",
  "fundoSound2.mp3",
  "fundoSound3.mp3",
  "fundoSound4.mp3",
  "fundoSound5.mp3",
];
const STEAM_GAMES = [
  { id: "game01", name: "Counter-Strike 2", price: 72.99, cover: "cs2.png" },
  { id: "game02", name: "Baldur's Gate 3", price: 199.99, cover: "bg3.png" },
  { id: "game03", name: "Elden Ring", price: 249.9, cover: "elden.png" },
  { id: "game04", name: "Stardew Valley", price: 24.99, cover: "stardew.png" },
  {
    id: "game05",
    name: "Cyberpunk 2077",
    price: 199.9,
    cover: "cyberpunk.png",
  },
  { id: "game06", name: "Hollow Knight", price: 46.99, cover: "hollow.png" },
  { id: "game07", name: "Phasmophobia", price: 27.89, cover: "phasmo.png" },
  { id: "game08", name: "Lethal Company", price: 32.99, cover: "lethal.png" },
];
const ACHIEVEMENTS = {
  PRIMEIRA_CAIXA: {
    title: { pt: "Iniciante", en: "Beginner" },
    description: {
      pt: "Abra sua primeira caixa.",
      en: "Open your first crate.",
    },
  },
  PRIMEIRO_RARO: {
    title: { pt: "Sortudo", en: "Lucky" },
    description: {
      pt: "Encontre seu primeiro item Raro.",
      en: "Find your first Rare item.",
    },
  },
  PRIMEIRO_ULTRARARO: {
    title: { pt: "Abençoado pelos Deuses", en: "Blessed by the Gods" },
    description: {
      pt: "Encontre seu primeiro item Ultrarraro.",
      en: "Find your first Ultra Rare item.",
    },
  },
  COLECIONADOR_10: {
    title: { pt: "Acumulador", en: "Hoarder" },
    description: {
      pt: "Junte 10 itens na sua mochila.",
      en: "Collect 10 items in your backpack.",
    },
  },
  COLECIONADOR_50: {
    title: { pt: "Colecionador", en: "Collector" },
    description: {
      pt: "Junte 50 itens na sua mochila.",
      en: "Collect 50 items in your backpack.",
    },
  },
  MAGNATA_10K: {
    title: { pt: "Pequeno Burguês", en: "Bourgeoisie" },
    description: {
      pt: "Acumule 10.000 Refinados.",
      en: "Accumulate 10,000 Refined.",
    },
  },
  MAGNATA_50K: {
    title: { pt: "Magnata", en: "Tycoon" },
    description: {
      pt: "Acumule 50.000 Refinados.",
      en: "Accumulate 50,000 Refined.",
    },
  },
  COMPROU_OITAO: {
    title: { pt: "Fora da Lei", en: "Outlaw" },
    description: { pt: "Compre o OitãoFoda.", en: "Buy the OitãoFoda." },
  },
  GOLDEN_PAN: {
    title: { pt: "O Escolhido", en: "The Chosen One" },
    description: { pt: "Encontre uma Golden Pan.", en: "Find a Golden Pan." },
  },
};
const ITEMS = [
  {
    name: "Lança-Granadas",
    src: "comum.png",
    rarity: "comum",
    chance: 7,
    sell: 50,
  },
  { name: "Escopeta", src: "comum1.png", rarity: "comum", chance: 7, sell: 55 },
  { name: "Gibus", src: "comum2.png", rarity: "comum", chance: 7, sell: 60 },
  { name: "Revólver", src: "comum3.png", rarity: "comum", chance: 6, sell: 65 },
  {
    name: "Lança-Foguetes",
    src: "comum4.png",
    rarity: "comum",
    chance: 6,
    sell: 70,
  },
  { name: "Rifle", src: "comum5.png", rarity: "comum", chance: 6, sell: 75 },
  { name: "Taco", src: "comum6.png", rarity: "comum", chance: 6, sell: 80 },
  { name: "Pistola", src: "comum7.png", rarity: "comum", chance: 6, sell: 85 },
  {
    name: "Revólver de Hack",
    src: "comum8.png",
    rarity: "comum",
    chance: 6,
    sell: 90,
  },
  {
    name: "Metralhadora Giratória",
    src: "comum9.png",
    rarity: "comum",
    chance: 6,
    sell: 95,
  },
  {
    name: "Eyelander",
    src: "comum10.png",
    rarity: "comum",
    chance: 7,
    sell: 100,
  },
  {
    name: "Lança-Granada de Australium",
    src: "rare.png",
    rarity: "raro",
    chance: 5,
    sell: 250,
  },
  {
    name: "Metralhadora Giratória de Australium",
    src: "rare1.png",
    rarity: "raro",
    chance: 4,
    sell: 300,
  },
  {
    name: "Lança-Foguetes de Australium",
    src: "rare2.png",
    rarity: "raro",
    chance: 4,
    sell: 350,
  },
  {
    name: "Arma Médica de Australium",
    src: "rare3.png",
    rarity: "raro",
    chance: 4,
    sell: 400,
  },
  {
    name: "Rifle de Australium",
    src: "rare4.png",
    rarity: "raro",
    chance: 4,
    sell: 450,
  },
  {
    name: "Escopeta de Australium",
    src: "rare5.png",
    rarity: "raro",
    chance: 4,
    sell: 500,
  },
  {
    name: "PC do Isaque",
    src: "ultrarare.png",
    rarity: "ultrararo",
    chance: 2,
    sell: 1000,
  },
  {
    name: "Golden Pan",
    src: "ultrarare1.png",
    rarity: "ultrararo",
    chance: 0.1,
    sell: 10000,
  },
  {
    name: "AIMBOT-ON",
    src: "ultrarare2.png",
    rarity: "ultrararo",
    chance: 2,
    sell: 1500,
  },
];
const MISSIONS = [
  {
    id: "OPEN_5_BOXES",
    title: { pt: "Abridor Novato", en: "Rookie Opener" },
    description: { pt: "Abra 5 caixas.", en: "Open 5 crates." },
    goal: 5,
    reward: 500,
    progress: 0,
    completed: false,
    claimed: false,
  },
  {
    id: "GET_GOLDEN_PAN",
    title: { pt: "Caçador Dourado", en: "Golden Hunter" },
    description: { pt: "Obtenha uma Golden Pan.", en: "Obtain a Golden Pan." },
    goal: 1,
    reward: 2000,
    progress: 0,
    completed: false,
    claimed: false,
  },
  {
    id: "EARN_1000_REFINED",
    title: { pt: "Pequeno Rico", en: "Getting Rich" },
    description: { pt: "Ganhe 1000 refinados.", en: "Earn 1000 refined." },
    goal: 1000,
    reward: 300,
    progress: 0,
    completed: false,
    claimed: false,
  },
  {
    id: "GET_VALVE",
    title: { pt: "A Jornada Final", en: "The Final Journey" },
    description: {
      pt: "Complete TODOS os objetivos do jogo para finalizar sua jornada.",
      en: "Complete ALL game objectives to finish your journey.",
    },
    goal: 1,
    reward: 0,
    progress: 0,
    completed: false,
    claimed: false,
  },
];
const CUSTOM_STORE_ITEMS = [
  {
    id: "title_veteran",
    name: { pt: "Veterano", en: "Veteran" },
    cost: 5000,
    description: {
      pt: "Um título para quem já viu de tudo.",
      en: "A title for those who have seen it all.",
    },
  },
  {
    id: "title_collector",
    name: { pt: "Colecionador Nato", en: "Born Collector" },
    cost: 10000,
    description: {
      pt: "Para quem não deixa nada para trás.",
      en: "For those who leave nothing behind.",
    },
  },
  {
    id: "title_tycoon",
    name: { pt: "Magnata", en: "Tycoon" },
    cost: 25000,
    description: {
      pt: "O verdadeiro rei dos refinados.",
      en: "The true king of refined metal.",
    },
  },
  {
    id: "title_gambler",
    name: { pt: "Apostador", en: "Gambler" },
    cost: 7500,
    description: {
      pt: "Sempre pronto para a próxima caixa.",
      en: "Always ready for the next crate.",
    },
  },
  {
    id: "title_unusual",
    name: { pt: "Incomum", en: "Unusual" },
    cost: 15000,
    description: {
      pt: "Tão raro quanto um chapéu rosa.",
      en: "As rare as a pink hat.",
    },
  },
  {
    id: "title_legend",
    name: { pt: "Lenda do Servidor", en: "Server Legend" },
    cost: 50000,
    description: {
      pt: "Todos conhecem seu nome.",
      en: "Everyone knows your name.",
    },
  },
  {
    id: "title_spy",
    name: { pt: "Mestre da Furtividade", en: "Stealth Master" },
    cost: 12000,
    description: {
      pt: "Eles nunca te viram chegando.",
      en: "They never saw you coming.",
    },
  },

  {
    id: "title_heavy",
    name: { pt: "Rei do Sandvich", en: "King of the Sandvich" },
    cost: 8000,
    description: { pt: "POOTIS SPENCER HERE!", en: "POOTIS SPENCER HERE!" },
  },
  {
    id: "title_memelord",
    name: { pt: "Lorde dos Memes", en: "Meme Lord" },
    cost: 20000,
    description: {
      pt: "Seu spray é uma obra de arte.",
      en: "Your spray is a work of art.",
    },
  },
  {
    id: "title_pan",
    name: { pt: "Frigideira Dourada", en: "Golden Pan" },
    cost: 100000,
    description: { pt: "O som da vitória.", en: "The sound of victory." },
  },
  {
    id: "title_god",
    name: {
      pt: "Deus dos Refinados",
      en: "God of the Refined",
    },
    cost: 10000000,
    description: {
      pt: "Você Conseguiu Chegar ao Nivel de Dominar o Mundo.",
      en: "You've Reached the Level of World Domination.",
    },
  },
];
const translations = {
  pt: {
    startCrate: "Iniciar TF Crate",
    duelMode: "Modo Duelo",
    missions: "Missões",
    exchangeRefined: "TROCAR REFINADOS",
    buySteamGames: "COMPRAR JOGOS STEAM",
    language: "Language",
    exchangeTitle: "Central de Câmbio",
    yourRefined: "Seus Refinados",
    yourBalance: "Seu Saldo",
    exchange1: "Trocar 1",
    exchange10: "Trocar 10",
    exchange100: "Trocar 100",
    exchange: "Trocar",
    backToStart: "Voltar ao Início",
    steamStore: "Loja Steam",
    crateDuel: "Duelo de Caixas",
    duelCostInfo:
      "Cada caixa custa 120 refinados. Desconto de 5% para 5 ou mais!",
    numberOfCrates: "Número de Caixas:",
    startDuel: "Iniciar Duelo!",
    yourItems: "Seus Itens",
    botItems: "Itens do Bot",
    totalValue: "Valor Total",
    refined: "Refinados",
    playAgain: "Jogar Novamente",
    skipAnimation: "Pular Animação",
    back: "Voltar",
    cratesOpened: "Caixas Abertas",
    soundSettings: "Configurar Som",
    openCrate: "Abrir Caixa",
    viewBackpack: "Ver Mochila",
    achievements: "Conquistas",
    viewProfile: "Ver Perfil",
    profileStore: "Loja do Perfil",
    sell: "Vender",
    store: "Guardar",
    discard: "Descartar",
    recentDrops: "Drops Recentes",
    clearHistory: "Apagar Histórico",
    shop: "Loja",
    buy: "Comprar",
    oitaoName: "OitãoFoda - 3000 Refinados",
    sellItems: "Vender Itens",
    noSellableItems: "Você não tem itens vendáveis na mochila.",
    downloadLink:
      "esse jogo foi feito em um desafio de 30 minutos, veja a versão do meu primo do desafio: download",
    exportSave: "Exportar Save",
    importSave: "Importar Save",
    resetProgress: "Reiniciar Progresso",
    backpack: "Mochila",
    playerProfile: "Perfil do Jogador",
    name: "Nome:",
    title: "Título:",
    generalStats: "Estatísticas Gerais",
    currentRefined: "Refinados Atuais",
    itemsInBackpack: "Itens na Mochila",
    customizationStore: "Loja de Customização",
    titles: "Títulos",
    cheatMenuTitle: "Modo de Cheats",
    cheatRefined: "Adicionar 100k Refinados",
    cheatPan: "Adicionar Golden Pan",
    cheatMoney: "Adicionar R$500",
    cheatItems: "Adicionar Todos os Itens",
    notificationVolume: "Volume da Notificação:",
    musicVolume: "Volume da Música:",
    crateVolume: "Volume da Caixa Abrindo:",
    close: "Fechar",
    congratulations: "Parabéns!",
    endGameMessage:
      "Você completou 100% do TF2 BET. Você é uma verdadeira lenda das caixas! Obrigado por jogar.",
    restartGame: "Reiniciar Jornada",
    quantity: "Quantidade",
    termsButton: "TERMS FOR USERS",
    termsTitle: "Termos de Uso",
    termsText:
      "Este jogo é um simulador e não envolve nenhuma transação com dinheiro real. Todos os valores e itens são puramente fictícios.",
    shopSell: "Loja / Vender",
  },
  en: {
    startCrate: "Start TF Crate",
    duelMode: "Duel Mode",
    missions: "Missions",
    exchangeRefined: "EXCHANGE REFINED",
    buySteamGames: "BUY STEAM GAMES",
    language: "Idioma",
    exchangeTitle: "Exchange Center",
    yourRefined: "Your Refined",
    yourBalance: "Your Balance",
    exchange1: "Exchange 1",
    exchange10: "Exchange 10",
    exchange100: "Exchange 100",
    exchange: "Exchange",
    backToStart: "Back to Start",
    steamStore: "Steam Store",
    crateDuel: "Crate Duel",
    duelCostInfo: "Each crate costs 120 refined. 5% discount for 5 or more!",
    numberOfCrates: "Number of Crates:",
    startDuel: "Start Duel!",
    yourItems: "Your Items",
    botItems: "Bot's Items",
    totalValue: "Total Value",
    refined: "Refined",
    playAgain: "Play Again",
    skipAnimation: "Skip Animation",
    back: "Back",
    cratesOpened: "Crates Opened",
    soundSettings: "SOUND SETTINGS",
    openCrate: "Open Crate",
    viewBackpack: "View Backpack",
    achievements: "Achievements",
    viewProfile: "View Profile",
    profileStore: "Profile Store",
    sell: "Sell",
    store: "Store",
    discard: "Discard",
    recentDrops: "Recent Drops",
    clearHistory: "Clear History",
    shop: "Shop",
    buy: "Buy",
    oitaoName: "OitãoFoda - 3000 Refined",
    sellItems: "Sell Items",
    noSellableItems: "You have no sellable items in your backpack.",
    downloadLink:
      "this game was made in a 30-minute challenge, check out my cousin's version of the challenge: download",
    exportSave: "Export Save",
    importSave: "Import Save",
    resetProgress: "Reset Progress",
    backpack: "Backpack",
    playerProfile: "Player Profile",
    name: "Name:",
    title: "Title:",
    generalStats: "General Stats",
    currentRefined: "Current Refined",
    itemsInBackpack: "Items in Backpack",
    customizationStore: "Customization Store",
    titles: "Titles",
    cheatMenuTitle: "Cheat Mode",
    cheatRefined: "Add 100k Refined",
    cheatPan: "Add Golden Pan",
    cheatMoney: "Add $500",
    cheatItems: "Add All Items",
    notificationVolume: "Notification Volume:",
    musicVolume: "Music Volume:",
    crateVolume: "Crate Opening Volume:",
    close: "Close",
    congratulations: "Congratulations!",
    endGameMessage:
      "You have completed 100% of TF2 BET. You are a true crate legend! Thank you for playing.",
    restartGame: "Restart Journey",
    quantity: "Quantity",
    termsButton: "TERMS FOR USERS",
    termsTitle: "Terms of Use",
    termsText:
      "This game is a simulator and does not involve any real money transactions. All values and items are purely fictitious.",
    shopSell: "Shop / Sell",
  },
};

function getInitialState() {
  return {
    refinados: 0,
    money: 0,
    isOpening: false,
    mochilaItens: [],
    currentItem: null,
    stats: {
      boxesOpened: 0,
      goldenPans: 0,
      unlockedAchievements: [],
      playerName: "Mercenário",
      purchasedGames: [],
      purchasedTitles: [],
      playerTitle: "Novato",
    },
    backpackCurrentPage: 1,
    currentSongIndex: 0,
    hasClover: false,
    missions: JSON.parse(JSON.stringify(MISSIONS)),
    duel: {
      isActive: false,
      isSkipping: false,
      cratesToOpen: 0,
      playerItems: [],
      botItems: [],
      playerTotalValue: 0,
      botTotalValue: 0,
    },
    language: "pt",
  };
}
let state = getInitialState();

const DOM = {
  loginScreen: document.getElementById("loginScreen"),
  gameContainer: document.getElementById("gameContainer"),
  exchangeScreen: document.getElementById("exchangeScreen"),
  steamStoreScreen: document.getElementById("steamStoreScreen"),
  missionsScreen: document.getElementById("missionsScreen"),
  loginBtn: document.getElementById("loginBtn"),
  languageBtn: document.getElementById("languageBtn"),
  languageModal: document.getElementById("languageModal"),
  langPtBtn: document.getElementById("lang-pt"),
  langEnBtn: document.getElementById("lang-en"),
  exchangeBtnStart: document.getElementById("exchangeBtnStart"),
  buyGamesBtn: document.getElementById("buyGamesBtn"),
  missionsBtn: document.getElementById("missionsBtn"),
  backToStartBtn: document.getElementById("backToStartBtn"),
  backToLoginBtn: document.getElementById("backToLoginBtn"),
  backToLoginFromStoreBtn: document.getElementById("backToLoginFromStoreBtn"),
  backToLoginFromMissionsBtn: document.getElementById(
    "backToLoginFromMissionsBtn"
  ),
  refinadoAmount: document.getElementById("refinadoAmount"),
  videoContainer: document.getElementById("videoContainer"),
  video: document.getElementById("boxVideo"),
  rewardScreen: document.getElementById("rewardScreen"),
  itemImg: document.getElementById("itemImg"),
  itemName: document.getElementById("itemName"),
  sellBtn: document.getElementById("sellBtn"),
  storeBtn: document.getElementById("storeBtn"),
  discardBtn: document.getElementById("discardBtn"),
  openBtn: document.getElementById("openBtn"),
  alertBox: document.getElementById("alertBox"),
  notificationSound: document.getElementById("notificationSound"),
  achievementSound: document.getElementById("achievementSound"),
  openCrateSound: document.getElementById("openCrateSound"),
  sellSound: document.getElementById("sellSound"),
  buttonClickSound: document.getElementById("buttonClickSound"), // Novo som
  buttonClickReleaseSound: document.getElementById("buttonClickReleaseSound"), // Novo som
  buyOitaoBtn: document.getElementById("buyOitao"),
  statsBoxesOpened: document.getElementById("statsBoxesOpened"),
  statsGoldenPans: document.getElementById("statsGoldenPans"),
  resetBtn: document.getElementById("resetBtn"),
  openBackpackBtn: document.getElementById("openBackpackBtn"),
  closeBackpackBtn: document.getElementById("closeBackpackBtn"),
  backpackModal: document.getElementById("backpackModal"),
  backpackGrid: document.getElementById("backpackGrid"),
  backpackPagination: document.getElementById("backpackPagination"),
  sellItemList: document.getElementById("sellItemList"),
  sellEmptyMessage: document.getElementById("sellEmptyMessage"),
  backgroundMusic: document.getElementById("backgroundMusic"),
  volumeBtn: document.getElementById("volumeBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  cloverShopItem: document.getElementById("cloverShopItem"),
  buyCloverBtn: document.getElementById("buyCloverBtn"),
  achievementsBtn: document.getElementById("achievementsBtn"),
  achievementsModal: document.getElementById("achievementsModal"),
  closeAchievementsBtn: document.getElementById("closeAchievementsBtn"),
  achievementsList: document.getElementById("achievementsList"),
  profileBtn: document.getElementById("profileBtn"),
  profileModal: document.getElementById("profileModal"),
  closeProfileBtn: document.getElementById("closeProfileBtn"),
  profileStoreBtn: document.getElementById("profileStoreBtn"),
  playerNameInput: document.getElementById("playerNameInput"),
  playerTitle: document.getElementById("playerTitle"),
  profileRefinados: document.getElementById("profileRefinados"),
  profileBoxes: document.getElementById("profileBoxes"),
  profilePans: document.getElementById("profilePans"),
  profileItems: document.getElementById("profileItems"),
  secretMenu: document.getElementById("secretMenu"),
  secretOptions: document.querySelector(".secret-options"),
  cheatBtn1: document.getElementById("cheatBtn1"),
  cheatBtn2: document.getElementById("cheatBtn2"),
  cheatBtn3: document.getElementById("cheatBtn3"),
  cheatBtn4: document.getElementById("cheatBtn4"),
  dropsList: document.getElementById("dropsList"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  exchangeScreenRefinados: document.getElementById("exchangeScreenRefinados"),
  exchangeScreenMoney: document.getElementById("exchangeScreenMoney"),
  exchangeScreenOneBtn: document.getElementById("exchangeScreenOneBtn"),
  exchangeScreenTenBtn: document.getElementById("exchangeScreenTenBtn"),
  exchangeScreenHundredBtn: document.getElementById("exchangeScreenHundredBtn"),
  steamStoreMoney: document.getElementById("steamStoreMoney"),
  steamGamesList: document.getElementById("steamGamesList"),
  soundConfigBtn: document.getElementById("soundConfigBtn"),
  soundConfigModal: document.getElementById("soundConfigModal"),
  closeSoundConfigBtn: document.getElementById("closeSoundConfigBtn"),
  notificationVolumeSlider: document.getElementById("notificationVolumeSlider"),
  musicVolumeSlider: document.getElementById("musicVolumeSlider"),
  crateVolumeSlider: document.getElementById("crateVolumeSlider"),
  missionsList: document.getElementById("missionsList"),
  duelScreen: document.getElementById("duelScreen"),
  duelModeBtn: document.getElementById("duelModeBtn"),
  backToLoginFromDuelBtn: document.getElementById("backToLoginFromDuelBtn"),
  duelSetup: document.getElementById("duelSetup"),
  duelInProgress: document.getElementById("duelInProgress"),
  duelCratesInput: document.getElementById("duelCratesInput"),
  startDuelBtn: document.getElementById("startDuelBtn"),
  playerDuelSide: document.getElementById("playerDuelSide"),
  botDuelSide: document.getElementById("botDuelSide"),
  playerNameDuel: document.getElementById("playerNameDuel"),
  playerDuelItems: document.getElementById("playerDuelItems"),
  botDuelItems: document.getElementById("botDuelItems"),
  playerDuelTotalValue: document.getElementById("playerDuelTotalValue"),
  botDuelTotalValue: document.getElementById("botDuelTotalValue"),
  duelResultScreen: document.getElementById("duelResultScreen"),
  duelResultTitle: document.getElementById("duelResultTitle"),
  duelResultDescription: document.getElementById("duelResultDescription"),
  playAgainDuelBtn: document.getElementById("playAgainDuelBtn"),
  duelCostDisplay: document.getElementById("duelCostDisplay"),
  skipDuelBtn: document.getElementById("skipDuelBtn"),
  profileStoreModal: document.getElementById("profileStoreModal"),
  closeProfileStoreBtn: document.getElementById("closeProfileStoreBtn"),
  titlesStoreList: document.getElementById("titlesStoreList"),
  profileAvatar: document.getElementById("profileAvatar"),
  hamburgerBtn: document.querySelector(".hamburger-menu"),
  sideNavPanel: document.querySelector(".side-nav-panel"),
  closeNavBtn: document.querySelector(".close-nav-btn"),
  exportSaveBtn: document.getElementById("exportSaveBtn"),
  importSaveBtn: document.getElementById("importSaveBtn"),
  importSaveInput: document.getElementById("importSaveInput"),
  creditsModal: document.getElementById("creditsModal"),
  endGameModal: document.getElementById("endGameModal"),
  restartGameBtn: document.getElementById("restartGameBtn"),
  termsBtn: document.getElementById("termsBtn"),
  termsModal: document.getElementById("termsModal"),
  closeTermsBtn: document.getElementById("closeTermsBtn"),
  navVerMochila: document.getElementById("navVerMochila"),
  navConquistas: document.getElementById("navConquistas"),
  navVerPerfil: document.getElementById("navVerPerfil"),
  navLojaPerfil: document.getElementById("navLojaPerfil"),
  navConfigSom: document.getElementById("navConfigSom"),
  navShopSellBtn: document.getElementById("navShopSellBtn"),
  shopSellModal: document.getElementById("shopSellModal"),
  closeShopSellBtn: document.getElementById("closeShopSellBtn"),
  rightColumn: document.getElementById("right-column"),
  rightColumnContentMobile: document.getElementById(
    "right-column-content-mobile"
  ),
  shop: document.getElementById("shop"),
  sellArea: document.getElementById("sellArea"),
};

// Nova função para tocar sons, respeitando o volume de notificação
function playSound(soundElement) {
  if (soundElement && DOM.notificationSound) {
    soundElement.currentTime = 0;
    soundElement.volume = DOM.notificationSound.volume;
    soundElement.play().catch((e) => {}); // Ignora erros se o áudio não puder tocar
  }
}

function showAlert(message) {
  if (DOM.alertBox) {
    DOM.alertBox.textContent = message;
    DOM.alertBox.classList.add("show");
    try {
      DOM.notificationSound?.play();
    } catch (e) {}
    setTimeout(() => DOM.alertBox.classList.remove("show"), 3000);
  }
}

function toggleModal(modal, show) {
  if (modal) {
    modal.classList.toggle("hidden", !show);
  }
}

function saveGame() {
  try {
    const saveData = {
      ...state,
      musicVolume: DOM.backgroundMusic?.volume ?? 0.5,
      musicMuted: DOM.backgroundMusic?.muted ?? false,
      notificationVolume: DOM.notificationSound?.volume ?? 0.5,
      crateVolume: DOM.openCrateSound?.volume ?? 0.5,
    };
    localStorage.setItem("tf2RoletaSave", JSON.stringify(saveData));
  } catch (e) {
    console.error("Erro ao salvar jogo:", e);
    showAlert("Erro ao salvar progresso!");
  }
}

function loadGame(dataToLoad = null) {
  try {
    let data;
    if (dataToLoad) {
      data = dataToLoad;
    } else {
      const savedData = localStorage.getItem("tf2RoletaSave");
      if (savedData) data = JSON.parse(savedData);
    }
    if (data) {
      state = {
        ...getInitialState(),
        ...data,
        stats: { ...getInitialState().stats, ...data.stats },
        missions: data.missions || getInitialState().missions,
      };
      if (!state.missions.find((m) => m.id === "GET_VALVE")) {
        state.missions.push(
          JSON.parse(JSON.stringify(MISSIONS.find((m) => m.id === "GET_VALVE")))
        );
      }
      if (DOM.backgroundMusic) {
        DOM.backgroundMusic.volume = data.musicVolume ?? 0.5;
        DOM.backgroundMusic.muted = data.musicMuted ?? false;
        DOM.musicVolumeSlider.value = DOM.backgroundMusic.volume * 100;
        DOM.volumeBtn.textContent = DOM.backgroundMusic.muted ? "🔇" : "🔊";
      }
      if (DOM.notificationSound) {
        DOM.notificationSound.volume = data.notificationVolume ?? 0.5;
        DOM.notificationVolumeSlider.value = DOM.notificationSound.volume * 100;
      }
      if (DOM.openCrateSound) {
        DOM.openCrateSound.volume = data.crateVolume ?? 0.5;
        DOM.crateVolumeSlider.value = DOM.openCrateSound.volume * 100;
      }
    }
    setLanguage(state.language || "pt");
  } catch (e) {
    console.error("Erro ao carregar jogo:", e);
    showAlert("Erro ao carregar progresso! Reiniciando.");
    state = getInitialState();
    setLanguage("pt");
  }
}

function setLanguage(lang) {
  state.language = lang;
  document.querySelectorAll("[data-lang-key]").forEach((el) => {
    const key = el.dataset.langKey;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {
    const key = el.dataset.langPlaceholder;
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  updateUI();
  saveGame();
}

function updateUI() {
  if (DOM.refinadoAmount) DOM.refinadoAmount.textContent = state.refinados;
  updateStats();
  renderSellArea();
  renderBackpack(state.backpackCurrentPage);
  updateCloverShop();
  updatePlayerTitle();
  checkMissions();
  updateMissions();
  if (DOM.openBtn)
    DOM.openBtn.disabled = state.isOpening || state.currentItem !== null;
}

function updateStats() {
  if (DOM.statsBoxesOpened)
    DOM.statsBoxesOpened.textContent = state.stats.boxesOpened;
  if (DOM.statsGoldenPans)
    DOM.statsGoldenPans.textContent = state.stats.goldenPans;
}

function updatePlayerTitle() {
  if (DOM.playerTitle) DOM.playerTitle.textContent = state.stats.playerTitle;
}

function renderProfile() {
  if (DOM.playerNameInput) DOM.playerNameInput.value = state.stats.playerName;
  if (DOM.playerTitle) DOM.playerTitle.textContent = state.stats.playerTitle;
  if (DOM.profileRefinados) DOM.profileRefinados.textContent = state.refinados;
  if (DOM.profileBoxes) DOM.profileBoxes.textContent = state.stats.boxesOpened;
  if (DOM.profilePans) DOM.profilePans.textContent = state.stats.goldenPans;
  if (DOM.profileItems)
    DOM.profileItems.textContent = state.mochilaItens.length;
}

function unlockAchievement(id) {
  if (!state.stats.unlockedAchievements.includes(id)) {
    state.stats.unlockedAchievements.push(id);
    const achievement = ACHIEVEMENTS[id];
    showAlert(
      `🏆 ${
        state.language === "pt"
          ? "Conquista Desbloqueada"
          : "Achievement Unlocked"
      }: ${achievement.title[state.language]}`
    );
    try {
      DOM.achievementSound?.play();
    } catch (e) {}
    saveGame();
  }
}

function checkAchievements() {
  if (state.stats.boxesOpened >= 1) unlockAchievement("PRIMEIRA_CAIXA");
  if (state.mochilaItens.some((item) => item.rarity === "raro"))
    unlockAchievement("PRIMEIRO_RARO");
  if (state.mochilaItens.some((item) => item.rarity === "ultrararo"))
    unlockAchievement("PRIMEIRO_ULTRARARO");
  if (state.mochilaItens.some((item) => item.name === "Golden Pan"))
    unlockAchievement("GOLDEN_PAN");
  if (state.mochilaItens.length >= 10) unlockAchievement("COLECIONADOR_10");
  if (state.mochilaItens.length >= 50) unlockAchievement("COLECIONADOR_50");
  if (state.refinados >= 10000) unlockAchievement("MAGNATA_10K");
  if (state.refinados >= 50000) unlockAchievement("MAGNATA_50K");
  if (state.mochilaItens.some((item) => item.name === "OitãoFoda"))
    unlockAchievement("COMPROU_OITAO");
}

function renderAchievements() {
  if (DOM.achievementsList) {
    DOM.achievementsList.innerHTML = "";
    const lang = state.language;
    for (const id in ACHIEVEMENTS) {
      const achievement = ACHIEVEMENTS[id];
      const div = document.createElement("div");
      div.className = `achievement ${
        state.stats.unlockedAchievements.includes(id) ? "unlocked" : ""
      }`;
      div.innerHTML = `<h4>${achievement.title[lang]}</h4><p>${achievement.description[lang]}</p>`;
      DOM.achievementsList.appendChild(div);
    }
  }
}

function updateMissions() {
  if (!DOM.missionsList) return;
  DOM.missionsList.innerHTML = "";
  const lang = state.language;
  state.missions.forEach((mission) => {
    const div = document.createElement("div");
    let progressText = `${translations[lang].progress || "Progresso"}: ${
      mission.progress > mission.goal ? mission.goal : mission.progress
    }/${mission.goal}`;
    if (mission.id === "GET_VALVE") {
      progressText = mission.completed
        ? lang === "pt"
          ? "Todos os requisitos foram cumpridos!"
          : "All requirements met!"
        : lang === "pt"
        ? "Requisitos pendentes."
        : "Pending requirements.";
    }
    div.className = `mission ${mission.completed ? "completed" : ""} ${
      mission.claimed ? "claimed" : ""
    }`;
    div.innerHTML = ` <h4>${mission.title[lang]}</h4> <p>${
      mission.description[lang]
    }</p> <p>${progressText}</p> <p>${
      lang === "pt" ? "Recompensa" : "Reward"
    }: ${
      mission.id === "GET_VALVE"
        ? lang === "pt"
          ? "Finalizar o Jogo"
          : "Finish the Game"
        : `${mission.reward} ${translations[lang].refined}`
    }</p> ${
      !mission.claimed
        ? `<button onclick="claimMission('${mission.id}')" ${
            !mission.completed ? "disabled" : ""
          }>${
            mission.completed
              ? lang === "pt"
                ? "Resgatar"
                : "Claim"
              : lang === "pt"
              ? "Em Progresso"
              : "In Progress"
          }</button>`
        : `<p>${
            lang === "pt" ? "Recompensa Resgatada!" : "Reward Claimed!"
          }</p>`
    }`;
    DOM.missionsList.appendChild(div);
  });
}

function checkValveMissionPrerequisites() {
  const otherMissions = state.missions.filter((m) => m.id !== "GET_VALVE");
  const allOtherMissionsClaimed = otherMissions.every((m) => m.claimed);
  const allAchievementsUnlocked =
    state.stats.unlockedAchievements.length >= Object.keys(ACHIEVEMENTS).length;
  const allGamesPurchased =
    state.stats.purchasedGames.length >= STEAM_GAMES.length;
  const uniqueItemNames = new Set(ITEMS.map((i) => i.name));
  const ownedUniqueItemNames = new Set(state.mochilaItens.map((i) => i.name));
  const allItemsFromCrates = [...uniqueItemNames].every((name) =>
    ownedUniqueItemNames.has(name)
  );
  const hasOitao = state.mochilaItens.some((i) => i.name === "OitãoFoda");
  const allTitlesPurchased =
    state.stats.purchasedTitles.length >= CUSTOM_STORE_ITEMS.length;
  return (
    allOtherMissionsClaimed &&
    allAchievementsUnlocked &&
    allGamesPurchased &&
    allItemsFromCrates &&
    hasOitao &&
    allTitlesPurchased
  );
}

function checkMissions() {
  state.missions.forEach((mission) => {
    if (mission.completed) return;
    switch (mission.id) {
      case "OPEN_5_BOXES":
        mission.progress = state.stats.boxesOpened;
        break;
      case "GET_GOLDEN_PAN":
        mission.progress = state.mochilaItens.filter(
          (item) => item.name === "Golden Pan"
        ).length;
        break;
      case "EARN_1000_REFINED":
        mission.progress = state.refinados;
        break;
      case "GET_VALVE":
        if (checkValveMissionPrerequisites()) mission.progress = 1;
        break;
    }
    if (mission.progress >= mission.goal) {
      mission.completed = true;
    }
  });
}

function claimMission(missionId) {
  playSound(DOM.buttonClickSound);
  const mission = state.missions.find((m) => m.id === missionId);
  const lang = state.language;
  if (mission && mission.completed && !mission.claimed) {
    if (mission.id === "GET_VALVE") {
      mission.claimed = true;
      showAlert(
        lang === "pt"
          ? "Parabéns! Você completou tudo. Aproveite o final!"
          : "Congratulations! You've completed everything. Enjoy the ending!"
      );
      playVideoWithOptions({
        src: "video.mp4",
        isValveEnding: true,
        callback: showEndSequence,
      });
      return;
    }
    state.refinados += mission.reward;
    mission.claimed = true;
    showAlert(
      `${lang === "pt" ? "Missão" : "Mission"} "${mission.title[lang]}" ${
        lang === "pt" ? "concluída" : "completed"
      }! ${lang === "pt" ? "Você ganhou" : "You earned"} ${mission.reward} ${
        lang === "pt" ? "refinados" : "refined"
      }!`
    );
    updateUI();
    saveGame();
  } else if (!mission.completed) {
    showAlert(
      lang === "pt"
        ? "Você ainda não completou esta missão!"
        : "You haven't completed this mission yet!"
    );
  } else if (mission.claimed) {
    showAlert(
      lang === "pt"
        ? "Você já resgatou a recompensa desta missão!"
        : "You have already claimed the reward for this mission!"
    );
  }
}

function showEndSequence() {
  toggleModal(DOM.creditsModal, true);
  setTimeout(() => {
    toggleModal(DOM.creditsModal, false);
    toggleModal(DOM.endGameModal, true);
  }, 8000);
}

function playVideoWithOptions({ src, callback, isValveEnding = false }) {
  if (!DOM.videoContainer || !DOM.video) {
    if (callback) callback();
    return;
  }
  DOM.videoContainer.classList.add("is-playing");
  DOM.video.src = src;
  DOM.video.currentTime = 0;
  DOM.video.style.display = "block";
  if (isValveEnding) {
    if (DOM.backgroundMusic) DOM.backgroundMusic.pause();
    DOM.video.volume = 1.0;
    DOM.video.muted = false;
  } else {
    if (DOM.backgroundMusic) {
      DOM.video.volume = DOM.backgroundMusic.volume;
      DOM.video.muted = DOM.backgroundMusic.muted;
    }
  }
  DOM.video.play().catch(() => {
    if (callback) callback();
  });
  const onVideoEnded = () => {
    DOM.videoContainer.classList.remove("is-playing");
    DOM.video.style.display = "none";
    DOM.video.removeEventListener("ended", onVideoEnded);
    if (callback) callback();
  };
  DOM.video.addEventListener("ended", onVideoEnded);
}

function getRandomItem() {
  const totalChance = ITEMS.reduce((sum, item) => sum + item.chance, 0);
  let roll = Math.random() * totalChance;
  if (state.hasClover && Math.random() < 0.2) {
    return ITEMS.find((item) => item.name === "Golden Pan");
  }
  for (const item of ITEMS) {
    roll -= item.chance;
    if (roll <= 0) return item;
  }
  return ITEMS[ITEMS.length - 1];
}

function showReward(item) {
  state.currentItem = item;
  if (DOM.itemImg) DOM.itemImg.src = item.src;
  if (DOM.itemName) {
    DOM.itemName.textContent = item.name;
    DOM.itemName.className = `rarity-${item.rarity}`;
  }
  if (DOM.rewardScreen) DOM.rewardScreen.classList.add("visible");

  addRecentDrop(item);
  showAlert(
    `${state.language === "pt" ? "Você recebeu" : "You received"}: ${
      item.name
    }!`
  );

  if (DOM.openBtn) DOM.openBtn.disabled = true;
}

function handleItemAction(action) {
  if (!state.currentItem) return;

  if (action === "sell") {
    playSound(DOM.sellSound); // Som específico de venda
  } else {
    playSound(DOM.buttonClickSound);
  }

  const item = state.currentItem;
  const lang = state.language;

  if (action === "sell" && typeof item.sell === "number") {
    state.refinados += item.sell;
    showAlert(
      `${lang === "pt" ? "Você vendeu" : "You sold"} ${item.name} ${
        lang === "pt" ? "por" : "for"
      } ${item.sell} ${lang === "pt" ? "refinados" : "refined"}!`
    );
  } else if (action === "store") {
    state.mochilaItens.push(item);
    showAlert(
      `${item.name} ${
        lang === "pt" ? "guardado na mochila" : "stored in backpack"
      }!`
    );
  } else if (action === "discard") {
    showAlert(
      `${lang === "pt" ? "Você descartou" : "You discarded"} ${item.name}.`
    );
  }

  if (item.name === "Golden Pan") {
    state.stats.goldenPans++;
  }
  checkAchievements();

  if (DOM.rewardScreen) DOM.rewardScreen.classList.remove("visible");
  state.currentItem = null;

  if (DOM.openBtn) DOM.openBtn.disabled = false;

  updateUI();
  saveGame();
}

function addRecentDrop(item) {
  if (DOM.dropsList) {
    const li = document.createElement("li");
    li.className = "drop-item";
    li.innerHTML = `<img src="${item.src}"><span>${item.name} (${item.rarity})</span>`;
    DOM.dropsList.prepend(li);
    if (DOM.dropsList.children.length > 10) {
      DOM.dropsList.removeChild(DOM.dropsList.lastChild);
    }
  }
}

function renderSellArea() {
  if (!DOM.sellItemList || !DOM.sellEmptyMessage) return;
  DOM.sellItemList.innerHTML = "";
  const sellableItems = state.mochilaItens
    .map((item, index) => ({ ...item, originalIndex: index }))
    .filter((item) => typeof item.sell === "number" && item.sell > 0);
  if (sellableItems.length === 0) {
    DOM.sellEmptyMessage.style.display = "block";
    DOM.sellItemList.style.display = "none";
  } else {
    DOM.sellEmptyMessage.style.display = "none";
    DOM.sellItemList.style.display = "grid";
    sellableItems.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "sell-item";
      itemDiv.innerHTML = `<img src="${item.src}"><span>${item.name} - ${
        item.sell
      } Ref</span><button>${translations[state.language].sell}</button>`;
      itemDiv.querySelector("button").onclick = () => {
        playSound(DOM.sellSound);
        state.refinados += item.sell;
        showAlert(
          `${state.language === "pt" ? "Você vendeu" : "You sold"} ${
            item.name
          } ${state.language === "pt" ? "por" : "for"} ${item.sell} ${
            state.language === "pt" ? "refinados" : "refined"
          }!`
        );
        state.mochilaItens.splice(item.originalIndex, 1);
        updateUI();
        saveGame();
      };
      DOM.sellItemList.appendChild(itemDiv);
    });
  }
}

function renderBackpack(page) {
  state.backpackCurrentPage = page;
  if (DOM.backpackGrid) {
    DOM.backpackGrid.innerHTML = "";
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const pageItems = state.mochilaItens.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
    for (let i = 0; i < ITEMS_PER_PAGE; i++) {
      const item = pageItems[i];
      const slot = document.createElement("div");
      slot.className = "backpack-slot";
      if (item) slot.innerHTML = `<img src="${item.src}" title="${item.name}">`;
      DOM.backpackGrid.appendChild(slot);
    }
    renderPagination();
  }
}

function renderPagination() {
  if (!DOM.backpackPagination) return;
  DOM.backpackPagination.innerHTML = "";
  const totalPages = Math.ceil(state.mochilaItens.length / ITEMS_PER_PAGE) || 1;
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.className = `pagination-btn ${
      i === state.backpackCurrentPage ? "active" : ""
    }`;
    pageBtn.textContent = i;
    pageBtn.onclick = () => {
      playSound(DOM.buttonClickSound);
      renderBackpack(i);
    };
    DOM.backpackPagination.appendChild(pageBtn);
  }
}

function playSong(index) {
  state.currentSongIndex =
    (index + BACKGROUND_PLAYLIST.length) % BACKGROUND_PLAYLIST.length;
  if (DOM.backgroundMusic) {
    DOM.backgroundMusic.src = BACKGROUND_PLAYLIST[state.currentSongIndex];
    DOM.backgroundMusic.play().catch(() => {});
  }
}

function renderSteamStore() {
  if (!DOM.steamGamesList || !DOM.steamStoreMoney) return;
  DOM.steamStoreMoney.textContent = `R$ ${state.money.toFixed(2)}`;
  DOM.steamGamesList.innerHTML = "";
  STEAM_GAMES.forEach((game) => {
    const gameOwned = state.stats.purchasedGames.includes(game.id);
    const gameItem = document.createElement("div");
    gameItem.className = "game-item";
    gameItem.innerHTML = ` <img src="${game.cover}" alt="${
      game.name
    }"> <p class="game-name">${
      game.name
    }</p> <p class="game-price">R$ ${game.price.toFixed(
      2
    )}</p> <button class="buy-game-btn" id="buy-${game.id}" ${
      gameOwned ? "disabled" : ""
    }> ${
      gameOwned
        ? state.language === "pt"
          ? "Na Biblioteca"
          : "In Library"
        : state.language === "pt"
        ? "Comprar"
        : "Buy"
    } </button>`;
    DOM.steamGamesList.appendChild(gameItem);
    if (!gameOwned) {
      document
        .getElementById(`buy-${game.id}`)
        ?.addEventListener("click", () => {
          playSound(DOM.buttonClickSound);
          buySteamGame(game);
        });
    }
  });
}

function buySteamGame(game) {
  if (state.money >= game.price) {
    state.money -= game.price;
    state.stats.purchasedGames.push(game.id);
    showAlert(
      `${state.language === "pt" ? "Você comprou" : "You bought"} ${game.name}!`
    );
    saveGame();
    renderSteamStore();
  } else {
    showAlert(
      state.language === "pt" ? "Dinheiro insuficiente." : "Insufficient funds."
    );
  }
}

function updateExchangeScreenUI() {
  if (DOM.exchangeScreenRefinados)
    DOM.exchangeScreenRefinados.textContent = state.refinados;
  if (DOM.exchangeScreenMoney)
    DOM.exchangeScreenMoney.textContent = `R$ ${state.money.toFixed(2)}`;
}

function performExchangeOnScreen(refinedCost, moneyValue) {
  playSound(DOM.buttonClickSound);
  if (state.refinados >= refinedCost) {
    state.refinados -= refinedCost;
    state.money += moneyValue;
    showAlert(
      state.language === "pt" ? "Troca realizada!" : "Exchange successful!"
    );
    updateExchangeScreenUI();
    updateUI();
    saveGame();
  } else {
    showAlert(
      state.language === "pt"
        ? "Refinados insuficientes!"
        : "Insufficient refined!"
    );
  }
}

function updateCloverShop() {
  if (!DOM.cloverShopItem) return;
  if (state.hasClover) {
    DOM.cloverShopItem.style.display = "none";
  } else {
    DOM.cloverShopItem.style.display = "flex";
  }
}

function buyClover() {
  playSound(DOM.buttonClickSound);
  if (state.refinados >= 15000) {
    state.refinados -= 15000;
    state.hasClover = true;
    showAlert(
      state.language === "pt"
        ? "Trevo Dourado comprado! Chance de Golden Pan aumentada!"
        : "Golden Clover purchased! Increased chance for a Golden Pan!"
    );
    updateUI();
    saveGame();
  } else {
    showAlert(
      state.language === "pt"
        ? "Refinados insuficientes!"
        : "Insufficient refined!"
    );
  }
}

function calculateDuelCost(crates) {
  if (isNaN(crates) || crates <= 0) return { total: 0, discount: false };
  const baseCost = crates * 120;
  let finalCost = baseCost;
  let hasDiscount = false;
  if (crates >= 5) {
    finalCost = Math.ceil(baseCost * 0.95);
    hasDiscount = true;
  }
  return { total: finalCost, discount: hasDiscount };
}

function updateDuelCostUI() {
  if (!DOM.duelCratesInput || !DOM.duelCostDisplay) return;
  const crates = parseInt(DOM.duelCratesInput.value) || 0;
  const costInfo = calculateDuelCost(crates);
  let displayText = `${state.language === "pt" ? "Custo" : "Cost"}: ${
    costInfo.total
  } ${state.language === "pt" ? "Refinados" : "Refined"}`;
  if (costInfo.discount)
    displayText += ` (${
      state.language === "pt" ? "5% de desconto!" : "5% off!"
    })`;
  DOM.duelCostDisplay.textContent = displayText;
  DOM.duelCostDisplay.style.color =
    state.refinados >= costInfo.total ? "#a1dd48" : "#dc3545";
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function resetDuelState() {
  state.duel = getInitialState().duel;
  DOM.skipDuelBtn?.classList.add("hidden");
  DOM.duelSetup?.classList.remove("hidden");
  DOM.duelInProgress?.classList.add("hidden");
  DOM.duelResultScreen?.classList.add("hidden");
  if (DOM.playerDuelItems) DOM.playerDuelItems.innerHTML = "";
  if (DOM.botDuelItems) DOM.botDuelItems.innerHTML = "";
  if (DOM.playerDuelTotalValue) DOM.playerDuelTotalValue.textContent = "0";
  if (DOM.botDuelTotalValue) DOM.botDuelTotalValue.textContent = "0";
  if (DOM.startDuelBtn) DOM.startDuelBtn.disabled = false;
  DOM.playerDuelSide?.classList.remove("winner-item");
  DOM.botDuelSide?.classList.remove("winner-item");
}

function renderDuelItem(item, side) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "duel-item";
  itemDiv.innerHTML = `<img src="${item.src}" title="${item.name} - Valor: ${item.sell}">`;
  if (side === "player" && DOM.playerDuelItems)
    DOM.playerDuelItems.appendChild(itemDiv);
  else if (side === "bot" && DOM.botDuelItems)
    DOM.botDuelItems.appendChild(itemDiv);
}

function determineDuelWinner() {
  let winner = "draw";
  if (state.duel.playerTotalValue > state.duel.botTotalValue) winner = "player";
  else if (state.duel.botTotalValue > state.duel.playerTotalValue)
    winner = "bot";
  DOM.duelResultScreen?.classList.remove("hidden", "winner", "loser");
  const lang = state.language;
  if (winner === "player") {
    const allItems = [...state.duel.playerItems, ...state.duel.botItems];
    state.mochilaItens.push(...allItems);
    DOM.duelResultTitle.textContent = lang === "pt" ? "VITÓRIA!" : "VICTORY!";
    DOM.duelResultDescription.textContent = `${
      lang === "pt" ? "Você ganhou todos os" : "You won all"
    } ${allItems.length} ${lang === "pt" ? "itens" : "items"}!`;
    DOM.duelResultScreen.classList.add("winner");
    DOM.playerDuelSide.classList.add("winner-item");
  } else if (winner === "bot") {
    DOM.duelResultTitle.textContent = lang === "pt" ? "DERROTA!" : "DEFEAT!";
    DOM.duelResultDescription.textContent =
      lang === "pt"
        ? "O bot levou todos os itens."
        : "The bot took all the items.";
    DOM.duelResultScreen.classList.add("loser");
    DOM.botDuelSide.classList.add("winner-item");
  } else {
    state.mochilaItens.push(...state.duel.playerItems);
    DOM.duelResultTitle.textContent = lang === "pt" ? "EMPATE!" : "DRAW!";
    DOM.duelResultDescription.textContent =
      lang === "pt"
        ? "Você recebeu seus itens de volta."
        : "You got your items back.";
  }
  updateUI();
  saveGame();
}

async function startDuel() {
  const cratesToOpen = parseInt(DOM.duelCratesInput.value);
  const lang = state.language;
  if (isNaN(cratesToOpen) || cratesToOpen <= 0)
    return showAlert(
      lang === "pt"
        ? "Insira um número válido de caixas."
        : "Please enter a valid number of crates."
    );
  const totalCost = calculateDuelCost(cratesToOpen).total;
  if (state.refinados < totalCost)
    return showAlert(
      lang === "pt" ? "Refinados insuficientes!" : "Insufficient refined!"
    );
  state.refinados -= totalCost;
  showAlert(
    `${
      lang === "pt" ? "Duelo iniciado! Custo" : "Duel started! Cost"
    }: ${totalCost} ${lang === "pt" ? "refinados" : "refined"}.`
  );
  updateUI();
  resetDuelState();
  state.duel.isActive = true;
  state.duel.cratesToOpen = cratesToOpen;
  DOM.startDuelBtn.disabled = true;
  DOM.duelSetup.classList.add("hidden");
  DOM.duelInProgress.classList.remove("hidden");
  DOM.playerNameDuel.textContent =
    state.stats.playerName || (lang === "pt" ? "Seus Itens" : "Your Items");
  if (cratesToOpen >= 10) DOM.skipDuelBtn.classList.remove("hidden");
  for (let i = 0; i < cratesToOpen; i++) {
    if (state.duel.isSkipping) {
      showAlert(
        lang === "pt"
          ? "Pulando para o resultado..."
          : "Skipping to the result..."
      );
      const remaining = cratesToOpen - i;
      for (let j = 0; j < remaining; j++) {
        const pItem = getRandomItem();
        const bItem = getRandomItem();
        state.duel.playerItems.push(pItem);
        state.duel.botItems.push(bItem);
        state.duel.playerTotalValue += pItem.sell;
        state.duel.botTotalValue += bItem.sell;
      }
      DOM.playerDuelItems.innerHTML = "";
      state.duel.playerItems.forEach((item) => renderDuelItem(item, "player"));
      DOM.botDuelItems.innerHTML = "";
      state.duel.botItems.forEach((item) => renderDuelItem(item, "bot"));
      DOM.playerDuelTotalValue.textContent = state.duel.playerTotalValue;
      DOM.botDuelTotalValue.textContent = state.duel.botTotalValue;
      break;
    }
    const playerItem = getRandomItem();
    const botItem = getRandomItem();
    state.duel.playerItems.push(playerItem);
    state.duel.botItems.push(botItem);
    state.duel.playerTotalValue += playerItem.sell;
    state.duel.botTotalValue += botItem.sell;
    renderDuelItem(playerItem, "player");
    renderDuelItem(botItem, "bot");
    DOM.playerDuelTotalValue.textContent = state.duel.playerTotalValue;
    DOM.botDuelTotalValue.textContent = state.duel.botTotalValue;
    await delay(500);
  }
  DOM.skipDuelBtn.classList.add("hidden");
  determineDuelWinner();
}

function renderProfileStore() {
  if (!DOM.titlesStoreList) return;
  DOM.titlesStoreList.innerHTML = "";
  CUSTOM_STORE_ITEMS.forEach((item) => {
    DOM.titlesStoreList.appendChild(createStoreItemElement(item, "title"));
  });
}

function createStoreItemElement(item, type) {
  const lang = state.language;
  const isPurchased = state.stats.purchasedTitles.includes(item.id);
  const isEquipped = state.stats.playerTitle === item.name[lang];
  const div = document.createElement("div");
  div.className = "store-item";
  let buttonHtml = `<button id="buy-${item.id}">${translations[lang].buy}</button>`;
  if (isPurchased) {
    buttonHtml = `<button id="equip-${item.id}" ${
      isEquipped ? "disabled" : ""
    }>${
      isEquipped
        ? lang === "pt"
          ? "Equipado"
          : "Equipped"
        : lang === "pt"
        ? "Equipar"
        : "Equip"
    }</button>`;
  }
  div.innerHTML = ` <h4>${item.name[lang]}</h4> <p>${
    item.description[lang]
  }</p> <p class="cost">${lang === "pt" ? "Custo" : "Cost"}: ${item.cost} ${
    translations[lang].refined
  }</p> ${buttonHtml}`;
  if (isPurchased) {
    if (!isEquipped)
      div.querySelector("button").addEventListener("click", () => {
        playSound(DOM.buttonClickSound);
        equipTitle(item.name[lang]);
      });
  } else {
    div.querySelector("button").addEventListener("click", () => {
      playSound(DOM.buttonClickSound);
      buyStoreItem(item, type);
    });
  }
  return div;
}

function equipTitle(titleName) {
  state.stats.playerTitle = titleName;
  showAlert(
    `${
      state.language === "pt"
        ? "Você equipou o título"
        : "You equipped the title"
    } ${titleName}!`
  );
  updateUI();
  saveGame();
  renderProfileStore();
}

function buyStoreItem(item, type) {
  const lang = state.language;
  if (state.stats.purchasedTitles.includes(item.id)) {
    showAlert(
      lang === "pt"
        ? "Você já comprou este item!"
        : "You have already purchased this item!"
    );
    return;
  }
  if (state.refinados >= item.cost) {
    state.refinados -= item.cost;
    if (type === "title") {
      state.stats.purchasedTitles.push(item.id);
      equipTitle(item.name[lang]);
    }
    showAlert(
      `${lang === "pt" ? "Você comprou o título" : "You bought the title"} ${
        item.name[lang]
      }!`
    );
    updateUI();
    saveGame();
    renderProfileStore();
  } else {
    showAlert(
      lang === "pt" ? "Refinados insuficientes!" : "Insufficient refined!"
    );
  }
}

function showScreen(screenToShow) {
  [
    DOM.loginScreen,
    DOM.gameContainer,
    DOM.exchangeScreen,
    DOM.steamStoreScreen,
    DOM.missionsScreen,
    DOM.duelScreen,
  ].forEach((screen) => screen?.classList.add("hidden"));
  screenToShow?.classList.remove("hidden");
}

function cheatAddRefined() {
  state.refinados += 100000;
  updateUI();
  saveGame();
  showAlert("Cheat: 100.000 Refinados adicionados!");
}

function cheatAddGoldenPan() {
  const goldenPan = ITEMS.find((item) => item.name === "Golden Pan");
  if (goldenPan) {
    showReward(goldenPan);
    showAlert("Cheat: Golden Pan adicionada!");
  }
}

function cheatAddMoney() {
  state.money += 500;
  updateUI();
  updateExchangeScreenUI();
  if (
    DOM.steamStoreScreen &&
    !DOM.steamStoreScreen.classList.contains("hidden")
  ) {
    renderSteamStore();
  }
  saveGame();
  showAlert("Cheat: R$ 500,00 adicionados!");
}

function exportSave() {
  try {
    const saveData = {
      ...state,
      musicVolume: DOM.backgroundMusic?.volume ?? 0.5,
      musicMuted: DOM.backgroundMusic?.muted ?? false,
      notificationVolume: DOM.notificationSound?.volume ?? 0.5,
      crateVolume: DOM.openCrateSound?.volume ?? 0.5,
    };
    const jsonString = JSON.stringify(saveData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tf2_save.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showAlert(
      state.language === "pt"
        ? "Save exportado como tf2_save.json!"
        : "Save exported as tf2_save.json!"
    );
  } catch (e) {
    console.error("Erro ao exportar save:", e);
    showAlert(
      state.language === "pt"
        ? "Falha ao exportar o save."
        : "Failed to export save."
    );
  }
}

function handleImportedSave(fileContent) {
  try {
    const data = JSON.parse(fileContent);
    if (data && typeof data.refinados !== "undefined" && data.stats) {
      loadGame(data);
      saveGame();
      showAlert(
        state.language === "pt"
          ? "Save importado com sucesso!"
          : "Save imported successfully!"
      );
    } else {
      showAlert(
        state.language === "pt"
          ? "Erro: Arquivo de save inválido."
          : "Error: Invalid save file."
      );
    }
  } catch (e) {
    console.error("Erro ao importar save:", e);
    showAlert(
      state.language === "pt"
        ? "Erro: Arquivo de save corrompido ou inválido."
        : "Error: Corrupted or invalid save file."
    );
  }
}

let isResetting = false;
let resetTimeout;

function handleResize() {
  const isMobile = window.matchMedia("(max-width: 900px)").matches;
  if (isMobile) {
    if (DOM.shop.parentElement !== DOM.rightColumnContentMobile) {
      DOM.rightColumnContentMobile.appendChild(DOM.shop);
      DOM.rightColumnContentMobile.appendChild(DOM.sellArea);
    }
  } else {
    if (DOM.shop.parentElement !== DOM.rightColumn) {
      DOM.rightColumn.appendChild(DOM.shop);
      DOM.rightColumn.appendChild(DOM.sellArea);
    }
  }
}

function setupEventListeners() {
  // Adiciona som a cada botão
  DOM.loginBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    showScreen(DOM.gameContainer);
    if (DOM.backgroundMusic?.paused && !DOM.backgroundMusic.muted)
      playSong(state.currentSongIndex);
  });
  DOM.languageBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    toggleModal(DOM.languageModal, true);
  });
  DOM.langPtBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    setLanguage("pt");
    toggleModal(DOM.languageModal, false);
    showAlert("Idioma alterado para Português.");
  });
  DOM.langEnBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    setLanguage("en");
    toggleModal(DOM.languageModal, false);
    showAlert("Language changed to English.");
  });
  DOM.termsBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    toggleModal(DOM.termsModal, true);
  });
  DOM.closeTermsBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    toggleModal(DOM.termsModal, false);
  });
  DOM.hamburgerBtn?.addEventListener("click", (e) => {
    playSound(DOM.buttonClickSound);
    e.stopPropagation();
    DOM.sideNavPanel.classList.add("is-open");
  });
  DOM.closeNavBtn?.addEventListener("click", (e) => {
    playSound(DOM.buttonClickReleaseSound);
    e.stopPropagation();
    DOM.sideNavPanel.classList.remove("is-open");
  });
  const closeNav = () => DOM.sideNavPanel.classList.remove("is-open");
  DOM.navVerMochila?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    renderBackpack(1);
    toggleModal(DOM.backpackModal, true);
    closeNav();
  });
  DOM.navConquistas?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    renderAchievements();
    toggleModal(DOM.achievementsModal, true);
    closeNav();
  });
  DOM.navVerPerfil?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    renderProfile();
    toggleModal(DOM.profileModal, true);
    closeNav();
  });
  DOM.navLojaPerfil?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    renderProfileStore();
    toggleModal(DOM.profileStoreModal, true);
    closeNav();
  });
  DOM.navConfigSom?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    toggleModal(DOM.soundConfigModal, true);
    closeNav();
  });
  DOM.navShopSellBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    toggleModal(DOM.shopSellModal, true);
    closeNav();
  });
  DOM.closeShopSellBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    toggleModal(DOM.shopSellModal, false);
  });
  DOM.restartGameBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    localStorage.clear();
    window.location.reload();
  });
  DOM.exchangeBtnStart?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    updateExchangeScreenUI();
    showScreen(DOM.exchangeScreen);
  });
  DOM.buyGamesBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    renderSteamStore();
    showScreen(DOM.steamStoreScreen);
  });
  DOM.missionsBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    updateUI();
    showScreen(DOM.missionsScreen);
  });
  DOM.duelModeBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    resetDuelState();
    updateDuelCostUI();
    showScreen(DOM.duelScreen);
  });
  DOM.duelCratesInput?.addEventListener("input", updateDuelCostUI);
  DOM.startDuelBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    startDuel();
  });
  DOM.playAgainDuelBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    resetDuelState();
  });
  DOM.skipDuelBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    if (state.duel.isActive) {
      state.duel.isSkipping = true;
      DOM.skipDuelBtn.classList.add("hidden");
    }
  });
  DOM.backToStartBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    showScreen(DOM.loginScreen);
    if (DOM.backgroundMusic) DOM.backgroundMusic.pause();
  });
  DOM.backToLoginBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    showScreen(DOM.loginScreen);
  });
  DOM.backToLoginFromStoreBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    showScreen(DOM.loginScreen);
  });
  DOM.backToLoginFromMissionsBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    showScreen(DOM.loginScreen);
  });
  DOM.backToLoginFromDuelBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    showScreen(DOM.loginScreen);
  });
  DOM.exchangeScreenOneBtn?.addEventListener("click", () =>
    performExchangeOnScreen(1, 0.01)
  );
  DOM.exchangeScreenTenBtn?.addEventListener("click", () =>
    performExchangeOnScreen(10, 0.1)
  );
  DOM.exchangeScreenHundredBtn?.addEventListener("click", () =>
    performExchangeOnScreen(100, 1.0)
  );
  DOM.soundConfigBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    toggleModal(DOM.soundConfigModal, true);
  });
  DOM.closeSoundConfigBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    toggleModal(DOM.soundConfigModal, false);
  });
  DOM.musicVolumeSlider?.addEventListener("input", () => {
    if (DOM.backgroundMusic) {
      DOM.backgroundMusic.volume = DOM.musicVolumeSlider.value / 100;
      DOM.backgroundMusic.muted = DOM.backgroundMusic.volume <= 0;
      DOM.volumeBtn.textContent = DOM.backgroundMusic.muted ? "🔇" : "🔊";
      if (DOM.video) DOM.video.volume = DOM.backgroundMusic.volume;
      saveGame();
    }
  });
  DOM.notificationVolumeSlider?.addEventListener("input", () => {
    if (DOM.notificationSound) {
      DOM.notificationSound.volume = DOM.notificationVolumeSlider.value / 100;
      saveGame();
    }
  });
  DOM.crateVolumeSlider?.addEventListener("input", () => {
    if (DOM.openCrateSound) {
      DOM.openCrateSound.volume = DOM.crateVolumeSlider.value / 100;
      saveGame();
    }
  });
  DOM.volumeBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    if (DOM.backgroundMusic) {
      DOM.backgroundMusic.muted = !DOM.backgroundMusic.muted;
      DOM.volumeBtn.textContent = DOM.backgroundMusic.muted ? "🔇" : "🔊";
      if (DOM.video) DOM.video.muted = DOM.backgroundMusic.muted;
      saveGame();
    }
  });
  DOM.nextBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    playSong(state.currentSongIndex + 1);
  });
  DOM.prevBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    playSong(state.currentSongIndex - 1);
  });
  DOM.backgroundMusic?.addEventListener("ended", () =>
    playSong(state.currentSongIndex + 1)
  );
  DOM.openBackpackBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    renderBackpack(1);
    toggleModal(DOM.backpackModal, true);
  });
  DOM.closeBackpackBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    toggleModal(DOM.backpackModal, false);
  });
  DOM.achievementsBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    renderAchievements();
    toggleModal(DOM.achievementsModal, true);
  });
  DOM.closeAchievementsBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    toggleModal(DOM.achievementsModal, false);
  });
  DOM.profileBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    renderProfile();
    toggleModal(DOM.profileModal, true);
  });
  DOM.closeProfileBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    toggleModal(DOM.profileModal, false);
  });
  DOM.profileStoreBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    renderProfileStore();
    toggleModal(DOM.profileStoreModal, true);
  });
  DOM.closeProfileStoreBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    toggleModal(DOM.profileStoreModal, false);
  });
  DOM.playerNameInput?.addEventListener("input", () => {
    state.stats.playerName = DOM.playerNameInput.value;
    const isSecret = DOM.playerNameInput.value.toLowerCase() === "secret gold";
    if (DOM.secretMenu)
      DOM.secretMenu.style.display = isSecret ? "block" : "none";
    if (DOM.secretOptions)
      DOM.secretOptions.style.display = isSecret ? "flex" : "none";
    if (isSecret) showAlert("Modo de Cheats Ativado! (Teclas P, K, O)");
    saveGame();
  });
  DOM.cheatBtn1?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    cheatAddRefined();
  });
  DOM.cheatBtn2?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    cheatAddGoldenPan();
  });
  DOM.cheatBtn3?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    cheatAddMoney();
  });
  DOM.cheatBtn4?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    ITEMS.forEach((item) => state.mochilaItens.push({ ...item }));
    updateUI();
    saveGame();
    showAlert("Todos os itens foram adicionados!");
  });
  DOM.openBtn?.addEventListener("click", () => {
    if (state.isOpening || state.currentItem !== null) return;
    state.isOpening = true;
    state.stats.boxesOpened++;
    try {
      DOM.openCrateSound?.play();
    } catch (e) {}
    playVideoWithOptions({
      src: "caixa.mp4",
      callback: () => {
        const item = getRandomItem();
        showReward(item);
        state.isOpening = false;
      },
    });
  });
  DOM.sellBtn?.addEventListener("click", () => handleItemAction("sell"));
  DOM.storeBtn?.addEventListener("click", () => handleItemAction("store"));
  DOM.discardBtn?.addEventListener("click", () => handleItemAction("discard"));
  DOM.buyCloverBtn?.addEventListener("click", buyClover);
  DOM.buyOitaoBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    if (state.refinados >= 3000) {
      state.refinados -= 3000;
      const oitao = {
        name: "OitãoFoda",
        src: "oitão.png",
        sell: 0,
        rarity: "raro",
      };
      showReward(oitao);
      showAlert("Você comprou OitãoFoda, Parabéns!");
    } else {
      showAlert(
        state.language === "pt"
          ? "Refinados insuficientes!"
          : "Insufficient refined!"
      );
    }
  });
  DOM.clearHistoryBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    if (DOM.dropsList) {
      DOM.dropsList.innerHTML = "";
      showAlert(
        state.language === "pt"
          ? "O histórico de drops recentes foi limpo."
          : "Recent drops history has been cleared."
      );
    }
  });
  DOM.resetBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickReleaseSound);
    const lang = state.language;
    if (!isResetting) {
      isResetting = true;
      DOM.resetBtn.textContent =
        lang === "pt"
          ? "TEM CERTEZA? CLIQUE DE NOVO"
          : "ARE YOU SURE? CLICK AGAIN";
      DOM.resetBtn.classList.add("confirm-delete");
      resetTimeout = setTimeout(() => {
        isResetting = false;
        DOM.resetBtn.textContent = translations[lang].resetProgress;
        DOM.resetBtn.classList.remove("confirm-delete");
      }, 5000);
    } else {
      clearTimeout(resetTimeout);
      state = getInitialState();
      state.language = lang;
      saveGame();
      setLanguage(lang);
      showAlert(
        lang === "pt"
          ? "Progresso reiniciado com sucesso!"
          : "Progress reset successfully!"
      );
      isResetting = false;
    }
  });
  DOM.exportSaveBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    exportSave();
  });
  DOM.importSaveBtn?.addEventListener("click", () => {
    playSound(DOM.buttonClickSound);
    DOM.importSaveInput?.click();
  });
  DOM.importSaveInput?.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => handleImportedSave(e.target.result);
    reader.readAsText(file);
    event.target.value = "";
  });
  document.addEventListener("keydown", (event) => {
    if (
      state.stats.playerName.toLowerCase() !== "secret gold" ||
      event.target.tagName === "INPUT"
    )
      return;
    switch (event.key.toLowerCase()) {
      case "p":
        event.preventDefault();
        cheatAddRefined();
        break;
      case "k":
        event.preventDefault();
        cheatAddGoldenPan();
        break;
      case "o":
        event.preventDefault();
        cheatAddMoney();
        break;
    }
  });
  window.addEventListener("resize", handleResize);
}

document.addEventListener("DOMContentLoaded", () => {
  loadGame();
  if (DOM.video) DOM.video.style.display = "none";
  setupEventListeners();
  handleResize();
  document.body.addEventListener(
    "click",
    () => {
      if (DOM.backgroundMusic?.paused && !DOM.backgroundMusic.muted) {
        playSong(state.currentSongIndex);
      }
    },
    { once: true }
  );
});

window.claimMission = claimMission;