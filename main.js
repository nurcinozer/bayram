var message = document.getElementById("message-js");
var messageBtn = document.getElementById("message-btn");

var messages = [
    'Çılgınca esen rüzgar, kavurucu güneşli terleten günler, yıldızlarla dolu bir dünyadır bayramlar, Ramazan Bayramınız mübarek olsun her şey istediğiniz gibi olsun inşallah.',
    'Bir bayram gülüşü savur göklere, eski zamanlara gülücükler getirsin, öyle içten öyle samimi, gözyaşlarını bile tebessüme çevirsin. İyi bayramlar!',
    'Bir bayram gülüşü savur göklere, eski zamanlara gülücükler getirsin, öyle içten öyle samimi, gözyaşlarını bile tebessüme çevirsin. İyi bayramlar!',
    'Bugün ellerinizi her zamankinden daha çok açın. Avucunuza melekler gül koysun, yüreğiniz coşsun. Ramazan Bayramınız hayırlara vesile olsun.',
    'Bu bayram belki birbirimizden uzağız ama gönüllerimiz daima bir kalacak. Daha mutlu bayramlarda bir arada olmak ümidiyle… Bayramınız Mübarek Olsun',
    'Bugün dualarınızı her zamankinden daha çok yapın, koruyucu meleklerini avuçlarınızın içine çiçekler döksün, kalplerinize bedeninize ilham versin. Bayramları en hayırlı şekilde geçirmeyi nasip etsin bizlere. Ramazan Bayramınızı kutlarım.',
    'Kalplerde sevgi olsun, gözlerimiz ışık dolsun. Ramazan Bayramınız kutlu olsun',
    'Tatlı rüzgarların yaladığı kavak ağaçlarının altına saçılan bonbon taneleri sizin olsun, bayramınız mübarek olsun.',
    'Telefonum telefonunuzun bayramını en içten dileklerle kutlar, uzun batarya ömürleri diler.',
    'Tanrıdan su istedik, denizleri; çiçek istedik, kırları; dost istedik bu numarayı verdi… İyi bayramlar',
    'Bugün Bayram! Mübarek Ramazan Bayramı. Tüm inananlar birbirlerine daha çok yakınlaşsın, dargınlıklar ortadan kalksın, kardeşlik ve dostluk duyguları daha da kuvvetlensin. Tüm insanlar neşe ve mutluluk denizinde yüzsün.',
    'Bayramın sevgi, barış, kardeşlik ve huzur getirmesini diliyor, mübarek Ramazan Bayramınızı en kalbi duygularımla kutluyorum.',
    'Dostluğu, sevgiyi ve geleceği.. Hüznümüzü, acımızı, yalnızlığımızı paylaştığımız; birlik ve beraberliğimizi, kardeşlik ve dostluğumuzu en sıcak şekilde hissedeceğimiz Ramazan Bayramınızı tebrik eder, mutluluklar dilerim.'
];

messageBtn.onclick = function randomMessage() {
    var rand = messages[Math.floor(Math.random() * messages.length)];
    message.innerHTML = rand;
};

function copyToClipboard(id) {
    var from = document.getElementById(id);
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Bayram mesajınız kopyalandı!");
}