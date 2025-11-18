import { format, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

export const formatDate = (
  date: string | Date,
  formatStr: string = 'dd MMM yyyy',
  locale: string = 'tr'
): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  const localeMap: Record<string, Locale> = {
    tr,
  }
  
  return format(dateObj, formatStr, {
    locale: localeMap[locale] || undefined,
  })
}

