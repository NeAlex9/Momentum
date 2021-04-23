class DateTime {

    constructor(timeClass, dateClass) {
        this.time = document.querySelector('.' + timeClass);
        this.date = document.querySelector('.' + dateClass);
    }

    addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    ShowTime() {
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();

        this.time.innerHTML = `${hour}:${this.addZero(min)}:${this.addZero(sec)}`;
        setTimeout(this.ShowTime, 1000);
    }

    ShowDate() {
        let today = new Date()
        let month = today.toLocaleString('en-GB', {month: 'long'});
        let dayWeek = today.toLocaleString('en-GB', {weekday: 'short'});
        let dayNum = today.toLocaleString('en-GB', {day: '2-digit'});

        this.date.innerHTML = dayWeek + ', ' + dayNum + ' ' + month;
        setTimeout(this.ShowDate, 1000);
    }

    ShowDateTime() {
        /*this.ShowDate();
        this.ShowTime();*/
        setTimeout(this.ShowDateTime, 1000);
    }
}

// class BackgroundChanger {
//     constructor() {
//         this.images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg',
//             '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg',
//             '19.jpg', '20.jpg'];
//         this.randomIndexesForImages = [];
//         this.currentImageIndex = 0;
//         this.GenerateRandomIndexes();
//     }
//
//     GetRandomNumber(min, max) {
//         let rand = min + Math.random() * (max - min);
//         return Math.floor(rand);
//     }
//
//     GenerateRandomIndexes() {
//         while (this.randomIndexesForImages.length !== 20) {
//             let number = this.GetRandomNumber(0, 20);
//             if (this.randomIndexesForImages.indexOf(number) === -1)
//                 this.randomIndexesForImages.push(number);
//         }
//     }
//
//     SetBackground() {
//         let today = new Date(),
//             hour = today.getHours();
//         if (hour >= 6 && hour <= 12) {
//             document.body.style.backgroundImage = "url('assets/images/morning/" +
//                 this.images[this.randomIndexesForImages[currentImageIndex]];
//             greeting.textContent = 'Good Morning, ';
//         } else if (hour > 12 && hour <= 18) {
//             document.body.style.backgroundImage = "url('assets/images/day/" +
//                 this.images[this.randomIndexesForImages[currentImageIndex]];
//             greeting.textContent = 'Good Afternoon, ';
//         } else if (hour > 18 && hour <= 24) {
//             document.body.style.backgroundImage = "url('assets/images/evening/" +
//                 this.images[this.randomIndexesForImages[currentImageIndex]];
//             greeting.textContent = 'Good Evening, ';
//         } else {
//             document.body.style.backgroundImage = "url('assets/images/night/" +
//                 this.images[this.randomIndexesForImages[currentImageIndex]];
//             greeting.textContent = 'Good night, ';
//         }
//     }
//
//     ChangeBackground(){
//         this.currentImageIndex = (this.currentImageIndex > 19) ? this.currentImageIndex = 0 : this.currentImageIndex++;
//         this.SetBackground();
//     }
//
// }
