export function ChooseTimeOfDay() {
    let today = new Date(),
        hour = today.getHours();
    if (hour >= 6 && hour <= 12) {
        return 'morning';
    } else if (hour > 12 && hour <= 18) {
        return 'day';
    } else if (hour > 18 && hour <= 24) {
        return 'evening';
    } else {
        return 'night';
    }
}