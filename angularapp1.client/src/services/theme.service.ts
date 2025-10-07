@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);
  public isDarkTheme$ = this.darkTheme.asObservable();

  constructor() {
    this.loadThemePreference();
  }

  toggleTheme(): void {
    const newTheme = !this.darkTheme.value;
    this.darkTheme.next(newTheme);
    this.applyTheme(newTheme);
    localStorage.setItem('darkTheme', JSON.stringify(newTheme));
  }

  private loadThemePreference(): void {
    const saved = localStorage.getItem('darkTheme');
    const isDark = saved ? JSON.parse(saved) : 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    this.darkTheme.next(isDark);
    this.applyTheme(isDark);
  }

  private applyTheme(isDark: boolean): void {
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}
