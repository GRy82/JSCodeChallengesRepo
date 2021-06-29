function timeConversion(s) {
    let time = s.substring(0, 8);
    let hour = s.substring(0, 2);
    let suffix = s.slice(-2);

    if(hour === '12' && suffix === 'AM') return time.replace(hour, '00');
    if(hour === '12' && suffix === 'PM') return time;

    if(s.endsWith('PM') && time !== '12:00:00'){
        hour = parseInt(hour) + 12;
        hour = hour < 10 ? '0' + hour.toString() : hour.toString();
        time = hour + time.slice(2);
    }

    return time;
}

console.log(timeConversion('02:34:00PM'));