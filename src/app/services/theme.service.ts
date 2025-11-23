import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Use Angular signals for reactive theme management
  private themeSignal = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Apply theme whenever it changes
    effect(() => {
      const theme = this.themeSignal();
      this.applyTheme(theme);
    });
  }

  // Get the current theme as a signal
  get theme() {
    return this.themeSignal.asReadonly();
  }

  // Get the current theme value
  get currentTheme(): Theme {
    return this.themeSignal();
  }

  // Toggle between light and dark themes
  toggleTheme(): void {
    const newTheme = this.themeSignal() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  // Set a specific theme
  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
    localStorage.setItem('theme', theme);
  }

  // Get initial theme from localStorage or system preference
  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  // Apply theme to document
  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
    }
  }

  // Check if current theme is dark
  isDark(): boolean {
    return this.themeSignal() === 'dark';
  }

  // Check if current theme is light
  isLight(): boolean {
    return this.themeSignal() === 'light';
  }
}
