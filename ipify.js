fetch('https://geo.ipify.org/api/v2/country?apiKey=at_X8JdVO05AsQNtfl0iJK2vjbPFWqMK&ipAddress=8.8.8.8')
    .then(results => results.json())
    .then(data => console.log(data.ip))

