function timeConversion(s) {
    let [hour, minute, secondPeriod] = s.split(':')

    const period = secondPeriod.slice(2)  // AM atau PM
    const second = secondPeriod.slice(0, 2)

    let hourNum = parseInt(hour)

    if (period === 'AM') {
        if (hourNum === 12) hour = '00' // 12 AM jadi 00
    } else {
        if (hourNum !== 12) hour = String(hourNum + 12) // selain 12 PM, tambah 12
    }

    return `${hour.padStart(2, '0')}:${minute}:${second}`
}

console.log(timeConversion('12:40:03AM')) // 19:05:45