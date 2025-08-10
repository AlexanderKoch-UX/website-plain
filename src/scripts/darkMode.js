// Automatische Aktivierung des Dark Mode
// Dieses Skript wird beim Laden der Seite ausgeführt und aktiviert den Dark Mode

// Funktion zum Aktivieren des Dark Mode
function enableDarkMode() {
  // Füge die dark-mode Klasse zum HTML-Element hinzu
  document.documentElement.classList.add('dark-mode');
  
  // Speichere die Einstellung im localStorage
  localStorage.setItem('darkMode', 'true');
}

// Aktiviere den Dark Mode beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
  enableDarkMode();
});

// Exportiere die Funktion für die Verwendung in anderen Dateien
export { enableDarkMode };