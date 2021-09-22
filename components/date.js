import { parseISO, format, formatDistance } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'dd.LL.yyyy')}</time>
  // return <time dateTime={dateString}>{formatDistance(new Date, date), new Date()}</time>
}
