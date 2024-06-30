export function timeAgo(date: string): string {
    const now = new Date();
    const diffInMs = now.getTime() - new Date(date).getTime();

    const diffInSecs = Math.floor(diffInMs / 1000)
    const diffInMin = Math.floor(diffInSecs / 60)
    const diffInHour = Math.floor(diffInMin / 60)
    const diffInDays = Math.floor(diffInHour / 24)

    if (diffInSecs < 60) {
        return diffInSecs + "s";
    } else if (diffInMin < 60) {
        return diffInMin + "min";
    } else if (diffInHour < 24) {
        return diffInHour + "h";
    } else if (diffInDays === 1) {
        return "Yesterday";
    } else {
        return diffInDays + " days";
    }
}