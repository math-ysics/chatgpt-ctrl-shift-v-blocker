// ==UserScript==
// @name         ChatGPT - Block Ctrl+Shift+V voice shortcut
// @description  Prevent ChatGPT from hijacking Ctrl+Shift+V
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function blockCtrlShiftV(event) {
    const isCtrlShiftV =
      event.ctrlKey &&
      event.shiftKey &&
      !event.altKey &&
      !event.metaKey &&
      event.key.toLowerCase() === "v";

    if (!isCtrlShiftV) return;

    // Stop ChatGPT from seeing the shortcut.
    // Do not call preventDefault(), so Chrome/Windows can still handle it.
    event.stopImmediatePropagation();
  }

  for (const eventName of ["keydown", "keypress", "keyup"]) {
    window.addEventListener(eventName, blockCtrlShiftV, true);
    document.addEventListener(eventName, blockCtrlShiftV, true);
    document.documentElement.addEventListener(eventName, blockCtrlShiftV, true);
  }
})();