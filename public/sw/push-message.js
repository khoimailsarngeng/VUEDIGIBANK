self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Push Recieved..." , data);
    var notificationTitle = 'Background Message Title';
    var notificationOptions = {
        body: 'Background Message body.',
        icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
    };
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});