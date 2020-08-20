class DateConverter {

    toReadableDate(dateFormatISO) {
        var date = new Date(dateFormatISO);
        var now = new Date();
        var oneDayMs = 1000 * 60 * 60 * 24;

        var diff = now.getTime() - date.getTime();
        if (diff < oneDayMs) {
            return 'dzisiaj, ' + date.toLocaleTimeString();
        } else if (diff < oneDayMs * 2) {
            return 'wczoraj, ' + date.toLocaleTimeString();
        } else if (diff < oneDayMs * 3) {
            return 'przedwczoraj, ' + date.toLocaleTimeString();
        }
        return date.toLocaleString();
    }
}
export default new DateConverter();