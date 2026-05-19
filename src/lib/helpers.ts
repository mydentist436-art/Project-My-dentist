export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{5})(\d{5})/, '$1 $2')
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
