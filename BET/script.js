document.addEventListener("DOMContentLoaded", () => {
  // --- SELETORES GERAIS DO DOM ---
  const upgraderView = document.getElementById("upgrader-view");
  const marketplaceView = document.getElementById("marketplace-view");
  const minesView = document.getElementById("mines-view");
  const upgraderNavLink = document.getElementById("upgrader-nav-link");
  const marketplaceNavLink = document.getElementById("marketplace-nav-link");
  const minesNavLink = document.getElementById("mines-nav-link");
  const userNameDisplay = document.getElementById("user-name");
  const userAvatarDisplay = document.getElementById("user-avatar");
  const userBalanceDisplay = document.getElementById("user-balance-display");
  const volumeBtn = document.getElementById("volume-control-btn");
  const backgroundMusic = document.getElementById("background-music");
  const siteInventoryGrid = document.getElementById("site-inventory-grid");
  const upgradeItemGrid = document.getElementById("upgrade-item-grid");
  const playerUpgradeSlot = document.getElementById("player-upgrade-slot");
  const targetUpgradeSlot = document.getElementById("target-upgrade-slot");
  const playerUpgradeValueDisplay = document.getElementById(
    "player-upgrade-value"
  );
  const targetUpgradeValueDisplay = document.getElementById(
    "target-upgrade-value"
  );
  const chanceDisplay = document.getElementById("chance-percentage-display");
  const chanceCircle = document.querySelector(".chance-circle");
  const upgradeBtn = document.getElementById("upgrade-btn");
  const clearPlayerBetBtn = document.getElementById("clear-player-bet-btn");
  const balanceBetInput = document.getElementById("balance-bet-input");
  const addBalanceToBetBtn = document.getElementById("add-balance-to-bet-btn");
  const spinnerContainer = document.querySelector(".spinner-container");
  const marketplaceInventoryGrid = document.getElementById(
    "marketplace-inventory-grid"
  );
  const marketplaceSellSlot = document.getElementById("marketplace-sell-slot");
  const marketplaceSellValue = document.getElementById(
    "marketplace-sell-value"
  );
  const confirmSellBtn = document.getElementById("confirm-sell-btn");
  const allModals = document.querySelectorAll(".modal-overlay");
  const depositModal = document.getElementById("deposit-modal");
  const depositItemsModal = document.getElementById("deposit-items-modal");
  const tf2DepositOption = document.getElementById("tf2-deposit-option");
  const depositInventoryGrid = document.getElementById(
    "deposit-inventory-grid"
  );
  const confirmDepositBtn = document.getElementById("confirm-deposit-btn");
  const profileModal = document.getElementById("profile-creation-modal");
  const saveProfileBtn = document.getElementById("save-profile-btn");
  const withdrawBtn = document.getElementById("withdraw-btn");
  const withdrawModal = document.getElementById("withdraw-modal");
  const withdrawInventoryGrid = document.getElementById(
    "withdraw-inventory-grid"
  );
  const confirmWithdrawBtn = document.getElementById("confirm-withdraw-btn");
  const avatarUploadInput = document.getElementById("avatar-upload-input");
  const avatarPreview = document.getElementById("avatar-preview");
  const winFeed = document.querySelector(".win-feed");
  const referralCodeInput = document.getElementById("referral-code-input");
  const applyReferralBtn = document.getElementById("apply-referral-btn");
  const minesBetAmountInput = document.getElementById("mines-bet-amount");
  const minesCountInput = document.getElementById("mines-count");
  const minesGridContainer = document.getElementById("mines-grid-container");
  const minesStartGameBtn = document.getElementById("mines-start-game-btn");
  const gemsFoundDisplay = document.getElementById("gems-found");
  const nextMultiplierDisplay = document.getElementById("next-multiplier");
  const secretCodeInput = document.getElementById("secret-code-input");
  const applySecretCodeBtn = document.getElementById("apply-secret-code-btn");

  // --- ESTADO PADRÃO DA APLICAÇÃO ---
  const getDefaultState = () => ({
    user: {
      name: "Player",
      balance: 0,
      avatar: "https://i.imgur.com/sKMd2Rk.png",
    },
    misc: {
      musicPlaying: false,
      isUpgrading: false,
      referralCodeUsed: false,
      secretCodeClaimed: false,
    },
    inventories: {
      site: [],
      external: [
        {
          id: 1001,
          name: "Mann Co. Key",
          price: 2.36,
          img: "90px-Backpack_Mann_Co._Supply_Crate_Key.png",
        },
        {
          id: 1002,
          name: "Tour of Duty Ticket",
          price: 0.89,
          img: "250px-Backpack_Tour_of_Duty_Ticket.png",
        },
        ...Array(12)
          .fill(null)
          .map((_, i) => ({
            id: 2000 + i,
            name: "Refined Metal",
            price: 0.03,
            img: "Backpack_Refined_Metal.png",
          })),
      ],
      upgrade: [
        ...Array(5)
          .fill(null)
          .map((_, i) => ({
            id: 8000 + i,
            name: "2 Coins",
            price: 2,
            img: "2ccoins.png",
          })),
        ...Array(3)
          .fill(null)
          .map((_, i) => ({
            id: 7000 + i,
            name: "10 Coins",
            price: 10,
            img: "2coins.png",
          })),
        ...Array(5)
          .fill(null)
          .map((_, i) => ({
            id: 6000 + i,
            name: "Strange Surgical Survivalist",
            price: 0.3,
            img: "StrangeSurgicalSurvivalist.png",
          })),
        ...Array(5)
          .fill(null)
          .map((_, i) => ({
            id: 5000 + i,
            name: "KS Apoco-Fists Kit",
            price: 0.26,
            img: "Non-CraftableKillstreakApoco-FistsKit.png",
          })),
        {
          id: 101,
          name: "unusual napper's respite",
          price: 5,
          img: "90px-Backpack_Napper's_Respite.png",
        },
        {
          id: 102,
          name: "Strange Duck Billed Hatypus",
          price: 13.1,
          img: "90px-Backpack_Duck_Billed_Hatypus.png",
        },
        {
          id: 103,
          name: "Max's Severed Head",
          price: 54,
          img: "90px-Backpack_Max's_Severed_Head.png",
        },
        {
          id: 104,
          name: "Golden Frying Pan",
          price: 5000.0,
          img: "90px-Backpack_Golden_Frying_Pan.png",
        },
      ],
    },
    hotWins: [
      {
        id: 1,
        playerName: "meowBot",
        playerAvatar: "download1.jpg",
        name: "tabeCoiner",
        price: 54,
        img: "90px-Backpack_Max's_Severed_Head.png",
      },
      {
        id: 2,
        playerName: "ProGamer",
        playerAvatar: "image1.png",
        name: "Strange Duck Billed Hatypus",
        price: 13.1,
        img: "90px-Backpack_Duck_Billed_Hatypus.png",
      },
    ],
    upgrade: { playerBetItems: [], targetBetItem: null, balanceUsed: 0 },
    marketplace: { itemsToSell: [] },
    deposit: { itemsToDeposit: [] },
    withdraw: { itemsToWithdraw: [] },
    minesGame: {
      isActive: false,
      betAmount: 1.0,
      mineCount: 4,
      gridSize: 5,
      grid: [],
      revealedCells: [],
      gemsFound: 0,
      currentMultiplier: 1.0,
    },
  });

  let state = getDefaultState();
  window.state = state; 

  // --- FUNÇÕES DE PERSISTÊNCIA DE DADOS ---
  const saveState = () => {
    localStorage.setItem("tf2betState", JSON.stringify(state));
  };
  const loadState = () => {
    const savedStateJSON = localStorage.getItem("tf2betState");
    if (savedStateJSON) {
      const savedState = JSON.parse(savedStateJSON);
      const defaultState = getDefaultState();
      state.user = savedState.user || defaultState.user;
      state.misc = savedState.misc || defaultState.misc;
      state.inventories.site =
        savedState.inventories.site || defaultState.inventories.site;
      state.inventories.external =
        savedState.inventories.external || defaultState.inventories.external;
      state.hotWins = savedState.hotWins || defaultState.hotWins;
      state.inventories.upgrade = defaultState.inventories.upgrade;
    }
  };

  // --- FUNÇÕES UTILITÁRIAS ---
  const showToast = (message, type = "info") => {
    const toastContainer = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("fade-out");
      toast.addEventListener("animationend", () => toast.remove());
    }, 3000);
  };
  const calculateTotalValue = (items) =>
    items.reduce((sum, item) => sum + item.price, 0);
  const renderItems = (
    container,
    items,
    onClickCallback,
    selectedItems = []
  ) => {
    container.innerHTML = "";
    items.forEach((item) => {
      const isSelected = selectedItems.some(
        (selected) => selected.id === item.id
      );
      const itemCard = document.createElement("div");
      itemCard.className = `item-card ${isSelected ? "selected" : ""}`;
      itemCard.innerHTML = `<img src="${item.img}" alt="${
        item.name
      }"><p class="item-name">${
        item.name
      }</p><p class="item-price">${item.price.toFixed(2)}</p>`;
      if (!isSelected) {
        itemCard.addEventListener("click", () => onClickCallback(item));
      }
      container.appendChild(itemCard);
    });
  };
  const updateHeaderUI = () => {
    userNameDisplay.textContent = state.user.name;
    userAvatarDisplay.src = state.user.avatar;
    userBalanceDisplay.innerHTML = `${state.user.balance.toFixed(2)} 🟠`;
  };

  // --- FUNÇÕES DE ATUALIZAÇÃO DE UI ---
  const renderHotWins = () => {
    winFeed.innerHTML = "";
    state.hotWins.forEach((win) => {
      const winElement = document.createElement("div");
      winElement.className = "win-item";
      winElement.innerHTML = `
            <img src="${win.playerAvatar}" alt="${win.playerName}" class="win-avatar">
            <div class="win-details">
                <p class="win-player">${win.playerName}</p>
                <p class="win-item-name">won a <strong class="win-item-value">${win.name}</strong></p>
            </div>
            <img src="${win.img}" alt="${win.name}" class="win-item-img">
        `;
      winFeed.appendChild(winElement);
    });
  };
  const updateUpgraderState = () => {
    const playerItemsValue = calculateTotalValue(state.upgrade.playerBetItems);
    const playerBetTotalValue = playerItemsValue + state.upgrade.balanceUsed;
    const targetBetValue = state.upgrade.targetBetItem
      ? state.upgrade.targetBetItem.price
      : 0;
    playerUpgradeValueDisplay.textContent = `${playerBetTotalValue.toFixed(
      2
    )} 🟠`;
    targetUpgradeValueDisplay.textContent = `${targetBetValue.toFixed(2)} 🟠`;
    let chance = 0;
    if (targetBetValue > 0 && playerBetTotalValue > 0) {
      chance = (playerBetTotalValue / targetBetValue) * 95;
      chance = Math.min(chance, 95);
    }
    chanceDisplay.textContent = `${chance.toFixed(2)}%`;
    chanceCircle.style.background = `conic-gradient(#e74c3c ${chance}%, #2c2f36 ${chance}%)`;
    if (playerBetTotalValue <= 0 || !state.upgrade.targetBetItem) {
      upgradeBtn.disabled = true;
      upgradeBtn.textContent = "Select Items";
    } else if (playerBetTotalValue > targetBetValue) {
      upgradeBtn.disabled = true;
      upgradeBtn.textContent = "Deposit cannot exceed amount";
    } else {
      upgradeBtn.disabled = false;
      upgradeBtn.textContent = "⚡ Upgrade";
    }
    const targetBoxHeader = document
      .querySelector("#target-upgrade-slot")
      .parentElement.querySelector(".box-header");
    let clearTargetBtn = targetBoxHeader.querySelector(".btn-clear-target");
    if (state.upgrade.targetBetItem && !clearTargetBtn) {
      clearTargetBtn = document.createElement("button");
      clearTargetBtn.textContent = "Clear";
      clearTargetBtn.className = "btn-clear btn-clear-target";
      clearTargetBtn.onclick = clearTargetBet;
      targetBoxHeader.appendChild(clearTargetBtn);
    } else if (!state.upgrade.targetBetItem && clearTargetBtn) {
      clearTargetBtn.remove();
    }
    renderItems(playerUpgradeSlot, state.upgrade.playerBetItems, () => {});
    targetUpgradeSlot.innerHTML = "";
    if (state.upgrade.targetBetItem)
      renderItems(targetUpgradeSlot, [state.upgrade.targetBetItem], () => {});
    const allBetItems = [
      ...state.upgrade.playerBetItems,
      state.upgrade.targetBetItem,
    ].filter(Boolean);
    renderItems(
      siteInventoryGrid,
      state.inventories.site,
      handlePlayerItemClick,
      allBetItems
    );
    renderItems(
      upgradeItemGrid,
      state.inventories.upgrade,
      handleTargetItemClick,
      [state.upgrade.targetBetItem].filter(Boolean)
    );
  };
  const updateMarketplaceState = () => {
    if (marketplaceView.classList.contains("hidden")) return;
    const sellValue = calculateTotalValue(state.marketplace.itemsToSell);
    marketplaceSellValue.textContent = `${sellValue.toFixed(2)} 🟠`;
    confirmSellBtn.disabled = state.marketplace.itemsToSell.length === 0;
    confirmSellBtn.textContent =
      state.marketplace.itemsToSell.length > 0
        ? `Sell ${state.marketplace.itemsToSell.length} Items`
        : "Select Items";
    renderItems(
      marketplaceInventoryGrid,
      state.inventories.site,
      handleMarketplaceItemClick,
      state.marketplace.itemsToSell
    );
    renderItems(
      marketplaceSellSlot,
      state.marketplace.itemsToSell,
      handleMarketplaceItemClick
    );
  };
  const updateDepositModalState = () => {
    if (depositItemsModal.classList.contains("hidden")) return;
    const depositValue = calculateTotalValue(state.deposit.itemsToDeposit);
    confirmDepositBtn.disabled = state.deposit.itemsToDeposit.length === 0;
    confirmDepositBtn.innerHTML =
      state.deposit.itemsToDeposit.length > 0
        ? `<span>Deposit ${
            state.deposit.itemsToDeposit.length
          } items (${depositValue.toFixed(2)} 🟠)</span>`
        : `<span>Select items to deposit</span>`;
    renderItems(
      depositInventoryGrid,
      state.inventories.external,
      handleDepositItemClick,
      state.deposit.itemsToDeposit
    );
  };
  const updateWithdrawModalState = () => {
    if (withdrawModal.classList.contains("hidden")) return;
    const withdrawValue = calculateTotalValue(state.withdraw.itemsToWithdraw);
    confirmWithdrawBtn.disabled = state.withdraw.itemsToWithdraw.length === 0;
    confirmWithdrawBtn.innerHTML =
      state.withdraw.itemsToWithdraw.length > 0
        ? `<span>Withdraw ${
            state.withdraw.itemsToWithdraw.length
          } items (${withdrawValue.toFixed(2)} 🟠)</span>`
        : `<span>Select items to withdraw</span>`;
    renderItems(
      withdrawInventoryGrid,
      state.inventories.site,
      handleWithdrawItemClick,
      state.withdraw.itemsToWithdraw
    );
  };
  const updateReferralUI = () => {
    if (state.misc.referralCodeUsed) {
      referralCodeInput.disabled = true;
      applyReferralBtn.disabled = true;
      referralCodeInput.placeholder = "Code already used";
      applyReferralBtn.textContent = "USED";
    }
  };
  const updateSecretCodeUI = () => {
    if (state.misc.secretCodeClaimed) {
      secretCodeInput.disabled = true;
      applySecretCodeBtn.disabled = true;
      secretCodeInput.placeholder = "Secret code claimed!";
      applySecretCodeBtn.textContent = "CLAIMED";
    }
  };
  const updateMinesUI = () => {
    const game = state.minesGame;
    gemsFoundDisplay.textContent = game.gemsFound;
    const nextMult = calculateMinesMultiplier(game.gemsFound + 1);
    nextMultiplierDisplay.textContent = nextMult.toFixed(2) + "x";
    if (game.isActive) {
      minesStartGameBtn.textContent =
        game.gemsFound > 0
          ? `Cash Out (${(game.betAmount * game.currentMultiplier).toFixed(2)})`
          : "Select a tile";
      minesStartGameBtn.classList.toggle("cashout", game.gemsFound > 0);
    } else {
      minesStartGameBtn.textContent = "Start New Game";
      minesStartGameBtn.classList.remove("cashout");
    }
    const controlsDisabled = game.isActive;
    document
      .querySelector(".mines-controls")
      .querySelectorAll("input, button:not(#mines-start-game-btn)")
      .forEach((el) => (el.disabled = controlsDisabled));
  };
  const renderMinesGrid = () => {
    minesGridContainer.innerHTML = "";
    const { gridSize, isActive } = state.minesGame;
    minesGridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
      const cell = document.createElement("div");
      cell.className = "mine-cell";
      cell.dataset.index = i;
      if (isActive) {
        cell.addEventListener("click", handleCellClick);
      } else {
        cell.classList.add("disabled");
      }
      minesGridContainer.appendChild(cell);
    }
  };
  function updateAllViews() {
    updateUpgraderState();
    updateMarketplaceState();
    updateHeaderUI();
    renderHotWins();
    renderMinesGrid();
    updateMinesUI();
  }

  // --- HANDLERS DE AÇÕES ---
  const handlePlayerItemClick = (item) => {
    if (state.misc.isUpgrading) return;
    state.upgrade.playerBetItems.push(item);
    updateUpgraderState();
  };
  const handleTargetItemClick = (item) => {
    if (state.misc.isUpgrading) return;
    state.upgrade.targetBetItem = item;
    updateUpgraderState();
  };
  const clearPlayerBet = () => {
    if (state.misc.isUpgrading) return;
    state.user.balance += state.upgrade.balanceUsed;
    state.upgrade.balanceUsed = 0;
    state.upgrade.playerBetItems = [];
    balanceBetInput.value = "";
    updateAllViews();
    saveState();
  };
  const clearTargetBet = () => {
    if (state.misc.isUpgrading) return;
    state.upgrade.targetBetItem = null;
    updateUpgraderState();
  };
  const addBalanceToBet = () => {
    if (state.misc.isUpgrading) return;
    const amount = parseFloat(balanceBetInput.value);
    if (isNaN(amount) || amount <= 0 || amount > state.user.balance) {
      showToast("Invalid or insufficient amount.", "error");
      return;
    }
    state.user.balance -= amount;
    state.upgrade.balanceUsed += amount;
    balanceBetInput.value = "";
    updateAllViews();
    saveState();
  };
  const handleMarketplaceItemClick = (item) => {
    const isSelected = state.marketplace.itemsToSell.some(
      (i) => i.id === item.id
    );
    if (isSelected) {
      state.marketplace.itemsToSell = state.marketplace.itemsToSell.filter(
        (i) => i.id !== item.id
      );
    } else {
      state.marketplace.itemsToSell.push(item);
    }
    updateMarketplaceState();
  };
  const handleDepositItemClick = (item) => {
    const isSelected = state.deposit.itemsToDeposit.some(
      (i) => i.id === item.id
    );
    if (isSelected) {
      state.deposit.itemsToDeposit = state.deposit.itemsToDeposit.filter(
        (i) => i.id !== item.id
      );
    } else {
      state.deposit.itemsToDeposit.push(item);
    }
    updateDepositModalState();
  };
  const handleWithdrawItemClick = (item) => {
    const isSelected = state.withdraw.itemsToWithdraw.some(
      (i) => i.id === item.id
    );
    if (isSelected) {
      state.withdraw.itemsToWithdraw = state.withdraw.itemsToWithdraw.filter(
        (i) => i.id !== item.id
      );
    } else {
      state.withdraw.itemsToWithdraw.push(item);
    }
    updateWithdrawModalState();
  };

  // --- LÓGICA DO MINES ---
  const calculateMinesMultiplier = (gems) => {
    if (gems === 0) return 1.0;
    const { gridSize, mineCount } = state.minesGame;
    const totalCells = gridSize * gridSize;
    if (totalCells - mineCount <= 0) return 1.0;
    return parseFloat(((0.95 * totalCells) / (totalCells - mineCount)) ** gems);
  };
  const startMinesGame = () => {
    const betAmount = parseFloat(minesBetAmountInput.value);
    const mineCount = parseInt(minesCountInput.value);
    const gridSize = state.minesGame.gridSize;
    if (betAmount <= 0 || isNaN(betAmount)) {
      showToast("Please enter a valid bet amount.", "error");
      return;
    }
    if (betAmount > state.user.balance) {
      showToast("Insufficient balance.", "error");
      return;
    }
    if (mineCount >= gridSize * gridSize) {
      showToast("Mine count must be less than the total grid size.", "error");
      return;
    }
    state.user.balance -= betAmount;
    const totalCells = gridSize * gridSize;
    const grid = Array(totalCells).fill("gem");
    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
      const index = Math.floor(Math.random() * totalCells);
      if (grid[index] !== "mine") {
        grid[index] = "mine";
        minesPlaced++;
      }
    }
    state.minesGame = {
      ...state.minesGame,
      isActive: true,
      betAmount,
      mineCount,
      gemsFound: 0,
      currentMultiplier: 1.0,
      revealedCells: [],
      grid,
    };
    updateHeaderUI();
    updateMinesUI();
    renderMinesGrid();
    saveState();
  };
  const handleCellClick = (event) => {
    const index = parseInt(event.target.dataset.index);
    if (
      state.minesGame.revealedCells.includes(index) ||
      !state.minesGame.isActive
    )
      return;
    state.minesGame.revealedCells.push(index);
    const cellType = state.minesGame.grid[index];
    event.target.classList.add("revealed", cellType);
    if (cellType === "mine") {
      showToast("You hit a mine! Game over.", "error");
      endMinesGame(false);
    } else {
      state.minesGame.gemsFound++;
      state.minesGame.currentMultiplier = calculateMinesMultiplier(
        state.minesGame.gemsFound
      );
      updateMinesUI();
      if (
        state.minesGame.gemsFound ===
        state.minesGame.gridSize * state.minesGame.gridSize -
          state.minesGame.mineCount
      ) {
        showToast("You found all the gems!", "success");
        cashOutMines();
      }
    }
  };
  const cashOutMines = () => {
    if (state.minesGame.gemsFound === 0 || !state.minesGame.isActive) return;
    const winnings =
      state.minesGame.betAmount * state.minesGame.currentMultiplier;
    state.user.balance += winnings;
    showToast(`You cashed out ${winnings.toFixed(2)}!`, "success");
    endMinesGame(true);
  };
  const endMinesGame = (cashedOut) => {
    state.minesGame.isActive = false;
    const cells = minesGridContainer.querySelectorAll(".mine-cell");
    state.minesGame.grid.forEach((type, index) => {
      if (type === "mine") {
        cells[index].classList.add("mine", "revealed");
      }
      cells[index].removeEventListener("click", handleCellClick);
    });
    setTimeout(() => {
      state.minesGame.gemsFound = 0;
      state.minesGame.currentMultiplier = 1.0;
      renderMinesGrid();
      updateMinesUI();
      updateHeaderUI();
      saveState();
    }, 2000);
  };

  // --- FUNÇÕES DE CONFIRMAÇÃO ---
  const runUpgrade = () => {
    if (state.misc.isUpgrading) return;
    const siteInventoryIds = new Set(
      state.inventories.site.map((item) => item.id)
    );
    const allItemsAvailable = state.upgrade.playerBetItems.every((betItem) =>
      siteInventoryIds.has(betItem.id)
    );
    if (!allItemsAvailable) {
      showToast("Error: One or more items are missing.", "error");
      clearPlayerBet();
      return;
    }
    state.misc.isUpgrading = true;
    upgradeBtn.disabled = true;
    upgradeBtn.textContent = "Spinning...";
    const playerBetTotalValue =
      calculateTotalValue(state.upgrade.playerBetItems) +
      state.upgrade.balanceUsed;
    const targetBetValue = state.upgrade.targetBetItem.price;
    const chance = Math.min((playerBetTotalValue / targetBetValue) * 95, 95);
    const roll = Math.random() * 100;
    const won = roll < chance;
    let animationDuration = 4800;
    if (spinnerContainer) {
      const finalAngle = (roll / 100) * 360;
      const randomSpins = 3 + Math.random() * 3;
      const totalRotation = 360 * randomSpins + finalAngle;
      spinnerContainer.style.transition = "none";
      spinnerContainer.style.transform = "rotate(0deg)";
      setTimeout(() => {
        spinnerContainer.classList.add("spinning");
        setTimeout(() => {
          spinnerContainer.classList.remove("spinning");
          spinnerContainer.style.transition =
            "transform 2.5s cubic-bezier(0.2, 0.9, 0.3, 1)";
          spinnerContainer.style.transform = `rotate(${totalRotation}deg)`;
        }, 2000);
      }, 20);
    } else {
      animationDuration = 1500;
    }
    setTimeout(() => {
      const betItemIds = state.upgrade.playerBetItems.map((i) => i.id);
      state.inventories.site = state.inventories.site.filter(
        (i) => !betItemIds.includes(i.id)
      );
      if (won) {
        showToast(
          `Success! You won the ${state.upgrade.targetBetItem.name}!`,
          "success"
        );
        if (state.upgrade.targetBetItem.name.includes("Coins")) {
          state.user.balance += state.upgrade.targetBetItem.price;
        } else {
          state.inventories.site.push(state.upgrade.targetBetItem);
        }
        state.inventories.upgrade = state.inventories.upgrade.filter(
          (i) => i.id !== state.upgrade.targetBetItem.id
        );
        const newWin = {
          id: Date.now(),
          playerName: state.user.name,
          playerAvatar: state.user.avatar,
          name: state.upgrade.targetBetItem.name,
          price: state.upgrade.targetBetItem.price,
          img: state.upgrade.targetBetItem.img,
        };
        state.hotWins.unshift(newWin);
        if (state.hotWins.length > 10) {
          state.hotWins.pop();
        }
      } else {
        showToast("Upgrade failed. Better luck next time!", "error");
      }
      state.upgrade.playerBetItems = [];
      state.upgrade.targetBetItem = null;
      state.upgrade.balanceUsed = 0;
      state.misc.isUpgrading = false;
      updateAllViews();
      saveState();
    }, animationDuration);
  };
  const sellItems = () => {
    if (state.misc.isUpgrading) return;
    const sellValue = calculateTotalValue(state.marketplace.itemsToSell);
    const soldItemIds = state.marketplace.itemsToSell.map((i) => i.id);
    state.user.balance += sellValue;
    state.inventories.site = state.inventories.site.filter(
      (i) => !soldItemIds.includes(i.id)
    );
    state.marketplace.itemsToSell = [];
    showToast(`Sold items for ${sellValue.toFixed(2)} 🟠!`, "success");
    updateAllViews();
    saveState();
  };
  const confirmDeposit = () => {
    if (state.misc.isUpgrading) return;
    const depositedItemIds = state.deposit.itemsToDeposit.map((i) => i.id);
    state.inventories.site.push(...state.deposit.itemsToDeposit);
    state.inventories.external = state.inventories.external.filter(
      (i) => !depositedItemIds.includes(i.id)
    );
    showToast(
      `${state.deposit.itemsToDeposit.length} items have been deposited.`,
      "success"
    );
    state.deposit.itemsToDeposit = [];
    closeModal(depositItemsModal);
    updateAllViews();
    saveState();
  };
  const confirmWithdraw = () => {
    if (state.misc.isUpgrading) return;
    const withdrawnItemIds = state.withdraw.itemsToWithdraw.map((i) => i.id);
    state.inventories.external.push(...state.withdraw.itemsToWithdraw);
    state.inventories.site = state.inventories.site.filter(
      (i) => !withdrawnItemIds.includes(i.id)
    );
    showToast(
      `${state.withdraw.itemsToWithdraw.length} items have been withdrawn.`,
      "success"
    );
    state.withdraw.itemsToWithdraw = [];
    closeModal(withdrawModal);
    updateAllViews();
    saveState();
  };

  // --- NAVEGAÇÃO E MODAIS ---
  const switchView = (viewToShow) => {
    if (state.misc.isUpgrading || state.minesGame.isActive) return;
    upgraderView.classList.add("hidden");
    marketplaceView.classList.add("hidden");
    minesView.classList.add("hidden");
    upgraderNavLink.classList.remove("active");
    marketplaceNavLink.classList.remove("active");
    minesNavLink.classList.remove("active");
    if (viewToShow === "upgrader") {
      upgraderView.classList.remove("hidden");
      upgraderNavLink.classList.add("active");
    } else if (viewToShow === "marketplace") {
      marketplaceView.classList.remove("hidden");
      marketplaceNavLink.classList.add("active");
      updateSecretCodeUI();
    } else if (viewToShow === "mines") {
      minesView.classList.remove("hidden");
      minesNavLink.classList.add("active");
    }
    updateAllViews();
  };
  const openModal = (modal) => modal.classList.remove("hidden");
  const closeModal = (modal) => modal.classList.add("hidden");

  // --- INICIALIZAÇÃO ---
  const attachEventListeners = () => {
    upgraderNavLink.addEventListener("click", () => switchView("upgrader"));
    marketplaceNavLink.addEventListener("click", () =>
      switchView("marketplace")
    );
    minesNavLink.addEventListener("click", () => switchView("mines"));
    clearPlayerBetBtn.addEventListener("click", clearPlayerBet);
    addBalanceToBetBtn.addEventListener("click", addBalanceToBet);
    upgradeBtn.addEventListener("click", runUpgrade);
    confirmSellBtn.addEventListener("click", sellItems);
    confirmDepositBtn.addEventListener("click", confirmDeposit);
    confirmWithdrawBtn.addEventListener("click", confirmWithdraw);
    minesStartGameBtn.addEventListener("click", () => {
      state.minesGame.isActive ? cashOutMines() : startMinesGame();
    });
    document.querySelectorAll(".grid-size-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.minesGame.isActive) return;
        document
          .querySelector(".grid-size-btn.active")
          .classList.remove("active");
        btn.classList.add("active");
        state.minesGame.gridSize = parseInt(btn.dataset.size);
      });
    });
    document.querySelectorAll(".preset-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.minesGame.isActive) return;
        minesCountInput.value = btn.dataset.mines;
      });
    });
    document.querySelector(".half-btn").addEventListener("click", () => {
      if (state.minesGame.isActive) return;
      minesBetAmountInput.value = (
        parseFloat(minesBetAmountInput.value) / 2
      ).toFixed(2);
    });
    document.querySelector(".double-btn").addEventListener("click", () => {
      if (state.minesGame.isActive) return;
      minesBetAmountInput.value = (
        parseFloat(minesBetAmountInput.value) * 2
      ).toFixed(2);
    });
    document.querySelector(".max-btn").addEventListener("click", () => {
      if (state.minesGame.isActive) return;
      minesBetAmountInput.value = state.user.balance.toFixed(2);
    });
    volumeBtn.addEventListener("click", () => {
      state.misc.musicPlaying = !state.misc.musicPlaying;
      if (state.misc.musicPlaying) {
        backgroundMusic.play().catch(() => {});
        volumeBtn.textContent = "🔊";
      } else {
        backgroundMusic.pause();
        volumeBtn.textContent = "🔇";
      }
    });
    document.querySelector(".btn-deposit").addEventListener("click", () => {
      updateReferralUI();
      openModal(depositModal);
    });
    userAvatarDisplay.addEventListener("click", () => {
      avatarPreview.src = state.user.avatar;
      openModal(profileModal);
    });
    tf2DepositOption.addEventListener("click", () => {
      closeModal(depositModal);
      openModal(depositItemsModal);
      updateDepositModalState();
    });
    withdrawBtn.addEventListener("click", () => {
      openModal(withdrawModal);
      updateWithdrawModalState();
    });
    allModals.forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal(modal);
      });
      const closeBtn = modal.querySelector(".close-btn");
      if (closeBtn) closeBtn.addEventListener("click", () => closeModal(modal));
    });
    saveProfileBtn.addEventListener("click", () => {
      const newName = document.getElementById("profile-name-input").value;
      if (newName.trim()) {
        state.user.name = newName.trim();
      }
      state.user.avatar = avatarPreview.src;
      updateHeaderUI();
      closeModal(profileModal);
      showToast("Profile saved!", "success");
      saveState();
    });
    avatarUploadInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        avatarPreview.src = URL.createObjectURL(file);
      }
    });
    applyReferralBtn.addEventListener("click", () => {
      const code = referralCodeInput.value.trim().toLowerCase();
      if (state.misc.referralCodeUsed) {
        showToast("You have already used a referral code.", "error");
        return;
      }
      if (code === "free ref") {
        const freeRefs = Array(5)
          .fill(null)
          .map((_, i) => ({
            id: `ref-${Date.now()}-${i}`,
            name: "Refined Metal",
            price: 0.03,
            img: "Backpack_Refined_Metal.png",
          }));
        state.inventories.site.push(...freeRefs);
        state.misc.referralCodeUsed = true;
        showToast(
          "Success! 5 Refined Metals have been added to your inventory.",
          "success"
        );
        updateAllViews();
        saveState();
        updateReferralUI();
      } else {
        showToast("Invalid referral code.", "error");
      }
    });
    applySecretCodeBtn.addEventListener("click", () => {
      if (state.misc.secretCodeClaimed) {
        showToast("You have already claimed the secret code prize.", "error");
        return;
      }
      const userInput = secretCodeInput.value.trim().toLowerCase();
      const correctCode =
        state.hotWins[state.hotWins.length - 1].name.toLowerCase();
      if (userInput === correctCode) {
        state.user.balance += 100.0;
        state.misc.secretCodeClaimed = true;
        showToast("Secret code accepted! You received 100.00 coins.", "success");
        updateAllViews();
        saveState();
        updateSecretCodeUI();
      } else {
        showToast("Invalid secret code.", "error");
      }
    });
  };

  const init = () => {
    loadState();
    updateAllViews();
    attachEventListeners();
    switchView("upgrader");
  };

  init();
});
