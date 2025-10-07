@Injectable({ providedIn: 'root' })
export class LocalizationService {
  private currentLang = new BehaviorSubject<string>('en');
  private translations: any = {};

  public currentLang$ = this.currentLang.asObservable();

  constructor(private http: HttpClient) {
    this.loadTranslations('en');
  }

  setLanguage(lang: string): void {
    this.loadTranslations(lang);
    this.currentLang.next(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  private loadTranslations(lang: string): void {
    this.http.get(`/assets/i18n/${lang}.json`).subscribe(
      translations => this.translations = translations,
      error => console.error('Error loading translations:', error)
    );
  }

  translate(key: string): string {
    return this.getNestedTranslation(key) || key;
  }

  private getNestedTranslation(key: string): string {
    return key.split('.').reduce((obj, i) => obj?.[i], this.translations);
  }
}
