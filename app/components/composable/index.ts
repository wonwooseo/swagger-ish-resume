import type { ResumeData } from '~/types';

export const useResumeLoader = () => {
  const appConfig = useAppConfig();

  const loadResumeByLocale = async (locale: string): Promise<ResumeData> => {
    const localeConfig = appConfig.resume.locales.find(l => l.code === locale);

    if (!localeConfig) {
      throw new Error(`Locale ${locale} not found`);
    }

    try {
      const result = await queryCollection('resumes').
        where('id', '=', `resumes/${localeConfig.filename}`).
        first();
      return result as unknown as ResumeData;
    } catch (error) {
      console.error(`Failed to load resume for locale ${locale}:`, error);
      throw error;
    }
  };

  return {
    loadResumeByLocale,
    availableLocales: appConfig.resume.locales,
    defaultLocale: appConfig.resume.defaultLocale,
  };
};
